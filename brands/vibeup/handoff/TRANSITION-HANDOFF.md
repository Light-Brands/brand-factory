# VIBEUP Transition & Handoff Document

**Prepared for:** Luke (luke@vibeup.io), George, Andreas
**Prepared by:** Dan
**Date:** January 2025
**Status:** HANDOFF IN PROGRESS

---

## Document Purpose

This document consolidates all transition requirements for the VIBEUP project handoff. It provides access to credentials, software tools, codebase documentation, and team handoff information in a single organized reference.

**Password Manager:** All passwords are stored in a **shared Keeper account**. Luke's vibeup email already has access.

---

## ITEMS REQUIRING DAN'S INPUT

> **Instructions:** Complete the items below, then delete this section when done.

### Access & Security
- [ ] **Domain Registrar** - Which registrar holds vibeup.io? _______________
- [ ] **2FA Recovery Codes** - Confirm all are stored in Keeper
- [ ] **Missing Services** - Are there any credentials in Keeper not listed below?

### Software Tools
- [ ] **Additional Tools** - List any tools/subscriptions not included below
- [ ] **Cursor Decision** - Keep or Cancel?
- [ ] **Billing Transfers** - Which subscriptions need billing transferred?

### Codebase
- [ ] **Critical Issues** - Any of the 54 GitHub issues that are blockers?
- [ ] **Do NOT Continue** - Any features/directions the team should abandon?
- [ ] **In-Progress Work** - Anything partially implemented needing context?

### Contact Info
- [ ] **Dan's Email** - Email for async transition questions: _______________
- [ ] **Dan's Vibeup Email** - Address to be closed: _______________
- [ ] **Slack Workspace** - Name of workspace to remove access: _______________

---

## Table of Contents

1. [Access & Security](#1-access--security)
2. [Software Tools & Subscriptions](#2-software-tools--subscriptions)
3. [Codebase & Product Clarity](#3-codebase--product-clarity)
4. [Documentation](#4-documentation)
5. [Team & Developer Handoff](#5-team--developer-handoff)
6. [Access Closure & Final Confirmation](#6-access-closure--final-confirmation)

---

## 1. Access & Security

### Password Manager

| Item | Details |
|------|---------|
| **Password Manager** | Keeper |
| **Access Method** | Shared account |
| **Luke's Access** | Granted via vibeup email |

All credentials listed below are stored in Keeper.

### Master Credentials Checklist

#### Code Repositories

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| **GitHub (vibeup-org)** | github.com/vibeup-org | Owner/Admin | In Keeper |
| **Vercel** | vercel.com | Owner/Admin | In Keeper |
| **Cursor** | cursor.com | Account | In Keeper |
| **Claude/Anthropic** | console.anthropic.com | API Key | In Keeper |

#### Cloud Infrastructure

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| **Supabase** | supabase.com | Owner | In Keeper |
| **Cloudflare** | cloudflare.com | Admin | In Keeper |
| **Domain Registrar** | `DAN: ADD REGISTRAR` | Owner | In Keeper |

#### AI / API Services

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| **OpenAI** | platform.openai.com | API Key | In Keeper |
| **Anthropic (Claude)** | console.anthropic.com | API Key | In Keeper |

#### Payments & External APIs

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| **Stripe** | dashboard.stripe.com | Admin | In Keeper |
| **Twilio** | twilio.com | Account | In Keeper |
| **Mapbox** | mapbox.com | Account | In Keeper |

#### OAuth Provider Consoles

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| **Google Cloud Console** | console.cloud.google.com | Owner | In Keeper |
| **Apple Developer** | developer.apple.com | Admin | In Keeper |

#### Monitoring & Analytics

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| **Sentry** | sentry.io | Owner | In Keeper |

#### Additional Services (DAN TO ADD)

| Service | Website | Account/Access | Status |
|---------|---------|----------------|--------|
| | | | |
| | | | |

### Single-Point-of-Failure Confirmation

- [x] All credentials stored in shared Keeper account
- [x] Luke's vibeup email has access to Keeper
- [ ] Confirm all 2FA recovery codes are in Keeper
- [ ] Confirm no credentials exist only in Dan's personal accounts

---

## 2. Software Tools & Subscriptions

### Active Tools Inventory

| Name | Website | Purpose | Monthly Cost | Recommendation |
|------|---------|---------|--------------|----------------|
| **Supabase** | supabase.com | Database, Auth, Storage, Realtime | `DAN: ADD` | Keep |
| **Vercel** | vercel.com | Hosting, Deployments, Preview Environments | `DAN: ADD` | Keep |
| **Cloudflare** | cloudflare.com | CDN, DNS, DDoS Protection | `DAN: ADD` | Keep |
| **GitHub** | github.com | Source Control, CI/CD | `DAN: ADD` | Keep |
| **OpenAI** | openai.com | AI/Chat (GPT-4) | `DAN: ADD` | Keep |
| **Sentry** | sentry.io | Error Tracking, Monitoring | `DAN: ADD` | Keep |
| **Stripe** | stripe.com | Payments | 2.9% + $0.30/txn | Keep |
| **Twilio** | twilio.com | SMS/Voice | `DAN: ADD` | Keep |
| **Mapbox** | mapbox.com | Maps, Location Services | `DAN: ADD` | Keep |
| **Apple Developer** | developer.apple.com | iOS App, Apple Sign In | $99/year | Keep |
| **Google Cloud** | console.cloud.google.com | OAuth, Google Docs Integration | `DAN: ADD` | Keep |
| **Cursor** | cursor.com | AI Code Editor | `DAN: ADD` | `DAN: DECIDE` |

### Additional Tools (DAN TO ADD)

| Name | Website | Purpose | Monthly Cost | Recommendation |
|------|---------|---------|--------------|----------------|
| | | | | |
| | | | | |

### Action Items

- [ ] Review Keeper for any additional tools/subscriptions
- [ ] Cancel subscriptions no longer needed (CC Luke)
- [ ] Transfer billing where needed

---

## 3. Codebase & Product Clarity

### Repository Overview

**Primary Repository:** `vibeup-org/app-prod`
**Legacy Repository:** `vibeup-org/app` (deprecated - bloated git history)

| Repository | URL | Status | Version |
|------------|-----|--------|---------|
| **app-prod** | https://github.com/vibeup-org/app-prod | Active | v1.4 |
| **app** | https://github.com/vibeup-org/app | Deprecated | v1.2 (stopped) |

**Why the migration:** The original `app` repository accumulated significant git history bloat during development. `app-prod` is a clean repository for production use.

### Submodules (in app-prod)

The main app-prod repository includes these submodules:

| Submodule | Path | Repository | Purpose |
|-----------|------|------------|---------|
| **worker** | `worker/` | vibeup-org/app-worker | Cloudflare Workers (AI/audio processing) |
| **resources** | `resources/` | vibeup-org/resources | Shared resources |
| **.ai** | `.ai/` | vibeup-org/.ai | AI configuration/prompts |
| **ios** | `ios/` | vibeup-org/ios | iOS app (production) |
| **ios-dev** | `ios-dev/` | vibeup-org/ios-dev | iOS app (development) |

### Branch Strategy

**Current State (app-prod):**
- `development` - Active development branch (current state of app)
- `main` - Synced with development (not yet transitioned to production)
- `staging` - Staging environment

**Target Environments:**
| Environment | Branch | URL |
|-------------|--------|-----|
| **Dev** | development | (Vercel preview) |
| **Staging** | staging | (Vercel preview) |
| **Prod** | main | https://app-prod-seven.vercel.app |

**Note:** Legacy Vercel branch preview links are being consolidated to just dev/staging/prod.

### Tech Stack (Actual)

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15.2.4 |
| **Language** | TypeScript 5 |
| **UI** | React 19, Radix UI, Tailwind CSS |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **AI** | OpenAI GPT-4, Cloudflare Workers |
| **Audio** | Cloudflare Workers (TTS/STT) |
| **Maps** | Mapbox GL |
| **Forms** | React Hook Form + Zod |
| **Mobile** | Capacitor (iOS) |
| **Hosting** | Vercel + Cloudflare |
| **Testing** | Vitest |

### Feature Status

**v2.0.0 Achievement - All-Worker Architecture:**
- All AI and audio processing migrated to Cloudflare Workers
- ~50% faster audio generation
- Eliminated 30-second timeout constraints
- Global edge distribution with sub-second response times

**Key Features Implemented:**
- [x] AI Chat System with multiple personality modes
- [x] Voice integration (speech-to-text, text-to-speech)
- [x] Feature Dashboard for lifecycle management
- [x] Modular architecture with database-backed registry
- [x] Supabase authentication with row-level security
- [x] iOS app via Capacitor

### Known Technical Debt & Blockers

| Issue | Priority | Notes |
|-------|----------|-------|
| 54 open GitHub issues | Various | See GitHub Issues |
| `DAN: ADD CRITICAL ISSUES` | | |

### What NOT to Continue (DAN TO ADD)

> List any features, directions, or approaches the team should abandon:

| Item | Reason |
|------|--------|
| | |
| | |

### In-Progress Work Needing Context (DAN TO ADD)

> List anything partially implemented that needs explanation:

| Feature | Status | Notes |
|---------|--------|-------|
| | | |
| | | |

### Key Design Decisions

1. **All-Worker Architecture** - AI/audio processing on Cloudflare edge for performance
2. **Modular System** - Database-backed feature registry with runtime flags
3. **Supabase-First** - Auth, database, and realtime on Supabase
4. **Mobile via Capacitor** - Single codebase for web and iOS

---

## 4. Documentation

### Environment Variables Required

Full list in `.env.example` in app-prod repository:

**Supabase:**
- `SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_ANON_KEY` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_PROJECT_ID` / `NEXT_PUBLIC_SUPABASE_PROJECT_ID`

**OpenAI:**
- `OPENAI_API_KEY`

**Cloudflare:**
- `CLOUDFLARE_ACCOUNT_ID`
- `CF_PAGES`

**Application:**
- `NODE_ENV`
- `NEXT_PUBLIC_APP_URL`

**Security Headers:**
- `ENABLE_CSP_HEADERS`
- `ENABLE_STRICT_SECURITY`
- `ENABLE_ENHANCED_SECURITY`

**Google Integration (Optional):**
- `GOOGLE_APPLICATION_CREDENTIALS`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `GOOGLE_PROJECT_ID`
- `GOOGLE_DOCS_TERMS_OF_SERVICE_ID`
- `GOOGLE_DOCS_PRIVACY_POLICY_ID`
- `GOOGLE_DOCS_AI_AGREEMENT_ID`

**Logging (Optional):**
- Various `ENABLE_*_LOGGING` and `LOG_*` variables

### Setup Instructions

1. Clone app-prod with submodules:
   ```bash
   git clone --recurse-submodules https://github.com/vibeup-org/app-prod.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Fill in credentials from Keeper

5. Run database migrations:
   ```bash
   npm run db:migrate
   ```

6. Start development server:
   ```bash
   npm run dev
   ```

### Deployment

**Vercel Configuration:**
- Framework: Next.js
- Build: `npm run build`
- Install: `npm run install:vercel`
- API timeout: 30 seconds
- Node memory: 4GB
- Build cache: Disabled (fresh builds)

**Branches auto-deploy:**
- main → Production
- staging → Staging preview
- development → Dev preview

---

## 5. Team & Developer Handoff

### Current Team

- **Andreas** - Team Lead
- **George** - Development
- **Ed & Jon** - Supporting (week of January 12)
- **New development teams** - Starting week of January 12

### New Developer Onboarding

**Step 1:** Get Keeper access from Luke

**Step 2:** Clone and set up:
```bash
git clone --recurse-submodules https://github.com/vibeup-org/app-prod.git
cd app-prod
npm install
cp .env.example .env.local
# Fill credentials from Keeper
npm run dev
```

**Step 3:** Review README.md in app-prod for architecture overview

**Step 4:** Check GitHub Issues for current work items

### Key Contacts

| Role | Name | Contact |
|------|------|---------|
| Transition Lead | Luke | luke@vibeup.io |
| Team Lead | Andreas | (via Luke) |
| Development | George | (via Luke) |

### Async Support from Dan

| Item | Details |
|------|---------|
| **Email** | `DAN: ADD EMAIL` |
| **Response Time** | `DAN: ADD COMMITMENT (e.g., within 24-48 hours)` |
| **Available Until** | `DAN: ADD END DATE` |

---

## 6. Access Closure & Final Confirmation

### Credential Transfer Confirmation

- [x] All credentials in shared Keeper account
- [x] Luke's vibeup email has Keeper access
- [ ] All team members have necessary Keeper access
- [ ] Confirm no credentials exist only in Dan's personal accounts

### Dan's Access to Close (Post-Transition)

| System | Account/Details | Status |
|--------|-----------------|--------|
| Team Email | `DAN: ADD EMAIL ADDRESS` | To be closed |
| Slack | `DAN: ADD WORKSPACE NAME` | To be closed |
| GitHub (vibeup-org) | `DAN: ADD USERNAME` | To be removed |
| Vercel | | To be removed |
| Supabase | | To be removed |
| All other platforms | | To be removed |

### Exit Documentation

- [ ] Written termination agreement
- [ ] Exit interview with Dan, Pat, Luke
- [ ] Company-wide message

---

## Completion Criteria

The transition will be considered **complete** when:

- [ ] All credentials verified in Keeper
- [ ] All tools/subscriptions documented and actioned
- [ ] Team has successfully accessed and run app-prod
- [ ] New developers onboarded successfully
- [ ] Dan's access formally closed
- [ ] Exit documentation completed

---

## Quick Reference

| What | Where |
|------|-------|
| **Passwords** | Keeper (shared account) |
| **Active Code** | github.com/vibeup-org/app-prod |
| **Legacy Code** | github.com/vibeup-org/app (deprecated) |
| **Live App** | https://app-prod-seven.vercel.app |
| **Env Vars** | .env.example in app-prod |
| **Issues/Tasks** | GitHub Issues (54 open) |

---

**Document Version:** 2.1
**Last Updated:** January 2025
