# Landing Pages Development Plan

> **Status**: Planning | **Access Level**: Public | **Version**: 1.0

This document outlines the development plan for Cedar Capital's public-facing landing pages, designed to capture leads from homeowners and onboard new investors.

---

## Overview

### Purpose
Create high-converting public landing pages that:
1. Capture leads from homeowners looking to sell properties
2. Onboard qualified investors into the platform
3. Build trust and credibility for the Cedar Capital brand
4. Drive traffic through SEO and paid campaigns

### Landing Pages Overview

| Page | Primary CTA | Target Audience | Goal |
|------|-------------|-----------------|------|
| **Lead Capture (Sellers)** | Get Your Cash Offer | Homeowners | Capture property inquiries |
| **Investor Portal** | Start Investing | Accredited Investors | Register new investors |

### Design Philosophy

**Sellers Landing Page**:
- Warm, approachable, trust-building
- Soft colors, simple language, testimonials
- Focus on ease and emotional support
- Mobile-first (many motivated sellers search on mobile)

**Investors Landing Page**:
- Professional, data-driven, sophisticated
- Clean design with performance metrics
- Focus on ROI, track record, credibility
- Desktop-optimized (investors often research on desktop)

---

## Site Map

```
Cedar Capital Public Site
│
├── / (Home)
│   ├── Hero with dual CTAs
│   ├── How It Works
│   ├── Why Cedar Capital
│   └── Footer
│
├── /sellers (Lead Capture Hub)
│   ├── /sellers/get-offer (Main CTA page)
│   ├── /sellers/how-it-works
│   ├── /sellers/faq
│   └── /sellers/testimonials
│
├── /investors (Investor Portal Hub)
│   ├── /investors/opportunities
│   ├── /investors/why-invest
│   ├── /investors/track-record
│   ├── /investors/apply
│   └── /investors/faq
│
├── /about
│   ├── Our Story
│   ├── Team
│   └── Values
│
├── /contact
│
├── /login
│
└── /register
    ├── /register/seller
    └── /register/investor
```

---

## Lead Capture Landing Page (`/sellers`)

### Primary Goal
Convert homeowner visitors into qualified leads by capturing property information and contact details.

### Page Structure

#### Hero Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                         [CEDAR CAPITAL LOGO]                            │
│                                                                         │
│              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                       │
│                                                                         │
│         Get a Fair Cash Offer for Your Home                             │
│                in as Little as 24 Hours                                 │
│                                                                         │
│         No repairs needed. No showings. Close on your timeline.        │
│                                                                         │
│         ┌─────────────────────────────────────────┐                    │
│         │  Enter your property address            │                    │
│         │  [                                    ] │                    │
│         │                                         │                    │
│         │  [   Get My Cash Offer   ]             │                    │
│         └─────────────────────────────────────────┘                    │
│                                                                         │
│         ✓ No obligation  ✓ Free assessment  ✓ Close in 7 days         │
│                                                                         │
│         Trusted by 500+ Texas homeowners                                │
│         ⭐⭐⭐⭐⭐ 4.9 rating on Google                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### How It Works Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                       How It Works                                      │
│                 Simple. Fast. Stress-Free.                              │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │       ①         │  │       ②         │  │       ③         │        │
│   │    [House]      │  │    [Phone]      │  │    [Cash]       │        │
│   │                 │  │                 │  │                 │        │
│   │  Tell Us About  │  │  Get Your Cash  │  │  Close When     │        │
│   │  Your Property  │  │  Offer          │  │  You're Ready   │        │
│   │                 │  │                 │  │                 │        │
│   │  Share a few    │  │  We'll analyze  │  │  Pick your      │        │
│   │  details about  │  │  your property  │  │  closing date.  │        │
│   │  your home.     │  │  and send you   │  │  We handle      │        │
│   │                 │  │  a fair offer.  │  │  everything.    │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Why Sell to Us Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Why Homeowners Choose Us                             │
│                                                                         │
│   ┌─────────────────────────────┐  ┌─────────────────────────────────┐ │
│   │                             │  │                                 │ │
│   │  Traditional Sale           │  │  Sell to Cedar Capital          │ │
│   │                             │  │                                 │ │
│   │  ✗ 6-12 months to sell     │  │  ✓ Close in 7-30 days           │ │
│   │  ✗ Repairs & staging       │  │  ✓ No repairs needed            │ │
│   │  ✗ Showings & open houses  │  │  ✓ No showings                  │ │
│   │  ✗ 6% agent commissions    │  │  ✓ Zero fees or commissions     │ │
│   │  ✗ Uncertain closing       │  │  ✓ Guaranteed closing           │ │
│   │                             │  │                                 │ │
│   └─────────────────────────────┘  └─────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Testimonials Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    What Our Customers Say                               │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  ⭐⭐⭐⭐⭐                                                       │ │
│   │                                                                   │ │
│   │  "Cedar Capital made selling our home so easy. We had to         │ │
│   │  relocate quickly for work, and they gave us a fair offer        │ │
│   │  and closed in just 2 weeks. No stress, no hassle."              │ │
│   │                                                                   │ │
│   │  — Sarah & Michael, Dallas, TX                                   │ │
│   │                                                                   │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│   [More testimonials carousel...]                                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Property Value Estimator Widget

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Curious What Your Home is Worth?                     │
│              Get an instant estimate in under 60 seconds                │
│                                                                         │
│         ┌───────────────────────────────────────────────────┐          │
│         │                                                    │          │
│         │  Property Address                                  │          │
│         │  [                                              ]  │          │
│         │                                                    │          │
│         │  [City]              [State]         [Zip]        │          │
│         │  [          ]       [  TX  ▼]       [      ]      │          │
│         │                                                    │          │
│         │  Property Type                                     │          │
│         │  [Single Family ▼]                                │          │
│         │                                                    │          │
│         │  Bedrooms            Bathrooms                     │          │
│         │  [  3  ▼]           [  2  ▼]                      │          │
│         │                                                    │          │
│         │           [  Get My Estimate  ]                   │          │
│         │                                                    │          │
│         └───────────────────────────────────────────────────┘          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### FAQ Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Frequently Asked Questions                           │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  ▼ How quickly can I get an offer?                               │ │
│   │    Most sellers receive a no-obligation cash offer within        │ │
│   │    24 hours of submitting their property information.            │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  ► Do I need to make repairs before selling?                     │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  ► How do you determine your offer price?                        │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  ► Are there any fees or commissions?                            │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │  ► Can I still sell if I have a mortgage?                        │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Final CTA Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │              Ready to Get Your Cash Offer?                         │ │
│  │                                                                    │ │
│  │   No obligation. No pressure. Just a fair offer for your home.    │ │
│  │                                                                    │ │
│  │                [  Get My Cash Offer  ]                            │ │
│  │                                                                    │ │
│  │              Or call us: (555) 123-CASH                           │ │
│  │                                                                    │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Lead Capture Forms

#### Quick Form (Hero)
```typescript
interface QuickLeadForm {
  propertyAddress: string;
  email: string;
}
```

#### Full Form (Get Offer Page)
```typescript
interface FullLeadForm {
  // Contact Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Property Info
  propertyAddress: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: 'single_family' | 'multi_family' | 'condo' | 'townhouse' | 'land';
  bedrooms: number;
  bathrooms: number;
  squareFeet?: number;
  yearBuilt?: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';

  // Motivation
  timeline: 'asap' | '1_month' | '3_months' | '6_months' | 'not_sure';
  reason: 'relocating' | 'downsizing' | 'financial' | 'inherited' | 'divorce' | 'other';
  reasonOther?: string;

  // Additional
  currentlyListed: boolean;
  oweMortgage: boolean;
  additionalInfo?: string;
}
```

---

## Investor Portal Landing Page (`/investors`)

### Primary Goal
Attract qualified investors and guide them through the registration and accreditation process.

### Page Structure

#### Hero Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                         [CEDAR CAPITAL LOGO]                            │
│                                                                         │
│              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                       │
│                                                                         │
│           Invest in Texas Real Estate                                   │
│           with Confidence                                               │
│                                                                         │
│        Access institutional-quality deals with target returns           │
│                     of 15-22% annually                                  │
│                                                                         │
│       ┌─────────────────┐    ┌─────────────────┐                       │
│       │  View Deals     │    │  Start Investing│                       │
│       └─────────────────┘    └─────────────────┘                       │
│                                                                         │
│       ┌─────────────────────────────────────────────────────┐          │
│       │                                                      │          │
│       │   $125M+        500+         18.4%       4.9★       │          │
│       │   Assets Under  Properties   Avg. IRR   Rating      │          │
│       │   Management    Acquired                             │          │
│       │                                                      │          │
│       └─────────────────────────────────────────────────────┘          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Investment Opportunities Preview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Current Investment Opportunities                     │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │                                                                   │ │
│   │  [Property Image]                                                 │ │
│   │                                                                   │ │
│   │  Summit Heights Townhomes                                         │ │
│   │  Austin, TX | 32 Units | Class B Multifamily                     │ │
│   │                                                                   │ │
│   │  Target IRR: 18-22%    Hold: 3-5 years    Min: $50,000          │ │
│   │                                                                   │ │
│   │  [████████████████████░░░░░░] 75% Funded                        │ │
│   │                                                                   │ │
│   │  [View Details]                                                   │ │
│   │                                                                   │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│   [More opportunity cards...]                                           │
│                                                                         │
│                    [  View All Opportunities  ]                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Why Invest With Us Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Why Investors Choose Cedar Capital                   │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │                 │  │                 │  │                 │        │
│   │  [Chart Icon]   │  │  [Shield Icon]  │  │  [Clock Icon]   │        │
│   │                 │  │                 │  │                 │        │
│   │  Strong Returns │  │  Risk-Managed   │  │  Passive Income │        │
│   │                 │  │                 │  │                 │        │
│   │  Average 18.4%  │  │  Diversified    │  │  Quarterly      │        │
│   │  IRR across all │  │  portfolio with │  │  distributions  │        │
│   │  investments    │  │  conservative   │  │  with no active │        │
│   │                 │  │  underwriting   │  │  management     │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │                 │  │                 │  │                 │        │
│   │  [Graph Icon]   │  │  [Eye Icon]     │  │  [Support Icon] │        │
│   │                 │  │                 │  │                 │        │
│   │  AI-Powered     │  │  Full           │  │  Dedicated      │        │
│   │  Analysis       │  │  Transparency   │  │  Support        │        │
│   │                 │  │                 │  │                 │        │
│   │  Proprietary AI │  │  Real-time      │  │  Personal       │        │
│   │  identifies     │  │  portfolio      │  │  investor       │        │
│   │  best deals     │  │  tracking       │  │  relations      │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Track Record Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Our Track Record                                     │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │                                                                   │ │
│   │   Performance History (2020-2024)                                 │ │
│   │                                                                   │ │
│   │   [Bar chart showing returns by year]                            │ │
│   │                                                                   │ │
│   │   2020: 15.2%  2021: 22.4%  2022: 17.8%  2023: 19.1%  2024: 18.6%│ │
│   │                                                                   │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│   Recent Exits                                                         │
│   ┌─────────────────────┬────────────┬─────────────┬─────────────────┐ │
│   │ Property            │ Hold Time  │ Exit IRR    │ Multiple        │ │
│   ├─────────────────────┼────────────┼─────────────┼─────────────────┤ │
│   │ Oak Ridge Apts      │ 2.5 years  │ 21.4%       │ 1.52x           │ │
│   │ Pine Valley Estate  │ 3.1 years  │ 18.9%       │ 1.58x           │ │
│   │ Riverside Commons   │ 2.8 years  │ 19.7%       │ 1.55x           │ │
│   └─────────────────────┴────────────┴─────────────┴─────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### How to Invest Section

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    How to Get Started                                   │
│                                                                         │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│   │       ①         │  │       ②         │  │       ③         │        │
│   │                 │  │                 │  │                 │        │
│   │  Create Account │  │  Browse Deals   │  │  Invest &       │        │
│   │  & Verify       │  │  & Commit       │  │  Earn Returns   │        │
│   │                 │  │                 │  │                 │        │
│   │  Complete your  │  │  Review our     │  │  Track your     │        │
│   │  profile and    │  │  current        │  │  portfolio and  │        │
│   │  accreditation  │  │  offerings and  │  │  receive        │        │
│   │  verification.  │  │  commit funds.  │  │  distributions. │        │
│   │                 │  │                 │  │                 │        │
│   │  [5 minutes]    │  │  [Self-paced]   │  │  [Quarterly]    │        │
│   └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                         │
│                    [  Start Your Application  ]                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Investor Testimonials

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    What Our Investors Say                               │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │                                                                   │ │
│   │  "I've been investing with Cedar Capital for 3 years and         │ │
│   │  have been consistently impressed by both the returns and        │ │
│   │  the transparency. The dashboard makes it easy to track          │ │
│   │  everything, and the team is always available when I have        │ │
│   │  questions."                                                     │ │
│   │                                                                   │ │
│   │  — James Chen, Family Office Manager                             │ │
│   │    $500K+ invested                                               │ │
│   │                                                                   │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### FAQ Section (Investor-Specific)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    Investor FAQ                                         │
│                                                                         │
│   ▼ What is the minimum investment?                                    │
│     Our minimum investment starts at $50,000 per deal.                 │
│                                                                         │
│   ► Who can invest?                                                     │
│   ► How are returns distributed?                                        │
│   ► What are the fees?                                                  │
│   ► How do I track my investments?                                      │
│   ► What is the typical hold period?                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Investor Registration Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Step 1 of 4: Create Account                          [Progress: 25%]  │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │  Full Name                                                        │ │
│  │  [                                                             ]  │ │
│  │                                                                    │ │
│  │  Email Address                                                    │ │
│  │  [                                                             ]  │ │
│  │                                                                    │ │
│  │  Phone Number                                                     │ │
│  │  [                                                             ]  │ │
│  │                                                                    │ │
│  │  Password                                                         │ │
│  │  [                                                             ]  │ │
│  │  ☐ I agree to the Terms of Service and Privacy Policy            │ │
│  │                                                                    │ │
│  │  [                     Continue                                ]  │ │
│  │                                                                    │ │
│  │  Already have an account? [Log in]                               │ │
│  │                                                                    │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Step 2 of 4: Investment Profile                      [Progress: 50%]  │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │  Investment Entity Type                                           │ │
│  │  ○ Individual                                                     │ │
│  │  ○ Joint (with spouse)                                           │ │
│  │  ○ Trust                                                          │ │
│  │  ○ LLC/Corporation                                                │ │
│  │  ○ Self-Directed IRA                                             │ │
│  │                                                                    │ │
│  │  Investment Range                                                 │ │
│  │  [  $50,000 - $100,000  ▼]                                       │ │
│  │                                                                    │ │
│  │  Investment Goals (select all that apply)                        │ │
│  │  ☐ Passive income                                                 │ │
│  │  ☐ Capital appreciation                                          │ │
│  │  ☐ Tax benefits                                                   │ │
│  │  ☐ Portfolio diversification                                     │ │
│  │                                                                    │ │
│  │  [Back]                          [Continue]                       │ │
│  │                                                                    │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Step 3 of 4: Accreditation                           [Progress: 75%]  │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │  To invest, you must be an accredited investor.                  │ │
│  │  Please confirm your qualification:                               │ │
│  │                                                                    │ │
│  │  I qualify as an accredited investor because:                    │ │
│  │                                                                    │ │
│  │  ○ My individual income exceeds $200,000 (or $300,000 with       │ │
│  │    spouse) for each of the last two years                        │ │
│  │                                                                    │ │
│  │  ○ My net worth exceeds $1,000,000 (excluding primary            │ │
│  │    residence), individually or with spouse                       │ │
│  │                                                                    │ │
│  │  ○ I hold Series 7, 65, or 82 license in good standing           │ │
│  │                                                                    │ │
│  │  ○ I am a "knowledgeable employee" of a private fund             │ │
│  │                                                                    │ │
│  │  ☐ I certify that the above is true and accurate                 │ │
│  │                                                                    │ │
│  │  [Back]                          [Continue]                       │ │
│  │                                                                    │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Step 4 of 4: Verification                           [Progress: 100%]  │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │  ✓ Account Created                                                │ │
│  │  ✓ Profile Completed                                              │ │
│  │  ✓ Accreditation Self-Certified                                  │ │
│  │                                                                    │ │
│  │  To complete verification, please provide:                        │ │
│  │                                                                    │ │
│  │  Government-Issued ID                                             │ │
│  │  [Upload ID Document]                                             │ │
│  │                                                                    │ │
│  │  Proof of Accreditation (optional, expedites review)             │ │
│  │  [Upload Document]                                                │ │
│  │                                                                    │ │
│  │  ☐ Skip verification for now (limits will apply)                 │ │
│  │                                                                    │ │
│  │  [Back]                          [Complete Registration]          │ │
│  │                                                                    │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Navigation Between Systems

### Header Navigation (Public)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Logo]    Sellers    Investors    About    Contact    [Login] [Apply] │
└─────────────────────────────────────────────────────────────────────────┘
```

### Transition Points

| From | To | Trigger |
|------|-----|---------|
| Public Home | Seller Landing | Click "Sell Your Home" |
| Public Home | Investor Portal | Click "Invest" |
| Seller Landing | Login | After lead capture, upsell to create account |
| Investor Portal | Registration | Click "Start Investing" or "Apply" |
| Login | Investor Dashboard | Successful login (investor role) |
| Login | Operations Dashboard | Successful login (operator role) |

### Authentication Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  Login                                                                  │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                    │ │
│  │  Email                                                            │ │
│  │  [                                                             ]  │ │
│  │                                                                    │ │
│  │  Password                                                         │ │
│  │  [                                                             ]  │ │
│  │                                                                    │ │
│  │  ☐ Remember me                       [Forgot password?]          │ │
│  │                                                                    │ │
│  │  [                      Sign In                                ]  │ │
│  │                                                                    │ │
│  │  ─────────────────── or ───────────────────                      │ │
│  │                                                                    │ │
│  │  [     Sign in with Google     ]                                 │ │
│  │                                                                    │ │
│  │  Don't have an account?                                          │ │
│  │  [Register as Investor]  [I want to sell my home]                │ │
│  │                                                                    │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### Component Structure

```
app/
├── (public)/                           # Public layout group
│   ├── layout.tsx                      # Public header/footer
│   ├── page.tsx                        # Home page
│   ├── sellers/
│   │   ├── page.tsx                    # Seller hub
│   │   ├── get-offer/
│   │   │   └── page.tsx                # Get offer form
│   │   ├── how-it-works/
│   │   │   └── page.tsx                # Process explanation
│   │   └── faq/
│   │       └── page.tsx                # Seller FAQ
│   ├── investors/
│   │   ├── page.tsx                    # Investor hub
│   │   ├── opportunities/
│   │   │   └── page.tsx                # Deal listings
│   │   ├── why-invest/
│   │   │   └── page.tsx                # Value proposition
│   │   ├── track-record/
│   │   │   └── page.tsx                # Performance data
│   │   ├── apply/
│   │   │   └── page.tsx                # Registration flow
│   │   └── faq/
│   │       └── page.tsx                # Investor FAQ
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       ├── page.tsx                    # Registration router
│       ├── seller/
│       │   └── page.tsx
│       └── investor/
│           └── page.tsx

components/
├── landing/
│   ├── Hero.tsx
│   ├── HeroSellers.tsx
│   ├── HeroInvestors.tsx
│   ├── HowItWorks.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── TestimonialCard.tsx
│   ├── FAQ.tsx
│   ├── FAQItem.tsx
│   ├── CTASection.tsx
│   ├── TrustBadges.tsx
│   ├── PropertyEstimator.tsx
│   ├── OpportunityCard.tsx
│   ├── TrackRecord.tsx
│   └── StatsBar.tsx
│
├── forms/
│   ├── QuickLeadForm.tsx
│   ├── FullLeadForm.tsx
│   ├── PropertyEstimatorForm.tsx
│   ├── InvestorRegistrationForm.tsx
│   ├── ContactForm.tsx
│   └── LoginForm.tsx
│
├── navigation/
│   ├── PublicHeader.tsx
│   ├── PublicFooter.tsx
│   ├── MobileMenu.tsx
│   └── CTAButton.tsx
```

### API Endpoints

```typescript
// Lead Capture
POST   /api/leads                    // Create new lead
POST   /api/leads/quick              // Quick lead (address + email only)
POST   /api/estimate                 // Property value estimate

// Investor Registration
POST   /api/register/investor        // Create investor account
POST   /api/register/investor/profile    // Update profile
POST   /api/register/investor/accreditation  // Submit accreditation

// Public Content
GET    /api/opportunities            // List public opportunities
GET    /api/opportunities/:id        // Public opportunity detail
GET    /api/track-record             // Performance statistics
GET    /api/testimonials             // Approved testimonials

// Contact
POST   /api/contact                  // General contact form
```

---

## SEO & Performance

### SEO Requirements

**Meta Tags** (per page):
- Title tag (unique per page, 50-60 chars)
- Meta description (150-160 chars)
- Open Graph tags (image, title, description)
- Twitter Card tags
- Canonical URL

**Structured Data**:
- Organization schema
- Local Business schema
- FAQ schema (on FAQ pages)
- Review schema (testimonials)

**Technical SEO**:
- XML sitemap
- Robots.txt
- SSL certificate
- Mobile-friendly design
- Fast page load (<2s)

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Time to Interactive | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |

### Optimization Strategies

1. **Image Optimization**: Next.js Image component, WebP format
2. **Code Splitting**: Dynamic imports for non-critical components
3. **Caching**: CDN caching, ISR for semi-static content
4. **Bundle Size**: Tree shaking, minimal dependencies
5. **Font Loading**: Preload critical fonts, font-display: swap

---

## Analytics & Conversion Tracking

### Events to Track

**Lead Capture Page**:
- Page view
- Form started
- Form field completed
- Form submitted
- Estimate requested
- Phone number clicked
- Chat initiated

**Investor Portal Page**:
- Page view
- Opportunity viewed
- Registration started
- Registration step completed
- Registration completed
- Document downloaded
- FAQ expanded

### Conversion Funnels

**Seller Funnel**:
```
Page Visit → Form Start → Form Complete → Lead Qualified → Contact Made
```

**Investor Funnel**:
```
Page Visit → Registration Start → Profile Complete → Accreditation → First Investment
```

### UTM Tracking

All marketing campaigns should use UTM parameters:
- `utm_source`: Traffic source (google, facebook, email)
- `utm_medium`: Marketing medium (cpc, organic, email)
- `utm_campaign`: Campaign name
- `utm_content`: Ad variant
- `utm_term`: Keyword (for paid search)

---

## A/B Testing Plan

### Seller Landing Page Tests

1. **Hero Headline**: Test different value propositions
2. **Form Length**: Quick vs. detailed form
3. **CTA Copy**: "Get My Cash Offer" vs "See What Your Home is Worth"
4. **Trust Badges**: With/without testimonial count
5. **Estimator Placement**: Hero vs. below fold

### Investor Portal Tests

1. **Stats Display**: Prominent vs. subtle performance data
2. **Registration Steps**: 4-step vs. 2-step flow
3. **Opportunity Display**: Cards vs. table view
4. **CTA Copy**: "Start Investing" vs "View Opportunities"

---

## Launch Checklist

### Pre-Launch

- [ ] All pages responsive (mobile, tablet, desktop)
- [ ] Forms functional with validation
- [ ] Analytics tracking verified
- [ ] SEO elements in place
- [ ] SSL certificate active
- [ ] Performance targets met
- [ ] Legal pages (Terms, Privacy) complete
- [ ] Contact forms tested
- [ ] Email notifications working
- [ ] Browser compatibility tested

### Post-Launch

- [ ] Google Search Console submission
- [ ] Monitor error rates (Sentry)
- [ ] Review analytics data
- [ ] A/B tests launched
- [ ] Lead response workflow active
- [ ] Performance monitoring active

---

**This document serves as the blueprint for Cedar Capital's public landing page development.**
