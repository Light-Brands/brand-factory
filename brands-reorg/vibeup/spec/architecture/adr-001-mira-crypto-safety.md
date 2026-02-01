# ADR-001: Mira Crypto Safety Architecture

**Status**: Accepted  
**Date**: December 2024  
**Decision Makers**: Core Engineering Team

---

## Context

VIBEUP's AI companion Mira provides intelligent assistance throughout the platform, including awareness of users' crypto wallets, balances, and transaction history. However, giving an AI system the ability to execute financial transactions poses significant security and trust risks.

### Problem Statement

How do we allow Mira to provide helpful crypto-related assistance while ensuring she can never autonomously execute or authorize financial transactions?

### Constraints

1. Mira must be able to display balances, explain rewards, and suggest actions
2. Users must be able to quickly initiate transactions without excessive friction
3. No transaction should ever execute without explicit human authorization
4. The solution must be architecturally enforced, not just policy-based
5. UX should remain seamless for legitimate human users

---

## Decision

Implement a **three-layer service architecture** with strict boundaries:

### 1. Read-Only Layer (Mira Access)

**Service**: `CryptoQueryService`  
**Module**: `@/lib/crypto/mira-safe`

Mira imports ONLY from this restricted module, which exports:
- Balance queries
- Transaction history
- Reward history  
- Handle resolution
- Transaction estimates (preview only)

This layer has NO methods that modify blockchain state.

### 2. Verification Layer (Human Required)

**Service**: `TransactionVerificationService`  
**Access**: UI/API only, blocked from Mira

Handles out-of-band verification:
- Generate 6-digit PIN
- Send via SMS or email
- Validate PIN input
- Issue single-use verification token

The PIN travels through channels Mira cannot access (user's phone/email).

### 3. Execution Layer (Token Required)

**Service**: `CryptoExecutionService`  
**Access**: Requires verification token from Layer 2

All transaction methods require:
- Valid verification token
- Token must match transaction parameters exactly
- Token must not be expired (30-second TTL)
- Request IP must match token IP
- Single use only

---

## Verification Flow

```
User in Chat: "Can you send $50 to @alex?"

Mira Response: "I can help you with that! You have $127 USDC available.
               To send money, tap the Pay button on Alex's profile or
               use the Send button in your wallet."
               
               [Note: Mira SUGGESTS but cannot EXECUTE]

User: [Taps Pay button in UI]

System: [Sends PIN via SMS: "Your VIBEUP PIN: 847291"]

User: [Enters PIN in app]

System: [Validates PIN, issues token with 30-second TTL]

System: [Executes transaction with valid token]

Result: "Sent $50 to @alex ✓"
```

---

## Risk-Based Verification Tiers

To balance security with UX:

| Transaction | Amount | Method |
|------------|--------|--------|
| Send | < $10 | Biometric only |
| Send | $10-$100 | Biometric + in-app PIN |
| Send | > $100 | Biometric + SMS/email PIN |
| Stake | Any | SMS/email PIN |
| Unstake | Any | SMS/email PIN |

---

## Alternatives Considered

### Alternative 1: Policy-Only Restriction

Simply configure Mira's prompts to not execute transactions.

**Rejected because**: Prompt injection or system errors could bypass policy. Architectural enforcement is stronger than policy.

### Alternative 2: Separate Mira from Crypto Entirely

Don't give Mira any crypto awareness.

**Rejected because**: Significantly degrades user experience. Users expect Mira to understand their complete context including financial state.

### Alternative 3: In-Band Confirmation

Have Mira ask "Are you sure?" before executing.

**Rejected because**: An attacker could potentially manipulate conversation context. Out-of-band verification (SMS/email) cannot be influenced by the chat session.

### Alternative 4: Hardware Key Requirement

Require YubiKey or similar for all transactions.

**Rejected because**: Too much friction for small transactions. Most users don't have hardware keys.

---

## Consequences

### Positive

1. **Strong Security**: Architectural boundary makes Mira-initiated transactions impossible
2. **Audit Trail**: All verification attempts logged for security monitoring
3. **User Trust**: Users can trust Mira with context without fearing unauthorized actions
4. **Flexible UX**: Risk-based tiers allow fast small transactions while protecting large ones
5. **Future-Proof**: Architecture supports adding new AI capabilities without security regression

### Negative

1. **Development Complexity**: Three services instead of one
2. **User Friction**: Large transactions require SMS/email verification
3. **SMS Costs**: Twilio charges per message
4. **Offline Limitation**: Users without phone/email access cannot transact

### Mitigations

- **Complexity**: Clear documentation and TypeScript types enforce correct usage
- **Friction**: Biometric-only for small transactions minimizes impact
- **Costs**: Only high-value transactions require SMS; bulk pricing available
- **Offline**: Email option provides fallback; future: app-based TOTP

---

## Implementation

### Files Created

| File | Purpose |
|------|---------|
| `lib/crypto/types/verification.ts` | Verification token types |
| `lib/crypto/services/CryptoQueryService.ts` | Read-only service (Mira safe) |
| `lib/crypto/services/CryptoExecutionService.ts` | Protected execution service |
| `lib/crypto/services/TransactionVerificationService.ts` | PIN generation/validation |
| `lib/crypto/mira-safe.ts` | Restricted module for Mira imports |
| `lib/crypto/migrations/001_verification_tokens.sql` | Database schema |
| `app/api/crypto/verify/route.ts` | Verification API endpoints |

### Enforcement Mechanisms

1. **Module Boundary**: Mira imports from `mira-safe.ts` which only exports read-only service
2. **TypeScript**: Execution service not exported to Mira's module scope
3. **Token Validation**: Every execution method validates token before proceeding
4. **IP Binding**: Tokens bound to request IP to prevent theft
5. **TTL**: 30-second token expiry prevents delayed replay

---

## Related Documents

- [`crypto-router.md`](crypto-router.md) - Overall crypto architecture
- [`epic-1a-crypto.md`](../epics/epic-1a-crypto.md) - Crypto epic with security requirements
- [`epic-01-mira.md`](../epics/epic-01-mira.md) - Mira crypto boundaries

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | Engineering | Initial decision |

