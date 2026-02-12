# Epic 10: Shadow Wallet — Non-Custodial Crypto Wallet

## Overview
Build a non-custodial, privacy-first crypto wallet directly into the messenger. Users can send money as anonymously as they send messages.

## User Stories

### US-10.1: Wallet Generation
As a user, I want a crypto wallet generated locally on my device with no account required.

**Acceptance Criteria:**
- BIP-39 mnemonic seed from CSPRNG
- Seed encrypted with same 2FA-derived key as message DB
- Per-chain key derivation from master seed
- Keys never leave device, never transmitted
- Seed displayed once for physical backup, then only accessible encrypted

### US-10.2: Multi-Chain Support
As a user, I want to hold multiple cryptocurrencies in one wallet.

**Acceptance Criteria:**
- Monero (XMR) — primary
- Zcash shielded (ZEC)
- Bitcoin (BTC)
- Ethereum (ETH)
- Stablecoins (USDC/USDT via ZK rollups)
- Balance display in fiat equivalent (optional)

### US-10.3: In-Chat Payments
As a user, I want to send crypto to contacts directly in a conversation.

**Acceptance Criteria:**
- Send/receive crypto inline in any chat
- Payment requests: specify amount, one-tap to pay
- Group bill splitting
- Transaction broadcast through Scrambler (IP hidden)
- Payment confirmation as encrypted message
- Payment history local only

### US-10.4: Wallet Security
As a user, I want my wallet protected with the same security as my messages.

**Acceptance Criteria:**
- Seed and keys encrypted at rest (SQLCipher + Argon2id)
- No cloud backup of seed/keys
- Multi-sig option for large transactions (2-of-3, configurable)
- Transaction history follows auto-purge policy
- Balances re-derivable from chain

### US-10.5: Receive Payments
As a user, I want to receive payments without revealing my wallet address.

**Acceptance Criteria:**
- Monero: stealth addresses (recipient's real address never on chain)
- Bitcoin: Silent Payments (BIP-352)
- Payment received notification in chat
- No persistent receiving address shared

## Technical Requirements
- Monero: monero-rs crate
- Bitcoin: rust-bitcoin + BDK
- Ethereum: ethers-rs
- Zcash: zcash_client_backend
- Seed: BIP-39 (bip39 crate)

## Dependencies
- Epic 00 (Foundation), Epic 01 (Messaging), Epic 03 (Scrambler)

## Architecture References
- [shadow-wallet.md](../architecture/shadow-wallet.md), [cryptography.md](../architecture/cryptography.md)
