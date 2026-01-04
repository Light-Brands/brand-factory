# Epic Specifications

This directory contains all feature implementation specifications, organized as standalone modules that can be implemented independently.

## Epic Overview

Each epic is a complete, self-contained specification including:
- Vision and objectives
- Database schema
- API endpoints
- Service layer logic
- UI components
- Test specifications
- Success metrics

## Implementation Order

Build epics in this sequence:

1. **[epic-00-foundation.md](epic-00-foundation.md)** - Infrastructure (MUST BUILD FIRST)
2. **[epic-01-mira.md](epic-01-mira.md)** - AI companion (Blocks all other epics)
3. **[epic-1a-crypto.md](epic-1a-crypto.md)** - Crypto Financial Layer (Parallel with Epic 1)
4. **[epic-1b-karma.md](epic-1b-karma.md)** - Karma Recognition Layer (After Epic 1A)
5. **[epic-02-humans.md](epic-02-humans.md)** & **[epic-03-practices.md](epic-03-practices.md)** - Can build in parallel
6. **[epic-04-discovery.md](epic-04-discovery.md)** - Requires Epics 0, 1, 2
7. **[epic-05-impact.md](epic-05-impact.md)** - Can build anytime after Epic 1
8. **[epic-06-business.md](epic-06-business.md)** - Requires Epics 0, 1, 2
9. **[epic-07-community.md](epic-07-community.md)** - Requires Epics 0, 1, 3, 4, 6
10. **[epic-08-monetization.md](epic-08-monetization.md)** - Requires Epics 0, 6, 7

## Epic Descriptions

### [Epic 00: Foundation](epic-00-foundation.md)
Infrastructure, database, testing framework, observability, CI/CD, feature flags, and admin panel foundation. **Must be built first.**

### [Epic 01: Mira](epic-01-mira.md)
VIBEUP's AI companion and platform concierge. Handles onboarding, account creation, daily guidance, and contextual intelligence throughout the platform.

### [Epic 1A: Crypto Financial Layer](epic-1a-crypto.md)
Crypto financial infrastructure including wallet identity, handle-based payments (@username), VIBES utility token, USDC stablecoin transfers, multi-chain support (Base L2, Solana, Polygon), and the CryptoRouterService consumed by all payment features. **Includes Mira safety architecture with user-level verification.**

### [Epic 1B: Karma Layer](epic-1b-karma.md)
Conscious gamification foundation providing the KARMA recognition score (non-transferable), dual currency model with VIBES, planetary impact tracking (trees planted, carbon offset), badge system with optional Soul-Bound NFTs, leaderboards, and the KarmaRouterService for platform-wide recognition.

### [Epic 02: Humans](epic-02-humans.md)
Human profiles with identity attributes, chemistry matching (astrology, Enneagram, Human Design), connections, and the VIBEUP Verified badge.

### [Epic 03: Practices](epic-03-practices.md)
Practice tracking system with daily logging, streak calculations, milestone celebrations, and practice accountability features.

### [Epic 04: Discovery](epic-04-discovery.md)
Social discovery features including alignment-based matching, connection requests, messaging, map view, and search functionality.

### [Epic 05: Impact](epic-05-impact.md)
Community-led development through feature voting, feedback collection, testimonials, and progressive engagement challenges.

### [Epic 06: Business](epic-06-business.md)
Business profiles for wellness professionals and conscious brands, including verification, services, events, products, and perks system.

### [Epic 07: Community](epic-07-community.md)
Community constellations (human and business-owned), vibes feed with emotional reactions, moderation tools, and practice journeys.

### [Epic 08: Monetization](epic-08-monetization.md)
Membership tiers (Community free, Regenerative $4/mo), Stripe integration, affiliate program, business premium features, and sponsorships.

## Cross-Epic Integration

All epics integrate with:
- **Mira Service** (Epic 1) - Contextual AI guidance throughout every feature
- **Crypto Router** (Epic 1A) - Wallet identity, payments, VIBES rewards (with user-level verification safety)
- **Karma Router** (Epic 1B) - Recognition scoring, badges, planetary impact, VIBES multipliers
- **Feature Flags** (Epic 0) - Every feature can be toggled independently
- **Analytics** (Epic 0) - Comprehensive event tracking
- **Observability** (Epic 0) - Sentry logging and monitoring

### The Three Foundational Primitives

```
VIBEUP Foundation Architecture
├── Epic 1:  Mira (AI Layer)      → Intelligence & Guidance
├── Epic 1A: Crypto (VIBES)       → Value & Utility  
└── Epic 1B: Karma (KARMA)        → Recognition & Impact
```

All downstream epics (2-8) consume these three primitives.

## Related Documentation

- [../MASTER-PLAN.md](../MASTER-PLAN.md) - Platform vision and architecture
- [../architecture/](../architecture/) - Technical system design
- [../operations/testing-strategy.md](../operations/testing-strategy.md) - TDD framework
- [../brand/brand-identity-integration.md](../brand/brand-identity-integration.md) - Brand standards

---

[← Back to Main README](../README.md)

