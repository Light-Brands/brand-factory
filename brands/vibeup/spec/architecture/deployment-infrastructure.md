# Deployment Infrastructure - Vercel & Cloudflare

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Infrastructure Overview

VIBEUP uses a modern, serverless infrastructure optimized for global performance, security, and developer experience.

**Brand Integration**: All deployment processes maintain [brand identity system](../brand/) - status pages, maintenance messages, and deployment announcements use supportive brand voice.

**Stack**:
- **Vercel**: Application hosting, serverless functions, preview deployments
- **Cloudflare**: CDN, DDoS protection, DNS, WAF
- **Supabase**: Database, auth, storage (self-hosted PostgreSQL)
- **GitHub**: Source control, CI/CD

---

## Vercel Configuration

### Project Settings

```json
{
  "name": "vibeup-app",
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next",
  "regions": ["sfo1"],
  "functions": {
    "maxDuration": 10
  }
}
```

### Environment Variables

**Production**:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]
NEXT_PUBLIC_SENTRY_DSN=[sentry-dsn]
SENTRY_AUTH_TOKEN=[token]
STRIPE_SECRET_KEY=sk_live_[key]
STRIPE_WEBHOOK_SECRET=whsec_[secret]
ANTHROPIC_API_KEY=sk-ant-[key]
ONETREEPLANTED_API_KEY=[key]
NEXT_PUBLIC_APP_URL=https://app.vibeup.io
NODE_ENV=production
```

**Preview** (same as production but with preview/test keys)

### Cron Jobs

```json
{
  "crons": [
    {
      "path": "/api/cron/daily-affirmations",
      "schedule": "0 9 * * *"
    },
    {
      "path": "/api/cron/practice-reminders",
      "schedule": "0 */6 * * *"
    },
    {
      "path": "/api/cron/tree-planting",
      "schedule": "0 0 1 * *"
    }
  ]
}
```

---

## Cloudflare Configuration

### DNS Setup

```
Type    Name    Content                     Proxy   TTL
A       @       76.76.21.21                Yes     Auto
CNAME   www     vibeup.io                  Yes     Auto
CNAME   app     cname.vercel-dns.com       Yes     Auto
TXT     @       [vercel-verification]      No      Auto
```

### SSL/TLS

- Mode: Full (strict)
- Min TLS: 1.2
- TLS 1.3: Enabled
- Always Use HTTPS: On
- HSTS: Enabled (max-age=31536000, includeSubDomains, preload)

### Security Headers

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## Deployment Workflow

### Preview Deployments

Every PR creates a preview deployment:

```
URL Pattern: pr-[number]-vibeup.vercel.app
Database: Supabase preview project
Stripe: Test mode
Lifetime: Until PR merged/closed
```

### Production Deployments

Merging to `main` triggers production deployment:

```
URL: app.vibeup.io
Database: Supabase production
Stripe: Live mode
Rollback: Instant via Vercel dashboard
```

---

## Monitoring & Alerts

### Uptime Monitoring

- Health check: GET /api/health every 60 seconds
- Alert if 3 consecutive failures
- Status page: status.vibeup.io

### Performance Monitoring

- Sentry transaction traces
- Vercel Analytics
- Database slow query log (>500ms)

---

**Related**: [`epic-00-foundation.md`](../epics/epic-00-foundation.md), [`observability-spec.md`](../operations/observability-spec.md)

