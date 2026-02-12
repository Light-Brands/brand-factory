# Phantom Swap — Atomic Cross-Chain Swaps

## Overview
Phantom Swap enables trustless cross-chain cryptocurrency swaps without centralized exchanges, KYC, or intermediaries. All swap negotiation happens through the Scrambler — counterparties never learn each other's identity.

## How It Works
1. User wants to swap (e.g., 0.1 BTC for XMR)
2. Phantom Swap finds a counterparty via P2P orderbook (through Scrambler)
3. Hash Time-Locked Contract (HTLC) created
   - Both parties lock funds in smart contract / cryptographic lock
   - Time limit: if not completed within window, funds return automatically
   - Cryptographic proof ensures atomicity (both or neither)
4. Swap executes — both parties receive their funds
5. No exchange, no KYC, no account, no trace

## Supported Swap Pairs
- BTC <-> XMR (atomic swap, no intermediary)
- ETH <-> XMR (via atomic swap bridge)
- BTC <-> ZEC (atomic swap)
- Any <-> Any (multi-hop: A -> XMR -> B for max privacy)

## The XMR Hop
For maximum unlinkability, route any swap through Monero as intermediary:
BTC → XMR (atomic swap) → hold → XMR → ETH (atomic swap)
This breaks any chain analysis between source and destination chains.

## HTLC Protocol
### Step-by-step:
1. **Alice** wants to sell BTC for XMR. **Bob** wants to sell XMR for BTC.
2. Alice generates a secret `s` and computes `h = SHA256(s)`.
3. Alice locks BTC in an HTLC: "Bob can claim with preimage of h, OR Alice can refund after 24 hours."
4. Bob sees Alice's HTLC, locks XMR in corresponding HTLC: "Alice can claim with preimage of h, OR Bob can refund after 12 hours."
5. Alice claims Bob's XMR by revealing `s` on the Monero chain.
6. Bob uses `s` (now public) to claim Alice's BTC.
7. Swap complete. Atomic: if Alice doesn't reveal `s`, both refund.

## P2P Orderbook
- Decentralized orderbook distributed through the Scrambler
- Orders are anonymous: identity of maker/taker is never revealed
- Order matching is done client-side
- No central server coordinates swaps
- Orders include: pair, amount, rate, expiry
- Stale orders auto-expire

## Swap Privacy
- All negotiation messages encrypted and routed through Scrambler
- Counterparty never learns your IP, identity, or location
- On-chain transactions use privacy features of respective chains
- XMR side: fully private by default
- BTC side: uses CoinJoin/PayJoin + fresh address
- No swap history on any server — local device only

## Implementation
- COMIT network HTLC library (Rust)
- XMR<->BTC atomic swap protocol (proven, audited)
- Custom HTLC contracts for ETH/ERC-20 pairs
- Timeout handling: automatic refund on expiry
- Fee estimation: real-time chain fee data (fetched through Scrambler)

Cross-references: [shadow-wallet.md](shadow-wallet.md), [scrambler.md](scrambler.md), [defi-proxy.md](defi-proxy.md)
