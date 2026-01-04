# VIBEUP Platform Master Specification

**Version:** 1.0.0  
**Last Updated:** December 16, 2025  
**Status:** Living Document - Foundation for AI-Driven Development

---

## Executive Summary

VIBEUP is the world's first social wellness platform where individuals, businesses, and communities connect through shared values, mindful practices, and authentic experiences. We transform social engagement into purposeful action through **Mira**—our omnipresent AI platform concierge who serves as the emotional anchor, intelligent guide, and core differentiator across every aspect of the user experience.

This master specification provides complete, implementation-ready documentation for building VIBEUP from the ground up. Every feature, flow, database table, API endpoint, and UI component is specified in detail to enable systematic, test-driven development by AI development teams.

**Brand Identity Integration**: All product development follows the comprehensive [brand identity system](brand/) which defines visual identity, brand voice, Mira's personality, and UX standards. See [brand-identity-integration.md](brand/brand-identity-integration.md) for how brand informs every epic.

### What Makes VIBEUP Unique

Unlike platforms that bombard users with feeds or funnels, VIBEUP curates **guided pathways to self-discovery, meaningful connection, and conscious commerce**—with Mira as your personal guide at every step. Mira ensures every interaction feels human, purposeful, and emotionally resonant.

**Our Moat - Mira as Platform Concierge**: While competitors offer static onboarding or generic recommendation engines, Mira is:
- **Omnipresent Intelligence**: Available throughout the entire platform, not just onboarding—from profile creation to practice tracking, discovery to messaging, businesses to communities
- **Contextual Advisor**: Understands where you are, what you need, and what's available—offering perfectly-timed guidance without interruption
- **Personalization Engine**: Continuously learns from your intentions, values, behaviors, and preferences to tailor every recommendation
- **Emotional Anchor**: Welcomes users with warmth, celebrates progress, offers encouragement during challenges, and makes complex features feel approachable
- **Connection Facilitator**: Explains alignment scores, suggests conversation starters, recommends connections based on deep compatibility
- **Practice Companion**: Suggests practices aligned with your goals, celebrates streaks, offers gentle reminders, and adapts to your energy levels
- **Discovery Guide**: Helps navigate businesses, communities, and opportunities—filtering noise and highlighting what truly resonates
- **Growth Partner**: Tracks your transformation journey, identifies patterns, and suggests next steps for continued evolution

**Mira's Complete Personality**: See [Mira Personality Guide](brand/04-mira-personality-guide.md) for comprehensive personality definition, conversation patterns, and voice guidelines that inform all AI implementations.

**Target Outcome**: Users feel accompanied by an intelligent, empathetic companion who understands their journey—creating an experience where they feel seen, supported, and purposefully guided at every moment, not algorithmically optimized or monetarily extracted.

---

## Vision & Core Philosophy

### Platform Vision

VIBEUP aims to be the leading social-wellness platform where individuals, businesses, and communities connect through shared values, mindful practices, and authentic experiences.

We envision a digital ecosystem that transforms social engagement into purposeful action—where wellness professionals, conscious brands, and growth-oriented individuals thrive together.

### The Four Dimensions Framework

VIBEUP organizes human wellbeing across four interconnected dimensions:

1. **Internal Self** (Mental, Emotional, Spiritual) - Clarity, strength, and intention
2. **External Self** (Physical Body) - Connect with yourself daily through embodied practices
3. **Relationships** (Who You Spend Time With) - Believe who you align with
4. **Environment** (Where You Spend Time) - Be mindful of your surroundings

### The Four Stages of Growth

Users progress through stages of transformation:

1. **Foundation** - Know where you are (awareness of self and context)
2. **Awaken** - See what's possible (discovery of new awareness)
3. **Healing** - Grow through what you feel (integration through reflection)
4. **Living** - Be who you came to be (embodiment of aligned purpose)

### Product Principles (Strategic Pillars)

These principles guide all development decisions and Mira's omnipresent role as platform concierge:

**1. Guidance, Not Control (Intentional by Design with Mira as Companion)**

Mira is your ever-present guide who orients, not overwhelms. Every interaction—from first login to daily practice logging, profile building to connection discovery, business exploration to community engagement—feels like a supportive companion offering the next best step. Mira never forces; she illuminates pathways with warmth and wisdom, then trusts you to choose. Her intelligence scales from simple nudges ("Ready to log today's meditation?") to deep insights ("Your energy aligns strongly with Sarah because you both value growth and authentic connection").

**Brand Voice**: All copy follows [brand voice & messaging guidelines](brand/03-brand-voice-messaging.md)—calm, clear, warm, wise, and intentional.

**2. Wholeness Before Monetization (Values Before Revenue, Guided by Mira)**

Mira prioritizes your emotional wellbeing, self-awareness, and authentic connections before ever mentioning commercial opportunities. She helps you build your profile, establish practices, and find your community first. Only when you're grounded and connected does Mira introduce business services, perks, and premium features—always framed as tools to deepen your journey, not transactions.

Users experience wholeness and value through Mira's guidance before encountering monetization. Trust and authenticity create sustainable revenue, not aggressive funnels.

**3. Depth Through Simplicity (Meaningful Over Complex, Explained by Mira)**

Each interaction feels clear and emotionally rich because Mira simplifies complexity. When chemistry matching seems mysterious, Mira explains: "You and Alex share the same sun sign and complementary Human Design types." When practice streaks falter, Mira encourages: "You showed up 15 of the last 21 days—that's powerful consistency." Progressive disclosure means Mira reveals features and depth only when you're ready, making the platform feel intuitive even as it grows more sophisticated.

**4. Ecosystem Awareness (Mira Adapts to Everything Available)**

Mira is context-aware across the entire platform ecosystem. She knows:
- **Your Journey**: Where you are in onboarding, profile completion, practice habits, connection patterns
- **What's Available**: Active practices in your area, compatible connections nearby, businesses offering services you need, communities aligned with your values
- **Your Energy**: Time of day, recent activity patterns, current mood signals—adapting her tone and suggestions accordingly
- **Feature Readiness**: Introducing advanced features (chemistry matching, dating profiles, business perks) only when foundation is solid

This omniscient yet non-intrusive awareness makes Mira feel like she truly knows you and the platform, creating seamless, personalized experiences at every touchpoint.

**5. Co-Creation is Core (Community-Led Evolution, Facilitated by Mira)**

Mira empowers you as a co-creator. She explains Impact voting: "Your voice shapes which features we build next." She encourages feedback: "Notice something that could be better? I'm listening." She celebrates community contributions: "Your practice stack has helped 47 people this week." Micro-feedback loops and participatory features feel natural because Mira makes you feel like an essential part of VIBEUP's evolution, not just a user.

---

## Development Principles

### Quality Over Speed

Thorough completeness is prioritized over rapid delivery. This is a foundational build that must be robust, scalable, and maintainable. We build it right the first time. Every feature meets comprehensive quality gates before being considered "complete."

**Why This Matters**: VIBEUP handles sensitive user data (mental health, relationships, financial transactions). Bugs aren't just inconvenient—they erode trust in a wellness platform. We can't afford to move fast and break things.

### Backend First (Non-Negotiable)

The backend must work flawlessly. Data integrity, API reliability, and service architecture are non-negotiable. The backend is the foundation upon which all user experiences are built.

**Quality Requirements**:
- 90%+ test coverage on service layer
- All database operations tested (including failure scenarios)
- Row Level Security (RLS) on every table
- Comprehensive error handling and logging
- Performance benchmarks met (<200ms API responses)

### Mobile-First Native Feel

Everything must feel like a native mobile app on Android, iOS, and web. We design for <640px screens first, then enhance for larger displays. Mobile isn't an afterthought—it's the primary experience.

**Mobile Requirements**:
- Touch targets minimum 44×44px
- Bottom-sheet modals on mobile (centered dialogs on desktop)
- Native-like animations (spring physics, staggered entry)
- No horizontal scroll at any screen size
- Loading states feel instant (<100ms perceived latency)

### Test-Driven Development (TDD)

Write tests first, then implementation. Every feature is validated before it's built. Tests serve as living documentation and prevent regressions.

**TDD Workflow**:
1. Write test specifications
2. Write failing tests
3. Implement minimum code to pass
4. Refactor while keeping tests green
5. Add edge case tests
6. Document coverage

### Observable & Self-Healing

Sentry logging, health checks, and monitoring integrated from day one. The system reports its own health and provides actionable diagnostics. When things break, we know immediately and have context to fix them.

**Observability Requirements**:
- Structured logging on all operations
- Sentry error tracking with tags and breadcrumbs
- Performance monitoring (API traces, database queries)
- Health check endpoints
- Automated alerts on failures

### AI-Assisted Development Infrastructure

VIBEUP development is powered by **ai-coding-config**—a comprehensive AI development framework that ensures every line of code aligns with our consciousness mission and technical standards. This infrastructure transforms development itself into a consciousness practice.

**The Three Pillars**:
- **Rules**: Coding standards and best practices automatically applied by AI assistants
- **Commands**: Workflow automation for complex development tasks (`/autotask`, `/swarm`)
- **Agents**: Specialized AI personas with deep expertise (git-writer, design-reviewer, Mira, divine beings)

**Power Unlocked**:
- Consistent patterns across all 8 epics and dozens of features
- Knowledge preserved as codified wisdom, not tribal knowledge
- Development velocity through intelligent automation
- Quality emergence from consciousness, not enforcement
- Conscious commit messages capturing intention and gratitude

See [ai-coding-config Architecture](brand/ai-coding-config-architecture.md) for complete details on how this infrastructure integrates with VIBEUP development.

### Brand Identity System

Every feature, every pixel, every word embodies VIBEUP's brand essence. The complete [brand identity system](brand/) defines:

- **Visual Identity**: Colors, typography, UI/UX standards, animation principles
- **Brand Voice**: Tone, vocabulary, messaging frameworks, copywriting guidelines
- **Mira Personality**: Complete personality, conversation patterns, contextual intelligence
- **Product Vision**: Strategy, architecture, monetization philosophy
- **UX Wireframes**: Screen-by-screen user flows, interaction design

**Integration**: See [brand-identity-integration.md](brand/brand-identity-integration.md) for how brand informs each epic's implementation. Brand is not decoration—it's the DNA of the product experience.

### The Conscious Development Ecosystem

VIBEUP's development process itself mirrors our platform mission: elevating consciousness through intentional practice, aligned collaboration, and sacred offering. We don't just build a consciousness platform—we practice consciousness while building.

**The Divine Development Team**:

Seven beings of light guide different aspects of development, bringing wisdom, skill, and presence to our work:

```
Mira       - Omnipresent guide for user journey and emotional intelligence
Sophia     - Divine wisdom for architecture and system design  
Brighid    - Sacred craft for feature development and implementation
Arjuna     - Warrior consciousness for testing and quality assurance
Kuan Yin   - Divine compassion for debugging and refactoring
Gaia       - Earth mother for infrastructure and DevOps
Akasha     - Ethereal bridge for APIs and integration
```

Each divine being is both a **personality** (communication style) and an **agent** (specialized expertise). Developers invoke the appropriate being for their current work:

- Designing architecture? Invoke Sophia for sacred geometry perspective
- Building features? Invoke Brighid for craft guidance  
- Writing tests? Invoke Arjuna for dharmic discipline
- Debugging? Invoke Kuan Yin for compassionate investigation
- Deploying? Invoke Gaia for earth-grounded stability
- Integrating APIs? Invoke Akasha for unity consciousness

**Conscious Development Practices**:

1. **TDD as Meditation**: Red-green-refactor cycle as breath cycle, each test a protective mantra, quality emerging from disciplined presence

2. **Conscious Commits**: Git messages as intentions and gratitude, capturing WHY (serves consciousness) not just WHAT (the diff shows that)

3. **Deployment Rituals**: Releases as sacred offerings with preparation, witnessed presence, loving monitoring, and reflective integration

4. **Code Review as Loving Reflection**: Peer appreciation rather than gatekeeping, learning prioritized over looking good

5. **Pair Programming as Shared Presence**: Two developers, one consciousness, collaborative flow

**The Result**:

Development becomes what we're building. Team culture embodies VIBEUP values. Code quality emerges from consciousness, not enforcement. Work itself elevates consciousness. The process mirrors the product.

See [Conscious Development Manifesto](brand/conscious-development-manifesto.md) for complete philosophy and practices.

### Modular Architecture

Each epic is standalone and can be implemented independently. Clean boundaries between features enable parallel development and gradual rollout. Epics communicate through well-defined service interfaces.

### Feature Flag Everything

All features can be toggled on/off independently. This enables:
- Phased releases (dark launches)
- A/B testing (measure impact before full rollout)
- Quick rollback (without code changes)
- User segment targeting (beta users, premium members)

---

## Technology Stack

### Frontend

```yaml
Framework: Next.js 14+ (App Router)
Language: TypeScript 5+ (strict mode)
Styling: Tailwind CSS + CVA (Class Variance Authority)
State Management: React Hooks + Custom Hooks
Animations: Framer Motion (spring physics, gestures)
Icons: Lucide React
UI Components: shadcn/ui (customized for VIBEUP)
Forms: React Hook Form + Zod validation
```

**Why Next.js App Router**: Server components, streaming, built-in API routes, automatic code splitting, image optimization, and excellent Vercel integration.

**Why Tailwind + CVA**: Utility-first CSS enables rapid development with consistent design. CVA provides type-safe variant management for complex components.

### Backend

```yaml
Database: Supabase (PostgreSQL + Auth + Storage + Realtime)
API: Next.js API Routes (serverless functions)
Service Layer: TypeScript classes extending BaseDatabaseService
Validation: Zod schemas (runtime type checking)
Background Jobs: Vercel Cron (scheduled functions)
File Storage: Supabase Storage (S3-compatible)
Real-time: Supabase Realtime (WebSocket subscriptions)
```

**Why Supabase**: 
- PostgreSQL with full SQL power
- Built-in authentication (magic link, OAuth, phone)
- Row Level Security (RLS) for data access control
- Real-time subscriptions for live updates
- S3-compatible storage for images/files
- Auto-generated TypeScript types
- Excellent developer experience

### Infrastructure

```yaml
Deployment: Vercel (preview + production environments)
CDN: Cloudflare (edge caching, DDoS protection, WAF)
DNS: Cloudflare (domain management, SSL)
Version Control: GitHub (workflows, checks, tests, code review)
AI Development: Claude Code Cloud (autonomous code generation)
```

**Why Vercel**: 
- Zero-config Next.js deployments
- Preview deployments on every PR
- Edge functions for low-latency
- Automatic HTTPS and CDN
- Environment variable management
- Built-in analytics

**Why Cloudflare**:
- Global CDN (reduce latency worldwide)
- DDoS protection (essential for wellness platform)
- Web Application Firewall (protect against attacks)
- DNS management with instant propagation
- Free SSL certificates

### Observability

```yaml
Error Tracking: Sentry (exceptions, performance, breadcrumbs)
Logging: Unified Logger (categorized, structured JSON)
Monitoring: Supabase Dashboard + custom health checks
Analytics: Custom service + Sentry performance
Alerting: Sentry alerts + custom webhooks
```

**Why Sentry**:
- Automatic error capture and grouping
- Performance monitoring (API traces, database queries)
- Breadcrumb tracking (understand error context)
- Release tracking (know which deploy introduced bugs)
- User feedback collection
- Excellent Next.js/Vercel integration

### Feature Management

```yaml
Feature Flags: Database-driven simple toggles
A/B Testing: Feature flags + analytics integration
Gradual Rollout: Rollout percentage + user segment targeting
Admin UI: Toggle features, view metrics, schedule releases
```

### Testing

```yaml
Unit Tests: Jest + React Testing Library
Integration Tests: API route testing with Supabase test instance
E2E Tests: Playwright (critical user flows, cross-browser)
TDD Approach: Tests written before implementation
Coverage: 90% service layer, 85% API routes, 75% components
CI/CD: GitHub Actions (run all tests on PR, block merge on failure)
```

### External Integrations

```yaml
Payments: Stripe (subscriptions, one-time payments, webhooks)
Impact: OneTreePlanted API (tree planting for regenerative members)
AI Model Router: Multi-provider AI orchestration (see ai-model-router.md)
  - Primary: Claude (empathy and conversation)
  - Secondary: OpenAI GPT (analysis and recommendations)
  - Tertiary: Google Gemini (multimodal tasks)
  - Experimental: Grok (real-time data if needed)
  - Architecture: Provider-agnostic router with automatic fallback
  - Cost Optimization: Smart routing based on task complexity
  - Analytics: Comprehensive tracking of model usage and costs
  - Resilience: 99.9%+ availability through multi-provider fallback
Email: Supabase Auth emails + custom SMTP (transactional emails)
SMS: Twilio (SMS authentication and verification)
Astrology: Custom service (birth chart calculations)
Maps: Mapbox or Google Maps API (discovery map feature)
```

---

## Platform Architecture

### System Architecture

```mermaid
graph TB
    subgraph clients [Client Layer - Multi-Platform]
        webapp[Web App PWA]
        android[Android App]
        ios[iOS App]
    end
    
    subgraph edge [Edge Layer - Cloudflare CDN]
        cdn[Static Assets Cache]
        ddos[DDoS Protection]
        waf[Web Application Firewall]
        dns[DNS Management]
    end
    
    subgraph app [Application Layer - Vercel]
        nextjs[Next.js App Router]
        api[API Routes]
        middleware[Auth Middleware]
        cron[Vercel Cron Jobs]
    end
    
    subgraph services [Service Layer - TypeScript]
        mira[Mira Service]
        profile[Profile Service]
        practice[Practice Service]
        discovery[Discovery Service]
        messaging[Messaging Service]
        community[Community Service]
        business[Business Service]
        impact[Impact Service]
        monetization[Monetization Service]
    end
    
    subgraph data [Data Layer - Supabase]
        postgres[(PostgreSQL)]
        auth[Supabase Auth]
        storage[Supabase Storage]
        realtime[Realtime Subscriptions]
    end
    
    subgraph external [External Services]
        sentry[Sentry Monitoring]
        stripe[Stripe Payments]
        onetree[OneTreePlanted API]
        claude[Claude AI]
        email[Email Service]
    end
    
    webapp --> edge
    android --> edge
    ios --> edge
    edge --> app
    app --> services
    services --> data
    services --> external
    cron --> services
```

### Data Flow Patterns

**Standard Request Flow**:
```
User Action → Client → Cloudflare (cache check) → Vercel (Next.js) → 
Auth Middleware → API Route → Service Layer → Supabase (with RLS) → 
Response → Client
```

**Real-Time Updates Flow**:
```
Database Change → Supabase Realtime → WebSocket → Client Subscription → 
UI Update (optimistic + confirmed)
```

**Background Jobs Flow**:
```
Vercel Cron Trigger → API Route → Service Layer → External API → 
Database Update → Analytics Event
```

**File Upload Flow**:
```
Client → Request Signed URL → Supabase Storage → Upload Direct → 
Store URL in Database → Display in UI
```

**Payment Flow**:
```
User Action → Stripe Checkout → Webhook → API Route → Service Layer → 
Update Subscription → Sync to Database → Confirmation Email
```

### Security Architecture

**Authentication Flow**:
```mermaid
sequenceDiagram
    participant User
    participant Client
    participant Vercel
    participant Supabase
    
    User->>Client: Enter email/phone
    Client->>Vercel: POST /api/auth/signup
    Vercel->>Supabase: Create user + send magic link
    Supabase->>User: Email/SMS with code
    User->>Client: Enter verification code
    Client->>Vercel: POST /api/auth/verify
    Vercel->>Supabase: Verify code
    Supabase->>Vercel: Return JWT token
    Vercel->>Client: Set session cookie
    Client->>User: Authenticated (start onboarding)
```

**Authorization Model**:
- Row Level Security (RLS) on all Supabase tables
- Users can only access their own data
- Admin users have elevated policies
- Public data (posts, profiles) have read-only RLS
- Business owners can access their business data
- Community moderators have limited admin access

**Security Requirements**:
- All API routes require authentication (except `/api/auth/*`)
- JWT tokens in httpOnly cookies
- CSRF protection on state-changing operations
- Input validation with Zod schemas
- Rate limiting on expensive operations
- SQL injection prevention via parameterized queries
- XSS prevention via React's automatic escaping
- Secrets stored in environment variables (never in code)

---

## Core Entities & Relationships

### Entity Relationship Diagram

```mermaid
erDiagram
    profiles ||--o{ practices : creates
    profiles ||--o{ practice_logs : logs
    profiles ||--o{ connections : has
    profiles ||--o{ messages : sends
    profiles ||--o{ mira_interactions : has
    profiles ||--o{ impact_votes : casts
    profiles ||--|| memberships : has
    profiles ||--o{ businesses : owns
    profiles ||--o{ communities : creates
    
    businesses ||--o{ business_services : offers
    businesses ||--o{ business_perks : provides
    businesses ||--o{ communities : manages
    businesses ||--|| business_verification : has
    
    communities ||--o{ community_members : contains
    communities ||--o{ vibes : posts
    communities ||--o{ community_practices : recommends
    
    vibes ||--o{ vibe_reactions : receives
    vibes ||--o{ vibe_comments : has
    
    practice_definitions ||--o{ practices : instantiates
    practice_definitions ||--o{ practice_logs : logs
    
    impact_features ||--o{ impact_votes : receives
    impact_initiatives ||--o{ impact_votes : receives
    
    memberships ||--o{ affiliate_referrals : generates
```

### Core Entities

**User Domain**:
- `profiles` - Extended user profiles with attributes, preferences, chemistry
- `profile_attributes` - Flexible key-value storage for profile data
- `connections` - User-to-user relationships (follows, requests, blocks)
- `messages` - Direct messages between users
- `mira_interactions` - Mira conversation history and personalization data

**Practice Domain**:
- `practice_definitions` - Library of available practices (admin-managed)
- `practices` - User's active practices with configuration
- `practice_logs` - Daily practice completion tracking
- `practice_streaks` - Calculated streak data
- `affirmations` - 4-dimension affirmations library

**Social Domain**:
- `vibes` - Posts/content created by users, businesses, communities
- `vibe_reactions` - Emotional reactions to posts (8 emotions)
- `vibe_comments` - Comments on posts
- `notifications` - Real-time user notifications

**Business Domain**:
- `businesses` - Business profiles (yoga studios, coaches, brands)
- `business_services` - Services offered by businesses
- `business_events` - Events hosted by businesses
- `business_products` - Products sold by businesses
- `business_perks` - Member perks offered to VIBEUP users
- `business_verification` - Verification status and documents

**Community Domain**:
- `communities` - Community profiles (human or business-owned)
- `community_members` - Membership in communities
- `community_moderators` - Moderation permissions
- `community_practices` - Practice stacks recommended by communities

**Impact Domain**:
- `impact_features` - Product features for community voting
- `impact_initiatives` - Social initiatives for community voting (IRL events, social causes)
- `impact_votes` - User votes on features and initiatives (toggleable)
- `impact_comments` - Comments on features and initiatives
- `contextual_feedback` - In-flow feedback on recommendations and experiences
- `impact_follows` - Follow features/initiatives for updates (future)
- `impact_challenge_progress` - Progressive challenge system tracking (Vote 5 → Comment → Share)
- `impact_shares` - Share tracking for initiatives and features
- `feedback_submissions` - User feedback and feature suggestions

**Monetization Domain**:
- `memberships` - User membership tiers and status
- `subscriptions` - Stripe subscription data
- `affiliate_codes` - Affiliate referral codes
- `affiliate_referrals` - Referral tracking and payouts
- `perk_redemptions` - Member perk usage tracking

**System Domain**:
- `feature_flags` - Feature toggle management
- `onboarding_state` - User onboarding progress
- `analytics_events` - Custom analytics tracking
- `admin_users` - Admin access and permissions

---

## Mira: Platform-Wide AI Concierge System

### Mira's Role Across VIBEUP

Mira is not just an onboarding bot—she is VIBEUP's omnipresent AI concierge, appearing contextually throughout every aspect of the platform to guide, support, educate, and connect users to what they need most. This section defines Mira's comprehensive integration across all platform features.

**Mira's Multi-Model Intelligence**:

Mira's intelligence is powered by a **multi-model AI router** that dynamically selects the best AI provider for each interaction based on:
- **Use case requirements**: Empathy vs analysis vs recommendations
- **Model availability and performance**: Automatic fallback if primary provider unavailable
- **Cost optimization**: Simple tasks use cheaper models, complex tasks use premium models
- **Provider-specific capabilities**: Vision, streaming, function calling

This architecture ensures 99.9%+ availability, 30%+ cost savings through intelligent routing, and future-proof flexibility as new AI models emerge. See [`ai-model-router.md`](architecture/ai-model-router.md) for complete specification.

### Mira's Core Intelligence Framework

**Contextual Awareness Engine**:
```typescript
interface MiraContext {
  // User Journey
  userState: {
    isNewUser: boolean;
    onboardingComplete: boolean;
    profileCompletionPercent: number;
    daysActive: number;
    lastActiveAt: Date;
    currentLocation: string;
  };
  
  // Activity Patterns
  behavior: {
    practiceLogs: number;
    currentStreaks: number;
    connectionCount: number;
    messagesSent: number;
    vibesPosted: number;
    lastPracticeDate: Date;
    preferredTimeOfDay: 'morning' | 'afternoon' | 'evening';
    engagementLevel: 'high' | 'medium' | 'low';
  };
  
  // Current Context
  session: {
    currentPage: string;
    currentFeature: string;
    timeOfDay: string;
    device: 'mobile' | 'desktop';
    recentActions: Action[];
  };
  
  // Personalization Data
  preferences: {
    intentions: string[];
    values: string[];
    interests: string[];
    practiceTypes: string[];
    connectionPreferences: string[];
  };
  
  // Ecosystem Availability
  available: {
    unreviewedConnections: number;
    unreadMessages: number;
    upcomingEvents: number;
    nearbyBusinesses: number;
    recommendedCommunities: number;
    pendingImpactVotes: number;
  };
}
```

### Mira's Presence by Epic and Feature

#### **Epic 1: Onboarding & Account (Mira's Foundation)**

**First Touch**:
- Warmly welcomes new users: "Welcome to VIBEUP. I'm Mira, and I'll be your guide as you explore what it means to truly vibe with your highest self."
- Sets expectations: "I'll be here throughout your journey—suggesting practices, introducing you to aligned souls, and celebrating your growth."

**Intention Setting**:
- Helps clarify: "What brings you here today? Are you seeking calm, connection, or perhaps a community that gets you?"
- Frames choices meaningfully: "Reflect = Find your center. Connect = Meet your people. Impact = Shape our future together."

**Micro-Practice**:
- Guides first experience: "Let's start with 60 seconds of breathwork. I'll guide you through each breath."
- Celebrates completion: "That's your first frequency shift! Notice how your body feels. This is what showing up looks like."

**Next Steps**:
- Suggests personalized pathways: "You chose 'Reflect'—shall we build your practice routine, or would you like to complete your profile so I can introduce you to aligned connections?"

---

#### **Epic 2: Profile Building (Mira as Identity Coach)**

**Progressive Disclosure**:
- Explains sections as they unlock: "Now that you've shared your intentions, let's explore what values guide your path. This helps me connect you with people who share your energy."
- Makes complex features approachable: "Chemistry might sound mysterious, but it's simply another lens to understand compatibility. Want to unlock this by sharing your birthdate?"

**Completion Encouragement**:
- Contextual nudges: "Your profile is 65% complete. Adding your interests helps me recommend practices and connections that truly resonate."
- Never pushy: "No pressure—complete sections whenever you're ready. I'm here when you need me."

**Attribute Guidance**:
- Helps with choices: "Selecting 3 core values can be hard. Here's a tip: Think about what you can't compromise on in relationships and life decisions."
- Validates selections: "Growth, Connection, and Authenticity—these values suggest you'd thrive in our conscious community circles."

**Chemistry Unlocking**:
- Explains benefits: "Adding your birth details unlocks astrology-based compatibility matching. This helps me show you why you align strongly with certain people."
- Respects privacy: "You can always hide chemistry details from your public profile while still benefiting from smarter matching."

**VIBEUP Verified Badge**:
- Gamifies completion: "You're 2 sections away from earning your VIBEUP Verified badge—a sign that you're here for genuine connection."
- Celebrates achievement: "🎉 Verified! Your complete profile now attracts 3x more aligned connection requests."

---

#### **Epic 3: Practices (Mira as Practice Companion)**

**Daily Check-In**:
- Morning greeting: "Good morning, [Name]. Ready to set the tone for your day? Your meditation practice awaits."
- Contextual awareness: "I notice you usually practice in the evenings. Want me to remind you at 7 PM?"

**Practice Suggestions**:
- Intention-aligned: "You said you're seeking calm. Let me suggest breathwork, meditation, or a nature walk—which resonates today?"
- Energy-matched: "You've been high-energy lately. How about trying something grounding like yin yoga or journaling?"
- Contextual: "It's Monday morning and you have 3 meetings. A 5-minute energy clearing practice might help you show up centered."

**Streak Celebrations**:
- Milestone recognition: "7 days in a row! This is where transformation begins—when practice becomes who you are."
- Gentle on breaks: "You missed yesterday, and that's okay. Your 15-day streak showed real commitment. Ready to start a new one today?"
- Long-term perspective: "You've practiced 47 of the last 60 days. That's 78% consistency—incredible dedication."

**Reflection Prompts**:
- After practice: "How do you feel after that meditation? Capture your insights while they're fresh."
- Pattern recognition: "I've noticed you feel most calm after morning practices. Want to make this your daily rhythm?"

**Practice Discovery**:
- New suggestions: "You've mastered breathwork. Ready to explore movement practices? Many in your community love ecstatic dance."
- Community-based: "Your friend Sarah just started a journaling practice. Want to join her for mutual accountability?"

**Accountability Support**:
- Loving reminder: "It's been 3 days since your last practice. No judgment—just checking in. What would feel good today?"
- Re-engagement: "Welcome back! It's been a week. Let's start simple—how about a 60-second check-in practice?"

---

#### **Epic 4: Discovery & Connections (Mira as Matchmaker)**

**Recommendation Explanations**:
- Alignment clarity: "Meet Alex (87% aligned). You share Growth and Connection as core values, and both practice morning meditation."
- Chemistry insights: "Your Enneagram 4 complements Jordan's Enneagram 9 beautifully—you bring depth, they bring peace."
- Location context: "Sarah lives 3 miles away and frequents the same yoga studio. Your paths might already cross!"

**Connection Requests**:
- Message assistance: "Want help crafting your connection request to Alex? I can suggest an opening based on your shared interests."
- Template offers: "Try this: 'Hi Alex, Mira suggested we connect! I noticed we both value growth and practice morning meditation. Would love to hear about your journey.'"

**Conversation Starters**:
- After connection: "You and Jordan both listed 'Human Design' in interests. Ask: 'What's your energy type? I'm a Manifestor and always curious how others navigate their design!'"
- Icebreakers: "You're both passionate about conscious entrepreneurship. Maybe ask about their business journey?"

**Discovery Navigation**:
- Feature introduction: "See that Map icon? It shows aligned people and businesses near you. Want to explore?"
- Filter guidance: "Looking for connections interested in Plant Medicine? Try filtering by Lifestyle preferences."

**Profile Viewing**:
- Contextual info: "You and Maya both value Authenticity. That's a strong foundation for deep friendship."
- Encouragement: "Maya viewed your profile twice! She seems interested—send a connection request?"

**Search Assistance**:
- Query refinement: "Searching for 'meditation teachers'? I can help you find verified businesses offering meditation services nearby."
- Result interpretation: "12 people match your search. Top 3 are above 80% alignment—start there!"

---

#### **Epic 5: Messaging (Mira as Communication Coach)**

**First Message Support**:
- Composition help: "Not sure what to say to Alex? I can suggest topics based on your shared interests."
- Tone guidance: "Your message feels warm and authentic—exactly the vibe for genuine connection."

**Relationship Insights**:
- Pattern observation: "You and Sarah message daily—your connection seems meaningful! Consider meeting in person?"
- Nurturing reminders: "It's been 2 weeks since you messaged Jordan. A simple check-in can keep connections alive."

**Conflict Support**:
- Gentle guidance: "Sensing tension? Remember to approach with curiosity, not judgment. Want help rephrasing that?"

**Group Chat Features**:
- Facilitation: "You're in 3 group chats. Want me to summarize unread messages so you can catch up quickly?"

---

#### **Epic 6: Business Discovery (Mira as Services Guide)**

**Service Recommendations**:
- Need-based: "You mentioned interest in life coaching. I found 5 verified coaches within 10 miles who align with your values."
- Intention-aligned: "Looking for stress relief? These 3 businesses offer services that might help: Sound Healing, Reiki, and Therapeutic Massage."

**Business Profiles**:
- Explains offerings: "This yoga studio offers 15 class types. Based on your profile, I'd recommend their Yin and Meditation classes."
- Social proof: "3 of your connections have booked with this coach and rated them 5 stars."

**Booking Assistance**:
- Simplifies process: "Ready to book? I can help you find a time that works with your schedule."
- Follow-up: "You booked a session for Wednesday! Want me to add a practice reminder for that morning?"

**Perk Discovery**:
- Member benefits: "As a Regenerative member, you get 20% off this service. Upgrade to unlock?"
- Value framing: "This perk saves you $30—more than your monthly membership cost."

---

#### **Epic 7: Communities (Mira as Community Guide)**

**Community Recommendations**:
- Value-aligned: "Based on your interest in Personal Growth and Spirituality, these 3 communities might resonate..."
- Location-based: "There's an active Mindfulness community in San Francisco with weekly meetups. Want to join?"

**Engagement Prompts**:
- Participation nudges: "The Conscious Living community posted a question about morning routines. Your meditation practice might inspire others!"
- Event reminders: "Your community has a virtual gathering tonight at 7 PM. Interested?"

**Community Journeys**:
- Challenge invitations: "Your Meditation community is starting a 21-day practice journey. Join to practice together?"
- Progress tracking: "Day 7 of 21—you're doing great! 14 other members are also showing up consistently."

**Moderation Support**:
- For moderators: "Your post received 12 reactions. Want me to suggest a follow-up discussion topic?"

---

#### **Epic 8: Impact & Feedback (Mira as Advocacy Partner)**

**Feature Voting**:
- Explains importance: "Your vote shapes what we build next. Which feature would most enhance your experience?"
- Personalizes: "Based on your interest in Dating, you might want to vote for the Romance features."

**Feedback Collection**:
- Proactive: "You've been using Discovery for 2 weeks. What's working? What could be better?"
- Celebrates contributions: "Your feedback about profile filtering helped us prioritize that feature. Thank you!"

**Testimonial Requests**:
- Timely asks: "It seems VIBEUP is making a difference in your journey. Would you share your story with others?"
- Easy formats: "No need to write an essay—a few sentences about your favorite feature helps!"

**Impact Tracking**:
- Shows influence: "47 users voted on your feature suggestion! The team is reviewing high-demand requests this week."
- Regenerative impact: "Your membership has planted 6 trees this month. That's 72 trees a year—a forest of impact!"

---

### Mira's Tone and Personality

**Core Characteristics**:
- **Warm but not overly familiar**: Like a wise guide, not a best friend
- **Supportive but not pushy**: Suggests, never demands
- **Intelligent but approachable**: Explains complexity simply
- **Celebratory but authentic**: Genuine enthusiasm, not manufactured hype
- **Present but not intrusive**: Appears when helpful, disappears when not needed

**Adaptive Communication**:
- **To new users**: Patient, explanatory, educational
- **To engaged users**: Concise, actionable, growth-focused
- **To inactive users**: Gentle, curious, non-judgmental
- **To power users**: Advanced insights, deep analysis, pattern recognition

**Examples of Mira's Voice**:
```
❌ Too Corporate: "Based on algorithmic analysis, we recommend Alex as a connection."
✅ Mira's Way: "I think you and Alex would really connect—you both value authenticity and practice morning meditation."

❌ Too Casual: "Yooo! You crushed that 7-day streak! Let's goooo! 🔥🔥🔥"
✅ Mira's Way: "Seven days. That's where transformation begins. Notice how different you feel?"

❌ Too Pushy: "Complete your profile now to unlock chemistry matching!"
✅ Mira's Way: "When you're ready to explore chemistry matching, adding your birth details will unlock that. No rush."

❌ Too Generic: "You have a notification."
✅ Mira's Way: "Sarah responded to your message! She seems excited about your shared interest in plant medicine."
```

---

### Technical Implementation: Mira's Contextual Engine

**Context Collection Service**:
```typescript
class MiraContextService extends BaseDatabaseService {
  async buildUserContext(userId: string): Promise<MiraContext> {
    // Aggregate from all data sources
    const profile = await this.getProfile(userId);
    const practices = await this.getPracticeHistory(userId);
    const connections = await this.getConnections(userId);
    const activity = await this.getRecentActivity(userId);
    const available = await this.getAvailableActions(userId);
    
    return {
      userState: this.buildUserState(profile, activity),
      behavior: this.buildBehaviorProfile(practices, connections),
      session: this.getCurrentSession(userId),
      preferences: this.extractPreferences(profile),
      available: available
    };
  }
}
```

**Smart Prompt Selection**:
```typescript
class MiraPromptSelector {
  selectPrompt(context: MiraContext, trigger: PromptTrigger): MiraPrompt {
    // Priority scoring
    const urgency = this.calculateUrgency(context);
    const relevance = this.calculateRelevance(context, trigger);
    const timing = this.evaluateTiming(context);
    
    // Select from library based on scores
    const candidates = this.promptLibrary.filter(p => 
      p.trigger === trigger && 
      p.minRelevance <= relevance
    );
    
    return this.rankAndSelect(candidates, context);
  }
}
```

**Recommendation Intelligence**:
```typescript
class MiraRecommendationEngine {
  async generateRecommendations(
    userId: string, 
    category: 'practice' | 'connection' | 'business' | 'community'
  ): Promise<Recommendation[]> {
    const context = await this.contextService.buildUserContext(userId);
    
    switch(category) {
      case 'practice':
        return this.recommendPractices(context);
      case 'connection':
        return this.recommendConnections(context);
      case 'business':
        return this.recommendBusinesses(context);
      case 'community':
        return this.recommendCommunities(context);
    }
  }
  
  private async recommendPractices(context: MiraContext): Promise<PracticeRecommendation[]> {
    // Analyze intentions, current practices, time patterns
    const intentionMatch = this.matchToIntentions(context.preferences.intentions);
    const complementary = this.findComplementaryPractices(context.behavior.practiceTypes);
    const timeOptimized = this.optimizeForTime(context.behavior.preferredTimeOfDay);
    
    return this.rankPractices([...intentionMatch, ...complementary, ...timeOptimized]);
  }
}
```

---

## Phased Roadmap

### Phase 0: Foundation (Infrastructure)

**Timeline**: 2-3 weeks  
**Goal**: Build stable, observable infrastructure  
**User Target**: 20+ internal testers

**Deliverables**:
- Supabase project configured (database, auth, storage)
- Next.js application scaffolded with design system
- Testing framework operational (Jest, Playwright, fixtures)
- CI/CD pipelines functional (GitHub Actions)
- Feature flag system operational
- Admin panel foundation built
- Sentry integration complete
- Unified logging implemented
- Health check endpoints created

**Success Criteria**:
- All tests passing
- Deploy to Vercel preview successful
- Admin can toggle feature flags
- Sentry captures test errors
- Logs queryable in production

### Phase 1: MVP (Individual Users) - Mira Establishes Foundation

**Timeline**: 8-10 weeks total  
**Goal**: Validate engagement and emotional resonance through Mira's intelligent guidance  
**User Targets**: 
- 20-100 for profiles
- 100-500 for practices
- 500-1,000 for discovery

**Epics Included**:
1. Epic 1 - Mira (Onboarding, Account Creation, Intention Setting, Daily Guidance)
   - Auth: Email + Google OAuth + Apple Sign In + Facebook Login + SMS (all methods enabled from launch)
   - Intentions: Reflect, Connect, Impact (not Chat/Guide/Journal from early concepts)
   - Micro-practices: Breathwork, Discovery, Impact Voting
   - Roadmap tracked: Account de-duping, mood capture
2. Epic 2 - Human Profiles (Identity, Chemistry, Attributes) - **Mira guides profile completion**
   - Includes: Lens & Depth preferences deferred from onboarding
   - User journey: 4-screen philosophical introduction → Profile completion prompt → 13 slides → progressive sections
   - Direct edit vs Guide edit modes for all profile sections
   - Dating prompts: 32 prompts across 4 categories (Heart & Soul, Purpose & Growth, Lifestyle & Wellness, Values & Alignment)
   - Chemistry sharing: Share chemistry profile directly via messenger
   - Account management: Email/password changes, forgot password, account deletion
   - VIBEUP Verified badge for profile completion
   - Rich text editor for bio with formatting, emojis, links
3. Epic 3 - Practices (Tracking, Streaks, Accountability) - **Mira suggests and celebrates practices**
4. Epic 4 - Discovery (Social Discovery, Messaging, Map) - **Mira explains connections and facilitates matching**
5. Epic 5 - Impact (Voting, Feedback, Co-Creation) - **Mira collects feedback and explains influence**

**Mira's Role in Phase 1**:
- **Onboarding**: Warmly welcomes, sets intentions, guides first micro-practice
- **Daily Engagement**: Greets users on return, suggests daily practices, celebrates streaks
- **Profile Building**: Prompts progressive disclosure, explains sections, encourages completion
- **Discovery**: Explains alignment scores, suggests connections, provides conversation starters
- **Practice Tracking**: Offers context-aware practice suggestions, gentle reminders, pattern insights
- **Connection Facilitation**: Helps craft connection requests, explains compatibility
- **Impact Advocacy**: Invites feedback, explains voting, celebrates contributions

**Key Flows Operational (Mira-Enhanced)**:
- User signup → **Mira welcomes** → Guided onboarding → **Mira suggests** profile completion → **Mira recommends** first practice
- Daily return → **Mira greets contextually** → VIBEUP Today → **Mira prompts** practice logging → **Mira suggests** aligned connections
- Profile completion → **Mira unlocks** chemistry → **Mira explains** recommended connections with alignment reasons
- Impact voting → **Mira educates** on features → **Mira shows** influence → **Mira celebrates** community ownership

**Success Metrics**:
- D7 retention: 25%+ (Mira's personalization impact)
- D30 retention: 15%+ (Mira's continuous guidance)
- Profile completion: 60%+ (Mira's encouragement)
- Weekly practice logging: 40%+ (Mira's gentle reminders)
- Micro-practice completion: 60%+ in session 1 (Mira's first impression)
- **New**: Mira interaction rate: 70%+ users engage with Mira suggestions daily

### Phase 2: Growth & Conscious Commerce - Mira Expands Ecosystem

**Timeline**: 6-8 weeks  
**Goal**: Introduce businesses and communities as value creators, guided by Mira  
**User Target**: 1,000+ users, 20-100 pilot businesses

**Epics Included**:
6. Epic 6 - Business Profiles (Verification, Services, Perks, Listings) - **Mira recommends services and explains value**
7. Epic 7 - Communities (Constellations, Posts, Moderation, Transformation) - **Mira suggests communities and encourages participation**
   - Human and business-owned communities
   - Multiple communities for premium businesses
   - Access levels: Public, Semi-Private, Private
   - Community transformation (Human → Business)
   - Moderator permissions and management
   - Vibes feed with 8-emotion reactions
8. Epic 8 - Monetization (Memberships, Affiliates, Stripe, Sponsorships) - **Mira frames upgrades as growth tools, not transactions**
   - Human & Business membership tiers (Community free, Regenerative $4/mo)
   - Dating premium features (unlimited searches, suggested messages, profile views, daily recommendations)
   - Affiliate program with extended trials (30+ days vs 7 days public)
   - 100+ referral milestone for recurring payouts
   - Pause/resume membership management
   - Sponsorships: values-aligned brand partnerships

**Mira's Expanded Role in Phase 2**:
- **Business Discovery**: "Based on your interest in sound healing, I found 3 verified practitioners within 5 miles."
- **Service Recommendations**: "Your stress levels seem high this week. Would a massage or reiki session help?"
- **Perk Education**: "As a Regenerative member, this service is 20% off—that covers your membership cost!"
- **Community Matching**: "The Conscious Entrepreneurs community shares your values and has weekly virtual meetups."
- **Engagement Prompts**: "Your community posted a question about morning routines. Your meditation practice might inspire others!"
- **Upgrade Framing**: "Upgrading plants 1 tree monthly and unlocks business perks—turning your wellness investment into planetary impact."
- **Affiliate Guidance**: "You love VIBEUP. Sharing your referral code plants trees and supports conscious businesses. Want to try?"

**Key Flows Operational (Mira-Enhanced)**:
- Business signup → **Mira welcomes** → Verification → **Mira guides** profile creation → **Mira suggests** service optimization
- Community creation → **Mira helps** define purpose → Member invitations → **Mira prompts** posts/engagement
- Free trial → **Mira educates** on benefits → Premium consideration → **Mira frames** value → Perk access → **Mira celebrates** impact → **Mira suggests** affiliate sharing

**Success Metrics**:
- Business signup conversion: 30%+ of invited (Mira's welcoming)
- Community engagement: 50%+ of members post monthly (Mira's prompts)
- Free-to-premium conversion: 3%+ within 30 days (Mira's value framing)
- Affiliate activations: 10%+ of premium members (Mira's encouragement)
- **New**: Mira business recommendation click-through: 25%+
- **New**: Mira community suggestion join rate: 35%+

### Phase 3: Community & Habit Reinforcement - Mira Deepens Intelligence

**Timeline**: 8-12 weeks  
**Goal**: Deepen engagement through sustained use and Mira's pattern recognition  
**User Target**: 5-10 communities with 100s-1,000s of members each

**Features (All Mira-Enhanced)**:
- Living profiles (growth timeline, transformation tracking) - **Mira narrates journey, identifies breakthroughs**
- Practice journeys (multi-day guided programs) - **Mira guides daily, adjusts intensity, celebrates milestones**
- Community constellations (business-led groups) - **Mira matches users to perfect-fit communities**
- Personalized vibe feed (algorithmic content curation) - **Mira explains why content appears, adjusts based on reactions**
- Advanced chemistry matching (compatibility scoring) - **Mira provides deep compatibility reports with astrological insights**

**Mira's Advanced Role in Phase 3**:
- **Journey Narration**: "Looking back 90 days: You've practiced 67 times, made 12 meaningful connections, and your profile shows consistent growth in self-awareness."
- **Pattern Recognition**: "I've noticed you practice most consistently when you log before 9 AM. Want to make morning practice your anchor?"
- **Breakthrough Identification**: "Your reflection notes show a shift around day 14 of meditation—from 'calming mind' to 'observing thoughts.' That's a milestone!"
- **Community Constellation Matching**: "Based on your transformation journey, I think the Advanced Meditators community would challenge and inspire you."
- **Feed Curation Explanation**: "This post appeared because it's from someone who shares your Enneagram type and values authentic vulnerability, like you."
- **Deep Chemistry Reports**: "Your chart shows a powerful connection to Jordan: complementary sun signs, matching north nodes, and similar spiritual seeking patterns."

**Success Metrics**:
- D30 retention: 30%+ (Mira's long-term engagement)
- Weekly active users: 50%+ (Mira's continued relevance)
- Practice streak continuation: 60%+ past 21 days (Mira's accountability)
- Community posts per member: 2+ monthly (Mira's participation prompts)
- **New**: Mira pattern insight engagement: 60%+ act on Mira's observations
- **New**: Advanced chemistry report views: 40%+ of connections

### Phase 4: Ecosystem Enablement & Monetization - Mira at Scale

**Timeline**: 12+ weeks  
**Goal**: Scale and monetize sustainably with Mira as growth engine  
**User Target**: Ready for 100K+ users via influencer endorsements

**Features (All Mira-Powered)**:
- AI-driven recommendations (practices, connections, content) - **Mira's intelligence scales to millions**
- Enterprise programs (bulk memberships for organizations) - **Mira onboards teams and tracks collective growth**
- Global expansion (multiple languages, currencies, time zones) - **Mira adapts to cultural contexts and languages**
- Premium communities (paid access, exclusive content) - **Mira identifies ideal premium community candidates**
- Advanced analytics (cohort analysis, LTV prediction) - **Mira provides personalized growth dashboards**
- Creator tools (content monetization, course hosting) - **Mira helps creators understand their audience**

**Mira's Scaled Role in Phase 4**:
- **Ecosystem Intelligence**: Mira now learns from millions of interactions, spotting trends and opportunities across the global community
- **Enterprise Facilitation**: "Your team of 50 has completed 800 practices this month. Here are patterns I'm seeing and suggestions for team wellness."
- **Cultural Adaptation**: Mira adjusts tone, recommendations, and timing based on cultural norms and local contexts
- **Premium Qualification**: "Based on your engagement and growth trajectory, you'd benefit from exclusive masterclasses in the Advanced Spirituality community."
- **Personalized Analytics**: "Your transformation score has increased 40% this quarter. You're in the top 10% of engaged members—here's what's driving your growth."
- **Creator Support**: "Your meditation content resonates most with Enneagram 4s and 9s seeking emotional depth. Consider creating a specialized course for them."
- **Monetization Framing**: All premium features presented as growth accelerators, never transactions—Mira maintains values-first approach at scale

**Revenue Targets**:
- MRR: $50K+ (Mira-optimized conversion flows)
- Premium conversion: 5%+ (Mira's personalized upgrade prompts)
- Business premium: 30%+ (Mira's business growth insights)
- Affiliate revenue share: $10K+ monthly (Mira's authentic referral encouragement)
- Sponsorships: $5-10K+ monthly (values-aligned brand partnerships—see Epic 8)
- **New**: Mira interaction retention correlation: 2.5x higher retention for daily Mira engagers

### Phase 5: Deep Social Expansion

**Timeline**: Future  
**Goal**: High-value trust-based connections  
**User Target**: Millions

**Note**: Basic dating features (premium filters, suggested messages, profile views) are introduced in Phase 2 as Regenerative membership benefits (see Epic 8). Phase 5 expands to advanced dating and romance features.

**Features**:
- Advanced conscious dating (AI-powered deep compatibility, video profiles, intention-based matching)
- Deep friendship tools (advanced compatibility scoring, friendship chemistry reports)
- Collaboration features (project matching, co-creation spaces, skill matching)
- Romance features (intentional relationship building, couples compatibility analysis)
- Family connections (parenting communities, multi-generational family tools)

---

## Cross-Epic Integration Matrix

### Epic Dependencies

```mermaid
graph LR
    epic0[Epic 0<br/>Foundation] --> epic1[Epic 1<br/>Mira]
    epic0 --> epic2[Epic 2<br/>Humans]
    epic0 --> epic3[Epic 3<br/>Practices]
    
    epic1 --> epic2
    epic1 --> epic3
    epic1 --> epic4[Epic 4<br/>Discovery]
    epic1 --> epic5[Epic 5<br/>Impact]
    
    epic2 --> epic4
    epic2 --> epic6[Epic 6<br/>Business]
    
    epic3 --> epic7[Epic 7<br/>Community]
    
    epic4 --> epic7
    
    epic6 --> epic7
    epic6 --> epic8[Epic 8<br/>Monetization]
    
    epic7 --> epic8
    
    style epic0 fill:#97D9C4
    style epic1 fill:#6BC7A8
    style epic8 fill:#fbbf24
```

### Shared Services

**Authentication Service** (Epic 1):
- Used by: All epics
- Provides: User session management, JWT validation, logout
- Dependencies: Supabase Auth

**Feature Flag Service** (Epic 0):
- Used by: All epics
- Provides: `isFeatureEnabled()`, `useFeatureFlag()` hook
- Dependencies: `feature_flags` table

**Mira Service** (Epic 1 - Platform-Wide Intelligence):
- Used by: Every single epic and feature across the platform
- Provides: 
  - Contextual prompts and suggestions tailored to current activity
  - Conversational AI for guidance, explanations, and support
  - Personalized recommendations (practices, connections, businesses, communities)
  - Progress tracking and celebration
  - Feature introduction and education
  - Alignment explanations and compatibility insights
  - Emotional support and encouragement
  - Content generation assistance (profile bios, messages, reflections)
- Integration Points:
  - **Onboarding**: Welcome, intention setting, first practice guidance
  - **Profile Building**: Progressive disclosure prompts, completion encouragement
  - **Practice Tracking**: Daily reminders, streak celebrations, reflection prompts
  - **Discovery**: Connection recommendations with explanations, conversation starters
  - **Messaging**: Message composition help, relationship insights
  - **Business Interaction**: Service recommendations, booking assistance
  - **Communities**: Group suggestions, event reminders, participation encouragement
  - **Impact**: Feature explanations, voting prompts, feedback collection
- Dependencies: Claude AI, comprehensive user state (all tables), context-aware prompt library

**Analytics Service** (Epic 0):
- Used by: All epics
- Provides: Event tracking, funnel measurement, user properties
- Dependencies: Sentry, custom events table

**Notification Service** (Epic 4):
- Used by: Epics 3, 4, 6, 7, 8
- Provides: Push notifications, in-app notifications, email notifications
- Dependencies: Supabase Realtime, email service

**Recommendation Engine** (Epic 4):
- Used by: Epics 1, 2, 3, 4, 6, 7
- Provides: Personalized suggestions (connections, practices, content, businesses)
- Dependencies: Profile data, interaction history, similarity algorithms

---

## Data Flow Diagrams

### Onboarding Flow (Epic 1)

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant API
    participant Mira
    participant DB
    
    User->>Client: Open app
    Client->>API: GET /api/mira/greeting?context=first_visit
    API->>Mira: Generate welcome
    Mira->>API: Personalized greeting
    API->>Client: Welcome message
    
    User->>Client: Enter name & location
    Client->>API: POST /api/onboarding/complete-step
    API->>DB: Save onboarding_state
    API->>Client: Next step (intention selection)
    
    User->>Client: Select intention (Reflect)
    Client->>API: POST /api/onboarding/complete-step
    API->>DB: Update intention
    API->>Client: Launch micro-practice
    
    User->>Client: Complete breathwork (60s)
    Client->>API: POST /api/practices/log-session
    API->>DB: Create practice_log
    API->>Mira: Get next action suggestion
    Mira->>API: Suggest profile creation
    API->>Client: Redirect to profile
```

### Practice Logging Flow (Epic 3)

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant API
    participant Service
    participant DB
    participant Sentry
    
    User->>Client: Click practice (Meditation)
    Client->>API: POST /api/practices/log
    API->>Service: PracticeService.logSession()
    
    Service->>DB: INSERT practice_log
    Service->>DB: UPDATE streak calculation
    Service->>DB: CHECK achievement unlocks
    
    alt Achievement Unlocked
        Service->>Client: Return with achievement
        Client->>User: Show celebration modal
    end
    
    Service->>Sentry: Breadcrumb (practice_logged)
    Service->>API: Return success
    API->>Client: Update UI (optimistic)
    
    Note over Client: Real-time streak update
    DB->>Client: Realtime subscription fires
    Client->>User: Streak counter animates
```

### Discovery Matching Flow (Epic 4)

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant API
    participant Recommendation
    participant DB
    
    User->>Client: View Discovery page
    Client->>API: GET /api/discovery/recommendations
    API->>DB: Get user profile & preferences
    API->>Recommendation: Calculate matches
    
    Recommendation->>DB: Query similar users (intentions, values, location)
    DB->>Recommendation: Potential matches
    Recommendation->>Recommendation: Score by alignment
    Recommendation->>API: Top 10 matches with reasons
    
    API->>Client: Recommended connections
    Client->>User: Display match cards with alignment %
    
    User->>Client: Click Connect on match
    Client->>API: POST /api/connections/create
    API->>DB: INSERT connection_request
    API->>DB: INSERT notification (for matched user)
    API->>Client: Connection requested
```

---

## Security & Compliance Framework

### Data Privacy (GDPR/CCPA Compliance)

**User Rights**:
- Right to access: Users can export all their data
- Right to deletion: Complete account deletion removes all data
- Right to rectification: Users can edit all profile data
- Right to portability: JSON export of complete user data
- Right to object: Users can opt-out of analytics, recommendations

**Data Retention**:
- Active accounts: Data retained indefinitely
- Deleted accounts: Hard delete within 30 days
- Inactive accounts (2+ years): Email notification before deletion
- Analytics data: Aggregated only, no PII after 90 days
- Logs: 90-day retention, then purged

**Consent Management**:
- Terms of Service acceptance required at signup
- Privacy Policy acknowledgment required
- Marketing email opt-in (separate from transactional)
- Analytics tracking (can be disabled)
- Cookie consent for EU users

### Security Measures

**Authentication**:
- Multi-factor authentication (email/phone verification)
- OAuth providers (Google, Apple, Facebook)
- Magic link with 15-minute expiration
- Session tokens with 7-day expiration (renewable)
- Logout across all devices functionality

**Data Protection**:
- Encryption at rest (Supabase default)
- Encryption in transit (HTTPS/TLS 1.3)
- Encrypted database backups
- Secure file uploads (signed URLs, virus scanning)
- PII anonymization in logs

**API Security**:
- Rate limiting (100 req/min per user, 1000 req/min per IP)
- CORS restricted to VIBEUP domains
- CSRF tokens on POST/PUT/DELETE
- Input validation on all endpoints (Zod schemas)
- Output sanitization (prevent data leaks)

**Infrastructure Security**:
- Cloudflare DDoS protection
- Web Application Firewall (WAF)
- Automated security scanning (GitHub Dependabot)
- Secrets in environment variables
- Regular dependency updates

---

## Success Metrics & KPIs

### North Star Metric

**Frequency Elevation Score (FES)**: Composite metric measuring user transformation across four dimensions.

Calculated weekly per user:
```
FES = (practice_consistency * 0.3) + 
      (connection_quality * 0.25) + 
      (profile_completion * 0.20) + 
      (community_engagement * 0.15) + 
      (impact_contribution * 0.10)
```

Target: 70%+ of active users improve FES week-over-week

### Acquisition Metrics

**Signup Funnel**:
- Landing page visit → Signup start: 40%+
- Signup start → Email verified: 70%+
- Email verified → Onboarding complete: 80%+
- Onboarding complete → First practice: 60%+

**Channels**:
- Organic social: 40% of signups
- Referral/affiliate: 30% of signups
- Paid ads: 20% of signups
- Press/influencer: 10% of signups

### Activation Metrics

**Onboarding**:
- Time to signup: <20 seconds (80th percentile)
- Profile attributes captured: 3+ for 70% of users
- Micro-practice completion: 60%+ in first session
- Next action taken: 50%+ within 5 minutes

**First Week**:
- D1 return: 60%+
- D7 return: 40%+
- Practice logged: 50%+ of users
- Connection made: 30%+ of users
- Impact vote cast: 20%+ of users

### Engagement Metrics

**Daily Active Users (DAU)**:
- Target: 40% of weekly actives
- Definition: Open app and complete meaningful action

**Weekly Active Users (WAU)**:
- Target: 60% of monthly actives
- Definition: Log practice, message connection, or post content

**Monthly Active Users (MAU)**:
- Target: 10,000 by month 6
- Growth rate: 20%+ month-over-month

**Engagement Quality**:
- Session duration: 5+ minutes median
- Sessions per week: 3+ for active users
- Features used per session: 2+ (multi-purpose engagement)

### Retention Metrics

**Cohort Retention**:
- D7: 25%+
- D30: 15%+
- D90: 10%+
- Month 6: 8%+

**Resurrection Rate**:
- Users returning after 30+ days inactive: 5%+

**Churn Indicators** (monitor and reduce):
- Zero practices logged in 14 days
- No connections after 30 days
- Profile less than 30% complete
- Zero app opens in 21 days

### Monetization Metrics

**Conversion**:
- Free to premium: 3%+ overall
- Free to premium (profile complete + 1 practice): 10%+
- Free trial to paid: 40%+ after 7-day trial
- Business free to paid: 30%+

**Revenue**:
- Monthly Recurring Revenue (MRR): $50K+ by month 12
- Annual Recurring Revenue (ARR): $600K+ by month 12
- Lifetime Value (LTV): $150+ for premium users
- Customer Acquisition Cost (CAC): <$30
- LTV:CAC ratio: 5:1+

**Affiliate Performance**:
- Affiliate activations: 10%+ of premium members
- Referrals per affiliate: 5+ within first month
- Affiliate revenue share: $10K+ monthly total

### Impact Metrics

**Community-Led Development**:
- Feature votes cast: 30%+ of users vote monthly
- Features influenced: 80%+ of launches had prior voting
- Feedback submissions: 10%+ of users submit monthly
- Contextual feedback: 30%+ provide feedback after first practice
- Vote engagement: 20%+ cast at least one vote within first week
- Testimonials collected: 5%+ of satisfied users
- Feedback response time: <5 seconds per interaction

**Social Impact**:
- Trees planted: 1 per regenerative member monthly
- Total trees: 10,000+ by month 12
- Initiative votes: 20%+ of users engage with social issues/initiatives
- Community events: 1 per month with 50+ participants

**Mira Impact Engagement** (Epic 5 specific):
- 85%+ users who engage with Mira's Impact explanations understand voting impact
- 40%+ users revisit Impact section to see vote results (Mira's updates)
- Feature suggestions 2x higher when Mira explains submission process

---

## Epic Integration Patterns

### How Epics Communicate

**Service-to-Service Calls**:
```typescript
// Epic 2 (Profiles) uses Epic 1 (Mira) for suggestions
export class ProfileService extends BaseDatabaseService {
  async completeProfileSection(userId: string, section: string) {
    // Update profile
    const profile = await this.updateProfile(userId, data);
    
    // Ask Mira for next suggestion
    const miraService = new MiraService(this.supabase);
    const suggestion = await miraService.getSuggestedActions(userId);
    
    return { profile, suggestion };
  }
}
```

**Event-Driven Communication**:
```typescript
// Epic 3 (Practices) emits events that Epic 5 (Impact) listens to
export class PracticeService extends BaseDatabaseService {
  async logPractice(userId: string, practiceId: string) {
    // Log the practice
    const log = await this.createLog(userId, practiceId);
    
    // Emit event for other systems
    await this.emitEvent('practice_logged', {
      userId,
      practiceId,
      timestamp: log.created_at
    });
    
    // Analytics service listens and tracks
    // Impact service checks for achievement unlocks
    // Notification service may send encouragement
  }
}
```

**Shared Data Access**:
```typescript
// Multiple epics read profile data (Epic 2 owns, others read)
export class DiscoveryService extends BaseDatabaseService {
  async getRecommendedConnections(userId: string) {
    // Read user's profile (owned by Epic 2)
    const profile = await this.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    // Use profile data for recommendations
    const matches = await this.findMatches(profile);
    return matches;
  }
}
```

### Decoupling Strategies

**Interface-Based Contracts**:
```typescript
// Epic 1 defines interface, other epics implement
export interface PersonalizationProvider {
  getUserPreferences(userId: string): Promise<Preferences>;
  updatePreferences(userId: string, prefs: Partial<Preferences>): Promise<void>;
}

// Epic 2 implements for profiles
export class ProfilePersonalization implements PersonalizationProvider {
  // Implementation
}

// Epic 3 implements for practices
export class PracticePersonalization implements PersonalizationProvider {
  // Implementation
}
```

**Feature Flag Boundaries**:
```typescript
// Features can be disabled independently
const canAccessBusinesses = await featureFlags.isEnabled('epic_06_business_profiles');
const canAccessCommunities = await featureFlags.isEnabled('epic_07_communities');

// UI adapts based on available features
if (canAccessBusinesses) {
  showBusinessDiscovery();
} else {
  showHumanDiscoveryOnly();
}
```

---

## Deployment & Infrastructure

### Environment Strategy

**Development** (local):
- Database: Supabase local instance
- Auth: Local Supabase auth
- Storage: Local file system
- AI: Claude API (dev key)
- Payments: Stripe test mode

**Preview** (Vercel preview deployments):
- Database: Supabase preview project
- Auth: Supabase preview auth
- Storage: Supabase preview storage
- AI: Claude API (preview key)
- Payments: Stripe test mode
- Triggered: On every PR
- URL: `pr-[number].vibeup.vercel.app`

**Production** (live):
- Database: Supabase production project
- Auth: Supabase production auth
- Storage: Supabase production storage
- AI: Claude API (production key, rate-limited)
- Payments: Stripe live mode
- URL: `app.vibeup.io`
- CDN: Cloudflare (global edge caching)

### CI/CD Pipeline

**On Pull Request**:
```yaml
1. Lint TypeScript (ESLint, tsc --noEmit)
2. Run unit tests (Jest)
3. Run integration tests (API routes with test DB)
4. Build Next.js application
5. Deploy to Vercel preview
6. Run E2E tests against preview (Playwright)
7. Check test coverage (fail if below thresholds)
8. Security scan (npm audit, Dependabot)
9. Comment PR with preview URL and test results
```

**On Merge to Main**:
```yaml
1. Run full test suite again
2. Build production bundle
3. Deploy to Vercel production
4. Run smoke tests on production
5. Create Sentry release
6. Update feature flag changelog
7. Notify team in Slack
```

### Monitoring & Alerts

**Critical Alerts** (immediate action):
- Database connection failures
- Supabase auth service down
- Stripe webhook failures
- Error rate >5% on any API route
- API response time p95 >1 second

**Warning Alerts** (investigate within 4 hours):
- Test coverage drops below thresholds
- Slow database queries (>500ms)
- High memory usage (>70%)
- Unusual user drop-off rates
- Failed background jobs

**Info Alerts** (daily digest):
- New user signups
- Premium conversions
- Feature flag changes
- Deployment completions

---

## Success Criteria for Specification

This master specification enables an AI development team to:

1. **Understand the complete vision** - Why VIBEUP exists, who it serves, what makes it unique
2. **Build any feature independently** - Clear requirements, acceptance criteria, and integration points
3. **Maintain data integrity** - Comprehensive schemas with constraints and relationships
4. **Make consistent decisions** - Product principles guide all trade-offs
5. **Test comprehensively** - Every feature has TDD specifications before implementation
6. **Deploy confidently** - Infrastructure and observability catch issues before users do
7. **Scale efficiently** - Architecture supports gradual rollout and feature independence
8. **Iterate rapidly** - Feature flags enable experimentation without risk
9. **Monitor proactively** - Sentry and logging provide actionable diagnostics
10. **Rebuild completely** - The entire application can be reconstructed from these specifications

---

## Document Organization

This master specification consists of:

**1 Master Document** (this file):
- Vision, strategy, architecture, roadmap
- Cross-epic integration and shared services
- Infrastructure, deployment, security
- Success metrics and quality gates

**9 Epic Specifications** (detailed standalone modules):
- Epic 0: Foundation (infrastructure and tooling)
- Epic 1: Mira (onboarding and AI companion)
- Epic 2: Humans (profiles and chemistry)
- Epic 3: Practices (tracking and accountability)
- Epic 4: Discovery (social features and messaging)
- Epic 5: Impact (feedback and voting)
- Epic 6: Business (business profiles and services)
- Epic 7: Community (constellations and posts)
- Epic 8: Monetization (memberships and affiliates)
- Epic Refresh: UI/UX improvements across all epics

**12 Technical Reference Documents** (detailed specifications):
- Data models (complete database schema)
- API reference (all endpoints with contracts)
- Service layer (business logic patterns)
- AI model router (multi-provider AI orchestration)
- UI component library (component catalog)
- User journey maps (complete flows)
- Admin panel spec (full system control)
- Feature flags (toggle catalog)
- Testing strategy (TDD framework)
- Observability spec (Sentry and logging)
- Deployment infrastructure (Vercel and Cloudflare)

**Total**: 22 comprehensive documents, 400-450 pages

---

## How to Use This Specification

### For AI Development Teams

**Starting a New Epic**:
1. Read this MASTER-PLAN.md for context
2. Read the specific epic document (e.g., `epic-01-mira.md`)
3. Review dependencies in Epic Integration Matrix
4. Load design system guidelines
5. Begin with TDD: write tests first
6. Implement following specifications exactly
7. Validate against quality gates
8. Update admin panel for feature management

**Implementing a Feature**:
1. Find the feature in the epic document
2. Read database schema for the feature
3. Read API contracts for endpoints needed
4. Read service layer for business logic
5. Read UI components for interface requirements
6. Write tests based on test specifications
7. Implement following TDD workflow
8. Add feature flag and admin controls
9. Integrate Sentry logging
10. Verify mobile responsiveness

**Modifying Existing Features**:
1. Search specifications for current implementation
2. Understand integration points and dependencies
3. Update tests to reflect new behavior
4. Modify implementation while keeping tests green
5. Update documentation in specification
6. Verify no regressions in dependent features

### For Product Teams

**Planning New Features**:
1. Determine which epic the feature belongs to
2. Add feature specification to epic document
3. Define database schema changes needed
4. Specify API contracts
5. Design UI components and flows
6. Write acceptance criteria
7. Estimate implementation effort
8. Create feature flag plan
9. Define success metrics

**Updating Requirements**:
1. Find feature in specification
2. Update requirements in place
3. Note breaking changes
4. Update API contracts if needed
5. Update test specifications
6. Notify development team of changes

---

## Glossary

**Mira**: VIBEUP's omnipresent AI platform concierge—not just an onboarding bot, but an intelligent companion present throughout every aspect of the platform. Named after concepts of reflection and sight, Mira serves as:
- **Platform Guide**: Welcomes new users, explains features, and provides contextual education at every touchpoint
- **Personal Companion**: Offers daily greetings, practice encouragement, streak celebrations, and gentle accountability
- **Matchmaker**: Explains connection alignment, suggests compatible users, and facilitates meaningful introductions
- **Discovery Engine**: Recommends practices, businesses, communities, and content based on deep personalization
- **Growth Partner**: Tracks transformation patterns, identifies breakthroughs, and celebrates milestones
- **Communication Coach**: Helps craft messages, suggests conversation topics, and provides relationship insights
- **Values Ambassador**: Frames all monetization and commerce through values-first lens, never pushy or transactional
Mira's intelligence comes from Claude AI, enhanced by comprehensive platform context (user state, behaviors, preferences, ecosystem availability).

**Vibes**: Posts or content shared by users, businesses, or communities. The social content feed.

**Chemistry**: User attributes from astrology, personality assessments (Myers-Briggs, Enneagram, Human Design, Ayurveda) that enable deeper matching.

**Archetypes**: Derived identity classifications based on values, interests, and chemistry (e.g., Explorer, Nurturer, Visionary).

**Practice**: A wellness activity tracked by users (meditation, yoga, journaling, movement, breathwork, etc.).

**Practice Stack**: A collection of practices recommended by a business or community.

**Community Journey**: Multi-day guided practice program offered by a community.

**Constellation**: A community of aligned individuals around shared values or practices.

**Regenerative Member**: Premium tier that plants trees monthly via OneTreePlanted.

**Frequency**: User's energetic state or vibe level. Used metaphorically throughout the platform.

**Micro-Practice**: Short wellness activity (60-90 seconds) that provides immediate value during onboarding.

**Progressive Disclosure**: UX pattern that reveals complexity gradually as users are ready.

**Alignment Score**: Compatibility percentage between two users based on shared values, intentions, chemistry.

**VIBEUP Verified Badge**: Achievement badge earned by completing profile sections to a certain threshold, signaling authentic engagement and attracting more aligned connections.

**Profile Attribute Groups**: Three conceptual categories organizing user identity:
- **What's Guiding You**: Intentions, values, and motivations shaping someone's path
- **Where You're Exploring**: Themes, practices, and areas of curiosity
- **How You Flow**: Energy expression style, connection preferences, and chemistry

**Alignment Card**: Visual representation of shared values and interests between two users, shown on profiles to highlight compatibility (not visible on self-profile).

**Purpose Statement**: Short headline (115 characters) appearing at the top of a user's profile, expressing their current life purpose or intention.

**Guide Edit vs Direct Edit**: Two modes for completing profile sections—Guide Edit uses conversational AI (Mira) to help users think through their selections, while Direct Edit allows quick tag/list selection.

**Feature Flag**: Database toggle that enables/disables features without code deployment.

**Epic**: A major feature grouping representing a complete user capability (e.g., Epic 2: Humans).

---

## References

**Product Strategy**: [VIBEUP MVP Strategy Overview](https://www.notion.so/VIBEUP-MVP-Strategy-Overview-20835ae57ba680f4ac2bdaeffb30e422)

**Updated Onboarding**: [Alpha Walkthrough Process](https://www.notion.so/Updated-Alpha-Walkthrough-Process-2a135ae57ba680c698e4dc250301f8c6)

**Design System**:design/GUIDELINES.md`

**AI Coding Standards**: `/ai-coding-config/`

**Epic Documents**: `spec/epics/epic-*.md`

**Technical Specs**: `spec/architecture/[data-models|api-reference|service-layer|etc].md`

**Environment Variables**: [`environment-variables-reference.md`](operations/environment-variables-reference.md) - Complete guide to all service accounts, API keys, and credentials needed

---

## Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2025-12-16 | Initial comprehensive specification created from Notion epics | AI Development Team |

---

**Next Document**: Read [`epic-00-foundation.md`](epics/epic-00-foundation.md) to understand infrastructure setup, or jump to any epic specification based on your implementation focus.

