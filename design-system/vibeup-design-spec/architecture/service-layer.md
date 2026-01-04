# Service Layer - Business Logic Patterns

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Overview

All business logic resides in TypeScript service classes that extend `BaseDatabaseService`. This provides consistent error handling, logging, and Sentry integration.

**Brand Integration**: All service-layer logging and user-facing responses follow [brand voice guidelines](../brand/03-brand-voice-messaging.md). Internal logs maintain supportive tone for team culture. Error handling produces calm, actionable messages.

---

## Brand-Aligned Logging

### Logger Message Standards

```typescript
import { logger } from '@/lib/logger';

// ❌ Technical, cold
logger.error({ error }, "Database query failed");
logger.info({}, "User profile update completed");

// ✅ Brand-aligned, supportive
logger.error({ error, userId, context }, "Unable to load user profile—retrying");
logger.info({ userId, changes }, "Profile updated—user expressed new intentions");
```

### Error Handling with Brand Voice

```typescript
// Service method with brand-aligned error messages
async updateProfile(userId: string, data: ProfileUpdate) {
  try {
    const result = await this.supabase
      .from('profiles')
      .update(data)
      .eq('id', userId);
      
    if (result.error) {
      logger.error({ error: result.error, userId }, "Profile update failed");
      
      // ❌ Technical error for user
      throw new Error("Database update failed");
      
      // ✅ Brand-aligned error for user
      throw new ValidationError("We couldn't save those changes. Let's try again.");
    }
    
    logger.info({ userId, fields: Object.keys(data) }, "Profile reflects new intentions");
    return result.data;
  } catch (error) {
    // Log internally with full context
    logger.error({ error, userId, data }, "Unexpected profile update error");
    
    // Throw user-facing message with brand voice
    throw new Error("Something didn't work as expected. Your profile is safe—let's try that again.");
  }
}
```

### Mira Service Integration

```typescript
// MiraService prompt engineering with brand personality
async generateGreeting(user: User) {
  const basePrompt = `
You are Mira, VIBEUP's emotionally intelligent AI companion.

PERSONALITY:
- Calm, wise, supportive, empathic, intentional
- Questions over commands
- Observations over judgments
- Invitations over instructions

USER CONTEXT:
- Name: ${user.name}
- Intentions: ${user.intentions.join(", ")}
- Energy: ${user.current_energy}
`;

  return await this.aiRouter.routeRequest({
    useCase: 'greeting',
    systemPrompt: basePrompt,
    messages: [],
    userId: user.id
  });
}
```

---

## Service Architecture

```
Service Layer Pattern:
├── BaseDatabaseService (abstract base)
├── AI Router Services (Multi-Model AI)
│   ├── AIRouterService (orchestration)
│   ├── AIResponseCache (caching)
│   ├── AIAnalyticsService (tracking)
│   └── AIBudgetMonitor (cost control)
├── MiraService (Epic 1)
├── OnboardingService (Epic 1)
├── ProfileService (Epic 2)
├── ConnectionService (Epic 2)
├── PracticeService (Epic 3)
├── DiscoveryService (Epic 4)
├── MessagingService (Epic 4)
├── NotificationService (Epic 4)
├── ImpactService (Epic 5)
├── BusinessService (Epic 6)
├── CommunityService (Epic 7)
├── MonetizationService (Epic 8)
├── FeatureFlagService (Epic 0)
└── AnalyticsService (Epic 0)
```

---

## Service Patterns

### Base Service

All services extend `BaseDatabaseService` which provides:
- Supabase client access
- Error handling with Sentry integration
- Structured logging
- Current user ID retrieval
- Transaction helpers

### Service Method Pattern

```typescript
async methodName(params): Promise<ReturnType> {
  return this.execute(
    async () => {
      // Business logic here
      const result = await this.supabase.from('table').insert(data);
      return result;
    },
    { service: 'ServiceName', method: 'methodName', userId }
  );
}
```

### Transaction Management

```typescript
// Multi-step operations use Supabase transactions
const { data, error } = await this.supabase.rpc('transaction_function', {
  param1: value1,
  param2: value2
});
```

---

## External Integrations

### AI Model Router (Multi-Provider AI)

**AIRouterService** - Central orchestrator for all AI requests:
- Routes requests to optimal AI provider (Claude, OpenAI, Gemini, Grok)
- Implements automatic fallback when primary provider fails
- Caches responses for cost optimization
- Tracks usage and costs for analytics
- Enforces budget limits per model

**Service Pattern**:
```typescript
/**
 * AI ROUTER SERVICE
 * ================
 * Manages multi-model AI orchestration
 */
export class AIRouterService extends BaseDatabaseService {
  // Routes AI requests to optimal provider
  async routeRequest(request: AIRequest): Promise<AIResponse>;
  
  // Selects best model based on use case and availability
  private async selectModel(request: AIRequest): Promise<AIModelConfig>;
  
  // Executes request with specific provider
  private async executeWithProvider(
    model: AIModelConfig, 
    request: AIRequest
  ): Promise<AIResponse>;
  
  // Handles fallback when primary model fails
  private async fallbackStrategy(
    request: AIRequest,
    failedModel: AIModelConfig,
    error: Error
  ): Promise<AIResponse>;
  
  // Tracks usage analytics
  private async trackUsage(usage: AIUsageMetrics): Promise<void>;
  
  // Calculates cost based on token usage
  private calculateCost(
    model: AIModelConfig,
    promptTokens: number,
    completionTokens: number
  ): number;
}
```

**Provider Adapters** - Standardized interface for each AI provider:
```typescript
export interface AIProvider {
  name: string;
  generateCompletion(request: AIProviderRequest): Promise<AIProviderResponse>;
  streamCompletion(request: AIProviderRequest): AsyncIterable<AIStreamChunk>;
  validateCredentials(): Promise<boolean>;
  estimateCost(promptTokens: number, completionTokens: number): number;
}

// Implementations: ClaudeProvider, OpenAIProvider, GeminiProvider, GrokProvider
```

**Supporting Services**:
- `AIResponseCache` - Caches AI responses (Redis/Supabase)
- `AIAnalyticsService` - Tracks usage, costs, performance
- `AIBudgetMonitor` - Enforces daily budget limits
- `ModelSelector` - Implements routing rules

**Usage in Mira**:
```typescript
// All Mira AI calls now route through AIRouterService
const response = await this.aiRouter.routeRequest({
  useCase: 'greeting',  // Determines which model to use
  systemPrompt: promptTemplate.system,
  messages: conversationHistory,
  maxTokens: 500,
  userId: userId
});

// Response includes comprehensive metadata
const { 
  content,           // AI-generated text
  provider,          // 'claude', 'openai', etc.
  modelName,         // Specific model used
  usage,             // Token counts
  costUsd,           // Calculated cost
  wasCached,         // Cache hit?
  fallbackUsed,      // Fallback triggered?
  responseTimeMs     // Performance metric
} = response;
```

For complete specification, see [`ai-model-router.md`](ai-model-router.md).

### Stripe (Payments)

- Checkout session creation
- Webhook processing
- Subscription management
- Webhook signature verification required

### OneTreePlanted (Impact)

- Monthly tree planting for regenerative members
- API integration on successful payment

---

**Related**: 
- See individual epic documents for detailed service implementations
- AI Router detailed in [`ai-model-router.md`](ai-model-router.md)

