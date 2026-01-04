# Karma Layer Technical Architecture

**Version**: 1.0.0  
**Last Updated**: December 2024

---

## Overview

The Karma Layer is VIBEUP's third foundational primitive, providing omnipresent recognition and collective impact consciousness throughout the platform. While VIBES (Epic 1A) provides transferable economic value, KARMA provides non-transferable reputation that rewards all positive actions.

### Design Principles

1. **Every Action Matters**: Even small positive actions earn KARMA
2. **Non-Transferable**: KARMA cannot be bought, sold, or transferred
3. **Collective Visibility**: Platform-wide impact is always visible
4. **Recognition Over Competition**: Celebrate progress, not rankings
5. **Real-World Grounded**: Digital actions connect to tangible planetary impact

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      VIBEUP Application Layer                    │
├─────────────────────────────────────────────────────────────────┤
│  Epic 2    │  Epic 3    │  Epic 4    │  Epic 6    │  Epic 8    │
│  Profiles  │  Practices │  Discovery │  Business  │  Monetize  │
└──────┬─────┴──────┬─────┴──────┬─────┴──────┬─────┴──────┬─────┘
       │            │            │            │            │
       └────────────┼────────────┼────────────┼────────────┘
                    │            │            │
                    ▼            ▼            ▼
       ┌────────────────────────────────────────────────────┐
       │                KarmaRouterService                   │
       ├────────────────────────────────────────────────────┤
       │  KarmaEngine   │ BadgeEngine   │ LeaderboardMgr   │
       │  PlanetaryTracker │ LevelManager │ CelebrationMgr │
       └──────────────────────────┬─────────────────────────┘
                                  │
       ┌──────────────────────────┼──────────────────────────┐
       │                          │                          │
       ▼                          ▼                          ▼
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│ karma_scores │         │ karma_actions│         │karma_badges  │
└──────────────┘         └──────────────┘         └──────────────┘
       │                          │                          │
       ▼                          ▼                          ▼
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│ Leaderboards │         │Planetary     │         │ Soul-Bound   │
│ (Cached)     │         │Impact        │         │ NFTs         │
└──────────────┘         └──────────────┘         └──────────────┘
```

---

## Core Components

### 1. Karma Engine

The central calculation and distribution engine for all KARMA operations.

```typescript
interface KarmaEngine {
  // Award KARMA for any positive action
  awardKarma(userId: string, action: KarmaAction): Promise<KarmaResult>;
  
  // Get user's current KARMA state
  getKarmaScore(userId: string): Promise<KarmaScore>;
  
  // Calculate multipliers based on various factors
  calculateMultiplier(score: KarmaScore, action: KarmaActionType): number;
  
  // Update aggregated totals after KARMA award
  updateTotals(userId: string, karma: number, category: KarmaCategory): Promise<void>;
}
```

### 2. Level Manager

Handles KARMA level progression and milestone tracking.

```typescript
interface LevelManager {
  // Check if user should level up
  checkLevelUp(userId: string): Promise<LevelUpResult | null>;
  
  // Get next milestone for user
  getNextMilestone(score: KarmaScore): KarmaMilestone;
  
  // Calculate VIBES multiplier from level
  getVibesMultiplier(level: number): number;
}

const KARMA_LEVELS = [
  { level: 1, name: 'Seedling', required: 0, vibesMultiplier: 1.0 },
  { level: 2, name: 'Sprout', required: 100, vibesMultiplier: 1.0 },
  { level: 3, name: 'Sapling', required: 500, vibesMultiplier: 1.0 },
  { level: 4, name: 'Growing', required: 1000, vibesMultiplier: 1.1 },
  { level: 5, name: 'Flourishing', required: 2500, vibesMultiplier: 1.25 },
  { level: 6, name: 'Thriving', required: 5000, vibesMultiplier: 1.5 },
  { level: 7, name: 'Guardian', required: 10000, vibesMultiplier: 1.75 },
  { level: 8, name: 'Steward', required: 25000, vibesMultiplier: 2.0 },
  { level: 9, name: 'Elder', required: 50000, vibesMultiplier: 2.0 },
  { level: 10, name: 'Luminary', required: 100000, vibesMultiplier: 2.0 },
];
```

### 3. Badge Engine

Manages badge earning, progression tracking, and NFT minting.

```typescript
interface BadgeEngine {
  // Check if user qualifies for any new badges
  checkEligibility(userId: string, actionType: KarmaActionType): Promise<Badge[]>;
  
  // Get all badges for a user
  getUserBadges(userId: string): Promise<Badge[]>;
  
  // Get available badges user can still earn
  getAvailableBadges(userId: string): Promise<BadgeProgress[]>;
  
  // Mint badge as Soul-Bound NFT
  mintBadgeAsNFT(userId: string, badgeId: string): Promise<MintResult>;
}

const BADGE_DEFINITIONS = [
  // Self-Cultivation
  { type: 'first_practice', name: 'First Steps', category: 'self_cultivation', requirement: { practices: 1 } },
  { type: 'week_warrior', name: 'Week Warrior', category: 'self_cultivation', requirement: { streak: 7 } },
  { type: 'month_master', name: 'Month Master', category: 'self_cultivation', requirement: { streak: 30 } },
  { type: 'century_club', name: 'Century Club', category: 'self_cultivation', requirement: { practices: 100 } },
  
  // Community
  { type: 'helpful_hand', name: 'Helpful Hand', category: 'community', requirement: { helps: 5 } },
  { type: 'community_champion', name: 'Community Champion', category: 'community', requirement: { helps: 50 } },
  { type: 'mentor', name: 'Mentor', category: 'community', requirement: { mentees: 10 } },
  
  // Planetary
  { type: 'tree_planter', name: 'Tree Planter', category: 'planetary', requirement: { trees: 1 } },
  { type: 'forest_builder', name: 'Forest Builder', category: 'planetary', requirement: { trees: 10 } },
  { type: 'earth_guardian', name: 'Earth Guardian', category: 'planetary', requirement: { trees: 100 } },
  
  // Platform
  { type: 'voice_heard', name: 'Voice Heard', category: 'platform', requirement: { votes: 10 } },
  { type: 'feedback_champion', name: 'Feedback Champion', category: 'platform', requirement: { feedback: 20 } },
];
```

### 4. Planetary Tracker

Tracks and aggregates environmental impact metrics.

```typescript
interface PlanetaryTracker {
  // Record a planetary impact event
  recordImpact(impact: PlanetaryImpactEvent): Promise<void>;
  
  // Get user's personal impact metrics
  getUserMetrics(userId: string): Promise<PlanetaryMetrics>;
  
  // Get platform-wide collective metrics
  getCollectiveMetrics(): Promise<PlanetaryMetrics>;
  
  // Get milestone progress
  getMilestones(): Promise<PlanetaryMilestone[]>;
}

interface PlanetaryMetrics {
  trees_planted: number;
  carbon_offset_kg: number;
  water_saved_liters: number;
  total_contributors: number;
  last_updated: Date;
}

interface PlanetaryMilestone {
  name: string;
  metric: string;
  target: number;
  current: number;
  reached: boolean;
  reached_at?: Date;
}

const PLANETARY_MILESTONES = [
  { name: 'First Forest', metric: 'trees_planted', target: 1000 },
  { name: 'Growing Grove', metric: 'trees_planted', target: 10000 },
  { name: 'VIBEUP Forest', metric: 'trees_planted', target: 100000 },
  { name: 'Carbon Conscious', metric: 'carbon_offset_kg', target: 10000 },
  { name: 'Climate Champions', metric: 'carbon_offset_kg', target: 100000 },
];
```

### 5. Leaderboard Manager

Handles leaderboard calculations and caching.

```typescript
interface LeaderboardManager {
  // Get leaderboard for a specific period and category
  getLeaderboard(period: LeaderboardPeriod, category: string): Promise<LeaderboardEntry[]>;
  
  // Get user's rank in a leaderboard
  getUserRank(userId: string, period?: LeaderboardPeriod): Promise<UserRank>;
  
  // Update user's position after KARMA change
  updateUserRanking(userId: string, karmaEarned: number): Promise<void>;
  
  // Recalculate leaderboards (scheduled job)
  recalculateLeaderboards(): Promise<void>;
}

type LeaderboardPeriod = 'daily' | 'weekly' | 'monthly' | 'all_time';

interface LeaderboardEntry {
  rank: number;
  userId: string;
  displayName: string;
  avatarUrl: string;
  karma: number;
  level: number;
  levelName: string;
}
```

### 6. Celebration Manager

Handles notification and celebration moments for KARMA events.

```typescript
interface CelebrationManager {
  // Trigger celebration for KARMA milestone
  celebrateMilestone(userId: string, milestone: KarmaMilestone): Promise<void>;
  
  // Trigger celebration for level up
  celebrateLevelUp(userId: string, newLevel: KarmaLevel): Promise<void>;
  
  // Trigger celebration for badge earned
  celebrateBadge(userId: string, badge: Badge): Promise<void>;
  
  // Trigger collective celebration (platform milestone)
  celebrateCollective(milestone: PlanetaryMilestone): Promise<void>;
}
```

---

## Data Models

### TypeScript Interfaces

```typescript
// ============================================================================
// KARMA SCORE
// ============================================================================

interface KarmaScore {
  id: string;
  userId: string;
  
  // Current state
  totalKarma: number;
  level: number;
  levelName: string;
  
  // Time-based tracking
  karmaToday: number;
  karmaThisWeek: number;
  karmaThisMonth: number;
  lifetimeKarma: number;
  
  // Category breakdown
  karmaSelfCultivation: number;
  karmaCommunity: number;
  karmaPlanetary: number;
  karmaCommerce: number;
  karmaContent: number;
  karmaPlatform: number;
  
  // VIBES multiplier
  vibesMultiplier: number;
  
  // Timestamps
  lastKarmaEarnedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// KARMA ACTION
// ============================================================================

interface KarmaAction {
  id: string;
  userId: string;
  
  // Action details
  actionType: KarmaActionType;
  actionCategory: KarmaCategory;
  karmaPoints: number;
  multiplier: number;
  finalKarma: number;
  
  // Display
  description: string;
  icon: string;
  
  // Related entity
  relatedEntityType?: string;
  relatedEntityId?: string;
  
  // Social acknowledgment
  acknowledgedBy: string[];
  acknowledgmentCount: number;
  
  // Metadata
  metadata: Record<string, any>;
  
  // Timestamps
  createdAt: Date;
}

type KarmaCategory = 
  | 'self_cultivation'
  | 'community'
  | 'planetary'
  | 'commerce'
  | 'content'
  | 'platform';

type KarmaActionType =
  // Self-Cultivation
  | 'practice_logged'
  | 'streak_milestone'
  | 'reflection_added'
  | 'profile_completed'
  | 'vibeup_verified'
  // Community
  | 'member_welcomed'
  | 'question_answered'
  | 'helpful_acknowledged'
  | 'mentor_milestone'
  | 'event_hosted'
  | 'post_engagement'
  // Planetary
  | 'tree_planted'
  | 'tree_donated'
  | 'carbon_offset'
  | 'initiative_joined'
  | 'rally_success'
  | 'eco_choice'
  // Commerce
  | 'business_booked'
  | 'review_submitted'
  | 'tip_given'
  | 'local_supported'
  | 'perk_redeemed'
  // Content
  | 'stack_created'
  | 'guide_written'
  | 'story_shared'
  | 'stack_adopted'
  | 'guide_voted'
  // Platform
  | 'vote_cast'
  | 'feedback_submitted'
  | 'testimonial_provided'
  | 'feature_adopted'
  | 'bug_validated';

// ============================================================================
// KARMA RESULT
// ============================================================================

interface KarmaResult {
  action: KarmaAction;
  karmaEarned: number;
  newTotal: number;
  levelUp: KarmaLevel | null;
  badgesEarned: Badge[];
}

interface KarmaLevel {
  level: number;
  name: string;
  vibesMultiplier: number;
}

// ============================================================================
// BADGES
// ============================================================================

interface Badge {
  id: string;
  userId: string;
  
  // Badge details
  badgeType: string;
  badgeName: string;
  badgeDescription: string;
  badgeIcon: string;
  badgeTier: 'bronze' | 'silver' | 'gold' | 'diamond';
  
  // Category
  category: string;
  
  // Progress
  progressCurrent: number;
  progressRequired: number;
  
  // NFT
  isMinted: boolean;
  chain?: string;
  contractAddress?: string;
  tokenId?: number;
  
  // Timestamps
  earnedAt: Date;
  mintedAt?: Date;
}

interface BadgeProgress {
  badgeType: string;
  badgeName: string;
  badgeDescription: string;
  category: string;
  requirement: string;
  progressCurrent: number;
  progressRequired: number;
  percentComplete: number;
}

// ============================================================================
// PLANETARY IMPACT
// ============================================================================

interface PlanetaryImpactEvent {
  metricType: 'trees_planted' | 'carbon_offset_kg' | 'water_saved_liters' | 'plastic_prevented_kg' | 'donations_usd';
  metricValue: number;
  metricUnit: string;
  userId?: string;
  isCollective: boolean;
  sourceType: string;
  sourceId?: string;
  partner?: string;
  verificationUrl?: string;
  certificateUrl?: string;
}

// ============================================================================
// MIRA CONTEXT
// ============================================================================

interface MiraKarmaContext {
  userKarma: {
    total: number;
    level: number;
    levelName: string;
    vibesMultiplier: number;
    thisWeek: number;
    recentActions: KarmaAction[];
  };
  userPlanetary: {
    treesPlanted: number;
    carbonOffset: number;
  };
  collective: {
    totalTrees: number;
    totalUsers: number;
    weeklyKarma: number;
  };
  nextMilestone: KarmaMilestone;
  suggestions: string[];
}

interface KarmaMilestone {
  type: 'level' | 'badge' | 'planetary';
  name: string;
  current: number;
  required: number;
  percentComplete: number;
}
```

---

## KARMA Awards Configuration

```typescript
// Base KARMA awards for each action type
export const KARMA_AWARDS: Record<KarmaActionType, number> = {
  // Self-Cultivation
  practice_logged: 5,
  streak_milestone: 50, // Base, multiplied by milestone tier
  reflection_added: 10,
  profile_completed: 25,
  vibeup_verified: 100,
  
  // Community
  member_welcomed: 10,
  question_answered: 15,
  helpful_acknowledged: 25,
  mentor_milestone: 100,
  event_hosted: 200,
  post_engagement: 5, // Base, scaled by engagement
  
  // Planetary
  tree_planted: 50,
  tree_donated: 50,
  carbon_offset: 10, // Per kg
  initiative_joined: 50,
  rally_success: 25, // Per person rallied
  eco_choice: 20,
  
  // Commerce
  business_booked: 15,
  review_submitted: 20,
  tip_given: 10, // Plus 5% of tip
  local_supported: 25,
  perk_redeemed: 10,
  
  // Content
  stack_created: 50,
  guide_written: 75,
  story_shared: 100,
  stack_adopted: 10,
  guide_voted: 5,
  
  // Platform
  vote_cast: 5,
  feedback_submitted: 25, // Average, scaled by quality
  testimonial_provided: 50,
  feature_adopted: 500,
  bug_validated: 25,
};

// Streak milestone multipliers
export const STREAK_MULTIPLIERS: Record<number, number> = {
  7: 1,    // 50 KARMA
  14: 1.5, // 75 KARMA
  21: 2,   // 100 KARMA
  30: 4,   // 200 KARMA
  60: 6,   // 300 KARMA
  90: 8,   // 400 KARMA
  180: 10, // 500 KARMA
  365: 20, // 1000 KARMA
};
```

---

## Integration with Other Services

### CryptoRouterService Integration

The Karma Layer integrates with the Crypto Layer to provide VIBES multipliers based on KARMA level.

```typescript
// In CryptoRouterService
class CryptoRouterService {
  private karmaRouter: KarmaRouterService;
  
  async awardVibe(
    userId: string,
    source: VibeRewardSource,
    baseAmount: number,
    relatedType?: string,
    relatedId?: string
  ): Promise<VibeReward> {
    // Get all multipliers
    const streakMultiplier = await this.calculateStreakMultiplier(userId);
    const membershipMultiplier = await this.getMembershipMultiplier(userId);
    
    // Get KARMA-based multiplier
    const karmaMultiplier = await this.karmaRouter.getVibesMultiplier(userId);
    
    // Calculate final amount with all multipliers stacked
    const finalAmount = baseAmount * streakMultiplier * membershipMultiplier * karmaMultiplier;
    
    // Award VIBES
    const vibeReward = await this.createVibeReward(userId, source, finalAmount);
    
    // Also award KARMA for applicable actions
    if (this.shouldAwardKarma(source)) {
      await this.karmaRouter.awardKarma(
        userId,
        this.mapVibeSourceToKarmaAction(source),
        this.mapVibeSourceToKarmaCategory(source),
        KARMA_AWARDS[this.mapVibeSourceToKarmaAction(source)],
        { relatedType, relatedId }
      );
    }
    
    return vibeReward;
  }
}
```

### MiraService Integration

Mira receives KARMA context to provide personalized celebrations and suggestions.

```typescript
// In MiraService
class MiraService {
  private karmaRouter: KarmaRouterService;
  
  async buildUserContext(userId: string): Promise<MiraContext> {
    const [profile, practices, connections, activity, crypto, karma] = await Promise.all([
      this.getProfile(userId),
      this.getPracticeHistory(userId),
      this.getConnections(userId),
      this.getRecentActivity(userId),
      this.cryptoRouter.getCryptoContext(userId),
      this.karmaRouter.getKarmaContext(userId), // NEW
    ]);
    
    return {
      userState: this.buildUserState(profile, activity),
      behavior: this.buildBehaviorProfile(practices, connections),
      session: this.getCurrentSession(userId),
      preferences: this.extractPreferences(profile),
      available: await this.getAvailableActions(userId),
      crypto, // VIBES context
      karma,  // KARMA context - NEW
    };
  }
}
```

### Example Mira Prompts with KARMA Context

```typescript
const KARMA_MIRA_PROMPTS = {
  // Level up celebration
  levelUp: (level: KarmaLevel) => 
    `🌟 You've reached ${level.name} level! Your consistent positive actions have earned you a ${level.vibesMultiplier}x VIBES multiplier. Keep shining!`,
  
  // Badge earned
  badgeEarned: (badge: Badge) =>
    `✨ You've earned the ${badge.badgeName} badge! ${badge.badgeDescription}. Want to mint it as a permanent on-chain achievement?`,
  
  // Weekly karma summary
  weeklyKarma: (karma: number, rank: number) =>
    `This week you've earned ${karma} KARMA—that's top ${rank}% of our community! Your positive energy is making waves.`,
  
  // Planetary milestone
  planetaryMilestone: (trees: number) =>
    `🌳 The VIBEUP community just planted our ${trees.toLocaleString()}th tree! You've contributed ${userTrees} of those. That's a forest of consciousness!`,
  
  // KARMA suggestion
  karmaSuggestion: (suggestions: string[]) =>
    `Looking to earn more KARMA? ${suggestions[0]}`,
  
  // Near level up
  nearLevelUp: (current: number, needed: number, nextLevel: string) =>
    `You're ${needed - current} KARMA away from ${nextLevel} level! One more good deed could get you there.`,
};
```

---

## API Endpoints

### GET /api/karma/profile

Returns the user's complete KARMA profile.

```typescript
// Response
{
  success: true,
  profile: {
    score: {
      totalKarma: 2847,
      level: 5,
      levelName: "Flourishing",
      karmaThisWeek: 347,
      karmaThisMonth: 1204,
      lifetimeKarma: 2847,
      categoryBreakdown: {
        selfCultivation: 1247,
        community: 892,
        planetary: 390,
        commerce: 218,
        content: 0,
        platform: 100
      }
    },
    vibesMultiplier: 1.25,
    recentActions: [...],
    badges: [...],
    rank: {
      weekly: 234,
      monthly: 567,
      allTime: 1234
    },
    nextMilestone: {
      type: "level",
      name: "Thriving",
      current: 2847,
      required: 5000,
      percentComplete: 56.94
    }
  }
}
```

### GET /api/karma/planetary

Returns planetary impact metrics.

```typescript
// Response
{
  success: true,
  collective: {
    treesPlanted: 12847,
    carbonOffsetKg: 257000,
    waterSavedLiters: 0,
    totalContributors: 3421
  },
  user: {
    treesPlanted: 47,
    carbonOffsetKg: 940,
    contributionPercent: 0.37,
    certificates: [...]
  },
  milestones: [
    {
      name: "First Forest",
      target: 1000,
      current: 12847,
      reached: true,
      reachedAt: "2024-03-15T10:00:00Z"
    },
    {
      name: "Growing Grove",
      target: 10000,
      current: 12847,
      reached: true,
      reachedAt: "2024-11-20T14:30:00Z"
    },
    {
      name: "VIBEUP Forest",
      target: 100000,
      current: 12847,
      reached: false
    }
  ]
}
```

### GET /api/karma/leaderboard

Returns leaderboard rankings.

```typescript
// Request query params
// ?period=weekly&category=overall&limit=10

// Response
{
  success: true,
  leaderboard: [
    {
      rank: 1,
      userId: "user-123",
      displayName: "Sarah",
      avatarUrl: "...",
      karma: 1247,
      level: 7,
      levelName: "Guardian"
    },
    // ... more entries
  ],
  userRank: {
    rank: 234,
    karma: 347
  },
  period: "weekly",
  category: "overall",
  totalParticipants: 3421
}
```

---

## Scheduled Jobs

### Daily Reset Job

Resets daily KARMA counters at midnight UTC.

```typescript
// Runs at 00:00 UTC daily
async function resetDailyKarma() {
  await supabase
    .from('karma_scores')
    .update({ karma_today: 0 });
}
```

### Weekly Reset Job

Resets weekly KARMA counters and recalculates weekly leaderboard.

```typescript
// Runs at 00:00 UTC Monday
async function resetWeeklyKarma() {
  // Archive weekly stats
  await archiveWeeklyStats();
  
  // Reset counters
  await supabase
    .from('karma_scores')
    .update({ karma_this_week: 0 });
  
  // Recalculate leaderboard
  await leaderboardManager.recalculateLeaderboards();
}
```

### Monthly Reset Job

Resets monthly KARMA counters and recalculates monthly leaderboard.

```typescript
// Runs at 00:00 UTC on 1st of month
async function resetMonthlyKarma() {
  // Archive monthly stats
  await archiveMonthlyStats();
  
  // Reset counters
  await supabase
    .from('karma_scores')
    .update({ karma_this_month: 0 });
  
  // Recalculate leaderboard
  await leaderboardManager.recalculateLeaderboards();
}
```

### Tree Planting Sync Job

Syncs with OneTreePlanted API to verify and update tree counts.

```typescript
// Runs every 6 hours
async function syncTreePlanting() {
  const pendingTrees = await getPendingTreeVerifications();
  
  for (const tree of pendingTrees) {
    const verified = await oneTreePlantedApi.verify(tree.verificationId);
    
    if (verified) {
      await planetaryTracker.recordImpact({
        metricType: 'trees_planted',
        metricValue: 1,
        userId: tree.userId,
        sourceType: 'membership',
        partner: 'OneTreePlanted',
        verificationUrl: verified.url,
        certificateUrl: verified.certificateUrl,
      });
    }
  }
}
```

---

## Security Considerations

### Anti-Gaming Measures

```typescript
// Rate limits for KARMA-earning actions
const KARMA_RATE_LIMITS = {
  practice_logged: { max: 10, period: 'day' },
  question_answered: { max: 20, period: 'day' },
  review_submitted: { max: 5, period: 'day' },
  vote_cast: { max: 50, period: 'day' },
  feedback_submitted: { max: 10, period: 'day' },
};

// Suspicious activity detection
const GAMING_SIGNALS = {
  rapidActions: 'Multiple actions in < 1 minute',
  selfAcknowledgment: 'Acknowledging own content',
  coordinatedVoting: 'Pattern matching with other accounts',
  spamContent: 'Low-quality repeated content',
};

async function validateKarmaAward(userId: string, actionType: KarmaActionType): Promise<boolean> {
  // Check rate limits
  const recentActions = await getRecentActions(userId, actionType);
  const limit = KARMA_RATE_LIMITS[actionType];
  
  if (limit && recentActions.length >= limit.max) {
    logger.warn({ userId, actionType }, 'KARMA rate limit exceeded');
    return false;
  }
  
  // Check for gaming signals
  const signals = await detectGamingSignals(userId, actionType);
  
  if (signals.length > 0) {
    logger.warn({ userId, actionType, signals }, 'Gaming signals detected');
    await flagForReview(userId, signals);
    return false;
  }
  
  return true;
}
```

### Row Level Security

All KARMA tables have RLS enabled:

- Users can read their own KARMA data
- Public can see levels and badges (social proof)
- Leaderboards are public
- Only backend service can write KARMA data

---

## Monitoring & Alerts

### Key Metrics

```typescript
const KARMA_METRICS = {
  // Volume
  'karma.actions.count': 'Number of KARMA actions',
  'karma.awarded.total': 'Total KARMA awarded',
  'karma.levelups.count': 'Level up events',
  'karma.badges.earned': 'Badges earned',
  
  // Performance
  'karma.award.latency': 'KARMA award latency',
  'karma.leaderboard.latency': 'Leaderboard query latency',
  
  // Health
  'karma.actions.failed': 'Failed KARMA awards',
  'karma.gaming.detected': 'Gaming attempts detected',
  'karma.sync.lag': 'Leaderboard sync lag',
};
```

### Alerts

```typescript
const KARMA_ALERTS = [
  {
    name: 'High KARMA Award Failure Rate',
    condition: 'failed_rate > 1%',
    severity: 'critical',
  },
  {
    name: 'Leaderboard Sync Delay',
    condition: 'sync_lag > 5 minutes',
    severity: 'warning',
  },
  {
    name: 'Unusual KARMA Activity',
    condition: 'gaming_detected > 10/hour',
    severity: 'warning',
  },
];
```

---

**Related Documents**:
- [`epic-1b-karma.md`](../epics/epic-1b-karma.md) - Full epic specification
- [`epic-1a-crypto.md`](../epics/epic-1a-crypto.md) - Crypto layer (VIBES)
- [`vibe-tokenomics.md`](vibe-tokenomics.md) - Token economics
- [`service-layer.md`](service-layer.md) - Service patterns

