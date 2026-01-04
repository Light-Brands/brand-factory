# $VIBES Token Economics

**Version**: 1.0.0  
**Last Updated**: December 2024

---

## Overview

VIBES is VIBEUP's utility and governance token, designed to reward conscious engagement, enable platform governance, and create value alignment between users and the platform.

### Token Purpose

1. **Reward Engagement**: Earn VIBES through practices, streaks, and contributions
2. **Unlock Benefits**: Stake VIBES for premium features without monthly payment
3. **Govern Platform**: VIBES-weighted voting on features and initiatives
4. **Enable Commerce**: Pay for services and redeem perks

### Design Principles

- **Earn, Don't Buy**: Primary acquisition through platform engagement
- **Generous Rewards**: Make users feel valued, not exploited
- **Simple Utility**: Clear value proposition without complexity
- **Non-Speculative**: Focus on utility, not trading value

### Dual Currency Model: VIBES + KARMA

VIBEUP uses two complementary currencies that work together:

| Aspect | VIBES (Epic 1A) | KARMA (Epic 1B) |
|--------|-----------------|-----------------|
| **Type** | Utility Token (ERC-20) | Recognition Score |
| **Transferable** | Yes | No (soul-bound) |
| **Purpose** | Economic value exchange | Reputation and influence |
| **Earning** | Practices, streaks, referrals | All positive actions |
| **Spending** | Payments, staking, governance | Cannot spend |
| **On-Chain** | Yes (Base L2) | Off-chain (database) |

**How They Work Together**:
```
Positive Action
    │
    ├──► Award KARMA (always)
    │         │
    │         └──► If action earns VIBES ──► Apply KARMA multiplier
    │
    └──► Check KARMA level ──► Determine VIBES earning rate
```

KARMA level determines VIBES earning rate: users who contribute more to the community (higher KARMA) earn VIBES faster. This creates aligned incentives where reputation directly translates to economic benefit.

See [Epic 1B: Karma Layer](../epics/epic-1b-karma.md) for complete KARMA specifications.

---

## Token Specifications

```
Token Name: VIBES
Token Symbol: VIBES
Total Supply: 1,000,000,000 (1 billion)
Decimals: 18
Primary Chain: Base L2
Standard: ERC-20

Contract Addresses:
- Base: [To be deployed]
- Solana: [To be deployed]
- Polygon: [To be deployed]
```

---

## Token Distribution

```
┌─────────────────────────────────────────────────────────────────┐
│                    VIBES Token Distribution                       │
│                      Total: 1,000,000,000                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────┐             │
│  │ User Rewards Pool                    50%       │  500M VIBES  │
│  │ (Practices, streaks, achievements, referrals)  │             │
│  └────────────────────────────────────────────────┘             │
│                                                                  │
│  ┌────────────────────────────────────────────────┐             │
│  │ Community & Governance               20%       │  200M VIBES  │
│  │ (Treasury, grants, community initiatives)      │             │
│  └────────────────────────────────────────────────┘             │
│                                                                  │
│  ┌────────────────────────────────────────────────┐             │
│  │ Team & Contributors                  15%       │  150M VIBES  │
│  │ (4-year vesting, 1-year cliff)                 │             │
│  └────────────────────────────────────────────────┘             │
│                                                                  │
│  ┌────────────────────────────────────────────────┐             │
│  │ Ecosystem Development                10%       │  100M VIBES  │
│  │ (Partnerships, integrations, growth)           │             │
│  └────────────────────────────────────────────────┘             │
│                                                                  │
│  ┌────────────────────────────────────────────────┐             │
│  │ Reserve                               5%       │   50M VIBES  │
│  │ (Emergency fund, future needs)                 │             │
│  └────────────────────────────────────────────────┘             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Allocation Details

| Pool | Amount | Purpose | Vesting |
|------|--------|---------|---------|
| User Rewards | 500M | Platform engagement rewards | Released over 10 years |
| Community | 200M | Governance, grants, treasury | Community-controlled |
| Team | 150M | Core team and contributors | 4-year vest, 1-year cliff |
| Ecosystem | 100M | Partnerships and growth | As needed |
| Reserve | 50M | Emergency and future use | Locked, multisig required |

---

## Earning VIBES

### Daily Actions

| Action | Base VIBES | Description |
|--------|-----------|-------------|
| Practice Logged | 5 | Log any wellness practice |
| Daily Affirmation | 2 | View daily affirmation |
| Reflection Added | 3 | Add notes to practice |
| Check-in Complete | 2 | Complete daily check-in |

### Streak Multipliers

Consecutive days of practice multiply your VIBES rewards:

| Streak Length | Multiplier | Example (5 base) |
|---------------|------------|------------------|
| 1-6 days | 1.0x | 5 VIBES |
| 7-20 days | 1.5x | 7.5 VIBES |
| 21-29 days | 2.0x | 10 VIBES |
| 30-89 days | 2.5x | 12.5 VIBES |
| 90+ days | 3.0x | 15 VIBES |

### Membership Multipliers

Premium members earn more VIBES:

| Membership | Multiplier | Stacked with Streak |
|------------|------------|---------------------|
| Community (Free) | 1.0x | Yes |
| Regenerative | 2.0x | Yes |
| Staked VIBES | 1.5x | Yes |

**Example**: Regenerative member with 30-day streak logging a practice:
- Base: 5 VIBES
- Streak (2.5x): 12.5 VIBES
- Membership (2.0x): 25 VIBES
- **Total: 25 VIBES per practice**

### KARMA Level Multipliers (Epic 1B Integration)

KARMA is VIBEUP's non-transferable recognition score (see [Epic 1B: Karma Layer](../epics/epic-1b-karma.md)). Higher KARMA levels earn VIBES faster, creating a virtuous cycle where positive actions accelerate earning potential.

| KARMA Level | Name | Multiplier | Stacked with Others |
|-------------|------|------------|---------------------|
| 1-3 | Seedling-Sapling | 1.0x | Yes |
| 4 | Growing | 1.1x | Yes |
| 5 | Flourishing | 1.25x | Yes |
| 6 | Thriving | 1.5x | Yes |
| 7 | Guardian | 1.75x | Yes |
| 8+ | Steward+ | 2.0x | Yes |

**Full Multiplier Stack Example**: Guardian (Level 7) Regenerative member with 30-day streak:
- Base: 5 VIBES
- Streak (2.5x): 12.5 VIBES
- Membership (2.0x): 25 VIBES
- **KARMA (1.75x): 43.75 VIBES**
- **Total: 43.75 VIBES per practice** (vs 5 VIBES for new free user)

This creates powerful engagement loops:
1. **Practice** → Earn KARMA + VIBES
2. **KARMA level increases** → Higher VIBES multiplier
3. **More VIBES** → More utility and governance power
4. **Engagement incentive** → More practice

### One-Time Achievements

| Achievement | VIBES Reward | Requirement |
|-------------|-------------|-------------|
| First Practice | 50 | Log first practice |
| Week Warrior | 100 | Complete 7-day streak |
| Month Master | 500 | Complete 30-day streak |
| Century Club | 1,000 | Log 100 practices |
| Practice Legend | 5,000 | Complete 365-day streak |
| Profile Complete | 100 | 100% profile completion |
| First Connection | 50 | Make first connection |
| Community Builder | 500 | Create a community |

### Social & Community Actions

| Action | VIBES | Frequency |
|--------|------|-----------|
| Referral Signup | 100 | Per verified referral |
| Quality Feedback | 10-50 | Per submission (quality rated) |
| Testimonial | 25 | One-time |
| Community Post | 2 | Max 5/day |
| Helpful Comment | 1 | Max 10/day |

---

## Spending VIBES

### Premium Features (Stake)

Stake VIBES to unlock premium features without monthly payment:

| Tier | Stake Required | Lock Period | Benefits |
|------|----------------|-------------|----------|
| Regenerative | 5,000 VIBES | 30 days | All premium features |
| Governance | 10,000 VIBES | 90 days | 2x vote weight, proposals |
| Founder | 50,000 VIBES | 365 days | Lifetime premium, badge |

### Business Perks

Redeem VIBES for business discounts:

| Perk Type | Typical Cost | Example |
|-----------|--------------|---------|
| 10% Discount | 100 VIBES | Yoga class |
| 20% Discount | 200 VIBES | Sound healing |
| Free Trial | 500 VIBES | Month subscription |
| Workshop | 1,000 VIBES | Full-day retreat |

### Community Dues

Pay community membership in VIBES:

| Community Type | Monthly VIBES | Equivalent |
|----------------|--------------|------------|
| Basic | 100 | ~$1 value |
| Active | 500 | ~$5 value |
| Premium | 1,000 | ~$10 value |

### Tipping

Tip creators and helpful community members:

| Tip Size | VIBES | Typical Use |
|----------|------|-------------|
| Small | 5 | Quick thanks |
| Medium | 25 | Helpful response |
| Large | 100 | Significant help |
| Generous | 500+ | Exceptional value |

---

## Governance

### VIBES-Weighted Voting

VIBES balance influences voting power with soft caps to prevent plutocracy:

```typescript
function calculateVoteWeight(vibeBalance: number, isStaked: boolean): number {
  const base = 1;
  
  // Logarithmic scaling to prevent wealth concentration
  // 1 VIBES = +0.0001 weight, diminishing returns after 10k
  const vibeBonus = Math.log10(vibeBalance + 1) * 0.1;
  
  // Cap at 3x max influence
  const cappedBonus = Math.min(vibeBonus, 2);
  
  // Staking bonus
  const stakingMultiplier = isStaked ? 1.5 : 1;
  
  return (base + cappedBonus) * stakingMultiplier;
}

// Examples:
// 100 VIBES, not staked: 1.2x
// 1,000 VIBES, not staked: 1.3x
// 10,000 VIBES, staked: 1.95x (1.3 * 1.5)
// 100,000 VIBES, staked: 2.55x (1.7 * 1.5)
// 1,000,000 VIBES, staked: 3.0x (capped)
```

### Proposal Thresholds

| Proposal Type | VIBES Required | Description |
|---------------|---------------|-------------|
| Feature Suggestion | 0 | Anyone can suggest |
| Feature Proposal | 1,000 | Formal proposal |
| Initiative Vote | 5,000 | Community-wide vote |
| Emergency Action | 50,000 | Urgent platform change |

### Voting Process

```
┌─────────────────────────────────────────────────────────────────┐
│                     Governance Flow                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Suggestion (0 VIBES)                                           │
│        │                                                         │
│        ▼ (if popular)                                           │
│   Proposal (1,000 VIBES stake)                                   │
│        │                                                         │
│        ▼ (7-day discussion)                                     │
│   Voting Period (5 days)                                        │
│        │                                                         │
│        ├── Passed (>50% weighted)                               │
│        │       │                                                 │
│        │       ▼                                                 │
│        │   Implementation Queue                                  │
│        │                                                         │
│        └── Failed (<50% weighted)                               │
│                │                                                 │
│                ▼                                                 │
│            Archive (can resubmit in 30 days)                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Emission Schedule

### User Rewards Release

The 500M VIBES user rewards pool releases over 10 years with decreasing emissions:

```
Year 1:   100M VIBES (20%)  - Platform launch and growth
Year 2:    80M VIBES (16%)  - Continued growth
Year 3:    60M VIBES (12%)  - Maturation
Year 4:    50M VIBES (10%)  - Steady state
Year 5:    45M VIBES (9%)
Year 6:    40M VIBES (8%)
Year 7:    35M VIBES (7%)
Year 8:    30M VIBES (6%)
Year 9:    30M VIBES (6%)
Year 10:   30M VIBES (6%)
```

### Monthly Budget

Year 1 monthly allocation (~8.3M VIBES/month):

| Category | Monthly VIBES | Purpose |
|----------|--------------|---------|
| Practice Rewards | 5,000,000 | Daily engagement |
| Achievement NFTs | 1,500,000 | Milestones |
| Referral Program | 1,000,000 | Growth |
| Community Grants | 500,000 | Initiatives |
| Emergency Buffer | 300,000 | Adjustments |

### Adjustment Mechanism

Emission rates can be adjusted based on:
- User growth rate
- Engagement metrics
- Token utility demand
- Community governance votes

---

## Token Utility Matrix

### By Epic

| Epic | VIBES Utility |
|------|--------------|
| Epic 1 (Mira) | Mira displays balances, explains rewards |
| Epic 2 (Profiles) | Display balance on profile, Pay button |
| Epic 3 (Practices) | Earn for practices, streaks, achievements |
| Epic 4 (Discovery) | Tip connections, split payments |
| Epic 5 (Impact) | Weighted voting, stake for proposals |
| Epic 6 (Business) | Pay for services, redeem perks |
| Epic 7 (Community) | Treasury, dues, crowdfunding |
| Epic 8 (Monetization) | Stake for premium, pay subscriptions |

### User Journey Touchpoints

```
┌─────────────────────────────────────────────────────────────────┐
│                    VIBES in User Journey                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Onboarding                                                     │
│   ├── "Welcome! Here's 50 VIBES to get started"                  │
│   └── Complete profile → +100 VIBES                              │
│                                                                  │
│   Daily Practice                                                 │
│   ├── Log practice → +5-15 VIBES (with multipliers)             │
│   ├── View affirmation → +2 VIBES                                │
│   └── Add reflection → +3 VIBES                                  │
│                                                                  │
│   Weekly Engagement                                              │
│   ├── 7-day streak reached → +100 VIBES                         │
│   ├── Refer a friend → +100 VIBES                                │
│   └── Submit feedback → +10-50 VIBES                             │
│                                                                  │
│   Monthly Goals                                                  │
│   ├── 30-day streak → +500 VIBES                                 │
│   ├── 100 practices → +1,000 VIBES                               │
│   └── Stake 5,000 → Unlock premium                              │
│                                                                  │
│   Yearly Milestones                                              │
│   ├── 365-day streak → +5,000 VIBES                              │
│   └── Founding member → Soul-bound NFT                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Soul-Bound Tokens (SBTs)

Achievement milestones mint non-transferable NFTs as permanent recognition:

### Achievement SBTs

| Token | Requirement | Rarity |
|-------|-------------|--------|
| First Steps | First practice logged | Common |
| Week Warrior | 7-day streak | Common |
| Month Master | 30-day streak | Uncommon |
| Century Club | 100 practices | Uncommon |
| Practice Legend | 365-day streak | Rare |
| Founding Member | Early adopter | Legendary |
| Community Builder | Create community | Rare |
| Impact Maker | 100 votes cast | Uncommon |

### SBT Metadata

```json
{
  "name": "Month Master",
  "description": "Completed 30 consecutive days of conscious practice",
  "image": "ipfs://...",
  "attributes": [
    { "trait_type": "Achievement", "value": "30-Day Streak" },
    { "trait_type": "Rarity", "value": "Uncommon" },
    { "trait_type": "Earned", "value": "2024-12-15" },
    { "trait_type": "Streak Count", "value": 30 }
  ],
  "soulbound": true
}
```

### Display

SBTs appear on user profiles as achievement badges, visible to connections but non-transferable.

---

## Economic Model

### Value Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      VIBES Value Flow                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   INFLOWS (VIBES Creation)                                       │
│   ├── User Rewards Pool emission                                │
│   └── Community Treasury grants                                  │
│                                                                  │
│         │                                                        │
│         ▼                                                        │
│   ┌─────────────────────────────┐                               │
│   │   User VIBES Balances        │                               │
│   └─────────────────────────────┘                               │
│         │                                                        │
│         ▼                                                        │
│   OUTFLOWS (VIBES Usage)                                         │
│   ├── Staking (locked, not spent)                               │
│   ├── Business Perks (burned)                                   │
│   ├── Community Dues (to treasury)                              │
│   ├── Tipping (transferred)                                     │
│   └── Premium Features (burned or treasury)                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Token Sinks (Deflationary)

VIBES is removed from circulation through:

1. **Perk Redemption**: VIBES spent on business perks is burned
2. **Premium Unlock**: One-time burns for certain features
3. **Expired Stakes**: Penalties for early unstaking

### Token Sinks Projection

| Sink | Annual VIBES Burned | % of Emission |
|------|-------------------|---------------|
| Perk Redemption | 10-20M | 10-20% |
| Premium Features | 5-10M | 5-10% |
| Stake Penalties | 1-5M | 1-5% |
| **Total** | **16-35M** | **16-35%** |

---

## Anti-Gaming Measures

### Rate Limits

| Action | Limit | Period |
|--------|-------|--------|
| Practices Logged | 10 | Daily |
| Affirmations | 1 | Daily |
| Referrals | 10 | Weekly |
| Community Posts | 5 | Daily |

### Verification Requirements

| Reward Type | Verification |
|-------------|--------------|
| Practice | Duration tracked |
| Referral | Email verified, 7-day active |
| Feedback | Quality scoring |
| Achievement | On-chain proof |

### Suspicious Activity Detection

```typescript
const GAMING_SIGNALS = {
  rapidPractices: 'Multiple practices in < 1 minute',
  impossibleStreaks: 'Timezone manipulation detected',
  selfReferral: 'Same device/IP for referrer and referred',
  botPatterns: 'Non-human interaction patterns',
};

async function validateReward(userId: string, action: string): Promise<boolean> {
  const signals = await detectGamingSignals(userId, action);
  
  if (signals.length > 0) {
    logger.warn('Gaming signals detected', { userId, signals });
    await flagForReview(userId, signals);
    return false;
  }
  
  return true;
}
```

---

## Mira Integration

### VIBES Context for Mira

```typescript
interface MiraVibeContext {
  balance: {
    available: number;
    staked: number;
    pending: number;
    lifetime: number;
  };
  multipliers: {
    streak: number;
    membership: number;
    total: number;
  };
  recentRewards: VibeReward[];
  nextMilestone: {
    name: string;
    vibeReward: number;
    progress: number;
    daysToGo: number;
  };
}
```

### Mira Prompts for VIBES

**Reward Celebration**:
> "Your 7-day streak just earned you **25 VIBES**! That's 2.5x what you'd earn without the streak bonus. Keep it up—7 more days unlocks 2x!"

**Balance Check**:
> "You have **2,340 VIBES** available. At your current pace, you'll hit 5,000 for premium unlock in about 3 weeks."

**Staking Suggestion**:
> "You're 60% of the way to staking 5,000 VIBES for free Regenerative membership. That saves $4/month forever!"

**Perk Recommendation**:
> "This yoga studio offers 20% off for 200 VIBES. You've earned that in 2 weeks of practice!"

**Milestone Alert**:
> "You're 3 days away from your 30-day streak! That's a **500 VIBES bonus** and the Month Master badge."

---

## Treasury Management

### Community Treasury

The 200M VIBES community allocation is governed by token holders:

```
┌─────────────────────────────────────────────────────────────────┐
│                   Community Treasury                             │
│                      200M VIBES                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Allocation:                                                    │
│   ├── Grants Program (50%)         100M VIBES                    │
│   │   ├── Community initiatives                                  │
│   │   ├── Event funding                                          │
│   │   └── Creator rewards                                        │
│   │                                                              │
│   ├── Governance Operations (30%)   60M VIBES                    │
│   │   ├── Proposal rewards                                       │
│   │   ├── Voter incentives                                       │
│   │   └── Infrastructure                                         │
│   │                                                              │
│   └── Reserve (20%)                 40M VIBES                    │
│       ├── Emergency fund                                         │
│       └── Future needs                                           │
│                                                                  │
│   Governance:                                                    │
│   ├── 3-of-5 multisig for operations                            │
│   └── Full community vote for major allocations                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Grant Categories

| Category | Budget | Purpose |
|----------|--------|---------|
| Events | 20M | Fund community events |
| Creators | 30M | Reward content creators |
| Causes | 25M | Social impact initiatives |
| Innovation | 25M | New features and tools |

---

## Implementation Phases

### Phase 1: Foundation (Month 1-2)

- [ ] Deploy VIBES token contract on Base
- [ ] Implement basic reward distribution
- [ ] Create balance tracking system
- [ ] Integrate with practice logging
- [ ] Build reward display UI

### Phase 2: Engagement (Month 3-4)

- [ ] Launch streak multipliers
- [ ] Implement achievement SBTs
- [ ] Add membership multipliers
- [ ] Create referral rewards
- [ ] Build reward history UI

### Phase 3: Utility (Month 5-6)

- [ ] Launch staking for premium
- [ ] Implement governance voting
- [ ] Add perk redemption
- [ ] Create community treasury
- [ ] Build governance UI

### Phase 4: Expansion (Month 7+)

- [ ] Multi-chain deployment (Solana, Polygon)
- [ ] Advanced governance features
- [ ] Creator economy tools
- [ ] Third-party integrations

---

## Success Metrics

### Adoption Metrics

| Metric | Target (Year 1) |
|--------|-----------------|
| Users with VIBES | 100% of active users |
| Avg VIBES balance | 1,000+ VIBES |
| Users earning weekly | 70%+ |
| Stakes active | 20%+ of users |

### Engagement Metrics

| Metric | Target |
|--------|--------|
| Practice-to-reward conversion | 95%+ |
| Reward claim rate | 99%+ |
| Streak multiplier users | 50%+ |
| Achievement NFT claims | 80%+ |

### Economic Metrics

| Metric | Target |
|--------|--------|
| Monthly VIBES distributed | Within budget |
| Burn rate | 15-30% of emission |
| Treasury utilization | 50-70% |
| Governance participation | 30%+ of staked |

---

## Risk Mitigation

### Economic Risks

| Risk | Mitigation |
|------|------------|
| Inflation | Decreasing emission schedule |
| Gaming | Anti-gaming measures |
| Concentration | Vote weight caps |
| Volatility | Utility-focused design |

### Technical Risks

| Risk | Mitigation |
|------|------------|
| Contract bugs | Multiple audits |
| Key compromise | HSM + multisig |
| Chain issues | Multi-chain support |

### Regulatory Risks

| Risk | Mitigation |
|------|------------|
| Securities | Utility token design |
| AML | KYC for large transfers |
| Tax | Clear documentation |

---

**Related Documents**:
- [`epic-1a-crypto.md`](../epics/epic-1a-crypto.md) - Full crypto epic
- [`crypto-router.md`](crypto-router.md) - Technical architecture
- [`epic-08-monetization.md`](../epics/epic-08-monetization.md) - Monetization strategy

