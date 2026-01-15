# Cedar Capital Dashboard Foundation Development Plan

> **Status**: Planning | **Last Updated**: 2026-01-15 | **Version**: 1.0

This document outlines the foundational development plan for Cedar Capital's dashboard ecosystem and public landing pages. The system serves dual purposes: internal operations management and investor-facing portfolio tools, supported by public lead capture and investor onboarding pages.

---

## Executive Summary

### Platform Components Overview

| Component | Access Level | Primary Users | Purpose |
|-----------|--------------|---------------|---------|
| **Investor Dashboard** | Private | Registered Investors | Portfolio tracking, returns analysis, document access |
| **Operations Dashboard** | Private | Internal Team | Property management, lead management, analytics |
| **Lead Capture Landing Page** | Public | Homeowners/Sellers | Property inquiries, contact forms, lead generation |
| **Investor Portal Landing Page** | Public | Prospective Investors | Investment opportunities, onboarding, registration |

### Architecture Philosophy

The platform follows a **dual-branded, shared-infrastructure** approach:
- Single backend API serving all applications
- Shared component library with brand-specific theming
- Role-based access control (RBAC) for private dashboards
- Public pages optimized for conversion and SEO

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PUBLIC LAYER                                      │
│  ┌─────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │   Lead Capture Landing      │  │   Investor Portal Landing       │   │
│  │   • Property inquiry forms  │  │   • Investment opportunities    │   │
│  │   • Contact forms           │  │   • Onboarding flow             │   │
│  │   • Property valuation tool │  │   • Registration                │   │
│  └─────────────────────────────┘  └─────────────────────────────────┘   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                          ┌─────────┴─────────┐
                          │   Authentication   │
                          │   Gateway (Auth0/  │
                          │   Supabase Auth)   │
                          └─────────┬─────────┘
                                    │
┌───────────────────────────────────┴─────────────────────────────────────┐
│                         PRIVATE LAYER                                    │
│  ┌─────────────────────────────┐  ┌─────────────────────────────────┐   │
│  │   Investor Dashboard        │  │   Operations Dashboard          │   │
│  │   • Portfolio overview      │  │   • Lead management             │   │
│  │   • Investment tracking     │  │   • Property pipeline           │   │
│  │   • Document vault          │  │   • Analytics & reporting       │   │
│  │   • Returns analysis        │  │   • User management             │   │
│  └─────────────────────────────┘  └─────────────────────────────────┘   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
┌───────────────────────────────────┴─────────────────────────────────────┐
│                         API LAYER                                        │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ • RESTful API (Next.js API Routes)                                │   │
│  │ • WebSocket for real-time updates                                 │   │
│  │ • GraphQL (optional for complex queries)                          │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
┌───────────────────────────────────┴─────────────────────────────────────┐
│                         DATA LAYER                                       │
│  ┌────────────────────┐  ┌────────────────────┐  ┌──────────────────┐   │
│  │   PostgreSQL       │  │   Redis Cache      │  │   S3/Storage     │   │
│  │   (Supabase)       │  │   (Session/Data)   │  │   (Documents)    │   │
│  └────────────────────┘  └────────────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend Stack

```
Framework:        Next.js 14+ (App Router)
Language:         TypeScript 5+
State Management: Zustand (lightweight) or Redux Toolkit (complex state)
Styling:          Tailwind CSS 3.4+
UI Components:    Custom component library + shadcn/ui
Charts:           Recharts or Tremor
Tables:           TanStack Table
Forms:            React Hook Form + Zod validation
Animation:        Framer Motion
```

### Backend Stack

```
Runtime:          Node.js 20+
Framework:        Next.js API Routes
Database:         PostgreSQL (Supabase)
Cache:            Redis (Upstash)
Auth:             Supabase Auth
Storage:          Supabase Storage / AWS S3
Queue:            Inngest / Bull (for async jobs)
```

### Infrastructure

```
Hosting:          Vercel
Database:         Supabase
CDN:              Cloudflare
Monitoring:       Sentry
Analytics:        PostHog / Mixpanel
Email:            SendGrid / Resend
SMS:              Twilio
```

---

## Development Phases

### Phase 1: Foundation Setup

**Objective**: Establish core infrastructure and shared components

**Deliverables**:
1. Project scaffolding (Next.js monorepo or app)
2. Authentication system setup
3. Database schema design
4. Shared UI component library
5. API layer foundation
6. CI/CD pipeline

**Key Tasks**:
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS with Cedar Capital brand tokens
- [ ] Set up Supabase project (database, auth, storage)
- [ ] Create base layouts for public and private sections
- [ ] Implement authentication flows (login, register, forgot password)
- [ ] Design and implement database schema
- [ ] Create repository layer for data access
- [ ] Set up Sentry for error tracking
- [ ] Configure environment variables and secrets management

### Phase 2: Private Dashboards

**Objective**: Build internal and investor-facing dashboards

**Deliverables**:
1. Investor Dashboard (full feature set)
2. Operations Dashboard (full feature set)
3. Role-based access control system
4. Real-time notification system

**Key Tasks**:
- [ ] Implement dashboard shell (sidebar, header, navigation)
- [ ] Build Investor Dashboard modules
- [ ] Build Operations Dashboard modules
- [ ] Implement RBAC middleware
- [ ] Create notification system
- [ ] Build data visualization components
- [ ] Implement document management system

### Phase 3: Public Landing Pages

**Objective**: Launch lead capture and investor onboarding pages

**Deliverables**:
1. Lead Capture Landing Page
2. Investor Portal Landing Page
3. SEO optimization
4. Analytics integration
5. Lead scoring system

**Key Tasks**:
- [ ] Design and build Lead Capture page
- [ ] Design and build Investor Portal page
- [ ] Implement contact/inquiry forms
- [ ] Build property valuation widget
- [ ] Create investor onboarding flow
- [ ] Set up lead capture pipeline
- [ ] Implement conversion tracking
- [ ] Optimize for SEO and performance

### Phase 4: Integration & Polish

**Objective**: Connect all systems and optimize

**Deliverables**:
1. AI-powered lead scoring
2. Automated email sequences
3. Performance optimization
4. Security audit

**Key Tasks**:
- [ ] Integrate AI lead scoring
- [ ] Build automated communication workflows
- [ ] Performance audit and optimization
- [ ] Security penetration testing
- [ ] User acceptance testing
- [ ] Documentation completion

---

## User Roles & Permissions

### Role Definitions

| Role | Dashboard Access | Permissions |
|------|-----------------|-------------|
| `public` | None | View public pages, submit forms |
| `lead` | None | Submitted inquiry, in pipeline |
| `investor` | Investor Dashboard | View own portfolio, documents, returns |
| `operator` | Operations Dashboard | Manage leads, properties, view analytics |
| `admin` | Both Dashboards | Full access, user management, settings |
| `super_admin` | Both + System | All permissions + system configuration |

### Permission Matrix

```typescript
const permissions = {
  // Investor Dashboard
  'portfolio:view': ['investor', 'admin', 'super_admin'],
  'portfolio:export': ['investor', 'admin', 'super_admin'],
  'documents:view': ['investor', 'admin', 'super_admin'],
  'documents:download': ['investor', 'admin', 'super_admin'],
  'returns:view': ['investor', 'admin', 'super_admin'],

  // Operations Dashboard
  'leads:view': ['operator', 'admin', 'super_admin'],
  'leads:manage': ['operator', 'admin', 'super_admin'],
  'properties:view': ['operator', 'admin', 'super_admin'],
  'properties:manage': ['operator', 'admin', 'super_admin'],
  'analytics:view': ['operator', 'admin', 'super_admin'],
  'users:view': ['admin', 'super_admin'],
  'users:manage': ['admin', 'super_admin'],
  'settings:manage': ['super_admin'],
}
```

---

## Navigation Structure

### Public Navigation

```
Cedar Capital (Public)
├── Home (/)
├── Sellers (/sellers)
│   ├── Get Your Offer (/sellers/get-offer)
│   └── How It Works (/sellers/how-it-works)
├── Investors (/investors)
│   ├── Investment Opportunities (/investors/opportunities)
│   ├── Why Invest (/investors/why-invest)
│   └── Apply Now (/investors/apply)
├── About (/about)
├── Contact (/contact)
├── Login (/login)
└── Register (/register)
```

### Investor Dashboard Navigation

```
Investor Dashboard (/dashboard/investor)
├── Overview (/dashboard/investor)
├── Portfolio (/dashboard/investor/portfolio)
│   ├── Active Investments
│   ├── Past Investments
│   └── Pipeline
├── Returns (/dashboard/investor/returns)
│   ├── Summary
│   ├── Distributions
│   └── Tax Documents
├── Documents (/dashboard/investor/documents)
│   ├── Agreements
│   ├── Reports
│   └── Tax Forms
├── Opportunities (/dashboard/investor/opportunities)
├── Account (/dashboard/investor/account)
│   ├── Profile
│   ├── Preferences
│   └── Security
└── Support (/dashboard/investor/support)
```

### Operations Dashboard Navigation

```
Operations Dashboard (/dashboard/ops)
├── Overview (/dashboard/ops)
├── Leads (/dashboard/ops/leads)
│   ├── All Leads
│   ├── Homeowner Leads
│   ├── Investor Leads
│   └── Lead Scoring
├── Properties (/dashboard/ops/properties)
│   ├── Pipeline
│   ├── Active Deals
│   ├── Closed Deals
│   └── Property Analysis
├── Investors (/dashboard/ops/investors)
│   ├── All Investors
│   ├── Active
│   └── Onboarding
├── Analytics (/dashboard/ops/analytics)
│   ├── Performance
│   ├── Lead Metrics
│   ├── Deal Flow
│   └── Reports
├── Communications (/dashboard/ops/communications)
│   ├── Email Templates
│   ├── Sequences
│   └── History
├── Settings (/dashboard/ops/settings)
│   ├── Team
│   ├── Integrations
│   └── System
└── AI Tools (/dashboard/ops/ai)
    ├── Lead Scoring
    ├── Property Analysis
    └── Match Making
```

---

## Database Schema Overview

### Core Entities

```sql
-- Users (extends Supabase auth.users)
users
├── id (UUID, PK)
├── email (unique)
├── role (enum: public, lead, investor, operator, admin, super_admin)
├── profile_type (enum: homeowner, investor, both)
├── status (enum: active, pending, suspended)
├── created_at
├── updated_at
└── metadata (JSONB)

-- Properties
properties
├── id (UUID, PK)
├── address
├── city, state, zip
├── property_type
├── status (enum: lead, analysis, offer, contract, closed)
├── asking_price
├── estimated_value
├── created_at
├── updated_at
└── metadata (JSONB)

-- Leads
leads
├── id (UUID, PK)
├── user_id (FK -> users, nullable)
├── property_id (FK -> properties, nullable)
├── source (enum: website, referral, zillow, etc.)
├── type (enum: homeowner, investor)
├── status (enum: new, contacted, qualified, converted, lost)
├── score (0-100)
├── created_at
├── updated_at
└── metadata (JSONB)

-- Investments
investments
├── id (UUID, PK)
├── investor_id (FK -> users)
├── property_id (FK -> properties)
├── amount
├── ownership_percentage
├── status (enum: pending, active, exited)
├── invested_at
├── exited_at
├── returns_total
└── metadata (JSONB)

-- Documents
documents
├── id (UUID, PK)
├── owner_id (FK -> users)
├── investment_id (FK -> investments, nullable)
├── property_id (FK -> properties, nullable)
├── type (enum: agreement, report, tax_form, etc.)
├── title
├── storage_path
├── created_at
└── metadata (JSONB)

-- Activities (audit log)
activities
├── id (UUID, PK)
├── user_id (FK -> users)
├── entity_type
├── entity_id
├── action
├── details (JSONB)
├── created_at
└── ip_address
```

---

## Component Library Structure

### Base Components

```
components/
├── ui/                          # Primitive components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Checkbox.tsx
│   ├── Radio.tsx
│   ├── Switch.tsx
│   ├── Textarea.tsx
│   ├── Badge.tsx
│   ├── Avatar.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Tooltip.tsx
│   ├── Dropdown.tsx
│   ├── Tabs.tsx
│   ├── Table.tsx
│   └── Toast.tsx
│
├── layout/                      # Layout components
│   ├── AppShell.tsx
│   ├── PublicLayout.tsx
│   ├── DashboardLayout.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── Footer.tsx
│   └── Breadcrumbs.tsx
│
├── forms/                       # Form components
│   ├── FormField.tsx
│   ├── ContactForm.tsx
│   ├── PropertyInquiryForm.tsx
│   ├── InvestorApplicationForm.tsx
│   └── LoginForm.tsx
│
├── dashboard/                   # Dashboard-specific
│   ├── StatsCard.tsx
│   ├── ChartCard.tsx
│   ├── DataTable.tsx
│   ├── ActivityFeed.tsx
│   ├── NotificationBell.tsx
│   └── QuickActions.tsx
│
├── investor/                    # Investor dashboard
│   ├── PortfolioOverview.tsx
│   ├── InvestmentCard.tsx
│   ├── ReturnsChart.tsx
│   ├── DocumentList.tsx
│   └── OpportunityCard.tsx
│
├── operations/                  # Operations dashboard
│   ├── LeadTable.tsx
│   ├── LeadCard.tsx
│   ├── PropertyPipeline.tsx
│   ├── PropertyCard.tsx
│   ├── AnalyticsCharts.tsx
│   └── AIInsightCard.tsx
│
└── landing/                     # Landing page components
    ├── Hero.tsx
    ├── ValueProposition.tsx
    ├── Testimonials.tsx
    ├── FAQ.tsx
    ├── CTASection.tsx
    └── PropertyValueEstimator.tsx
```

---

## API Structure

### API Routes

```
app/api/
├── auth/
│   ├── login/route.ts
│   ├── register/route.ts
│   ├── forgot-password/route.ts
│   └── reset-password/route.ts
│
├── leads/
│   ├── route.ts                 # GET (list), POST (create)
│   ├── [id]/route.ts            # GET, PUT, DELETE
│   ├── [id]/score/route.ts      # POST (AI scoring)
│   └── [id]/convert/route.ts    # POST (convert to user)
│
├── properties/
│   ├── route.ts
│   ├── [id]/route.ts
│   ├── [id]/analysis/route.ts   # AI property analysis
│   └── [id]/valuation/route.ts  # Property valuation
│
├── investments/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── [id]/returns/route.ts
│
├── documents/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── [id]/download/route.ts
│
├── users/
│   ├── route.ts
│   ├── [id]/route.ts
│   └── me/route.ts
│
├── analytics/
│   ├── overview/route.ts
│   ├── leads/route.ts
│   ├── deals/route.ts
│   └── performance/route.ts
│
└── ai/
    ├── lead-score/route.ts
    ├── property-analysis/route.ts
    └── match/route.ts
```

---

## Success Metrics

### Platform Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 2s | Lighthouse/Web Vitals |
| Time to Interactive | < 3s | Core Web Vitals |
| Uptime | 99.9% | Monitoring |
| Error Rate | < 0.1% | Sentry |

### Business Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lead Capture Rate | > 5% of visitors | Analytics |
| Lead-to-Contact Rate | > 30% | CRM |
| Investor Onboarding Rate | > 20% of applicants | Pipeline |
| Dashboard Daily Active Users | > 60% of users | Analytics |
| Document Access Frequency | Weekly | Usage logs |

---

## Security Requirements

### Authentication
- Multi-factor authentication (MFA) for investors and operators
- Session management with secure tokens
- Password requirements (min 12 chars, complexity)
- Account lockout after failed attempts

### Authorization
- Row-level security (RLS) in Supabase
- API route protection with middleware
- Role-based access control (RBAC)
- Resource ownership validation

### Data Protection
- Encryption at rest (database)
- Encryption in transit (TLS 1.3)
- PII handling compliance
- Document access logging

### Compliance
- GDPR readiness
- CCPA compliance
- SOC 2 awareness (future)
- Regular security audits

---

## Next Steps

1. **Review and Approval**: Stakeholder review of this plan
2. **Detailed Specs**: Create detailed specs for each dashboard (see related docs)
3. **Design Phase**: UI/UX design and prototyping
4. **Development Kickoff**: Begin Phase 1 implementation
5. **Iterative Review**: Regular progress reviews and adjustments

---

## Related Documents

- [Investor Dashboard Spec](./01-investor-dashboard-spec.md)
- [Operations Dashboard Spec](./02-operations-dashboard-spec.md)
- [Landing Pages Development Plan](../frontend/01-landing-pages-plan.md)
- [Database Schema Design](../architecture/01-database-schema.md)
- [API Design Document](../architecture/02-api-design.md)

---

**This document serves as the foundational blueprint for Cedar Capital's digital platform development.**
