# Investor Dashboard Specification

> **Status**: Planning | **Access Level**: Private | **Version**: 1.0

The Investor Dashboard is a private, authenticated portal for registered investors to track their portfolios, monitor returns, access documents, and discover new investment opportunities.

---

## Overview

### Purpose
Provide investors with a comprehensive, real-time view of their real estate investments, including performance metrics, distributions, and access to all relevant documentation.

### Target Users
- Accredited investors with active investments
- High-net-worth individuals
- Investment funds and family offices
- Partner organizations

### Design Principles
1. **Trust & Transparency**: Clear, accurate financial data presentation
2. **Professional Aesthetic**: Clean, sophisticated UI befitting financial platform
3. **Mobile-First**: Full functionality on all devices
4. **Performance**: Fast load times for data-heavy views
5. **Security**: Bank-level security for sensitive financial data

---

## User Stories

### Portfolio Management
- As an investor, I want to see my total portfolio value at a glance
- As an investor, I want to view all my active investments in one place
- As an investor, I want to track the performance of individual investments
- As an investor, I want to see historical portfolio growth over time

### Returns & Distributions
- As an investor, I want to see my total returns (realized and unrealized)
- As an investor, I want to track distribution history and schedule
- As an investor, I want to download tax documents (K-1s, 1099s)
- As an investor, I want to see projected returns for active deals

### Document Access
- As an investor, I want to access all my investment agreements
- As an investor, I want to view quarterly/annual reports
- As an investor, I want to download documents securely
- As an investor, I want to receive notifications when new documents are available

### New Opportunities
- As an investor, I want to browse new investment opportunities
- As an investor, I want to see deals that match my investment criteria
- As an investor, I want to express interest in new deals
- As an investor, I want to track my pending commitments

### Account Management
- As an investor, I want to update my profile and preferences
- As an investor, I want to manage notification settings
- As an investor, I want to update my accreditation status
- As an investor, I want to securely update banking information

---

## Page Specifications

### 1. Dashboard Overview (`/dashboard/investor`)

**Purpose**: Provide a high-level snapshot of the investor's portfolio and key metrics.

**Components**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Header: Welcome back, [Name]                           [Notifications] │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐           │
│  │ Total Portfolio │ │  Total Returns  │ │ Active Deals    │           │
│  │    $2.4M        │ │     $340K       │ │      7          │           │
│  │   ▲ 12.3%       │ │    ▲ 14.2%      │ │   (2 pending)   │           │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘           │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Portfolio Performance Chart (6mo/1yr/All time)                  │  │
│  │  [Line chart showing portfolio value over time]                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌────────────────────────────────┐ ┌────────────────────────────────┐ │
│  │  Recent Activity               │ │  Upcoming Events               │ │
│  │  • Distribution: $12,500       │ │  • Q4 Report: Jan 20           │ │
│  │  • New Document: K-1 2025      │ │  • Distribution: Feb 1         │ │
│  │  • Deal Closed: Oak Ridge      │ │  • Tax Documents: Mar 15       │ │
│  └────────────────────────────────┘ └────────────────────────────────┘ │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Featured Opportunity                              [View All →]   │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │  [Image] Riverside Commons - Austin, TX                    │  │  │
│  │  │          Target IRR: 18-22% | Min Investment: $50K         │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Data Requirements**:
```typescript
interface DashboardOverview {
  totalPortfolioValue: number;
  totalPortfolioChange: number;      // percentage
  totalReturns: number;
  totalReturnsChange: number;        // percentage
  activeDeals: number;
  pendingDeals: number;
  portfolioHistory: {
    date: Date;
    value: number;
  }[];
  recentActivity: Activity[];
  upcomingEvents: Event[];
  featuredOpportunity?: Opportunity;
}
```

---

### 2. Portfolio Page (`/dashboard/investor/portfolio`)

**Purpose**: Detailed view of all investments with filtering and sorting.

**Layout**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Portfolio                                                              │
│  Total Value: $2,450,000 | 7 Active Investments                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Filter: All ▼] [Status: Active ▼] [Sort: Value ▼]    [Search...]     │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Investment Card                                                  │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │  [Property Image]                                          │  │  │
│  │  │                                                            │  │  │
│  │  │  Oak Ridge Apartments                                      │  │  │
│  │  │  Dallas, TX | Multifamily | 48 Units                       │  │  │
│  │  │                                                            │  │  │
│  │  │  Your Investment     Current Value      Returns            │  │  │
│  │  │  $100,000            $125,000           +25.0%             │  │  │
│  │  │                                                            │  │  │
│  │  │  Ownership: 2.5%     Acquired: Mar 2024                    │  │  │
│  │  │                                                            │  │  │
│  │  │  [View Details]                                            │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  [More investment cards...]                                             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Investment Detail Modal/Page**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Oak Ridge Apartments                                          [Close]  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Property Gallery - Full width images/carousel]                        │
│                                                                         │
│  ┌─────────────────────┐ ┌─────────────────────┐ ┌───────────────────┐ │
│  │ Your Investment     │ │ Current Value       │ │ Total Returns     │ │
│  │ $100,000            │ │ $125,000            │ │ +$25,000 (25%)    │ │
│  └─────────────────────┘ └─────────────────────┘ └───────────────────┘ │
│                                                                         │
│  Property Details                                                       │
│  ├── Address: 1234 Oak Ridge Dr, Dallas, TX 75001                      │
│  ├── Type: Multifamily | 48 Units                                       │
│  ├── Acquired: March 15, 2024                                           │
│  ├── Your Ownership: 2.5%                                               │
│  └── Investment Status: Active                                          │
│                                                                         │
│  Performance                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  [Investment Value Chart over time]                               │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  Distribution History                                                   │
│  ┌────────────┬─────────────┬──────────────┬─────────────────────────┐ │
│  │ Date       │ Type        │ Amount       │ Status                  │ │
│  ├────────────┼─────────────┼──────────────┼─────────────────────────┤ │
│  │ 2025-01-01 │ Quarterly   │ $3,125       │ Paid                    │ │
│  │ 2024-10-01 │ Quarterly   │ $3,125       │ Paid                    │ │
│  │ 2024-07-01 │ Quarterly   │ $2,875       │ Paid                    │ │
│  └────────────┴─────────────┴──────────────┴─────────────────────────┘ │
│                                                                         │
│  Documents                                                              │
│  ├── [PDF] Operating Agreement          [Download]                      │
│  ├── [PDF] Q4 2024 Report               [Download]                      │
│  └── [PDF] K-1 (2024)                   [Download]                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Data Requirements**:
```typescript
interface Investment {
  id: string;
  propertyId: string;
  property: {
    name: string;
    address: string;
    city: string;
    state: string;
    type: 'multifamily' | 'single_family' | 'commercial' | 'land';
    units?: number;
    images: string[];
  };
  investedAmount: number;
  currentValue: number;
  ownershipPercentage: number;
  status: 'pending' | 'active' | 'exited';
  investedAt: Date;
  exitedAt?: Date;
  totalReturns: number;
  distributions: Distribution[];
  documents: Document[];
  performanceHistory: {
    date: Date;
    value: number;
  }[];
}

interface Distribution {
  id: string;
  date: Date;
  type: 'quarterly' | 'annual' | 'special' | 'exit';
  amount: number;
  status: 'scheduled' | 'processing' | 'paid';
}
```

---

### 3. Returns Page (`/dashboard/investor/returns`)

**Purpose**: Comprehensive view of all returns, distributions, and tax documents.

**Tabs**:
1. **Summary** - Overall returns overview
2. **Distributions** - All distribution history
3. **Tax Documents** - K-1s, 1099s, etc.

**Summary Tab**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Returns Summary                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐           │
│  │ Total Returns   │ │ Cash Flow       │ │ Appreciation    │           │
│  │ $340,000        │ │ $125,000        │ │ $215,000        │           │
│  │ (14.2% IRR)     │ │ (5.2% yield)    │ │ (9.0%)          │           │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘           │
│                                                                         │
│  Returns by Year                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  [Bar chart: Returns by year, stacked by cash flow/appreciation] │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  Returns by Property                                                    │
│  ┌────────────────────────┬──────────────┬────────────┬─────────────┐ │
│  │ Property               │ Invested     │ Returns    │ IRR         │ │
│  ├────────────────────────┼──────────────┼────────────┼─────────────┤ │
│  │ Oak Ridge Apartments   │ $100,000     │ $25,000    │ 18.2%       │ │
│  │ Riverside Commons      │ $150,000     │ $42,000    │ 16.5%       │ │
│  │ [...]                  │ [...]        │ [...]      │ [...]       │ │
│  └────────────────────────┴──────────────┴────────────┴─────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Distributions Tab**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Distribution History                                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Year to Date: $45,000    |    All Time: $125,000                       │
│                                                                         │
│  [Filter: 2025 ▼] [Property: All ▼] [Type: All ▼]    [Export CSV]      │
│                                                                         │
│  ┌────────────┬──────────────────────┬──────────────┬────────┬───────┐ │
│  │ Date       │ Property             │ Type         │ Amount │Status │ │
│  ├────────────┼──────────────────────┼──────────────┼────────┼───────┤ │
│  │ 2025-01-01 │ Oak Ridge Apartments │ Quarterly    │ $3,125 │ Paid  │ │
│  │ 2025-01-01 │ Riverside Commons    │ Quarterly    │ $4,500 │ Paid  │ │
│  │ 2024-12-15 │ Pine Valley Estate   │ Exit         │ $25,000│ Paid  │ │
│  │ [...]      │ [...]                │ [...]        │ [...]  │ [...] │ │
│  └────────────┴──────────────────────┴──────────────┴────────┴───────┘ │
│                                                                         │
│  Upcoming Distributions                                                 │
│  ┌────────────┬──────────────────────┬──────────────┬────────┐         │
│  │ Date       │ Property             │ Type         │ Est.   │         │
│  ├────────────┼──────────────────────┼──────────────┼────────┤         │
│  │ 2025-02-01 │ Oak Ridge Apartments │ Quarterly    │ $3,200 │         │
│  │ 2025-02-01 │ Riverside Commons    │ Quarterly    │ $4,500 │         │
│  └────────────┴──────────────────────┴──────────────┴────────┘         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 4. Documents Page (`/dashboard/investor/documents`)

**Purpose**: Secure document vault with all investment-related documents.

**Layout**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Document Vault                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Filter: All Types ▼] [Property: All ▼] [Year: All ▼]   [Search...]   │
│                                                                         │
│  Document Categories                                                    │
│  ┌───────────────────┬───────────────────┬───────────────────┐         │
│  │ Agreements (12)   │ Reports (24)      │ Tax Documents (8) │         │
│  └───────────────────┴───────────────────┴───────────────────┘         │
│                                                                         │
│  Recent Documents                                                       │
│  ┌────────────────────────────────────────────────────────────────────┐│
│  │ [PDF] K-1 2024 - Oak Ridge Apartments                              ││
│  │       Tax Document | Uploaded: Jan 10, 2025                        ││
│  │       [Preview] [Download]                                         ││
│  ├────────────────────────────────────────────────────────────────────┤│
│  │ [PDF] Q4 2024 Report - Riverside Commons                           ││
│  │       Quarterly Report | Uploaded: Jan 5, 2025                     ││
│  │       [Preview] [Download]                                         ││
│  ├────────────────────────────────────────────────────────────────────┤│
│  │ [PDF] Subscription Agreement - Summit Heights                      ││
│  │       Legal Agreement | Uploaded: Dec 20, 2024                     ││
│  │       [Preview] [Download]                                         ││
│  └────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  All Documents                                                          │
│  ┌────────┬──────────────────────────────┬─────────────┬──────────────┐│
│  │ Type   │ Document                     │ Property    │ Date         ││
│  ├────────┼──────────────────────────────┼─────────────┼──────────────┤│
│  │ [Tax]  │ K-1 2024                     │ Oak Ridge   │ Jan 10, 2025 ││
│  │ [Rpt]  │ Q4 2024 Report               │ Riverside   │ Jan 5, 2025  ││
│  │ [...]  │ [...]                        │ [...]       │ [...]        ││
│  └────────┴──────────────────────────────┴─────────────┴──────────────┘│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Data Requirements**:
```typescript
interface Document {
  id: string;
  type: 'agreement' | 'report' | 'tax_form' | 'statement' | 'other';
  subType?: string;  // e.g., 'k1', '1099', 'quarterly', 'annual'
  title: string;
  description?: string;
  propertyId?: string;
  propertyName?: string;
  investmentId?: string;
  storagePath: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: Date;
  year?: number;
  isNew: boolean;  // unread flag
}
```

---

### 5. Opportunities Page (`/dashboard/investor/opportunities`)

**Purpose**: Browse and express interest in new investment opportunities.

**Layout**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Investment Opportunities                                               │
│  Discover new deals matching your investment criteria                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Filter: All ▼] [Type: All ▼] [Min Inv: Any ▼] [Location: All ▼]      │
│                                                                         │
│  Active Opportunities (3)                                               │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  [Property Image]                                                 │  │
│  │                                                                   │  │
│  │  Summit Heights Townhomes                                         │  │
│  │  Austin, TX | Multifamily | 32 Units                              │  │
│  │                                                                   │  │
│  │  Target IRR: 18-22%    Hold Period: 3-5 years                     │  │
│  │  Min Investment: $50,000                                          │  │
│  │                                                                   │  │
│  │  [Progress Bar: 65% Funded]                                       │  │
│  │  $1.3M of $2M raised | Closing: Feb 15, 2025                      │  │
│  │                                                                   │  │
│  │  [View Details]  [Express Interest]                               │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  [More opportunity cards...]                                            │
│                                                                         │
│  Coming Soon (2)                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  [Placeholder] New opportunity launching next month               │  │
│  │  [Get Notified]                                                   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Opportunity Detail Page**:
Comprehensive information including:
- Property details and photos
- Financial projections
- Market analysis
- Business plan summary
- Investment terms
- Risk factors
- Team information
- FAQs
- Expression of Interest form

---

### 6. Account Settings (`/dashboard/investor/account`)

**Tabs**:
1. **Profile** - Personal information
2. **Preferences** - Communication and display preferences
3. **Security** - Password, MFA, sessions
4. **Banking** - Bank accounts for distributions
5. **Accreditation** - Investor qualification status

**Profile Tab**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Profile Settings                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Personal Information                                                   │
│  ┌────────────────────────────────────────────────────────────────────┐│
│  │  [Avatar]    Full Name: John Smith                                 ││
│  │  [Change]    Email: john@example.com                               ││
│  │              Phone: (555) 123-4567                                  ││
│  │              Address: 123 Main St, City, ST 12345                   ││
│  │              [Edit Profile]                                         ││
│  └────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  Entity Information (if applicable)                                     │
│  ┌────────────────────────────────────────────────────────────────────┐│
│  │  Entity Name: Smith Family Trust                                    ││
│  │  Entity Type: Trust                                                 ││
│  │  EIN: **-***1234                                                    ││
│  │  [Edit Entity]                                                      ││
│  └────────────────────────────────────────────────────────────────────┘│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### Component Structure

```
app/
├── dashboard/
│   └── investor/
│       ├── layout.tsx              # Dashboard layout wrapper
│       ├── page.tsx                # Overview page
│       ├── portfolio/
│       │   ├── page.tsx            # Portfolio list
│       │   └── [id]/
│       │       └── page.tsx        # Investment detail
│       ├── returns/
│       │   └── page.tsx            # Returns page with tabs
│       ├── documents/
│       │   └── page.tsx            # Document vault
│       ├── opportunities/
│       │   ├── page.tsx            # Opportunities list
│       │   └── [id]/
│       │       └── page.tsx        # Opportunity detail
│       ├── account/
│       │   └── page.tsx            # Account settings
│       └── support/
│           └── page.tsx            # Support/help

components/
├── investor/
│   ├── DashboardOverview.tsx
│   ├── PortfolioSummary.tsx
│   ├── InvestmentCard.tsx
│   ├── InvestmentDetail.tsx
│   ├── ReturnsChart.tsx
│   ├── DistributionTable.tsx
│   ├── DocumentList.tsx
│   ├── DocumentCard.tsx
│   ├── OpportunityCard.tsx
│   ├── OpportunityDetail.tsx
│   └── AccountSettings.tsx
```

### API Endpoints

```typescript
// Portfolio
GET    /api/investor/portfolio           // List all investments
GET    /api/investor/portfolio/:id       // Get single investment
GET    /api/investor/portfolio/summary   // Portfolio summary stats

// Returns
GET    /api/investor/returns/summary     // Returns overview
GET    /api/investor/distributions       // Distribution history
GET    /api/investor/distributions/upcoming  // Upcoming distributions

// Documents
GET    /api/investor/documents           // List all documents
GET    /api/investor/documents/:id       // Get document metadata
GET    /api/investor/documents/:id/download  // Download document

// Opportunities
GET    /api/investor/opportunities       // List opportunities
GET    /api/investor/opportunities/:id   // Get opportunity details
POST   /api/investor/opportunities/:id/interest  // Express interest

// Account
GET    /api/investor/account             // Get account info
PUT    /api/investor/account             // Update account
GET    /api/investor/account/banking     // Get banking info
PUT    /api/investor/account/banking     // Update banking info
```

---

## Feature Flags

```typescript
const investorDashboardFeatures = {
  'investor-dashboard': {
    enabled: false,
    description: 'Investor dashboard access',
    rolloutPercentage: 0,
  },
  'investor-opportunities': {
    enabled: false,
    description: 'View and express interest in opportunities',
    rolloutPercentage: 0,
  },
  'investor-document-preview': {
    enabled: false,
    description: 'In-browser PDF preview',
    rolloutPercentage: 0,
  },
  'investor-real-time-updates': {
    enabled: false,
    description: 'Real-time portfolio value updates',
    rolloutPercentage: 0,
  },
}
```

---

## Security Requirements

### Data Access
- Investors can ONLY see their own investments and documents
- Row-level security (RLS) enforced at database level
- All API endpoints verify ownership

### Document Security
- Signed URLs for document downloads (expire after 5 minutes)
- Download activity logged
- Watermarking for sensitive documents (optional)

### Session Management
- Automatic session timeout after 30 minutes of inactivity
- MFA required for sensitive operations (banking updates)
- Session invalidation on password change

---

## Analytics & Tracking

### Events to Track
- Dashboard view
- Portfolio view
- Investment detail view
- Document download
- Opportunity view
- Interest expression
- Account settings change

### Metrics
- Daily/Monthly Active Users
- Average session duration
- Most viewed investments
- Document download frequency
- Opportunity conversion rate

---

## Future Enhancements

1. **Real-time Portfolio Updates** - WebSocket-based live value updates
2. **Mobile App** - Native iOS/Android investor app
3. **Advanced Analytics** - Portfolio optimization suggestions
4. **Tax Center** - Integrated tax preparation tools
5. **Investor Chat** - Direct communication with fund managers
6. **Social Features** - Investor community and discussions

---

**This specification serves as the blueprint for the Investor Dashboard development.**
