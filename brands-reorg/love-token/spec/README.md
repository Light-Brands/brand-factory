# Love Token Platform Specification

**The World's Greatest Experiment — Complete Technical & Brand Specification**

---

## Overview

This folder contains the complete specification for building Love Token, the world's first Love Economy platform. Every document here serves as a blueprint for AI-driven development using design-system-v2 and ai-coding-config.

## Document Structure

```
spec/
├── README.md                    # This file
├── master-plan.md              # Complete vision, architecture, roadmap
│
├── architecture/               # Technical system design (to be populated)
│   ├── data-models.md          # Database schema, entities
│   ├── api-reference.md        # All API endpoints
│   ├── service-layer.md        # Business logic patterns
│   └── deployment.md           # Infrastructure, CI/CD
│
├── brand/                      # Brand identity (complete)
│   ├── README.md               # Brand overview
│   ├── visual-identity.md      # Colors, typography, UI/UX
│   ├── brand-voice-messaging.md # Copy, tone, messaging
│   └── lumi-personality.md     # AI companion specification
│
├── design/                     # UX/UI specifications (to be populated)
│   ├── component-catalog.md    # UI components for Love Token
│   ├── user-journeys.md        # Complete user flows
│   └── guidelines.md           # Design patterns
│
├── development/                # Development infrastructure (to be populated)
│   ├── coding-standards.md     # Love Token-specific standards
│   ├── ai-agents.md            # Development agents
│   └── commands.md             # Claude commands
│
├── operations/                 # Operational specs (to be populated)
│   ├── feature-flags.md        # Toggle catalog
│   ├── testing-strategy.md     # TDD framework
│   └── observability.md        # Monitoring, logging
│
└── epics/                      # Feature specifications (to be populated)
    ├── epic-00-foundation.md   # Infrastructure
    ├── epic-01-authentication.md
    ├── epic-02-meditation.md
    ├── epic-03-credits.md
    ├── epic-04-wallet.md
    ├── epic-05-redemption.md
    ├── epic-06-donors.md
    ├── epic-07-projects.md
    ├── epic-08-love-flow.md
    ├── epic-09-energy.md
    └── epic-10-miracles.md
```

## Getting Started

### For AI Development Teams

1. **Read master-plan.md** — Understand the complete vision and architecture
2. **Review brand/* documents** — Internalize the identity before building
3. **Reference design-system-v2** — Base component library
4. **Use ai-coding-config** — Development rules and commands

### Development Target

All application code will be developed at:

```
/brands/love-token/app/
```

This keeps the specification separate from implementation while maintaining clear directory structure.

## Key References

### Design System
- **Location:** `/design-system/design-system-v2/`
- **Components:** 50+ production-ready React components
- **Tokens:** Override with Love Token palette
- **Usage:** Import base, customize for Love Token

### AI Coding Configuration
- **Location:** `/design-system/ai-coding-config/`
- **Rules:** `/rules/` — Coding standards
- **Commands:** `/.claude/commands/` — Workflow automation
- **Agents:** `/.claude/agents/` — Specialized assistants

### Original Vision
- **Document:** `Love App Overview - Dan Lawless.docx.md`
- **Location:** `/brands/love-token/`

## Core Philosophy

### We Are Stewarding, Not Building

This is not a typical software project. We are creating the infrastructure for love to flow as currency. Every technical decision serves the mission:

> "Love is not given. Love is shared. Love is earned. Love circulates."

### Decision Framework

| Conflict | Resolution |
|----------|------------|
| Dignity vs Efficiency | Choose dignity |
| Simplicity vs Power | Choose simplicity |
| Automation vs Oversight | Choose oversight |
| Speed vs Trust | Choose trust |

### Quality Gates

- **Correctness:** Credits issue accurately, always
- **Auditability:** Every transaction traceable
- **Simplicity:** Usable by limited-literacy users
- **Dignity:** Every interaction respects participants

## Phase Overview

| Phase | Focus | Status |
|-------|-------|--------|
| 0 | Foundation | Planning |
| 1 | MVP Core (Love Flow) | Planning |
| 2 | Donor & Impact | Planning |
| 3 | Energy & Expansion | Future |
| 4 | Scale & Currency | Future |

## Contact

**Brand Owner:** The World's Greatest Experiment (TWGE)
**Specification Version:** 1.0.0
**Last Updated:** January 10, 2026

---

*This specification is a living document. As we learn from communities, we adapt our systems to serve them better.*

**We are not building features. We are stewarding a system.**
