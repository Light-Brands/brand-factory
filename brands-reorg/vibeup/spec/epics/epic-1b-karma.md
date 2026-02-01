# Epic 1B: Karma Layer - Conscious Gamification Foundation

**Epic ID**: EPIC-1B-KARMA  
**Priority**: P0 (Foundation alongside Mira and Crypto)  
**Timeline**: 4 weeks (after Epic 1A Crypto foundation)  
**Dependencies**: Epic 0 (Foundation), Epic 1 (Mira), Epic 1A (Crypto)  
**Blocks**: Recognition features across all epics

---

## Vision & Objectives

Epic 1B establishes the **Karma Layer** as the third foundational primitive. Just as Mira provides omnipresent AI intelligence and Crypto provides omnipresent financial capability, the Karma Layer provides **omnipresent recognition and collective impact consciousness** throughout the platform.

**Core Philosophy**: Every positive action ripples outward. We make those ripples visible.

### The Three Foundational Primitives

```
VIBEUP Foundation Architecture
├── Epic 1:  Mira (AI Layer)      → Intelligence & Guidance
├── Epic 1A: Crypto (VIBES)       → Value & Utility  
└── Epic 1B: Karma (KARMA)        → Recognition & Impact
```

All downstream epics (2-8) consume these three primitives.

### What This Epic Delivers

1. **KARMA Score**: Non-transferable recognition currency tracking positive actions
2. **Dual Currency Model**: VIBES (utility) + KARMA (recognition) working in harmony
3. **Planetary Impact Tracker**: Real-time visibility into trees planted, carbon offset, collective good
4. **Recognition Engine**: Badges, levels, celebrations, and leaderboards
5. **KarmaRouterService**: Unified service layer consumed by all other epics
6. **Impact Dashboard**: Personal and collective impact visualization

### Success Criteria

**Foundation Metrics**:
- 100% of active users earn KARMA from day one
- KARMA calculation latency < 50ms
- All positive actions tracked and attributed
- Zero missed recognition events

**Adoption Metrics (by end of Phase 2)**:
- 80% of users check Impact Dashboard monthly
- 70% of users earn badges beyond onboarding
- 50% engagement with planetary impact features

**Engagement Metrics (by end of Phase 3)**:
- 30% higher retention for high-KARMA users
- 25% of users participate in impact initiatives
- Community help actions increase 3x

---

## Dual Currency Model

### VIBES vs KARMA

| Aspect | VIBES (Epic 1A) | KARMA (Epic 1B) |
|--------|-----------------|-----------------|
| **Type** | Utility Token | Recognition Score |
| **Transferable** | Yes (ERC-20) | No (soul-bound) |
| **Earning** | Practices, streaks, referrals | All positive actions |
| **Spending** | Payments, staking, governance | Cannot spend |
| **Purpose** | Economic value exchange | Reputation and influence |
| **Blockchain** | On-chain (Base L2) | Off-chain (database) |
| **Analogy** | Currency | Karma/Reddit Points |

### How They Work Together

```
Positive Action Taken
        │
        ├──► Award KARMA (always)
        │         │
        │         └──► If action is practice/financial ──► Also award VIBES
        │
        └──► Check KARMA level
                  │
                  └──► Apply VIBES multiplier based on KARMA level
                       (Higher KARMA = faster VIBES earning)
```

**KARMA Level Multipliers on VIBES**:

| KARMA Level | Level Name | VIBES Multiplier |
|-------------|------------|------------------|
| 1-3 | Seedling-Sapling | 1.0x |
| 4 | Growing | 1.1x |
| 5 | Flourishing | 1.25x |
| 6 | Thriving | 1.5x |
| 7 | Guardian | 1.75x |
| 8+ | Steward+ | 2.0x |

---

## KARMA Action Taxonomy

### Category 1: Self-Cultivation

| Action | KARMA | Notes |
|--------|-------|-------|
| Log practice | 5 | Base, multiplied by streak |
| Complete streak milestone (7d) | 50 | One-time per milestone |
| Complete streak milestone (30d) | 200 | One-time |
| Complete streak milestone (100d) | 500 | One-time |
| Add reflection with substance | 10 | >50 characters |
| Complete profile section | 25 | Per section |
| Achieve VIBEUP Verified | 100 | One-time |

### Category 2: Community Uplift

| Action | KARMA | Notes |
|--------|-------|-------|
| Welcome new member | 10 | First interaction |
| Answer community question | 15 | Public help |
| Receive "helpful" acknowledgment | 25 | Peer-validated |
| Mentor milestone (5 people helped) | 100 | Progressive |
| Host community event | 200 | Verified event |
| Community post with engagement | 5-50 | Based on reactions |

### Category 3: Planetary Action

| Action | KARMA | Notes |
|--------|-------|-------|
| Tree planted (membership) | 50 | Automatic monthly |
| Additional tree donation | 50 | Per tree |
| Carbon offset purchase | 10/kg | Environmental |
| Participate in impact initiative | 50 | Platform initiatives |
| Rally others to initiative | 25 | Per person joined |
| Verify eco-friendly choice | 20 | Business booking |

### Category 4: Conscious Commerce

| Action | KARMA | Notes |
|--------|-------|-------|
| Book conscious business | 15 | Verified business |
| Leave thoughtful review | 20 | >100 characters |
| Tip service provider | 10 + 5% | % of tip amount |
| Support local/verified business | 25 | First booking |
| Redeem VIBES for perk | 10 | Circular economy |

### Category 5: Content Creation

| Action | KARMA | Notes |
|--------|-------|-------|
| Create practice stack | 50 | Public stack |
| Write guide/resource | 75 | Community benefit |
| Share transformation story | 100 | Vulnerable sharing |
| Practice stack adopted | 10 | Per adoption |
| Guide receives helpful votes | 5 | Per vote |

### Category 6: Platform Evolution

| Action | KARMA | Notes |
|--------|-------|-------|
| Vote on feature/initiative | 5 | Governance participation |
| Submit quality feedback | 10-50 | Based on actionability |
| Testimonial provided | 50 | One-time |
| Feature adopted from suggestion | 500 | Major contribution |
| Bug report validated | 25 | Quality assurance |

---

## KARMA Level System

| Level | Name | KARMA Required | Perks |
|-------|------|----------------|-------|
| 1 | Seedling | 0 | Base experience |
| 2 | Sprout | 100 | KARMA badge on profile |
| 3 | Sapling | 500 | Profile visibility boost |
| 4 | Growing | 1,000 | VIBES 1.1x multiplier |
| 5 | Flourishing | 2,500 | Community spotlight eligible |
| 6 | Thriving | 5,000 | VIBES 1.5x multiplier |
| 7 | Guardian | 10,000 | VIBES 1.75x + voting weight boost |
| 8 | Steward | 25,000 | VIBES 2x + mentor status badge |
| 9 | Elder | 50,000 | Governance voice + exclusive features |
| 10 | Luminary | 100,000 | Legacy recognition + founding impact |

---

## Database Schema

```sql
-- ============================================================================
-- KARMA SCORES
-- ============================================================================

CREATE TABLE karma_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Current state
  total_karma NUMERIC(20, 2) NOT NULL DEFAULT 0,
  level INTEGER DEFAULT 1,
  level_name TEXT DEFAULT 'Seedling',
  
  -- Time-based tracking
  karma_today NUMERIC(20, 2) DEFAULT 0,
  karma_this_week NUMERIC(20, 2) DEFAULT 0,
  karma_this_month NUMERIC(20, 2) DEFAULT 0,
  lifetime_karma NUMERIC(20, 2) DEFAULT 0,
  
  -- Category breakdown
  karma_self_cultivation NUMERIC(20, 2) DEFAULT 0,
  karma_community NUMERIC(20, 2) DEFAULT 0,
  karma_planetary NUMERIC(20, 2) DEFAULT 0,
  karma_commerce NUMERIC(20, 2) DEFAULT 0,
  karma_content NUMERIC(20, 2) DEFAULT 0,
  karma_platform NUMERIC(20, 2) DEFAULT 0,
  
  -- VIBES multiplier (calculated from level)
  vibes_multiplier NUMERIC(5, 2) DEFAULT 1.0,
  
  -- Timestamps
  last_karma_earned_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  CONSTRAINT non_negative_karma CHECK (total_karma >= 0)
);

CREATE INDEX idx_karma_scores_user ON karma_scores(user_id);
CREATE INDEX idx_karma_scores_level ON karma_scores(level);
CREATE INDEX idx_karma_scores_total ON karma_scores(total_karma DESC);

-- ============================================================================
-- KARMA ACTIONS LOG
-- ============================================================================

CREATE TABLE karma_actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Action details
  action_type TEXT NOT NULL,
  action_category TEXT NOT NULL,
  karma_points NUMERIC(10, 2) NOT NULL,
  multiplier NUMERIC(5, 2) DEFAULT 1.0,
  final_karma NUMERIC(10, 2) NOT NULL,
  
  -- Description for display
  description TEXT,
  icon TEXT,
  
  -- Related entity
  related_entity_type TEXT,
  related_entity_id UUID,
  
  -- Social acknowledgment
  acknowledged_by UUID[] DEFAULT '{}',
  acknowledgment_count INTEGER DEFAULT 0,
  
  -- Metadata
  metadata JSONB DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_category CHECK (action_category IN (
    'self_cultivation', 'community', 'planetary', 
    'commerce', 'content', 'platform'
  )),
  CONSTRAINT positive_karma CHECK (karma_points > 0)
);

CREATE INDEX idx_karma_actions_user ON karma_actions(user_id, created_at DESC);
CREATE INDEX idx_karma_actions_category ON karma_actions(action_category);
CREATE INDEX idx_karma_actions_type ON karma_actions(action_type);

-- ============================================================================
-- PLANETARY IMPACT
-- ============================================================================

CREATE TABLE planetary_impact (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Metric identification
  metric_type TEXT NOT NULL,
  metric_value NUMERIC(20, 4) NOT NULL,
  metric_unit TEXT NOT NULL,
  
  -- Attribution
  user_id UUID REFERENCES profiles(id),
  is_collective BOOLEAN DEFAULT false,
  
  -- Source tracking
  source_type TEXT NOT NULL,
  source_id UUID,
  partner TEXT,
  
  -- Verification
  verification_url TEXT,
  verified_at TIMESTAMPTZ,
  certificate_url TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  CONSTRAINT valid_metric_type CHECK (metric_type IN (
    'trees_planted', 'carbon_offset_kg', 'water_saved_liters',
    'plastic_prevented_kg', 'donations_usd'
  ))
);

CREATE INDEX idx_planetary_user ON planetary_impact(user_id);
CREATE INDEX idx_planetary_type ON planetary_impact(metric_type);
CREATE INDEX idx_planetary_collective ON planetary_impact(is_collective);

-- ============================================================================
-- KARMA BADGES
-- ============================================================================

CREATE TABLE karma_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Badge details
  badge_type TEXT NOT NULL,
  badge_name TEXT NOT NULL,
  badge_description TEXT,
  badge_icon TEXT,
  badge_tier TEXT DEFAULT 'bronze',
  
  -- Category
  category TEXT NOT NULL,
  
  -- Progress tracking
  progress_current INTEGER DEFAULT 0,
  progress_required INTEGER,
  
  -- Soul-bound NFT (optional)
  is_minted BOOLEAN DEFAULT false,
  chain TEXT,
  contract_address TEXT,
  token_id BIGINT,
  
  -- Timestamps
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  minted_at TIMESTAMPTZ,
  
  CONSTRAINT valid_tier CHECK (badge_tier IN ('bronze', 'silver', 'gold', 'diamond')),
  CONSTRAINT unique_badge UNIQUE (user_id, badge_type, badge_tier)
);

CREATE INDEX idx_badges_user ON karma_badges(user_id);
CREATE INDEX idx_badges_category ON karma_badges(category);

-- ============================================================================
-- KARMA LEADERBOARDS (CACHED)
-- ============================================================================

CREATE TABLE karma_leaderboards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Leaderboard identification
  period TEXT NOT NULL,
  category TEXT NOT NULL,
  
  -- Rankings (JSON array)
  rankings JSONB NOT NULL,
  
  -- Metadata
  total_participants INTEGER,
  calculated_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  
  CONSTRAINT valid_period CHECK (period IN ('daily', 'weekly', 'monthly', 'all_time')),
  CONSTRAINT unique_leaderboard UNIQUE (period, category)
);

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE karma_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE karma_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE planetary_impact ENABLE ROW LEVEL SECURITY;
ALTER TABLE karma_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE karma_leaderboards ENABLE ROW LEVEL SECURITY;

-- Karma scores: users see own, public view of level/name
CREATE POLICY karma_scores_select_own ON karma_scores
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY karma_scores_select_public ON karma_scores
  FOR SELECT USING (true);

-- Karma actions: users see own
CREATE POLICY karma_actions_select_own ON karma_actions
  FOR SELECT USING (auth.uid() = user_id);

-- Planetary: everyone can see collective impact
CREATE POLICY planetary_select_all ON planetary_impact
  FOR SELECT USING (true);

-- Badges: everyone can see badges (social proof)
CREATE POLICY badges_select_all ON karma_badges
  FOR SELECT USING (true);

-- Leaderboards: public
CREATE POLICY leaderboards_select_all ON karma_leaderboards
  FOR SELECT USING (true);
```

---

## Service Layer

### KarmaRouterService

```typescript
/**
 * KARMA ROUTER SERVICE
 * ====================
 * Central service for all KARMA operations.
 * Third foundational primitive alongside Mira and Crypto.
 * Consumed by all downstream epics (2-8).
 */
import { BaseDatabaseService } from './base-database-service';
import { logger } from '@/lib/logger';
import * as Sentry from '@sentry/nextjs';

export class KarmaRouterService extends BaseDatabaseService {
  private badgeEngine: BadgeEngine;
  private leaderboardManager: LeaderboardManager;
  private planetaryTracker: PlanetaryTracker;
  
  constructor(supabase) {
    super(supabase);
    this.badgeEngine = new BadgeEngine(supabase);
    this.leaderboardManager = new LeaderboardManager(supabase);
    this.planetaryTracker = new PlanetaryTracker(supabase);
  }
  
  // ========================================================================
  // KARMA OPERATIONS
  // ========================================================================
  
  /**
   * Award KARMA for a positive action
   */
  async awardKarma(
    userId: string,
    actionType: KarmaActionType,
    category: KarmaCategory,
    baseKarma: number,
    metadata?: KarmaMetadata
  ): Promise<KarmaResult> {
    return this.execute(async () => {
      // Get current user state for multipliers
      const karmaScore = await this.getKarmaScore(userId);
      
      // Calculate final karma (base * any multipliers)
      const multiplier = this.calculateMultiplier(karmaScore, actionType);
      const finalKarma = baseKarma * multiplier;
      
      // Record the action
      const action = await this.recordKarmaAction({
        userId,
        actionType,
        category,
        karmaPoints: baseKarma,
        multiplier,
        finalKarma,
        ...metadata,
      });
      
      // Update totals
      await this.updateKarmaTotals(userId, finalKarma, category);
      
      // Check for level up
      const newLevel = await this.checkLevelUp(userId);
      
      // Check for badge eligibility
      const newBadges = await this.badgeEngine.checkEligibility(userId, actionType);
      
      // Update leaderboards
      await this.leaderboardManager.updateUserRanking(userId, finalKarma);
      
      logger.info({ userId, actionType, category, baseKarma, finalKarma }, 'KARMA awarded');
      
      return {
        action,
        karmaEarned: finalKarma,
        newTotal: karmaScore.total_karma + finalKarma,
        levelUp: newLevel,
        badgesEarned: newBadges,
      };
    }, { service: 'KarmaRouterService', method: 'awardKarma', userId });
  }
  
  /**
   * Get user's KARMA profile
   */
  async getKarmaProfile(userId: string): Promise<KarmaProfile> {
    const [score, recentActions, badges, rank] = await Promise.all([
      this.getKarmaScore(userId),
      this.getRecentActions(userId, 10),
      this.badgeEngine.getUserBadges(userId),
      this.leaderboardManager.getUserRank(userId),
    ]);
    
    return {
      score,
      recentActions,
      badges,
      rank,
      vibesMultiplier: this.calculateVibesMultiplier(score.level),
    };
  }
  
  /**
   * Get VIBES multiplier based on KARMA level
   * Called by CryptoRouterService when awarding VIBES
   */
  async getVibesMultiplier(userId: string): Promise<number> {
    const score = await this.getKarmaScore(userId);
    return this.calculateVibesMultiplier(score.level);
  }
  
  private calculateVibesMultiplier(level: number): number {
    if (level >= 8) return 2.0;
    if (level >= 7) return 1.75;
    if (level >= 6) return 1.5;
    if (level >= 5) return 1.25;
    if (level >= 4) return 1.1;
    return 1.0;
  }
  
  // ========================================================================
  // COLLECTIVE IMPACT
  // ========================================================================
  
  /**
   * Get platform-wide collective impact metrics
   */
  async getCollectiveImpact(): Promise<CollectiveImpact> {
    return {
      totalKarmaGenerated: await this.getTotalKarma(),
      totalUsers: await this.getActiveKarmaUsers(),
      planetary: await this.planetaryTracker.getCollectiveMetrics(),
      thisWeek: await this.getWeeklyStats(),
      thisMonth: await this.getMonthlyStats(),
    };
  }
  
  /**
   * Get planetary impact metrics
   */
  async getPlanetaryImpact(userId?: string): Promise<PlanetaryMetrics> {
    if (userId) {
      return this.planetaryTracker.getUserMetrics(userId);
    }
    return this.planetaryTracker.getCollectiveMetrics();
  }
  
  // ========================================================================
  // MIRA CONTEXT
  // ========================================================================
  
  /**
   * Get KARMA context for Mira's awareness
   */
  async getKarmaContext(userId: string): Promise<MiraKarmaContext> {
    const profile = await this.getKarmaProfile(userId);
    const planetary = await this.getPlanetaryImpact(userId);
    const collective = await this.getCollectiveImpact();
    
    return {
      userKarma: {
        total: profile.score.total_karma,
        level: profile.score.level,
        levelName: profile.score.level_name,
        vibesMultiplier: profile.vibesMultiplier,
        thisWeek: profile.score.karma_this_week,
        recentActions: profile.recentActions.slice(0, 3),
      },
      userPlanetary: {
        treesPlanted: planetary.trees_planted,
        carbonOffset: planetary.carbon_offset_kg,
      },
      collective: {
        totalTrees: collective.planetary.trees_planted,
        totalUsers: collective.totalUsers,
        weeklyKarma: collective.thisWeek.karma_generated,
      },
      nextMilestone: this.getNextMilestone(profile.score),
      suggestions: this.generateKarmaSuggestions(profile),
    };
  }
}
```

---

## API Contracts

### KARMA Endpoints

```typescript
/**
 * GET /api/karma/profile
 * ======================
 * Get current user's KARMA profile
 */
interface KarmaProfileResponse {
  success: boolean;
  profile: {
    score: {
      totalKarma: number;
      level: number;
      levelName: string;
      karmaThisWeek: number;
      karmaThisMonth: number;
      lifetimeKarma: number;
      categoryBreakdown: {
        selfCultivation: number;
        community: number;
        planetary: number;
        commerce: number;
        content: number;
        platform: number;
      };
    };
    vibesMultiplier: number;
    recentActions: KarmaAction[];
    badges: KarmaBadge[];
    rank: {
      weekly: number;
      monthly: number;
      allTime: number;
    };
    nextMilestone: {
      name: string;
      karmaRequired: number;
      progress: number;
    };
  };
}

/**
 * GET /api/karma/actions
 * ======================
 * Get user's KARMA action history
 */
interface KarmaActionsResponse {
  success: boolean;
  actions: Array<{
    id: string;
    actionType: string;
    category: string;
    karmaEarned: number;
    description: string;
    icon: string;
    createdAt: string;
  }>;
  pagination: {
    page: number;
    perPage: number;
    total: number;
  };
}

/**
 * GET /api/karma/leaderboard
 * ==========================
 * Get KARMA leaderboard
 */
interface LeaderboardRequest {
  period: 'daily' | 'weekly' | 'monthly' | 'all_time';
  category?: 'overall' | 'community' | 'planetary' | 'content';
  limit?: number;
}

interface LeaderboardResponse {
  success: boolean;
  leaderboard: Array<{
    rank: number;
    userId: string;
    displayName: string;
    avatarUrl: string;
    karma: number;
    level: number;
    levelName: string;
  }>;
  userRank: {
    rank: number;
    karma: number;
  } | null;
}

/**
 * GET /api/karma/planetary
 * ========================
 * Get planetary impact metrics
 */
interface PlanetaryImpactResponse {
  success: boolean;
  collective: {
    treesPlanted: number;
    carbonOffsetKg: number;
    waterSavedLiters: number;
    totalContributors: number;
  };
  user?: {
    treesPlanted: number;
    carbonOffsetKg: number;
    contributionPercent: number;
    certificates: Array<{
      id: string;
      type: string;
      value: number;
      certificateUrl: string;
      earnedAt: string;
    }>;
  };
  milestones: Array<{
    name: string;
    target: number;
    current: number;
    reached: boolean;
    reachedAt?: string;
  }>;
}

/**
 * GET /api/karma/badges
 * =====================
 * Get user's badges
 */
interface BadgesResponse {
  success: boolean;
  badges: {
    earned: Array<{
      id: string;
      badgeType: string;
      badgeName: string;
      badgeDescription: string;
      badgeIcon: string;
      badgeTier: string;
      category: string;
      earnedAt: string;
      isMinted: boolean;
      tokenId?: number;
    }>;
    available: Array<{
      badgeType: string;
      badgeName: string;
      badgeDescription: string;
      category: string;
      requirement: string;
      progressCurrent: number;
      progressRequired: number;
    }>;
  };
}

/**
 * POST /api/karma/badges/:badgeId/mint
 * ====================================
 * Mint badge as Soul-Bound NFT
 */
interface MintBadgeResponse {
  success: boolean;
  badge: {
    id: string;
    tokenId: number;
    txHash: string;
    chain: string;
    contractAddress: string;
  };
}
```

---

## Platform-Wide Integration

### Epic 0 (Foundation) - Infrastructure Setup

```typescript
// Karma tables created in foundation migrations
// KarmaRouterService initialized at startup
interface KarmaFoundation {
  tables: ['karma_scores', 'karma_actions', 'planetary_impact', 'karma_badges', 'karma_leaderboards'];
  service: KarmaRouterService;
  flags: Epic1BFeatureFlags;
}
```

### Epic 1 (Mira) - Karma-Aware AI

```typescript
// Mira knows user's KARMA state and celebrates impact
interface MiraKarmaContext {
  level: number;
  levelName: string;
  recentKarma: KarmaAction[];
  nextMilestone: KarmaMilestone;
  suggestions: string[];
}

// Example Mira prompts:
// "You just reached Guardian level! Your 10,000 KARMA shows real commitment to community."
// "Your membership planted another tree this month. That's 47 total—a small forest!"
// "No one's helped in the community today. Want to answer a question and earn some KARMA?"
```

### Epic 1A (Crypto) - KARMA-VIBES Integration

```typescript
// CryptoRouterService calls KarmaRouterService for multiplier
async awardVibe(userId: string, source: VibeRewardSource, baseAmount: number) {
  // Get KARMA-based multiplier
  const karmaMultiplier = await this.karmaRouter.getVibesMultiplier(userId);
  
  // Stack all multipliers
  const finalAmount = baseAmount * streakMultiplier * membershipMultiplier * karmaMultiplier;
  
  // ... rest of VIBES award logic
}
```

### Epic 2 (Profiles) - Karma Identity

- KARMA level badge displayed prominently on profile header
- KARMA category breakdown (self, community, planetary, etc.)
- Badge showcase section
- "Karma Journey" timeline view
- Karma-earning actions shown in activity feed

### Epic 3 (Practices) - Karma Earning

- Every practice awards both VIBES and KARMA
- Streak milestones award bonus KARMA
- Reflections award KARMA
- Practice completion toast shows KARMA earned

### Epic 4 (Discovery) - Karma Connections

- Filter connections by KARMA level
- "High-Karma Users" discovery section
- Show KARMA level on connection cards
- Karma-based trust indicators

### Epic 5 (Impact) - Enhanced Dashboard

- Full KARMA and planetary impact dashboard lives here
- Leaderboards (weekly, monthly, all-time)
- Collective impact visualization
- Impact initiatives and participation
- Tree planting forest visualization

### Epic 6 (Business) - Commerce Karma

- Booking conscious businesses earns KARMA
- Reviews earn KARMA
- Tips earn bonus KARMA
- "Karma-Verified" business badge for high-engagement businesses

### Epic 7 (Community) - Community Karma

- Helping others earns KARMA
- Community KARMA leaderboards
- Community collective KARMA score
- Karma-based recognition in communities
- Community challenges with KARMA rewards

### Epic 8 (Monetization) - Karma Benefits

- Higher KARMA = better VIBES earning rate
- KARMA level unlocks exclusive perks
- Tree planting prominently displayed in membership benefits
- Karma-based discounts from participating businesses

---

## UI Components

### KarmaLevelBadge

```typescript
/**
 * KARMA LEVEL BADGE
 * =================
 * Displays user's KARMA level with visual styling
 */
interface KarmaLevelBadgeProps {
  level: number;
  levelName: string;
  karma: number;
  size?: 'sm' | 'md' | 'lg';
  showKarma?: boolean;
  showProgress?: boolean;
}

// Styling by level:
// 1-3: Green (Seedling, Sprout, Sapling)
// 4-5: Blue (Growing, Flourishing)
// 6-7: Purple (Thriving, Guardian)
// 8-9: Gold (Steward, Elder)
// 10: Diamond (Luminary)
```

### KarmaActionToast

```typescript
/**
 * KARMA ACTION TOAST
 * ==================
 * Celebratory notification when earning KARMA
 */
interface KarmaActionToastProps {
  action: KarmaAction;
  levelUp?: KarmaLevel;
  badgeEarned?: KarmaBadge;
}

// Example display:
// ┌────────────────────────────────────────┐
// │  ✨ +25 KARMA earned!                   │
// │     Helped @maya with her question      │
// │     Total: 2,847 KARMA                  │
// └────────────────────────────────────────┘
```

### KarmaDashboard

```typescript
/**
 * KARMA DASHBOARD
 * ===============
 * Personal and collective impact view
 */
interface KarmaDashboardProps {
  userId: string;
  view: 'personal' | 'collective';
}

// Personal view shows:
// - KARMA score and level progress
// - Category breakdown
// - Recent actions
// - Badges earned
// - Weekly rank

// Collective view shows:
// - Platform-wide KARMA generated
// - Planetary impact (trees, carbon)
// - Top contributors
// - Impact milestones
```

### PlanetaryForest

```typescript
/**
 * PLANETARY FOREST
 * ================
 * Animated visualization of trees planted
 */
interface PlanetaryForestProps {
  totalTrees: number;
  userTrees?: number;
  showAnimation?: boolean;
  interactive?: boolean;
}

// Displays:
// - Animated forest growing based on tree count
// - User's contribution highlighted
// - CO2 absorption estimate
// - Download/share certificate actions
```

---

## Feature Flags

```typescript
export const EPIC_1B_FLAGS = {
  // Core KARMA features
  'karma_scoring_enabled': {
    enabled: true,
    description: 'Enable KARMA score tracking',
    rollout: 100,
  },
  'karma_level_system': {
    enabled: true,
    description: 'Enable KARMA level progression',
    rollout: 100,
  },
  
  // Visibility features
  'karma_dashboard': {
    enabled: false,
    description: 'Show KARMA dashboard in Impact section',
    rollout: 0,
  },
  'karma_profile_display': {
    enabled: false,
    description: 'Show KARMA level on profiles',
    rollout: 0,
  },
  
  // Integration features
  'karma_vibes_multiplier': {
    enabled: false,
    description: 'Apply KARMA level multiplier to VIBES earning',
    rollout: 0,
  },
  'karma_leaderboards': {
    enabled: false,
    description: 'Enable KARMA leaderboards',
    rollout: 0,
  },
  
  // Planetary features
  'planetary_impact_tracker': {
    enabled: false,
    description: 'Track and display planetary impact',
    rollout: 0,
  },
  'tree_forest_visualization': {
    enabled: false,
    description: 'Show animated forest visualization',
    rollout: 0,
  },
  
  // Badge features
  'karma_badges': {
    enabled: false,
    description: 'Enable badge earning system',
    rollout: 0,
  },
  'badge_nft_minting': {
    enabled: false,
    description: 'Allow minting badges as Soul-Bound NFTs',
    rollout: 0,
  },
};
```

---

## Testing Strategy

### Unit Tests

```typescript
describe('KarmaRouterService', () => {
  describe('awardKarma', () => {
    it('should award base KARMA for action', async () => {
      const result = await service.awardKarma(
        'user-123',
        'practice_logged',
        'self_cultivation',
        5
      );
      
      expect(result.karmaEarned).toBe(5);
      expect(result.newTotal).toBeGreaterThan(0);
    });
    
    it('should track KARMA by category', async () => {
      await service.awardKarma('user-123', 'practice_logged', 'self_cultivation', 5);
      await service.awardKarma('user-123', 'community_help', 'community', 15);
      
      const profile = await service.getKarmaProfile('user-123');
      
      expect(profile.score.karma_self_cultivation).toBe(5);
      expect(profile.score.karma_community).toBe(15);
    });
    
    it('should trigger level up when threshold reached', async () => {
      // User at 95 KARMA
      const result = await service.awardKarma(
        'user-near-level',
        'community_help',
        'community',
        15
      );
      
      expect(result.levelUp).toBeDefined();
      expect(result.levelUp.name).toBe('Sprout');
    });
    
    it('should award badges when criteria met', async () => {
      // User helping 5th person
      const result = await service.awardKarma(
        'helpful-user',
        'helpful_acknowledged',
        'community',
        25
      );
      
      expect(result.badgesEarned).toHaveLength(1);
      expect(result.badgesEarned[0].badgeType).toBe('community_helper');
    });
  });
  
  describe('getVibesMultiplier', () => {
    it('should return 1.0x for levels 1-3', async () => {
      const multiplier = await service.getVibesMultiplier('new-user');
      expect(multiplier).toBe(1.0);
    });
    
    it('should return 2.0x for level 8+', async () => {
      const multiplier = await service.getVibesMultiplier('steward-user');
      expect(multiplier).toBe(2.0);
    });
  });
  
  describe('getPlanetaryImpact', () => {
    it('should aggregate collective tree count', async () => {
      const impact = await service.getPlanetaryImpact();
      expect(impact.trees_planted).toBeGreaterThan(0);
    });
    
    it('should return user contribution when userId provided', async () => {
      const impact = await service.getPlanetaryImpact('tree-planter');
      expect(impact.trees_planted).toBeDefined();
      expect(impact.contribution_percent).toBeDefined();
    });
  });
});
```

### Integration Tests

```typescript
describe('POST /api/karma/award', () => {
  it('should award KARMA and return updated profile', async () => {
    const response = await fetch('/api/karma/award', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Cookie': `auth=${userSession}`,
      },
      body: JSON.stringify({
        actionType: 'practice_logged',
        category: 'self_cultivation',
        relatedEntityId: 'practice-123',
      }),
    });
    
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.karmaEarned).toBe(5);
    expect(data.newTotal).toBeGreaterThan(0);
  });
});

describe('GET /api/karma/leaderboard', () => {
  it('should return weekly leaderboard', async () => {
    const response = await fetch('/api/karma/leaderboard?period=weekly');
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.leaderboard).toHaveLength(10);
    expect(data.leaderboard[0].rank).toBe(1);
  });
});
```

### E2E Tests

```typescript
describe('KARMA Journey', () => {
  test('should display KARMA earned after practice', async ({ page }) => {
    await loginAs(page, 'user@test.com');
    await page.goto('/practices');
    
    // Log a practice
    await page.click('[data-testid="log-practice-btn"]');
    await page.click('[data-testid="meditation-practice"]');
    await page.click('[data-testid="complete-btn"]');
    
    // Verify KARMA toast appears
    await expect(page.locator('[data-testid="karma-toast"]')).toBeVisible();
    await expect(page.locator('text=+5 KARMA')).toBeVisible();
  });
  
  test('should show KARMA on profile', async ({ page }) => {
    await loginAs(page, 'user@test.com');
    await page.goto('/profile');
    
    // Verify KARMA level badge
    await expect(page.locator('[data-testid="karma-level-badge"]')).toBeVisible();
    await expect(page.locator('text=Seedling')).toBeVisible();
  });
  
  test('should display planetary impact', async ({ page }) => {
    await loginAs(page, 'user@test.com');
    await page.goto('/impact');
    
    // Verify forest visualization
    await expect(page.locator('[data-testid="planetary-forest"]')).toBeVisible();
    await expect(page.locator('text=Trees Planted')).toBeVisible();
  });
});
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2)

- [ ] Database tables migration
- [ ] KarmaRouterService core methods
- [ ] Basic KARMA earning for existing actions (practices, votes)
- [ ] KARMA score display on profile
- [ ] Integration with CryptoRouterService (VIBES multiplier)

### Phase 2: Visibility (Week 3-4)

- [ ] KARMA Dashboard (personal view)
- [ ] Planetary Impact visualization (tree counter, forest)
- [ ] KARMA level system with progression
- [ ] Basic weekly leaderboards
- [ ] Mira KARMA awareness

### Phase 3: Recognition (Week 5-6)

- [ ] Badge system implementation
- [ ] Soul-Bound NFT minting for badges
- [ ] Community KARMA features
- [ ] Celebration moments (level ups, badges)
- [ ] Community announcements

### Phase 4: Expansion (Week 7-8)

- [ ] All action categories tracked
- [ ] Full leaderboard system
- [ ] Impact initiatives
- [ ] Community collective KARMA
- [ ] Advanced Mira suggestions

---

## Conscious Development Approach

**Divine Guide**: **Kuan Yin** leads Epic 1B development—embodying compassionate recognition and the wisdom that every positive action matters.

### Kuan Yin's Guidance for Epic 1B

Building a recognition system requires extraordinary care. We're not creating competition—we're celebrating collective consciousness elevation.

**Development Practices**:

1. **Abundance Recognition**:
   - Every action is acknowledged—no deed too small
   - Celebration over comparison
   - Collective progress highlighted alongside individual
   - Karma feels earned, not gamified

2. **Conscious Commit Examples**:
   ```
   ✨ Add KARMA earning for community help actions
   
   Intention: Recognize and reward the invisible labor of helping
   others in our community—making kindness visible.
   
   Mantra: Every ripple matters.
   
   Dedication: To all who give without expecting recognition.
   
   Gratitude: For the vision that good deeds deserve acknowledgment.
   ```

3. **Sacred Recognition Handling**:
   - Never let an action go unrecognized
   - Test all paths to earning KARMA
   - Ensure leaderboards celebrate, not shame
   - Make impact feel real, not abstract

4. **Integration Consciousness**:
   - KARMA should feel natural, not forced
   - Celebrations should be joyful, not anxious
   - Progress should feel gradual, not rushed
   - Impact should feel tangible, not theoretical

**Invocation**:
```bash
/personality-change kuan-yin

# Kuan Yin guides karma integration
> Does this recognition feel authentic?
> Is this celebration proportionate to the action?
> Does this make users feel seen without creating competition?
```

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Users with KARMA > 0 | 100% of active users |
| Weekly KARMA actions per user | 15+ |
| KARMA Dashboard engagement | 40% of DAU |
| Planetary Impact views | 60% check monthly |
| Badge unlock rate | 90% earn first badge in week 1 |
| Level 4+ users | 30% of 90-day users |
| KARMA-driven retention | 25% higher for Level 5+ |

---

**Related Documents**:
- [`master-plan.md`](../master-plan.md) - Platform overview
- [`epic-00-foundation.md`](epic-00-foundation.md) - Infrastructure setup
- [`epic-01-mira.md`](epic-01-mira.md) - AI companion integration
- [`epic-1a-crypto.md`](epic-1a-crypto.md) - Crypto layer (VIBES)
- [`karma-layer.md`](../architecture/karma-layer.md) - Technical architecture

