# VIBEUP Design Specification

**Complete, implementation-ready specification for the VIBEUP platform**

Version: 1.0.0  
Last Updated: December 16, 2025  
Total Pages: ~200 pages across 21 documents

---

## Quick Start

### For AI Development Teams

1. **Start Here**: Read [`MASTER-PLAN.md`](MASTER-PLAN.md) for vision and architecture
2. **Infrastructure First**: Read [`epic-00-foundation.md`](epics/epic-00-foundation.md)
3. **Pick an Epic**: Read the epic you're implementing (e.g., [`epic-01-mira.md`](epics/epic-01-mira.md))
4. **Reference as Needed**: Use supporting docs for detailed schemas, APIs, etc.
5. **Follow TDD**: Read [`testing-strategy.md`](operations/testing-strategy.md) for test-driven workflow

### For Product Teams

1. **Understand Vision**: Read [`MASTER-PLAN.md`](MASTER-PLAN.md)
2. **Understand Brand**: Read [`brand-identity-integration.md`](brand/brand-identity-integration.md)
3. **See User Flows**: Read [`user-journey-maps.md`](design/user-journey-maps.md)
4. **Review Epic**: Find your feature in the relevant epic document
5. **Check Admin Tools**: Read [`admin-panel-spec.md`](operations/admin-panel-spec.md) for content management

### For Designers

1. **Brand Identity**: Read [`brand/01-visual-identity.md`](brand/01-visual-identity.md)
2. **UX Wireframes**: Read [`brand/06-ux-wireframe-blueprint.md`](brand/06-ux-wireframe-blueprint.md)
3. **Brand Integration**: Read [`brand/brand-identity-integration.md`](brand/brand-identity-integration.md)
4. **Component Library**: Read [`design/ui-component-library.md`](design/ui-component-library.md)

### For Writers

1. **Brand Voice**: Read [`brand/03-brand-voice-messaging.md`](brand/03-brand-voice-messaging.md)
2. **Mira Personality**: Read [`brand/04-mira-personality-guide.md`](brand/04-mira-personality-guide.md)
3. **Brand Integration**: Read [`brand/brand-identity-integration.md`](brand/brand-identity-integration.md)
4. **Epic-Specific Copy**: Reference relevant epic documents

---

## Directory Structure

The specification is organized into logical subdirectories for easy navigation:

```
brands/vibeup/spec/
├── README.md                    # This file - central navigation hub
├── MASTER-PLAN.md              # Platform vision, architecture, roadmap
│
├── epics/                       # Feature implementation specifications
│   ├── epic-00-foundation.md   # Infrastructure (Must build first)
│   ├── epic-01-mira.md         # AI companion & onboarding
│   ├── epic-02-humans.md       # Profiles & connections
│   ├── epic-03-practices.md    # Practice tracking
│   ├── epic-04-discovery.md    # Social discovery & messaging
│   ├── epic-05-impact.md       # Feedback & voting
│   ├── epic-06-business.md     # Business profiles
│   ├── epic-07-community.md    # Communities & posts
│   ├── epic-08-monetization.md # Memberships & payments
│   ├── epic-1a-crypto.md       # Cryptocurrency & tokenomics
│   └── epic-1b-karma.md        # Karma layer system
│
├── architecture/               # Technical system design (11 docs)
│   ├── README.md
│   ├── data-models.md         # Database schema (43 tables)
│   ├── api-reference.md       # API endpoints (60+ routes)
│   ├── service-layer.md       # Business logic patterns
│   ├── ai-model-router.md     # Multi-provider AI system
│   ├── ai-coding-config-architecture.md  # AI dev infrastructure
│   └── deployment-infrastructure.md  # Vercel, Cloudflare, Supabase
│
├── operations/                 # Day-to-day operational docs
│   ├── admin-panel-spec.md    # Admin interface
│   ├── feature-flags.md       # Feature toggle system
│   ├── observability-spec.md  # Sentry & logging
│   ├── testing-strategy.md    # TDD framework
│   └── environment-variables-reference.md  # All env vars
│
├── brand/                      # Brand & culture (10 docs)
│   ├── README.md
│   ├── 01-visual-identity.md
│   ├── 02-brand-deck.md
│   ├── 03-brand-voice-messaging.md
│   ├── 04-mira-personality-guide.md
│   ├── 05-product-vision.md
│   ├── 06-ux-wireframe-blueprint.md
│   ├── brand-identity-integration.md
│   ├── brand-identity-README.md
│   └── conscious-development-manifesto.md
│
├── design/                     # UX/UI specs (6+ files + dirs)
│   ├── README.md
│   ├── GUIDELINES.md
│   ├── CODEX_USAGE.md
│   ├── existing-patterns.json
│   ├── ui-component-library.md
│   ├── user-journey-maps.md
│   ├── templates/
│   └── tools/
│
└── development/                # AI dev infrastructure (50+ files)
    ├── README.md
    ├── ai-coding-config-README.md
    ├── AGENTS.md
    ├── CLAUDE.md
    ├── implementation-plan.md
    ├── rules/              # Coding standards
    ├── commands/           # Workflow automation
    ├── agents/             # Specialized AI personas
    ├── templates/          # Code templates
    ├── scripts/            # Bootstrap utilities
    ├── docs/               # Extended documentation
    ├── skills/             # Reusable skills
    └── plugins/            # Plugin bundles
```

---

## Epic Reference Table

Quick reference for epic implementation order and dependencies:

| Epic | Name | Timeline | Dependencies | Status | Key Focus |
|------|------|----------|--------------|--------|-----------|
| 0 | Foundation | 2-3 weeks | None | **Must Build First** | Infrastructure, DB, testing, observability |
| 1 | Mira | 2 weeks | Epic 0 | P0 - Blocks All | AI companion, onboarding, account creation |
| 2 | Humans | 2-3 weeks | Epics 0, 1 | P0 | Profiles, chemistry, connections |
| 3 | Practices | 2-3 weeks | Epics 0, 1 | P0 | Practice tracking, streaks, accountability |
| 4 | Discovery | 3-4 weeks | Epics 0, 1, 2 | P0 | Social discovery, search, messaging |
| 5 | Impact | 1-2 weeks | Epics 0, 1 | P1 | Voting, feedback, co-creation |
| 6 | Business | 3-4 weeks | Epics 0, 1, 2 | P1 | Business profiles, services, verification |
| 7 | Community | 2-3 weeks | Epics 0, 1, 3, 4, 6 | P1 | Communities, posts, moderation |
| 8 | Monetization | 2-3 weeks | Epics 0, 6, 7 | P1 | Memberships, Stripe, affiliates |

**Implementation Order**: 0 → 1 → 2 & 3 (parallel) → 4 → 5 → 6 → 7 → 8

---

## Search Tips

**Finding Specific Topics**:

- **Authentication**: epic-00-foundation.md (Supabase Auth setup), epic-01-mira.md (user signup/login)
- **Database Schema**: architecture/data-models.md (all 43 tables with RLS policies)
- **API Endpoints**: architecture/api-reference.md (organized by epic)
- **Mira AI**: epic-01-mira.md (core implementation), architecture/ai-model-router.md (multi-provider system)
- **Testing**: operations/testing-strategy.md (TDD workflow, coverage targets)
- **Deployment**: architecture/deployment-infrastructure.md (Vercel, Cloudflare, Supabase)
- **Brand Standards**: brand/brand-identity-integration.md (how brand informs all epics)
- **Visual Identity**: brand/01-visual-identity.md (colors, typography, spacing)
- **Brand Voice**: brand/03-brand-voice-messaging.md (tone, messaging, copy)
- **Mira Personality**: brand/04-mira-personality-guide.md (complete personality)
- **Design System**: design/GUIDELINES.md (comprehensive UI/UX standards)
- **Dev Infrastructure**: development/README.md (ai-coding-config system)
- **Admin Tools**: operations/admin-panel-spec.md (complete admin interface)
- **Feature Flags**: operations/feature-flags.md (60+ toggles for phased releases)
- **Environment Setup**: operations/environment-variables-reference.md (all env vars needed)

**By User Journey**:
- **New User Flow**: epic-01-mira.md → epic-02-humans.md → epic-03-practices.md
- **Discovery Flow**: epic-04-discovery.md (search, matching, connections)
- **Community Flow**: epic-07-community.md (join, post, engage)
- **Business Flow**: epic-06-business.md (profiles, services, verification)
- **Monetization Flow**: epic-08-monetization.md (membership tiers, Stripe)

**By Component Type**:
- **Database**: architecture/data-models.md
- **APIs**: architecture/api-reference.md
- **Services**: architecture/service-layer.md
- **UI Components**: design/ui-component-library.md
- **User Flows**: design/user-journey-maps.md

---

## Document Index

### Brand Identity System

**[Brand Identity Integration](brand/brand-identity-integration.md)**  
How brand identity (visual, voice, personality) informs all product development.

**[Complete Brand Identity →](brand/)**
Visual identity, brand voice, Mira personality, product vision, UX wireframes.

### Primary Documents

**[MASTER-PLAN.md](MASTER-PLAN.md)** (20 pages)  
Executive summary, vision, complete architecture, technology stack, success metrics, and cross-epic integration.

### Epic Specifications (Standalone Modules)

Each epic can be implemented independently with complete specifications:

1. **[epic-00-foundation.md](epics/epic-00-foundation.md)** - Infrastructure, database, testing, observability (Must build first)
2. **[epic-01-mira.md](epics/epic-01-mira.md)** - Mira AI companion, onboarding, account creation
3. **[epic-02-humans.md](epics/epic-02-humans.md)** - Human profiles, chemistry, connections
4. **[epic-03-practices.md](epics/epic-03-practices.md)** - Practice tracking, streaks, accountability
5. **[epic-04-discovery.md](epics/epic-04-discovery.md)** - Social discovery, search, messaging
6. **[epic-05-impact.md](epics/epic-05-impact.md)** - Voting, feedback, co-creation
7. **[epic-06-business.md](epics/epic-06-business.md)** - Business profiles, verification, services
8. **[epic-07-community.md](epics/epic-07-community.md)** - Community constellations, posts
9. **[epic-08-monetization.md](epics/epic-08-monetization.md)** - Memberships, Stripe, affiliates

### Technical Reference Documents

**[data-models.md](architecture/data-models.md)**  
Complete PostgreSQL schema (43 tables, all with RLS policies)

**[api-reference.md](architecture/api-reference.md)**  
Complete API endpoint catalog (60+ endpoints with contracts)

**[service-layer.md](architecture/service-layer.md)**  
Business logic patterns, service classes, external integrations

**[ui-component-library.md](design/ui-component-library.md)**  
Component catalog following design system

**[user-journey-maps.md](design/user-journey-maps.md)**  
Complete user flows with Mermaid diagrams

**[admin-panel-spec.md](operations/admin-panel-spec.md)**  
Full system control interface for content/user/business management

**[feature-flags.md](operations/feature-flags.md)**  
Complete feature flag catalog (60+ flags)

**[testing-strategy.md](operations/testing-strategy.md)**  
TDD workflow, test organization, coverage targets

**[observability-spec.md](operations/observability-spec.md)**  
Sentry configuration, logging standards, health checks

**[deployment-infrastructure.md](architecture/deployment-infrastructure.md)**  
Vercel, Cloudflare, Supabase configuration

---

## How to Use This Specification

### Implementing a New Epic

1. Read the epic document completely
2. Understand dependencies and integration points
3. Review database schema section
4. Review API contracts section
5. Review service layer section
6. Review UI components section
7. Review test specifications
8. Begin with TDD: Write tests first
9. Implement following specifications
10. Validate against quality gates
11. Update admin panel for feature management

### Adding a New Feature

1. Determine which epic it belongs to
2. Add feature specification to epic document
3. Update database schema if needed
4. Update API contracts
5. Update service layer
6. Update UI components
7. Write test specifications
8. Add feature flag
9. Update admin panel controls
10. Define success metrics

### Understanding System Architecture

1. Read MASTER-PLAN.md Section 3 (Platform Architecture)
2. Review data-models.md for entity relationships
3. Review service-layer.md for business logic patterns
4. Review api-reference.md for integration points

---

## Development Principles (Must Follow)

1. **Quality Over Speed**: Completeness prioritized
2. **Backend First**: Flawless backend is non-negotiable
3. **Mobile-First**: Design for <640px first
4. **Test-Driven**: Tests before implementation
5. **Observable**: Sentry logging from day one
6. **Modular**: Each epic standalone
7. **Feature-Flagged**: Everything can be toggled

---

## Technology Stack Summary

```yaml
Frontend: Next.js 14 + TypeScript + Tailwind + Framer Motion
Backend: Supabase (PostgreSQL + Auth + Storage + Realtime)
Infrastructure: Vercel + Cloudflare + GitHub
Observability: Sentry + Unified Logger
Testing: Jest + Playwright + TDD
Payments: Stripe
AI: Claude (Anthropic)
```

---

## Success Criteria

This specification enables:
- Any AI team to implement VIBEUP from scratch
- Independent epic development without blocking
- Complete rebuild from specifications alone
- Consistent architecture across all features
- Test-driven development with clear acceptance criteria
- Mobile-native experiences on all platforms
- Flawless backend with comprehensive error handling
- Complete admin control over platform

---

## Next Steps

1. **Review Complete Specification**: Read MASTER-PLAN.md and skim all epics
2. **Set Up Infrastructure**: Follow epic-00-foundation.md exactly
3. **Begin Epic 1**: Implement Mira following epic-01-mira.md
4. **Progress Through Epics**: Follow implementation order from MASTER-PLAN.md
5. **Validate Quality**: Meet all quality gates before considering epic "complete"
6. **Deploy Gradually**: Use feature flags for phased rollout

---

## Maintenance

This is a **living specification**. As VIBEUP evolves:

- Update epic documents when requirements change
- Add new epics for major features
- Keep database schema in sync with migrations
- Update API reference when endpoints change
- Maintain test specifications alongside code
- Document architectural decisions
- Track version history

---

## Questions?

Refer to:
- **Vision Questions**: MASTER-PLAN.md
- **Brand Questions**: brand/brand-identity-integration.md, brand/README.md
- **Technical Questions**: Relevant epic or technical document
- **Implementation Questions**: operations/testing-strategy.md, brand/brand-identity-integration.md
- **Architecture Questions**: MASTER-PLAN.md Section 3, architecture/data-models.md

---

**Maintainers**: VIBEUP Development Team
**Repository**: brands/vibeup/spec
**License**: Proprietary - VIBEUP Internal Use Only

