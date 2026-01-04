# Admin Panel Specification - Full System Control

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Overview

Comprehensive admin interface for managing all aspects of the VIBEUP platform. Accessed via `/admin/*` routes, protected by admin authentication middleware.

**Brand Integration**: Admin panel UI follows [visual identity standards](../brand/01-visual-identity.md) for internal consistency. Content management tools support brand voice guidelines to ensure platform-wide consistency.

---

## Admin Panel Structure

```
/admin/
├── /dashboard                    # Overview metrics
├── /users                        # User management
├── /content                      # Content management
│   ├── /practices               # Practice library
│   ├── /affirmations            # Affirmations library
│   ├── /mira-prompts           # Mira prompts
│   ├── /impact                  # Features & initiatives
│   └── /vibes                   # Post moderation
├── /businesses                   # Business management
│   ├── /verification            # Verification queue
│   └── /analytics               # Business analytics
├── /communities                  # Community management
├── /flags                        # Feature flags
├── /analytics                    # Platform analytics
└── /settings                     # System configuration
```

---

## Dashboard (`/admin/dashboard`)

**Metrics Displayed**:
- Total users (all time, 24h, 7d, 30d)
- Active users (DAU, WAU, MAU)
- Onboarding completion rate
- Practice logging rate
- Connection creation rate
- Premium conversion rate
- Error rate (last 24h)
- API performance (p50, p95, p99)
- Database health
- Feature flag summary

**Quick Actions**:
- Toggle maintenance mode
- View recent errors
- View recent signups
- Access user search

---

## User Management (`/admin/users`)

**Features**:
- Search users (name, email, handle)
- Filter: Profile completion, role, active status, membership tier
- View complete profile (including private attributes)
- Edit user data (moderation)
- View activity timeline (logins, practices, connections, purchases)
- Manage roles (promote to admin/moderator)
- Suspend/unsuspend accounts (with reason)
- Delete accounts (with GDPR data export)
- Export user list (CSV with filters)
- Send email to user(s)

**User Detail View**:
- Complete profile
- Activity timeline
- Connection graph
- Practice history
- Message history (for moderation)
- Payment history
- Impact contributions
- Edit any field
- Grant admin permissions
- View Sentry errors for this user

---

## Content Management

### Practice Library (`/admin/content/practices`)

**Features**:
- Create/edit/delete practice definitions
- Set category and tags
- Upload icon and tutorial media
- Configure default settings (frequency, time of day)
- Set recommendations (which intentions this supports)
- Feature/unfeature practices
- View adoption metrics (how many users added)
- Reorder practices in library

### Affirmations Library (`/admin/content/affirmations`)

**Features**:
- CRUD affirmations
- Organize by dimension (Internal, External, Relationships, Environment)
- Set active/inactive
- Preview daily rotation
- View engagement metrics (how often shown/logged)
- Bulk import from CSV

### Mira Prompts (`/admin/content/mira-prompts`)

**Features**:
- Edit prompt templates by context
- Configure Mira personality settings
- Manage Claude AI integration
- View prompt usage metrics
- A/B test different prompt variants
- Export/import prompts

### Impact Items (`/admin/content/impact`)

**Features**:
- Create features and initiatives
- Edit descriptions and media
- Change status (voting → development → launched)
- View vote counts and trends
- Moderate comments
- Feature announcements

### Vibes Moderation (`/admin/content/vibes`)

**Features**:
- View all posts (with filters)
- Moderate content (approve/reject/remove)
- View reported posts
- Ban users from posting
- Feature posts

---

## Business Management (`/admin/businesses`)

### Verification Queue (`/admin/businesses/verification`)

**Features**:
- List pending verifications
- View submitted documents
- Approve/reject with reason
- Request additional information
- View verification history
- Auto-approve based on criteria

### Business Analytics (`/admin/businesses/analytics`)

**Metrics**:
- Business signups over time
- Verification rate
- Service listing creation
- Perk redemptions
- Business-driven user growth

---

## Feature Flags (`/admin/flags`)

**Features**:
- List all flags grouped by epic
- Toggle enabled/disabled with confirmation
- Edit rollout percentage (0-100% slider)
- View flag usage metrics (how many users affected)
- Schedule flag changes
- View flag change history
- Search/filter flags

---

## Analytics (`/admin/analytics`)

**Dashboards**:

1. **User Growth**
   - Signups over time (chart)
   - Activation rate funnel
   - Retention cohorts
   - Churn analysis

2. **Engagement**
   - DAU/WAU/MAU trends
   - Feature usage (which features used most)
   - Session duration
   - Actions per session

3. **Conversion**
   - Free to premium funnel
   - Trial to paid conversion
   - Affiliate performance
   - Revenue by cohort

4. **Performance**
   - API response times
   - Error rates by endpoint
   - Database query performance
   - Slow query log

---

## System Configuration (`/admin/settings`)

**Sections**:

1. **Environment Variables**
   - View (not edit) environment variables
   - Test connections to external services

2. **Integration Settings**
   - Stripe: Test connection, view webhook status
   - OneTreePlanted: API connection status
   - Sentry: View project settings
   - Claude AI: Token usage, rate limits

3. **Email Templates**
   - Magic link email
   - Welcome email
   - Practice reminders
   - Premium trial emails

4. **Notification Settings**
   - Enable/disable notification types
   - Configure delivery times
   - Set rate limits

5. **Rate Limiting**
   - Configure limits per endpoint
   - View current usage
   - Block abusive IPs

---

## Database Tools (`/admin/database`)

**Features**:
- SQL query runner (read-only)
- View table schemas
- View indexes
- Table statistics (row counts, sizes)
- Slow query log
- Connection pool status

**Note**: Dangerous operations (delete, truncate, drop) not allowed via UI

---

## Moderation Queue (`/admin/moderation`)

**Features**:
- View reported content (vibes, profiles, messages)
- Take action (remove, warn, suspend)
- View appeal requests
- Ban management
- Moderation log (audit trail)

---

## Admin User Management

**Admin Permissions** (granular):
- `can_manage_users`: User directory, suspend, delete
- `can_manage_content`: Practices, affirmations, Mira prompts, moderation
- `can_manage_businesses`: Verification, approval
- `can_manage_flags`: Toggle feature flags
- `can_view_analytics`: View analytics dashboards
- `can_manage_system`: Environment config, database tools

**Admin Roles** (predefined combinations):
- **Super Admin**: All permissions
- **Content Manager**: Content and moderation only
- **Support**: View users, no deletion
- **Analyst**: View-only analytics

---

**Related**: [`epic-00-foundation.md`](../epics/epic-00-foundation.md) - Admin panel foundation, [`data-models.md`](../architecture/data-models.md) - Data structures

