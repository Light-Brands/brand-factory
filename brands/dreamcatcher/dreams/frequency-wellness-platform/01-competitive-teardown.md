# Competitive Teardown: QiCoil (Qi Life)

**Document Version:** 1.0
**Date:** February 2026
**Classification:** Internal Research

---

## Company Overview

| Detail | Info |
|--------|------|
| **Company** | Qi Life (dba QiCoil) |
| **Legal Entity** | Quantum Wave Biotechnology Corp |
| **Founder** | David Wong ("The Frequency Expert" / "The Qi Master") |
| **Websites** | qicoil.com, qilifestore.com, members.qicoil.com, consoles.qicoil.com |
| **Category** | Consumer wellness / frequency therapy / PEMF devices |
| **Trademark** | QI COIL — Registration #6006105 (USPTO) |

David Wong founded Qi Life after reportedly healing himself from a chronic condition using frequency and energetic alignment. He has released over 1,076 proprietary meditation frequencies and authored "Life of Qi" covering frequency healing technology.

---

## What They Actually Sell

QiCoil's business is a **hardware + software + content** trifecta:

### 1. Hardware: Electromagnetic Coils

Physical coils that connect to a phone/tablet via 3.5mm audio jack (or Lightning adapter). When audio frequencies play through the coil, it converts the audio signal into a pulsed electromagnetic field (PEMF).

| Product | Price | What It Is |
|---------|-------|------------|
| Qi Coil Mini (Single) | $679 | Single compact EM coil, carrying case, mobile power kit, adapters |
| Qi Coil Mini (Twin) | $1,079 | Two coils (Yin + Yang — counter-rotating EM fields) |
| Qi Coil 3S System | Premium tier | Three "Quantanium" crystals per coil, scalar wave claims, orgone body |
| Qi Coil Max | Premium tier | Highest-power coil system for practitioners |
| Aura Coil | Varies | Larger coil for ambient room coverage |
| Resonant Wand | Varies | Handheld point-application device |

**Key Technical Details:**
- Coils generate an EM field with ~3-7 foot radius
- Yin Coil rotates counter-clockwise, Yang Coil rotates clockwise
- Yang Coil limited to 20-minute sessions
- Metal ball included vibrates to confirm frequency emission
- Frequency range: 0.1 Hz to 22,000 Hz (audio range)
- Connects via standard 3.5mm audio jack — the coil IS essentially a speaker that outputs EM instead of sound
- Safe to touch when phone-powered; keep 2ft from head with power kits

**What it costs to build (estimated):**
- Copper wire coil (toroid design): $2-5
- 3.5mm audio cable: $1
- Housing/enclosure: $3-10
- Packaging/branding: $5-15
- **Total BOM: ~$10-30 per unit**

### 2. Software: Resonant Console

Proprietary web-based frequency generator app, delivered on a dedicated 10" tablet or through members.qicoil.com.

| Console Tier | Price | Frequencies Included |
|--------------|-------|---------------------|
| Resonant Console 1 (Rife) | $1,500 | 10,000+ Rife frequencies, starter quantum pack |
| Resonant Console 2 (Quantum) | $2,000 | 1,038 quantum frequencies + 10,000+ Rife |
| Resonant Console 3 (Master) | $5,000 (est.) | + 150 quantum, 137 higher quantum, 57 inner circle |
| Resonant Console 4 (Inner Circle) | $13,000 | 151,000+ total: all Rife, quantum, higher quantum, inner circle, abundance |

Each console includes a 10" tablet ($500 value claimed) with the software pre-loaded.

**What the software actually does:**
- Generates audio waveforms (sine, square, triangle) at specific frequencies
- Routes audio signal to the coil via audio jack
- Provides a browsable/searchable frequency library
- Allows custom frequency program creation
- Plays frequency "sessions" — sequences of frequencies at specified durations
- Proprietary, not available on app stores — web app at members.qicoil.com

### 3. Content: Frequency Libraries

This is the real recurring revenue engine. Frequency "programs" are packaged and sold as digital content:

**Frequency Categories:**
- **Rife Frequencies** — Based on Royal Rife's 1920s-30s research. 10,000+ frequencies mapped to specific conditions. The CAFL (Consolidated Annotated Frequency List) is actually open-source and freely available.
- **Quantum Frequencies** — Proprietary. Claimed to use "up to 5,000 neural data signals per program" vs. 1-5 for competitors. Created using "hyper-dimensional math" and "dynamic numerical models."
- **Higher Quantum Frequencies** — Premium tier of proprietary frequencies
- **Inner Circle Frequencies** — Highest tier, sold separately or in bundles
- **Solfeggio Frequencies** — Ancient toning frequencies (174, 285, 396, 417, 528, 639, 741, 852, 963 Hz)
- **Chakra Series** — Frequencies mapped to chakra system
- **Schumann Resonance** — Earth's natural 7.83 Hz frequency

**Example Frequency Collections with Pricing:**
| Collection | Programs | Individual Value |
|------------|----------|-----------------|
| Life Force | 7 programs | ~$169-$229 each |
| Quantum Meditation | 8 programs | ~$159-$229 each |
| Brain Boost | Bundle | $200+ |
| Spiritual Ascension | Bundle | $200+ |
| Skin Care (Higher Quantum) | Bundle | Premium |
| Complete Advanced Collection | 414+ frequencies | $9,953 claimed value |
| Higher Quantum Collection | 647 frequencies | $5,680 claimed value |
| Inner Circle Abundance | 91 frequencies | $10,858 claimed value |

**Subscription Model:**
- Quantum Essential Frequency Subscription included as 30-day trial with hardware
- After trial: recurring subscription for continued access
- 12 curated essential wellness frequencies + 10,000+ Rife library
- Web app access (no download required)

### 4. Distribution: Reseller/Practitioner Channel

| Detail | Info |
|--------|------|
| Distributor License Fee | $7,500/year |
| Includes | Full Advanced Quantum Collection, Inner Circle Membership, Abundance Collection, Hidden Dragon Club |
| Target | Wellness practitioners, therapists, holistic health providers |

---

## Revenue Model Analysis

QiCoil runs a classic **razor + blade + subscription** model:

```
Revenue Stream 1: Hardware (one-time)
├── Entry: $679-$1,079 (Qi Coil Mini)
├── Mid: $2,000-$5,000 (3S Systems, Max)
└── Premium: Aura Coils, Resonant Wands, bundles

Revenue Stream 2: Software Console (one-time)
├── Console 1: $1,500
├── Console 2: $2,000
├── Console 3: ~$5,000
└── Console 4: $13,000

Revenue Stream 3: Frequency Content (recurring + one-time)
├── Subscription: Monthly (price unclear, est. $29-$99/mo)
├── Individual collections: $169-$10,858
└── Complete library: $31,949 claimed value

Revenue Stream 4: Distribution (recurring)
└── Distributor License: $7,500/year

Revenue Stream 5: Education/Community
├── Inner Circle membership
├── David Wong courses/coaching
└── Book sales
```

**Estimated Customer Lifetime Value:**
- Minimum path: $679 (Mini) + $0 (trial only) = **$679**
- Typical enthusiast: $1,079 (Twin) + $2,000 (Console 2) + $500 (collections) = **$3,579**
- Power user: $1,079 + $13,000 (Console 4) = **$14,079**
- Distributor: $7,500/year recurring

---

## Marketing & Positioning

### Brand Narrative
- "The future medicine will be medicine of frequencies" (attributed to Einstein, though unverified)
- NASA imagery used for credibility (PEMF is used in space medicine)
- Transformation stories and testimonials front and center
- David Wong as authority figure / frequency expert
- Heavy use of terms: quantum, scalar, consciousness, transformation

### Claims Spectrum (honest assessment)
| Claim | Evidence Level |
|-------|---------------|
| PEMF affects biological tissue | **Strong** — 600+ published papers, FDA-cleared devices exist |
| Specific frequencies help specific conditions | **Mixed** — Some evidence for bone healing, pain; weak for most claims |
| "Quantum frequencies" with 5,000 neural data signals | **Unsubstantiated** — Proprietary, no peer review |
| Scalar wave therapy | **Pseudoscience** — Not supported by mainstream physics |
| Manifestation / consciousness transformation | **No scientific evidence** |

### Disclaimers
QiCoil includes: "Qi Coil systems are designed to support wellness routines and are not intended to diagnose, treat, cure, or prevent any disease."

---

## Competitive Landscape

### Direct Competitors (PEMF + Software)
| Company | Product | Price Range | Differentiator |
|---------|---------|-------------|----------------|
| **QiCoil** | Coils + Console | $679-$13,000 | Frequency library depth, quantum branding |
| **BEMER** | BEMER Pro/Classic | $3,000-$6,500 | Medical-grade, clinical studies, MLM distribution |
| **Spooky2** | Rife generators | $200-$2,000 | 40,000+ programs, open frequency database, enthusiast community |
| **RifePlayer** | Web software | Free-$subscription | Software only, no hardware, Rife frequency player |

### Broader PEMF Market
| Company | Focus | Price Range |
|---------|-------|-------------|
| OMI (US) | Clinical PEMF | $500-$5,000 |
| Swiss Bionic Solutions | iMRS systems | $2,000-$15,000 |
| Curatronic | Professional PEMF | $1,000-$10,000 |
| Oska Pulse | Consumer pain relief | $400-$600 |
| Pulse PEMF | Professional/clinical | $5,000-$30,000 |

### Market Numbers
- Global PEMF market: **$557-$820M** (2024)
- Projected: **$953M-$1.02B** by 2033-2034
- CAGR: **4.5-7.3%**
- FDA-cleared devices: Grew from 18 (2020) to 29 (2024)
- Home care segment: 2.5M+ units sold globally for personal use (2024)
- Top 3 companies (OMI, BEMER, Swiss Bionic) hold ~55% of market innovations

---

## Strengths & Weaknesses

### QiCoil Strengths
- **Massive content library** — 151,000+ frequencies is a moat even if many are trivially generated
- **Full ecosystem** — Hardware, software, content, community, education all under one roof
- **Strong founder narrative** — David Wong as authority figure creates trust
- **High margins** — Hardware that costs $10-30 sells for $679-$13,000
- **Recurring revenue** — Subscriptions + new frequency releases + distributor licenses
- **Mobile-first** — Works with phones, no special equipment needed beyond the coil

### QiCoil Weaknesses
- **Pseudoscience overload** — "Quantum," "scalar," "hyper-dimensional math" alienates credibility-conscious buyers
- **Opaque technology** — No peer review, no published methodology, no open specifications
- **Predatory pricing** — Console tiers that differ only in unlocked content, up to $13K
- **Locked ecosystem** — Proprietary everything, no interoperability
- **Aesthetic gap** — Website and brand design are functional but not premium
- **No clinical validation** — Uses NASA imagery but has no published clinical trials of their own
- **Content moat is shallow** — Rife frequencies are open source (CAFL), and "quantum frequencies" are unverifiable

---

## Key Takeaways for Building Our Own

1. **The hardware is trivial.** A toroid coil with an audio input is a weekend electronics project. The value is in software, content, and brand.

2. **The software is a frequency generator.** Web Audio API can generate sine/square/triangle waves at any frequency. The "console" is a UI around an oscillator.

3. **The content library is the moat.** 10,000+ Rife frequencies are open source. "Quantum frequencies" are proprietary but unverifiable. The real value is curation, packaging, and user experience.

4. **The brand is the product.** QiCoil sells transformation, not coils. Whoever tells the best story and builds the most trust wins.

5. **The margin structure is insane.** $10 hardware sold for $679. A frequency generator app sold for $1,500-$13,000. This market tolerates premium pricing because the buyers are wellness-committed.

6. **The honest middle ground is empty.** Between sketchy quantum claims and dry clinical PEMF, nobody is building beautiful, honest, well-designed frequency tools with integrity.

---

## Sources

- [QiCoil Main Site](https://www.qicoil.com/)
- [Qi Life Store - Products](https://qilifestore.com/collections/qi-coils)
- [QiCoil FAQs](https://help.qilifestore.com/en-US/articles/qi-coil-faqs-41908)
- [Resonant Console 1 - Rife](https://qilifestore.com/products/resonant-console-1-rife-5)
- [Resonant Console 2 - Quantum](https://qilifestore.com/products/resonant-wave-console-2)
- [Resonant Console 4 - Inner Circle](https://qilifestore.com/products/resonant-console-3-inner-circle-151-000-frequencies)
- [QiCoil Distributor Program](https://qicoil.co/)
- [QiCoil and Rife Machine Systems](https://info.qicoil.com/rife-machine/)
- [Beyond Blessed Therapy - What is QiCoil](https://www.beyondblessedtherapy.com/post/what-is-the-qi-coil-and-frequency-therapy)
- [David Wong - Benzinga Press Release](https://www.benzinga.com/pressreleases/22/11/ab29792674/david-wong-visionary-inventor-shares-the-benefits-of-qi-coil-pemf-therapy)
- [QI COIL Trademark - Justia](https://trademarks.justia.com/885/16/qicoil-88516242.html)
- [PEMF Market - Business Research Insights](https://www.businessresearchinsights.com/market-reports/pemf-therapy-device-market-122904)
- [PEMF Market - Cognitive Market Research](https://www.cognitivemarketresearch.com/pulsed-electromagnetic-field-therapy-devices-market-report)
