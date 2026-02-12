# Invisible

**Messages that leave no trace. Privacy that answers to no one.**

Invisible is a maximally secure, privacy-first messenger that goes beyond Signal and Telegram. Zero-trust architecture, zero-metadata collection, zero-compromise on privacy.

## What This Is

A complete private communications platform built on:

- **End-to-end encryption** with post-quantum resistance (X3DH + PQXDH + Double Ratchet)
- **The Scrambler** — 7-layer network obfuscation (mixnet, fragmentation, cover traffic, jurisdiction routing, protocol camouflage, dead drops, temporal scrambling)
- **Ghost VPN** — mandatory built-in WireGuard tunnel with random global endpoints
- **Zero identifiers** — no phone number, no email, no username. Ever.
- **Shadow Wallet** — non-custodial privacy-first crypto payments (XMR, ZEC, BTC, ETH)
- **Zero-Log Doctrine** — RAM-only relay nodes, no disk writes, nothing to seize
- **Burn Rooms** — self-destructing conversations with ephemeral keys
- **Mandatory 2FA** — architecturally required, no bypass

## Directory Structure

```
brands/invisible/
├── metadata.json              # Brand registry
├── README.md                  # This file
├── project-plan.md            # Development phases
└── spec/
    ├── MASTER-PLAN.md         # Strategic vision
    ├── README.md              # Spec index
    ├── architecture/
    │   ├── cryptography.md    # Encryption stack
    │   ├── scrambler.md       # 7-layer network obfuscation
    │   ├── identity-system.md # Zero-identifier design
    │   ├── data-models.md     # Local-only storage schemas
    │   ├── api-reference.md   # Relay node protocol
    │   ├── group-messaging.md # MLS-based groups
    │   ├── ghost-vpn.md       # Mandatory VPN gateway
    │   ├── zero-log-doctrine.md # RAM-only infrastructure
    │   ├── access-control.md  # 2FA + panic features
    │   ├── burn-rooms.md      # Self-destructing chats
    │   ├── shadow-wallet.md   # Crypto wallet
    │   ├── phantom-swap.md    # Atomic cross-chain swaps
    │   └── defi-proxy.md      # Anonymous DeFi access
    ├── epics/
    │   ├── epic-00-foundation.md
    │   ├── epic-01-messaging.md
    │   ├── epic-02-contacts.md
    │   ├── epic-03-scrambler.md
    │   ├── epic-04-groups.md
    │   ├── epic-05-media.md
    │   ├── epic-06-calls.md
    │   ├── epic-07-mesh.md
    │   ├── epic-08-hardening.md
    │   ├── epic-09-ghost-vpn.md
    │   ├── epic-10-shadow-wallet.md
    │   ├── epic-11-privacy-coins.md
    │   ├── epic-12-phantom-swap.md
    │   ├── epic-13-defi-proxy.md
    │   ├── epic-14-relay-nodes.md
    │   ├── epic-15-burn-rooms.md
    │   └── epic-16-access-control.md
    └── brand/
        ├── 01-visual-identity.md
        ├── 02-brand-voice.md
        └── 03-product-vision.md
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Crypto core | Rust (libsignal-protocol, ring, ML-KEM, sss) |
| Mobile clients | Flutter/Dart |
| Relay/mix nodes | Rust (Sphinx packet format, Loopix-inspired) |
| VPN | WireGuard (ChaCha20 + Poly1305 + Curve25519) |
| Local storage | SQLCipher + Argon2id KDF |
| Networking | libp2p, Tor fallback |
| Transports | obfs4/obfs5, uTLS fingerprint mimicry |
| Voice/video | WebRTC + custom SRTP key exchange |
| Wallet | monero-rs, zcash_client_backend, rust-bitcoin, ethers-rs |
| Swaps | COMIT HTLC library, XMR-BTC atomic swap protocol |
| DeFi | WalletConnect v2, custom RPC proxy |
| 2FA | TOTP (RFC 6238) + FIDO2/WebAuthn |

## Revenue Model

Open-core:
- **Free**: Personal use, full encryption, full Scrambler
- **Paid**: Enterprise/team features, priority relay nodes, SLA guarantees

## Links

- [Master Plan](spec/MASTER-PLAN.md) — strategic vision and competitive positioning
- [Spec Index](spec/README.md) — complete specification navigator
- [Architecture](spec/architecture/) — technical deep-dives
- [Epics](spec/epics/) — feature development specs
- [Brand Identity](spec/brand/) — visual identity and voice
