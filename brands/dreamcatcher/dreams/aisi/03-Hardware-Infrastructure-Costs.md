# Hardware & Infrastructure Cost Analysis

## Sovereign Consulting Intelligence Platform

**Document Version:** 1.0  
**Date:** February 2026

-----

## Cost Structure Overview

This document breaks down all hardware and infrastructure costs across three deployment phases:

- **Phase 1:** Cloud-first aggregator (minimal hardware investment)
- **Phase 2:** Hybrid with training capability (significant GPU investment)
- **Phase 3:** Full sovereignty (complete on-premises option)

-----

## Phase 1: Cloud-First Aggregator

### Cloud Infrastructure (Monthly)

|Service                          |Specification              |Provider         |Monthly Cost             |
|---------------------------------|---------------------------|-----------------|-------------------------|
|**Compute (Application)**        |                           |                 |                         |
|Kubernetes Cluster               |3 nodes, 8 vCPU / 32GB each|AWS EKS / GCP GKE|$800 - $1,200            |
|Worker Nodes (Scaling)           |2-6 nodes, autoscaling     |AWS/GCP          |$400 - $1,500            |
|                                 |                           |                 |                         |
|**Database**                     |                           |                 |                         |
|PostgreSQL                       |db.r6g.large, Multi-AZ     |AWS RDS          |$400 - $600              |
|Redis Cluster                    |3 nodes, cache.r6g.large   |AWS ElastiCache  |$500 - $800              |
|                                 |                           |                 |                         |
|**Vector Database**              |                           |                 |                         |
|Pinecone                         |Standard, 10M vectors      |Pinecone         |$70 - $200               |
|*OR* Weaviate Cloud              |Standard tier              |Weaviate         |$100 - $300              |
|*OR* Self-hosted Qdrant          |2 nodes, 16GB each         |Cloud VM         |$200 - $400              |
|                                 |                           |                 |                         |
|**Storage**                      |                           |                 |                         |
|Object Storage (S3/GCS)          |1TB, standard              |AWS S3           |$25 - $50                |
|Block Storage (EBS/PD)           |500GB SSD                  |AWS EBS          |$50 - $100               |
|                                 |                           |                 |                         |
|**Networking**                   |                           |                 |                         |
|Load Balancer                    |Application LB             |AWS ALB          |$20 - $50                |
|Data Transfer                    |500GB - 2TB out            |AWS              |$50 - $200               |
|VPN / Direct Connect             |Optional                   |-                |$0 - $200                |
|                                 |                           |                 |                         |
|**Security & Monitoring**        |                           |                 |                         |
|WAF                              |Basic rules                |AWS WAF          |$20 - $50                |
|Secrets Manager                  |50 secrets                 |AWS              |$20 - $40                |
|CloudWatch / Monitoring          |Standard                   |AWS              |$50 - $150               |
|                                 |                           |                 |                         |
|**Subtotal Cloud Infrastructure**|                           |                 |**$2,500 - $5,500/month**|

### One-Time Setup Costs

|Item                 |Description                       |Cost                                 |
|---------------------|----------------------------------|-------------------------------------|
|Domain & SSL         |Domain registration, wildcard cert|$200 - $500                          |
|Initial Cloud Setup  |Architecture deployment, IaC      |$2,000 - $5,000 (labor or consulting)|
|Security Audit       |Initial penetration testing       |$5,000 - $15,000                     |
|**Subtotal One-Time**|                                  |**$7,200 - $20,500**                 |

### Software & Services (Monthly)

|Service              |Purpose              |Monthly Cost            |
|---------------------|---------------------|------------------------|
|GitHub Enterprise    |Code & doc repository|$21/user (est. $200-500)|
|Auth0 / Okta         |Authentication       |$200 - $500             |
|Datadog / New Relic  |Monitoring (optional)|$0 - $500               |
|PagerDuty            |Alerting             |$50 - $150              |
|**Subtotal Software**|                     |**$450 - $1,650/month** |

### Phase 1 Total Infrastructure

|Category            |Monthly            |Annual                |
|--------------------|-------------------|----------------------|
|Cloud Infrastructure|$2,500 - $5,500    |$30,000 - $66,000     |
|Software & Services |$450 - $1,650      |$5,400 - $19,800      |
|**Monthly Total**   |**$2,950 - $7,150**|                      |
|**Annual Total**    |                   |**$35,400 - $85,800** |
|One-Time Setup      |                   |$7,200 - $20,500      |
|**Year 1 Total**    |                   |**$42,600 - $106,300**|

-----

## Phase 2: Hybrid with Training Capability

Building on Phase 1, add GPU infrastructure for model training and self-hosted inference.

### Option A: Cloud GPU Training (Recommended for Flexibility)

|Service                     |Specification                 |Provider   |Cost                     |
|----------------------------|------------------------------|-----------|-------------------------|
|**Training Compute**        |                              |           |                         |
|H100 Cluster (Training)     |8x H100 80GB, spot/preemptible|Lambda Labs|$2.49/GPU/hr             |
|                            |                              |CoreWeave  |$2.23/GPU/hr             |
|                            |                              |AWS p5     |$3.50/GPU/hr             |
|                            |                              |           |                         |
|Estimated Training Time     |30B model, 100B tokens        |           |500-2000 GPU-hours       |
|**Training Cost (One-Time)**|                              |           |**$10,000 - $50,000**    |
|                            |                              |           |                         |
|**Fine-Tuning Runs**        |                              |           |                         |
|Per fine-tuning run         |8x H100, 20-100 hours         |           |$400 - $2,800            |
|Estimated runs/year         |10-20 runs                    |           |**$4,000 - $56,000/year**|

### Option B: On-Premises GPU Cluster

|Component                    |Specification            |Quantity|Unit Cost          |Total        |
|-----------------------------|-------------------------|--------|-------------------|-------------|
|**GPU Servers**              |                         |        |                   |             |
|Training/Inference Node      |8x H100 80GB SXM5        |1-4     |$300,000 - $400,000|$300K - $1.6M|
|*OR* A100 Alternative        |8x A100 80GB             |1-4     |$150,000 - $200,000|$150K - $800K|
|*OR* Consumer Grade          |8x RTX 4090              |2-8     |$20,000 - $30,000  |$40K - $240K |
|                             |                         |        |                   |             |
|**Networking**               |                         |        |                   |             |
|InfiniBand Switch            |HDR 200Gb (if multi-node)|1       |$15,000 - $30,000  |$15K - $30K  |
|InfiniBand Cables/NICs       |Per node                 |4-8     |$2,000 - $5,000    |$8K - $40K   |
|                             |                         |        |                   |             |
|**Storage**                  |                         |        |                   |             |
|NVMe Array                   |100TB usable, high-speed |1       |$50,000 - $100,000 |$50K - $100K |
|Backup Storage               |200TB, lower tier        |1       |$20,000 - $40,000  |$20K - $40K  |
|                             |                         |        |                   |             |
|**Supporting Infrastructure**|                         |        |                   |             |
|CPU Servers (Data Prep)      |64 core, 512GB RAM       |2-4     |$15,000 - $25,000  |$30K - $100K |
|Network Switches             |100GbE                   |2       |$5,000 - $10,000   |$10K - $20K  |
|UPS / Power Protection       |30-50 kVA                |1-2     |$10,000 - $30,000  |$10K - $60K  |
|Rack & Cooling               |42U rack, in-row cooling |1-2     |$15,000 - $40,000  |$15K - $80K  |

**On-Premises Hardware Totals:**

|Configuration      |GPU Setup |Total Hardware Cost  |
|-------------------|----------|---------------------|
|Minimal (RTX 4090s)|16-64 GPUs|$200,000 - $500,000  |
|Mid-Range (A100s)  |8-32 GPUs |$400,000 - $1,200,000|
|High-End (H100s)   |8-32 GPUs |$600,000 - $2,500,000|

### Facility Requirements (On-Premises)

|Requirement      |Specification       |Cost Impact                    |
|-----------------|--------------------|-------------------------------|
|Power            |50-200 kW dedicated |$500 - $2,000/month electricity|
|Cooling          |15-60 tons HVAC     |$300 - $1,500/month            |
|Space            |100-500 sq ft secure|Varies by location             |
|Physical Security|Biometric, cameras  |$5,000 - $20,000 setup         |

### Colocation Alternative

|Service                  |Specification               |Monthly Cost    |
|-------------------------|----------------------------|----------------|
|Colocation (Half Rack)   |10kW power, cooling included|$1,500 - $3,000 |
|Colocation (Full Rack)   |20kW power, cooling included|$3,000 - $6,000 |
|Colocation (High Density)|40kW+ power                 |$6,000 - $15,000|
|Remote Hands             |On-demand support           |$100 - $200/hour|

### Phase 2 Inference Infrastructure

Running your own model for inference (post-training):

|Configuration|Hardware    |Throughput  |Monthly Cost (Cloud)|
|-------------|------------|------------|--------------------|
|Light        |2x A100 40GB|~50 req/min |$3,000 - $5,000     |
|Medium       |4x A100 80GB|~150 req/min|$6,000 - $10,000    |
|Heavy        |8x H100     |~500 req/min|$15,000 - $25,000   |

*On-premises: Amortize hardware over 3 years, add facility costs*

### Phase 2 Total Costs

**Cloud Training Path:**

|Category                     |One-Time             |Annual                |
|-----------------------------|---------------------|----------------------|
|Phase 1 Infrastructure       |-                    |$35,400 - $85,800     |
|Initial Model Training       |$10,000 - $50,000    |-                     |
|Fine-Tuning Runs             |-                    |$4,000 - $56,000      |
|Self-Hosted Inference (Cloud)|-                    |$36,000 - $120,000    |
|**Total**                    |**$10,000 - $50,000**|**$75,400 - $261,800**|

**On-Premises Training Path:**

|Category                        |One-Time                 |Annual                |
|--------------------------------|-------------------------|----------------------|
|Phase 1 Infrastructure (reduced)|-                        |$25,000 - $50,000     |
|GPU Hardware (Mid-Range)        |$400,000 - $1,200,000    |-                     |
|Supporting Infrastructure       |$150,000 - $400,000      |-                     |
|Facility/Colocation             |-                        |$24,000 - $72,000     |
|Maintenance & Power             |-                        |$20,000 - $60,000     |
|**Total**                       |**$550,000 - $1,600,000**|**$69,000 - $182,000**|

-----

## Phase 3: Full Sovereignty

Complete on-premises infrastructure for training frontier-adjacent models and full inference independence.

### Training Cluster (Sovereign-Class)

|Component                    |Specification            |Quantity  |Cost             |
|-----------------------------|-------------------------|----------|-----------------|
|GPU Nodes                    |8x H100 SXM5 per node    |8-16 nodes|$2.4M - $6.4M    |
|InfiniBand Fabric            |NDR 400Gb, full bisection|1         |$200K - $500K    |
|Storage (Training)           |2PB parallel filesystem  |1         |$500K - $1M      |
|Head Nodes                   |128 core, 2TB RAM        |4         |$100K - $200K    |
|**Subtotal Training Cluster**|                         |          |**$3.2M - $8.1M**|

### Inference Cluster (Production)

|Component             |Specification     |Quantity |Cost              |
|----------------------|------------------|---------|------------------|
|Inference Nodes       |8x H100 or 8x L40S|4-8 nodes|$400K - $1.6M     |
|Load Balancers        |Hardware LB       |2        |$20K - $50K       |
|Redundant Storage     |500TB NVMe        |1        |$150K - $300K     |
|**Subtotal Inference**|                  |         |**$570K - $1.95M**|

### Data Center Requirements

|Requirement         |Specification      |Cost                       |
|--------------------|-------------------|---------------------------|
|Power (Training)    |500kW - 1.5MW      |$50K - $150K/month         |
|Cooling             |150-450 tons       |Included or $20K-$60K/month|
|Space               |2,000 - 5,000 sq ft|$10K - $50K/month          |
|Redundant Power     |Generator, UPS     |$200K - $500K (one-time)   |
|Network Connectivity|10Gbps+ dedicated  |$5K - $20K/month           |

**Build vs. Colocation:**

|Option                 |Capital Cost            |Monthly Operations|
|-----------------------|------------------------|------------------|
|Build Own Data Center  |$2M - $10M              |$30K - $80K       |
|High-Density Colocation|$100K - $300K (buildout)|$80K - $250K      |

### Phase 3 Total Costs

|Category                  |One-Time                    |Annual                   |
|--------------------------|----------------------------|-------------------------|
|Training Cluster          |$3,200,000 - $8,100,000     |-                        |
|Inference Cluster         |$570,000 - $1,950,000       |-                        |
|Data Center Buildout/Setup|$300,000 - $1,000,000       |-                        |
|Facility Operations       |-                           |$360,000 - $1,200,000    |
|Hardware Maintenance      |-                           |$150,000 - $400,000      |
|Network & Connectivity    |-                           |$60,000 - $240,000       |
|**Total**                 |**$4,070,000 - $11,050,000**|**$570,000 - $1,840,000**|

-----

## Summary: Hardware & Infrastructure by Phase

### Capital Expenditure (One-Time)

|Phase                          |Minimum   |Maximum    |Timeline    |
|-------------------------------|----------|-----------|------------|
|Phase 1: Aggregator            |$7,200    |$20,500    |Months 1-12 |
|Phase 2: Hybrid (Cloud Train)  |$10,000   |$50,000    |Months 12-24|
|Phase 2: Hybrid (On-Prem Train)|$550,000  |$1,600,000 |Months 12-24|
|Phase 3: Sovereign             |$4,070,000|$11,050,000|Months 24-48|

### Operating Expenditure (Annual)

|Phase                    |Minimum |Maximum   |
|-------------------------|--------|----------|
|Phase 1: Aggregator      |$35,400 |$85,800   |
|Phase 2: Hybrid (Cloud)  |$75,400 |$261,800  |
|Phase 2: Hybrid (On-Prem)|$69,000 |$182,000  |
|Phase 3: Sovereign       |$570,000|$1,840,000|

-----

## Hardware Procurement Notes

### GPU Availability

|GPU Model          |Lead Time  |Procurement Options                   |
|-------------------|-----------|--------------------------------------|
|NVIDIA H100        |6-18 months|Direct NVIDIA, OEM partners, resellers|
|NVIDIA A100        |2-6 months |More available, previous gen          |
|NVIDIA L40S        |1-3 months |Inference-optimized alternative       |
|AMD MI300X         |3-9 months |Competitive alternative               |
|Consumer (RTX 4090)|In stock   |Not enterprise-supported              |

### Recommended Vendors

|Category   |Vendors                          |
|-----------|---------------------------------|
|GPU Servers|Dell, HPE, Supermicro, Lambda    |
|Networking |NVIDIA/Mellanox, Arista          |
|Storage    |Pure Storage, VAST Data, DDN     |
|Colocation |Equinix, Digital Realty, CoreSite|
|Cloud GPU  |Lambda Labs, CoreWeave, AWS, GCP |

### Depreciation Schedule

|Asset            |Useful Life|Annual Depreciation|
|-----------------|-----------|-------------------|
|GPU Hardware     |3-4 years  |25-33%             |
|Networking       |5-7 years  |14-20%             |
|Storage          |4-5 years  |20-25%             |
|Servers (non-GPU)|4-5 years  |20-25%             |

-----

## Recommendations

### For Immediate Start (Phase 1)

- Use cloud infrastructure entirely
- No significant hardware investment
- Focus capital on software development and knowledge base building
- Infrastructure cost: ~$50K-$100K annually

### For Training Your Own Model (Phase 2)

- **Recommend cloud training initially** — flexibility, no upfront capital
- Evaluate on-premises after validating model approach
- Budget $100K-$300K for first year of serious training experiments

### For Full Independence (Phase 3)

- Only pursue after proving model viability in Phase 2
- Consider colocation over building own data center
- Budget $4M-$10M capital, $500K-$2M annual operations
- Allow 24-36 months for procurement and buildout
