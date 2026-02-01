# Chrono-Commune MVP Architecture

> Minimal Viable Product specification for a community-focused calendar platform
>
> **Budget**: 20,000 LOC | **Philosophy**: Radical Simplicity | **Status**: Architecture Complete

---

## Executive Summary

This document defines the MVP architecture for Chrono-Commune, targeting a **20,000 LOC budget** with a focus on "effortless community calendar coordination." Every feature must pass the **10x Rule**: deliver 10x value compared to its complexity cost.

---

## 1. Problem Crystallization

```yaml
problem_crystallization:
  one_sentence: >
    Communities struggle to coordinate schedules across multiple apps,
    leading to missed connections, notification fatigue, and fragmented
    communication that erodes the relationships they're trying to nurture.

  success_definition:
    for_users: >
      A user successfully experiences Chrono-Commune when they can see
      their community's upcoming activities in one calm view, join or
      create an event in under 30 seconds, and feel informed without
      feeling interrupted.

    measurable_outcomes:
      - "Time to create shared event: < 30 seconds"
      - "Time to understand week's community activities: < 10 seconds"
      - "Notification-to-action ratio: > 80% (most notifications are relevant)"
      - "Weekly active retention at 4 weeks: > 60%"

  core_insight: >
    Calendars have optimized for individual productivity, not community
    connection. Chrono-Commune inverts this: we optimize for the health
    of the group, not the efficiency of the individual.
```

---

## 2. Feature Prioritization

### 2.1 CORE Features (Must Ship)

```yaml
core_features:
  # These features define the minimum viable product
  # Without any of these, the product cannot deliver its core value

  shared_calendar:
    description: "Create and join shared calendars for any community"
    value_proposition: "The atomic unit of community coordination"
    loc_estimate: 2800
    breakdown:
      - "Calendar CRUD operations: 400 LOC"
      - "Calendar listing and switching: 300 LOC"
      - "Member management (add/remove): 500 LOC"
      - "Invitation system (link-based): 400 LOC"
      - "Calendar settings: 300 LOC"
      - "UI components (list, card, modal): 900 LOC"
    ten_x_justification: >
      Without shared calendars, there is no product. This is the
      foundation that enables all community coordination.

  event_management:
    description: "Create, view, edit, and delete events with essential fields"
    value_proposition: "The primary interaction for community scheduling"
    loc_estimate: 3200
    breakdown:
      - "Event CRUD operations: 500 LOC"
      - "Event form (create/edit): 600 LOC"
      - "Event detail view: 400 LOC"
      - "Date/time picker component: 500 LOC"
      - "Participant selection: 300 LOC"
      - "Event list/timeline views: 500 LOC"
      - "Event labels (5 colors): 200 LOC"
      - "All-day event handling: 200 LOC"
    ten_x_justification: >
      Events are the core data type. Without robust event management,
      coordination is impossible. 10x value is guaranteed.

  monthly_calendar_view:
    description: "Clean monthly grid showing community events at a glance"
    value_proposition: "Instant visibility into community activities"
    loc_estimate: 1800
    breakdown:
      - "Calendar grid component: 600 LOC"
      - "Day cell with event dots/previews: 400 LOC"
      - "Month navigation: 200 LOC"
      - "Today indicator: 100 LOC"
      - "Event popup on day click: 300 LOC"
      - "Responsive layout: 200 LOC"
    ten_x_justification: >
      The monthly view is the "home" of the product. Users spend 80%
      of their time here. Essential for quick orientation.

  user_authentication:
    description: "Simple email-based auth with magic links"
    value_proposition: "Secure, passwordless access that respects privacy"
    loc_estimate: 1500
    breakdown:
      - "Magic link email flow: 400 LOC"
      - "Session management: 300 LOC"
      - "User profile (name, avatar): 300 LOC"
      - "Auth middleware: 200 LOC"
      - "Login/signup UI: 300 LOC"
    ten_x_justification: >
      Authentication is table stakes. Magic links reduce friction
      and eliminate password fatigue while maintaining security.

  mindful_notifications:
    description: "Digest-first notifications that respect attention"
    value_proposition: "Stay informed without interruption anxiety"
    loc_estimate: 1600
    breakdown:
      - "Daily digest generation: 400 LOC"
      - "Notification preferences: 300 LOC"
      - "Email notification templates: 300 LOC"
      - "In-app notification center: 400 LOC"
      - "Push notification service: 200 LOC"
    ten_x_justification: >
      This is a key differentiator. Digest-first respects user attention
      while ensuring nothing important is missed. Community-first thinking.

  real_time_sync:
    description: "Changes appear instantly for all calendar members"
    value_proposition: "Everyone sees the same truth, always"
    loc_estimate: 1200
    breakdown:
      - "WebSocket connection management: 400 LOC"
      - "Event subscription system: 300 LOC"
      - "Optimistic UI updates: 300 LOC"
      - "Conflict resolution: 200 LOC"
    ten_x_justification: >
      Real-time sync transforms the experience from "checking a calendar"
      to "living in shared time." Essential for community feeling.

core_features_total_loc: 12100
```

### 2.2 EXPECTED Features (Should Ship)

```yaml
expected_features:
  # These features significantly enhance the product
  # MVP can launch without them, but should include if budget allows

  event_comments:
    description: "Simple threaded comments on events"
    value_proposition: "Contextual communication without leaving the calendar"
    loc_estimate: 1100
    breakdown:
      - "Comment CRUD: 300 LOC"
      - "Comment list component: 300 LOC"
      - "Comment form: 200 LOC"
      - "Real-time comment sync: 300 LOC"
    ten_x_justification: >
      Comments keep discussions tied to their context. Eliminates
      "which event were we talking about?" confusion.

  weekly_view:
    description: "Vertical timeline view showing hourly slots across 7 days"
    value_proposition: "Better for time-blocking and seeing conflicts"
    loc_estimate: 1400
    breakdown:
      - "Weekly grid component: 500 LOC"
      - "Time slot rendering: 300 LOC"
      - "Event positioning algorithm: 400 LOC"
      - "Week navigation: 200 LOC"
    ten_x_justification: >
      Essential for communities with time-sensitive scheduling.
      Complements monthly view for different use cases.

  recurring_events:
    description: "Basic recurrence (daily, weekly, monthly)"
    value_proposition: "Set once, coordinates forever"
    loc_estimate: 900
    breakdown:
      - "Recurrence rule builder UI: 300 LOC"
      - "Recurrence expansion logic: 400 LOC"
      - "Edit series vs single event: 200 LOC"
    ten_x_justification: >
      Most community activities recur. Without this, users must
      manually recreate events, causing significant friction.

  event_reminders:
    description: "Personal reminders before events"
    value_proposition: "Never miss an important community moment"
    loc_estimate: 700
    breakdown:
      - "Reminder selection UI: 200 LOC"
      - "Reminder scheduling service: 300 LOC"
      - "Reminder delivery: 200 LOC"
    ten_x_justification: >
      Reminders are expected behavior. Simple implementation
      with high value for user peace of mind.

  quick_memo:
    description: "Shared notes board for calendar members"
    value_proposition: "Non-scheduled information for the community"
    loc_estimate: 800
    breakdown:
      - "Memo CRUD: 250 LOC"
      - "Memo list sidebar: 300 LOC"
      - "Real-time memo sync: 250 LOC"
    ten_x_justification: >
      Not everything is an event. Memos capture the informal
      communication that builds community culture.

  data_export:
    description: "Export calendar to iCal format"
    value_proposition: "User sovereignty over their data"
    loc_estimate: 400
    breakdown:
      - "iCal generation: 250 LOC"
      - "Export UI and download: 150 LOC"
    ten_x_justification: >
      Core to privacy promise. Users must be able to leave
      with their data. Non-negotiable for trust.

expected_features_total_loc: 5300
```

### 2.3 EXPLICITLY EXCLUDED Features

```yaml
excluded_features:
  # These features are intentionally excluded from MVP
  # Each exclusion includes rationale for why it doesn't meet the 10x bar

  photo_album:
    description: "Shared photo storage per calendar"
    rationale: >
      High complexity (storage, CDN, compression) for tangential value.
      Users have Google Photos, iCloud. We're a calendar, not a photo app.
      Include in v2 if user demand is strong.
    loc_estimate_if_included: 3500

  file_attachments:
    description: "Attach files to events"
    rationale: >
      Storage complexity and abuse vectors. Users can share links
      to files in event descriptions. Keep it simple for MVP.
    loc_estimate_if_included: 1500

  google_calendar_sync:
    description: "Two-way sync with Google Calendar"
    rationale: >
      OAuth complexity, edge cases, and ongoing maintenance burden.
      MVP focuses on being the primary calendar for communities,
      not a sync layer. iCal export covers escape hatch.
    loc_estimate_if_included: 2500

  public_calendars:
    description: "Publicly viewable calendars with embed widgets"
    rationale: >
      Different user persona (organizations vs communities).
      Adds SEO, widget complexity. Phase 2 feature.
    loc_estimate_if_included: 2000

  premium_subscription:
    description: "Paid tier with enhanced features"
    rationale: >
      Payment processing, entitlement logic, billing UI.
      Focus on product-market fit before monetization.
      Generous free tier builds user love first.
    loc_estimate_if_included: 2500

  mobile_native_apps:
    description: "iOS and Android native applications"
    rationale: >
      Doubles or triples codebase. PWA with responsive design
      provides 80% of mobile value at 20% of the cost.
      Native apps are a Phase 2 investment.
    loc_estimate_if_included: 15000

  offline_mode:
    description: "Full offline functionality"
    rationale: >
      Service workers, sync queues, conflict resolution.
      Most calendar use is online. Optimistic UI provides
      perceived offline experience for common actions.
    loc_estimate_if_included: 2000

  time_zone_support:
    description: "Full multi-timezone handling"
    rationale: >
      Significant complexity for edge case. MVP assumes
      community members share a timezone. Display times
      in browser's local timezone. V2 enhancement.
    loc_estimate_if_included: 1200

  event_priority_levels:
    description: "Mark events as high/medium/low priority"
    rationale: >
      Productivity-first thinking. Communities don't need
      to rank importance of events. All events matter equally.
      Goes against community-first philosophy.
    loc_estimate_if_included: 400

  activity_feed:
    description: "Comprehensive activity log"
    rationale: >
      Nice to have but not essential. Real-time sync and
      notifications cover the "stay informed" need.
      Adds complexity without 10x value.
    loc_estimate_if_included: 1000
```

---

## 3. Technical Architecture

### 3.1 Recommended Tech Stack

```yaml
tech_stack:
  philosophy: >
    Boring technology that works. Every tool chosen is proven,
    well-documented, and optimized for developer productivity.
    No cutting-edge experiments in the MVP.

  frontend:
    framework: "Next.js 14 (App Router)"
    rationale: "Full-stack React with excellent DX, SSR, and deployment"
    ui_library: "Tailwind CSS + shadcn/ui"
    rationale_ui: "Rapid styling with accessible, customizable components"
    state_management: "React Query + Zustand"
    rationale_state: "Server state and client state separated cleanly"
    real_time: "Socket.io client"
    rationale_realtime: "Proven WebSocket abstraction"

  backend:
    runtime: "Node.js 20 LTS"
    framework: "Next.js API Routes + tRPC"
    rationale: "Type-safe API layer, collocated with frontend"
    database: "PostgreSQL 16"
    rationale_db: "Rock-solid relational DB, perfect for calendar data"
    orm: "Drizzle ORM"
    rationale_orm: "Type-safe, lightweight, excellent DX"
    real_time: "Socket.io server"
    cache: "Redis (via Upstash)"
    rationale_cache: "Session storage, rate limiting, pub/sub"

  infrastructure:
    hosting: "Vercel"
    rationale_hosting: "Zero-config deployment, excellent Next.js support"
    database_hosting: "Neon (serverless PostgreSQL)"
    rationale_neon: "Generous free tier, auto-scaling, branching"
    email: "Resend"
    rationale_email: "Simple API, reliable delivery, good DX"
    file_storage: "None for MVP"
    rationale_storage: "No file uploads in MVP scope"
    monitoring: "Vercel Analytics + Sentry"

  development:
    language: "TypeScript (strict mode)"
    testing: "Vitest + Playwright"
    linting: "ESLint + Prettier"
    validation: "Zod"
```

### 3.2 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CHRONO-COMMUNE MVP ARCHITECTURE                   │
└─────────────────────────────────────────────────────────────────────────────┘

                                    ┌─────────────┐
                                    │   USERS     │
                                    │ (Browser)   │
                                    └──────┬──────┘
                                           │
                                           │ HTTPS
                                           ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                                   VERCEL EDGE                               │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         NEXT.JS APPLICATION                          │   │
│  │                                                                      │   │
│  │  ┌──────────────────────────────────────────────────────────────┐   │   │
│  │  │                      FRONTEND (React)                         │   │   │
│  │  │                                                               │   │   │
│  │  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │   │   │
│  │  │   │  Calendar   │  │   Event     │  │    Notification     │  │   │   │
│  │  │   │   Views     │  │   Manager   │  │      Center         │  │   │   │
│  │  │   └─────────────┘  └─────────────┘  └─────────────────────┘  │   │   │
│  │  │                                                               │   │   │
│  │  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │   │   │
│  │  │   │   Member    │  │    Memo     │  │       Auth          │  │   │   │
│  │  │   │   Panel     │  │   Sidebar   │  │      Flow           │  │   │   │
│  │  │   └─────────────┘  └─────────────┘  └─────────────────────┘  │   │   │
│  │  │                                                               │   │   │
│  │  └──────────────────────────────────────────────────────────────┘   │   │
│  │                              │                                       │   │
│  │                              │ tRPC                                  │   │
│  │                              ▼                                       │   │
│  │  ┌──────────────────────────────────────────────────────────────┐   │   │
│  │  │                      BACKEND (tRPC)                           │   │   │
│  │  │                                                               │   │   │
│  │  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │   │   │
│  │  │   │  Calendar   │  │   Event     │  │    Notification     │  │   │   │
│  │  │   │   Router    │  │   Router    │  │      Router         │  │   │   │
│  │  │   └─────────────┘  └─────────────┘  └─────────────────────┘  │   │   │
│  │  │                                                               │   │   │
│  │  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │   │   │
│  │  │   │   Member    │  │    Memo     │  │       Auth          │  │   │   │
│  │  │   │   Router    │  │   Router    │  │      Router         │  │   │   │
│  │  │   └─────────────┘  └─────────────┘  └─────────────────────┘  │   │   │
│  │  │                                                               │   │   │
│  │  └──────────────────────────────────────────────────────────────┘   │   │
│  │                                                                      │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
          │                    │                      │
          │                    │                      │
          ▼                    ▼                      ▼
  ┌───────────────┐   ┌───────────────┐      ┌───────────────┐
  │     NEON      │   │    UPSTASH    │      │    RESEND     │
  │  PostgreSQL   │   │     Redis     │      │    Email      │
  │               │   │               │      │               │
  │  - Users      │   │  - Sessions   │      │  - Magic      │
  │  - Calendars  │   │  - Rate Limit │      │    Links      │
  │  - Events     │   │  - Pub/Sub    │      │  - Digests    │
  │  - Members    │   │               │      │  - Reminders  │
  │  - Comments   │   │               │      │               │
  │  - Memos      │   │               │      │               │
  └───────────────┘   └───────────────┘      └───────────────┘


                    ┌─────────────────────────────────────┐
                    │         REAL-TIME LAYER             │
                    │                                     │
                    │   Browser ◄──── Socket.io ────► Server
                    │                                     │
                    │   Events:                           │
                    │   - event:created                   │
                    │   - event:updated                   │
                    │   - event:deleted                   │
                    │   - member:joined                   │
                    │   - memo:created                    │
                    │   - comment:added                   │
                    │                                     │
                    └─────────────────────────────────────┘
```

### 3.3 Component Breakdown

```yaml
component_breakdown:
  # Organized by domain, with LOC budgets per component

  frontend:
    total_loc: 8500

    components:
      calendar_views:
        monthly_grid: 600
        weekly_timeline: 500
        day_popup: 200
        navigation: 150
        subtotal: 1450

      event_components:
        event_form: 500
        event_card: 200
        event_detail_modal: 350
        event_list: 200
        date_time_picker: 400
        participant_selector: 200
        color_picker: 100
        subtotal: 1950

      member_components:
        member_list: 200
        member_card: 100
        invite_modal: 250
        role_badge: 50
        subtotal: 600

      notification_components:
        notification_center: 300
        notification_item: 100
        preferences_panel: 250
        subtotal: 650

      memo_components:
        memo_sidebar: 250
        memo_item: 100
        memo_input: 150
        subtotal: 500

      comment_components:
        comment_list: 200
        comment_item: 100
        comment_form: 150
        subtotal: 450

      auth_components:
        login_form: 200
        profile_editor: 200
        avatar_picker: 100
        subtotal: 500

      shared_components:
        button: 50
        input: 50
        modal: 100
        dropdown: 80
        tooltip: 40
        loading_spinner: 30
        error_boundary: 50
        layout: 200
        sidebar: 150
        header: 100
        subtotal: 850

      hooks_and_utils:
        use_calendar: 100
        use_events: 100
        use_realtime: 150
        use_notifications: 80
        date_utils: 150
        format_utils: 80
        validation: 100
        subtotal: 760

      pages:
        home: 100
        calendar_view: 150
        settings: 200
        login: 100
        invite_accept: 100
        subtotal: 650

      styles:
        global_styles: 100
        theme_config: 40
        subtotal: 140

  backend:
    total_loc: 5500

    components:
      trpc_routers:
        calendar_router: 400
        event_router: 500
        member_router: 300
        notification_router: 350
        memo_router: 250
        comment_router: 250
        auth_router: 350
        user_router: 200
        subtotal: 2600

      services:
        calendar_service: 200
        event_service: 300
        notification_service: 300
        email_service: 200
        realtime_service: 250
        auth_service: 250
        subtotal: 1500

      database:
        schema: 300
        migrations: 200
        queries: 400
        subtotal: 900

      middleware:
        auth_middleware: 150
        rate_limiter: 100
        error_handler: 100
        logging: 150
        subtotal: 500

  shared:
    total_loc: 1500

    components:
      types:
        calendar_types: 100
        event_types: 150
        user_types: 80
        notification_types: 80
        api_types: 100
        subtotal: 510

      validation:
        calendar_schemas: 100
        event_schemas: 150
        user_schemas: 80
        subtotal: 330

      constants:
        event_colors: 30
        notification_types: 30
        permissions: 50
        subtotal: 110

      utilities:
        date_helpers: 150
        string_helpers: 50
        array_helpers: 50
        subtotal: 250

      i18n:
        en_translations: 150
        i18n_setup: 150
        subtotal: 300

  testing:
    total_loc: 2500

    components:
      unit_tests:
        component_tests: 600
        hook_tests: 300
        utility_tests: 200
        service_tests: 400
        subtotal: 1500

      integration_tests:
        api_tests: 500
        auth_flow_tests: 200
        subtotal: 700

      e2e_tests:
        calendar_flows: 150
        event_flows: 150
        subtotal: 300

  configuration:
    total_loc: 500

    components:
      next_config: 50
      tailwind_config: 80
      eslint_config: 50
      typescript_config: 30
      drizzle_config: 40
      vitest_config: 40
      playwright_config: 40
      env_setup: 50
      docker_compose: 60
      readme: 60
      subtotal: 500
```

---

## 4. Data Sovereignty Architecture

```yaml
data_sovereignty:
  philosophy: >
    Users own their data. We are stewards, not owners. Every piece
    of data stored must have a clear purpose, and users must be able
    to access, export, or delete it at any time.

  data_stored:
    user_data:
      - field: "email"
        purpose: "Authentication and notifications"
        retention: "Until account deletion"

      - field: "display_name"
        purpose: "Identity in calendars"
        retention: "Until account deletion"

      - field: "avatar_url"
        purpose: "Visual identity"
        retention: "Until account deletion"
        note: "URL only, actual image hosted externally (Gravatar/upload)"

      - field: "notification_preferences"
        purpose: "Respect communication preferences"
        retention: "Until account deletion"

      - field: "created_at"
        purpose: "Account age"
        retention: "Until account deletion"

    calendar_data:
      - field: "calendar_name"
        purpose: "Calendar identification"
        retention: "Until calendar deletion"

      - field: "calendar_settings"
        purpose: "Customization preferences"
        retention: "Until calendar deletion"

      - field: "member_list"
        purpose: "Access control"
        retention: "Until member leaves or calendar deleted"

    event_data:
      - field: "title"
        purpose: "Event identification"
        retention: "Until event deletion"

      - field: "start_time, end_time"
        purpose: "Scheduling"
        retention: "Until event deletion"

      - field: "description"
        purpose: "Event details"
        retention: "Until event deletion"

      - field: "participants"
        purpose: "Event coordination"
        retention: "Until event deletion"

      - field: "created_by"
        purpose: "Attribution and permissions"
        retention: "Until event deletion"

    communication_data:
      - field: "memos"
        purpose: "Shared notes"
        retention: "Until memo deletion"

      - field: "comments"
        purpose: "Event discussion"
        retention: "Until comment or event deletion"

  data_not_stored:
    explicitly_excluded:
      - data: "Precise location/GPS coordinates"
        reason: "Privacy risk, not essential for MVP"

      - data: "IP addresses (long-term)"
        reason: "Only used transiently for rate limiting"

      - data: "Device fingerprints"
        reason: "Invasive tracking, not aligned with values"

      - data: "Usage analytics beyond aggregates"
        reason: "Individual behavior tracking is surveillance"

      - data: "Third-party tracking pixels"
        reason: "No advertising, no tracking"

      - data: "Social graph beyond calendars"
        reason: "We don't mine relationships"

      - data: "Message content for ML training"
        reason: "User content is not training data"

  export_features:
    available_exports:
      - format: "iCal (.ics)"
        scope: "Per calendar"
        includes: "All events with recurrence"

      - format: "JSON"
        scope: "Full account"
        includes: "All user data, calendars, events, memos"

    export_ui:
      location: "Settings > Privacy > Export My Data"
      delivery: "Immediate download for iCal, email link for full export"
      frequency: "Unlimited, no rate limiting on personal data"

  deletion_features:
    event_deletion:
      action: "Immediate soft delete, hard delete after 30 days"
      reversible: "Yes, within 30 days"

    calendar_deletion:
      action: "Immediate soft delete, hard delete after 30 days"
      reversible: "Yes, within 30 days"
      cascades: "All events, memos, comments in calendar"

    account_deletion:
      action: "Immediate soft delete, hard delete after 30 days"
      reversible: "Yes, within 30 days"
      cascades: "All calendars owned, membership removed from others"
      data_retained: "Anonymous aggregate statistics only"
      confirmation: "Email verification required"

    leave_calendar:
      action: "Immediate membership removal"
      reversible: "Can rejoin via invite"
      content_handling: "Events created by user remain, attributed to 'Former Member'"

  privacy_dashboard:
    location: "Settings > Privacy"

    features:
      data_overview:
        description: "Summary of all data we store about you"
        includes:
          - "Number of calendars (owned and member)"
          - "Number of events created"
          - "Account creation date"
          - "Last login date"

      active_sessions:
        description: "View and manage active login sessions"
        actions:
          - "See all active sessions with device/browser info"
          - "Revoke individual sessions"
          - "Revoke all sessions (logout everywhere)"

      notification_audit:
        description: "See what notifications we've sent you"
        includes:
          - "Last 30 days of sent notifications"
          - "Email opens (if tracking enabled by user)"

      export_data:
        description: "Download all your data"
        formats: ["iCal", "JSON"]

      delete_account:
        description: "Permanently remove your account and data"
        confirmation: "Email verification + 30-day grace period"

  privacy_dashboard_loc: 600
```

---

## 5. Code Budget Allocation

```yaml
code_budget:
  total_budget: 20000
  buffer_percentage: 5
  buffer_loc: 1000
  available_for_features: 19000

  allocation:
    frontend:
      category: "Frontend Application"
      loc: 8500
      percentage: 42.5
      breakdown:
        calendar_views: 1450
        event_components: 1950
        member_components: 600
        notification_components: 650
        memo_components: 500
        comment_components: 450
        auth_components: 500
        shared_components: 850
        hooks_and_utils: 760
        pages: 650
        styles: 140

    backend:
      category: "Backend API"
      loc: 5500
      percentage: 27.5
      breakdown:
        trpc_routers: 2600
        services: 1500
        database: 900
        middleware: 500

    shared:
      category: "Shared Code"
      loc: 1500
      percentage: 7.5
      breakdown:
        types: 510
        validation: 330
        constants: 110
        utilities: 250
        i18n: 300

    testing:
      category: "Test Suite"
      loc: 2500
      percentage: 12.5
      breakdown:
        unit_tests: 1500
        integration_tests: 700
        e2e_tests: 300

    configuration:
      category: "Configuration & Docs"
      loc: 500
      percentage: 2.5
      breakdown:
        build_config: 290
        dev_config: 150
        documentation: 60

    buffer:
      category: "Contingency Buffer"
      loc: 1000
      percentage: 5.0
      purpose: "Unforeseen complexity, bug fixes, polish"

  summary:
    total_allocated: 19500
    remaining_buffer: 500

  verification:
    core_features_loc: 12100
    expected_features_loc: 5300
    overhead_loc: 2100  # Testing, config, shared
    total_planned: 19500
    under_budget: true

  constraints:
    - "No single component may exceed 600 LOC"
    - "Each file should be under 300 LOC"
    - "Components should be extractable and reusable"
    - "Dead code must be removed before shipping"
```

---

## 6. API Design

```yaml
api_design:
  protocol: "tRPC over HTTP"
  authentication: "Session-based (Redis-backed)"
  format: "JSON"

  design_principles:
    - "Type-safe from database to UI"
    - "Minimal endpoints, rich queries"
    - "Batch operations where sensible"
    - "Consistent error handling"
    - "Real-time updates via WebSocket, not polling"

  endpoints:
    auth:
      - name: "auth.sendMagicLink"
        method: "mutation"
        input: "{ email: string }"
        output: "{ success: boolean }"
        description: "Send magic link email for authentication"

      - name: "auth.verifyMagicLink"
        method: "mutation"
        input: "{ token: string }"
        output: "{ user: User, session: Session }"
        description: "Verify magic link and create session"

      - name: "auth.logout"
        method: "mutation"
        input: "void"
        output: "{ success: boolean }"
        description: "End current session"

      - name: "auth.logoutAll"
        method: "mutation"
        input: "void"
        output: "{ success: boolean }"
        description: "End all sessions for current user"

    user:
      - name: "user.me"
        method: "query"
        input: "void"
        output: "User | null"
        description: "Get current authenticated user"

      - name: "user.update"
        method: "mutation"
        input: "{ displayName?: string, avatarUrl?: string }"
        output: "User"
        description: "Update user profile"

      - name: "user.delete"
        method: "mutation"
        input: "{ confirmation: string }"
        output: "{ success: boolean }"
        description: "Request account deletion"

    calendar:
      - name: "calendar.list"
        method: "query"
        input: "void"
        output: "Calendar[]"
        description: "List all calendars user has access to"

      - name: "calendar.get"
        method: "query"
        input: "{ id: string }"
        output: "CalendarWithMembers"
        description: "Get calendar details with member list"

      - name: "calendar.create"
        method: "mutation"
        input: "{ name: string, color?: string }"
        output: "Calendar"
        description: "Create a new calendar"

      - name: "calendar.update"
        method: "mutation"
        input: "{ id: string, name?: string, settings?: CalendarSettings }"
        output: "Calendar"
        description: "Update calendar details"

      - name: "calendar.delete"
        method: "mutation"
        input: "{ id: string }"
        output: "{ success: boolean }"
        description: "Soft delete a calendar (owner only)"

      - name: "calendar.generateInvite"
        method: "mutation"
        input: "{ calendarId: string, expiresIn?: number }"
        output: "{ inviteCode: string, inviteUrl: string }"
        description: "Generate shareable invite link"

      - name: "calendar.acceptInvite"
        method: "mutation"
        input: "{ inviteCode: string }"
        output: "Calendar"
        description: "Join calendar via invite code"

      - name: "calendar.leave"
        method: "mutation"
        input: "{ id: string }"
        output: "{ success: boolean }"
        description: "Leave a calendar (non-owner)"

      - name: "calendar.removeMember"
        method: "mutation"
        input: "{ calendarId: string, userId: string }"
        output: "{ success: boolean }"
        description: "Remove member from calendar (owner only)"

      - name: "calendar.export"
        method: "query"
        input: "{ id: string, format: 'ical' | 'json' }"
        output: "{ downloadUrl: string }"
        description: "Export calendar data"

    event:
      - name: "event.list"
        method: "query"
        input: "{ calendarId: string, startDate: Date, endDate: Date }"
        output: "Event[]"
        description: "List events in date range"

      - name: "event.get"
        method: "query"
        input: "{ id: string }"
        output: "EventWithComments"
        description: "Get event details with comments"

      - name: "event.create"
        method: "mutation"
        input: "CreateEventInput"
        output: "Event"
        description: "Create a new event"

      - name: "event.update"
        method: "mutation"
        input: "{ id: string, ...UpdateEventInput }"
        output: "Event"
        description: "Update an existing event"

      - name: "event.delete"
        method: "mutation"
        input: "{ id: string, scope?: 'single' | 'future' | 'all' }"
        output: "{ success: boolean }"
        description: "Delete event (with recurrence options)"

    comment:
      - name: "comment.list"
        method: "query"
        input: "{ eventId: string }"
        output: "Comment[]"
        description: "List comments on an event"

      - name: "comment.create"
        method: "mutation"
        input: "{ eventId: string, content: string }"
        output: "Comment"
        description: "Add comment to event"

      - name: "comment.delete"
        method: "mutation"
        input: "{ id: string }"
        output: "{ success: boolean }"
        description: "Delete own comment"

    memo:
      - name: "memo.list"
        method: "query"
        input: "{ calendarId: string }"
        output: "Memo[]"
        description: "List memos in calendar"

      - name: "memo.create"
        method: "mutation"
        input: "{ calendarId: string, content: string }"
        output: "Memo"
        description: "Create a new memo"

      - name: "memo.delete"
        method: "mutation"
        input: "{ id: string }"
        output: "{ success: boolean }"
        description: "Delete a memo"

    notification:
      - name: "notification.list"
        method: "query"
        input: "{ limit?: number, cursor?: string }"
        output: "{ notifications: Notification[], nextCursor?: string }"
        description: "List notifications with pagination"

      - name: "notification.markRead"
        method: "mutation"
        input: "{ ids: string[] }"
        output: "{ success: boolean }"
        description: "Mark notifications as read"

      - name: "notification.updatePreferences"
        method: "mutation"
        input: "NotificationPreferences"
        output: "NotificationPreferences"
        description: "Update notification preferences"

  websocket_events:
    - event: "calendar:updated"
      payload: "{ calendarId: string, changes: Partial<Calendar> }"

    - event: "event:created"
      payload: "{ calendarId: string, event: Event }"

    - event: "event:updated"
      payload: "{ calendarId: string, event: Event }"

    - event: "event:deleted"
      payload: "{ calendarId: string, eventId: string }"

    - event: "member:joined"
      payload: "{ calendarId: string, member: User }"

    - event: "member:left"
      payload: "{ calendarId: string, userId: string }"

    - event: "memo:created"
      payload: "{ calendarId: string, memo: Memo }"

    - event: "comment:created"
      payload: "{ eventId: string, comment: Comment }"

  error_handling:
    format: |
      {
        code: string,          // Machine-readable error code
        message: string,       // Human-readable message
        details?: object       // Additional context
      }

    common_codes:
      - code: "UNAUTHORIZED"
        http: 401
        description: "Authentication required"

      - code: "FORBIDDEN"
        http: 403
        description: "Insufficient permissions"

      - code: "NOT_FOUND"
        http: 404
        description: "Resource does not exist"

      - code: "VALIDATION_ERROR"
        http: 400
        description: "Invalid input data"

      - code: "RATE_LIMITED"
        http: 429
        description: "Too many requests"

  rate_limiting:
    global: "100 requests per minute per IP"
    authenticated: "300 requests per minute per user"
    magic_link: "3 requests per hour per email"

  integration_considerations:
    ical_compatibility:
      - "All events exportable as valid iCal"
      - "Recurrence rules use RRULE standard"
      - "UIDs are stable for sync compatibility"

    future_integrations:
      - "Webhook system for calendar changes (v2)"
      - "OAuth2 provider for third-party apps (v2)"
      - "CalDAV support for native calendar apps (v2)"
```

---

## 7. Database Schema

```yaml
database_schema:
  # PostgreSQL schema using Drizzle ORM conventions

  tables:
    users:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true
          default: "gen_random_uuid()"

        - name: "email"
          type: "varchar(255)"
          unique: true
          not_null: true

        - name: "display_name"
          type: "varchar(100)"

        - name: "avatar_url"
          type: "varchar(500)"

        - name: "notification_preferences"
          type: "jsonb"
          default: "{}"

        - name: "created_at"
          type: "timestamp"
          default: "now()"

        - name: "updated_at"
          type: "timestamp"
          default: "now()"

        - name: "deleted_at"
          type: "timestamp"
          nullable: true

    calendars:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true

        - name: "name"
          type: "varchar(100)"
          not_null: true

        - name: "owner_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "settings"
          type: "jsonb"
          default: "{}"

        - name: "invite_code"
          type: "varchar(32)"
          unique: true

        - name: "created_at"
          type: "timestamp"

        - name: "updated_at"
          type: "timestamp"

        - name: "deleted_at"
          type: "timestamp"
          nullable: true

    calendar_members:
      columns:
        - name: "calendar_id"
          type: "uuid"
          references: "calendars.id"
          not_null: true

        - name: "user_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "role"
          type: "varchar(20)"
          default: "'member'"

        - name: "joined_at"
          type: "timestamp"

      primary_key: ["calendar_id", "user_id"]

    events:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true

        - name: "calendar_id"
          type: "uuid"
          references: "calendars.id"
          not_null: true

        - name: "title"
          type: "varchar(200)"
          not_null: true

        - name: "description"
          type: "text"

        - name: "start_time"
          type: "timestamp"
          not_null: true

        - name: "end_time"
          type: "timestamp"
          not_null: true

        - name: "all_day"
          type: "boolean"
          default: false

        - name: "color"
          type: "varchar(20)"

        - name: "recurrence_rule"
          type: "varchar(500)"

        - name: "recurrence_parent_id"
          type: "uuid"
          references: "events.id"
          nullable: true

        - name: "created_by"
          type: "uuid"
          references: "users.id"

        - name: "created_at"
          type: "timestamp"

        - name: "updated_at"
          type: "timestamp"

        - name: "deleted_at"
          type: "timestamp"
          nullable: true

    event_participants:
      columns:
        - name: "event_id"
          type: "uuid"
          references: "events.id"

        - name: "user_id"
          type: "uuid"
          references: "users.id"

        - name: "status"
          type: "varchar(20)"
          default: "'pending'"

      primary_key: ["event_id", "user_id"]

    comments:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true

        - name: "event_id"
          type: "uuid"
          references: "events.id"
          not_null: true

        - name: "user_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "content"
          type: "text"
          not_null: true

        - name: "created_at"
          type: "timestamp"

        - name: "deleted_at"
          type: "timestamp"
          nullable: true

    memos:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true

        - name: "calendar_id"
          type: "uuid"
          references: "calendars.id"
          not_null: true

        - name: "user_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "content"
          type: "text"
          not_null: true

        - name: "created_at"
          type: "timestamp"

        - name: "deleted_at"
          type: "timestamp"
          nullable: true

    reminders:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true

        - name: "event_id"
          type: "uuid"
          references: "events.id"
          not_null: true

        - name: "user_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "remind_at"
          type: "timestamp"
          not_null: true

        - name: "sent"
          type: "boolean"
          default: false

    notifications:
      columns:
        - name: "id"
          type: "uuid"
          primary_key: true

        - name: "user_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "type"
          type: "varchar(50)"
          not_null: true

        - name: "title"
          type: "varchar(200)"

        - name: "body"
          type: "text"

        - name: "data"
          type: "jsonb"

        - name: "read_at"
          type: "timestamp"
          nullable: true

        - name: "created_at"
          type: "timestamp"

    sessions:
      columns:
        - name: "id"
          type: "varchar(64)"
          primary_key: true

        - name: "user_id"
          type: "uuid"
          references: "users.id"
          not_null: true

        - name: "user_agent"
          type: "varchar(500)"

        - name: "ip_address"
          type: "varchar(45)"

        - name: "created_at"
          type: "timestamp"

        - name: "expires_at"
          type: "timestamp"

  indexes:
    - table: "events"
      columns: ["calendar_id", "start_time"]
      name: "idx_events_calendar_start"

    - table: "events"
      columns: ["start_time"]
      name: "idx_events_start"

    - table: "notifications"
      columns: ["user_id", "created_at"]
      name: "idx_notifications_user_time"

    - table: "reminders"
      columns: ["remind_at", "sent"]
      name: "idx_reminders_pending"
```

---

## 8. Implementation Roadmap

```yaml
implementation_roadmap:
  total_duration: "8-10 weeks"
  team_size: "1-2 developers"

  phase_1:
    name: "Foundation"
    duration: "2 weeks"
    deliverables:
      - "Project setup (Next.js, tRPC, Drizzle)"
      - "Database schema and migrations"
      - "Authentication flow (magic links)"
      - "Basic user profile"
      - "CI/CD pipeline"
    exit_criteria:
      - "User can sign up and log in"
      - "All migrations run successfully"
      - "Deployment to staging works"

  phase_2:
    name: "Core Calendar"
    duration: "3 weeks"
    deliverables:
      - "Calendar CRUD"
      - "Monthly view"
      - "Event CRUD"
      - "Member management"
      - "Invitation system"
    exit_criteria:
      - "User can create calendar and invite others"
      - "Events display correctly on calendar"
      - "Multiple members can access shared calendar"

  phase_3:
    name: "Collaboration"
    duration: "2 weeks"
    deliverables:
      - "Real-time sync"
      - "Event comments"
      - "Memo system"
      - "Weekly view"
    exit_criteria:
      - "Changes sync across browsers instantly"
      - "Users can discuss events via comments"

  phase_4:
    name: "Notifications & Polish"
    duration: "2 weeks"
    deliverables:
      - "Notification system"
      - "Daily digest emails"
      - "Event reminders"
      - "Privacy dashboard"
      - "Data export"
      - "UI polish and accessibility"
    exit_criteria:
      - "Users receive appropriate notifications"
      - "User can export all their data"
      - "Accessibility audit passes"

  phase_5:
    name: "Launch Prep"
    duration: "1 week"
    deliverables:
      - "Performance optimization"
      - "Security audit"
      - "Documentation"
      - "Beta user onboarding"
    exit_criteria:
      - "Load times under 2 seconds"
      - "No critical security issues"
      - "10 beta users onboarded"
```

---

## Summary

```yaml
summary:
  product: "Chrono-Commune MVP"

  core_value: >
    Effortless community calendar coordination that respects
    user attention and prioritizes connection over productivity.

  key_metrics:
    loc_budget: 20000
    loc_allocated: 19500
    buffer_retained: 500
    core_features: 6
    expected_features: 6
    excluded_features: 9

  tech_highlights:
    - "Next.js full-stack with tRPC for type safety"
    - "PostgreSQL for reliable calendar data"
    - "Real-time sync via WebSockets"
    - "Passwordless authentication (magic links)"
    - "Privacy-first with full data export"

  differentiation:
    - "Digest-first notifications (not interrupt-first)"
    - "Community-centric design language"
    - "Strong privacy defaults and transparency"
    - "Intentional feature minimalism"

  not_building:
    - "Photo albums"
    - "File attachments"
    - "Third-party sync"
    - "Native mobile apps (PWA instead)"
    - "Premium tier (focus on product-market fit first)"

  timeline: "8-10 weeks with 1-2 developers"
```

---

*Document Version: 1.0*
*Created: 2026-01-10*
*Status: Ready for Development*
