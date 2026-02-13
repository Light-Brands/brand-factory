# Open Source Vision — Invisible

**Community Builds It. We Deploy It.**

**Version:** 1.0.0
**Created:** 2026-02-13
**Status:** Strategic Vision

---

## The Model in One Sentence

Invisible is developed in the open by a global community of contributors, and Light Brands deploys hardened, customized editions to corporations and organizations who pay for deployment, integration, support, and SLA guarantees.

---

## Why This Model Works

### The Precedent

This isn't theoretical. It's the most proven business model in open source software:

| Company | Open Source Project | Revenue Source | Scale |
|---|---|---|---|
| **Red Hat** | Linux, OpenShift, Ansible | Enterprise subscriptions, support, deployment | $3.4B/yr (acquired by IBM for $34B) |
| **GitLab** | GitLab CE | Enterprise Edition, SaaS, support | $580M+/yr |
| **HashiCorp** | Terraform, Vault, Consul | Enterprise editions, managed cloud | $583M/yr (acquired by IBM for $6.4B) |
| **Elastic** | Elasticsearch | Enterprise features, Elastic Cloud | $1.2B/yr |
| **Confluent** | Apache Kafka | Confluent Cloud, enterprise support | $800M+/yr |
| **MongoDB** | MongoDB Community | Atlas (managed cloud), enterprise server | $1.7B/yr |

The pattern: **open source creates adoption, trust, and an ecosystem. Enterprise deployment creates revenue.**

### Why It Works for Privacy Software Specifically

1. **Trust requires transparency.** No organization will trust a black-box privacy tool. Open source is table stakes. If the code isn't auditable, the privacy claims are unverifiable.

2. **Community auditing improves security.** More eyes on cryptographic code means faster vulnerability discovery. The worst thing for a privacy product is a hidden flaw.

3. **Contributors become advocates.** Every developer who contributes to Invisible becomes a person inside an organization who champions it when their employer needs a secure communications solution.

4. **Enterprise buyers need someone to call.** The CTO of a defense contractor won't download an app from GitHub. They need a vendor, a contract, an SLA, a deployment team, and an entity to hold accountable.

5. **Customization is expected.** Corporations need branding, compliance, MDM integration, audit logging for regulatory requirements, and admin controls — things a community project won't prioritize but will happily accept as upstream contributions.

---

## How It Works

### Layer 1: The Open Source Project

**What:** The Invisible protocol, reference clients, relay/mix node software, wallet libraries, and all cryptographic implementations — fully open source under a permissive license.

**Who builds it:** A global community of cryptographers, security researchers, Rust developers, Flutter developers, and privacy advocates. Light Brands contributes as a core maintainer and primary sponsor.

**What's included (free, open, forever):**
- Full E2EE messaging with all Scrambler layers
- Ghost VPN client
- Shadow Wallet (all chains, all privacy features)
- Burn rooms, panic features, duress PIN
- Relay/mix node software
- Protocol specifications
- Reproducible build tooling
- Reference mobile and desktop clients
- Community relay node participation

**License approach:**
- Core protocol and crypto libraries: MIT or Apache 2.0 (maximum adoption)
- Client and server applications: AGPL-3.0 (ensures modifications stay open, prevents proprietary forks that undermine the network)
- Enterprise management layer: Source-available with commercial license (BSL or similar)

**Why AGPL for applications:** If a government or corporation forks Invisible and modifies it, the AGPL requires those modifications to be published. This prevents "embrace, extend, extinguish" — and ensures the community benefits from all improvements. The MIT/Apache core libraries allow anyone to integrate Invisible's cryptographic primitives into other projects without restriction.

### Layer 2: The Enterprise Deployment Business

**What:** Light Brands (or a dedicated subsidiary) packages, hardens, customizes, deploys, and supports Invisible for paying organizations.

**Who buys it:** Corporations, law firms, government agencies, NGOs, media organizations, defense contractors, financial institutions, healthcare providers — any organization where communications security is a legal or operational requirement.

**What they pay for:**

#### Deployment & Integration
- Custom-branded client apps (organization's logo, colors, splash screen)
- Private relay/mix node infrastructure (organization-operated or Light Brands-operated)
- MDM (Mobile Device Management) integration (Intune, JAMF, VMware Workspace ONE)
- SSO integration (SAML, OIDC) for employee onboarding — while maintaining zero-identifier architecture for external communications
- Air-gapped deployment for classified environments
- On-premise relay infrastructure for organizations that can't use public nodes
- Custom jurisdiction routing rules (e.g., "no traffic through China, Russia, or Iran")

#### Compliance & Governance
- Compliance audit logging — a carefully designed system where message *events* (sent, received, deleted) can be logged for regulatory compliance without exposing message *content*. This is the hardest and most valuable feature to get right.
- Data retention policy enforcement (configurable burn timers per organization policy)
- Legal hold capability (pause auto-deletion when under litigation — without breaking E2EE)
- eDiscovery integration (organization-controlled, content never leaves the org)
- SOC 2 Type II, ISO 27001, FedRAMP documentation and certification support
- HIPAA BAA for healthcare deployments
- ITAR compliance for defense deployments

#### Administration
- Organization admin dashboard (user provisioning, device management, policy enforcement)
- Role-based access controls (admin, manager, standard, restricted)
- Remote wipe capability for lost/stolen employee devices
- Device fleet management (approved devices, OS version requirements)
- Group/channel management (org-wide, department, project)

#### Support & SLA
- 24/7 dedicated support with guaranteed response times
- Priority relay infrastructure (lower latency, higher throughput, redundancy)
- Uptime SLAs (99.9% or 99.99% for relay infrastructure)
- Incident response team for security events
- Dedicated account manager
- Quarterly security reviews

#### Professional Services
- Threat model assessment for the organization's specific environment
- Custom security hardening for specific threat profiles
- Employee training and onboarding programs
- Migration assistance from existing messaging platforms
- Penetration testing of the organization's deployment
- Custom feature development (contributed back upstream when possible)

---

## Revenue Model

### Pricing Tiers

| Tier | Target | Price Range | What's Included |
|---|---|---|---|
| **Community** | Individuals, small teams | Free | Full open source product — all privacy features, all Scrambler layers, all wallet features. No feature gating on privacy. |
| **Team** | Startups, small orgs (10-100 users) | $15-25/user/month | Priority relay infrastructure, basic admin dashboard, team key management, email support, 99.9% uptime SLA |
| **Business** | Mid-market (100-1,000 users) | $30-50/user/month | Everything in Team + MDM integration, SSO, compliance logging, custom branding, dedicated support, 99.95% uptime SLA |
| **Enterprise** | Large orgs (1,000+ users) | Custom pricing | Everything in Business + air-gapped deployment, on-premise relay infrastructure, custom jurisdiction routing, eDiscovery, legal hold, FedRAMP/HIPAA/ITAR support, dedicated account manager, 99.99% SLA, custom feature development |
| **Government / Defense** | Government agencies, defense | Custom pricing (typically $75-150+/user/month) | Everything in Enterprise + classified environment deployment, supply chain verification, ITAR compliance, background-checked support staff, custom hardware token integration |

### Revenue Projections (Illustrative)

| Year | Community Users | Paid Orgs | Avg. Deal Size | Annual Revenue |
|---|---|---|---|---|
| Year 1 (post-launch) | 10,000 | 5-10 | $50K | $250K-$500K |
| Year 2 | 50,000 | 25-50 | $75K | $1.9M-$3.75M |
| Year 3 | 200,000 | 100-200 | $100K | $10M-$20M |
| Year 5 | 1M+ | 500+ | $120K | $60M+ |

These projections assume Invisible reaches production quality and passes independent security audits — both prerequisites for enterprise adoption.

### Why Organizations Will Pay

1. **Legal liability.** A law firm that uses WhatsApp for client communications is one breach away from malpractice claims. Invisible with compliance logging and legal hold eliminates that risk.

2. **Regulatory mandate.** Healthcare (HIPAA), defense (ITAR), finance (SOX, GDPR) — regulations increasingly require provably secure communications. Open source + independent audits + compliance tooling is the trifecta.

3. **Competitive intelligence.** Corporations lose billions annually to communications interception. A chemical company's R&D team discussing formulations on Slack is a target. Invisible makes that conversation invisible.

4. **Operational security.** Journalists, NGOs, and human rights organizations operating in hostile environments need communications that survive device seizure and network surveillance. This is life-or-death, not nice-to-have.

5. **Government agencies.** Intelligence and defense agencies need secure communications for classified and sensitive operations. Current solutions (SCIFs, SIPRNet) are expensive and inflexible. Invisible offers comparable security with mobile flexibility.

---

## Community Development Strategy

### How to Build a Contributor Community

#### Phase 1: Foundation (Months 1-6)

**Open the code early, even if it's incomplete.**
- Publish the crypto core library (Rust) as soon as it passes basic tests
- Publish protocol specifications before implementation is complete
- Create a contributor guide, code of conduct, and governance document
- Set up public issue tracker, discussion forum, and development chat (on Invisible itself once bootstrapped, Matrix/IRC in the interim)

**Seed the community with targeted outreach:**
- Privacy and cryptography conferences (Real World Crypto, USENIX Security, DEF CON, CCC)
- Academic partnerships (offer research collaboration on mixnet performance, post-quantum crypto, traffic analysis resistance)
- Bug bounty program from day one (even during alpha)
- Grant applications to privacy-focused funders (OTF, NLnet, Ford Foundation, EFF)

**Make contribution easy:**
- Extensive documentation for every module
- "Good first issue" labels
- Mentorship program for new contributors
- Regular contributor calls (weekly or biweekly)
- Reproducible development environment (Nix or Docker)

#### Phase 2: Growth (Months 6-18)

**Incentivize node operators:**
- Simple setup process (one-command deployment)
- Public dashboard showing network health, node count, geographic distribution
- Reputation system for reliable node operators
- Revenue sharing from enterprise traffic routed through community nodes (with consent)

**Build ecosystem integrations:**
- SDK for third-party apps to send messages through the Invisible network
- Plugin architecture for client extensions
- API for enterprise integration partners
- Bridge protocols to other messaging networks (Matrix, XMPP) for gradual migration

**Formalize governance:**
- Establish an independent foundation (Swiss or Liechtenstein, for privacy jurisdiction alignment)
- Elected technical steering committee (community + Light Brands representatives)
- RFC process for protocol changes
- Transparent decision-making with public meeting notes

#### Phase 3: Sustainability (Months 18+)

**Community owns the protocol. Light Brands owns the enterprise product.**
- The foundation controls the protocol specification, trademark, and reference implementations
- Light Brands has perpetual license to build enterprise products on the protocol
- Other companies can also build commercial products (the license allows it)
- Foundation funding: grants, donations, small percentage of enterprise revenue contributed back
- No single entity (including Light Brands) can veto protocol changes

---

## Enterprise Deployment Architecture

### How a Corporate Deployment Works

```
┌─────────────────────────────────────────────────────┐
│                   CORPORATION                        │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │ Custom-Branded│  │ Custom-Branded│  │   Admin   │  │
│  │  Mobile App   │  │  Desktop App  │  │ Dashboard │  │
│  └──────┬───────┘  └──────┬───────┘  └─────┬─────┘  │
│         │                  │                 │        │
│  ┌──────┴──────────────────┴─────────────────┴────┐  │
│  │          Private Relay Infrastructure           │  │
│  │    (org-operated mix/relay nodes on-premise     │  │
│  │     or in org's cloud — never on public net)    │  │
│  └──────────────────────┬────────────────────────┘  │
│                         │                            │
│  ┌──────────────────────┴────────────────────────┐  │
│  │         Compliance & Governance Layer           │  │
│  │   (event logging, legal hold, retention policy, │  │
│  │    MDM integration, SSO, admin controls)        │  │
│  └──────────────────────┬────────────────────────┘  │
│                         │                            │
└─────────────────────────┼────────────────────────────┘
                          │
            ┌─────────────┴──────────────┐
            │    Public Invisible Network  │
            │  (community relay/mix nodes) │
            │                              │
            │  Used only for external comms │
            │  (org ↔ outside world)        │
            └──────────────────────────────┘
```

**Internal communications** (employee-to-employee) route through the organization's private relay infrastructure. Messages never touch the public network. The organization controls latency, throughput, and availability.

**External communications** (employee-to-outside-contact) route through the public Invisible network. The organization's private infrastructure acts as the first hop, then traffic enters the public Scrambler. The outside contact's messages return through the public network.

**Compliance layer** sits between the app and the relay infrastructure. It can log message *events* (sent, received, deleted) and enforce retention policies without ever seeing message *content*. This is architecturally enforced — the compliance layer handles encrypted blobs, not plaintext.

---

## Target Markets (Priority Order)

### Tier 1: Immediate Market (Year 1-2)

| Segment | Pain Point | Why They'll Pay | Deal Size |
|---|---|---|---|
| **Law firms** (Am Law 200) | Attorney-client privilege requires provably secure comms. Current tools (email, WhatsApp) are liability. | Malpractice risk, ethical obligations, client demand | $50K-$200K/yr |
| **Investigative journalism** (major outlets) | Source protection is existential. Signal is good but metadata leaks to centralized servers. | Source safety, editorial independence, legal protection | $25K-$100K/yr |
| **Human rights NGOs** | Staff in hostile environments face device seizure, network surveillance. People die when comms are compromised. | Physical safety of staff and contacts | $10K-$50K/yr (grant-funded) |

### Tier 2: Growth Market (Year 2-3)

| Segment | Pain Point | Why They'll Pay | Deal Size |
|---|---|---|---|
| **Financial services** (hedge funds, PE, M&A) | Deal communications are high-value targets for espionage. Insider trading investigations start with message metadata. | Competitive intelligence protection, regulatory compliance | $100K-$500K/yr |
| **Healthcare** (hospital systems, pharma R&D) | HIPAA requires encryption. Patient data on regular messengers is a violation. | HIPAA compliance, audit trail, patient privacy | $75K-$300K/yr |
| **Corporate R&D** (biotech, semiconductor, energy) | Trade secret theft via communications interception costs billions annually. | IP protection, competitive advantage | $100K-$500K/yr |

### Tier 3: Premium Market (Year 3-5)

| Segment | Pain Point | Why They'll Pay | Deal Size |
|---|---|---|---|
| **Defense / intelligence** | Classified communications need mobile flexibility without SCIF constraints. | Operational security, mobility, reduced infrastructure cost | $500K-$5M/yr |
| **Government agencies** | Sovereign communications infrastructure — cannot depend on US-controlled platforms. Non-Five Eyes governments especially. | Digital sovereignty, independence from foreign platforms | $200K-$2M/yr |
| **Cryptocurrency exchanges & funds** | Hot wallet operations, OTC desk communications are prime targets. Need comms that can't be intercepted even by sophisticated state actors. | Asset protection, operational security | $100K-$500K/yr |

---

## Competitive Advantage of This Model

### Why Community + Enterprise Beats Pure Commercial

1. **Security through transparency.** Every line of code is auditable. Enterprise buyers don't have to trust Light Brands — they trust the math and verify the code. This is a stronger sales argument than any proprietary competitor can make.

2. **Faster development.** A global community of motivated privacy advocates will build faster than any company can hire. Signal has ~50 engineers. Invisible's community could have hundreds or thousands of contributors across cryptography, networking, mobile development, and security research.

3. **Network effects.** Every community user running a relay node strengthens the network that enterprise customers depend on. Enterprise customers fund infrastructure that community users benefit from. It's a flywheel.

4. **Talent pipeline.** Top contributors become potential hires. The community doubles as a recruiting pool of people who already understand the codebase.

5. **Credibility.** An open source project backed by independent security audits and used by thousands of community users has more credibility than a closed-source startup claiming to be secure.

### Why Enterprise Customers Won't Just Self-Deploy

1. **Compliance complexity.** Building a compliant deployment (HIPAA, SOX, FedRAMP) requires deep expertise in both the Invisible protocol and regulatory requirements. This is expensive consulting work.

2. **Integration work.** Connecting Invisible to an organization's existing MDM, SSO, SIEM, and eDiscovery infrastructure requires professional services that take weeks or months.

3. **SLA requirements.** A law firm can't tell a judge "our messaging was down because a community relay node went offline." They need contractual uptime guarantees.

4. **Liability.** Enterprise buyers need a vendor they can hold contractually responsible. Open source projects don't sign BAAs or accept liability.

5. **Ongoing support.** Security incidents, performance issues, and upgrade management require dedicated support teams, not forum posts.

---

## Governance Model

### The Foundation

**Entity:** Invisible Foundation (Swiss or Liechtenstein non-profit)

**Responsibilities:**
- Owns the Invisible trademark and protocol specification
- Manages the open source repositories
- Coordinates security audits (annual, by independent firms)
- Manages the bug bounty program
- Governs protocol changes via RFC process
- Ensures no single entity (including Light Brands) can capture the project

**Board composition:**
- 2 seats: Light Brands (as primary sponsor and core contributor)
- 3 seats: Elected by community contributors (1-year terms)
- 2 seats: Independent security researchers / academics
- Total: 7 seats. Light Brands is a minority. Community has majority control.

### Light Brands' Role

**Core contributor:** Light Brands employs full-time developers working on the open source project. Their contributions go through the same review process as any community contribution.

**Enterprise vendor:** Light Brands builds and sells the enterprise deployment product. The enterprise management layer (admin dashboard, compliance logging, MDM integration) is source-available with a commercial license.

**Financial supporter:** Light Brands contributes a percentage of enterprise revenue to the foundation for infrastructure, audits, and community programs.

**Not a gatekeeper:** Other companies can also build commercial products on the Invisible protocol. The license explicitly allows this. Competition improves the ecosystem.

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| **Community doesn't materialize** | No contributors, Light Brands builds alone | Seed with paid full-time developers. Target academic partnerships. Focus on specific high-value modules (Rust crypto, mixnet) that attract security researchers. |
| **Fork risk** | Competitor forks the project and competes | AGPL license ensures forks stay open. Enterprise value is in deployment expertise and compliance tooling, not the code itself. Red Hat thrives despite CentOS/Rocky/Alma. |
| **Enterprise sales cycle too long** | Cash flow problems before revenue | Start with smaller, faster deals (law firms, NGOs) before pursuing enterprise/government. Keep team lean until revenue proves the model. |
| **Regulatory pressure** | Governments ban or restrict Invisible | Protocol camouflage + jurisdiction diversity. Foundation in privacy-favorable jurisdiction. Decentralized infrastructure can't be shut down from one point. |
| **Nym or Session adds missing features** | Competitive moat narrows | Invisible's moat is convergence (all layers in one product) + enterprise deployment expertise. Individual feature parity doesn't replicate the integrated experience or the enterprise sales relationship. |
| **Security vulnerability** | Catastrophic trust loss | Bug bounty from day one. Annual independent audits. Reproducible builds. Transparent disclosure process. This is actually where open source shines — vulnerabilities get found and fixed faster. |

---

## Implementation Roadmap

| Phase | Timeline | Community Focus | Enterprise Focus |
|---|---|---|---|
| **1. Open Source Launch** | Months 1-6 | Publish crypto core, protocol specs, contributor guide. First community contributors. Academic partnerships. | Begin enterprise product design. Identify first 3-5 pilot customers. |
| **2. Alpha Network** | Months 6-12 | Community relay nodes come online. Bug bounty program. First security audit. | Pilot deployments with early customers. Iterate on compliance and admin features. |
| **3. Beta Launch** | Months 12-18 | Mobile apps in beta. 100+ community nodes. Governance formalized. Foundation established. | First paying enterprise customers. SOC 2 certification process begins. |
| **4. Production** | Months 18-24 | Stable release. Independent audit completed. 500+ community nodes. | Enterprise tier launched. 10+ paying customers. |
| **5. Scale** | Months 24-36 | 1,000+ nodes. SDK and ecosystem. Multiple independent client implementations. | 50+ enterprise customers. Government/defense pipeline. $5M+ ARR. |

---

## The Bottom Line

The community builds the most private messenger in the world. They build it because they believe in it — because privacy is a human right, because they're cryptographers who want to solve hard problems, because they're activists who need this tool to survive.

Light Brands turns that into a business by doing the hard, unglamorous work that enterprises need: deployment, integration, compliance, support, and SLA guarantees. The community gets a better product (because enterprise revenue funds full-time developers). The enterprises get a product they can trust (because the code is open and audited). Light Brands gets a sustainable business built on top of genuine value creation for both sides.

Everyone wins. Privacy scales.
