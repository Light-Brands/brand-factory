# Chrono-Commune SaaS Phase Roadmap

> Traction-triggered expansion plan for sustainable, community-first growth

> **Total Code Budget**: 100,000 LOC | **Philosophy**: Build Less, Listen More | **Status**: Planning

---

## Executive Summary

This roadmap defines a disciplined, traction-gated approach to building Chrono-Commune. Each phase unlocks only when the previous phase demonstrates clear market validation. Features are not "planned" but "earned" through user demand and business sustainability signals.

---

## Phase Roadmap Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    CHRONO-COMMUNE TRACTION-TRIGGERED ROADMAP                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  PHASE 0           PHASE 1           PHASE 2           PHASE 3                  │
│  VALIDATION        MVP               GROWTH            SCALE                    │
│  ───────────       ───────────       ───────────       ───────────              │
│                                                                                  │
│  Pre-Build         20K LOC           +30K LOC          +40K LOC                 │
│  Validation        First Users       Product-Market    Platform                 │
│                                      Fit Expansion     Maturity                 │
│                                                                                  │
│  ┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐           │
│  │ Validate  │────▶│ 100 Paid  │────▶│ 1K Paid   │────▶│ 5K Paid   │           │
│  │ Problem   │     │ $3K MRR   │     │ $25K MRR  │     │ $500K ARR │           │
│  └───────────┘     └───────────┘     └───────────┘     └───────────┘           │
│                                                                                  │
│  Timeline:         Timeline:         Timeline:         Timeline:                │
│  4-6 weeks         12-16 weeks       6-12 months       12-24 months             │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 0: Validation

```yaml
phase_0:
  name: "Validation"
  tagline: "Prove the problem before building the solution"
  duration: "4-6 weeks"
  code_budget: 0  # No code yet
  investment: "Time only ($0 direct spend)"

  objectives:
    - "Validate problem severity with target users"
    - "Test willingness to pay before building"
    - "Identify 20 design partners from beachhead market"
    - "Define MVP scope through user conversations"

  validation_activities:

    problem_interviews:
      description: "Deep-dive conversations with potential users"
      target: "40 interviews across target segments"
      segments:
        intentional_communities:
          target_count: 15
          sources:
            - "Cohousing.org community directory"
            - "Intentional Communities Fellowship"
            - "Local co-op housing associations"
          questions:
            - "How do you currently coordinate schedules?"
            - "What breaks down in your current approach?"
            - "What would make coordination feel easier?"

        cooperative_households:
          target_count: 15
          sources:
            - "Reddit r/intentionalcommunity"
            - "Facebook groups for house shares"
            - "Local mutual aid networks"

        privacy_conscious_families:
          target_count: 10
          sources:
            - "Reddit r/privacy, r/degoogle"
            - "Privacy-focused newsletter communities"

      success_criteria:
        - "80%+ of interviewees describe significant scheduling pain"
        - "60%+ currently use 3+ apps/methods for coordination"
        - "50%+ express unprompted privacy concerns"

    willingness_to_pay_test:
      description: "Pre-launch landing page with pricing"
      method: "Smoke test landing page"
      implementation:
        - "Build single-page site with value proposition"
        - "Display actual pricing ($5.99/mo, $49.99/year)"
        - "Collect email with commitment language: 'Notify me at launch (I intend to subscribe)'"
        - "Optional: Accept $1 refundable deposits for early access"

      success_criteria:
        - "500+ email signups in 4 weeks"
        - "10%+ indicate premium intent (check pricing tier)"
        - "25+ refundable deposits (if offered)"

    design_partner_recruitment:
      description: "Secure committed beta communities"
      target: "20 communities/households"
      commitment_required:
        - "Weekly 30-min feedback sessions during beta"
        - "Active daily use during testing"
        - "Willingness to pay at launch"
      incentive: "12 months free premium at launch"

      success_criteria:
        - "20 signed design partner agreements"
        - "Mix of community sizes (3-8 members, 8-20 members)"
        - "Geographic diversity (US, EU, other)"

    competitive_validation:
      description: "Deep analysis of competitor gaps"
      activities:
        - "Sign up for TimeTree, Cozi, Fantastical premium trials"
        - "Document specific pain points in real usage"
        - "Interview users switching from competitors"
        - "Map unmet needs to potential features"

  success_criteria_to_proceed:
    hard_requirements:
      - metric: "Problem Validation"
        threshold: "80%+ interview subjects confirm pain"
        measurement: "Interview scoring rubric"

      - metric: "Willingness to Pay"
        threshold: "500+ email signups with 10%+ premium intent"
        measurement: "Landing page analytics"

      - metric: "Design Partners"
        threshold: "15+ committed beta communities"
        measurement: "Signed agreements"

    soft_signals:
      - "Strong organic sharing of landing page"
      - "Inbound requests from communities we didn't contact"
      - "Competitor users expressing frustration in forums"

  pivot_criteria:
    triggers:
      - trigger: "Low problem validation"
        threshold: "<50% confirm significant pain"
        action: "Re-examine target segment or problem definition"

      - trigger: "No willingness to pay"
        threshold: "<3% premium intent"
        action: "Consider freemium-only or different monetization"

      - trigger: "Cannot find design partners"
        threshold: "<10 committed communities"
        action: "Segment is not ready; explore adjacent markets"

  kill_criteria:
    - condition: "<200 email signups after 6 weeks"
      interpretation: "Insufficient market interest or poor positioning"
      action: "Do not proceed to Phase 1"

    - condition: "Zero refundable deposits"
      interpretation: "No real willingness to pay"
      action: "Reconsider business model entirely"

  deliverables:
    - "Problem validation report with interview synthesis"
    - "Competitive gap analysis document"
    - "Design partner roster with contact info"
    - "Landing page with email list"
    - "Go/No-Go decision memo"
```

---

## Phase 1: MVP

```yaml
phase_1:
  name: "MVP"
  tagline: "Minimal product, maximum learning"
  duration: "12-16 weeks development + 8 weeks beta"
  code_budget: 20000  # LOC

  objectives:
    - "Ship usable product to design partners"
    - "Achieve first 100 paying customers"
    - "Prove retention and engagement hypotheses"
    - "Generate revenue signal for sustainability"

  features:
    core_must_ship:
      shared_calendar:
        description: "Create and join shared calendars"
        loc_budget: 2800
        success_metric: "Avg 2.3 calendars per active user"

      event_management:
        description: "Full event CRUD with essential fields"
        loc_budget: 3200
        success_metric: "15+ events created per calendar/month"

      monthly_calendar_view:
        description: "Clean monthly grid as primary view"
        loc_budget: 1800
        success_metric: "80%+ users prefer monthly view"

      user_authentication:
        description: "Magic link passwordless auth"
        loc_budget: 1500
        success_metric: "95%+ auth success rate"

      mindful_notifications:
        description: "Digest-first notification system"
        loc_budget: 1600
        success_metric: "NPS for notifications > 50"

      real_time_sync:
        description: "Instant updates across all members"
        loc_budget: 1200
        success_metric: "<2s sync latency p95"

      core_total_loc: 12100

    expected_should_ship:
      event_comments:
        description: "Discussion threads on events"
        loc_budget: 1100
        success_metric: "30%+ events have comments"

      weekly_view:
        description: "7-day timeline view"
        loc_budget: 1400
        success_metric: "20%+ users use weekly view"

      recurring_events:
        description: "Basic recurrence (daily, weekly, monthly)"
        loc_budget: 900
        success_metric: "40%+ events are recurring"

      event_reminders:
        description: "Personal reminder notifications"
        loc_budget: 700
        success_metric: "60%+ users enable reminders"

      quick_memo:
        description: "Shared notes board"
        loc_budget: 800
        success_metric: "2+ memos per active calendar"

      data_export:
        description: "iCal and JSON export"
        loc_budget: 400
        success_metric: "5%+ users export data monthly"

      expected_total_loc: 5300

    explicitly_deferred:
      - feature: "Photo albums"
        reason: "Storage complexity, not core value prop"
        revisit_trigger: "50+ user requests"

      - feature: "File attachments"
        reason: "Abuse vectors, storage costs"
        revisit_trigger: "100+ user requests"

      - feature: "Google Calendar sync"
        reason: "OAuth complexity, maintenance burden"
        revisit_trigger: "200+ user requests OR 40% churn cite this"

      - feature: "Native mobile apps"
        reason: "PWA provides 80% of value at 20% cost"
        revisit_trigger: "Phase 2 traction achieved"

      - feature: "Premium subscription billing"
        reason: "Focus on product-market fit first"
        revisit_trigger: "100 paying users via manual invoicing"

      - feature: "Public calendars"
        reason: "Different persona (B2B vs community)"
        revisit_trigger: "Phase 3 if demand proven"

      - feature: "Offline support"
        reason: "Significant complexity for edge case"
        revisit_trigger: "Mobile apps in Phase 2"

  technical_implementation:
    stack:
      frontend: "Next.js 14 + Tailwind + shadcn/ui"
      backend: "Next.js API Routes + tRPC"
      database: "PostgreSQL (Neon)"
      realtime: "Socket.io"
      auth: "Magic links via Resend"
      hosting: "Vercel"

    code_allocation:
      frontend: 8500
      backend: 5500
      shared: 1500
      testing: 2500
      configuration: 500
      buffer: 1500
      total: 20000

  success_metrics:
    primary_targets:
      paying_users:
        target: 100
        measurement: "Manual Stripe invoices initially"
        timeline: "Within 8 weeks of public launch"

      mrr:
        target: 3000  # $3K MRR
        measurement: "Stripe dashboard"
        timeline: "Within 8 weeks of public launch"

      retention_30d:
        target: 0.40  # 40%
        measurement: "Active users who return week 4+"
        timeline: "Measured 30 days post-signup"

    secondary_metrics:
      dau_mau_ratio:
        target: 0.25
        healthy_range: "0.20 - 0.35"

      events_per_user:
        target: 10
        measurement: "Events created per WAU"

      calendars_per_user:
        target: 2.3
        measurement: "Active calendars per user"

      nps:
        target: 50
        measurement: "Monthly survey sample"

      time_to_value:
        target: "< 5 minutes"
        measurement: "Time from signup to first event created"

  traction_triggers_for_phase_2:
    all_required:
      - trigger: "Paying User Count"
        threshold: 100
        measurement: "Stripe customer count"
        notes: "Must be genuine paying customers, not trials"

      - trigger: "Monthly Recurring Revenue"
        threshold: 3000  # $3K
        measurement: "Stripe MRR"
        notes: "Sustainable revenue signal"

      - trigger: "30-Day Retention"
        threshold: 0.40  # 40%
        measurement: "Cohort analysis"
        notes: "Users must stick around to build on"

      - trigger: "Net Promoter Score"
        threshold: 40
        measurement: "Survey of active users"
        notes: "Users must love it, not just tolerate it"

    any_one_required:
      - trigger: "Organic Growth Rate"
        threshold: "20% MoM without paid acquisition"

      - trigger: "Referral Rate"
        threshold: "30% of new users from referrals"

      - trigger: "Enterprise Inbound"
        threshold: "5+ organizations request team features"

  pivot_criteria:
    at_6_months:
      - trigger: "Paying users < 50"
        action: "Segment pivot: try adjacent market (families vs communities)"

      - trigger: "Retention < 25%"
        action: "Product pivot: core value prop not landing"

      - trigger: "NPS < 20"
        action: "Experience pivot: users frustrated with execution"

  go_to_market:
    beta_phase:
      duration: "8 weeks"
      users: "Design partners only (200-500 users)"
      pricing: "Free during beta"
      focus: "Bug fixes, usability, core loop"

    soft_launch:
      duration: "4 weeks"
      users: "Waitlist + organic discovery"
      pricing: "Manual invoicing for premium"
      focus: "Conversion optimization, onboarding"

    public_launch:
      timing: "After soft launch metrics validated"
      pricing: "Stripe billing integration"
      marketing: "Community partnerships, content, ASO"
```

---

## Phase 2: Growth

```yaml
phase_2:
  name: "Growth"
  tagline: "Expand what works, add what's demanded"
  duration: "6-12 months"
  code_budget: 30000  # Additional LOC
  cumulative_loc: 50000

  objectives:
    - "Scale to 1,000 paying users"
    - "Achieve product-market fit indicators"
    - "Build features with proven demand"
    - "Establish sustainable unit economics"

  entry_requirements:
    must_achieve_from_phase_1:
      - "100 paying users"
      - "$3K MRR"
      - "40% 30-day retention"
      - "NPS > 40"

  features:
    high_confidence_with_triggers:
      native_mobile_apps:
        description: "iOS and Android native applications"
        loc_budget: 12000
        trigger_to_build:
          - condition: "60%+ users access via mobile web"
            measurement: "Analytics platform data"
          - condition: "Mobile UX complaints in top 5 feedback themes"
            measurement: "Feedback categorization"
        success_metric: "50% DAU from native apps within 3 months"
        priority: 1

      google_calendar_sync:
        description: "Two-way sync with Google Calendar"
        loc_budget: 2500
        trigger_to_build:
          - condition: "40%+ churn exit surveys cite this need"
            measurement: "Churn survey analysis"
          - condition: "200+ feature requests"
            measurement: "Feature request tracker"
        success_metric: "70% of eligible users enable sync"
        priority: 2

      enhanced_notifications:
        description: "Granular controls, smart batching, quiet hours"
        loc_budget: 1200
        trigger_to_build:
          - condition: "Notification complaints in top 3 issues"
            measurement: "Support ticket analysis"
        success_metric: "Notification satisfaction > 4.0/5.0"
        priority: 3

      apple_calendar_sync:
        description: "CalDAV sync for Apple ecosystem"
        loc_budget: 1800
        trigger_to_build:
          - condition: "30%+ users on Apple devices request sync"
            measurement: "Feature requests + device analytics"
        success_metric: "50% of iOS users enable sync"
        priority: 4

      enhanced_recurrence:
        description: "Complex patterns, exceptions, bulk editing"
        loc_budget: 1000
        trigger_to_build:
          - condition: "Power users request advanced patterns"
            measurement: "50+ requests for specific patterns"
        success_metric: "20% increase in recurring event usage"
        priority: 5

    medium_confidence_features:
      premium_tier_billing:
        description: "Automated Stripe subscription management"
        loc_budget: 2500
        trigger_to_build:
          - condition: "Manual invoicing becomes unsustainable"
            threshold: ">200 paying users"
        includes:
          - "Stripe integration"
          - "Plan management UI"
          - "Upgrade/downgrade flows"
          - "Invoice history"

      file_attachments:
        description: "Attach files to events"
        loc_budget: 2000
        trigger_to_build:
          - condition: "100+ feature requests"
          - condition: "Use case validated (meeting agendas, directions)"
        storage: "S3 or Cloudflare R2"
        limits: "10MB per file, 100MB per calendar/month"

      photo_albums:
        description: "Shared photo storage per calendar"
        loc_budget: 3500
        trigger_to_build:
          - condition: "50+ requests from active communities"
          - condition: "Communities describe workaround pain"
        storage: "CDN with compression"
        scope: "View, upload, basic organization"

      calendar_analytics:
        description: "Insights on calendar usage patterns"
        loc_budget: 1500
        trigger_to_build:
          - condition: "Admin users request visibility"
          - condition: "Validated as premium differentiator"
        includes:
          - "Event frequency trends"
          - "Member participation rates"
          - "Most active times"
        privacy: "Opt-in only, aggregate data"

    nice_to_have_features:
      offline_mode:
        description: "Full offline functionality with sync"
        loc_budget: 2500
        trigger_to_build:
          - condition: "Mobile apps shipped"
          - condition: "Offline demand validated in surveys"

      event_templates:
        description: "Reusable event configurations"
        loc_budget: 800
        trigger_to_build:
          - condition: "Power users create similar events repeatedly"

      calendar_themes:
        description: "Visual customization options"
        loc_budget: 600
        trigger_to_build:
          - condition: "Personalization requests high"

  code_allocation:
    native_mobile: 12000
    sync_integrations: 4300
    premium_billing: 2500
    media_features: 5500
    notifications_enhanced: 1200
    analytics: 1500
    offline: 2500
    buffer: 500
    total: 30000

  success_metrics:
    primary_targets:
      paying_users:
        target: 1000
        timeline: "End of Phase 2"

      mrr:
        target: 25000  # $25K MRR
        timeline: "End of Phase 2"

      net_revenue_retention:
        target: 1.10  # 110% NRR
        measurement: "Expansion > Churn"

      annual_churn_rate:
        target: 0.15  # <15% annual
        measurement: "Monthly cohort analysis"

    secondary_metrics:
      cac:
        target: 30  # <$30 CAC
        measurement: "Total acquisition spend / new customers"

      ltv:
        target: 180  # >$180 LTV
        measurement: "ARPU / monthly churn rate"

      ltv_cac_ratio:
        target: 6  # >6:1
        healthy_minimum: 3

      payback_period:
        target: 4  # <4 months
        measurement: "CAC / monthly ARPU"

      mau:
        target: 25000
        timeline: "End of Phase 2"

  traction_triggers_for_phase_3:
    all_required:
      - trigger: "Paying Users"
        threshold: 1000
        notes: "10x growth from Phase 1"

      - trigger: "MRR"
        threshold: 25000
        notes: "Approaching default-alive"

      - trigger: "Net Revenue Retention"
        threshold: 1.05  # 105%+
        notes: "Expansion must exceed churn"

      - trigger: "LTV/CAC Ratio"
        threshold: 4
        notes: "Sustainable unit economics"

    strategic_signals:
      - trigger: "Enterprise Demand"
        threshold: "10+ organizations actively requesting team features"

      - trigger: "Platform Requests"
        threshold: "25+ integration/API requests"

      - trigger: "International Demand"
        threshold: "20%+ users from non-US markets"

  pivot_criteria:
    at_12_months:
      - trigger: "Paying users < 500"
        action: "Acquisition channel pivot or pricing restructure"

      - trigger: "NRR < 80%"
        action: "Retention crisis - major product intervention"

      - trigger: "CAC > LTV"
        action: "Business model unsustainable - pivot or pause"

  team_scaling:
    start_of_phase: "2-3 engineers"
    end_of_phase: "4-6 engineers + 1 designer + 1 community/support"
    hiring_triggers:
      - "MRR > $10K: Hire 3rd engineer"
      - "MRR > $15K: Hire dedicated designer"
      - "MRR > $20K: Hire community manager"
```

---

## Phase 3: Scale

```yaml
phase_3:
  name: "Scale"
  tagline: "Platform maturity and market expansion"
  duration: "12-24 months"
  code_budget: 40000  # Additional LOC
  cumulative_loc: 90000

  objectives:
    - "Reach 5,000 paying users"
    - "Achieve $500K ARR"
    - "Build platform/ecosystem capabilities"
    - "Explore enterprise and new segments"

  entry_requirements:
    must_achieve_from_phase_2:
      - "1,000 paying users"
      - "$25K MRR"
      - "105%+ Net Revenue Retention"
      - "LTV/CAC ratio > 4"

  features:
    enterprise_community_features:
      team_workspaces:
        description: "Organization-level account management"
        loc_budget: 4000
        trigger_to_build:
          - "25+ organizations on platform"
          - "Admin management repeatedly requested"
        includes:
          - "Organization accounts"
          - "Role-based permissions"
          - "Centralized billing"
          - "Member directory"
          - "Audit logs"

      advanced_permissions:
        description: "Fine-grained access control"
        loc_budget: 2500
        trigger_to_build:
          - "Larger communities need moderation tools"
        includes:
          - "Custom roles"
          - "Event-level permissions"
          - "Invite approval workflows"

      resource_scheduling:
        description: "Book shared community resources"
        loc_budget: 3500
        trigger_to_build:
          - "Cohousing communities need room/equipment booking"
        includes:
          - "Resource definitions"
          - "Availability calendars"
          - "Conflict prevention"
          - "Booking workflows"

      public_calendars:
        description: "Publicly viewable calendars with embeds"
        loc_budget: 3000
        trigger_to_build:
          - "Organizations want external visibility"
          - "SEO opportunity validated"
        includes:
          - "Public calendar pages"
          - "Embed widgets"
          - "Subscribe buttons"
          - "Custom branding"

      sso_integration:
        description: "SAML/OIDC enterprise authentication"
        loc_budget: 2000
        trigger_to_build:
          - "5+ enterprise prospects require SSO"

    platform_features:
      public_api:
        description: "RESTful API for third-party integrations"
        loc_budget: 4000
        trigger_to_build:
          - "25+ integration requests from users"
          - "Developer community interest validated"
        includes:
          - "REST API"
          - "API key management"
          - "Rate limiting"
          - "Documentation"
          - "Sandbox environment"

      webhooks:
        description: "Real-time event notifications to external systems"
        loc_budget: 1500
        trigger_to_build:
          - "Automation use cases identified"
        includes:
          - "Event-based webhooks"
          - "Delivery management"
          - "Retry logic"

      zapier_integration:
        description: "Official Zapier connector"
        loc_budget: 1500
        trigger_to_build:
          - "No-code automation demand validated"

      caldav_support:
        description: "Standard calendar protocol support"
        loc_budget: 3000
        trigger_to_build:
          - "Technical users request native app integration"

    quality_of_life_features:
      advanced_search:
        description: "Full-text search across events, memos, comments"
        loc_budget: 2000
        trigger_to_build:
          - "Information retrieval pain points identified"

      bulk_operations:
        description: "Mass edit, delete, move events"
        loc_budget: 1200
        trigger_to_build:
          - "Admin users managing large calendars"

      calendar_merge_view:
        description: "Unified view across multiple calendars"
        loc_budget: 1800
        trigger_to_build:
          - "Users with many calendars need overview"

      timezone_support:
        description: "Multi-timezone scheduling"
        loc_budget: 2000
        trigger_to_build:
          - "20%+ international user base"
          - "Cross-timezone communities identified"

    new_market_features:
      white_label:
        description: "Branded calendar for organizations"
        loc_budget: 3000
        trigger_to_build:
          - "Enterprise customers willing to pay premium"

      marketplace_integrations:
        description: "Pre-built connections to popular tools"
        loc_budget: 3000
        trigger_to_build:
          - "Common integration patterns identified"
        candidates:
          - "Slack"
          - "Discord"
          - "Notion"
          - "Todoist"

  code_allocation:
    enterprise_features: 15000
    platform_api: 7000
    integrations: 6000
    quality_of_life: 7000
    new_markets: 6000
    buffer: 1000
    reserve: 2000
    total: 40000

  success_metrics:
    primary_targets:
      paying_users:
        target: 5000
        timeline: "End of Phase 3"

      arr:
        target: 500000  # $500K ARR
        timeline: "End of Phase 3"

      enterprise_customers:
        target: 50
        definition: ">$200/month accounts"

      api_active_integrations:
        target: 100
        measurement: "Active API keys with usage"

    secondary_metrics:
      employee_count:
        target: 15
        composition:
          engineering: 8
          design: 2
          product: 2
          operations: 2
          leadership: 1

      gross_margin:
        target: 0.80  # 80%+

      monthly_burn:
        constraint: "<$100K at end of phase"

  market_expansion:
    segment_expansion:
      - segment: "Small businesses"
        trigger: "API platform enables use cases"

      - segment: "Event venues"
        trigger: "Public calendars feature live"

      - segment: "Educational institutions"
        trigger: "Team workspaces + privacy validated"

    geographic_expansion:
      - region: "Europe (UK, Germany, Netherlands)"
        trigger: "GDPR compliance proven, 20%+ EU users"

      - region: "APAC (Australia, Japan)"
        trigger: "$100K+ ARR, localization investment justified"

  team_scaling:
    end_of_phase: "12-15 employees"
    key_hires:
      - "VP Engineering (when 5+ engineers)"
      - "Head of Customer Success"
      - "Developer Advocate (when API launches)"

  funding_considerations:
    bootstrap_to_date: true
    funding_triggers:
      - "Opportunity to accelerate proven model"
      - "Enterprise deals require faster feature delivery"
      - "Competitive pressure requires speed"
    alternative: "Continue bootstrapping with sustainable growth"
```

---

## Pivot and Sunset Criteria

```yaml
pivot_and_sunset:
  philosophy: >
    We build with conviction but remain humble. Markets and timing matter
    as much as execution. Better to pivot early or sunset gracefully than
    to waste resources on a failing path.

  six_month_health_check:
    description: "Systematic evaluation every 6 months"
    evaluates:
      - "Traction vs. targets"
      - "Team energy and belief"
      - "Market conditions"
      - "Competitive dynamics"

  pivot_triggers:

    segment_pivot:
      trigger_conditions:
        - condition: "Beachhead not responding"
          signals:
            - "<50% of target signups"
            - "<30% retention in target segment"
            - "Design partners not engaging"
          action: "Try adjacent segment (families vs communities)"

      potential_pivots:
        - from: "Intentional communities"
          to: "Privacy-conscious families"
          rationale: "Broader market, same core value prop"

        - from: "Privacy-conscious families"
          to: "Remote team coordination"
          rationale: "B2B often easier to monetize"

    product_pivot:
      trigger_conditions:
        - condition: "Calendar not the right solution"
          signals:
            - "Users love chat/memos but not calendar"
            - "Calendar features unused"
            - "Competitors solve calendar better"
          action: "Consider pivoting core value prop"

      potential_pivots:
        - from: "Calendar-first"
          to: "Community hub with calendar"
          rationale: "Calendar becomes feature, not product"

        - from: "Time coordination"
          to: "Community communication"
          rationale: "Follow where users find value"

    business_model_pivot:
      trigger_conditions:
        - condition: "Users won't pay"
          signals:
            - "<2% free-to-paid conversion"
            - "Churn immediately after trial"
            - "Competitors are free"
          action: "Explore alternative monetization"

      potential_pivots:
        - from: "Subscription SaaS"
          to: "Donation/tip model"
          rationale: "Community-aligned monetization"

        - from: "B2C subscription"
          to: "B2B enterprise"
          rationale: "Higher ACV, lower volume"

        - from: "Paid product"
          to: "Open source with hosted service"
          rationale: "Community goodwill, different economics"

  sunset_criteria:
    hard_stops:
      - stop: "Zero traction after 12 months of real effort"
        definition:
          - "<50 paying users"
          - "<$1K MRR"
          - "Retention <15%"
        action: "Sunset product"

      - stop: "Unsustainable burn without path to sustainability"
        definition:
          - "Cash runway <6 months"
          - "No funding options"
          - "Revenue not covering costs"
        action: "Sunset product"

      - stop: "Team has lost belief"
        definition:
          - "Key team members want to leave"
          - "No energy for the mission"
          - "Better opportunities elsewhere"
        action: "Have honest conversation; sunset if needed"

      - stop: "Market has fundamentally shifted"
        definition:
          - "Dominant player makes us obsolete"
          - "Technology shift invalidates approach"
          - "Regulation makes business impossible"
        action: "Sunset product"

  graceful_exit_process:
    timeline: "90-day sunset period"

    user_communication:
      - timing: "Day 1"
        action: "Email all users with sunset announcement"
        content:
          - "Clear timeline"
          - "Reason (honest, not corporate-speak)"
          - "Export options"
          - "Recommendations for alternatives"

      - timing: "Day 30"
        action: "Reminder with export instructions"

      - timing: "Day 60"
        action: "Final reminder; read-only mode approaching"

      - timing: "Day 75"
        action: "Read-only mode begins"

      - timing: "Day 90"
        action: "Service ends; data deleted"

    data_handling:
      - "Provide full data export (JSON, iCal)"
      - "Allow bulk download"
      - "Delete all data after 90 days"
      - "No selling of user data (ever)"

    refunds:
      - "Pro-rated refund for any unused subscription time"
      - "Annual subscribers get full refund for remaining months"
      - "Process refunds before service ends"

    open_source_consideration:
      - "If viable, open source codebase"
      - "Allow community to self-host"
      - "Maintain read-only documentation"

    team_care:
      - "Severance if applicable"
      - "Help with job placement"
      - "Celebrate what was built"
      - "Document learnings for future"

    legal_cleanup:
      - "Cancel all subscriptions and services"
      - "Fulfill contractual obligations"
      - "Proper business dissolution"
```

---

## User Feedback System

```yaml
user_feedback_system:
  philosophy: >
    Users don't owe us feedback, and we don't owe them every feature they
    request. The goal is to understand unmet needs deeply, then apply
    judgment about what to build. Quantity of requests matters less than
    understanding the underlying problem.

  collection_methods:

    in_app_feedback:
      implementation:
        - component: "Feedback Button"
          location: "Bottom-right corner, always accessible"
          prompt: "How can we make Chrono-Commune better?"
          fields:
            - "Category (Bug, Feature, Other)"
            - "Description (required)"
            - "Email (optional, for follow-up)"
            - "Screenshot (optional)"
          experience: "Should take <30 seconds"

        - component: "Contextual Prompts"
          triggers:
            - "After completing key actions (first event, first calendar)"
            - "After 7 days of active use"
            - "After encountering errors"
          style: "Non-intrusive, dismissible"

    nps_survey:
      frequency: "Monthly for active users"
      sample_size: "10% of MAU"
      questions:
        - "How likely are you to recommend Chrono-Commune? (0-10)"
        - "What's the primary reason for your score?"
        - "What's one thing we could do better?"
      follow_up: "Promoters invited to leave review; Detractors contacted personally"

    churn_survey:
      trigger: "Account cancellation or 30 days inactive"
      questions:
        - "What made you stop using Chrono-Commune?"
        - "What tool are you using instead?"
        - "What would bring you back?"
      incentive: "None (keeps responses genuine)"

    feature_request_portal:
      implementation: "Simple voting board (Canny, ProductBoard, or custom)"
      features:
        - "Submit feature ideas"
        - "Vote on existing ideas"
        - "See status (Under Review, Planned, In Progress, Shipped)"
        - "Comment and discuss"
      rules:
        - "Anyone can submit"
        - "Paid users get 3 votes/month; free users get 1"
        - "We respond to all submissions within 1 week"

    user_interviews:
      frequency: "5-10 interviews per month"
      selection:
        - "Power users (top 10% by engagement)"
        - "Recent churners"
        - "New users (first 2 weeks)"
        - "Specific segment focus (rotating)"
      format: "30-minute video call"
      compensation: "1 month premium or $25 gift card"
      questions: "Jobs-to-be-done focused"

    support_ticket_analysis:
      process:
        - "Tag all support tickets by category"
        - "Weekly review of top issues"
        - "Monthly trend analysis"
        - "Escalation of recurring problems"

    community_channels:
      - channel: "Discord server"
        purpose: "Community discussion, peer support"
        moderation: "Light; mostly user-driven"

      - channel: "Twitter/X mentions"
        monitoring: "Daily check for mentions and feedback"

      - channel: "App store reviews"
        monitoring: "Respond to all reviews within 24 hours"

  prioritization_process:

    feedback_triage:
      frequency: "Weekly"
      participants: "Product + Engineering leads"
      process:
        - "Review new feedback from all channels"
        - "Categorize by type (bug, UX, feature, other)"
        - "Tag by urgency (critical, high, medium, low)"
        - "Link related feedback items"
        - "Identify patterns and themes"

    prioritization_framework:
      factors:
        impact:
          weight: 40
          definition: "How many users affected? How much value?"
          scoring:
            5: "Affects >50% of users significantly"
            4: "Affects 20-50% or power users"
            3: "Affects 10-20% or key persona"
            2: "Affects <10%"
            1: "Edge case or nice-to-have"

        effort:
          weight: 25
          definition: "How hard to build and maintain?"
          scoring:
            5: "< 1 week, low risk"
            4: "1-2 weeks, manageable"
            3: "2-4 weeks, some complexity"
            2: "4-8 weeks, significant effort"
            1: "> 8 weeks or high risk"

        strategic_fit:
          weight: 20
          definition: "Does it align with our vision and roadmap?"
          scoring:
            5: "Core to mission, opens new opportunities"
            4: "Strongly aligned, enhances value prop"
            3: "Neutral, doesn't conflict"
            2: "Slightly divergent, resource distraction"
            1: "Counter to strategy"

        request_volume:
          weight: 15
          definition: "How many users are asking?"
          scoring:
            5: "> 200 requests"
            4: "100-200 requests"
            3: "50-100 requests"
            2: "20-50 requests"
            1: "< 20 requests"

      calculation: "(Impact * 0.4) + (Effort * 0.25) + (Strategic * 0.2) + (Volume * 0.15)"

  feature_request_thresholds:
    consider_threshold: 50
    description: "50+ requests = formal consideration in prioritization"
    process:
      - "Feature added to backlog for scoring"
      - "Product owner assigns impact/effort scores"
      - "Discussed in next prioritization meeting"
      - "Status updated on public roadmap"

    fast_track_threshold: 200
    description: "200+ requests = accelerated evaluation"
    process:
      - "Immediate product team discussion"
      - "User interviews to understand need deeply"
      - "Build vs. buy vs. integrate analysis"
      - "Decision communicated within 2 weeks"

    blocking_threshold: "N/A"
    note: >
      No request volume automatically mandates building a feature.
      We may decline popular requests that conflict with our vision,
      values, or code budget philosophy.

  feedback_transparency:
    public_roadmap:
      visibility: "Public"
      content:
        - "Now: Currently building"
        - "Next: Planned for next quarter"
        - "Later: On backlog, prioritized"
        - "Considering: Under evaluation"
        - "Not Planned: Declined with reason"

    changelog:
      frequency: "Per release"
      content:
        - "New features"
        - "Improvements"
        - "Bug fixes"
        - "What we learned"

    declined_requests:
      approach: "Honest explanation"
      examples:
        - request: "Add calendar sharing to Facebook"
          response: "Declined - conflicts with privacy-first philosophy"
        - request: "Add AI scheduling assistant"
          response: "Not now - outside current code budget; revisit in Phase 3"
```

---

## Code Budget Summary

```yaml
code_budget_summary:
  philosophy: >
    Code is a liability, not an asset. Every line must be maintained,
    tested, debugged, and documented. We budget code like we budget
    money: spend only what's necessary, save for the future, and
    always know our balance.

  total_budget: 100000  # LOC

  phase_allocation:
    phase_0:
      phase: "Validation"
      new_loc: 0
      cumulative_loc: 0
      description: "No code; validation activities only"

    phase_1:
      phase: "MVP"
      new_loc: 20000
      cumulative_loc: 20000
      breakdown:
        frontend: 8500
        backend: 5500
        shared: 1500
        testing: 2500
        configuration: 500
        buffer: 1500
      remaining_budget: 80000

    phase_2:
      phase: "Growth"
      new_loc: 30000
      cumulative_loc: 50000
      breakdown:
        native_mobile: 12000
        sync_integrations: 4300
        premium_billing: 2500
        media_features: 5500
        notifications_enhanced: 1200
        analytics: 1500
        offline: 2500
        buffer: 500
      remaining_budget: 50000

    phase_3:
      phase: "Scale"
      new_loc: 40000
      cumulative_loc: 90000
      breakdown:
        enterprise_features: 15000
        platform_api: 7000
        integrations: 6000
        quality_of_life: 7000
        new_markets: 6000
        buffer: 1000
      remaining_budget: 10000

    reserve:
      phase: "Reserve"
      new_loc: 10000
      cumulative_loc: 100000
      purpose:
        - "Unforeseen technical debt"
        - "Security hardening"
        - "Performance optimization"
        - "Regulatory compliance"
        - "Acquisition integration"

  summary_table: |
    ┌───────────┬──────────┬────────────┬───────────┬──────────────────────────┐
    │ Phase     │ New LOC  │ Cumulative │ Remaining │ Key Deliverables         │
    ├───────────┼──────────┼────────────┼───────────┼──────────────────────────┤
    │ Phase 0   │     0    │      0     │  100,000  │ Validation only          │
    │ Phase 1   │  20,000  │   20,000   │   80,000  │ MVP, 100 paying users    │
    │ Phase 2   │  30,000  │   50,000   │   50,000  │ Mobile, sync, 1K users   │
    │ Phase 3   │  40,000  │   90,000   │   10,000  │ Platform, 5K users       │
    │ Reserve   │  10,000  │  100,000   │        0  │ Tech debt, security      │
    └───────────┴──────────┴────────────┴───────────┴──────────────────────────┘

  code_budget_principles:
    - principle: "Every feature must justify its LOC"
      enforcement: "LOC estimate required before approval"

    - principle: "Deletion is as valuable as addition"
      enforcement: "Track LOC removed, celebrate simplification"

    - principle: "Quality over quantity"
      enforcement: "No feature ships without tests"

    - principle: "Buffer is sacred"
      enforcement: "Cannot exceed phase budget without leadership approval"

    - principle: "Reserve is emergency-only"
      enforcement: "Reserve funds require documented justification"

  budget_monitoring:
    tools:
      - "cloc (Count Lines of Code) in CI"
      - "GitHub Insights for trends"
      - "Per-PR size tracking"

    reporting:
      frequency: "Weekly"
      metrics:
        - "Current LOC by category"
        - "LOC added this week"
        - "LOC removed this week"
        - "Budget remaining"
        - "Trend projections"

    alerts:
      - "80% of phase budget used: Yellow flag"
      - "90% of phase budget used: Red flag, requires review"
      - "Budget exceeded: Stop work, retrospective required"
```

---

## Timeline Summary

```yaml
timeline_summary:
  total_duration: "30-48 months to Phase 3 completion"

  milestones:
    phase_0_complete:
      timing: "Month 0-1.5"
      gate: "15+ design partners, 500+ waitlist"

    mvp_beta:
      timing: "Month 1.5-5"
      gate: "Core features complete, beta users active"

    mvp_launch:
      timing: "Month 5-7"
      gate: "Public launch, first paying users"

    phase_1_complete:
      timing: "Month 7-9"
      gate: "100 paying, $3K MRR, 40% retention"

    phase_2_start:
      timing: "Month 9-10"
      gate: "Traction triggers met"

    phase_2_complete:
      timing: "Month 18-24"
      gate: "1K paying, $25K MRR, 110% NRR"

    phase_3_start:
      timing: "Month 24-26"
      gate: "Growth triggers met"

    phase_3_complete:
      timing: "Month 36-48"
      gate: "5K paying, $500K ARR"

  risk_factors:
    - risk: "Phase 1 takes longer"
      mitigation: "Strict scope control, MVP mindset"

    - risk: "Traction triggers not met"
      mitigation: "Built-in pivot criteria, graceful sunset plan"

    - risk: "Team scaling challenges"
      mitigation: "Hire ahead of need, strong culture"

    - risk: "Competitor moves"
      mitigation: "Differentiation focus, community moat"

  success_probability:
    phase_0_to_1: "70% (validation de-risks)"
    phase_1_to_2: "50% (PMF is hard)"
    phase_2_to_3: "70% (proven model scales)"
    overall: "25% (realistic startup odds)"
```

---

## Summary

This roadmap establishes a disciplined, traction-gated approach to building Chrono-Commune. Key principles:

1. **Validation before code**: Phase 0 proves the problem and willingness to pay
2. **Earn the next phase**: Each phase unlocks only when metrics prove readiness
3. **Features are triggered**: Nothing built without validated demand
4. **Code budget is sacred**: 100K LOC total, allocated with discipline
5. **Pivot early, sunset gracefully**: Clear criteria prevent prolonged failure
6. **Listen systematically**: User feedback drives prioritization, not whims

The path from idea to $500K ARR is 3-4 years of focused execution. Most startups fail; this roadmap increases our odds by building only what's proven to matter.

---

*Document Version: 1.0*
*Created: 2026-01-10*
*Status: Ready for Validation Phase*
