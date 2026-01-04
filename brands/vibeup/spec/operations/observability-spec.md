# Observability Specification - Sentry & Logging

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Overview

Comprehensive observability through Sentry error tracking and structured logging. The system reports its own health and provides actionable diagnostics when issues occur.

**Brand Voice in Logging**: Internal logs maintain supportive tone for team culture (see [brand voice guidelines](../brand/03-brand-voice-messaging.md)). User-visible error messages must be calm, clear, and actionable - never expose technical jargon.

---

## Sentry Configuration

### Error Tracking

```typescript
// Capture errors with rich context
Sentry.captureException(error, {
  tags: {
    epic: 'practices',
    action: 'log_practice',
    feature_flag: featureFlagState
  },
  extra: {
    userId,
    practiceId,
    timestamp,
    attemptNumber
  },
  user: {
    id: user.id,
    email: user.email,
    username: user.handle
  },
  level: 'error' // or 'warning', 'info'
});
```

### Performance Monitoring

```typescript
// Track API performance
return await Sentry.startSpan(
  {
    op: 'http.server',
    name: 'POST /api/practices/log',
    attributes: {
      'http.method': 'POST',
      'http.route': '/api/practices/log',
      'user.id': userId
    }
  },
  async (span) => {
    const result = await logPractice(userId, practiceId);
    
    span.setStatus({ code: 1, message: 'Success' });
    span.setAttribute('practice.streak', result.streak.current_streak_days);
    
    return result;
  }
);
```

### Breadcrumb Tracking

```typescript
// Add breadcrumbs for context
Sentry.addBreadcrumb({
  category: 'practice',
  message: 'User started practice',
  level: 'info',
  data: {
    practiceId,
    practiceName,
    frequency
  }
});

// Later, if error occurs, breadcrumbs show the path
```

---

## Unified Logging

### Log Categories

```typescript
import { logger } from '@/lib/logger';

// Auth events
logger.auth.info('User logged in', { userId, method: 'magic_link' });
logger.auth.error('Login failed', { email, error, attemptCount });

// API requests
logger.api.info('Request processed', { endpoint: '/api/practices', duration: 145, statusCode: 200 });
logger.api.error('API error', { endpoint, error, userId, requestId });

// Database operations
logger.database.info('Query executed', { table: 'practice_logs', rowCount: 1, duration: 45 });
logger.database.warn('Slow query detected', { table, query, duration: 850 });

// UI events
logger.ui.info('Modal opened', { modalId: 'practice-config', userId });
logger.ui.error('Component error', { component: 'PracticeCard', error });

// AI/Mira events (legacy)
logger.ai.info('Mira response generated', { tokens: 450, duration: 1200, userId });
logger.ai.error('Claude API error', { error, fallbackUsed: true });

// AI Router events (multi-model)
logger.ai.info('Model selected', { provider, modelName, useCase, reason, priority });
logger.ai.info('AI request completed', { provider, modelName, tokens, cost, latency, cached });
logger.ai.warn('Fallback triggered', { failedProvider, fallbackProvider, error, useCase });
logger.ai.error('All models failed', { useCase, attemptedProviders, errors });

// AI Cost tracking
logger.ai.info('Daily AI cost', { date, totalCost, breakdown: { claude: 45.20, openai: 23.15 } });
logger.ai.warn('Budget threshold reached', { provider, modelName, percentUsed: 85, limitUsd: 50 });
logger.ai.error('Budget exceeded', { provider, modelName, spentUsd: 52.30, limitUsd: 50 });

// AI Cache events
logger.ai.info('Cache hit', { cacheKey, useCase, provider, modelName });
logger.ai.info('Cache miss', { cacheKey, useCase });
logger.ai.info('Response cached', { cacheKey, expiresAt, useCase });

// General events
logger.general.info('Feature flag toggled', { flagName, enabled, userId });
logger.general.error('Unexpected error', { context, error });
```

---

## Health Check Endpoints

```typescript
/**
 * GET /api/health
 * ===============
 */
interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  checks: {
    database: boolean;
    auth: boolean;
    storage: boolean;
    stripe: boolean;
    claude: boolean;
  };
  timestamp: string;
}

// Implementation checks:
// - Database: SELECT 1 query
// - Auth: getSession call
// - Storage: listBuckets call
// - Stripe: Retrieve account
// - Claude: Simple API ping

// Returns 200 if all healthy, 503 if any failing
```

---

## Alert Configuration

### Critical Alerts (Immediate)

- Error rate > 5% (any endpoint)
- Database connection failures
- Supabase auth down
- Stripe webhook failures
- API response time p95 > 1 second
- Disk space > 90%
- **All AI providers unavailable** (no fallback options)
- **AI budget exceeded by >20%** (runaway costs)

### Warning Alerts (4 hour SLA)

- Error rate > 1%
- Slow queries (>500ms)
- Memory usage > 70%
- Failed background jobs
- Unusual drop-off rates
- **AI model fallback rate >10%** over 1 hour (provider issues)
- **AI budget at 80%** of daily limit (approaching cap)
- **AI cache hit rate <30%** (poor cache efficiency)
- **Single AI provider error rate >5%** (degraded service)

---

**Related**: [`epic-00-foundation.md`](../epics/epic-00-foundation.md) - Implementation details

