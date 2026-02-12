# DeFi Proxy — Anonymous DeFi Access

## Overview
Invisible provides anonymous access to decentralized finance (DeFi) protocols. All blockchain interactions are proxied through the Scrambler, hiding your IP from blockchain nodes and dApp frontends.

## Architecture

### RPC Proxy Layer
- All Ethereum/Solana/etc. RPC calls routed through the Scrambler
- Your IP never reaches Infura, Alchemy, or any blockchain node provider
- RPC requests are encrypted Sphinx packets like any other traffic
- Response caching for frequently-queried data (block height, gas prices)

### How It Works
1. User connects external wallet via WalletConnect v2
2. dApp sends transaction request
3. Transaction signing happens locally on device (private keys never leave)
4. Signed transaction broadcast through Scrambler to blockchain node
5. Blockchain node sees the transaction but not the sender's IP/location
6. dApp frontend never sees real IP (all traffic proxied)

## WalletConnect v2 Integration
- Standard WalletConnect v2 protocol
- Connect any compatible wallet: MetaMask, Trust Wallet, Phantom, Rabby, etc.
- Session management: connections auto-expire on app lock
- No persistent wallet connection state on any server

## Supported Protocols
- Ethereum mainnet + L2s (Arbitrum, Optimism, Base, zkSync)
- Solana
- Polygon
- Any EVM-compatible chain
- Custom RPC endpoints supported

## Privacy Enhancements
- ENS/naming lookups go through Scrambler (no DNS leak)
- Token balance queries proxied (no one sees which wallets you're checking)
- Transaction simulation proxied (no one sees what you're about to do)
- dApp metadata stripped from requests
- No referrer headers, no cookies, no fingerprinting data sent to dApps

## DeFi Operations
- Swap on DEXs (Uniswap, Curve, etc.) anonymously
- Provide liquidity without IP exposure
- Borrow/lend on Aave, Compound with privacy
- NFT interactions with hidden identity
- All operations go through Ghost VPN + Scrambler

## Security
- Transaction signing is always local — never on a remote server
- WalletConnect sessions are encrypted end-to-end
- No transaction history stored on any server
- Local transaction log follows same auto-purge policy as messages

## Limitations
- On-chain transactions are still visible on the blockchain (addresses are pseudonymous)
- For true on-chain privacy, use Monero/Zcash (see [shadow-wallet.md](shadow-wallet.md))
- DeFi proxy hides your IP and metadata, not your on-chain activity
- For maximum privacy: use fresh addresses + XMR Hop (see [phantom-swap.md](phantom-swap.md))

Cross-references: [shadow-wallet.md](shadow-wallet.md), [phantom-swap.md](phantom-swap.md), [scrambler.md](scrambler.md), [ghost-vpn.md](ghost-vpn.md)
