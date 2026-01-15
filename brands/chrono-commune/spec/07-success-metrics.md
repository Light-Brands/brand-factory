# Chrono-Commune: Success Metrics & KPI Framework

> **Measurement Strategy for Values-Aligned Growth**
> **Version**: 1.0.0
> **Date**: 2026-01-10
> **Status**: Approved for Implementation

---

## Metrics Philosophy

```yaml
metrics_philosophy:
  core_belief: |
    We measure what matters for sustainable community building,
    not what maximizes short-term engagement or vanity metrics.
    Our metrics should answer: "Are we helping communities
    coordinate with less friction and more connection?"

  guiding_principles:
    - "Measure outcomes, not just activity"
    - "Quality of engagement over quantity"
    - "User success over user addiction"
    - "Sustainable growth over hockey sticks"
    - "Community health over individual metrics"

  measurement_hierarchy:
    tier_1: "Are users successfully coordinating?"
    tier_2: "Are communities staying together?"
    tier_3: "Is the business sustainable?"
    tier_4: "Are we growing responsibly?"
```

---

## Section 1: North Star Metrics

### Primary North Star

```yaml
north_star_primary:
  metric: "Weekly Active Calendars (WAC)"
  definition: |
    Number of calendars with at least 2 members where at least
    one member has created, modified, or commented on an event
    in the past 7 days.

  why_this_metric: |
    WAC captures what matters: communities actively using
    Chrono-Commune for coordination. It requires both
    community formation (2+ members) AND engagement (activity).
    It's resistant to gaming and reflects genuine value delivery.

  calculation: |
    COUNT(calendars WHERE
      member_count >= 2
      AND EXISTS(activity IN last_7_days)
    )

  targets:
    launch: 100 WAC
    month_3: 500 WAC
    month_6: 1,500 WAC
    year_1: 5,000 WAC
    year_3: 50,000 WAC

  leading_indicators:
    - "New calendar creation rate"
    - "Invitation acceptance rate"
    - "Second member join rate"
```

### Supporting North Stars

```yaml
north_star_supporting:
  - metric: "Events Created Per Active Calendar"
    definition: "Average events created per WAC per week"
    target: "> 3 events/calendar/week"
    why: "Shows depth of coordination, not just presence"

  - metric: "Community Retention Rate"
    definition: |
      Percentage of calendars with 2+ members that remain
      active (at least 1 event interaction) after 90 days
    target: "> 50%"
    why: "Communities that stay together prove value"

  - metric: "Net Promoter Score (NPS)"
    definition: "Standard NPS measurement across active users"
    target: "> 60"
    why: "Would users recommend us to their community?"
```

---

## Section 2: KPI Framework by Function

### Product Metrics

```yaml
product_kpis:
  activation:
    - metric: "Time to First Calendar"
      definition: "Seconds from signup to first calendar created"
      target: "< 60 seconds"
      current_baseline: null
      measurement: "Analytics event tracking"

    - metric: "Time to First Event"
      definition: "Seconds from calendar creation to first event"
      target: "< 30 seconds"
      current_baseline: null
      measurement: "Analytics event tracking"

    - metric: "Invitation Send Rate"
      definition: "% of new calendars where creator sends invitation"
      target: "> 80%"
      current_baseline: null
      measurement: "Backend event tracking"

    - metric: "Invitation Accept Rate"
      definition: "% of invitations that result in join"
      target: "> 60%"
      current_baseline: null
      measurement: "Backend event tracking"

  engagement:
    - metric: "DAU/MAU Ratio"
      definition: "Daily active users / Monthly active users"
      target: "> 0.25 (25%)"
      interpretation: |
        25% means typical user opens app 7-8 days per month.
        For a calendar, this reflects healthy, non-addictive use.
      current_baseline: null

    - metric: "Events Per User Per Week"
      definition: "Average events created or interacted with"
      target: "> 5"
      current_baseline: null

    - metric: "Notification Relevance Score"
      definition: |
        % of notifications that result in app open within 1 hour
        (inverse: notifications ignored)
      target: "> 40%"
      interpretation: "Most notifications should be worth opening"
      current_baseline: null

  retention:
    - metric: "D7 Retention"
      definition: "% of new users returning after 7 days"
      target: "> 40%"
      current_baseline: null

    - metric: "D30 Retention"
      definition: "% of new users returning after 30 days"
      target: "> 25%"
      current_baseline: null

    - metric: "D90 Retention"
      definition: "% of new users returning after 90 days"
      target: "> 15%"
      current_baseline: null

    - metric: "Calendar Churn Rate"
      definition: "% of calendars that become inactive (no activity for 60 days)"
      target: "< 10% per month"
      current_baseline: null

  feature_adoption:
    - metric: "Comment Adoption"
      definition: "% of events with at least one comment"
      target: "> 20%"
      current_baseline: null

    - metric: "Recurring Event Usage"
      definition: "% of events that use recurrence"
      target: "> 30%"
      current_baseline: null

    - metric: "Memo Usage"
      definition: "% of calendars with at least one memo"
      target: "> 40%"
      current_baseline: null
```

### Business Metrics

```yaml
business_kpis:
  revenue:
    - metric: "Monthly Recurring Revenue (MRR)"
      targets:
        month_6: "$500"
        month_12: "$5,000"
        month_24: "$15,000"
        month_36: "$40,000"
      measurement: "Stripe/payment provider"

    - metric: "Annual Recurring Revenue (ARR)"
      targets:
        year_1: "$60,000"
        year_2: "$180,000"
        year_3: "$480,000"
        year_5: "$1,200,000"
      measurement: "MRR * 12"

    - metric: "Average Revenue Per User (ARPU)"
      definition: "MRR / Total paying users"
      target: "$5.50/month"
      current_baseline: null

    - metric: "Lifetime Value (LTV)"
      definition: "ARPU * Average customer lifespan in months"
      target: "> $60"
      current_baseline: null

  conversion:
    - metric: "Free to Premium Conversion Rate"
      definition: "% of free users who convert to premium"
      target: "5-10%"
      interpretation: |
        We aim for healthy conversion, not aggressive upselling.
        Too high (>15%) might indicate free tier is too limited.
      current_baseline: null

    - metric: "Time to Conversion"
      definition: "Average days from signup to premium conversion"
      target: "30-90 days"
      interpretation: "Users should experience value before paying"
      current_baseline: null

    - metric: "Premium Churn Rate"
      definition: "% of premium subscribers who cancel per month"
      target: "< 5%"
      current_baseline: null

  efficiency:
    - metric: "Customer Acquisition Cost (CAC)"
      definition: "Marketing spend / New customers acquired"
      target: "< $25"
      current_baseline: null

    - metric: "LTV:CAC Ratio"
      definition: "Lifetime Value / Customer Acquisition Cost"
      target: "> 3:1"
      interpretation: "Healthy SaaS ratio for sustainable growth"
      current_baseline: null

    - metric: "Payback Period"
      definition: "Months to recover CAC from premium user"
      target: "< 12 months"
      current_baseline: null
```

### Community Health Metrics

```yaml
community_health_kpis:
  community_formation:
    - metric: "Average Calendar Size"
      definition: "Average members per active calendar"
      target: "3-8 members"
      interpretation: |
        Too small (< 3) suggests solo use, too large (> 15)
        suggests organizational use (different segment)
      current_baseline: null

    - metric: "Multi-Calendar Households"
      definition: "% of users in 2+ calendars"
      target: "> 30%"
      interpretation: "Users coordinating across multiple groups"
      current_baseline: null

  community_engagement:
    - metric: "Bi-Directional Participation"
      definition: "% of calendars where 2+ members create events"
      target: "> 50%"
      interpretation: "Healthy communities have multiple contributors"
      current_baseline: null

    - metric: "Response Time to Events"
      definition: "Average time for other members to view new event"
      target: "< 24 hours"
      current_baseline: null

  community_satisfaction:
    - metric: "Net Promoter Score (NPS)"
      target: "> 60"
      survey_frequency: "Quarterly"
      current_baseline: null

    - metric: "Support Ticket Volume"
      definition: "Tickets per 1,000 active users per month"
      target: "< 20"
      current_baseline: null

    - metric: "Feature Request Quality"
      definition: "% of feedback that's constructive vs complaints"
      target: "> 60% constructive"
      interpretation: "Engaged users make suggestions, not just complaints"
      current_baseline: null
```

---

## Section 3: Anti-Metrics

```yaml
anti_metrics:
  definition: |
    These are metrics we explicitly REFUSE to optimize for,
    even if they might improve engagement or revenue. Optimizing
    for these would violate our values and harm our users.

  prohibited_metrics:
    - metric: "Time in App"
      reason: |
        We want efficient use, not addictive use. A user who
        coordinates their week in 5 minutes has succeeded.
        Maximizing time in app would lead to dark patterns.

    - metric: "Notification Open Rate"
      reason: |
        Optimizing for this leads to attention-hijacking patterns
        like urgency language, FOMO, and over-notification.
        We optimize for notification relevance, not opens.

    - metric: "Daily Active Streaks"
      reason: |
        Streaks create artificial obligation and guilt. Users
        should open the app when they need it, not to maintain
        a streak. No gamification of attendance.

    - metric: "Session Depth (pages per session)"
      reason: |
        More pages often means confusion, not engagement.
        We want users to accomplish their goal quickly.

    - metric: "Social Pressure Conversions"
      reason: |
        We will not show "X members of your calendar have premium"
        or similar guilt-based upselling. Premium sells on value.

    - metric: "Viral Coefficient (raw)"
      reason: |
        Raw viral growth without quality leads to spam and churn.
        We measure intentional invitations, not viral tricks.

  warning_signs:
    if_we_see:
      - "Time in app increasing without coordination improvement"
      - "Notification sends increasing faster than events"
      - "Conversion rate spiking without NPS improvement"
      - "User complaints about notification volume"
    then: "Review product decisions for dark pattern creep"
```

---

## Section 4: Traction Triggers

### Phase Gate Metrics

```yaml
phase_gates:
  mvp_launch_readiness:
    gate: "Ready to launch to beta users"
    requirements:
      - metric: "Core flow completion rate in testing"
        threshold: "> 90%"
      - metric: "Critical bugs"
        threshold: "0"
      - metric: "Load time (p95)"
        threshold: "< 3 seconds"
      - metric: "Test coverage"
        threshold: "> 60%"

  public_launch_readiness:
    gate: "Ready for public launch"
    requirements:
      - metric: "Beta user NPS"
        threshold: "> 50"
      - metric: "Beta calendar retention (30 days)"
        threshold: "> 40%"
      - metric: "Uptime (30 day average)"
        threshold: "> 99.5%"
      - metric: "Beta user interviews completed"
        threshold: "> 20"

  premium_tier_launch:
    gate: "Ready to launch premium tier"
    requirements:
      - metric: "Monthly Active Users (MAU)"
        threshold: "> 5,000"
      - metric: "Expressed willingness to pay (survey)"
        threshold: "> 20% of respondents"
      - metric: "Feature completeness for premium"
        threshold: "100%"

  growth_investment:
    gate: "Ready for paid acquisition investment"
    requirements:
      - metric: "Organic LTV"
        threshold: "> $50"
      - metric: "Free to premium conversion"
        threshold: "> 5%"
      - metric: "D90 retention"
        threshold: "> 15%"
      - metric: "NPS"
        threshold: "> 55"
```

### Success Thresholds

```yaml
success_thresholds:
  month_3:
    description: "Early traction validation"
    must_achieve:
      - "500+ registered users"
      - "100+ Weekly Active Calendars"
      - "D7 retention > 30%"
      - "NPS > 40"
    nice_to_have:
      - "First organic referrals"
      - "Press/blog coverage"

  month_6:
    description: "Product-market fit signals"
    must_achieve:
      - "2,000+ registered users"
      - "500+ Weekly Active Calendars"
      - "D30 retention > 20%"
      - "NPS > 50"
      - "$500+ MRR (if premium launched)"
    nice_to_have:
      - "Community testimonials"
      - "5%+ free-to-premium conversion"

  year_1:
    description: "Sustainable traction"
    must_achieve:
      - "10,000+ registered users"
      - "2,000+ Weekly Active Calendars"
      - "D90 retention > 15%"
      - "NPS > 55"
      - "$5,000+ MRR"
      - "Premium churn < 8%"
    nice_to_have:
      - "Break-even on operating costs"
      - "Organic growth > 50% of new users"

  year_3:
    description: "Market position established"
    must_achieve:
      - "100,000+ registered users"
      - "20,000+ Weekly Active Calendars"
      - "NPS > 60"
      - "$40,000+ MRR"
      - "LTV:CAC > 3:1"
    nice_to_have:
      - "Top 5 in App Store category"
      - "Recognized brand in target segment"
```

### Failure Triggers

```yaml
failure_triggers:
  description: |
    If any of these conditions persist for 2+ months,
    we must pause and reassess strategy.

  red_flags:
    month_6:
      - "D7 retention < 20%"
      - "NPS < 30"
      - "Invitation accept rate < 30%"
      - "No organic referrals"

    year_1:
      - "WAC growth stalled (< 10% month-over-month)"
      - "Premium conversion < 2%"
      - "Premium churn > 15%"
      - "NPS declining"

  response_protocol:
    if_triggered:
      - "Pause new feature development"
      - "Conduct 20+ user interviews"
      - "Analyze cohort-level retention data"
      - "Identify specific failure point in funnel"
      - "Propose pivot or shutdown within 30 days"
```

---

## Section 5: Measurement Implementation

### Analytics Architecture

```yaml
analytics_architecture:
  primary_tool: "PostHog"
  rationale: |
    Privacy-focused, self-hostable if needed, good balance
    of features and philosophy alignment.

  event_taxonomy:
    user_events:
      - "user.signed_up"
      - "user.logged_in"
      - "user.profile_updated"
      - "user.deleted_account"

    calendar_events:
      - "calendar.created"
      - "calendar.joined"
      - "calendar.left"
      - "calendar.deleted"
      - "calendar.settings_changed"
      - "calendar.invite_sent"
      - "calendar.invite_accepted"

    event_events:
      - "event.created"
      - "event.updated"
      - "event.deleted"
      - "event.viewed"

    engagement_events:
      - "comment.created"
      - "memo.created"
      - "notification.received"
      - "notification.opened"
      - "export.requested"

  privacy_compliance:
    - "No PII in analytics events"
    - "User ID is hashed, not email"
    - "IP addresses not stored long-term"
    - "Users can opt out of analytics"
```

### Reporting Cadence

```yaml
reporting_cadence:
  daily:
    metrics:
      - "New signups"
      - "New calendars"
      - "DAU"
    audience: "Internal dashboard"

  weekly:
    metrics:
      - "WAC trend"
      - "Retention cohorts"
      - "Funnel conversion rates"
      - "Notable user feedback"
    audience: "Team sync"
    format: "5-minute standup review"

  monthly:
    metrics:
      - "All KPIs vs targets"
      - "MRR and growth"
      - "NPS trend"
      - "Feature adoption"
    audience: "Team + stakeholders"
    format: "Written report"

  quarterly:
    metrics:
      - "Strategic KPI review"
      - "Goal vs actual"
      - "Next quarter targets"
      - "User research summary"
    audience: "All stakeholders"
    format: "Presentation + discussion"
```

### Dashboard Design

```yaml
dashboard_tiers:
  executive:
    name: "North Star Dashboard"
    metrics:
      - "Weekly Active Calendars (trend)"
      - "MRR (trend)"
      - "NPS (current)"
      - "D30 Retention (trend)"
    refresh: "Daily"

  product:
    name: "Product Health Dashboard"
    metrics:
      - "Funnel: Signup > Calendar > Invite > Accept > Active"
      - "Feature adoption rates"
      - "Error rates by feature"
      - "Performance metrics"
    refresh: "Real-time"

  growth:
    name: "Growth Dashboard"
    metrics:
      - "Acquisition by channel"
      - "Conversion funnel"
      - "LTV cohorts"
      - "Referral sources"
    refresh: "Daily"
```

---

## Section 6: Experimentation Framework

```yaml
experimentation:
  philosophy: |
    We experiment to learn, not to optimize dark patterns.
    All experiments must pass the "Would users thank us?" test.

  approved_experiment_areas:
    - "Onboarding flow optimization"
    - "Feature discoverability"
    - "Notification timing"
    - "Pricing page clarity"
    - "Export/import flows"

  prohibited_experiment_areas:
    - "Increasing notification frequency"
    - "Adding friction to free tier"
    - "Social pressure in premium upsells"
    - "Reducing data export access"
    - "Any form of urgency/scarcity messaging"

  experiment_process:
    1: "Hypothesis must include expected user benefit"
    2: "Define success metric AND guardrail metric"
    3: "Minimum 1 week runtime for significance"
    4: "All users can opt out of experiments"
    5: "Results shared transparently"

  example:
    hypothesis: |
      Showing a calendar preview before signup will increase
      invitation accept rate because users understand value.
    success_metric: "Invitation accept rate"
    guardrail_metric: "Time to complete signup"
    expected_benefit: "Users make more informed decision to join"
```

---

## Appendix: Metric Definitions Glossary

```yaml
glossary:
  user_types:
    registered_user: "Has completed signup with verified email"
    active_user: "Has opened app in specified time period"
    paying_user: "Has active premium subscription"
    churned_user: "Was paying, subscription ended"

  time_periods:
    daily: "Calendar day in user's timezone"
    weekly: "Sunday to Saturday"
    monthly: "Calendar month"

  activity_definitions:
    active_calendar: "Calendar with event activity in period"
    event_activity: "Create, update, or comment on event"
    user_activity: "Any authenticated action in app"

  calculation_notes:
    retention: "Calculated on cohort basis (signup week)"
    mrr: "Sum of all active monthly subscriptions"
    nps: "((Promoters - Detractors) / Total) * 100"
```

---

*Document prepared by SaaS Spec Synthesizer Agent*
*Metrics Framework v1.0*
