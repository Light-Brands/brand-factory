# Brand Factory — Claude Code Context

## Project Overview

AI Brand Factory — an autonomous brand creation engine. Contains 25+ brands, legal documents, proposals, and shared tooling.

## Key Directories

- `brands/` — Individual brand projects (each with its own spec, code, identity)
- `legal-vault/` — All legal documents (agreements, negotiations, compliance, IP)
- `planning/` — Strategic docs, sacred laws, phase planning, agent specs
- `proposal-vault/` — Templates for new brand creation
- `tooling/` — Shared automation (ai-coding-config, signnow)
- `design-system/` — Shared component library and design tokens

## BMAD Method Integration

BMAD Method framework installed at `/tooling/bmad-method/` - 21 specialized agents and 50+ workflows for agile AI development. See `/BMAD-USAGE.md` for complete documentation.

**Quick Access:**
- Workflows: `/tooling/bmad-method/core/workflows/` (brainstorming, elicitation, party-mode)
- Modules: core, bmm, bmb, bmgd, cis
- Output: `/tooling/bmad-output/` (planning & implementation artifacts)
- Config: `/tooling/bmad-method/_config/`

**Important:** `/tooling/bmad-method/` is production (use this). `brands/test-brand/.bmad-method/` is experimental only.

## SignNow Integration (Document Signing)

The SignNow CLI at `tooling/signnow/signnow.py` is connected to the production SignNow API. It auto-authenticates from `.env.signnow` credentials.

### Quick Reference

```bash
SN="python3 tooling/signnow/signnow.py"

# List all documents on SignNow
$SN list

# Upload a document (accepts legal-vault paths)
$SN upload legal-vault/agreements/contract.pdf
$SN upload /absolute/path/to/document.pdf

# Send for signing (sender defaults to dan@lightbrands.ai)
$SN send <document_id> --to signer@email.com
$SN send <document_id> --to signer@email.com --subject "Please sign" --message "Attached for your review"

# Upload + send in one step
$SN send-doc /path/to/contract.pdf --to signer@email.com

# Check signing status
$SN status <document_id>
$SN status <document_id> --full

# Download signed document to legal-vault
$SN download <document_id> --to-vault

# View local tracker (uploads, invites, status)
$SN tracker
```

### Defaults

- **Sender:** dan@lightbrands.ai
- **API:** https://api.signnow.com (production)
- **Auth:** OAuth2 token auto-refreshes from `.env.signnow`
- **Supported formats:** PDF, DOCX, DOC, XLS, XLSX, PPT, PPTX, PNG (max 50MB)

### Signing Workflow

1. Upload document: `$SN upload <file>`
2. Send for signing: `$SN send <doc_id> --to signer@email.com`
3. Check status: `$SN status <doc_id>`
4. Once signed, download to vault: `$SN download <doc_id> --to-vault`
5. Move/rename in legal-vault following naming convention: `{type}_{counterparty}_{date}_{status}.pdf`

## Legal Vault Conventions

- **Naming:** `{type}_{counterparty}_{date}_{status}.{ext}`
- **Lifecycle:** draft → pending → signed → executed → active → expired → archived
- **agreements/** — executed/signed documents ONLY
- **negotiations/** — active deals, drafts, reviews (grouped by counterparty)
