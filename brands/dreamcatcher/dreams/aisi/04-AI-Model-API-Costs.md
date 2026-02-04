# AI Model & API Operational Costs

## Sovereign Consulting Intelligence Platform

**Document Version:** 1.0  
**Date:** February 2026

-----

## Overview

This document details the operational costs of using AI models through APIs and self-hosted inference. These are the core “fuel” costs that scale with usage.

-----

## Current API Pricing (February 2026)

*Note: Prices change frequently. Verify current pricing before budgeting.*

### Anthropic (Claude)

|Model            |Input (per 1M tokens)|Output (per 1M tokens)|Context Window|
|-----------------|---------------------|----------------------|--------------|
|Claude 3.5 Sonnet|$3.00                |$15.00                |200K          |
|Claude 3 Opus    |$15.00               |$75.00                |200K          |
|Claude 3 Haiku   |$0.25                |$1.25                 |200K          |
|Claude 3.5 Haiku |$0.80                |$4.00                 |200K          |

**Volume Discounts:** Available for committed usage (contact Anthropic)

### OpenAI

|Model         |Input (per 1M tokens)|Output (per 1M tokens)|Context Window|
|--------------|---------------------|----------------------|--------------|
|GPT-4o        |$2.50                |$10.00                |128K          |
|GPT-4o-mini   |$0.15                |$0.60                 |128K          |
|GPT-4 Turbo   |$10.00               |$30.00                |128K          |
|o1 (reasoning)|$15.00               |$60.00                |200K          |
|o1-mini       |$3.00                |$12.00                |128K          |

**Batch API:** 50% discount for non-real-time workloads

### Google (Gemini)

|Model           |Input (per 1M tokens)|Output (per 1M tokens)|Context Window|
|----------------|---------------------|----------------------|--------------|
|Gemini 1.5 Pro  |$1.25 - $2.50        |$5.00 - $10.00        |2M            |
|Gemini 1.5 Flash|$0.075 - $0.15       |$0.30 - $0.60         |1M            |
|Gemini 1.0 Pro  |$0.50                |$1.50                 |32K           |

*Pricing tiers based on context length used*

### Other Providers

|Provider   |Model         |Input/1M|Output/1M|Notes               |
|-----------|--------------|--------|---------|--------------------|
|Mistral    |Mistral Large |$2.00   |$6.00    |Strong reasoning    |
|Mistral    |Mistral Small |$0.20   |$0.60    |Fast, efficient     |
|Cohere     |Command R+    |$2.50   |$10.00   |RAG-optimized       |
|Together AI|Llama 3.1 70B |$0.88   |$0.88    |Open model hosted   |
|Together AI|Llama 3.1 405B|$3.50   |$3.50    |Largest open model  |
|Groq       |Llama 3.1 70B |$0.59   |$0.79    |Ultra-fast inference|

-----

## Token Economics for Consulting Work

### Understanding Token Costs

**What is a token?**

- Approximately 4 characters or 0.75 words
- 1,000 tokens ≈ 750 words ≈ 1.5 pages of text

**Consulting Document Sizes:**

|Document Type    |Typical Size       |Token Estimate      |
|-----------------|-------------------|--------------------|
|Email response   |200-500 words      |250-700 tokens      |
|Executive summary|500-1,500 words    |700-2,000 tokens    |
|Strategy memo    |2,000-5,000 words  |2,700-6,700 tokens  |
|Full report      |10,000-30,000 words|13,000-40,000 tokens|
|Presentation deck|3,000-8,000 words  |4,000-10,700 tokens |

### Typical Query Patterns

**Simple Consulting Query:**

```
Input:  2,000 tokens (prompt + context)
Output: 1,000 tokens (response)
```

**Complex Analysis:**

```
Input:  15,000 tokens (prompt + documents + context)
Output: 5,000 tokens (detailed analysis)
```

**Full Deliverable Generation:**

```
Input:  30,000 tokens (methodology + client context + requirements)
Output: 20,000 tokens (complete document)
```

-----

## Cost Modeling by Use Case

### Model Selection Strategy

|Task Type                  |Recommended Model         |Why                   |
|---------------------------|--------------------------|----------------------|
|Quick Q&A, triage          |Claude Haiku / GPT-4o-mini|Low cost, fast        |
|Analysis, reasoning        |Claude Sonnet / GPT-4o    |Best price/performance|
|Critical decisions         |Claude Opus / o1          |Highest quality       |
|Document generation        |Claude Sonnet             |Long output quality   |
|Code/technical             |Claude Sonnet / GPT-4o    |Strong at code        |
|Verification/second opinion|Different provider        |Diversity             |

### Cost Per Consulting Task

*Using Claude 3.5 Sonnet ($3 in / $15 out per 1M tokens) as baseline*

|Task                      |Input Tokens|Output Tokens|Cost  |
|--------------------------|------------|-------------|------|
|Client email response     |2,000       |500          |$0.014|
|Meeting prep summary      |5,000       |2,000        |$0.045|
|Competitive analysis      |20,000      |5,000        |$0.135|
|Strategy recommendation   |30,000      |10,000       |$0.240|
|Full report draft         |50,000      |30,000       |$0.600|
|Complex multi-step project|200,000     |50,000       |$1.35 |

### Cost Per Client Engagement (Monthly)

**Light Usage Client** (Basic advisory)

- 50 queries/month (simple)
- 20 queries/month (complex)
- 5 deliverables/month

|Model Tier             |Monthly Cost|
|-----------------------|------------|
|Economy (Haiku/Mini)   |$3 - $8     |
|Standard (Sonnet/4o)   |$15 - $40   |
|Premium (Opus/o1 blend)|$50 - $150  |

**Heavy Usage Client** (Active transformation)

- 200 queries/month (simple)
- 100 queries/month (complex)
- 20 deliverables/month

|Model Tier             |Monthly Cost|
|-----------------------|------------|
|Economy (Haiku/Mini)   |$15 - $40   |
|Standard (Sonnet/4o)   |$100 - $250 |
|Premium (Opus/o1 blend)|$300 - $800 |

-----

## Multi-Model Cost Scenarios

### Scenario 1: Cost-Optimized Routing

Route queries to cheapest capable model:

```
Query Distribution:
- 60% → Haiku/Mini ($0.25-$0.60/1M)
- 30% → Sonnet/4o ($3-$10/1M)
- 10% → Opus/o1 ($15-$60/1M)

Blended Cost: ~$2-4 per 1M tokens
```

### Scenario 2: Quality-First with Verification

Primary model + cheaper verification:

```
Query Flow:
- Primary: Sonnet ($3/$15)
- Verification: Haiku ($0.25/$1.25)

Overhead: ~15-20% additional cost
Benefit: Higher accuracy, consistency
```

### Scenario 3: Ensemble for Critical Decisions

Query multiple models, synthesize:

```
High-Stakes Query:
- Claude Opus: $X
- GPT-4o: $Y
- Gemini Pro: $Z

Total: 3x single-model cost
Use: <5% of queries (critical only)
```

-----

## Monthly Budget Projections

### By Team/Client Scale

**Small Operation (5 clients, 10 consultants using system)**

|Usage Level |Monthly API Cost|
|------------|----------------|
|Conservative|$500 - $1,500   |
|Moderate    |$1,500 - $4,000 |
|Heavy       |$4,000 - $10,000|

**Medium Operation (35 clients, 50 consultants)**

|Usage Level |Monthly API Cost |
|------------|-----------------|
|Conservative|$3,000 - $8,000  |
|Moderate    |$8,000 - $25,000 |
|Heavy       |$25,000 - $60,000|

**Large Operation (100+ clients, 200 consultants)**

|Usage Level |Monthly API Cost   |
|------------|-------------------|
|Conservative|$15,000 - $40,000  |
|Moderate    |$40,000 - $100,000 |
|Heavy       |$100,000 - $300,000|

### Cost Per Consultant Per Month

|Usage Pattern               |Cost/Consultant/Month|
|----------------------------|---------------------|
|Light (10-20 queries/day)   |$50 - $150           |
|Moderate (30-50 queries/day)|$150 - $400          |
|Heavy (100+ queries/day)    |$400 - $1,000        |

-----

## Embedding Costs

Vector embeddings for knowledge retrieval:

|Provider |Model                 |Cost per 1M tokens|
|---------|----------------------|------------------|
|OpenAI   |text-embedding-3-large|$0.13             |
|OpenAI   |text-embedding-3-small|$0.02             |
|Cohere   |embed-english-v3      |$0.10             |
|Voyage AI|voyage-large-2        |$0.12             |

**Embedding Budget (Knowledge Base):**

|Knowledge Base Size|Tokens     |One-Time Embed Cost|
|-------------------|-----------|-------------------|
|10,000 documents   |50M tokens |$6 - $7            |
|100,000 documents  |500M tokens|$60 - $65          |
|1,000,000 documents|5B tokens  |$600 - $650        |

**Ongoing Embedding (New Content):**

- Budget $10-50/month for incremental updates

-----

## Self-Hosted Model Costs

### Cloud GPU Inference

Running open-source models (Llama 3.1 70B) on cloud GPUs:

|Configuration   |GPU    |Hourly Cost  |Throughput   |Cost/1M Tokens|
|----------------|-------|-------------|-------------|--------------|
|Single A100 40GB|1x A100|$1.50 - $2.50|~30 tok/sec  |$0.80 - $1.40 |
|Single A100 80GB|1x A100|$2.00 - $3.50|~50 tok/sec  |$0.60 - $1.00 |
|Dual A100 80GB  |2x A100|$4.00 - $7.00|~100 tok/sec |$0.60 - $1.00 |
|Single H100     |1x H100|$3.00 - $4.50|~150 tok/sec |$0.30 - $0.50 |
|8x H100 Cluster |8x H100|$20 - $30    |~1000 tok/sec|$0.30 - $0.45 |

**Break-Even Analysis:**

|Monthly API Spend|Self-Host Break-Even|Notes                         |
|-----------------|--------------------|------------------------------|
|< $3,000         |Not worth it        |API more cost-effective       |
|$3,000 - $10,000 |Marginal            |Consider for control, not cost|
|$10,000 - $30,000|6-12 months         |Start evaluating self-host    |
|> $30,000        |3-6 months          |Strong case for self-hosting  |

### On-Premises Inference

Amortizing hardware over 3 years:

|Hardware    |CapEx   |Monthly Amortization|Monthly Ops|Throughput   |Effective Cost/1M|
|------------|--------|--------------------|-----------|-------------|-----------------|
|2x RTX 4090 |$5,000  |$140                |$100       |~60 tok/sec  |$0.25 - $0.40    |
|2x A100 80GB|$40,000 |$1,100              |$300       |~100 tok/sec |$0.35 - $0.50    |
|8x H100     |$300,000|$8,300              |$2,000     |~1000 tok/sec|$0.15 - $0.25    |

*Significant upfront investment, but lowest marginal cost at scale*

-----

## Cost Optimization Strategies

### 1. Intelligent Routing

**Implement tiered model selection:**

```
if task.complexity == "simple":
    use haiku/mini  # $0.25-$0.60/1M
elif task.complexity == "moderate":
    use sonnet/4o   # $3-$10/1M
elif task.is_critical:
    use opus/o1     # $15-$60/1M
```

**Potential Savings:** 40-60% vs. always using top-tier models

### 2. Context Caching

**Cache repeated context:**

- System prompts (soul documents)
- Client background
- Methodology frameworks

**Anthropic Prompt Caching:**

- 90% discount on cached input tokens
- Cache writes: 25% premium
- Cache lifetime: 5 minutes

**Potential Savings:** 30-50% on input costs for repeated patterns

### 3. Batch Processing

**Non-real-time workloads:**

- Report generation overnight
- Bulk analysis
- Training data creation

**OpenAI Batch API:** 50% discount  
**Anthropic Message Batches:** 50% discount

**Potential Savings:** 50% on eligible workloads

### 4. Output Length Optimization

**Configure maximum tokens appropriately:**

- Don’t request 4,000 tokens when 500 suffices
- Use model to estimate required length first

**Potential Savings:** 20-40% on output costs

### 5. Hybrid Model Strategy

**Mix self-hosted and API:**

- Self-host for predictable, high-volume tasks
- API for burst capacity and frontier capabilities

-----

## Annual API Budget Scenarios

### Conservative (35 clients, moderate usage)

|Category                 |Monthly    |Annual      |
|-------------------------|-----------|------------|
|Primary Model (Sonnet/4o)|$8,000     |$96,000     |
|Verification (Haiku/Mini)|$1,500     |$18,000     |
|Premium Tasks (Opus/o1)  |$2,000     |$24,000     |
|Embeddings               |$100       |$1,200      |
|**Total**                |**$11,600**|**$139,200**|

### Moderate (35 clients, heavy usage)

|Category                 |Monthly    |Annual      |
|-------------------------|-----------|------------|
|Primary Model (Sonnet/4o)|$25,000    |$300,000    |
|Verification (Haiku/Mini)|$5,000     |$60,000     |
|Premium Tasks (Opus/o1)  |$8,000     |$96,000     |
|Embeddings               |$300       |$3,600      |
|**Total**                |**$38,300**|**$459,600**|

### Aggressive Growth (100 clients, heavy usage)

|Category                 |Monthly     |Annual        |
|-------------------------|------------|--------------|
|Primary Model (Sonnet/4o)|$80,000     |$960,000      |
|Verification (Haiku/Mini)|$15,000     |$180,000      |
|Premium Tasks (Opus/o1)  |$25,000     |$300,000      |
|Embeddings               |$1,000      |$12,000       |
|**Total**                |**$121,000**|**$1,452,000**|

-----

## Comparison: API vs. Self-Hosted vs. Hybrid

### At $50,000/month API spend

|Option               |Monthly Cost            |Capability       |Independence|
|---------------------|------------------------|-----------------|------------|
|API Only             |$50,000                 |Full frontier    |None        |
|Self-Hosted (Cloud)  |$25,000 + $15,000 API   |70% self, 30% API|Partial     |
|Self-Hosted (On-Prem)|$15,000 ops + $8,000 API|80% self, 20% API|High        |
|Fully Sovereign      |$25,000 ops             |100% self        |Complete    |

*On-prem requires significant upfront CapEx*

### Decision Framework

|If your monthly API spend is…|Consider…                       |
|-----------------------------|--------------------------------|
|< $5,000                     |Stay with APIs, optimize routing|
|$5,000 - $15,000             |Evaluate self-hosting economics |
|$15,000 - $50,000            |Strong case for hybrid approach |
|> $50,000                    |Prioritize path to sovereignty  |

-----

## Key Takeaways

1. **API costs scale linearly** with usage — plan for growth
1. **Intelligent routing** can cut costs 40-60%
1. **Self-hosting becomes viable** at ~$10K+/month API spend
1. **Full sovereignty** is achievable but requires significant CapEx
1. **Hybrid approach** balances cost, capability, and independence
1. **Budget 5-15%** of client revenue for AI operational costs initially

-----

## Appendix: Token Estimation Quick Reference

|Content Type  |Tokens per Page|Tokens per 1,000 Words|
|--------------|---------------|----------------------|
|Plain text    |400-500        |1,300-1,500           |
|Technical/code|500-700        |1,500-2,000           |
|Dense analysis|450-550        |1,400-1,600           |

**Quick Estimates:**

- Average email: 200-500 tokens
- One-page memo: 400-600 tokens
- 10-page report: 5,000-8,000 tokens
- 50-page deck: 15,000-25,000 tokens
