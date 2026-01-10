# Chrono-Commune

> *Where Time Becomes Community*

**Chrono-Commune** is a community-first collaborative calendar platform that transforms schedule sharing into a seamless, intentional experience. Unlike productivity-focused calendar apps, Chrono-Commune prioritizes human connection over efficiency.

## Vision

To create an all-in-one solution where families, friends, and communities share not just their schedules, but their intentions - eliminating coordination friction while respecting attention and privacy.

## Core Philosophy

Time is the most precious resource we share. Chrono-Commune believes that when we synchronize our time, we synchronize our intentions, building stronger bonds through coordinated action.

## Differentiators

| Pillar | Description |
|--------|-------------|
| **Community-First Design** | Built for communities, not corporations. Optimizes for group health over individual productivity |
| **Soul-Aligned Scheduling** | Every moment has meaning. Intentionality over logistics |
| **Privacy-Forward** | Your time is yours. Your data is yours. No tracking, full export |
| **Mindful Notifications** | Daily digests by default, not constant interruptions |

## Specification Package

| Document | Description |
|----------|-------------|
| [Executive Summary](./spec/00-executive-summary.md) | One-page overview with key metrics |
| [Council Alignment](./spec/01-council-alignment.md) | Sacred Law compliance (9.2/10) |
| [MVP Architecture](./spec/02-mvp-architecture.md) | Technical spec (20,000 LOC) |
| [Positioning](./spec/03-positioning.md) | Market positioning and messaging |
| [Phase Roadmap](./spec/03-saas-phase-roadmap.md) | Traction-triggered expansion plan |
| [Success Metrics](./spec/07-success-metrics.md) | KPIs and traction triggers |
| [Module Manifest](./spec/08-module-manifest.json) | Brand Factory integration |

### Market Research

| Document | Description |
|----------|-------------|
| [Market Analysis](./market/market-analysis.yaml) | TAM/SAM/SOM, competitors, gaps |
| [Market Summary](./market/README.md) | Executive market overview |

### Original Research

| Document | Description |
|----------|-------------|
| [Platform Overview](./spec/00-platform-overview.md) | Original feature research |
| [Feature Specification](./spec/01-feature-specification.md) | Detailed feature breakdowns |
| [Idea Evaluation](./spec/02-idea-evaluation.md) | SaaS viability assessment |

## Status

**Phase**: SaaS Specification Complete
**Evaluation Score**: 7.6/10 (Conditional Proceed)
**MVP Code Budget**: 20,000 LOC
**Next Steps**: Phase 0 Validation (4-6 weeks)

### Key Metrics

| Metric | Target |
|--------|--------|
| Year 1 MAU | 50,000 |
| Year 1 Paying Users | 5,000 |
| Year 1 ARR | $300,000 |
| 30-Day Retention | 40%+ |

## Pricing

| Tier | Price | Includes |
|------|-------|----------|
| Free | $0 | 3 calendars, 8 members, no ads |
| Commune | $5.99/mo | 10 calendars, 25 members, premium features |
| Extended Community | $9.99/mo | Unlimited calendars, 100 members |

## Tech Stack (MVP)

- **Frontend**: Next.js 14 + Tailwind + shadcn/ui
- **Backend**: tRPC + Drizzle ORM + PostgreSQL
- **Real-time**: Socket.io
- **Infrastructure**: Vercel + Neon + Upstash Redis
