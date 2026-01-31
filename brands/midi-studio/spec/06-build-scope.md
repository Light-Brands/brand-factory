# Build Scope — What You Actually Need

> A practical, honest breakdown of how to build and test a working MIDI Studio prototype.

## The Short Version

You don't need to build custom hardware. You can test this entire concept with:
1. A ~$100-170 off-the-shelf MIDI controller
2. Free/affordable software
3. A mapping layer that you build (this is the real work)

The concept can be validated in **3 phases**: quick proof-of-concept, refined prototype, and standalone product. Phase 1 gets you hands-on with the idea. Phases 2 and 3 are only worth doing if Phase 1 proves the concept feels right.

---

## Phase 1: Proof of Concept

**Goal:** Get 8 instruments responding to physical controls on your desk. Test whether the 4-control model actually feels good. Discover what's missing.

### Hardware — The Controller

You need a MIDI controller with enough knobs, sliders, and buttons to map 8 instrument channels. Here's what the board requires:

```
Per channel (×8):     2 knobs + 1 slider + 1 encoder + 1 button
Total instruments:    16 knobs + 8 sliders + 8 encoders + 8 buttons
Master section:       ~4-6 additional controls
Grand total:          ~44-50 physical controls
```

**Best off-the-shelf match:**

| Controller | Knobs | Faders | Buttons | Price (approx) | Fit |
|-----------|-------|--------|---------|------|-----|
| **Novation Launch Control XL** | 24 knobs | 8 faders | 16 buttons | $130-170 used | Best overall match |
| **Akai MIDImix** | 24 knobs | 9 faders | 27 buttons | $80-120 used | Good budget option |
| **Behringer X-Touch Mini** (×2) | 16 encoders | 2 faders | 32 buttons | $60 each | Best for encoders |

**Recommended for Phase 1: Novation Launch Control XL.** Here's why:

```
  Launch Control XL Layout:
  ┌─────────────────────────────────────────────────┐
  │  [K1] [K2] [K3] [K4] [K5] [K6] [K7] [K8]      │  ← Row 1: RANGE knobs (×8)
  │  [K1] [K2] [K3] [K4] [K5] [K6] [K7] [K8]      │  ← Row 2: DEPTH knobs (×8)
  │  [K1] [K2] [K3] [K4] [K5] [K6] [K7] [K8]      │  ← Row 3: MODE select (×8)*
  │                                                  │
  │  |F1| |F2| |F3| |F4| |F5| |F6| |F7| |F8|      │  ← Faders: EXPRESSION (×8)
  │                                                  │
  │  [B1] [B2] [B3] [B4] [B5] [B6] [B7] [B8]      │  ← Buttons Row 1: MUTE (×8)
  │  [B1] [B2] [B3] [B4] [B5] [B6] [B7] [B8]      │  ← Buttons Row 2: Master controls
  └─────────────────────────────────────────────────┘

  * Row 3 knobs aren't endless encoders, so "Mode" will be knob-position-based
    rather than click-step-based. Good enough for testing the concept.
```

This gives you 2 knobs (Range + Depth) + 1 fader (Expression) + 1 knob (Mode) + 1 button (Mute) per channel. That's the full 4-control model × 8 instruments with the bottom button row left over for master functions (tap tempo, key change, etc).

**What to buy:**
- 1× Novation Launch Control XL (or equivalent) — check used market first
- 1× USB cable (usually included)
- Studio headphones or monitors you already own

### Software Stack

You need 3 layers of software: a host, instruments, and the mapping intelligence.

#### Layer 1: The Host (DAW)

The DAW runs everything and routes MIDI between your controller, the intelligence layer, and the instruments.

| Option | Cost | Pros | Cons |
|--------|------|------|------|
| **Ableton Live** (Suite or Standard) | $99-749 (90-day free trial) | Best Max for Live integration, session view perfect for this | Expensive to own |
| **Ableton Live Lite** | Free (bundled with most controllers) | Free, basic Ableton | No Max for Live |
| **Reaper** | $60 (free evaluation) | Cheap, powerful, scriptable (JSFX/ReaScript) | Steeper learning curve |
| **Bitwig Studio** | $99-399 | Built-in modular grid (like Max), MIDI scripting | Smaller community |

**Recommended for Phase 1: Ableton Live (trial or Standard).** The 90-day trial gives you full access. Max for Live (included in Suite, or $199 add-on) is the best environment for building the intelligence layer. If budget is tight, Reaper at $60 is remarkably capable.

#### Layer 2: Virtual Instruments

Each channel needs a virtual instrument that responds to MIDI. Here's a practical setup mixing free and affordable options:

| Channel | Instrument | Free Option | Paid Option |
|---------|-----------|-------------|-------------|
| 1. Guitar | Acoustic/Electric | Spitfire LABS (free) | Ample Guitar ($0-139) |
| 2. Bass | Bass guitar | Spitfire LABS (free) | Ample Bass ($0-139) |
| 3. Drums | Full kit | MT-PowerDrumKit (free) | EZdrummer 3 ($149) |
| 4. Piano | Acoustic piano | Spitfire LABS Soft Piano (free) | Pianoteq ($149) |
| 5. Strings | Orchestra strings | **Spitfire BBC Symphony Discover (free)** | Spitfire CSS ($499) |
| 6. Synth | Synthesizer | **Vital (free)** | Serum ($189) |
| 7. Brass | Brass section | Spitfire BBC Symphony Discover (free) | CineBrass ($399) |
| 8. Vocals | Choir/voice | Spitfire LABS Choir (free) | Soundiron Voices ($149) |

**You can start 100% free.** Spitfire LABS and BBC Symphony Discover alone cover guitar, bass, piano, strings, brass, and choir. Add Vital for synth and MT-PowerDrumKit for drums. Total cost: $0.

Links to register/download:
- Spitfire LABS: spitfireaudio.com/labs
- Spitfire BBC Symphony Discover: spitfireaudio.com/bbc-symphony-orchestra-discover
- Vital synth: vital.audio
- MT-PowerDrumKit: powerdrumkit.com

#### Layer 3: The Mapping Intelligence (This Is the Real Build)

This is the part you build. It sits between your MIDI controller and the instruments, translating knob positions into musical decisions. This is the "brain" of the MIDI Studio.

**What it needs to do:**

```
  Controller CC input          Intelligence Layer              Instrument MIDI output
  ─────────────────           ─────────────────               ──────────────────────
  Range knob (CC 0-127)  →    Scale-lock pitch mapper    →    Note-On messages (in key)
  Depth knob (CC 0-127)  →    Velocity/complexity curve  →    Velocity values + note density
  Expression fader (CC)  →    Parameter router           →    Instrument-specific CC
  Mode knob (CC 0-127)   →    Pattern selector           →    Pattern change + behavior
  Master key (button)    →    Global key register        →    Updates all pitch mappers
  Master tempo (button)  →    Global BPM                 →    Updates all pattern clocks
```

**Build options for the intelligence layer:**

| Approach | Environment | Skill Needed | Best For |
|----------|------------|-------------|----------|
| **Max for Live** | Inside Ableton | Visual patching, moderate | Fastest path if you have Ableton Suite |
| **Bitwig Grid** | Inside Bitwig | Visual patching, moderate | If you chose Bitwig as your DAW |
| **Pure Data (Pd)** | Standalone (free) | Visual patching, moderate | Free, works with any DAW |
| **Python + mido** | Standalone | Programming (Python) | If you're a coder |
| **JavaScript + WebMIDI** | Browser-based | Programming (JS) | If you want a visual UI too |
| **Reaper JSFX** | Inside Reaper | Scripting (EEL2) | If you chose Reaper as your DAW |

**Recommended: Max for Live (if Ableton) or Pure Data (if anything else).**

Both are visual programming — you connect boxes with cables rather than writing code. If you're comfortable with Python or JavaScript, those work too and give you more flexibility.

### What You Actually Build in Phase 1

The intelligence layer breaks down into these specific components:

#### Component 1: Scale Lock Engine
**What it does:** Takes a CC value (0-127 from Range knob) and the current key/scale, outputs only notes that belong to that scale.

**How it works:**
```
Input:  Range CC = 74, Key = D, Scale = Minor
Lookup: D minor = D E F G A Bb C
Map:    CC 74 = ~58% through range = around A4 zone
Output: Note pool = [A3, Bb3, C4, D4, E4, F4, G4, A4, Bb4, C5]
```

**Difficulty: Moderate.** This is mostly a lookup table. Define 12 keys × ~8 scale types = 96 scale maps. Then divide the 0-127 CC range into zones that select from those maps. The math is straightforward; the work is setting up all the tables and making the transitions between zones feel smooth.

#### Component 2: Pattern Generator
**What it does:** For each instrument mode, generates rhythmic and melodic patterns synced to the master tempo.

**How it works:**
```
Input:  Instrument = Guitar, Mode = Strum, Tempo = 120 BPM, Depth = 80
Output: Timed chord strums on beats 1, 2, 3, 4 with upstrokes on &'s
        Velocity = 80-110 (high depth = hard strum)
        Notes selected from Scale Lock Engine's current note pool
```

**Difficulty: Hard. This is the most complex component.** Each instrument × each mode needs a pattern definition. That's 8 instruments × 5-6 modes = ~44 patterns. Each pattern needs to:
- Generate note events at tempo-locked intervals
- Select pitches from the Scale Lock Engine
- Respond to Depth by varying velocity and note density
- Feel musical (not mechanical)

**Approach for Phase 1:** Start simple. Use pre-programmed MIDI clips/loops for each mode rather than algorithmic generation. Load 44 MIDI clips into your DAW, and have the Mode control switch between them. The Scale Lock Engine transposes them to the current key. This gets you 80% of the result with 20% of the effort.

#### Component 3: Expression Router
**What it does:** Routes the Expression slider to the correct parameter for each instrument.

**How it works:**
```
Input:  Instrument = Strings, Expression fader CC = 95
Route:  Strings expression = Vibrato amount
Output: CC 1 (Mod Wheel) on Strings MIDI channel = 95
```

**Difficulty: Easy.** This is just MIDI CC remapping. Each instrument needs one CC routing rule. Most DAWs can do this with built-in MIDI mapping — no custom code needed.

#### Component 4: Mix Manager
**What it does:** Handles mute toggles and basic level balancing.

**Difficulty: Easy.** Mute buttons toggle channel volume. Auto-leveling is nice-to-have; skip it for Phase 1 and mix manually.

### Phase 1 — Summary

| Item | Cost | Notes |
|------|------|-------|
| MIDI Controller | $80-170 | Used Launch Control XL or MIDImix |
| DAW | $0-99 | Ableton trial (free) or Reaper ($60) |
| Virtual Instruments | $0 | All free options available |
| Intelligence layer | $0 (your time) | This is the build work |
| Headphones/monitors | (already own) | |
| **Total** | **$80-270** | |

**Skills you need:**
- Basic MIDI mapping (any DAW tutorial covers this — a few hours to learn)
- Max for Live / Pure Data / or basic Python (a few days to learn the basics)
- Enough music theory to define scales and chord structures (or just use reference tables)

**Estimated scope of the build work:**
- Setting up the DAW with 8 instrument tracks: straightforward
- MIDI mapping controller to DAW: straightforward
- Expression routing: straightforward
- Scale Lock Engine: moderate (the core math is simple; tuning it to feel right takes iteration)
- Pattern library (44 patterns): most time-consuming (creating/finding MIDI patterns for each instrument mode)
- Testing and tuning: ongoing (this is where you discover what works and what needs adjustment)

---

## Phase 2: Refined Prototype

**Goal:** Replace the rough Phase 1 setup with polished, purpose-built components. Only do this if Phase 1 validates the concept.

### Upgrades from Phase 1

#### 2A: Algorithmic Pattern Generation
Replace static MIDI clips with real-time pattern algorithms. Instead of pre-recorded loops, the system generates patterns on the fly based on Mode, Depth, Range, and tempo.

**What this gives you:** Infinite variation. The patterns never repeat exactly — they have controlled randomness within musical constraints. A "Strum" mode doesn't play the same strum pattern every bar; it varies naturally like a real guitarist would.

**Build with:** Max for Live (if Ableton), Pure Data, or Python. This is algorithmic composition — it's the most technically demanding part of the project.

**Scope:** Each instrument needs a pattern generation algorithm. Budget significant iteration time per instrument to make them feel musical rather than robotic.

#### 2B: Intelligent Auto-Mix
Add frequency-aware level balancing so instruments don't fight for the same sonic space.

**What this gives you:** A mix that sounds good without manual fader riding. Bass and kick duck each other. Vocals get space in the mid-range. Strings fill gaps.

**Build with:** DAW compressor sidechaining (built-in) + simple level automation rules.

**Scope:** Moderate. Sidechain compression is well-documented. The rules are straightforward (when vocals are loud, duck guitar 3dB).

#### 2C: Loop/Overdub System
Build the loop mode described in the signal flow doc — record passes, overdub layers, build arrangements.

**Build with:** DAW looping features (Ableton's Session View is designed for exactly this) + MIDI control mapping.

**Scope:** Moderate if using Ableton (Session View does most of this natively). Harder in other DAWs.

#### 2D: Visual Feedback
A screen (laptop/tablet) showing the current state of all 8 instruments — which are active, what mode they're in, current Range/Depth/Expression positions, the master key and tempo.

**Build with:** Max for Live (Ableton), a web app (JavaScript + WebMIDI), or TouchOSC on a tablet.

**Scope:** Moderate. The data is already flowing as MIDI; you just need to display it.

### Phase 2 — Summary

| Component | Difficulty | Dependency |
|-----------|-----------|------------|
| Algorithmic patterns | Hard | Replaces Phase 1 MIDI clips |
| Auto-mix | Moderate | Independent |
| Loop system | Moderate | Independent |
| Visual feedback | Moderate | Independent |

Phase 2 components are independent of each other — build them in any order, one at a time.

---

## Phase 3: Custom Hardware (Optional)

**Goal:** Build a dedicated physical board instead of using a generic MIDI controller. Only worth doing if the concept is proven and you want a product.

### Custom Controller Build

**Microcontroller:** Teensy 4.1 (best MIDI-over-USB support, fast, well-documented)
- Cost: ~$30
- Handles all control input scanning and MIDI output
- Native USB-MIDI (no drivers needed, appears as a standard MIDI device)
- Arduino-compatible programming

**Physical controls per channel (×8):**
| Component | Part | Unit Cost | ×8 Cost |
|-----------|------|-----------|---------|
| Range knob | Alpha 10K potentiometer | $2 | $16 |
| Depth knob | Alpha 10K potentiometer | $2 | $16 |
| Expression fader | Bourns 60mm slide pot | $4 | $32 |
| Mode encoder | Bourns PEC11R rotary encoder | $3 | $24 |
| Mute button | Tactile switch + LED | $1 | $8 |
| Knob caps (×2) | Aluminum knob caps | $2 | $16 |
| Fader cap | Fader knob | $1 | $8 |

**Master section:**
| Component | Part | Cost |
|-----------|------|------|
| Tempo knob | Potentiometer | $2 |
| Key encoder | Rotary encoder | $3 |
| Scale encoder | Rotary encoder | $3 |
| Master fader | 60mm slide pot | $4 |
| Effects encoder | Rotary encoder | $3 |
| Tap tempo button | Tactile switch | $1 |
| Transport buttons (×3) | Play/Stop/Rec | $3 |

**Supporting electronics:**
| Component | Part | Cost |
|-----------|------|------|
| Multiplexers (×5) | CD74HC4067 16-ch analog mux | $10 |
| LED driver | MAX7219 or shift registers | $5 |
| PCB fabrication | Custom PCB (JLCPCB or similar) | $20-50 |
| Enclosure | Laser-cut acrylic or 3D printed | $30-80 |
| Wiring, connectors, misc | — | $20 |

**Total hardware cost estimate: $250-400** for a single custom board.

**Skills needed:**
- Basic soldering
- Arduino/Teensy programming (C++)
- PCB design (KiCad — free) or hand-wiring on perfboard
- Enclosure design (optional — can start with an open breadboard layout)

**Scope:** This is a real electronics project. If you've never soldered before, budget time to learn. If you have electronics experience, the build itself is straightforward — it's just potentiometers and buttons connected to a microcontroller.

---

## Recommended Path

```
  START HERE
      │
      ▼
  ┌─────────────────────────────────────────────────────┐
  │  PHASE 1: Proof of Concept                          │
  │                                                     │
  │  Buy: MIDI controller (~$100)                       │
  │  Install: DAW + free instruments ($0)               │
  │  Build: Basic mapping layer                         │
  │  Test: 2-3 instruments first, then expand to 8      │
  │                                                     │
  │  Budget: ~$100-270                                  │
  └──────────────────────┬──────────────────────────────┘
                         │
                    Does it feel right?
                    Is the concept valid?
                         │
                 ┌───────┴───────┐
                 │               │
                YES              NO
                 │               │
                 ▼               ▼
  ┌──────────────────┐   ┌──────────────────┐
  │  PHASE 2:        │   │  Pivot:          │
  │  Refine each     │   │  What didn't     │
  │  component       │   │  work? Redesign  │
  │  one at a time   │   │  those parts     │
  └────────┬─────────┘   └──────────────────┘
           │
           ▼
  ┌──────────────────────────────────────────┐
  │  PHASE 3: Custom Hardware (optional)     │
  │  Only if you want a standalone product   │
  └──────────────────────────────────────────┘
```

**Start with Phase 1. Start with 2 instruments (drums + bass).** Get those feeling right. Then add instruments one at a time. The pattern library is the biggest time investment — don't try to build all 44 patterns before testing. Build the drum patterns, test them. Build the bass patterns, test them. Iterate.

---

## Biggest Risks and Honest Unknowns

Things that might not work the way you expect:

1. **Mode switching might feel clunky.** Clicking from "Fingerpick" to "Strum" mid-performance will have a transition. How that transition sounds matters a lot. You won't know until you test it.

2. **4 controls might not be enough for some instruments.** Drums in particular might want a 5th control (kit selection independent of pattern). You'll discover this in testing.

3. **Scale-locked instruments can sound sterile.** When everything is perfectly in key, the music can lack tension. You might need a "tension" control that introduces passing tones, blue notes, or chromatic approach notes. This is a Phase 2 discovery.

4. **Pattern generation is genuinely hard.** Making algorithmic patterns that feel human and musical rather than mechanical and robotic is an open research problem. Phase 1's approach (pre-made MIDI clips) sidesteps this, but Phase 2 will face it head-on.

5. **Latency matters.** If there's noticeable delay between turning a knob and hearing the change, the instrument won't feel "live." Keep your audio buffer low (128-256 samples). Test this early.

6. **The mix might be mud.** 8 instruments playing simultaneously will fight for frequency space. You'll need to EQ and level-balance carefully. The auto-mix intelligence (Phase 2) addresses this, but in Phase 1 you're mixing manually.

None of these are dealbreakers. They're just things you'll need to solve through testing and iteration rather than planning.
