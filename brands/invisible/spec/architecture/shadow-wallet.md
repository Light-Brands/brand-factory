# Shadow Wallet — Private Crypto Built Into The Messenger

## Overview
Every Invisible user gets a non-custodial, privacy-first crypto wallet built directly into the app. Send money as anonymously as you send messages. No KYC, no account, no history server.

## Core Principles
- Non-custodial: user holds the keys, Invisible never touches them
- No KYC: no name, no email, no phone, no ID, ever
- No account: wallet generated locally from device seed
- No history server: transaction history is local-only
- All sends/receives route through The Scrambler

## Multi-Chain Support
- Monero (XMR) — PRIMARY (privacy native, ring signatures, stealth addresses, RingCT)
- Zcash shielded (ZEC) — zk-SNARKs, only z-addresses supported
- Bitcoin (BTC) — via CoinJoin/PayJoin + Silent Payments (BIP-352)
- Ethereum (ETH) — via privacy layers / ZK rollups
- Stablecoins (USDC/USDT) — via ZK rollup privacy layers

## Wallet Generation
- BIP-39 mnemonic seed generated locally with CSPRNG
- Seed encrypted at rest with same 2FA-derived key as message DB
- Private keys derived per-chain from master seed
- Keys never leave device, never backed up to cloud, never transmitted
- Seed displayed once during setup for physical backup (paper/metal)

## In-Chat Payments
- Send/receive crypto inline in any chat (1-on-1 or group)
- Payment requests: request specific amount, one-tap to pay
- Group splits: split a bill among group members, auto-calculated
- No payment processor — direct wallet-to-wallet on-chain
- Transaction broadcast goes through Scrambler (node IP hidden)
- Payment history is local only, encrypted with SQLCipher + Argon2id

## Privacy Coin Integration

### Monero (XMR) — The Default Currency
- Ring Signatures: transaction mixed with 16+ decoys
- Stealth Addresses: one-time address per transaction
- RingCT: transaction amounts hidden (Pedersen commitments)
- FCMP++ (2026): full chain membership proofs, anonymity set = entire blockchain
- Result: sender hidden, recipient hidden, amount hidden, untraceable

### Zcash Shielded (ZEC)
- zk-SNARKs: zero-knowledge proofs of transaction validity
- Only shielded (z-address) transactions supported — transparent addresses blocked
- Sapling/Orchard shielded pools

### Bitcoin (BTC) — Privacy-Enhanced
- CoinJoin: transactions mixed with other users
- PayJoin: sender and recipient both contribute inputs
- Silent Payments (BIP-352): one-time addresses per transaction
- Optional: auto-swap BTC → XMR → BTC via atomic swap

### Ethereum & Stablecoins
- Transactions routed through ZK-rollup privacy layers
- All RPC calls go through Scrambler (no IP leaks to Infura/Alchemy)

## Wallet Security
- Seed phrase: generated locally, encrypted at rest
- Private keys: NEVER leave device, NEVER backed up to cloud, NEVER transmitted
- Seed displayed once during setup (user's responsibility to back up physically)
- Multi-sig option: 2-of-3 signatures for large transactions (configurable threshold)
- Auto-purge: wallet transaction history follows same retention policy as messages (24h-90d)
- Balances can be re-derived from chain if history is purged

## DeFi Wallet Connect
- WalletConnect v2 integration
- All RPC calls routed through Scrambler
- Transaction signing happens locally
- dApp frontends never see real IP
- Connect MetaMask, Trust Wallet, Phantom, Rabby, etc.
- ENS lookups go through Scrambler

Cross-references: [phantom-swap.md](phantom-swap.md), [defi-proxy.md](defi-proxy.md), [cryptography.md](cryptography.md), [scrambler.md](scrambler.md)
