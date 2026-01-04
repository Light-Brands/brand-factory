# Feature Flags - Toggle Catalog & Strategy

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Feature Flag System

Simple database-driven toggles enabling phased releases, A/B testing, and instant rollback without code deployments.

**Brand Note**: Feature naming follows brand voice principles - clear, descriptive names (not technical jargon). User-facing feature announcements use [brand voice guidelines](../brand/03-brand-voice-messaging.md).

---

## Complete Feature Flag Catalog

### Epic 0: Foundation

```typescript
{
  'foundation_admin_panel': { enabled: true, rollout: 100, description: 'Admin panel access' },
  'foundation_analytics': { enabled: true, rollout: 100, description: 'Analytics tracking' },
  'foundation_sentry': { enabled: true, rollout: 100, description: 'Sentry error tracking' },
  'global_maintenance_mode': { enabled: false, rollout: 0, description: 'Maintenance mode' },
  'global_signups_enabled': { enabled: true, rollout: 100, description: 'Allow new signups' },
}
```

### Epic 1: Mira

```typescript
{
  'mira_onboarding': { enabled: true, rollout: 100 },
  'mira_daily_greeting': { enabled: true, rollout: 100 },
  'mira_contextual_prompts': { enabled: false, rollout: 0 },
  'social_auth_google': { enabled: true, rollout: 100 },
  'social_auth_apple': { enabled: false, rollout: 0 },
  'social_auth_facebook': { enabled: false, rollout: 0 },
  'sms_auth': { enabled: false, rollout: 0 },
  'micro_practice_breathwork': { enabled: true, rollout: 100 },
  'account_deduping': { enabled: false, rollout: 0 },
}
```

### Epic 2: Humans

```typescript
{
  'profile_creation': { enabled: true, rollout: 100 },
  'profile_onboarding': { enabled: true, rollout: 100 },
  'chemistry_unlock': { enabled: true, rollout: 100 },
  'chemistry_astrology': { enabled: true, rollout: 100 },
  'chemistry_assessments': { enabled: false, rollout: 0 },
  'connections_enabled': { enabled: true, rollout: 100 },
  'dating_profiles': { enabled: false, rollout: 0 },
  'dating_prompts': { enabled: false, rollout: 0 },
  'profile_views_tracking': { enabled: true, rollout: 100 },
  'vibeup_verified_badge': { enabled: true, rollout: 100 },
}
```

### Epic 3: Practices

```typescript
{
  'practices_enabled': { enabled: true, rollout: 100 },
  'practice_logging': { enabled: true, rollout: 100 },
  'practice_streaks': { enabled: true, rollout: 100 },
  'practice_reminders': { enabled: false, rollout: 0 },
  'community_journeys': { enabled: false, rollout: 0 },
  'practice_stacks': { enabled: false, rollout: 0 },
  'practice_limit_free': { enabled: true, rollout: 100 },
}
```

### Epic 4: Discovery

```typescript
{
  'discovery_enabled': { enabled: true, rollout: 100 },
  'discovery_recommendations': { enabled: true, rollout: 100 },
  'discovery_search': { enabled: true, rollout: 100 },
  'discovery_map': { enabled: false, rollout: 0 },
  'messaging_enabled': { enabled: true, rollout: 100 },
  'discovery_daily_limit_free': { enabled: true, rollout: 100 },
}
```

### Epic 5: Impact

```typescript
{
  'impact_voting': { enabled: true, rollout: 100 },
  'impact_comments': { enabled: true, rollout: 100 },
  'impact_challenges': { enabled: true, rollout: 100 },
}
```

### Epic 6-8: Business, Community, Monetization

```typescript
{
  'businesses_enabled': { enabled: false, rollout: 0 },
  'communities_enabled': { enabled: false, rollout: 0 },
  'vibes_posting': { enabled: false, rollout: 0 },
  'memberships_enabled': { enabled: true, rollout: 100 },
  'free_trial': { enabled: true, rollout: 100 },
  'stripe_payments': { enabled: false, rollout: 0 },
  'affiliate_program': { enabled: false, rollout: 0 },
}
```

---

## Usage Patterns

### Client-Side (React Hook)

```typescript
const canAccessDating = useFeatureFlag('dating_profiles');

if (canAccessDating) {
  return <DatingTab />;
}
return null;
```

### Server-Side (API Routes)

```typescript
const flagService = new FeatureFlagService(supabase);
const isEnabled = await flagService.isEnabled('stripe_payments', userId);

if (!isEnabled) {
  return NextResponse.json({ error: 'Feature not available' }, { status: 403 });
}
```

---

## Admin UI

Feature flags managed via `/admin/flags` with toggle switches, rollout sliders, and usage metrics.

---

**Related**: [`epic-00-foundation.md`](../epics/epic-00-foundation.md) - Feature flag service implementation

