# AI Companion — Real-Time Musical Intelligence

> A co-producer that listens, adapts, and mixes alongside you — turning the board from a solo instrument into a duo.

## The Idea

You're playing the MIDI Studio. Eight instruments under your hands. You're sweeping the guitar Range up, cranking the drums Depth, riding the vocal Expression slider. You're performing.

Sitting next to you — virtually — is an AI that hears everything you're doing. Not after the fact. Right now. It's reading the MIDI stream, analyzing the audio output, and making real-time decisions:

- You bring the vocals in hot? It ducks the guitar and piano 2dB to make room.
- You switch drums from Basic Beat to Breakbeat? It nudges the bass into a syncopated walking pattern to match the groove shift.
- You've been building energy for 16 bars? It subtly opens up the master reverb and widens the stereo field, anticipating a climax.
- You pull everything down to just bass and drums? It darkens the EQ, tightens the reverb, and waits for you to bring it back up.

It's not making the music. You are. It's making your music sound better in real time — the way a great sound engineer rides the board during a live performance, the way a great band member reads the room and adjusts.

## What It Is and What It Isn't

**It IS:**
- A real-time mix engineer that rides levels, EQ, and effects based on what's happening
- A musical co-pilot that adds variation, fills, and transitions to make patterns feel alive
- A performance enhancer that smooths rough edges and adds subtle human detail
- A learning system that adapts to your style over time
- An optional layer — you can turn it off entirely and play raw

**It ISN'T:**
- A replacement for the performer — it never overrides your control movements
- A generative music engine — it doesn't compose or play instruments on its own
- An auto-pilot — it enhances what you're doing, not what it thinks you should do

**The line:** You drive the music. The AI drives the production.

---

## Architecture — Where the AI Lives

The AI Companion sits as a new intelligence layer that wraps around the existing signal flow. It doesn't replace any layer — it observes and adjusts across all of them.

```
                    ┌──────────────────────────────────────────┐
                    │           AI COMPANION LAYER              │
                    │                                          │
  PHYSICAL          │    ┌─────────┐                           │
  CONTROLS    ──────┼──→ │ GESTURE │    ┌───────────┐         │         OUTPUT
  (Layer 1)         │    │ READER  │───→│           │         │         AUDIO
                    │    └─────────┘    │  DECISION │         │        (Layer 4)
  SOUND             │    ┌─────────┐    │  ENGINE   │──adjust─┼──→  Mix Bus
  ENGINE      ──────┼──→ │ AUDIO   │───→│           │         │        (Layer 3)
  (Layer 2)         │    │ ANALYZER│    │           │──adjust─┼──→  Pattern Gen
                    │    └─────────┘    └───────────┘         │        (Layer 2)
                    │         ↑               │               │
                    │         │          ┌────┴────┐          │
                    │    Audio tap       │ MEMORY  │          │
                    │    from mix bus    │ + STYLE │          │
                    │                   │ LEARNER │          │
                    │                   └─────────┘          │
                    └──────────────────────────────────────────┘
```

### Four Internal Modules

**1. Gesture Reader** — Watches the MIDI stream from your controls
**2. Audio Analyzer** — Listens to the mix bus audio output
**3. Decision Engine** — Combines both inputs and decides what to adjust
**4. Memory + Style Learner** — Remembers your preferences and adapts over time

---

## Module 1: Gesture Reader

**Input:** Raw MIDI CC data from all 8 channels + master section (Layer 1)
**Output:** Musical intent signals to the Decision Engine

The Gesture Reader doesn't just see CC values — it interprets what you're *doing*. It reads gestures, not data.

### What It Detects

| Gesture | How It's Detected | Musical Meaning |
|---------|------------------|-----------------|
| **Energy ramp** | Multiple Depth knobs trending upward over 4+ bars | Building toward climax |
| **Density change** | Channels being unmuted/muted in sequence | Arrangement is expanding or contracting |
| **Focus shift** | One channel's Expression moving actively while others idle | Performer is soloing / featuring that instrument |
| **Mode cluster** | Multiple channels changing Mode within a short window | Intentional section change (verse → chorus) |
| **Groove lock** | Drums + bass controls stable, others moving | Rhythm section is anchored, performer is painting on top |
| **Breakdown** | Most channels muted, remaining at low Depth | Stripped-back moment, needs space |
| **Drop** | Multiple channels unmuted + Depth spiked simultaneously | The drop — everything comes in at once |
| **Sweep** | A single control moving slowly across its full range | Gradual timbral shift, needs smooth response |

### Gesture Detection — How It Works

The reader maintains a rolling window of control states (last 8-16 bars). It tracks:

- **Velocity of change:** How fast controls are moving (slow sweep vs. sudden jump)
- **Direction of change:** Trending up, down, or oscillating
- **Correlation between channels:** Are multiple instruments moving in the same direction?
- **Temporal patterns:** Are changes happening on musical boundaries (beat 1, bar 1)?

This isn't complicated AI — it's mostly rate-of-change math and threshold detection. A simple state machine can classify most gestures from the patterns above. The intelligence is in knowing what to *do* with the classification.

---

## Module 2: Audio Analyzer

**Input:** Audio tap from the mix bus (post-summing, pre-master effects)
**Output:** Spectral and dynamic analysis to the Decision Engine

The Audio Analyzer listens to the actual sound being produced — not just the MIDI data. This catches things the Gesture Reader can't: frequency masking, loudness imbalance, tonal character.

### What It Measures

| Analysis | Method | Update Rate | Purpose |
|----------|--------|-------------|---------|
| **Spectral balance** | FFT across frequency bands (sub, low, low-mid, mid, hi-mid, high, air) | Every beat | Detect frequency buildup and masking |
| **Per-channel loudness** | LUFS metering per instrument channel | Continuous | Track relative levels across instruments |
| **Dynamic range** | Peak-to-RMS ratio across the mix | Every bar | Detect when the mix is getting crushed or too dynamic |
| **Key/chord detection** | Chromagram analysis | Every bar | Confirm harmonic content matches the set key |
| **Onset density** | Transient detection rate | Every beat | Measure how busy/sparse the arrangement is |
| **Stereo width** | Mid-side correlation | Continuous | Track how wide or narrow the mix feels |
| **Spectral centroid** | Brightness measurement | Every bar | Overall tonal character (dark vs. bright) |

### Frequency Conflict Detection

The most valuable thing the Audio Analyzer does is detect when instruments are fighting for the same frequency space:

```
  Frequency conflict example:

  Guitar (Ch 1):    ████████████████        (200Hz - 2kHz, centered at 800Hz)
  Vocals (Ch 8):            ████████████████ (300Hz - 4kHz, centered at 1.2kHz)
                            ↑↑↑↑↑↑↑↑
                       OVERLAP ZONE (300Hz - 2kHz)

  AI response: Duck guitar by 2dB in the 500Hz-1.5kHz range
               OR: Shift guitar EQ emphasis downward toward 300Hz
               OR: Narrow guitar stereo image, widen vocals
```

The analyzer flags conflicts when two or more channels have significant energy in the same frequency band simultaneously. It passes these conflicts to the Decision Engine with severity ratings.

---

## Module 3: Decision Engine

**Input:** Gesture classifications + Audio analysis
**Output:** Real-time adjustments to the mix bus and pattern generators

This is the core intelligence. It takes everything the Gesture Reader and Audio Analyzer report and decides what to adjust, by how much, and how quickly.

### Decision Categories

#### 3A: Mix Adjustments (Always Active)

These happen continuously and transparently. The performer shouldn't notice them — they should just notice the mix sounds better.

| Situation | AI Action | Speed | Range |
|-----------|-----------|-------|-------|
| Frequency conflict between channels | Subtle EQ cut on the less-featured instrument | Gradual (1-2 beats) | -1 to -4 dB at conflict frequency |
| One channel significantly louder than mix average | Gentle level attenuation | Gradual (1-2 bars) | -1 to -3 dB |
| Vocals active + mid-range instruments crowding | Duck mid-range instruments (guitar, piano, synth) | Immediate (100ms) | -1 to -3 dB |
| Bass and kick drum simultaneous hits | Sidechain compression on bass | Immediate (attack/release) | -2 to -6 dB, tempo-synced release |
| Mix loudness exceeding target | Master limiter engagement | Immediate | Ceiling at -1 dBFS |
| Stereo image too narrow (many center instruments) | Auto-pan non-featured instruments | Gradual (2-4 bars) | ±10-30% pan |
| Stereo image too wide (everything panned out) | Gently center primary elements | Gradual (2-4 bars) | Center bass, drums, vocals |

**Key principle:** All mix adjustments are *subtractive and gentle*. The AI cuts and ducks — it never boosts. It makes room rather than adding energy. This prevents feedback loops and ensures the performer stays in control of the overall energy.

#### 3B: Pattern Enhancement (Active When Enabled)

These make the pattern generator's output feel more human and musically responsive. Unlike mix adjustments, these modify the MIDI data going to instruments.

| Situation | AI Action | Musical Effect |
|-----------|-----------|----------------|
| Pattern has been looping unchanged for 8+ bars | Introduce subtle variation (ghost notes, slight timing shifts, occasional ornament) | Prevents mechanical repetition |
| Energy is building (Gesture Reader: energy ramp) | Gradually increase pattern density, add fills approaching section boundaries | Natural build-up, like a drummer sensing a chorus coming |
| Breakdown detected (most channels muted) | Strip patterns to minimal essential notes, open up rhythmic space | Breathing room, tension |
| Drop detected (channels unmuted + high Depth) | Hit the downbeat hard, fill out patterns to maximum density for 1-2 bars, then settle | Impact on the drop, then groove |
| Focus shift to a specific instrument | Other instruments' patterns become more supportive (simpler, less busy) | Featured instrument gets spotlight |
| Mode change on an instrument | Smooth the transition over 1-2 beats instead of hard-switching | Natural, musical transitions between playing styles |
| Drum pattern is straight but Expression is pushing toward swing | Suggest matching shuffle feel to bass and guitar patterns | Groove cohesion across instruments |

**Key principle:** Pattern enhancements are suggestions made within the performer's musical framework. The AI doesn't change the key, the mode, the tempo, or the basic pattern — it adds detail and variation within those constraints.

#### 3C: Effects Intelligence (Active When Enabled)

Instead of a single global effects preset, the AI dynamically adjusts effect parameters based on musical context.

| Situation | AI Action | Why |
|-----------|-----------|-----|
| Arrangement density increasing | Reduce reverb wet/dry ratio | Prevents wash; keeps clarity in a busy mix |
| Breakdown / sparse arrangement | Increase reverb tail, add subtle delay | Fills space, creates atmosphere when instruments are sparse |
| Tempo increase | Shorten delay time proportionally, tighten reverb | Keeps effects musical at higher speed |
| Vocals featured (solo or high Depth) | Add plate reverb specifically to vocal channel | Vocal polish, studio production feel |
| Drums at high Depth | Add subtle parallel compression to drum bus | Punch and body without losing dynamics |
| Synth doing a filter sweep (Expression moving) | Ride the delay feedback in sync with the filter movement | Creates evolving, psychedelic texture |
| End of a section (detected by Mode cluster change) | Brief reverb/delay tail bloom, then pull back | Natural section transition, like a room breathing |

---

## Module 4: Memory + Style Learner

**Input:** Session history (all gestures, all AI decisions, all outcomes)
**Output:** Personalized behavior profiles for the Decision Engine

This is what makes the AI a true companion rather than a static tool. It learns how *you* play and adapts.

### What It Remembers

**Per-Session Memory (Short-Term):**
- What gestures you've made this session
- What mix states sounded balanced (based on your manual corrections)
- What energy arc the performance is following
- Which instruments you tend to feature and when

**Cross-Session Memory (Long-Term):**
- Your preferred instrument levels (you always mix vocals louder? It starts them higher)
- Your genre tendencies (you always use heavy swing? It biases toward shuffle feel)
- Your arrangement patterns (you always build from drums → bass → guitar → everything? It anticipates the sequence)
- Your correction patterns (you always pull back the AI's reverb suggestions? It reduces reverb aggressiveness)

### How It Learns

The learning signal is simple: **your manual corrections are the feedback**.

```
  AI ducks guitar by 3dB when vocals come in
      ↓
  You manually push guitar fader back up 1.5dB
      ↓
  AI learns: this performer wants less vocal ducking than default
      ↓
  Next time: AI ducks guitar by 1.5dB instead of 3dB
```

Every time you counteract an AI decision, the AI learns to do less of that. Every time you leave an AI decision alone, the AI learns that was correct. Over many sessions, the AI converges on your personal production style.

### Style Profiles

The learner builds named style profiles that can be saved:

```
  Profile: "Late Night Jazz"
  ├── Reverb preference: Hall, 40% wet (higher than default)
  ├── Vocal ducking: Minimal (-1dB, not -3dB)
  ├── Swing bias: 65% swing on all rhythmic patterns
  ├── Bass presence: +2dB above default leveling
  ├── Pattern density: Low (prefer space over busy)
  ├── Stereo width: Narrow (intimate, close)
  └── Learned from: 12 sessions, 8.5 hours of performance data

  Profile: "Rock Energy"
  ├── Reverb preference: Room, 20% wet (tight)
  ├── Guitar priority: Guitar rarely ducked, even during vocals
  ├── Swing bias: Straight feel, no shuffle
  ├── Drum compression: Heavy parallel compression
  ├── Pattern density: High (full, driving)
  ├── Stereo width: Wide (big, arena feel)
  └── Learned from: 7 sessions, 4 hours of performance data
```

You can switch profiles before a session: "Tonight I'm playing jazz" → AI loads your jazz preferences. Or let the AI detect the style automatically from your first few gestures.

---

## Companion Interface — How You Interact

The AI Companion needs a way to communicate with you *without interrupting your performance*. Hands are on the board. Eyes might glance at a screen. Ears are on the music.

### Visual Feedback (Screen / Tablet)

A companion display showing what the AI is hearing and doing:

```
  ┌─────────────────────────────────────────────────────────────────┐
  │  AI COMPANION                                    ● LISTENING    │
  │                                                                 │
  │  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐            │
  │  │ GTR │ BAS │ DRM │ PNO │ STR │ SYN │ BRS │ VOX │            │
  │  │     │     │ ███ │     │     │     │     │ ██  │  ← Level   │
  │  │ ██  │ ███ │ ███ │ █   │     │ ██  │     │ ███ │    meters  │
  │  │ ███ │ ███ │ ███ │ ██  │ █   │ ███ │ █   │ ███ │            │
  │  │ ███ │ ███ │ ███ │ ███ │ ██  │ ███ │ ██  │ ███ │            │
  │  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤            │
  │  │-1dB │     │     │-2dB │     │     │     │     │ ← AI adj.  │
  │  │ EQ↓ │     │     │duck │     │     │     │feat │ ← Reason   │
  │  └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘            │
  │                                                                 │
  │  MIX HEALTH: ████████░░ 82%    ENERGY: ▁▂▃▅▆▇▇█ Building     │
  │                                                                 │
  │  AI: "Vocals are featured — ducked piano to clear midrange"     │
  │  AI: "Energy building for 8 bars — opening reverb tail"         │
  │                                                                 │
  │  STYLE: Late Night Jazz          SESSION: 23 min               │
  └─────────────────────────────────────────────────────────────────┘
```

Key elements:
- **Channel meters** with AI adjustment indicators (-1dB, duck, EQ)
- **Mix Health score** — aggregate measure of frequency balance, dynamic range, stereo image
- **Energy arc** — visual representation of the performance energy over time
- **AI log** — short, plain-language explanations of what the AI is doing and why
- **Style and session info** — current profile and session duration

### Voice Interaction (Optional, Hands-Free)

For performers who want to give the AI direction without taking hands off the board:

| Voice Command | AI Response |
|--------------|-------------|
| "More space" | Reduces pattern density, increases reverb, widens stereo |
| "Tighter" | Reduces reverb, tightens timing, narrows stereo |
| "Feature the strings" | Ducks everything else, opens up frequency range for strings |
| "Build it" | Gradually increases density, energy, effects over next 8-16 bars |
| "Drop" | Prepares a dynamic drop — pulls energy back, then hits hard on your cue |
| "Darker" | Rolls off high frequencies across the mix, shifts spectral center down |
| "Brighter" | Opens up top end, adds presence, shifts spectral center up |
| "Less AI" | Reduces aggressiveness of all AI adjustments by 50% |
| "Reset" | Returns all AI adjustments to zero, fresh start |

Voice interaction is optional and should be configurable. Some performers will want total silence from the AI (visual only). Some will want voice feedback back ("Got it — building over 8 bars").

---

## Practical Implementation — How to Build This

### Phase 1 Integration (Proof of Concept)

In Phase 1, the AI Companion starts simple. You don't need machine learning — you need smart rules.

**What to build first:**

#### 1. Basic Mix Ducking (Easy)
- Monitor vocal channel (Ch 8) MIDI Depth value
- When vocal Depth > 60, apply -2dB to guitar (Ch 1) and piano (Ch 4)
- Fade the duck over 200ms to avoid pumping
- **Build with:** DAW sidechain compression, or simple Max for Live / Pure Data patch
- **Why first:** This is the single most impactful mix improvement and the easiest to implement

#### 2. Frequency-Aware Leveling (Moderate)
- Run a simple 4-band spectral analysis on the mix bus (low, low-mid, mid, high)
- When any band exceeds a threshold, attenuate the channel contributing most to that band
- Use preset frequency profiles per instrument (bass = low, guitar = mid, vocals = high-mid, etc.)
- **Build with:** DAW EQ with sidechain, or spectral analysis in Max for Live / Pure Data
- **Why second:** Prevents the mud problem that happens with 8 instruments playing simultaneously

#### 3. Pattern Variation Injection (Moderate)
- Track how many bars a pattern has repeated without change
- After 8 bars, introduce one subtle change per bar: a ghost note, a slight velocity variation, a 10ms timing shift
- Keep variations within 10% of the original pattern — noticeable enough to prevent boredom, subtle enough not to surprise
- **Build with:** MIDI processing in Max for Live / Pure Data / Python
- **Why third:** This is the difference between "sounds like a loop" and "sounds like a musician"

#### 4. Simple Gesture Detection (Moderate)
- Track the direction and speed of all Depth knobs over a 4-bar window
- If 3+ channels are trending upward → classify as "building"
- If 3+ channels are trending downward → classify as "pulling back"
- When building: gradually increase pattern density by 10-20%
- When pulling back: reduce density, open reverb
- **Build with:** Rolling average of CC values, threshold comparison

### Phase 2 Integration (Full AI)

Phase 2 is where actual AI models enter the picture.

#### Audio Analysis Pipeline
- Real-time FFT analysis of mix bus audio (already solved problem — many open-source libraries)
- Loudness metering (LUFS) per channel and master
- Onset detection for rhythm analysis
- **Libraries:** `librosa` (Python), `essentia` (C++/Python), or built-in Max for Live audio analysis

#### AI Model Options

| Approach | Model Type | Runs Where | Latency | Best For |
|----------|-----------|------------|---------|----------|
| **Rules + heuristics** | No model, just code | Local (CPU) | <1ms | Mix ducking, basic gesture detection |
| **Small neural net** | Lightweight classifier | Local (CPU) | 1-5ms | Gesture classification, pattern variation |
| **LLM API** | Claude / GPT | Cloud | 200-500ms | Voice commands, style analysis, session summaries |
| **Audio ML model** | Pretrained audio net | Local (GPU) or cloud | 10-50ms | Spectral analysis, key detection, mix quality scoring |

**Recommended hybrid approach:**
- **Local rules** for all time-critical mix adjustments (must be <10ms latency)
- **Local small model** for gesture classification and pattern enhancement (can tolerate 5-50ms)
- **Cloud LLM** for voice interaction and non-real-time features (session summary, style profile generation, natural language feedback)

The mix engineer functions MUST be local and fast. You can't send audio to the cloud and wait 300ms for a ducking decision — the moment has passed. But voice commands and session analysis can tolerate cloud latency because they're not time-critical.

#### Learning System
- Log all performer actions and AI adjustments per session
- After each session, use an LLM to analyze patterns: "This performer tends to prefer vocals 2dB louder than the AI's default. They always correct the guitar ducking to be less aggressive. They favor long reverb tails."
- Feed these learnings into the Decision Engine as parameter adjustments
- **Build with:** Session logs → Claude API for analysis → JSON config updates

### Phase 3 Integration (Embedded)

If building custom hardware (Phase 3 of the main build scope), the AI Companion gets a dedicated processing path:

- **Teensy 4.1** handles all MIDI I/O (same as base design)
- **Raspberry Pi 4/5** or **Jetson Nano** added as co-processor for AI inference
- Local audio analysis runs on the co-processor
- Small ML models for gesture detection and mix adjustment run locally
- Wi-Fi connection to cloud LLM for voice interaction and learning
- Companion display runs as a web app on any connected screen

Hardware addition cost: $50-100 for a Raspberry Pi 4 + audio interface.

---

## AI Behavior Controls — The Performer Stays in Charge

The AI must NEVER feel like it's taking over. These controls ensure the performer has full authority:

### AI Level Knob (Physical on the Board)

A single knob on the master section that controls AI involvement:

```
  AI LEVEL
  ┌─────────┐
  │  ╱ · · ╲ │
  │ ·       · │     0% = AI completely off (raw, unprocessed)
  │·    ●    ·│    25% = Mix ducking only (safest, most transparent)
  │ ·       · │    50% = Mix + effects intelligence
  │  ╲ · · ╱ │    75% = Mix + effects + pattern enhancement
  └─────────┘    100% = Full companion (all features active)
```

This is the most important control on the companion. It lets you dial back the AI mid-performance if it's doing too much. It's continuous, not stepped — at 30% you get mostly ducking with a touch of EQ adjustment.

### Override Priority

When the performer and AI disagree, the performer always wins:

1. Performer moves a control → AI immediately defers on that parameter
2. AI adjustment is overridden → AI backs off that specific behavior for the rest of the section
3. Performer says "less AI" → all AI adjustments reduced by 50%
4. Performer says "reset" → all AI adjustments cleared, starts fresh

### Transparency

The AI should never make secret adjustments. Everything it does is logged and shown on the companion display. If a performer wonders "why does the guitar sound different?" — the answer is visible: "AI: -2dB at 800Hz, guitar conflicting with vocal."

---

## What This Solves — Connecting Back to the Core Design

The AI Companion directly addresses several of the "Biggest Risks and Honest Unknowns" from the build scope:

| Risk (from 06-build-scope.md) | How AI Companion Helps |
|------|------------------------|
| "The mix might be mud" with 8 instruments | Frequency-aware auto-ducking and EQ prevents frequency masking |
| "Pattern generation is genuinely hard" — making patterns feel human | Pattern variation injection adds humanizing micro-detail |
| "Mode switching might feel clunky" | AI smooths transitions between modes over 1-2 beats |
| "Scale-locked instruments can sound sterile" | Pattern enhancement adds passing tones, ornaments, and rhythmic variation |
| "4 controls might not be enough" | AI acts as a 5th virtual control — handling the production decisions you'd need extra controls for |

The companion doesn't just add a feature. It solves the hardest problems in the original design by offloading production intelligence from the performer to the AI — letting the performer focus purely on the music.

---

## Summary

```
  ┌──────────────────────────────────────────────────────────┐
  │                    YOU (THE PERFORMER)                    │
  │                                                          │
  │   Control the music: key, tempo, instruments, energy,    │
  │   arrangement, expression — every creative decision      │
  │                                                          │
  └────────────────────────┬─────────────────────────────────┘
                           │
                    plays the board
                           │
                           ▼
  ┌──────────────────────────────────────────────────────────┐
  │                    MIDI STUDIO BOARD                      │
  │                                                          │
  │   8 instruments × 4 controls each + master section       │
  │   Your hands, your decisions, your performance           │
  │                                                          │
  └────────────────────────┬─────────────────────────────────┘
                           │
                    MIDI + Audio data
                           │
                           ▼
  ┌──────────────────────────────────────────────────────────┐
  │                    AI COMPANION                           │
  │                                                          │
  │   Listens. Analyzes. Adjusts.                            │
  │                                                          │
  │   Mix engineer: levels, EQ, ducking, stereo, effects     │
  │   Musical co-pilot: variation, fills, transitions        │
  │   Style learner: adapts to YOU over time                 │
  │                                                          │
  │   You drive the music. AI drives the production.         │
  │                                                          │
  └──────────────────────────────────────────────────────────┘
```

The MIDI Studio already lets one person control eight instruments. The AI Companion makes that one person sound like they have a world-class engineer and a sympathetic band riding alongside them.
