# API Reference - Complete Endpoint Catalog

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Overview

Complete catalog of all API endpoints with request/response schemas, authentication requirements, and error codes.

---

## API Standards

**Base URL**: `https://app.vibeup.io/api`

**Authentication**: JWT token in httpOnly cookie (set by Supabase Auth)

**Response Format**:
```typescript
{
  success: boolean;
  data?: any; // Response payload
  error?: string; // Error message
  details?: any; // Additional error details
}
```

**HTTP Status Codes**:
- 200: Success
- 400: Validation error (bad request)
- 401: Authentication required
- 403: Authorization denied (forbidden)
- 404: Resource not found
- 409: Conflict (duplicate resource)
- 429: Rate limit exceeded
- 500: Server error

---

### Brand Voice in API Responses

**All user-facing error and success messages follow [brand voice guidelines](../brand/03-brand-voice-messaging.md)**: calm, clear, supportive language that maintains trust and reduces anxiety.

**Error Message Examples**:

```typescript
// ❌ Technical, cold
{ error: "Error 404: Resource not found" }
{ error: "Validation failed: Invalid email format" }

// ✅ Brand-aligned, supportive
{ error: "We couldn't find that profile. Let's search again." }
{ error: "Something doesn't look quite right with that email. Let's try again." }
```

**Success Message Examples**:

```typescript
// ❌ Generic
{ message: "Profile updated successfully" }
{ message: "Practice logged" }

// ✅ Brand-aligned, meaningful
{ message: "Your profile reflects your intentions beautifully." }
{ message: "Practice logged. You're building consistency." }
```

**Principles**:
- Never expose internal error codes in user-facing messages
- Frame errors as opportunities to try again, not failures
- Celebrate actions meaningfully, not generically
- Maintain calm tone even in error states
- Guide next steps when possible

---

---

## Endpoint Catalog

### Authentication (Epic 1)

- `POST /api/auth/signup` - Create account
- `POST /api/auth/verify` - Verify email/phone code
- `POST /api/auth/login` - Login existing user
- `POST /api/auth/logout` - End session
- `POST /api/auth/reset-password` - Reset password request
- `POST /api/auth/update-password` - Update password

### Mira (Epic 1)

- `GET /api/mira/greeting` - Get personalized greeting
- `POST /api/mira/interaction` - Record interaction
- `POST /api/mira/chat` - Chat with Mira

### Onboarding (Epic 1)

- `GET /api/onboarding/state` - Get onboarding progress
- `POST /api/onboarding/complete-step` - Complete onboarding step
- `PUT /api/onboarding/skip` - Skip onboarding

### Profiles (Epic 2)

- `GET /api/profile/:userId` - Get user profile
- `PUT /api/profile` - Update own profile
- `POST /api/profile/attributes` - Update profile attributes
- `POST /api/profile/chemistry` - Save chemistry assessment
- `DELETE /api/profile` - Delete account (GDPR)
- `GET /api/profile/export` - Export user data (GDPR)

### Connections (Epic 2)

- `GET /api/connections` - Get user's connections
- `POST /api/connections` - Create connection request
- `PUT /api/connections/:id/accept` - Accept request
- `PUT /api/connections/:id/reject` - Reject request
- `DELETE /api/connections/:id` - Remove connection

### Practices (Epic 3)

- `GET /api/practices` - Get active practices
- `POST /api/practices` - Create practice
- `PUT /api/practices/:id` - Update practice
- `DELETE /api/practices/:id` - Delete practice
- `POST /api/practices/:id/log` - Log practice completion
- `GET /api/practices/history` - Get practice history
- `GET /api/practices/streaks` - Get all streaks
- `GET /api/practices/affirmations` - Get daily affirmations
- `GET /api/practices/definitions` - Get practice library

### Discovery (Epic 4)

- `GET /api/discovery/recommended` - Get recommended connections
- `POST /api/discovery/search` - Search with filters
- `GET /api/discovery/map` - Get users/businesses for map view

### Messaging (Epic 4)

- `GET /api/messages/conversations` - Get conversation list
- `GET /api/messages/thread/:threadId` - Get messages in thread
- `POST /api/messages` - Send message
- `PUT /api/messages/:id/read` - Mark as read
- `DELETE /api/messages/:id` - Delete message

### Notifications (Epic 4)

- `GET /api/notifications` - Get notifications
- `PUT /api/notifications/:id/read` - Mark as read
- `PUT /api/notifications/read-all` - Mark all as read
- `DELETE /api/notifications/:id` - Dismiss notification

### Impact (Epic 5)

- `GET /api/impact/features` - Get features for voting
- `GET /api/impact/initiatives` - Get initiatives for voting
- `POST /api/impact/vote` - Cast vote
- `DELETE /api/impact/vote` - Remove vote (toggle)
- `POST /api/impact/comment` - Add comment
- `GET /api/impact/stats` - Get user's impact stats

### Businesses (Epic 6)

- `POST /api/businesses` - Create business profile
- `GET /api/businesses/:id` - Get business profile
- `PUT /api/businesses/:id` - Update business
- `POST /api/businesses/:id/verify` - Submit for verification
- `POST /api/businesses/:id/listings` - Create listing
- `POST /api/businesses/:id/perks` - Create perk

### Communities (Epic 7)

- `POST /api/communities` - Create community
- `GET /api/communities/:id` - Get community profile
- `POST /api/communities/:id/join` - Join community
- `DELETE /api/communities/:id/leave` - Leave community
- `POST /api/communities/:id/vibes` - Create post
- `GET /api/communities/:id/members` - Get members

### Monetization (Epic 8)

- `POST /api/stripe/create-checkout` - Start subscription
- `POST /api/stripe/webhook` - Stripe webhook handler
- `POST /api/stripe/cancel-subscription` - Cancel subscription
- `POST /api/affiliate/create-code` - Create affiliate code
- `GET /api/affiliate/stats` - Get affiliate stats

### System (Epic 0)

- `GET /api/health` - Health check
- `GET /api/flags` - Get feature flags
- `POST /api/flags/check` - Check specific flag

### AI Model Management (Admin)

- `POST /api/admin/ai/models` - Create or update AI model configuration
- `GET /api/admin/ai/models` - List all AI model configurations
- `PUT /api/admin/ai/models/:id` - Update specific model config
- `DELETE /api/admin/ai/models/:id` - Delete model config
- `GET /api/admin/ai/analytics` - Get AI usage analytics for date range
- `POST /api/admin/ai/test` - Test specific model with sample prompt
- `POST /api/admin/ai/credentials` - Add or update provider credentials
- `GET /api/admin/ai/credentials` - List provider credentials (API keys masked)
- `POST /api/admin/ai/credentials/:provider/validate` - Validate provider credentials
- `GET /api/mira/model-info/:interactionId` - Get model info for specific interaction

---

## Rate Limiting

- Standard endpoints: 100 requests/minute per user
- Search/discovery: 20 requests/minute per user
- Messaging: 60 messages/hour per user
- AI endpoints (Mira): 30 requests/minute per user

---

## AI Model Management API Specifications

### POST /api/admin/ai/models

Create or update AI model configuration.

**Authentication**: Admin only

**Request Body**:
```typescript
interface CreateModelConfigRequest {
  provider: 'claude' | 'openai' | 'google' | 'xai' | 'custom';
  modelName: string;
  displayName?: string;
  description?: string;
  costPer1kPromptTokens: number;
  costPer1kCompletionTokens: number;
  capabilities: {
    supportsStreaming: boolean;
    supportsFunctionCalling: boolean;
    supportsVision: boolean;
    maxTokens: number;
    contextWindow: number;
  };
  routingRules: {
    preferredFor: string[];
    avoidFor?: string[];
  };
  priority?: number; // 0-1000, default 100
  dailyBudgetUsd?: number;
}
```

**Response**:
```typescript
interface CreateModelConfigResponse {
  success: boolean;
  model: {
    id: string;
    provider: string;
    modelName: string;
    isEnabled: boolean;
    priority: number;
    // ... other fields
  };
}
```

**Example**:
```json
{
  "provider": "openai",
  "modelName": "gpt-4o",
  "displayName": "GPT-4 Optimized",
  "costPer1kPromptTokens": 0.0025,
  "costPer1kCompletionTokens": 0.01,
  "capabilities": {
    "supportsStreaming": true,
    "supportsFunctionCalling": true,
    "supportsVision": true,
    "maxTokens": 16384,
    "contextWindow": 128000
  },
  "routingRules": {
    "preferredFor": ["chat", "analysis", "recommendation"],
    "avoidFor": []
  },
  "priority": 90,
  "dailyBudgetUsd": 50.00
}
```

### GET /api/admin/ai/analytics

Get AI usage analytics for date range.

**Authentication**: Admin only

**Query Parameters**:
- `start` (optional): Start date (ISO 8601), defaults to 7 days ago
- `end` (optional): End date (ISO 8601), defaults to now

**Response**:
```typescript
interface AIAnalyticsResponse {
  success: boolean;
  analytics: {
    totalCost: number;
    totalTokens: number;
    totalRequests: number;
    byProvider: Array<{
      provider: string;
      requests: number;
      tokens: number;
      cost: number;
      avgResponseTime: number;
    }>;
    byUseCase: Array<{
      useCase: string;
      requests: number;
      preferredModel: string;
      avgCost: number;
    }>;
    fallbackRate: number; // Percentage
    cacheHitRate: number; // Percentage
    dateRange: {
      start: string;
      end: string;
    };
  };
}
```

**Example**:
```json
{
  "success": true,
  "analytics": {
    "totalCost": 12.45,
    "totalTokens": 1250000,
    "totalRequests": 8432,
    "byProvider": [
      {
        "provider": "claude",
        "requests": 5120,
        "tokens": 780000,
        "cost": 7.82,
        "avgResponseTime": 1250
      },
      {
        "provider": "openai",
        "requests": 3312,
        "tokens": 470000,
        "cost": 4.63,
        "avgResponseTime": 980
      }
    ],
    "byUseCase": [
      {
        "useCase": "greeting",
        "requests": 2100,
        "preferredModel": "claude:claude-3-5-sonnet-20241022",
        "avgCost": 0.0014
      },
      {
        "useCase": "chat",
        "requests": 4200,
        "preferredModel": "openai:gpt-4o",
        "avgCost": 0.0012
      }
    ],
    "fallbackRate": 2.3,
    "cacheHitRate": 48.5,
    "dateRange": {
      "start": "2025-12-09T00:00:00Z",
      "end": "2025-12-16T23:59:59Z"
    }
  }
}
```

### POST /api/admin/ai/test

Test specific model with sample prompt.

**Authentication**: Admin only

**Request Body**:
```typescript
interface TestModelRequest {
  provider: string;
  modelName: string;
  prompt: string;
  systemPrompt?: string;
}
```

**Response**:
```typescript
interface TestModelResponse {
  success: boolean;
  response: {
    content: string;
    provider: string;
    modelName: string;
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
    costUsd: number;
    responseTimeMs: number;
  };
}
```

**Example**:
```json
{
  "provider": "claude",
  "modelName": "claude-3-5-sonnet-20241022",
  "prompt": "Generate a warm greeting for a returning user named Alex.",
  "systemPrompt": "You are Mira, VIBEUP's AI companion."
}
```

### GET /api/mira/model-info/:interactionId

Get info about which model powered a specific interaction (for debugging).

**Authentication**: User (own interactions) or Admin (all interactions)

**Response**:
```typescript
interface ModelInfoResponse {
  success: boolean;
  modelInfo: {
    interactionId: string;
    provider: string;
    modelName: string;
    tokens: number;
    responseTime: number;
    cost: number;
    wasCached: boolean;
    fallbackUsed: boolean;
    originalProvider?: string; // If fallback was used
    timestamp: string;
  };
}
```

**Example**:
```json
{
  "success": true,
  "modelInfo": {
    "interactionId": "550e8400-e29b-41d4-a716-446655440000",
    "provider": "claude",
    "modelName": "claude-3-5-sonnet-20241022",
    "tokens": 401,
    "responseTime": 1247,
    "cost": 0.001203,
    "wasCached": false,
    "fallbackUsed": false,
    "timestamp": "2025-12-16T10:30:00Z"
  }
}
```

---

**Related**: 
- See individual epic documents for detailed endpoint specifications
- AI Model Router detailed in [`ai-model-router.md`](ai-model-router.md)

