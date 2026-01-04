# Architecture Documentation

Technical system design specifications for the VIBEUP platform.

## Contents

### [data-models.md](data-models.md)
Complete PostgreSQL database schema with 43 tables, all protected by Row Level Security (RLS) policies. Includes entity relationships, constraints, indexes, and data integrity rules.

### [api-reference.md](api-reference.md)
Complete API endpoint catalog with 60+ routes. Each endpoint includes:
- Request/response schemas
- Authentication requirements
- Error codes and handling
- Rate limiting rules
- Example requests/responses

### [service-layer.md](service-layer.md)
Business logic patterns and service class architecture. Covers:
- BaseDatabaseService pattern
- Error handling standards
- External service integrations (Stripe, Claude, OneTreePlanted)
- Sentry integration patterns
- Transaction management

### [ai-model-router.md](ai-model-router.md)
Multi-provider AI orchestration system for Mira's intelligence. Features:
- Provider-agnostic architecture (Claude, GPT-4o, Gemini, Grok)
- Automatic fallback and retry logic
- Cost optimization through smart routing
- 99.9%+ availability target
- Comprehensive analytics

### [deployment-infrastructure.md](deployment-infrastructure.md)
Production deployment configuration for:
- Vercel (Next.js hosting, preview deployments, edge functions)
- Cloudflare (CDN, DDoS protection, WAF, DNS)
- Supabase (PostgreSQL, Auth, Storage, Realtime)
- GitHub Actions (CI/CD pipelines)

### [ai-coding-config-architecture.md](ai-coding-config-architecture.md)
AI development infrastructure architecture:
- Rules system (coding standards automatically applied)
- Commands (workflow automation like /autotask, /swarm)
- Agents (specialized AI personas with deep expertise)
- Integration with VIBEUP conscious development
- How ai-coding-config powers consistent, quality development

## Architecture Principles

1. **Backend First**: Flawless backend is non-negotiable
2. **Test-Driven**: 90%+ service layer coverage required
3. **Observable**: Sentry logging from day one
4. **Scalable**: Designed for 100K+ users
5. **Secure**: RLS on every table, JWT auth, HTTPS/TLS
6. **Mobile-First**: Optimized for mobile performance

## Key Technologies

- **Database**: PostgreSQL via Supabase
- **APIs**: Next.js API Routes (serverless)
- **Auth**: Supabase Auth (email, phone, OAuth)
- **Storage**: Supabase Storage (S3-compatible)
- **Real-time**: Supabase Realtime (WebSocket)
- **AI**: Multi-provider router (Claude primary)
- **Payments**: Stripe
- **Monitoring**: Sentry

## Related Documentation

- [../epics/](../epics/) - Feature specifications that use this architecture
- [../operations/testing-strategy.md](../operations/testing-strategy.md) - Testing approach
- [../operations/observability-spec.md](../operations/observability-spec.md) - Monitoring setup
- [../MASTER-PLAN.md](../MASTER-PLAN.md) - Platform overview

---

[← Back to Main README](../README.md)

