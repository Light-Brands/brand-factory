# Technical Architecture: How Frequency Wellness Actually Works

**Document Version:** 1.0
**Date:** February 2026
**Classification:** Internal Research

---

## The Core Technology Stack (Demystified)

Strip away the quantum branding and here's what's actually happening in a product like QiCoil:

```
┌─────────────────────────────────────────────────┐
│                  SOFTWARE LAYER                  │
│                                                  │
│  Frequency Database ──► Frequency Generator      │
│  (conditions →          (oscillator creates      │
│   frequency lists)       audio waveforms)        │
│                              │                   │
│  Session Engine ────────► Audio Output            │
│  (sequences, timing,        │                    │
│   programs)                  │                   │
└──────────────────────────────┼───────────────────┘
                               │ 3.5mm audio / USB
┌──────────────────────────────┼───────────────────┐
│                  HARDWARE LAYER                   │
│                              │                   │
│  Audio Amplifier ◄───────────┘                   │
│       │                                          │
│  Electromagnetic Coil (toroid)                   │
│       │                                          │
│  Pulsed Electromagnetic Field (PEMF)             │
│       │                                          │
│  ~~~ Biological tissue within 3-7 ft ~~~         │
└──────────────────────────────────────────────────┘
```

That's it. A frequency generator plays audio tones through a coil instead of a speaker. The coil converts audio signal into electromagnetic field instead of sound waves. Every "quantum frequency console" in the market is a variation of this architecture.

---

## Part 1: The Hardware

### How a PEMF Coil Works

A PEMF coil is functionally identical to a speaker driver without the cone:

1. **Audio signal** (electrical current alternating at a specific frequency) flows through wire
2. **Wire wound into a coil** (toroid shape) creates an electromagnetic field
3. **Field strength** is proportional to current, number of windings, and coil geometry
4. **Field pulsates** at the frequency of the audio signal
5. **Biological tissue** within the field radius is exposed to the pulsed EM field

### Coil Design Specifications

**QiCoil Design (reverse-engineered from public info):**
- Toroid (donut) shape copper wire coil
- Yin model: counter-clockwise winding
- Yang model: clockwise winding
- Connected via standard 3.5mm audio jack
- Phone-powered (low power) or amplifier-powered (higher power)
- Field radius: ~3-7 feet depending on power

**DIY PEMF Coil Specifications (from open-source community):**

| Parameter | Value |
|-----------|-------|
| Frequency range | 0.1 Hz - 22,000 Hz (audio range) |
| Coil diameter | 8-17 cm |
| Windings | 200-300 turns |
| Wire | Copper magnet wire (22-28 AWG) |
| Inductance target | ~15 micro Henries |
| Min resistance | 6 ohms (12V supply), 9 ohms (19V supply) |
| Waveforms | Square wave most common for PEMF |
| Duty cycle | 5-15% for therapeutic applications |

**DIY Build Cost:**
| Component | Cost |
|-----------|------|
| Copper magnet wire (28 AWG, 200ft) | $8-15 |
| Toroid form/housing | $2-5 |
| 3.5mm audio cable | $1-3 |
| Optional: signal amplifier board | $5-15 |
| Optional: enclosure/housing | $3-10 |
| **Total** | **$10-48** |

### Power Options

| Source | Output | Field Strength | Use Case |
|--------|--------|---------------|----------|
| Smartphone audio jack | ~1V peak | Very low | Casual/gentle use |
| Tablet audio jack | ~1V peak | Very low | Casual/gentle use |
| USB audio adapter | ~1-2V peak | Low | Better signal quality |
| Dedicated amplifier (5W) | ~5V peak | Medium | Standard therapy |
| Power amplifier (20W+) | ~12-19V peak | High | Professional/clinical |

### Important: What Makes a "Good" PEMF Device

Not all PEMF devices are equal. Key factors:

1. **Waveform quality** — Clean signal with low distortion matters. Square waves are preferred for PEMF (vs. sine for audio)
2. **Frequency accuracy** — Must hit target frequencies precisely
3. **Field uniformity** — Coil geometry determines how even the field is
4. **Coil efficiency** — Better coils convert more electrical energy to EM field
5. **Duty cycle control** — Ability to pulse (not continuous wave) is important for therapeutic claims
6. **Safety** — Proper current limiting, thermal management, frequency restrictions near head

---

## Part 2: The Software

### What the "Console" Software Actually Does

At its core, the QiCoil Resonant Console is:

1. **A frequency database browser** — search/filter frequencies by category, condition, intention
2. **An audio oscillator** — generates sine, square, or triangle waveforms at specific frequencies
3. **A session/playlist engine** — sequences multiple frequencies with timing, transitions, layers
4. **An audio output router** — sends the generated audio to the coil via audio jack

### Web Audio API: The Engine

Modern browsers include the Web Audio API, which provides everything needed to build this:

```
AudioContext
├── OscillatorNode (generates waveforms)
│   ├── type: sine | square | triangle | sawtooth
│   ├── frequency: 0.1 Hz - 22,000 Hz
│   └── detune: fine-tuning in cents
├── GainNode (volume/amplitude control)
├── BiquadFilterNode (frequency filtering)
├── AnalyserNode (visualization data)
└── AudioDestination (output to speakers/coil)
```

**A basic frequency generator in ~20 lines of JavaScript:**
```javascript
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gain = ctx.createGain();

osc.type = 'square';           // Square wave for PEMF
osc.frequency.value = 7.83;    // Schumann resonance
gain.gain.value = 0.8;         // 80% amplitude

osc.connect(gain);
gain.connect(ctx.destination);  // Output to audio jack → coil
osc.start();
```

That's the technical foundation of every "frequency console" in this market.

### What Makes QiCoil's Software Valuable (Beyond the Oscillator)

1. **Curated frequency database** — Thousands of frequencies organized by intention/condition
2. **Multi-layer playback** — Multiple frequencies playing simultaneously
3. **Session programming** — Sequences with timing, ramp-up/down, transitions
4. **Custom program creation** — Users build their own frequency programs
5. **Content gating** — Tiered access to frequency libraries (the business model)
6. **Device compatibility** — Works across iOS, Android, Windows, Mac via web app
7. **User accounts + progress tracking** — Session history, favorites, recommendations

### Software Architecture for Our Version

```
┌────────────────────────────────────────────────────────┐
│                    FRONTEND (Web App)                   │
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  Frequency    │  │  Session     │  │  Audio       │ │
│  │  Browser      │  │  Builder     │  │  Engine      │ │
│  │              │  │              │  │              │ │
│  │  - Search     │  │  - Sequence  │  │  - Oscillator│ │
│  │  - Filter     │  │  - Timing    │  │  - Gain      │ │
│  │  - Categories │  │  - Layers    │  │  - Waveform  │ │
│  │  - Favorites  │  │  - Save/Load │  │  - Visualizer│ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  User         │  │  Subscription│  │  Education   │ │
│  │  Dashboard    │  │  Gate        │  │  Layer       │ │
│  │              │  │              │  │              │ │
│  │  - History    │  │  - Free tier │  │  - What this │ │
│  │  - Progress   │  │  - Pro tier  │  │    frequency │ │
│  │  - Settings   │  │  - Premium   │  │    does      │ │
│  │  - Device     │  │  - Content   │  │  - Research  │ │
│  │    config     │  │    unlock    │  │  - Safety    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└────────────────────────────────────────────────────────┘
                          │
                     API Layer
                          │
┌────────────────────────────────────────────────────────┐
│                    BACKEND                              │
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  Frequency    │  │  User/Auth   │  │  Subscription│ │
│  │  Database     │  │  Service     │  │  / Payments  │ │
│  │              │  │              │  │              │ │
│  │  - CAFL/Rife │  │  - Accounts  │  │  - Stripe    │ │
│  │  - Solfeggio │  │  - Sessions  │  │  - Tiers     │ │
│  │  - Custom    │  │  - Profiles  │  │  - Content   │ │
│  │  - Curated   │  │  - OAuth     │  │    gating    │ │
│  │    programs   │  │              │  │              │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└────────────────────────────────────────────────────────┘
```

### Recommended Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | Next.js (React) + TypeScript | PWA-capable, works on all devices, SSR for SEO |
| **Audio Engine** | Web Audio API + Tone.js | Tone.js wraps Web Audio API with higher-level abstractions for oscillators, effects, scheduling |
| **Visualization** | Canvas API or WebGL | Real-time waveform and frequency visualization |
| **Backend** | Next.js API routes or separate Node service | Simple API for frequency DB, auth, subscriptions |
| **Database** | PostgreSQL | Frequency data, user data, session data |
| **Auth** | NextAuth.js or Clerk | Social login, email, device management |
| **Payments** | Stripe | Subscriptions, one-time purchases, content gating |
| **Hosting** | Vercel or Railway | Low-ops, auto-scaling |
| **Mobile** | PWA (Progressive Web App) | Install to home screen, works offline, no app store needed |

---

## Part 3: The Frequency Database

### Open Source Frequency Sources

| Source | Frequencies | License | Notes |
|--------|-------------|---------|-------|
| **CAFL** (Consolidated Annotated Frequency List) | 10,000+ | Open/public domain | The foundation of all Rife frequency databases. Free to use. |
| **Spooky2 Database** | 40,000+ | Varies (13 sub-databases) | PROV, BIO, VEGA, CAFL, ETDFL, XTRA, HC, KHZ, RIFE, ALT, BP, DNA, MW |
| **Electroherbalism.com** | Extensive | Public | One of the most complete frequency reference sites |
| **FreX Database** | CAFL-based | Free | PC interface to CAFL frequency sets, outputs to sound card |
| **Solfeggio Frequencies** | 9 core tones | Public domain | 174, 285, 396, 417, 528, 639, 741, 852, 963 Hz |
| **Schumann Resonances** | 7 harmonics | Public domain | 7.83, 14.3, 20.8, 27.3, 33.8 Hz (Earth resonances) |
| **Planetary Frequencies** | ~20 | Public domain | Frequencies derived from planetary orbital periods |

### Frequency Content Strategy

**Tier 1: Free (open source)**
- Schumann Resonance (7.83 Hz)
- Core Solfeggio tones (9 frequencies)
- Basic relaxation frequencies
- Introduction to PEMF

**Tier 2: Standard ($15-29/mo)**
- Full CAFL Rife database (10,000+)
- Curated wellness programs
- Session builder
- Custom program creation

**Tier 3: Premium ($49-99/mo)**
- Advanced curated programs
- Practitioner tools
- Multi-layer frequency stacking
- Export/share programs
- Priority new content

**Tier 4: One-time purchases**
- Specialized collections (sleep, focus, pain, meditation)
- Practitioner certification + toolkit
- Hardware bundles

---

## Part 4: The Science (Honest Assessment)

### What PEMF Actually Does (Evidence-Based)

**Strong evidence:**
- Bone healing acceleration (FDA-cleared since 1979)
- Post-surgical pain reduction
- Wound healing improvement
- Reduced inflammation markers
- Improved blood flow/microcirculation

**Moderate evidence:**
- Depression symptom reduction (TMS — a form of PEMF — is FDA-cleared)
- Sleep quality improvement
- Chronic pain management
- Arthritis symptom relief

**Emerging/limited evidence:**
- Anxiety reduction
- Cognitive enhancement
- Athletic recovery
- General wellness benefits

**No credible evidence:**
- Quantum consciousness transformation
- Scalar wave therapy
- Manifestation of intentions
- Disease cure (as a standalone treatment)

### Key Published Research

- Over 600 scientific papers published on PEMF therapy between 2021-2024
- FDA-cleared devices grew from 18 (2020) to 29 (2024)
- NASA studied PEMF for astronaut bone density maintenance
- TMS (Transcranial Magnetic Stimulation) is FDA-cleared for depression, OCD, migraines
- Multiple systematic reviews show benefit for musculoskeletal conditions

### Our Positioning Opportunity

The market is split between:
1. **Clinical/medical PEMF** — Expensive, clinical, no personality
2. **Pseudoscience wellness** — QiCoil, various Rife machines — over-claims, quantum woo

**The gap:** A beautiful, honest, well-designed product that:
- Clearly explains what PEMF does and doesn't do
- References real research without overclaiming
- Provides genuine therapeutic value for evidence-based applications
- Uses "quantum" and "scalar" exactly zero times
- Builds trust through transparency rather than mysticism

---

## Sources

- [MDN Web Audio API - OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [Tone.js - Web Audio Framework](https://tonejs.github.io/)
- [Hackaday - DIY PEMF Therapy Device](https://hackaday.io/project/188386-pemf-therapy-device-experiments-diy)
- [Hackster.io - High Power PEMF Device](https://www.hackster.io/mircemk/simple-to-build-high-power-pemf-therapy-device-f38d46)
- [DIY PEMF Community](https://diypemf.com/)
- [Electroherbalism - Rife Frequency Database](http://www.electroherbalism.com/Bioelectronics/FrequenciesandAnecdotes/)
- [Royal Rife Research - Frequency Lists](https://www.rife.de/frequencies.html)
- [Spooky2 - Rife Frequency List](https://www.spooky2-mall.com/download/spooky2rifefrequencylist.pdf)
- [CAFL Cross Reference](https://www.royalrife.com/lists.html)
- [Rife Frequencies Database - Medium](https://medium.com/@rifetrek/rife-frequencies-database-4b6adbc47f5c)
