# VIBEUP Brand

**A conscious social platform connecting wellness seekers with aligned practitioners and communities.**

## Overview

VIBEUP is a platform designed to help people discover and connect with wellness practitioners, build authentic relationships, and grow through conscious practices. The platform features Mira, an AI companion that guides users through their wellness journey.

## Brand Specifications

This folder contains the complete VIBEUP platform specification, organized as follows:

```
vibeup/
└── spec/
    ├── README.md              # Specification navigation hub
    ├── master-plan.md         # Platform vision & architecture (92KB)
    │
    ├── epics/                 # Feature specifications (12 epics)
    │   ├── epic-00-foundation.md   # Infrastructure
    │   ├── epic-01-mira.md         # AI companion & onboarding
    │   ├── epic-02-humans.md       # Profiles & connections
    │   ├── epic-03-practices.md    # Practice tracking
    │   ├── epic-04-discovery.md    # Social discovery
    │   ├── epic-05-impact.md       # Feedback & voting
    │   ├── epic-06-business.md     # Business profiles
    │   ├── epic-07-community.md    # Communities
    │   ├── epic-08-monetization.md # Payments & memberships
    │   ├── epic-1a-crypto.md       # Cryptocurrency
    │   └── epic-1b-karma.md        # Karma system
    │
    ├── architecture/          # Technical design (11 docs)
    │   ├── data-models.md          # 43 database tables
    │   ├── api-reference.md        # 60+ API endpoints
    │   ├── ai-model-router.md      # Multi-provider AI
    │   ├── crypto-router.md        # Cryptocurrency routing
    │   └── ...
    │
    ├── brand/                 # Brand identity (10 docs)
    │   ├── 01-visual-identity.md
    │   ├── 02-brand-deck.md
    │   ├── 03-brand-voice-messaging.md
    │   ├── 04-mira-personality-guide.md
    │   └── ...
    │
    ├── design/                # UX/UI specifications
    │   ├── guidelines.md           # Development standards
    │   ├── design-system.md        # Implementation guide
    │   ├── component-catalog.md    # Component reference
    │   └── ...
    │
    ├── operations/            # Operational docs
    │   ├── admin-panel-spec.md
    │   ├── feature-flags.md
    │   └── ...
    │
    └── development/           # AI coding infrastructure (50+ files)
        ├── plugins/
        ├── commands/
        └── ...
```

## Quick Links

- **[Specification Hub](spec/README.md)** - Complete specification navigation
- **[Master Plan](spec/master-plan.md)** - Vision, architecture, and roadmap
- **[Visual Identity](spec/brand/01-visual-identity.md)** - Colors, typography, spacing
- **[Mira Personality](spec/brand/04-mira-personality-guide.md)** - AI companion personality

## Design System Integration

VIBEUP uses the Onyx Design System located at:
- **[Onyx Design System](../../design-system/design-system-v2/)** - Shared component library

The design tokens and components are brand-agnostic and can be themed according to the visual identity specifications in this folder.

## Key Brand Elements

### Visual Identity
- **Primary Background**: Deep Abyss (#04282F)
- **Accent Color**: Aqua Light (#97D9C4)
- **Typography**: Inter, SF Pro, system-ui

### Mira AI Companion
Mira is VIBEUP's AI guide who helps users:
- Navigate their wellness journey
- Discover aligned practitioners
- Build authentic connections
- Track and celebrate progress

### Core Values
- Conscious development
- Authentic connections
- Personal growth
- Community support

## Documentation Totals

| Category | Count |
|----------|-------|
| Epics | 12 |
| Architecture Docs | 11 |
| Brand Documents | 10 |
| Database Tables | 43 |
| API Endpoints | 60+ |
| Feature Flags | 60+ |
| Total Pages | ~200 |

---

**License**: Proprietary - VIBEUP Internal Use Only
