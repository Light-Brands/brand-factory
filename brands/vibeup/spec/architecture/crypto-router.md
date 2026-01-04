# Crypto Router Architecture

**Version**: 1.1.0  
**Last Updated**: December 2024

---

## Overview

The Crypto Router is VIBEUP's unified financial layer, providing blockchain abstraction for all payment and token operations. It mirrors the AI Router pattern—a single service interface that routes requests to appropriate chain adapters.

### Design Principles

1. **Abstraction**: Application code never touches blockchain directly
2. **Multi-Chain**: Support Base (primary), Solana, and Polygon
3. **Hybrid Custody**: Managed wallets for simplicity, external wallet support for power users
4. **Resilience**: Graceful degradation if a chain is unavailable
5. **Observability**: Full transaction tracing and analytics
6. **Mira Safety**: AI cannot execute transactions—all execution requires human verification

---

## Mira Safety Architecture

### Critical Security Boundary

Mira (VIBEUP's AI companion) can interact with crypto components for informational purposes but **CANNOT execute any financial transactions**. This is enforced through architectural separation:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         MIRA AI LAYER (READ-ONLY)                           │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      CryptoQueryService                              │   │
│  │  • Get balances          • Get transaction history                   │   │
│  │  • Resolve handles       • Get reward history                        │   │
│  │  • Estimate transactions • Get multipliers                           │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                 ↓ READ ONLY                                 │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                        [BLOCKED] ✕ Mira cannot access
                                  │
┌─────────────────────────────────────────────────────────────────────────────┐
│                      VERIFICATION LAYER (Human Required)                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                TransactionVerificationService                        │   │
│  │  • Generate 6-digit PIN        • Send via SMS/email                  │   │
│  │  • Validate PIN                • Issue single-use token              │   │
│  │  • Rate limiting               • IP/session binding                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                 ↓ REQUIRES TOKEN                            │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
┌─────────────────────────────────────────────────────────────────────────────┐
│                      EXECUTION LAYER (Token Required)                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    CryptoExecutionService                            │   │
│  │  • Send payments           • Stake/unstake VIBES                     │   │
│  │  • Create payment requests • All require verification token          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Service Separation

| Service | Mira Access | Purpose |
|---------|-------------|---------|
| `CryptoQueryService` | ✅ ALLOWED | Read-only queries, estimates |
| `CryptoExecutionService` | ❌ BLOCKED | Transaction execution |
| `TransactionVerificationService` | ❌ BLOCKED | PIN generation/validation |

### Verification Tiers

| Transaction Type | Amount | Verification Required |
|-----------------|--------|----------------------|
| Send USDC/VIBES | < $10 | Biometric only |
| Send USDC/VIBES | $10 - $100 | Biometric + in-app PIN |
| Send USDC/VIBES | > $100 | Biometric + SMS/email PIN |
| Stake VIBES | Any amount | SMS/email PIN |
| Unstake VIBES | Any amount | SMS/email PIN |
| Payment Request | Any amount | In-app PIN only |

### Why Mira Cannot Execute Transactions

1. **Architectural Boundary**: Mira imports only `CryptoQueryService` from `lib/crypto/mira-safe.ts`
2. **Out-of-Band Verification**: PINs sent via SMS/email—channels Mira cannot access
3. **Token Binding**: Verification tokens are bound to IP, user agent, and specific parameters
4. **Single-Use Tokens**: Tokens expire in 30 seconds and can only be used once
5. **Audit Trail**: All verification attempts are logged for security monitoring

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Application Layer                                  │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐    │
│  │  Profile  │ │  Practice │ │  Message  │ │  Business │ │  Community│    │
│  │  Service  │ │  Service  │ │  Service  │ │  Service  │ │  Service  │    │
│  └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘    │
│        │             │             │             │             │           │
│        └─────────────┼─────────────┼─────────────┼─────────────┘           │
│                      │             │             │                         │
│                      ▼             ▼             ▼                         │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │                      CryptoRouterService                             │  │
│  │  ┌──────────────┬──────────────┬──────────────┬──────────────┐      │  │
│  │  │   Wallet     │   Transfer   │   Reward     │   Staking    │      │  │
│  │  │   Manager    │   Engine     │   Engine     │   Manager    │      │  │
│  │  └──────────────┴──────────────┴──────────────┴──────────────┘      │  │
│  │                              │                                       │  │
│  │  ┌──────────────────────────────────────────────────────────┐       │  │
│  │  │                  Handle Resolver                          │       │  │
│  │  │    @sarah → 0x1234...abcd (Base)                         │       │  │
│  │  └──────────────────────────────────────────────────────────┘       │  │
│  └──────────────────────────────────┬──────────────────────────────────┘  │
└─────────────────────────────────────┼─────────────────────────────────────┘
                                      │
┌─────────────────────────────────────┼─────────────────────────────────────┐
│                         Chain Adapter Layer                                │
│        ┌────────────────────┬───────┴───────┬────────────────────┐        │
│        ▼                    ▼               ▼                    ▼        │
│  ┌──────────────┐    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ Base Adapter │    │Solana Adapter│  │Polygon Adapt │  │Future Chains │ │
│  │  (Primary)   │    │  (Optional)  │  │  (Optional)  │  │              │ │
│  └──────┬───────┘    └──────┬───────┘  └──────┬───────┘  └──────────────┘ │
│         │                   │                  │                          │
│         ▼                   ▼                  ▼                          │
│  ┌──────────────┐    ┌──────────────┐  ┌──────────────┐                   │
│  │  Viem/Ethers │    │   @solana    │  │  Viem/Ethers │                   │
│  │    Client    │    │   web3.js    │  │    Client    │                   │
│  └──────────────┘    └──────────────┘  └──────────────┘                   │
└───────────────────────────────────────────────────────────────────────────┘
                                      │
┌─────────────────────────────────────┼─────────────────────────────────────┐
│                           Blockchain Layer                                 │
│        ┌────────────────────┬───────┴───────┬────────────────────┐        │
│        ▼                    ▼               ▼                    ▼        │
│  ┌──────────────┐    ┌──────────────┐  ┌──────────────┐                   │
│  │   Base L2    │    │    Solana    │  │   Polygon    │                   │
│  │  (Primary)   │    │   Mainnet    │  │    PoS       │                   │
│  ├──────────────┤    ├──────────────┤  ├──────────────┤                   │
│  │  USDC Token  │    │  USDC Token  │  │  USDC Token  │                   │
│  │  VIBES Token  │    │  VIBES Token  │  │  VIBES Token  │                   │
│  │  SBT Contract│    │              │  │              │                   │
│  └──────────────┘    └──────────────┘  └──────────────┘                   │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## Request Flow

### Payment Request Flow

```mermaid
sequenceDiagram
    participant User
    participant App as Application
    participant Router as CryptoRouter
    participant Wallet as WalletManager
    participant Transfer as TransferEngine
    participant Adapter as ChainAdapter
    participant Chain as Blockchain
    
    User->>App: Send $10 to @alex
    App->>Router: sendPayment(toHandle, amount)
    
    Router->>Wallet: resolveHandle("alex")
    Wallet-->>Router: { address, chain }
    
    Router->>Wallet: getWallet(fromUserId)
    Wallet-->>Router: senderWallet
    
    Router->>Transfer: validateTransfer(from, to, amount)
    Transfer->>Transfer: checkBalance()
    Transfer->>Transfer: checkLimits()
    Transfer-->>Router: valid
    
    Router->>Adapter: prepareTransaction(from, to, amount)
    Adapter-->>Router: unsignedTx
    
    Router->>Adapter: signAndSend(unsignedTx)
    Adapter->>Chain: broadcastTx
    Chain-->>Adapter: txHash
    
    Adapter->>Chain: waitForConfirmation()
    Chain-->>Adapter: receipt
    
    Adapter-->>Router: TransferResult
    Router->>Router: recordTransaction()
    Router-->>App: { success, txHash, amount }
    App-->>User: "Sent $10 to @alex ✓"
```

### VIBES Reward Flow

```mermaid
sequenceDiagram
    participant Practice as PracticeService
    participant Router as CryptoRouter
    participant Reward as RewardEngine
    participant DB as Database
    participant Balance as VibeBalance
    
    Practice->>Router: awardVibe(userId, 'practice_logged', 5)
    
    Router->>Reward: calculateMultiplier(userId)
    Reward->>DB: getStreak(userId)
    DB-->>Reward: 21 days
    Reward->>DB: getMembership(userId)
    DB-->>Reward: regenerative
    Reward-->>Router: multiplier = 4.0 (2.0 streak × 2.0 membership)
    
    Router->>DB: insertVibeReward(userId, 20, 'practice_logged')
    
    Router->>Balance: addAvailable(userId, 20)
    Balance->>DB: UPDATE vibe_token_balances
    
    Router-->>Practice: { amount: 20, multiplier: 4.0 }
```

---

## Core Components

### 1. CryptoRouterService

The main entry point for all crypto operations.

```typescript
interface CryptoRouterService {
  // Wallet Operations
  createWallet(userId: string, handle: string): Promise<UserWallet>;
  resolveHandle(handle: string): Promise<HandleResolution | null>;
  connectExternalWallet(userId: string, address: string, signature: string): Promise<void>;
  
  // Transfer Operations
  sendPayment(request: TransferRequest): Promise<TransferResult>;
  createPaymentRequest(request: PaymentRequestInput): Promise<PaymentRequest>;
  getTransactionHistory(userId: string, options: QueryOptions): Promise<Transaction[]>;
  
  // VIBES Operations
  awardVibe(userId: string, source: VibeSource, amount: number): Promise<VibeReward>;
  getVibeBalance(userId: string): Promise<VibeBalance>;
  stakeVibe(userId: string, amount: number, tier: StakingTier): Promise<StakePosition>;
  
  // Balance Queries
  getUsdcBalance(userId: string): Promise<number>;
  getCryptoContext(userId: string): Promise<MiraCryptoContext>;
}
```

### 2. WalletManager

Handles wallet creation, storage, and handle resolution.

```typescript
interface WalletManager {
  // Creation
  create(params: CreateWalletParams): Promise<UserWallet>;
  
  // Lookup
  getByUserId(userId: string): Promise<UserWallet | null>;
  getByHandle(handle: string): Promise<UserWallet | null>;
  getUserIdByHandle(handle: string): Promise<string | null>;
  
  // External Wallet
  connectExternal(userId: string, address: string, provider: string): Promise<void>;
  disconnectExternal(userId: string): Promise<void>;
  
  // Validation
  isHandleAvailable(handle: string): Promise<boolean>;
  validateHandleFormat(handle: string): boolean;
}

// Handle format validation
const HANDLE_REGEX = /^[a-z0-9_]{3,30}$/;

// Reserved handles (cannot be claimed)
const RESERVED_HANDLES = [
  'admin', 'vibeup', 'mira', 'support', 'help',
  'settings', 'wallet', 'profile', 'api', 'app',
];
```

### 3. TransferEngine

Executes transfers with validation and retry logic.

```typescript
interface TransferEngine {
  // Execution
  execute(transfer: TransferParams): Promise<TransferResult>;
  
  // Validation
  validateTransfer(transfer: TransferParams): Promise<ValidationResult>;
  checkBalance(address: string, amount: number): Promise<boolean>;
  checkDailyLimit(userId: string, amount: number): Promise<boolean>;
  
  // Retry
  retryFailed(transactionId: string): Promise<TransferResult>;
  
  // Queries
  getPendingTransfers(userId: string): Promise<Transfer[]>;
  getTransferStatus(txHash: string): Promise<TransferStatus>;
}

// Transfer limits
const TRANSFER_LIMITS = {
  minAmount: 0.01,           // $0.01 minimum
  maxSingleTransfer: 10000,  // $10,000 per transaction
  dailyLimitUnverified: 1000, // $1,000/day without KYC
  dailyLimitVerified: 50000,  // $50,000/day with KYC
};
```

### 4. RewardEngine

Calculates and distributes VIBES rewards.

```typescript
interface RewardEngine {
  // Award
  calculateReward(userId: string, source: VibeSource, baseAmount: number): Promise<CalculatedReward>;
  distributeReward(userId: string, reward: CalculatedReward): Promise<VibeReward>;
  
  // Multipliers
  getStreakMultiplier(currentStreak: number): number;
  getMembershipMultiplier(tier: MembershipTier): number;
  getActiveMultipliers(userId: string): Promise<MultiplierBreakdown>;
  
  // Achievement NFTs
  checkAchievements(userId: string): Promise<Achievement[]>;
  mintAchievementNFT(userId: string, achievement: Achievement): Promise<SoulBoundToken>;
}

// Multiplier calculation
function calculateTotalMultiplier(
  streakDays: number,
  membershipTier: MembershipTier
): number {
  const streakMultiplier = 
    streakDays >= 90 ? 3.0 :
    streakDays >= 30 ? 2.5 :
    streakDays >= 21 ? 2.0 :
    streakDays >= 7 ? 1.5 : 1.0;
  
  const membershipMultiplier = 
    membershipTier === 'regenerative' ? 2.0 : 1.0;
  
  return streakMultiplier * membershipMultiplier;
}
```

### 5. StakingManager

Handles VIBES staking for premium benefits.

```typescript
interface StakingManager {
  // Staking
  stake(userId: string, amount: number, tier: StakingTier): Promise<StakePosition>;
  unstake(stakeId: string): Promise<UnstakeResult>;
  
  // Queries
  getActiveStakes(userId: string): Promise<StakePosition[]>;
  getStakingBenefits(userId: string): Promise<StakingBenefit[]>;
  
  // Benefits
  hasStakingBenefit(userId: string, benefit: string): Promise<boolean>;
  applyStakingBenefits(userId: string): Promise<void>;
}

// Staking tiers
const STAKING_TIERS = {
  free_regenerative: {
    stakeRequired: 5000,
    lockDays: 30,
    benefits: ['all_regenerative_features'],
  },
  governance_power: {
    stakeRequired: 10000,
    lockDays: 90,
    benefits: ['2x_vote_weight', 'feature_proposals'],
  },
  founder_status: {
    stakeRequired: 50000,
    lockDays: 365,
    benefits: ['lifetime_premium', 'founding_member_badge'],
  },
};
```

---

## Chain Adapters

### ChainAdapter Interface

All chain adapters implement this interface:

```typescript
interface ChainAdapter {
  // Identity
  chainId: string;
  chainName: string;
  isHealthy: boolean;
  
  // Wallet Operations
  createWallet(): Promise<{ address: string; encryptedKey: string }>;
  getAddress(encryptedKey: string): string;
  
  // Balance
  getUsdcBalance(address: string): Promise<number>;
  getVibeBalance(address: string): Promise<number>;
  
  // Transfers
  prepareTransfer(params: TransferParams): Promise<UnsignedTransaction>;
  signTransaction(tx: UnsignedTransaction, key: string): Promise<SignedTransaction>;
  broadcastTransaction(signedTx: SignedTransaction): Promise<string>;
  waitForConfirmation(txHash: string): Promise<TransactionReceipt>;
  
  // NFTs (for SBTs)
  mintSBT?(to: string, tokenType: string, metadata: object): Promise<string>;
  
  // Health
  ping(): Promise<boolean>;
  getBlockHeight(): Promise<number>;
}
```

### Base L2 Adapter (Primary)

```typescript
class BaseAdapter implements ChainAdapter {
  chainId = 'base';
  chainName = 'Base';
  
  private client: PublicClient;
  private walletClient: WalletClient;
  
  private contracts = {
    usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // Base USDC
    vibe: process.env.VIBES_TOKEN_ADDRESS!,
    sbt: process.env.SBT_CONTRACT_ADDRESS!,
  };
  
  constructor() {
    this.client = createPublicClient({
      chain: base,
      transport: http(process.env.BASE_RPC_URL),
    });
  }
  
  async createWallet(): Promise<{ address: string; encryptedKey: string }> {
    const wallet = generatePrivateKey();
    const account = privateKeyToAccount(wallet);
    
    // Encrypt private key with KMS
    const encryptedKey = await this.encryptWithKMS(wallet);
    
    return {
      address: account.address,
      encryptedKey,
    };
  }
  
  async getUsdcBalance(address: string): Promise<number> {
    const balance = await this.client.readContract({
      address: this.contracts.usdc,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [address],
    });
    
    // USDC has 6 decimals
    return Number(balance) / 1_000_000;
  }
  
  async prepareTransfer(params: TransferParams): Promise<UnsignedTransaction> {
    const { from, to, amount, currency } = params;
    
    const contract = currency === 'USDC' 
      ? this.contracts.usdc 
      : this.contracts.vibe;
    
    const decimals = currency === 'USDC' ? 6 : 18;
    const value = BigInt(Math.floor(amount * (10 ** decimals)));
    
    return {
      to: contract,
      data: encodeFunctionData({
        abi: erc20Abi,
        functionName: 'transfer',
        args: [to, value],
      }),
      from,
      chain: 'base',
    };
  }
  
  async signTransaction(
    tx: UnsignedTransaction, 
    encryptedKey: string
  ): Promise<SignedTransaction> {
    // Decrypt key from KMS
    const privateKey = await this.decryptFromKMS(encryptedKey);
    const account = privateKeyToAccount(privateKey);
    
    const signedTx = await this.walletClient.signTransaction({
      account,
      ...tx,
    });
    
    // Immediately clear private key from memory
    privateKey.fill(0);
    
    return signedTx;
  }
  
  async broadcastTransaction(signedTx: SignedTransaction): Promise<string> {
    const hash = await this.client.sendRawTransaction({
      serializedTransaction: signedTx,
    });
    return hash;
  }
  
  async waitForConfirmation(txHash: string): Promise<TransactionReceipt> {
    const receipt = await this.client.waitForTransactionReceipt({
      hash: txHash,
      confirmations: 2, // Wait for 2 confirmations
      timeout: 60_000,  // 60 second timeout
    });
    
    return {
      txHash: receipt.transactionHash,
      blockNumber: Number(receipt.blockNumber),
      gasUsed: Number(receipt.gasUsed),
      status: receipt.status === 'success' ? 'confirmed' : 'failed',
    };
  }
  
  // Encrypt private key using AWS KMS
  private async encryptWithKMS(key: string): Promise<string> {
    const kms = new KMSClient({ region: process.env.AWS_REGION });
    const result = await kms.send(new EncryptCommand({
      KeyId: process.env.KMS_KEY_ID,
      Plaintext: Buffer.from(key),
    }));
    return Buffer.from(result.CiphertextBlob!).toString('base64');
  }
  
  private async decryptFromKMS(encrypted: string): Promise<string> {
    const kms = new KMSClient({ region: process.env.AWS_REGION });
    const result = await kms.send(new DecryptCommand({
      CiphertextBlob: Buffer.from(encrypted, 'base64'),
    }));
    return Buffer.from(result.Plaintext!).toString();
  }
}
```

### Solana Adapter

```typescript
class SolanaAdapter implements ChainAdapter {
  chainId = 'solana';
  chainName = 'Solana';
  
  private connection: Connection;
  
  private tokens = {
    usdc: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), // USDC
    vibe: new PublicKey(process.env.SOLANA_VIBES_TOKEN!),
  };
  
  constructor() {
    this.connection = new Connection(process.env.SOLANA_RPC_URL!);
  }
  
  async createWallet(): Promise<{ address: string; encryptedKey: string }> {
    const keypair = Keypair.generate();
    const encryptedKey = await this.encryptWithKMS(
      Buffer.from(keypair.secretKey).toString('base64')
    );
    
    return {
      address: keypair.publicKey.toBase58(),
      encryptedKey,
    };
  }
  
  async getUsdcBalance(address: string): Promise<number> {
    const pubkey = new PublicKey(address);
    const tokenAccounts = await this.connection.getTokenAccountsByOwner(
      pubkey,
      { mint: this.tokens.usdc }
    );
    
    if (tokenAccounts.value.length === 0) return 0;
    
    const balance = await this.connection.getTokenAccountBalance(
      tokenAccounts.value[0].pubkey
    );
    
    return Number(balance.value.uiAmount);
  }
  
  // ... similar implementation for other methods
}
```

---

## Database Schema

### Entity Relationship Diagram

```mermaid
erDiagram
    profiles ||--|| user_wallets : has
    profiles ||--|| vibe_token_balances : has
    profiles ||--o{ crypto_transactions : sends
    profiles ||--o{ crypto_transactions : receives
    profiles ||--o{ vibe_rewards : earns
    profiles ||--o{ stake_positions : stakes
    profiles ||--o{ soul_bound_tokens : owns
    profiles ||--o{ payment_requests : requests
    profiles ||--o{ payment_requests : pays
    
    user_wallets {
        uuid id PK
        uuid user_id FK
        text handle UK
        text address_base
        text address_solana
        text address_polygon
        text custody_type
        text encrypted_key_material
    }
    
    crypto_transactions {
        uuid id PK
        uuid from_user_id FK
        uuid to_user_id FK
        text from_handle
        text to_handle
        numeric amount
        text currency
        text chain
        text tx_hash
        text status
    }
    
    vibe_token_balances {
        uuid id PK
        uuid user_id FK
        numeric available
        numeric staked
        numeric pending
        numeric lifetime
    }
    
    vibe_rewards {
        uuid id PK
        uuid user_id FK
        numeric amount
        text source
        numeric multiplier
        text status
    }
    
    stake_positions {
        uuid id PK
        uuid user_id FK
        numeric amount
        text tier
        timestamptz locked_until
        boolean is_active
    }
    
    payment_requests {
        uuid id PK
        uuid requester_user_id FK
        uuid payer_user_id FK
        numeric amount
        text description
        text status
        timestamptz expires_at
    }
    
    soul_bound_tokens {
        uuid id PK
        uuid user_id FK
        text token_type
        text token_name
        text chain
        bigint token_id
    }
    
    communities ||--|| community_treasuries : has
    
    community_treasuries {
        uuid id PK
        uuid community_id FK
        text wallet_address
        numeric balance_usdc
        numeric balance_vibe
    }
```

---

## Security Architecture

### Key Management

```
┌─────────────────────────────────────────────────────────────────┐
│                       Key Management Flow                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   User Signup                                                    │
│        │                                                         │
│        ▼                                                         │
│   ┌──────────────┐                                              │
│   │ Generate Key │                                              │
│   │  (in memory) │                                              │
│   └──────┬───────┘                                              │
│          │                                                       │
│          ▼                                                       │
│   ┌──────────────┐     ┌──────────────┐                         │
│   │  Encrypt Key │────▶│   AWS KMS    │                         │
│   │              │     │  (HSM-backed)│                         │
│   └──────┬───────┘     └──────────────┘                         │
│          │                                                       │
│          ▼                                                       │
│   ┌──────────────┐                                              │
│   │ Store Cipher │                                              │
│   │ in Database  │                                              │
│   └──────────────┘                                              │
│                                                                  │
│   Transaction Signing                                            │
│        │                                                         │
│        ▼                                                         │
│   ┌──────────────┐     ┌──────────────┐                         │
│   │  Fetch Cipher│────▶│   AWS KMS    │                         │
│   │  from DB     │     │   Decrypt    │                         │
│   └──────────────┘     └──────┬───────┘                         │
│                               │                                  │
│                               ▼                                  │
│                        ┌──────────────┐                         │
│                        │  Sign Tx     │                         │
│                        │  (in memory) │                         │
│                        └──────┬───────┘                         │
│                               │                                  │
│                               ▼                                  │
│                        ┌──────────────┐                         │
│                        │  Clear Key   │                         │
│                        │  from Memory │                         │
│                        └──────────────┘                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Transaction Security

```typescript
// Rate limiting
const RATE_LIMITS = {
  transfers: {
    perMinute: 10,
    perHour: 50,
    perDay: 200,
  },
  balanceChecks: {
    perMinute: 60,
    perHour: 500,
  },
};

// Amount limits
const AMOUNT_LIMITS = {
  minTransfer: 0.01,
  maxTransfer: 10000,
  dailyUnverified: 1000,
  dailyVerified: 50000,
};

// Suspicious activity detection
interface SuspiciousActivityCheck {
  rapidSuccessiveTransfers: boolean;  // >5 in 1 minute
  unusuallyLargeAmount: boolean;       // >10x average
  newRecipient: boolean;               // Never sent to before
  outsideNormalHours: boolean;         // Based on user pattern
}

async function checkSuspiciousActivity(
  userId: string,
  transfer: TransferParams
): Promise<SuspiciousActivityCheck> {
  // Implementation with Sentry alerting
}
```

---

## Monitoring & Observability

### Key Metrics

```typescript
// Prometheus-style metrics
const CRYPTO_METRICS = {
  // Counters
  'crypto_transactions_total': {
    type: 'counter',
    labels: ['chain', 'currency', 'status'],
    help: 'Total number of crypto transactions',
  },
  'crypto_vibe_awarded_total': {
    type: 'counter',
    labels: ['source'],
    help: 'Total VIBES tokens awarded',
  },
  
  // Gauges
  'crypto_wallet_count': {
    type: 'gauge',
    labels: ['custody_type'],
    help: 'Number of wallets by custody type',
  },
  'crypto_total_value_locked': {
    type: 'gauge',
    labels: ['chain', 'currency'],
    help: 'Total value locked in platform',
  },
  
  // Histograms
  'crypto_transaction_latency_seconds': {
    type: 'histogram',
    labels: ['chain', 'operation'],
    buckets: [0.1, 0.5, 1, 2, 5, 10, 30, 60],
    help: 'Transaction processing latency',
  },
  'crypto_handle_resolution_latency_seconds': {
    type: 'histogram',
    buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1],
    help: 'Handle resolution latency',
  },
};
```

### Sentry Integration

```typescript
// Transaction tracing
Sentry.startTransaction({
  op: 'crypto.transfer',
  name: 'Send Payment',
});

// Breadcrumbs for debugging
Sentry.addBreadcrumb({
  category: 'crypto',
  message: 'Handle resolved',
  level: 'info',
  data: { handle: 'alex', chain: 'base' },
});

// Error context
Sentry.captureException(error, {
  tags: {
    chain: 'base',
    operation: 'transfer',
    currency: 'USDC',
  },
  extra: {
    fromHandle: 'sarah',
    toHandle: 'alex',
    amount: 10,
    txHash: '0x...',
  },
});
```

### Alerts

```yaml
# PagerDuty alert rules
alerts:
  - name: CryptoTransactionFailureRate
    condition: |
      rate(crypto_transactions_total{status="failed"}[5m]) /
      rate(crypto_transactions_total[5m]) > 0.01
    severity: critical
    description: "Transaction failure rate exceeds 1%"
    
  - name: CryptoChainDisconnected
    condition: crypto_chain_connected == 0
    severity: critical
    description: "Lost connection to blockchain"
    
  - name: CryptoSlowHandleResolution
    condition: |
      histogram_quantile(0.95, crypto_handle_resolution_latency_seconds) > 0.5
    severity: warning
    description: "Handle resolution P95 exceeds 500ms"
    
  - name: CryptoLargeTransfer
    condition: crypto_transaction_amount > 5000
    severity: info
    description: "Large transfer detected"
```

---

## API Reference

### REST Endpoints

```yaml
# Wallet Operations
GET    /api/crypto/wallet           # Get user's wallet
POST   /api/crypto/wallet/connect   # Connect external wallet
DELETE /api/crypto/wallet/connect   # Disconnect external wallet

# Handle Resolution
GET    /api/crypto/handle/:handle   # Resolve handle to address

# Transfers
POST   /api/crypto/send             # Send payment
POST   /api/crypto/request          # Request payment
GET    /api/crypto/transactions     # Get transaction history
GET    /api/crypto/transaction/:id  # Get transaction details

# VIBES Token
GET    /api/crypto/vibe/balance     # Get VIBES balance
GET    /api/crypto/vibe/rewards     # Get reward history
GET    /api/crypto/vibe/multipliers # Get active multipliers

# Staking
POST   /api/crypto/stake            # Stake VIBES
DELETE /api/crypto/stake/:id        # Unstake VIBES
GET    /api/crypto/stake/positions  # Get stake positions

# Admin (requires admin auth)
GET    /api/admin/crypto/metrics    # Platform crypto metrics
GET    /api/admin/crypto/treasury   # Treasury overview
```

### WebSocket Events

```typescript
// Real-time updates via WebSocket
interface CryptoWebSocketEvents {
  // Incoming payment
  'crypto:payment_received': {
    fromHandle: string;
    amount: number;
    currency: string;
    txHash: string;
  };
  
  // Payment request
  'crypto:payment_requested': {
    fromHandle: string;
    amount: number;
    description: string;
    requestId: string;
  };
  
  // VIBES earned
  'crypto:vibe_earned': {
    amount: number;
    source: string;
    multiplier: number;
    newBalance: number;
  };
  
  // Transaction confirmed
  'crypto:transaction_confirmed': {
    transactionId: string;
    txHash: string;
    status: 'confirmed' | 'failed';
  };
}
```

---

## Configuration

### Environment Variables

```bash
# Chain Configuration
BASE_RPC_URL=https://mainnet.base.org
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
POLYGON_RPC_URL=https://polygon-rpc.com

# Contract Addresses (Base)
USDC_CONTRACT_ADDRESS=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
VIBES_TOKEN_ADDRESS=0x...
SBT_CONTRACT_ADDRESS=0x...

# Key Management
AWS_REGION=us-west-2
KMS_KEY_ID=alias/vibeup-wallet-keys

# Feature Flags
CRYPTO_ENABLED=true
VIBES_REWARDS_ENABLED=false
STAKING_ENABLED=false
MULTI_CHAIN_ENABLED=false

# Limits
MAX_DAILY_TRANSFER_UNVERIFIED=1000
MAX_DAILY_TRANSFER_VERIFIED=50000
MAX_SINGLE_TRANSFER=10000
```

### Feature Flags

```typescript
const CRYPTO_FEATURE_FLAGS = {
  // Core features
  'crypto_wallets': { enabled: true, rollout: 100 },
  'handle_payments': { enabled: true, rollout: 100 },
  
  // VIBES token
  'vibe_rewards': { enabled: false, rollout: 0 },
  'vibe_staking': { enabled: false, rollout: 0 },
  
  // Advanced
  'external_wallet_connect': { enabled: false, rollout: 0 },
  'multi_chain': { enabled: false, rollout: 0 },
  'nfc_payments': { enabled: false, rollout: 0 },
  
  // Business
  'business_crypto': { enabled: false, rollout: 0 },
  'community_treasury': { enabled: false, rollout: 0 },
};
```

---

## Error Handling

### Error Types

```typescript
// Crypto-specific errors
class CryptoError extends Error {
  constructor(
    message: string,
    public code: string,
    public recoverable: boolean = false
  ) {
    super(message);
    this.name = 'CryptoError';
  }
}

const CRYPTO_ERRORS = {
  // Wallet errors
  HANDLE_TAKEN: new CryptoError('Handle already taken', 'HANDLE_TAKEN', true),
  WALLET_NOT_FOUND: new CryptoError('Wallet not found', 'WALLET_NOT_FOUND'),
  
  // Transfer errors
  INSUFFICIENT_BALANCE: new CryptoError('Insufficient balance', 'INSUFFICIENT_BALANCE', true),
  RECIPIENT_NOT_FOUND: new CryptoError('Recipient not found', 'RECIPIENT_NOT_FOUND', true),
  DAILY_LIMIT_EXCEEDED: new CryptoError('Daily limit exceeded', 'DAILY_LIMIT_EXCEEDED', true),
  TRANSFER_FAILED: new CryptoError('Transfer failed', 'TRANSFER_FAILED', true),
  
  // Chain errors
  CHAIN_UNAVAILABLE: new CryptoError('Chain unavailable', 'CHAIN_UNAVAILABLE', true),
  TRANSACTION_TIMEOUT: new CryptoError('Transaction timeout', 'TX_TIMEOUT', true),
  
  // Security errors
  INVALID_SIGNATURE: new CryptoError('Invalid signature', 'INVALID_SIGNATURE'),
  SUSPICIOUS_ACTIVITY: new CryptoError('Suspicious activity detected', 'SUSPICIOUS'),
};
```

### Retry Strategy

```typescript
const RETRY_CONFIG = {
  maxRetries: 3,
  baseDelayMs: 1000,
  maxDelayMs: 30000,
  
  // Exponential backoff with jitter
  getDelay(attempt: number): number {
    const exponential = Math.min(
      this.baseDelayMs * Math.pow(2, attempt),
      this.maxDelayMs
    );
    const jitter = Math.random() * 0.3 * exponential;
    return exponential + jitter;
  },
  
  // Retry only recoverable errors
  shouldRetry(error: Error): boolean {
    if (error instanceof CryptoError) {
      return error.recoverable;
    }
    return false;
  },
};
```

---

## Testing Strategy

### Test Categories

```typescript
// Unit tests for business logic
describe('RewardEngine', () => {
  it('should apply streak multiplier correctly', () => {
    expect(getStreakMultiplier(7)).toBe(1.5);
    expect(getStreakMultiplier(21)).toBe(2.0);
    expect(getStreakMultiplier(30)).toBe(2.5);
    expect(getStreakMultiplier(90)).toBe(3.0);
  });
});

// Integration tests for database operations
describe('WalletManager', () => {
  it('should create wallet with unique handle', async () => {
    const wallet = await walletManager.create({
      userId: 'test-user',
      handle: 'testhandle',
    });
    
    expect(wallet.handle).toBe('testhandle');
    expect(wallet.addressBase).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });
});

// Contract tests for chain adapters (using local testnet)
describe('BaseAdapter', () => {
  it('should transfer USDC correctly', async () => {
    // Use Hardhat local node
    const result = await adapter.prepareTransfer({
      from: '0x...',
      to: '0x...',
      amount: 10,
      currency: 'USDC',
    });
    
    expect(result.to).toBe(USDC_CONTRACT);
  });
});
```

### Test Environment

```yaml
# docker-compose.test.yml
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: vibeup_test
      POSTGRES_PASSWORD: test
  
  hardhat:
    image: hardhat-node
    ports:
      - "8545:8545"
    command: npx hardhat node
  
  test-runner:
    build: .
    depends_on:
      - postgres
      - hardhat
    environment:
      DATABASE_URL: postgres://postgres:test@postgres/vibeup_test
      BASE_RPC_URL: http://hardhat:8545
```

---

**Related Documents**:
- [`epic-1a-crypto.md`](../epics/epic-1a-crypto.md) - Full epic specification
- [`vibe-tokenomics.md`](vibe-tokenomics.md) - Token economics
- [`ai-model-router.md`](ai-model-router.md) - Similar pattern for AI
- [`data-models.md`](data-models.md) - Database schema overview

