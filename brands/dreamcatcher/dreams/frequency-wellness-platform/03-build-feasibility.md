# Build Feasibility & Cost Analysis

**Document Version:** 1.0
**Date:** February 2026
**Classification:** Internal Research

---

## Executive Summary

Building a competitive frequency wellness platform requires three things: a simple hardware device, a web-based frequency console application, and a curated content library. The hardware is a solved problem (toroid coil, ~$10-30 BOM). The software is straightforward (Web Audio API frequency generator with a content management layer). The real investment is in content curation, brand building, and go-to-market.

**Estimated total to launch:** $15K-$45K
**Time to MVP:** 8-12 weeks
**Time to revenue:** 12-16 weeks

---

## Phase 1: MVP (Weeks 1-12)

### Hardware v1: Branded PEMF Coil

| Item | Approach | Cost |
|------|----------|------|
| Coil design | Toroid copper wire coil, optimized winding pattern | $500 (prototyping) |
| Enclosure design | 3D-printed or injection-molded housing | $1,000-3,000 |
| Audio cable | 3.5mm with optional USB-C adapter | $2/unit |
| Branding/packaging | Premium unboxing experience | $5-10/unit |
| Small batch manufacturing | First run of 50-100 units | $2,000-5,000 |
| **BOM per unit (at scale)** | | **$15-35** |
| **Target retail price** | | **$149-$299** |

**Why this pricing:**
- QiCoil charges $679-$1,079 for the same basic technology
- $149-$299 is accessible enough to drive volume while maintaining premium feel
- Still 5-10x margin on hardware
- Undercuts QiCoil by 50-75% while looking better

### Software v1: Frequency Console Web App

**Core Features for MVP:**

| Feature | Description | Complexity |
|---------|-------------|------------|
| Frequency generator | Oscillator with sine/square/triangle waves, 0.1-22kHz | Low |
| Waveform visualizer | Real-time visualization of the output signal | Low |
| Frequency browser | Search/filter the frequency database by category | Medium |
| Session player | Play a sequence of frequencies with timing | Medium |
| User accounts | Sign up, login, save preferences | Low |
| Free tier content | Solfeggio, Schumann, basic wellness frequencies (~50) | Low (content curation) |
| Paid tier gating | Unlock full Rife database + curated programs on subscription | Medium |
| Device setup guide | Interactive guide for connecting coil to phone/computer | Low |
| Responsive design | Works on phone, tablet, desktop | Medium |
| PWA support | Install to home screen, offline session playback | Medium |

**Estimated Development Cost:**

| Component | Hours | Cost (at $150/hr) |
|-----------|-------|-------------------|
| Audio engine (Web Audio API + Tone.js) | 40 | $6,000 |
| Frequency database + API | 30 | $4,500 |
| UI/UX design | 40 | $6,000 |
| Frontend development | 80 | $12,000 |
| Backend (auth, payments, content gating) | 40 | $6,000 |
| Testing + polish | 20 | $3,000 |
| **Total** | **250 hours** | **$37,500** |

**Or, if built in-house with AI-assisted development:**

| Component | Hours | Notes |
|-----------|-------|-------|
| Audio engine | 8 | Web Audio API is well-documented, Tone.js handles abstraction |
| Frequency database | 8 | Import CAFL + curate categories |
| UI/UX + frontend | 40 | Next.js + Tailwind, AI-assisted |
| Backend | 16 | Auth, Stripe, content API |
| Testing + polish | 16 | |
| **Total** | **88 hours** | **~2-3 weeks of focused work** |

### Content v1: Frequency Library

| Collection | Source | Frequencies | Cost |
|------------|--------|-------------|------|
| Solfeggio Tones | Public domain | 9 | $0 |
| Schumann Resonances | Public domain | 7 | $0 |
| Planetary Frequencies | Public domain | ~20 | $0 |
| CAFL Rife Database | Open source | 10,000+ | $0 (curation time only) |
| Curated Wellness Programs | Original curation | 50-100 | Time investment |
| **Total at launch** | | **10,000+** | **$0 (just curation labor)** |

**Content curation is the real work.** The raw frequencies are free. The value is in:
- Organizing them into intuitive categories
- Writing clear descriptions of what each frequency/program targets
- Creating multi-frequency session programs (sequences, layers, timing)
- Providing honest context about evidence levels
- Building a recommendation engine over time

---

## Phase 1 Total Budget

| Category | Low | High |
|----------|-----|------|
| Hardware prototyping + first batch | $3,500 | $8,000 |
| Software development | $5,000 | $37,500 |
| Content curation | $1,000 | $3,000 |
| Brand/design | $2,000 | $5,000 |
| Domain, hosting, infrastructure | $500 | $1,000 |
| Stripe/payment setup | $0 | $0 |
| **Total Phase 1** | **$12,000** | **$54,500** |

---

## Revenue Projections

### Pricing Model

| Tier | Price | What's Included |
|------|-------|-----------------|
| **Free** | $0 | 50 frequencies (Solfeggio, Schumann, basics), limited sessions |
| **Explorer** | $19/mo or $149/yr | Full Rife database (10,000+), curated programs, session builder |
| **Practitioner** | $49/mo or $399/yr | Everything + multi-layer stacking, export, practitioner tools |
| **Hardware: Coil** | $149-$299 | Physical PEMF coil with 30-day Explorer trial included |
| **Hardware: Pro Kit** | $399-$599 | Coil + amplifier + carrying case + 1-year Explorer sub |

### Revenue Scenarios (Months 1-12)

**Conservative:**
| Month | Hardware Sales | Subscriptions | MRR | Cumulative Revenue |
|-------|---------------|--------------|-----|-------------------|
| 1-3 | 10 units/mo @ $199 | 20 subs @ $19 | $2,370 | $7,110 |
| 4-6 | 20 units/mo @ $199 | 80 subs @ $19 | $5,500 | $23,610 |
| 7-12 | 30 units/mo @ $199 | 200 subs @ $19 | $9,770 | $82,230 |
| **Year 1 Total** | | | | **$82,230** |

**Moderate:**
| Month | Hardware Sales | Subscriptions | MRR | Cumulative Revenue |
|-------|---------------|--------------|-----|-------------------|
| 1-3 | 25 units/mo @ $249 | 50 subs @ $22 avg | $7,325 | $21,975 |
| 4-6 | 50 units/mo @ $249 | 200 subs @ $22 avg | $16,850 | $72,525 |
| 7-12 | 75 units/mo @ $249 | 500 subs @ $22 avg | $29,675 | $250,575 |
| **Year 1 Total** | | | | **$250,575** |

**Optimistic:**
| Month | Hardware Sales | Subscriptions | MRR | Cumulative Revenue |
|-------|---------------|--------------|-----|-------------------|
| 1-3 | 50 units/mo @ $249 | 100 subs @ $25 avg | $14,950 | $44,850 |
| 4-6 | 100 units/mo @ $249 | 500 subs @ $25 avg | $37,400 | $157,050 |
| 7-12 | 200 units/mo @ $249 | 1500 subs @ $25 avg | $87,300 | $680,850 |
| **Year 1 Total** | | | | **$680,850** |

### Margin Analysis

| Item | Revenue | COGS | Gross Margin |
|------|---------|------|-------------|
| Hardware (per unit) | $199-$299 | $25-$45 | 80-87% |
| Explorer sub (monthly) | $19 | ~$0.50 (hosting) | 97% |
| Practitioner sub (monthly) | $49 | ~$0.50 (hosting) | 99% |
| **Blended gross margin** | | | **85-95%** |

---

## Phase 2: Growth (Months 4-12)

### Software Enhancements
- AI-powered frequency recommendations based on user goals
- Community features — share programs, rate sessions, discuss
- Advanced session builder with visual timeline editor
- Binaural beats integration (headphone mode)
- Heart rate / HRV integration (if wearable APIs available)
- Native mobile app (React Native) if PWA adoption is low

### Hardware Expansion
- **Coil v2** — USB-C powered, built-in amplifier, Bluetooth option
- **Pro Coil** — Higher power, larger field radius, for practitioners
- **Mat/Pad** — Flat coil array for full-body PEMF (higher price point)

### Content Growth
- Weekly new curated programs
- Guest practitioners creating programs
- User-generated programs (community marketplace)
- Educational content (blog, video) for SEO
- Practitioner certification program

---

## Phase 3: Scale (Year 2+)

### Platform Expansion
- Marketplace for practitioner-created frequency programs (we take 30%)
- White-label solution for wellness clinics
- API for third-party hardware manufacturers
- Integration with other wellness platforms (meditation apps, wearables)

### Hardware Scale
- Contract manufacturing (Shenzhen or domestic)
- Retail partnerships (wellness stores, Amazon)
- International expansion

### Revenue Target
- Year 2: $500K-$2M
- Year 3: $2M-$5M (if marketplace takes off)

---

## Competitive Advantages Over QiCoil

| Dimension | QiCoil | Our Approach |
|-----------|--------|--------------|
| **Pricing** | $679-$13,000 | $149-$599 |
| **Honesty** | Quantum/scalar claims | Evidence-based, transparent |
| **Design** | Functional but dated | Beautiful, premium, modern |
| **Openness** | Proprietary everything | Open frequency database, open education |
| **Technology** | Tablet with locked software | Web app, works on any device |
| **Content** | Locked tiers, opaque pricing | Clear tiers, fair pricing |
| **Community** | Inner Circle (exclusive, expensive) | Open community, user-generated content |
| **Education** | Mystical/authority-based | Science-based, transparent about evidence levels |

---

## Risk Analysis

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| Regulatory action (FDA) | High | Medium | Never claim medical benefits. Clear disclaimers. Position as wellness/relaxation tool. |
| Low demand / market too niche | High | Low | PEMF market is $500M+ and growing. QiCoil proves demand exists. |
| QiCoil/competitor patent issues | Medium | Low | PEMF technology is well-established and not patentable. UI/software are original. |
| Hardware quality issues | Medium | Medium | Start with small batches, rigorous QA, fast iteration. |
| Customer acquisition cost too high | Medium | Medium | Content marketing (SEO), wellness community partnerships, influencer seeding. |
| Content not differentiated enough | Medium | Medium | Focus on curation quality, honesty, and user experience — not raw frequency count. |
| App store rejection (if native) | Low | Low | PWA-first approach avoids app store gatekeeping entirely. |

---

## Go-to-Market Strategy

### Channel Mix

1. **Direct (website)** — Primary channel. SEO content about PEMF, frequencies, wellness.
2. **YouTube** — Educational content about frequency science. Demos. Comparisons.
3. **Wellness practitioner partnerships** — Bulk pricing, co-marketing, referral program.
4. **Reddit/forums** — Rife and PEMF communities are active and hungry for better tools.
5. **Podcast sponsorships** — Wellness, biohacking, meditation podcasts.
6. **Amazon** — Hardware listing for discovery (lower margin but high volume potential).

### Launch Sequence

1. **Pre-launch (4 weeks before):** Landing page + waitlist. Educational content about PEMF.
2. **Soft launch:** Free tier of web app. No hardware. Build user base on software alone.
3. **Hardware launch:** Coil available for purchase. Bundled with Explorer trial.
4. **Growth:** Weekly content drops, community building, practitioner outreach.

---

## Decision Framework

### Build if:
- We believe in the PEMF wellness space (evidence supports it for several conditions)
- We can commit 3-6 months of focused development
- We want a hardware + SaaS business with 85%+ margins
- We see the gap between clinical PEMF and pseudoscience PEMF as an opportunity

### Don't build if:
- We're uncomfortable with the wellness/alternative health space
- We can't dedicate focused engineering time
- We don't want to manage physical product logistics (hardware)
- The regulatory landscape feels too risky

### Minimum viable test:
- Build just the web app (no hardware) in 2-3 weeks
- Launch free tier with Solfeggio + Schumann + basic Rife frequencies
- See if organic traffic and signups materialize
- If yes, add paid tier and hardware
- Total cost to test: **$2,000-$5,000**

---

## Sources

- [DIY PEMF Community](https://diypemf.com/)
- [Hackaday - PEMF on a Budget](https://hackaday.com/2021/08/29/diy-machine-enables-pemf-therapy-on-a-budget/)
- [Hackster.io - High Power PEMF Build](https://www.hackster.io/mircemk/simple-to-build-high-power-pemf-therapy-device-f38d46)
- [DFRobot - DIY PEMF with Schumann Resonance](https://community.dfrobot.com/makelog-314961.html)
- [PCBWay - PC Controlled PEMF Device](https://www.pcbway.com/project/shareproject/DIY_PC_controlled_high_power_PEMF_Therapy_Device_94b268f4.html)
- [PEMF Market - DataM Intelligence](https://www.datamintelligence.com/research-report/pemf-therapy-device-market)
- [PEMF Market - Grand View Research](https://www.grandviewresearch.com/industry-analysis/pulse-electromagnetic-field-pemf-therapy-devices-market-report)
- [PEMF Market - Future Market Report](https://www.futuremarketreport.com/industry-report/pulsed-electromagnetic-field-therapy-pemf-device-market)
- [Qi Life Store](https://qilifestore.com/collections/qi-coils)
- [About Qi Life](https://qilifestore.com/pages/about-qi-life)
