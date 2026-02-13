# Competitive Landscape — Invisible

**Version:** 1.0.0
**Created:** 2026-02-13
**Status:** Research

---

## Executive Summary

Invisible operates at the intersection of secure messaging, network-level privacy infrastructure, and decentralized finance. No single existing project covers this full surface area. Six major open source projects each address a piece of what Invisible combines — but none unify all layers into a single product.

This document maps the competitive landscape, identifies what's already solved in open source, what remains genuinely novel, and where Invisible should build on existing work versus building from scratch.

---

## The Six Projects That Matter

### 1. SimpleX Chat

**What it is:** The first messaging network with no user identifiers of any kind — not even random numbers. Open source, Haskell-based.

**Headquarters:** London, UK (SimpleX Chat Ltd)
**Funding:** ~$1.3M total (angel, pre-seed from Asymmetric Capital Partners, Village Global; investments from Jack Dorsey; ETH donation from Vitalik Buterin in Nov 2025)
**Team:** ~3 full-time employees
**License:** AGPL-3.0
**GitHub:** [simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat)

**Core strengths:**
- Zero identifiers — connection via one-time links or QR codes only
- Unidirectional message queues prevent sender/recipient correlation on the server
- Double ratchet E2EE with quantum-resistant layer (post-quantum in progress)
- Self-hostable relay servers (SMP protocol)
- Growing adoption — blocked by Russia (Roskomnadzor) in Sept 2024, which validated its threat model
- Business chat features (v6.2, Dec 2024)
- Community server infrastructure via Flux partnership

**Limitations vs. Invisible:**
- No mixnet, no cover traffic — servers can observe connection timing patterns
- No VPN layer — ISP sees connections to SMP servers
- No protocol camouflage — traffic identifiable via DPI
- No integrated wallet or financial layer
- No mesh/offline networking
- No Shamir fragmentation
- Small team, limited engineering bandwidth

**Business model:** Donations, angel investment, nascent business/enterprise features. Protocols are public domain. Roadmap targets sustainable communities by 2026-2027.

**Relevance to Invisible:** SimpleX is the closest competitor on identity design. Their unidirectional queue architecture is elegant and proven. However, they explicitly don't pursue network-level privacy (mixnet, cover traffic) — they protect identity but not metadata timing patterns.

---

### 2. Nym Network

**What it is:** A decentralized mixnet infrastructure layer with incentivized node operation. Not a messenger — a network-level privacy layer that other apps build on.

**Headquarters:** Neuchâtel, Switzerland (Nym Technologies SA, est. 2018)
**Funding:** VC-backed (a]Capital, Polychain, NGC Ventures, others); $NYM token economy
**Team:** 30+ engineers and researchers
**License:** Apache 2.0
**GitHub:** [nymtech/nym](https://github.com/nymtech/nym)

**Core strengths:**
- Production 5-hop Sphinx mixnet with continuous cover traffic (Loopix-based)
- 500+ mix nodes operated by community
- $NYM token incentivizes node operators (economic sustainability)
- NymVPN client (Rust, open source) — 2-hop fast mode + 5-hop anonymous mode
- Zero-knowledge credentials (zk-nyms) for payment unlinkability
- Post-quantum packet format "Outfox" in development (replacing Sphinx)
- Academic foundations — collaboration with KU Leuven (COSIC) and EPFL (SPRING lab)
- QUIC protocol support added in 2026 for censorship resistance

**Limitations vs. Invisible:**
- Infrastructure only — no messenger, no wallet, no identity system, no burn rooms
- NymVPN is a VPN product, not a messenger
- Mixnet latency remains high for real-time messaging (acknowledged in independent reviews)
- Token requirement for node operation creates regulatory complexity
- No E2EE chat protocol
- No Shamir fragmentation or dead drops

**Business model:** Token economy ($NYM) — node operators stake tokens, earn routing fees. NymVPN subscription for consumer VPN product. Infrastructure-as-a-service for applications building on the mixnet.

**Relevance to Invisible:** Nym is the most mature open source mixnet. Invisible's Scrambler design (layers 2-3: mixnet + cover traffic) is architecturally similar to Nym's Loopix-inspired approach. Key question: should Invisible build on Nym's infrastructure or build its own mixnet from scratch? Building on Nym gives an immediate production network of 500+ nodes but creates dependency. Building independently gives full control but requires bootstrapping a node network from zero.

---

### 3. Session

**What it is:** A decentralized encrypted messenger with no phone number required. Uses onion routing through community-operated Service Nodes. Recently migrated to its own blockchain (Session Network).

**Headquarters:** Zug, Switzerland (The Session Technology Foundation, non-profit; originally Australian)
**Funding:** $SESSION token economy; originally funded through $OXEN
**Network:** 2,100+ service nodes in 39 countries
**License:** GPL-3.0
**GitHub:** [session-foundation/session-desktop](https://github.com/session-foundation/session-desktop)

**Core strengths:**
- No phone number or email required — anonymous signup
- 3-hop onion routing through decentralized service node network
- 2,100+ community-operated nodes across 39 countries
- Completed migration from Oxen Network to Session Network (May 2025)
- Session Token simplifies node staking (Ethereum-compatible)
- Revenue feedback loop: optional in-app features fund node operators
- Proven in real crises (Iran 2026 internet restrictions)
- Protocol V2 in development: adding Perfect Forward Secrecy + post-quantum crypto
- Fully open source (client and server, unlike Signal)

**Limitations vs. Invisible:**
- Onion routing only — no mixnet batching/shuffling, no cover traffic
- No Shamir fragmentation
- No protocol camouflage (traffic identifiable via DPI)
- No integrated wallet (despite having a token)
- No mesh/offline networking
- No mandatory VPN
- Post-quantum crypto still in design phase (V2 protocol)
- Token dependency ($SESSION) for node operation is controversial and creates regulatory risk
- Latency concerns with 3-hop routing

**Business model:** Token economy — $SESSION token for staking nodes, optional in-app purchases fund network. Non-profit foundation governance. All core messaging features free.

**Relevance to Invisible:** Session demonstrates that a community-operated node network at scale (2,100+ nodes) is achievable and sustainable through token incentives. Their migration from Oxen to Session Network is a cautionary tale about the complexity of blockchain dependencies. Their Protocol V2 development shows the difficulty of retrofitting PFS and post-quantum crypto onto an existing protocol.

---

### 4. Briar

**What it is:** A P2P messenger designed for activists, journalists, and anyone who needs a safe way to communicate. Works over Tor when online and via Bluetooth/WiFi Direct mesh when offline.

**Headquarters:** Community project (primarily European contributors)
**Funding:** Grants (OTF, NLnet, Access Now), donations
**Team:** Small core team + community contributors
**License:** GPL-3.0
**GitHub:** [briar/briar](https://code.briarproject.org/briar/briar)

**Core strengths:**
- True P2P — no central servers at all
- Works offline via Bluetooth and WiFi Direct mesh networking
- Tor integration when online
- No phone/email required
- Reproducible builds (verified by Cure53 audit)
- Proven in real crises (Iran 2026 internet blackout)
- E2EE with forward secrecy
- Forums and blogs (decentralized publishing)

**Limitations vs. Invisible:**
- Text-only — no voice calls, no file sharing, no GIFs
- Android and desktop only (no iOS)
- No mixnet or cover traffic
- No wallet or financial layer
- No post-quantum cryptography
- Battery drain from constant Bluetooth scanning
- Small user base limits network effect
- No protocol camouflage beyond Tor

**Business model:** Non-profit, grant-funded. No commercial revenue stream.

**Relevance to Invisible:** Briar is the gold standard for mesh/offline messaging. Their Bluetooth/WiFi Direct implementation has been battle-tested. Invisible's mesh networking layer (Phase 6) should study Briar's approach carefully. However, Briar's text-only limitation and lack of iOS support have severely limited adoption.

---

### 5. Cwtch

**What it is:** A metadata-resistant group messaging protocol built on Tor v3 onion services. Developed by Open Privacy Research Society (Canadian non-profit).

**Headquarters:** Vancouver, Canada (Open Privacy Research Society)
**Funding:** Grants, donations
**Team:** Small research team
**License:** MIT
**GitHub:** [cwtch-im/cwtch](https://git.openprivacy.ca/cwtch.im/cwtch)

**Core strengths:**
- Fully decentralized — built on Tor v3 onion services
- Metadata-resistant by design — even group servers can't learn membership or content
- Untrusted infrastructure model — servers provably learn nothing
- Cryptographic anonymous identities (generate unlimited)
- Group messaging with strong privacy guarantees
- Formal threat model documented

**Limitations vs. Invisible:**
- No mixnet or cover traffic
- No wallet or financial layer
- No mesh/offline networking
- No VPN layer
- No post-quantum crypto
- Small community and ecosystem
- Limited features compared to mainstream messengers
- Performance limited by Tor network

**Business model:** Non-profit research society. Grant-funded. No commercial aspirations.

**Relevance to Invisible:** Cwtch's approach to untrusted group servers is relevant to Invisible's group messaging design. Their formal threat model is well-documented and worth studying. However, Cwtch is primarily a research project with limited adoption.

---

### 6. Status

**What it is:** An open source messenger + non-custodial Ethereum wallet + Web3 browser in one app. The closest existing project to Invisible's messenger + wallet convergence.

**Headquarters:** Zug, Switzerland (Status Research & Development GmbH)
**Funding:** 2017 ICO raised ~$100M+ in ETH; $SNT token
**Team:** 100+ contributors
**License:** MPL-2.0
**GitHub:** [status-im](https://github.com/status-im)

**Core strengths:**
- E2EE messenger + crypto wallet + DeFi access in one app
- Waku P2P protocol (evolved from Whisper) for decentralized messaging
- Non-custodial multi-chain wallet (ETH, Arbitrum, Optimism, Base)
- Built-in token swaps, NFT support
- Anonymous profiles — no phone/email required
- Community spaces (decentralized Slack/Discord alternative)
- Desktop + mobile (iOS and Android)
- Launching Status Network — gasless L2 blockchain
- Large team, significant funding runway

**Limitations vs. Invisible:**
- Ethereum-only wallet — no privacy coins (no Monero, no Zcash)
- No mixnet, no cover traffic
- No VPN layer
- No mesh/offline networking
- No Shamir fragmentation, no protocol camouflage
- No post-quantum crypto
- No panic/duress features
- Waku P2P lacks the metadata protection of a mixnet
- Financial transactions are on public blockchains (not privacy-preserving by default)
- Feature bloat — trying to be "the everything app" has diffused focus

**Business model:** Token economy ($SNT), launching gasless L2 for additional revenue streams. ICO-funded with large treasury. Foundation-governed.

**Relevance to Invisible:** Status is the closest analogue to Invisible's messenger + wallet concept. It proves the market demand for converged communication + financial tools. However, Status lacks privacy at the network level and its wallet only supports public blockchains. Invisible's integration of Monero/Zcash and the Financial Privacy Parity Principle is a fundamentally different approach — Invisible treats financial transactions as requiring the same privacy as messages, while Status treats them as separate features with different (lower) privacy guarantees.

---

## Comparative Matrix

| Capability | SimpleX | Nym | Session | Briar | Cwtch | Status | **Invisible** |
|---|---|---|---|---|---|---|---|
| **Messaging** | | | | | | | |
| E2EE (default) | Yes | N/A | Yes | Yes | Yes | Yes | **Yes** |
| Post-quantum crypto | In progress | In progress | In design | No | No | No | **Yes** |
| Zero user identifiers | Yes | N/A | Yes | Yes | Yes | Yes | **Yes** |
| Group messaging | Yes | N/A | Yes | Yes | Yes | Yes | **Yes** |
| Voice/video calls | Yes | N/A | Yes | No | No | No | **Yes** |
| Disappearing messages | Yes | N/A | Yes | No | No | No | **Yes** |
| Burn rooms (ephemeral keys) | No | N/A | No | No | No | No | **Yes** |
| **Network Privacy** | | | | | | | |
| Mixnet routing | No | **5-hop** | No (onion) | No | No (Tor) | No | **7-layer** |
| Cover traffic | No | **Yes** | No | No | No | No | **Yes** |
| Shamir fragmentation | No | No | No | No | No | No | **Yes** |
| Mandatory VPN | No | **NymVPN** | No | No | No | No | **Yes** |
| Protocol camouflage (anti-DPI) | No | Partial | No | Tor only | Tor only | No | **Yes** |
| Jurisdiction-aware routing | No | No | No | No | No | No | **Yes** |
| Dead drops | Partial | No | No | No | No | No | **Yes** |
| Temporal scrambling | No | Partial | No | No | No | No | **Yes** |
| Mesh/offline networking | No | No | No | **Yes** | No | No | **Yes** |
| **Financial** | | | | | | | |
| Integrated crypto wallet | No | No | No | No | No | **ETH multi-chain** | **Privacy-first multi-chain** |
| Privacy coins (XMR/ZEC) | No | No | No | No | No | No | **Yes** |
| Atomic cross-chain swaps | No | No | No | No | No | No | **Yes** |
| DeFi access | No | No | No | No | No | **Yes** | **Yes (anonymous)** |
| In-chat payments | No | No | No | No | No | No | **Yes** |
| Financial privacy parity | N/A | N/A | N/A | N/A | N/A | No | **Yes** |
| **Security** | | | | | | | |
| Mandatory 2FA | No | No | No | No | No | No | **Yes** |
| Panic wipe / duress PIN | No | No | No | No | No | No | **Yes** |
| RAM-only servers | No | No | No | N/A (P2P) | No | No | **Yes** |
| Reproducible builds | Partial | Partial | No | **Yes** | Yes | No | **Planned** |
| **Infrastructure** | | | | | | | |
| Fully open source | Yes | Yes | Yes | Yes | Yes | Yes | **Yes** |
| Decentralized | Self-host | **500+ nodes** | **2,100+ nodes** | P2P | Tor | P2P | **Planned** |
| Community node operators | Yes | **Yes ($NYM)** | **Yes ($SESSION)** | N/A | Tor | N/A | **Planned** |
| **Maturity** | | | | | | | |
| Production-ready | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **No (spec phase)** |
| Mobile apps (iOS + Android) | Yes | Yes | Yes | Android only | Yes | Yes | **Planned** |
| Independent security audit | Yes | Yes | No | **Yes (Cure53)** | Partial | Partial | **Planned** |
| Active user base | Growing | Growing | Growing | Small | Small | Medium | **None yet** |

---

## What's Already Solved in Open Source

These capabilities have mature, production-tested open source implementations:

1. **Zero-identifier messaging** — SimpleX has proven this works at scale. Session has proven anonymous signup at 2,100+ nodes.
2. **Mixnet infrastructure** — Nym has 500+ production nodes with Sphinx packets and cover traffic.
3. **Mesh/offline messaging** — Briar has battle-tested Bluetooth/WiFi Direct in real internet blackouts.
4. **Metadata-resistant groups** — Cwtch's untrusted server model is formally specified.
5. **Messenger + wallet convergence** — Status has shipped this to iOS, Android, and desktop.
6. **Community node networks** — Both Session (2,100+ nodes) and Nym (500+ nodes) prove incentivized node operation works.

---

## What Remains Genuinely Novel in Invisible

These capabilities do not exist in any current open source project:

1. **Shamir secret sharing for message fragmentation** — No messenger splits messages into K-of-N shares across independent network paths.
2. **7-layer obfuscation stack in a single product** — Individual layers exist (mixnet in Nym, onion routing in Session, Tor in Briar/Cwtch) but no product combines mixnet + cover traffic + Shamir + jurisdiction routing + protocol camouflage + dead drops + temporal scrambling.
3. **Mandatory VPN as an architectural gate** — No messenger requires VPN connection before the app functions.
4. **Privacy-coin wallet integrated into a messenger** — Status has ETH, but no messenger integrates Monero or Zcash with full mixnet protection.
5. **Financial Privacy Parity Principle** — No project applies identical network-level privacy to both messages and financial transactions.
6. **Jurisdiction-aware routing** — No mixnet enforces multi-jurisdiction path diversity or Five Eyes avoidance.
7. **Atomic cross-chain swaps inside a messenger** — Entirely novel convergence.
8. **Duress PIN / panic wipe with architectural 2FA requirement** — No messenger makes 2FA part of the encryption key derivation (removing it makes data unrecoverable, not just inaccessible).

---

## Strategic Observations

### Build vs. Integrate

| Layer | Recommendation | Rationale |
|---|---|---|
| E2EE protocol | **Integrate** (libsignal) | Proven, audited, Rust-native. No reason to reimplement. |
| Mixnet | **Evaluate** Nym integration vs. custom | Nym has production infrastructure but creates dependency. Custom gives control but requires node bootstrapping. |
| VPN | **Integrate** (WireGuard) | Proven, audited, minimal. Already in spec. |
| Mesh networking | **Study** Briar's approach | Briar's BT/WiFi Direct is battle-tested. Adapt patterns, not code (different language). |
| Wallet (Monero) | **Integrate** (monero-rs) | Mature Rust library. Already in spec. |
| Wallet (Zcash) | **Integrate** (zcash_client_backend) | Official Rust library. Already in spec. |
| Identity system | **Original design** | Invisible's pairwise identifier model is unique. SimpleX's approach is similar but architecturally different. |
| Scrambler layers 1, 4, 5, 6, 7 | **Original design** | Shamir fragmentation, jurisdiction routing, protocol camouflage, dead drops, temporal scrambling — no off-the-shelf components exist. |
| Group messaging | **Integrate** (MLS/RFC 9420) | Standard protocol. Already in spec. |

### Competitive Moats

1. **Convergence moat** — Even if competitors add individual features, replicating the full 7-layer Scrambler + wallet + mesh + VPN convergence would require years of work.
2. **Privacy-coin integration moat** — Regulatory pressure makes most companies avoid Monero/Zcash. This creates a durable differentiator.
3. **Financial Privacy Parity moat** — Retrofitting full mixnet protection onto financial transactions is architecturally expensive. It must be designed in from day one.

### Risks

1. **Scope risk** — Invisible's spec covers more surface area than any single competitor. SimpleX has 3 employees. Session has a foundation. Status had $100M+ and 100+ contributors and still hasn't achieved network-level privacy. Invisible's 84-week roadmap is ambitious.
2. **Node bootstrapping risk** — Nym and Session each have 500-2,100+ nodes. Invisible starts with zero. Without nodes, the Scrambler doesn't work.
3. **Latency risk** — Nym's mixnet introduces "noticeable latency" per independent reviews. Invisible adds more layers (Shamir, jurisdiction routing, temporal scrambling) which compound latency.
4. **Regulatory risk** — Privacy-coin integration (Monero/Zcash) invites regulatory scrutiny. SimpleX was blocked in Russia. Session was fined in Russia. Invisible would face similar or greater pressure.

---

## Sources

- [SimpleX Chat](https://simplex.chat/) — [GitHub](https://github.com/simplex-chat/simplex-chat)
- [Nym Network](https://nymtech.net/) — [GitHub](https://github.com/nymtech/nym) — [NymVPN Client](https://github.com/nymtech/nym-vpn-client)
- [Session](https://getsession.org/) — [GitHub](https://github.com/session-foundation/session-desktop) — [Decentralized Network](https://getsession.org/session-decentralised-network)
- [Briar](https://briarproject.org/) — [Source](https://code.briarproject.org/briar/briar)
- [Cwtch](https://cwtch.im/) — [Open Privacy](https://openprivacy.ca/work/cwtch/)
- [Status](https://status.app/) — [GitHub](https://github.com/status-im)
- [Nym Wikipedia](https://en.wikipedia.org/wiki/Nym_(mixnet))
- [NymVPN 2026 Update](https://www.webpronews.com/nymvpn-2026-update-boosts-privacy-and-censorship-evasion/)
- [Session Network Migration](https://getsession.org/blog/migrating-from-the-oxen-network-to-session-network)
- [SimpleX Vision & Funding](https://simplex.chat/blog/20230422-simplex-chat-vision-funding-v5-videos-files-passcode.html)
- [Open Core Model](https://en.wikipedia.org/wiki/Open-core_model)
- [Red Hat Development Model](https://www.redhat.com/en/about/development-model)
