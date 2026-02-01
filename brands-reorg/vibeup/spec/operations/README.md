# Operations Documentation

Day-to-day operational documentation for running and maintaining VIBEUP.

## Contents

### [admin-panel-spec.md](admin-panel-spec.md)
Complete admin interface specification including:
- User management (view, edit, suspend, delete)
- Content moderation (vibes, comments, reports)
- Business verification workflow
- Practice library management
- Feature flag controls
- Analytics dashboard
- System health monitoring

### [feature-flags.md](feature-flags.md)
Feature toggle system with 60+ flags for:
- Phased releases (dark launches, gradual rollout)
- A/B testing (measure impact before full launch)
- Quick rollback (instant disable without code changes)
- User segment targeting (beta users, premium members)
- Epic-level toggles (enable/disable entire features)

### [observability-spec.md](observability-spec.md)
Monitoring and logging standards:
- Sentry error tracking and performance monitoring
- Unified structured logging with Pino
- Health check endpoints
- Alert configuration
- Incident response procedures
- Debug breadcrumbs

### [testing-strategy.md](testing-strategy.md)
Comprehensive TDD framework:
- Unit testing (Jest, 90%+ service layer coverage)
- Integration testing (API routes, database operations)
- E2E testing (Playwright, critical user flows)
- Test organization and naming conventions
- Fixture management
- CI/CD integration

### [environment-variables-reference.md](environment-variables-reference.md)
Complete guide to all environment variables and service accounts needed:
- Supabase configuration
- Stripe API keys
- Claude AI credentials
- Twilio SMS
- Sentry DSN
- OAuth provider credentials
- Feature flag defaults

## Operational Best Practices

1. **Monitor Actively**: Check Sentry dashboard daily
2. **Test Thoroughly**: 90%+ coverage before deploy
3. **Deploy Safely**: Use feature flags for all new features
4. **Respond Quickly**: Alerts should be actionable
5. **Document Everything**: Keep runbooks up-to-date

## Admin Access

Admin panel is accessed via `/admin/*` routes, protected by admin authentication middleware. Admin users are managed in the `admin_users` table with role-based permissions.

## Deployment Checklist

Before any production deployment:

- [ ] All tests passing in CI/CD
- [ ] Feature flags configured
- [ ] Environment variables verified
- [ ] Database migrations tested
- [ ] Monitoring and alerts confirmed
- [ ] Rollback plan documented

## Related Documentation

- [../architecture/deployment-infrastructure.md](../architecture/deployment-infrastructure.md) - Deployment setup
- [../epics/epic-00-foundation.md](../epics/epic-00-foundation.md) - Infrastructure foundation
- [../master-plan.md](../master-plan.md) - Platform overview

---

[← Back to Main README](../README.md)

