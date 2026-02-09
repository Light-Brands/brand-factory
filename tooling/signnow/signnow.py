#!/usr/bin/env python3
"""SignNow API CLI - integrated with brand-factory.

Knows about legal-vault structure, document naming conventions,
and default sender (dan@lightbrands.ai).

Usage:
    # Authenticate (reads creds from .env.signnow)
    python signnow.py auth

    # Upload a document
    python signnow.py upload /path/to/document.pdf

    # Upload from legal-vault by path shorthand
    python signnow.py upload legal-vault/agreements/executive-partner-agreement_light-brands-consulting_2026-02-07.md

    # Send for signing (sender defaults to dan@lightbrands.ai)
    python signnow.py send <document_id> --to signer@email.com

    # Upload + send in one step
    python signnow.py send-doc /path/to/contract.pdf --to signer@email.com

    # Check signing status
    python signnow.py status <document_id>

    # List all documents
    python signnow.py list

    # Download signed document (auto-names to legal-vault convention)
    python signnow.py download <document_id> --to-vault

    # View signing tracker
    python signnow.py tracker
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime
from pathlib import Path

import httpx

# Paths relative to this script
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent
ENV_FILE = PROJECT_ROOT / ".env.signnow"
TOKEN_FILE = SCRIPT_DIR / ".token"
TRACKER_FILE = SCRIPT_DIR / ".tracker.json"
LEGAL_VAULT = PROJECT_ROOT / "legal-vault"

BASE_URL = "https://api.signnow.com"
DEFAULT_SENDER = "dan@lightbrands.ai"


# ---------------------------------------------------------------------------
# Environment & Auth
# ---------------------------------------------------------------------------

def load_env():
    env = {}
    if ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, value = line.split("=", 1)
                env[key.strip()] = value.strip()
    return env


def get_stored_token():
    if TOKEN_FILE.exists():
        data = json.loads(TOKEN_FILE.read_text())
        return data.get("access_token")
    return None


def store_token(token_data):
    TOKEN_FILE.write_text(json.dumps(token_data, indent=2))


def get_token():
    token = get_stored_token()
    if not token:
        # Try auto-auth from env
        env = load_env()
        email = env.get("SIGNNOW_EMAIL")
        password = env.get("SIGNNOW_PASSWORD")
        if email and password:
            print("Token missing — auto-authenticating from .env.signnow...")
            token = do_auth(env, email, password)
        else:
            print("Error: No token. Run: python signnow.py auth")
            sys.exit(1)
    return token


def do_auth(env, email, password):
    basic_token = env.get("SIGNNOW_BASIC_AUTH_TOKEN", "")
    resp = httpx.post(
        f"{BASE_URL}/oauth2/token",
        headers={
            "Authorization": f"Basic {basic_token}",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data={
            "username": email,
            "password": password,
            "grant_type": "password",
            "scope": "*",
        },
    )
    if resp.status_code == 200:
        token_data = resp.json()
        store_token(token_data)
        print(f"Authenticated. Token expires in {token_data.get('expires_in', '?')}s")
        return token_data["access_token"]
    else:
        print(f"Auth failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


# ---------------------------------------------------------------------------
# Tracker — local record of uploads/invites tied to legal-vault paths
# ---------------------------------------------------------------------------

def load_tracker():
    if TRACKER_FILE.exists():
        return json.loads(TRACKER_FILE.read_text())
    return {"documents": {}}


def save_tracker(tracker):
    TRACKER_FILE.write_text(json.dumps(tracker, indent=2))


def track_upload(doc_id, filename, source_path=None):
    tracker = load_tracker()
    tracker["documents"][doc_id] = {
        "filename": filename,
        "source_path": str(source_path) if source_path else None,
        "uploaded_at": datetime.now().isoformat(),
        "invites": [],
        "status": "uploaded",
    }
    save_tracker(tracker)


def track_invite(doc_id, to_email, invite_result):
    tracker = load_tracker()
    if doc_id in tracker["documents"]:
        tracker["documents"][doc_id]["invites"].append({
            "to": to_email,
            "sent_at": datetime.now().isoformat(),
            "result": invite_result,
        })
        tracker["documents"][doc_id]["status"] = "pending_signature"
    save_tracker(tracker)


# ---------------------------------------------------------------------------
# Resolve file path — supports legal-vault shorthand
# ---------------------------------------------------------------------------

def resolve_file(file_arg):
    p = Path(file_arg)
    if p.exists():
        return p.resolve()

    # Try relative to project root
    from_root = PROJECT_ROOT / file_arg
    if from_root.exists():
        return from_root.resolve()

    # Try inside legal-vault
    from_vault = LEGAL_VAULT / file_arg
    if from_vault.exists():
        return from_vault.resolve()

    print(f"Error: File not found: {file_arg}")
    print(f"  Checked: {p}")
    print(f"  Checked: {from_root}")
    print(f"  Checked: {from_vault}")
    sys.exit(1)


# ---------------------------------------------------------------------------
# API Commands
# ---------------------------------------------------------------------------

def cmd_auth(args):
    env = load_env()
    email = args.email or env.get("SIGNNOW_EMAIL")
    password = args.password or env.get("SIGNNOW_PASSWORD")

    if not email or not password:
        print("Error: Need --email and --password, or set SIGNNOW_EMAIL/SIGNNOW_PASSWORD in .env.signnow")
        sys.exit(1)

    token = do_auth(env, email, password)
    print(f"Access token: {token[:20]}...")


def cmd_upload(args):
    token = get_token()
    filepath = resolve_file(args.file)

    print(f"Uploading {filepath.name}...")

    with open(filepath, "rb") as f:
        if args.extract_fields:
            endpoint = f"{BASE_URL}/document/fieldextract"
        else:
            endpoint = f"{BASE_URL}/document"

        resp = httpx.post(
            endpoint,
            headers={"Authorization": f"Bearer {token}"},
            files={"file": (filepath.name, f, "application/pdf")},
            timeout=120,
        )

    if resp.status_code in (200, 201):
        data = resp.json()
        doc_id = data.get("id", "unknown")
        print(f"Upload successful!")
        print(f"Document ID: {doc_id}")

        # Track it
        track_upload(doc_id, filepath.name, filepath)
        return doc_id
    else:
        print(f"Upload failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


def cmd_send(args):
    """Send a signing invite. Defaults sender to dan@lightbrands.ai."""
    token = get_token()
    sender = args.sender or DEFAULT_SENDER

    if args.role:
        invite_data = {
            "from": sender,
            "to": [
                {
                    "email": args.to,
                    "role": args.role,
                    "order": args.order or 1,
                    "reassign": "0",
                    "decline_by_signature": "0",
                }
            ],
        }
        if args.subject:
            invite_data["to"][0]["subject"] = args.subject
        if args.message:
            invite_data["to"][0]["message"] = args.message
        if args.expiration_days:
            invite_data["to"][0]["expiration_days"] = args.expiration_days
    else:
        invite_data = {
            "from": sender,
            "to": args.to,
        }
        if args.subject:
            invite_data["subject"] = args.subject
        if args.message:
            invite_data["message"] = args.message

    print(f"Sending signing invite to {args.to} (from {sender})...")

    resp = httpx.post(
        f"{BASE_URL}/document/{args.document_id}/invite",
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        json=invite_data,
        timeout=30,
    )

    if resp.status_code in (200, 201):
        data = resp.json()
        print(f"Invite sent successfully!")
        print(json.dumps(data, indent=2))
        track_invite(args.document_id, args.to, data)
    else:
        print(f"Invite failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


def cmd_send_doc(args):
    """Upload + send in one step."""
    token = get_token()
    filepath = resolve_file(args.file)

    # Upload
    print(f"Uploading {filepath.name}...")
    with open(filepath, "rb") as f:
        resp = httpx.post(
            f"{BASE_URL}/document",
            headers={"Authorization": f"Bearer {token}"},
            files={"file": (filepath.name, f, "application/pdf")},
            timeout=120,
        )

    if resp.status_code not in (200, 201):
        print(f"Upload failed ({resp.status_code}): {resp.text}")
        sys.exit(1)

    doc_id = resp.json().get("id")
    print(f"Uploaded — Document ID: {doc_id}")
    track_upload(doc_id, filepath.name, filepath)

    # Send invite
    sender = args.sender or DEFAULT_SENDER
    invite_data = {"from": sender, "to": args.to}
    if args.subject:
        invite_data["subject"] = args.subject
    if args.message:
        invite_data["message"] = args.message

    print(f"Sending signing invite to {args.to}...")
    resp = httpx.post(
        f"{BASE_URL}/document/{doc_id}/invite",
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        json=invite_data,
        timeout=30,
    )

    if resp.status_code in (200, 201):
        data = resp.json()
        print(f"Invite sent successfully!")
        print(json.dumps(data, indent=2))
        track_invite(doc_id, args.to, data)
    else:
        print(f"Invite failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


def cmd_status(args):
    token = get_token()

    resp = httpx.get(
        f"{BASE_URL}/document/{args.document_id}",
        headers={"Authorization": f"Bearer {token}"},
        timeout=30,
    )

    if resp.status_code == 200:
        data = resp.json()
        print(f"Document: {data.get('document_name', 'N/A')}")
        print(f"ID:       {data.get('id', 'N/A')}")
        print(f"Pages:    {data.get('page_count', 'N/A')}")
        print(f"Created:  {data.get('created', 'N/A')}")
        print(f"Updated:  {data.get('updated', 'N/A')}")

        field_invites = data.get("field_invites", [])
        if field_invites:
            print(f"\nSigning invites:")
            for inv in field_invites:
                print(f"  - {inv.get('signer_email', 'N/A')}: {inv.get('status', 'N/A')}")

        signatures = data.get("signatures", [])
        if signatures:
            print(f"\nSignatures ({len(signatures)}):")
            for sig in signatures:
                print(f"  - {sig.get('signer_email', 'N/A')}: signed")

        if not field_invites and not signatures:
            print(f"\nNo invites or signatures yet.")

        if args.full:
            print(f"\nFull response:")
            print(json.dumps(data, indent=2))
    else:
        print(f"Failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


def cmd_list(args):
    token = get_token()

    resp = httpx.get(
        f"{BASE_URL}/user/documentsv2",
        headers={"Authorization": f"Bearer {token}"},
        timeout=30,
    )

    if resp.status_code == 200:
        data = resp.json()
        documents = data if isinstance(data, list) else data.get("data", data.get("documents", []))

        if not documents:
            print("No documents found.")
            return

        print(f"{'ID':<45} {'Name':<45} {'Created'}")
        print("-" * 110)
        for doc in documents[:args.limit]:
            doc_id = doc.get("id", "N/A")
            name = doc.get("document_name", "N/A")
            created = doc.get("created", "N/A")
            print(f"{doc_id:<45} {name:<45} {created}")
    else:
        print(f"Failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


def cmd_download(args):
    token = get_token()

    if args.to_vault:
        # Auto-name following legal-vault convention
        output_dir = LEGAL_VAULT / "agreements"
        output_dir.mkdir(parents=True, exist_ok=True)
        date_str = datetime.now().strftime("%Y-%m-%d")
        output = output_dir / f"document_{args.document_id[:8]}_{date_str}_signed.pdf"
    else:
        output = Path(args.output) if args.output else Path(f"document_{args.document_id}.pdf")

    resp = httpx.get(
        f"{BASE_URL}/document/{args.document_id}/download?type=collapsed",
        headers={"Authorization": f"Bearer {token}"},
        timeout=120,
    )

    if resp.status_code == 200:
        output.write_bytes(resp.content)
        print(f"Downloaded to {output} ({len(resp.content)} bytes)")
    else:
        print(f"Download failed ({resp.status_code}): {resp.text}")
        sys.exit(1)


def cmd_tracker(args):
    """Show local tracker of uploads and invites."""
    tracker = load_tracker()
    docs = tracker.get("documents", {})

    if not docs:
        print("No tracked documents.")
        return

    print(f"{'ID':<45} {'File':<35} {'Status':<20} {'Invites'}")
    print("-" * 120)
    for doc_id, info in docs.items():
        filename = info.get("filename", "?")
        status = info.get("status", "?")
        invites = info.get("invites", [])
        invite_str = ", ".join(i.get("to", "?") for i in invites) if invites else "none"
        print(f"{doc_id:<45} {filename:<35} {status:<20} {invite_str}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="SignNow CLI — brand-factory integrated",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s auth
  %(prog)s upload legal-vault/agreements/contract.pdf
  %(prog)s send <doc_id> --to partner@company.com
  %(prog)s send-doc /path/to/contract.pdf --to partner@company.com
  %(prog)s status <doc_id>
  %(prog)s download <doc_id> --to-vault
  %(prog)s tracker
        """,
    )
    sub = parser.add_subparsers(dest="command", required=True)

    # auth
    p = sub.add_parser("auth", help="Authenticate (auto-reads .env.signnow)")
    p.add_argument("--email", help="Override email from env")
    p.add_argument("--password", help="Override password from env")

    # upload
    p = sub.add_parser("upload", help="Upload a document")
    p.add_argument("file", help="File path (absolute, relative, or legal-vault shorthand)")
    p.add_argument("--extract-fields", action="store_true", help="Extract text tag fields")

    # send (invite)
    p = sub.add_parser("send", help="Send signing invite for an existing document")
    p.add_argument("document_id", help="SignNow document ID")
    p.add_argument("--to", required=True, help="Signer email")
    p.add_argument("--sender", help=f"Sender email (default: {DEFAULT_SENDER})")
    p.add_argument("--role", help="Signer role (for field-based invite)")
    p.add_argument("--order", type=int, help="Signing order")
    p.add_argument("--subject", help="Email subject")
    p.add_argument("--message", help="Email message")
    p.add_argument("--expiration-days", type=int, help="Days until invite expires")

    # send-doc (upload + invite in one step)
    p = sub.add_parser("send-doc", help="Upload + send for signing in one step")
    p.add_argument("file", help="File path")
    p.add_argument("--to", required=True, help="Signer email")
    p.add_argument("--sender", help=f"Sender email (default: {DEFAULT_SENDER})")
    p.add_argument("--subject", help="Email subject")
    p.add_argument("--message", help="Email message")

    # status
    p = sub.add_parser("status", help="Get document signing status")
    p.add_argument("document_id", help="SignNow document ID")
    p.add_argument("--full", action="store_true", help="Show full JSON")

    # list
    p = sub.add_parser("list", help="List all SignNow documents")
    p.add_argument("--limit", type=int, default=20, help="Max to show")

    # download
    p = sub.add_parser("download", help="Download signed document")
    p.add_argument("document_id", help="SignNow document ID")
    p.add_argument("--output", "-o", help="Output file path")
    p.add_argument("--to-vault", action="store_true",
                   help="Save to legal-vault/agreements/ with proper naming")

    # tracker
    sub.add_parser("tracker", help="Show local upload/invite tracker")

    args = parser.parse_args()

    commands = {
        "auth": cmd_auth,
        "upload": cmd_upload,
        "send": cmd_send,
        "send-doc": cmd_send_doc,
        "status": cmd_status,
        "list": cmd_list,
        "download": cmd_download,
        "tracker": cmd_tracker,
    }
    commands[args.command](args)


if __name__ == "__main__":
    main()
