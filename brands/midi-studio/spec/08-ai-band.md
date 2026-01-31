# The AI Band — A Self-Learning, Self-Producing Music System

> No human performer. No human producer. AI agents operate the MIDI Studio board, compose music, critique their output, and get better at it. Built entirely in software.

## What This Is

The MIDI Studio was designed for a human to control 8 instruments through 4 dimensions each. The AI Companion (spec 07) was designed to assist that human.

This document removes the human entirely.

Instead of one person sculpting music through knobs and sliders, **a system of AI agents occupies every seat** — composer, performer, producer, critic, and audience. Each agent operates within the same 4-dimensional control framework. They collaborate, evaluate, and evolve. The system writes music, plays it, judges it, learns from that judgment, and writes better music.

This isn't generative AI slapped on a music library. This is a band — with roles, conflicts, taste, and growth — that happens to be software.

---

## Why the MIDI Studio Framework Makes This Possible

Most AI music systems try to generate audio or note sequences directly. That's a massive search space — every possible combination of notes, rhythms, velocities, and timbres across all instruments simultaneously. It's why most AI music sounds generic: the models learn statistical averages of music rather than understanding musical intent.

The MIDI Studio framework collapses this problem. Instead of an AI choosing from millions of possible note combinations, it operates in a **32-dimensional control space** (8 instruments x 4 controls). Each dimension is bounded (0-127). Every point in this space produces valid, harmonically locked music.

```
Traditional AI music generation:
  Search space = (128 pitches x 128 velocities x infinite timing) ^ N instruments
  = effectively infinite, requires massive training data

MIDI Studio AI generation:
  Search space = (128 range x 128 depth x 128 expression x ~6 modes) ^ 8 instruments
  = large but bounded, every point produces valid music
  = navigable through exploration and gradient descent
```

The harmonic lock means the AI literally cannot produce a wrong note. It can produce boring music, chaotic music, or unbalanced music — but never dissonant garbage. That constraint is what makes autonomous generation tractable.

---

## The Band — Agent Roles

The system has 5 agent types. Each has a distinct role, distinct inputs, and distinct outputs. They communicate through the shared state of the virtual MIDI Studio board.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         THE AI BAND                                  │
│                                                                     │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                    │
│  │ COMPOSER   │  │ PERFORMER  │  │ PRODUCER   │                    │
│  │            │  │            │  │            │                    │
│  │ Writes the │  │ Moves the  │  │ Mixes and  │                    │
│  │ song plan  │  │ controls   │  │ polishes   │                    │
│  │ (structure,│  │ in real    │  │ (EQ, FX,   │                    │
│  │  energy,   │  │ time       │  │  levels,   │                    │
│  │  feel)     │  │ (knobs,    │  │  stereo)   │                    │
│  │            │  │  sliders)  │  │            │                    │
│  └─────┬──────┘  └──┬───┬────┘  └──┬────────┘                    │
│        │            │   │          │                               │
│        ▼            ▼   │          ▼                               │
│  ┌──────────────────────┴─────────────────┐                        │
│  │         VIRTUAL MIDI STUDIO BOARD       │                        │
│  │  8 instruments x 4 controls + master    │                        │
│  │  Sound Engine → Audio Output            │                        │
│  └──────────────────┬─────────────────────┘                        │
│                     │                                               │
│                  audio out                                           │
│                     │                                               │
│        ┌────────────┴────────────┐                                  │
│        ▼                         ▼                                  │
│  ┌────────────┐           ┌────────────┐                           │
│  │ CRITIC     │           │ AUDIENCE   │                           │
│  │            │           │            │                           │
│  │ Evaluates  │           │ Simulates  │                           │
│  │ technical  │           │ listener   │                           │
│  │ quality    │           │ engagement │                           │
│  │ (theory,   │           │ (does this │                           │
│  │  mix,      │           │  feel good │                           │
│  │  structure)│           │  to hear?) │                           │
│  └─────┬──────┘           └─────┬──────┘                           │
│        │                        │                                   │
│        └──────────┬─────────────┘                                   │
│                   ▼                                                  │
│            ┌────────────┐                                           │
│            │ EVOLUTION  │                                           │
│            │ ENGINE     │                                           │
│            │            │                                           │
│            │ Combines   │                                           │
│            │ feedback,  │                                           │
│            │ mutates    │                                           │
│            │ strategies │                                           │
│            │ evolves    │                                           │
│            └────────────┘                                           │
└─────────────────────────────────────────────────────────────────────┘
```

### Agent 1: The Composer

**Job:** Decide what the song is. Structure, mood, energy arc, which instruments play when, how sections connect.

**Does NOT:** Choose individual notes or control positions. That's the Performer's job.

**Output:** A Song Plan — a structured timeline of musical intentions:

```json
{
  "title": "generated-0047",
  "bpm": 92,
  "key": "Eb",
  "scale": "minor",
  "duration_bars": 64,
  "sections": [
    {
      "name": "intro",
      "bars": [1, 8],
      "active_instruments": ["drums", "bass", "synth"],
      "energy": 0.3,
      "intent": "sparse, atmospheric, building anticipation",
      "transitions_to": "verse"
    },
    {
      "name": "verse",
      "bars": [9, 24],
      "active_instruments": ["drums", "bass", "guitar", "piano", "synth"],
      "energy": 0.5,
      "intent": "groove established, guitar leads melody, piano comps",
      "transitions_to": "chorus"
    },
    {
      "name": "chorus",
      "bars": [25, 40],
      "active_instruments": ["drums", "bass", "guitar", "piano", "strings", "synth", "vocals"],
      "energy": 0.85,
      "intent": "full energy, vocals and strings add power, wide and open",
      "transitions_to": "breakdown"
    },
    {
      "name": "breakdown",
      "bars": [41, 48],
      "active_instruments": ["piano", "strings"],
      "energy": 0.2,
      "intent": "stripped back, emotional, breathing room before final push",
      "transitions_to": "final_chorus"
    },
    {
      "name": "final_chorus",
      "bars": [49, 64],
      "active_instruments": ["drums", "bass", "guitar", "piano", "strings", "synth", "brass", "vocals"],
      "energy": 0.95,
      "intent": "everything, maximum energy, brass adds triumph, big ending"
    }
  ]
}
```

**How it works technically:**

The Composer is an LLM (Claude or a fine-tuned open model) prompted with:
- A genre/mood directive (either user-supplied or randomly selected from a style library)
- The MIDI Studio instrument palette and their capabilities
- The constraint framework (4 controls per instrument, harmonic lock, tempo sync)
- Feedback from previous compositions (what the Critic and Audience scored)

It outputs structured JSON song plans. No audio, no MIDI, no notes — just intent. The Performer translates intent into control movements.

**Why an LLM for composition:** Songwriting is fundamentally about narrative — tension and release, expectation and surprise, building and stripping back. LLMs understand narrative structure deeply. They don't need to understand music theory note-by-note; they need to understand "build tension for 8 bars then release it." That maps directly to the Composer's output format.

### Agent 2: The Performer

**Job:** Translate the Composer's Song Plan into actual control movements on the virtual MIDI Studio board. This agent IS the band — it decides the exact Range, Depth, Expression, and Mode values for every instrument at every moment.

**Input:** Song Plan from Composer + current state of all controls
**Output:** Control change events (the virtual equivalent of turning knobs and moving sliders)

**How it works technically:**

The Performer is a **policy network** — a neural network trained through reinforcement learning to map musical intent to control positions.

```
                    Song Plan (current section)
                           │
                           ▼
┌──────────────────────────────────────────────────────┐
│                   PERFORMER NETWORK                    │
│                                                        │
│  Input vector (per tick, ~10Hz update rate):            │
│  ┌──────────────────────────────────────────────┐     │
│  │ section_energy (float, 0-1)                   │     │
│  │ section_intent_embedding (float[64])           │     │
│  │ bars_into_section (int)                        │     │
│  │ bars_until_transition (int)                    │     │
│  │ current_controls[8][4] (float[32], 0-1 each)  │     │
│  │ audio_features[16] (spectral, loudness, etc.)  │     │
│  │ critic_score_rolling (float, 0-1)              │     │
│  └──────────────────────────────────────────────┘     │
│                                                        │
│  Output vector:                                        │
│  ┌──────────────────────────────────────────────┐     │
│  │ target_controls[8][4] (float[32], 0-1 each)   │     │
│  │ control_velocity[8][4] (float[32], how fast    │     │
│  │   to move toward target — instant vs. sweep)   │     │
│  └──────────────────────────────────────────────┘     │
│                                                        │
│  Architecture: Transformer encoder (4 layers, 256 dim) │
│  with temporal attention over last 16 ticks            │
└──────────────────────────────────────────────────────┘
```

**Why a policy network and not an LLM:** The Performer needs to make continuous, real-time decisions at ~10Hz. LLM inference is too slow and too expensive for this. A small transformer (2-10M parameters) can run inference in <5ms on a laptop CPU. It learns through trial-and-error which control movements produce music that the Critic and Audience rate highly.

**Control movement interpolation:** The Performer doesn't jump controls to target values instantly. It outputs both a target AND a velocity. A slow velocity means a gradual sweep (like a human sliding a fader). A fast velocity means a snap change (like a human clicking a Mode spinner). This prevents robotic-sounding jumps.

**Per-instrument sub-agents (optional refinement):** Instead of one monolithic Performer, you can run 8 smaller networks — one per instrument. Each specializes in its instrument's control space and learns instrument-specific gestures. They share a coordination layer that prevents them from clashing (e.g., don't all ramp Depth simultaneously).

### Agent 3: The Producer

**Job:** Everything the AI Companion (spec 07) does — but autonomously and more aggressively, because there's no human to defer to.

**Responsibilities:**
- Real-time mix balancing (levels, EQ, panning)
- Frequency conflict resolution
- Effects selection and parameter riding
- Stereo image management
- Dynamic range control
- Transition smoothing

**Key difference from spec 07:** The AI Companion was designed to be subtle and deferential — it never overrides the human. The Producer agent has no such constraint. It can make bold mix decisions: hard-pan the guitar, crush the drum bus, automate a filter sweep on the synth. It's a full producer, not an assistant.

**How it works technically:**

The Producer is a combination of:
1. **Rule-based DSP** for time-critical mix operations (ducking, limiting, sidechain compression) — same as spec 07's Phase 1
2. **A small neural network** for effects decisions and mix aesthetics — trained on the same reward signal as the Performer (Critic + Audience scores)
3. **An LLM call** (once per section, not real-time) for high-level production decisions: "This section should feel intimate — reduce reverb, narrow stereo, bring levels down"

### Agent 4: The Critic

**Job:** Evaluate the musical output on technical and structural grounds. Is the music well-constructed? Does it follow the plan? Is the mix clean?

**Input:** Audio output + Song Plan + control state log
**Output:** A structured score (0-1) across multiple dimensions

```json
{
  "overall_score": 0.72,
  "dimensions": {
    "plan_adherence": 0.85,
    "energy_arc": 0.78,
    "harmonic_coherence": 0.92,
    "mix_clarity": 0.65,
    "rhythmic_consistency": 0.88,
    "dynamic_range": 0.55,
    "transition_quality": 0.60,
    "variety": 0.48,
    "instrument_balance": 0.70
  },
  "notes": [
    "Mix is muddy in the 200-500Hz range during chorus — bass and guitar fighting",
    "Breakdown transition is abrupt — needs 2-bar ramp-down",
    "Low variety score: verse and chorus use nearly identical control positions",
    "Dynamic range compressed — everything sits at energy 0.6-0.8, needs more contrast"
  ]
}
```

**How it works technically:**

The Critic is a **multi-headed evaluation model** combining:

1. **Algorithmic analysis** (no ML needed):
   - Spectral balance measurement (FFT-based, per band)
   - Loudness metering (LUFS, per channel and master)
   - Dynamic range calculation (peak-to-RMS)
   - Rhythmic onset regularity
   - Plan adherence (compare actual control states to Song Plan intent)

2. **A trained audio quality model** (small CNN):
   - Trained on human-rated music pairs ("which sounds better?")
   - Outputs a quality score from audio features
   - Can be bootstrapped from existing music quality datasets (MOS scores)

3. **An LLM evaluator** (per-song, not real-time):
   - Receives the Song Plan, the control log, and the algorithmic analysis
   - Writes natural-language critique (the "notes" field above)
   - Provides the nuanced judgment that algorithms miss: "This feels aimless" or "The brass entrance in bar 49 is triumphant"

### Agent 5: The Audience

**Job:** Answer the question the Critic can't: does this music make you feel something?

The Critic evaluates construction. The Audience evaluates experience. A song can be technically perfect and emotionally dead. A song can be rough around the edges and deeply moving. You need both signals.

**How it works technically:**

The Audience is an LLM prompted as a music listener — not a musician, not an engineer. Multiple "listeners" with different taste profiles:

```
Listener profiles:
├── "casual" — Does this song make me want to keep listening or skip?
├── "emotional" — Does this give me chills / make me feel anything?
├── "groove" — Does this make me want to move?
├── "focus" — Could I work/study to this?
├── "energy" — Does this pump me up?
└── "chill" — Is this relaxing and atmospheric?
```

Each listener receives a description of what the music sounds like (generated from the control log — "the song opens with sparse drums and a synth pad, building over 8 bars into a full groove with guitar melody and bass...") and scores it on:
- **Would I listen again?** (0-1)
- **Emotional impact** (0-1)
- **Engagement curve** (did I lose interest at any point?)

**Why LLMs for audience simulation:** Real audience testing requires real humans. But LLMs have internalized millions of descriptions of what makes music compelling, boring, exciting, or forgettable. They can't hear audio, but they can evaluate musical narratives — which is exactly what the Song Plan + control log describes. This is imperfect but useful: it catches structural issues like "20 bars of unchanging energy" that algorithmic analysis would miss.

**The audio gap:** Audience agents evaluate descriptions of music, not actual audio. This is a genuine limitation. To close this gap in later phases, you can:
- Use audio-capable multimodal models as they become available
- Pipe audio through audio captioning models (e.g., CLAP, MusicCaps) to generate descriptions
- Supplement with periodic human listening sessions where real people score batches of generated music

---

## The Self-Learning Loop

This is the engine that makes the system improve. Every song the AI Band produces feeds back into the system, adjusting agent behavior for the next song.

```
          COMPOSE                    PERFORM                     PRODUCE
             │                          │                           │
             ▼                          ▼                           ▼
     ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
     │  Song Plan   │────────→ │  Control     │────────→ │  Mixed       │
     │  (JSON)      │          │  Movements   │          │  Audio       │
     └──────────────┘          │  (MIDI CCs)  │          │  (WAV/FLAC)  │
                               └──────────────┘          └──────┬───────┘
                                                                │
                          ┌─────────────────────────────────────┤
                          │                                     │
                          ▼                                     ▼
                   ┌──────────────┐                     ┌──────────────┐
                   │  CRITIC      │                     │  AUDIENCE    │
                   │  scores      │                     │  scores      │
                   └──────┬───────┘                     └──────┬───────┘
                          │                                     │
                          └──────────────┬──────────────────────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │  EVOLUTION   │
                                  │  ENGINE      │
                                  │              │
                                  │  Adjusts:    │
                                  │  • Composer   │
                                  │    prompts   │
                                  │  • Performer  │
                                  │    weights   │
                                  │  • Producer   │
                                  │    rules     │
                                  │  • Critic     │
                                  │    thresholds│
                                  └──────────────┘
                                         │
                                         ▼
                                  NEXT GENERATION
                                  (compose again)
```

### Evolution Mechanics

**For the Composer (LLM-based):**
- Song Plans that score high are saved to a "winners" library
- Song Plans that score low are saved to a "losers" library
- The Composer's prompt includes examples from both libraries: "Songs like these scored well. Songs like these scored poorly. Write a new Song Plan."
- Over generations, the Composer's effective style converges toward what the Critic and Audience reward
- This is **in-context learning** — no model fine-tuning needed. Just better prompts with better examples.

**For the Performer (neural network):**
- Trained with reinforcement learning (PPO or similar)
- Reward signal = weighted combination of Critic score + Audience score
- Each song is an episode; the Performer takes actions (control movements) and receives a reward at the end
- The network's weights update after each batch of songs (e.g., every 10-50 songs)
- Over thousands of episodes, the Performer learns which control movements produce high-scoring music
- This is standard RL training — no novel research required, just careful reward design

**For the Producer (hybrid):**
- Rule-based components are tuned by sweeping parameters and measuring Critic mix scores
- Neural components train alongside the Performer (same reward signal, different action space)
- LLM production decisions are improved through the same in-context-learning approach as the Composer

**For the Critic (evaluator):**
- The Critic's algorithmic thresholds are tuned by correlation with Audience scores: if the Critic rates something highly but the Audience rates it poorly, the Critic's weights are adjusted
- The LLM evaluator is calibrated the same way: include examples where the Critic's judgment diverged from the Audience's, and ask it to recalibrate
- This prevents the system from optimizing for technical perfection at the expense of emotional impact

### Generation Cadence

```
Generation 0:    Random exploration — Performer outputs near-random control movements
                 Critic and Audience score everything (mostly low scores)
                 Composer produces basic, template-like Song Plans

Generation 1-10: Rapid improvement — Performer learns basic competencies
                 (don't blast all instruments at once, follow energy curves)
                 Composer starts producing more varied structures

Generation 10-50: Refinement — Performer develops instrument-specific gestures
                  Producer learns genre-appropriate mixing
                  Composer experiments with unusual structures

Generation 50+:  Style emergence — the system develops consistent aesthetic preferences
                 Certain patterns get reinforced (signature moves)
                 The "band" starts sounding like itself
```

---

## What You Actually Build — The Software Stack

Every component below is real, available software. No vaporware.

### Core Runtime: The Virtual MIDI Studio Board

This is the software equivalent of the physical board. It maintains the state of all 32 controls (8 instruments x 4) and the master section, runs the sound engine, and outputs audio.

**Build with:**

| Component | Technology | Why |
|-----------|-----------|-----|
| **Control state manager** | Python dataclass or TypeScript object | Holds all 32 control values (0.0-1.0), accepts updates from the Performer |
| **Scale lock engine** | Python/TS — pure math, lookup tables | Maps Range values to scale-locked pitch zones (from spec 05) |
| **Pattern generator** | Python/TS — algorithmic | Generates MIDI patterns per instrument mode (from spec 06) |
| **Sound engine** | FluidSynth (SoundFont player) or SuperCollider | Renders MIDI to audio |
| **Mix bus** | PipeWire or JACK (Linux) / BlackHole (Mac) / built into SuperCollider | Sums instrument audio |
| **Audio output** | WAV file writer + optional real-time playback | Captures the final mix |

**The sound engine decision matters.** Two strong options:

**Option A: FluidSynth + SoundFonts (simpler, faster to start)**
- FluidSynth is a free, open-source software synthesizer
- Accepts MIDI, outputs audio, works headlessly (no GUI needed)
- Load high-quality SoundFonts for each instrument (free SoundFont libraries exist for everything)
- Python bindings via `pyfluidsynth`
- Good enough for prototyping and evaluation; won't match studio-quality instruments

**Option B: SuperCollider (more powerful, steeper curve)**
- SuperCollider is a programmable audio synthesis engine
- Full control over every aspect of sound generation
- Can model the MIDI Studio's sound engine exactly as specified
- Headless operation via `sclang` scripting
- Steeper learning curve but far more capable
- Better long-term choice if you want production-quality output

**Option C: DAW-less plugin hosting (best sound quality)**
- Use a headless VST/AU host like `pedalboard` (Python, by Spotify) or `DawDreamer` (Python)
- Load professional-grade virtual instruments as plugins
- Best audio quality by far — uses the same instruments as professional studios
- More complex setup but the output quality is dramatically better

**Recommended:** Start with FluidSynth for speed. Move to DawDreamer + VST plugins once the agents are working.

### Agent Runtime: Where the AI Agents Live

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENT ORCHESTRATOR                             │
│                    (Python async loop)                            │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Composer    │  │  Performer   │  │  Producer    │          │
│  │  (LLM API)  │  │  (PyTorch    │  │  (rules +    │          │
│  │              │  │   model,     │  │   PyTorch    │          │
│  │  Runs once   │  │   10Hz tick) │  │   model)     │          │
│  │  per song    │  │              │  │              │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                 │                 │                    │
│         ▼                 ▼                 ▼                    │
│  ┌──────────────────────────────────────────────────────┐      │
│  │           VIRTUAL MIDI STUDIO BOARD                    │      │
│  │           (Python module)                              │      │
│  └──────────────────────────────────────────┬───────────┘      │
│                                              │                   │
│                                         audio file               │
│                                              │                   │
│  ┌──────────────┐  ┌──────────────┐         │                   │
│  │  Critic      │  │  Audience    │         │                   │
│  │  (librosa +  │  │  (LLM API)  │ ◄───────┘                   │
│  │   PyTorch +  │  │              │                              │
│  │   LLM API)  │  │              │                              │
│  └──────┬───────┘  └──────┬───────┘                              │
│         │                 │                                       │
│         └────────┬────────┘                                       │
│                  ▼                                                │
│  ┌──────────────────────────────────────────────────────┐       │
│  │           EVOLUTION ENGINE                             │       │
│  │           (updates prompts, trains models)             │       │
│  └──────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

**Technology stack:**

| Layer | Technology | Install |
|-------|-----------|---------|
| **Language** | Python 3.11+ | System or pyenv |
| **Agent orchestration** | asyncio + custom loop | Standard library |
| **LLM calls (Composer, Audience, Critic)** | Anthropic SDK (`anthropic` package) or `openai` package | `pip install anthropic` |
| **Performer neural network** | PyTorch | `pip install torch` |
| **RL training** | Stable-Baselines3 or CleanRL | `pip install stable-baselines3` |
| **Audio analysis (Critic)** | librosa + numpy | `pip install librosa numpy` |
| **Sound engine** | pyfluidsynth or DawDreamer | `pip install pyfluidsynth` |
| **MIDI handling** | mido + python-rtmidi | `pip install mido python-rtmidi` |
| **Audio I/O** | soundfile | `pip install soundfile` |
| **Experiment tracking** | MLflow or Weights & Biases | `pip install mlflow` |
| **Storage** | SQLite (song library) + filesystem (audio) | Standard library |

### File Structure

```
ai-band/
├── README.md
├── pyproject.toml
├── config/
│   ├── instruments.yaml        # 8 instrument definitions (ranges, modes, mappings)
│   ├── scales.yaml             # Scale definitions for harmonic lock
│   ├── genres.yaml             # Genre/style templates for the Composer
│   └── agent_config.yaml       # Agent hyperparameters
│
├── src/
│   ├── board/
│   │   ├── control_state.py    # Virtual board state (32 controls + master)
│   │   ├── scale_lock.py       # Pitch zone mapper (from spec 05)
│   │   ├── pattern_gen.py      # Pattern generator per instrument/mode
│   │   └── sound_engine.py     # FluidSynth/DawDreamer wrapper
│   │
│   ├── agents/
│   │   ├── composer.py         # LLM-based song plan generator
│   │   ├── performer.py        # RL policy network for control movements
│   │   ├── producer.py         # Mix engine (rules + neural)
│   │   ├── critic.py           # Multi-headed evaluation
│   │   └── audience.py         # LLM-based listener simulation
│   │
│   ├── evolution/
│   │   ├── reward.py           # Reward function combining Critic + Audience
│   │   ├── trainer.py          # RL training loop for Performer
│   │   ├── prompt_evolver.py   # In-context learning for Composer/Audience
│   │   └── generation.py       # Orchestrates one full generation cycle
│   │
│   ├── analysis/
│   │   ├── spectral.py         # FFT-based frequency analysis
│   │   ├── loudness.py         # LUFS metering
│   │   ├── rhythm.py           # Onset detection, tempo analysis
│   │   └── features.py         # Combined audio feature extraction
│   │
│   └── orchestrator.py         # Main loop — runs one song end-to-end
│
├── data/
│   ├── soundfonts/             # .sf2 files for FluidSynth
│   ├── songs/                  # Generated song outputs (audio + metadata)
│   ├── winners/                # High-scoring song plans (for Composer evolution)
│   └── losers/                 # Low-scoring song plans (for Composer evolution)
│
├── models/
│   ├── performer/              # Saved Performer network checkpoints
│   └── critic/                 # Saved Critic model checkpoints
│
├── tests/
│   ├── test_scale_lock.py
│   ├── test_pattern_gen.py
│   ├── test_control_state.py
│   ├── test_sound_engine.py
│   └── test_reward.py
│
└── scripts/
    ├── generate_one.py         # Generate a single song (for testing)
    ├── train_performer.py      # Run RL training loop
    ├── evolve_composer.py      # Run Composer prompt evolution
    └── evaluate_batch.py       # Score a batch of songs
```

---

## Build Phases — What to Build First

### Phase 1: The Dumb Band (Make Sound Come Out)

**Goal:** A system that generates a random Song Plan, translates it into control movements, and produces an audio file. No learning, no optimization. Just prove the pipeline works end-to-end.

**Build these components:**

1. **`control_state.py`** — A Python class holding 32 float values (0.0-1.0) plus master key, scale, tempo. Simple getters/setters. This is trivial — maybe 50 lines of code.

2. **`scale_lock.py`** — Given a Range value (0.0-1.0), a key (C-B), and a scale type (major, minor, etc.), output the MIDI note numbers available in that zone. This is the lookup table from spec 05. Implement for all 12 keys and 4-5 common scales. ~200 lines.

3. **`pattern_gen.py`** — For each instrument and mode, generate a stream of MIDI note events synced to a tempo clock. Start with the simplest possible version: pre-written MIDI patterns stored as Python lists. One pattern per mode, per instrument. 8 instruments x 5-6 modes = ~44 patterns. Each pattern is a list of (beat_offset, note_offset, velocity, duration) tuples. ~500 lines for all patterns.

4. **`sound_engine.py`** — Wrapper around FluidSynth. Load a General MIDI SoundFont. Accept MIDI note events, render to audio buffer, write to WAV. ~100 lines.

5. **`composer.py` (v1)** — Don't call an LLM yet. Hard-code 3-5 Song Plan templates (verse-chorus-verse, build-drop-build, etc.) and randomly select + vary them. Randomize key, tempo, active instruments. ~150 lines.

6. **`performer.py` (v1)** — Don't train a neural network yet. Write a rule-based performer that translates Song Plan sections into control positions. "Energy 0.3 for this section" → set all active instruments' Depth to 0.3, Range to center, Expression to center. "Building" → linearly ramp Depth up over the section duration. ~200 lines.

7. **`orchestrator.py`** — Ties everything together. Generate plan → create control movements per tick → feed through scale lock + pattern gen → render audio → save WAV. ~150 lines.

**Test it by:** Running `python scripts/generate_one.py` and listening to the WAV file. It will sound mechanical and basic. That's fine. The point is: does the pipeline produce a playable audio file with multiple instruments in the right key and tempo?

**What "working" looks like at Phase 1:**
- Audio file with recognizable instruments
- All instruments harmonically locked (no dissonance)
- Instruments enter/exit according to the Song Plan
- Energy varies between sections (even if crudely)
- Total audio duration matches the Song Plan

### Phase 2: The Ears (Add Evaluation)

**Goal:** Build the Critic and Audience agents so the system can judge its own output.

**Build these components:**

1. **`spectral.py` + `loudness.py` + `rhythm.py` + `features.py`** — Audio analysis using librosa. Extract:
   - Spectral centroid (brightness)
   - Spectral bandwidth
   - RMS energy per beat
   - Onset strength
   - Chroma features (pitch content)
   - MFCC features (timbral character)

   These are all standard librosa function calls. ~300 lines total.

2. **`critic.py` (v1)** — Algorithmic Critic. No ML yet. Score each dimension with straightforward heuristics:
   - `plan_adherence`: Compare actual energy (RMS) per section against Song Plan energy targets
   - `dynamic_range`: Calculate peak-to-RMS ratio; penalize if too compressed or too spiky
   - `mix_clarity`: Check if spectral energy is reasonably distributed across frequency bands
   - `rhythmic_consistency`: Check onset regularity within sections
   - `variety`: Compare audio features between sections; penalize if they're too similar

   ~300 lines.

3. **`audience.py` (v1)** — LLM-based audience. Convert the Song Plan + control log into a natural-language description of the music. Send to Claude with a listener persona prompt. Get back a score and brief explanation. ~100 lines of code + prompt engineering.

4. **`reward.py`** — Combine Critic and Audience scores into a single reward signal: `reward = 0.6 * critic_overall + 0.4 * audience_overall`. Weights are tunable. ~50 lines.

**Test it by:** Running the Phase 1 pipeline on 20 generated songs and examining the scores. Do the scores correlate with your own human judgment? Listen to the highest-scored and lowest-scored songs. If the ranking roughly matches what you'd rank them, the evaluation pipeline is working.

### Phase 3: The Brain (Add Learning)

**Goal:** Replace the rule-based Performer with a trainable neural network. Replace the template Composer with an LLM. Add the evolution loop.

**Build these components:**

1. **`performer.py` (v2)** — PyTorch policy network. Architecture:
   - Input: section energy, intent embedding (from sentence-transformers), bars into section, bars remaining, current control state [32], audio features [16] = ~120 input dimensions
   - Hidden: 2-3 transformer layers, 256 hidden dim
   - Output: 32 target control values + 32 control velocities = 64 output dimensions
   - Action space: continuous (Box), normalized 0-1

   Use Stable-Baselines3 PPO for training. The environment is the Virtual MIDI Studio Board — one step = one tick (~100ms), one episode = one song, reward is delivered at the end of the episode.

   ~400 lines for the model + environment wrapper.

2. **`composer.py` (v2)** — Replace templates with Claude API calls. The prompt includes:
   - System prompt defining the Song Plan format and constraints
   - 5-10 examples of high-scoring Song Plans from the winners library
   - 3-5 examples of low-scoring Song Plans from the losers library
   - A genre/mood directive
   - The instruction: "Generate a new Song Plan that would score higher than the winners."

   ~200 lines.

3. **`trainer.py`** — RL training loop:
   ```
   for generation in range(N):
       for song in range(batch_size):
           plan = composer.generate()
           audio, control_log = orchestrator.run(plan, performer)
           critic_score = critic.evaluate(audio, plan, control_log)
           audience_score = audience.evaluate(plan, control_log)
           reward = reward_fn(critic_score, audience_score)
           trainer.record_episode(control_log, reward)
       trainer.update_performer()  # PPO update
       prompt_evolver.update_composer(generation_results)
   ```
   ~200 lines.

4. **`prompt_evolver.py`** — After each generation, sort songs by reward. Move top 20% to winners, bottom 20% to losers. Update the Composer's prompt with fresh examples. ~100 lines.

**Test it by:** Training for 50-100 generations (each generation = 10-20 songs). Plot the average reward per generation. You should see a clear upward trend. Listen to songs from generation 1, 25, 50, and 100. The improvement should be audible: less chaotic, more structured, better energy management, cleaner transitions.

**What "learning" looks like:**
- Generation 1-5: Performer outputs random-ish movements, scores are low
- Generation 5-15: Performer learns basics (don't max all controls, follow energy curve)
- Generation 15-30: Performer develops instrument-specific behaviors (drums drive rhythm, bass follows drums)
- Generation 30-50: Musical gestures emerge (builds, drops, transitions)
- Generation 50+: Consistent style develops, scores plateau and occasionally spike

### Phase 4: The Self-Builder (Add Self-Improvement Beyond Parameters)

This is where the system stops being a fixed architecture that learns parameters and becomes a system that improves its own structure.

**What "self-building" means concretely:**

1. **Pattern library expansion:** When the Performer discovers a control sequence that consistently scores high, the system extracts it, names it, and adds it to the pattern generator as a new mode option. The instrument now has more modes than it started with. New modes are generated by the system, for the system.

2. **Critic dimension discovery:** The LLM Critic identifies recurring failure patterns that don't map to existing scoring dimensions. Example: "Many low-scoring songs have the same problem: the bass and drums disconnect rhythmically in transitions." The system adds a new Critic dimension: `rhythmic_cohesion_in_transitions`. The reward signal now includes this dimension. The Performer learns to address it.

3. **Genre specialization:** When the system generates enough high-scoring songs in a particular style, it forks a specialized sub-system: a Composer prompt tuned for that style, a Performer checkpoint trained on that style, a Critic calibrated to that style's standards. The system grows from one band to multiple bands, each with distinct identity.

4. **Instrument expansion:** The architecture supports adding new instruments by defining a new channel with 4 control mappings. An LLM can propose new instrument definitions: "What about a Tabla channel? Range = pitch tension, Depth = strike force, Expression = dampening, Mode = [Theeka/Tukda/Laggi/Tihai]." The Performer network grows by adding new output dimensions. This is possible because the instrument channels are architecturally independent.

5. **Reward function evolution:** The system tracks which Critic dimensions most correlate with Audience scores and automatically reweights them. If `variety` keeps having low correlation with Audience approval, its weight drops. If an emergent pattern (like `groove_pocket_tightness`, discovered in step 2) correlates strongly, its weight rises. The reward function itself evolves.

**Build these components:**

1. **`pattern_miner.py`** — Analyzes high-scoring control logs for recurring control sequences. Clusters similar sequences. Proposes them as new pattern templates. ~300 lines.

2. **`critic_evolver.py`** — Periodically asks Claude to review a batch of Critic scores alongside Audience scores and propose new evaluation dimensions. Implements new dimensions as analysis functions. ~200 lines.

3. **`genre_forker.py`** — Clusters high-scoring songs by audio feature similarity. When a cluster reaches N songs, creates a specialized branch (saved Composer prompt, Performer checkpoint, Critic config). ~200 lines.

4. **`instrument_designer.py`** — LLM-based tool that proposes new instrument definitions following the 4-control schema. Outputs YAML configurations compatible with the board. ~150 lines.

---

## Testing — How to Know if It's Working

### Automated Tests (Run Continuously)

| Test | What It Validates | How |
|------|------------------|-----|
| **Scale lock correctness** | Every note output belongs to the current key/scale | Unit test: generate notes for all 12 keys x 8 scales, assert each note is in-scale |
| **Tempo sync** | All rhythmic events land on valid beat subdivisions | Unit test: check that note onset times are integer multiples of the beat subdivision |
| **Control range** | No control value exceeds 0.0-1.0 bounds | Unit test + runtime assertions |
| **Audio output sanity** | Audio file is valid, non-silent, within dBFS range | Check WAV header, RMS > threshold, peak < 0 dBFS |
| **Plan adherence** | Active instruments match Song Plan per section | Compare control states (muted vs. active) against plan at each section boundary |
| **Reward monotonicity** | Average reward increases over generations | Training metric: plot reward curve, alert on sustained downward trend |
| **Diversity** | Songs within a generation aren't all the same | Compare audio features across songs in a batch, alert if standard deviation drops below threshold |

### Human Listening Tests (Run Periodically)

Automated metrics only go so far. Periodically, you need to listen.

**A/B testing protocol:**
1. Generate 20 songs from the current generation
2. Generate 20 songs from 10 generations ago
3. Shuffle them into random pairs (current vs. old)
4. Listen to each pair, pick which you prefer
5. If the current generation wins >65% of pairs, the system is improving

**Genre coherence test:**
1. Generate 10 songs with genre directive "jazz"
2. Generate 10 songs with genre directive "rock"
3. Listen blind — can you tell which is which?
4. If yes, the system is learning genre differentiation

**The 30-second test:**
1. Play a generated song to someone who doesn't know it's AI-generated
2. Ask them after 30 seconds: "Do you want to keep listening?"
3. Track the keep-listening rate over generations
4. This is the hardest test and the most meaningful one

### Diagnostic Tools

Build a dashboard (even a basic terminal output) that shows per generation:

```
Generation 47 — 20 songs generated
═══════════════════════════════════════════════════
Avg Critic Score:     0.68  (↑ from 0.64 in gen 46)
Avg Audience Score:   0.55  (↑ from 0.51 in gen 46)
Combined Reward:      0.63  (↑ from 0.59 in gen 46)

Critic Breakdown:
  plan_adherence:       0.82  ████████░░
  energy_arc:           0.71  ███████░░░
  mix_clarity:          0.58  █████░░░░░  ← still weakest
  rhythmic_consistency: 0.85  ████████░░
  variety:              0.52  █████░░░░░  ← second weakest
  transition_quality:   0.66  ██████░░░░

Top Song:  gen47_song_14  (reward: 0.81)
Worst Song: gen47_song_03  (reward: 0.38)

Performer Loss:  0.042  (↓ from 0.051 — network is stabilizing)
Composer Winners Added:  4 new plans to winners library (total: 89)
```

---

## Compute and Cost Reality

Be clear-eyed about what this costs to run.

### Per-Song Costs

| Component | Compute | Cost per Song |
|-----------|---------|---------------|
| Composer (Claude API) | ~2K input tokens, ~1K output | ~$0.03 |
| Performer (PyTorch inference) | ~5 seconds on CPU | ~$0.00 (local) |
| Sound engine (FluidSynth render) | ~10 seconds on CPU | ~$0.00 (local) |
| Critic analysis (librosa) | ~3 seconds on CPU | ~$0.00 (local) |
| Critic LLM evaluation | ~3K input, ~500 output | ~$0.04 |
| Audience (5 listeners x Claude) | ~5K input, ~500 output x 5 | ~$0.15 |
| **Total per song** | | **~$0.22** |

### Per-Generation Costs (20 songs)

| Item | Cost |
|------|------|
| Song generation (20 x $0.22) | $4.40 |
| Prompt evolution (Composer update) | $0.10 |
| **Total per generation** | **~$4.50** |

### Training Run Costs

| Scale | Generations | Songs | LLM Cost | Local Compute |
|-------|------------|-------|----------|---------------|
| Small test | 10 | 200 | ~$45 | A few hours on a laptop |
| Meaningful training | 100 | 2,000 | ~$450 | 1-2 days on a laptop |
| Full training run | 500 | 10,000 | ~$2,250 | Several days on a desktop |

**Cost reduction strategies:**
- Use Haiku instead of Sonnet/Opus for Audience agents (~10x cheaper)
- Cache Composer prompts and reuse successful plans with variation
- Run Critic LLM evaluation only on top/bottom quartile songs, not every song
- Use local open-source LLMs (Llama 3, Mistral) for Audience simulation — free but lower quality

### Hardware Requirements

| Phase | Minimum Hardware | Recommended |
|-------|-----------------|-------------|
| Phase 1 (pipeline) | Any laptop with Python | Any laptop |
| Phase 2 (evaluation) | Same | Same |
| Phase 3 (RL training) | Laptop with 8GB+ RAM | Desktop with GPU (any NVIDIA, even old) |
| Phase 4 (self-building) | Desktop with 16GB+ RAM | Desktop with modern GPU (RTX 3060+) |

The Performer network is small (2-10M params). It trains on CPU. A GPU speeds things up 5-10x but isn't required until you're running hundreds of generations.

---

## The Self-Optimization Feedback Loop — In Detail

This is the core mechanism. Every part of the system improves every other part.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  Composer gets better prompts (from winners/losers library)      │
│       │                                                          │
│       ▼ produces better Song Plans                               │
│       │                                                          │
│  Performer has better targets to hit (clearer intent)            │
│       │                                                          │
│       ▼ produces better control movements                        │
│       │                                                          │
│  Producer has better raw material to work with                   │
│       │                                                          │
│       ▼ produces better mixes                                    │
│       │                                                          │
│  Critic has higher-quality examples to calibrate against         │
│       │                                                          │
│       ▼ produces more accurate scores                            │
│       │                                                          │
│  Audience receives more compelling musical descriptions          │
│       │                                                          │
│       ▼ produces more nuanced engagement feedback                │
│       │                                                          │
│  Evolution Engine has stronger signal to optimize from           │
│       │                                                          │
│       └──────────────────→ Composer gets better prompts ──→ ...  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

This is a **virtuous cycle**. Each component's improvement provides better input to the next component. The rate of improvement accelerates until it hits diminishing returns (which it will — this isn't magic).

**Where it plateaus and what to do:**

| Plateau | Cause | Solution |
|---------|-------|----------|
| Reward stops climbing after gen ~50 | Performer has learned what the current Critic rewards; no more easy gains | Add new Critic dimensions, retune reward weights |
| All songs sound similar | Composer converging on a narrow set of safe structures | Add diversity bonus to reward, expand genre library, increase temperature in Composer LLM calls |
| Mix quality isn't improving | Rule-based Producer has hit its ceiling | Replace with neural Producer, train on audio-quality datasets |
| Audience scores flatline | LLM listeners are giving inconsistent or shallow feedback | Add audio-description pipeline (CLAP model), improve listener prompts with concrete examples |
| System generates technically good but emotionally flat music | Reward function overweights technical metrics | Increase Audience weight in reward, add specific emotional-impact metrics |

---

## What Makes This Different from Existing AI Music Tools

| Existing tool | What it does | How this differs |
|--------------|-------------|-----------------|
| **Suno / Udio** | Generates audio from text prompts, single-shot | AI Band composes through a structured framework, iterates, learns from self-evaluation, produces multi-instrument arrangements through the MIDI Studio control model |
| **AIVA** | Composes MIDI using ML models trained on classical music | AI Band operates in a reduced control space (4 dimensions per instrument, not raw MIDI), includes performance + production + evaluation agents, self-improves |
| **Amper / Soundful** | Generates background music from parameters | AI Band has distinct agent roles with competing objectives, evolves its own evaluation criteria, forks into genre-specific sub-systems |
| **Google MusicLM/FX** | Generates audio from text/melody prompts | AI Band maintains an explicit compositional structure (Song Plans), can be inspected, modified, and debugged at every layer — not a black box |

The fundamental difference: existing tools generate music. This system **grows a band**. It develops style, learns from mistakes, specializes, and expands its own capabilities. The output is music, but the product is the band itself.

---

## Risks and Honest Limitations

1. **The sound quality ceiling.** FluidSynth with SoundFonts doesn't sound like a professional recording. DawDreamer with VST plugins sounds much better but adds complexity. The system can compose brilliantly, but if the audio rendering sounds like a 2005 video game, humans won't engage. Sound quality is a separate engineering problem from compositional quality.

2. **LLM evaluation is a proxy, not ground truth.** The Audience agents can't hear audio. They evaluate descriptions of music. This misses everything that makes music physical — the bass hitting your chest, the shimmer of a cymbal, the way a vocal vibrato makes your hair stand up. The system optimizes for what it can measure, which is structural and narrative quality. That's necessary but not sufficient.

3. **Reinforcement learning is unstable.** RL training can diverge, find degenerate solutions (play nothing = no dissonance = high score), or get stuck in local optima. Careful reward design is critical. You need negative rewards for silence, for lack of variety, for excessive repetition. Debugging RL is harder than debugging conventional code.

4. **The Composer's genre understanding is shallow.** An LLM knows that jazz uses seventh chords and swing feel, but it doesn't have the embodied knowledge of playing jazz for 20 years. The Song Plans will be structurally competent but potentially lacking the micro-decisions that make a genre feel authentic. This improves with more examples in the winners library, but there's a ceiling to in-context learning.

5. **Compute costs scale with ambition.** 500 generations at $4.50/gen = $2,250 in API costs. That's a real number. You can reduce it with local models and caching, but you're trading quality for cost. Budget for this.

6. **"Good" is subjective.** The Critic and Audience define what "good" means. If their definitions are wrong — or too narrow — the system optimizes for the wrong thing. Periodically recalibrating against human listening tests is essential. The system is only as good as its taste.

---

## Getting Started — Your First Weekend

If you want to start building this now, here's what to do in the first session:

```bash
# 1. Create the project
mkdir ai-band && cd ai-band
python -m venv venv && source venv/bin/activate
pip install mido python-rtmidi pyfluidsynth soundfile numpy librosa anthropic torch

# 2. Get a SoundFont
# Download FluidR3_GM.sf2 (General MIDI SoundFont, ~140MB, free)
# Place in data/soundfonts/

# 3. Build the control state (30 min)
# → src/board/control_state.py

# 4. Build the scale lock (1 hour)
# → src/board/scale_lock.py

# 5. Build a minimal pattern generator for drums + bass only (2 hours)
# → src/board/pattern_gen.py (just 2 instruments, 2 modes each)

# 6. Wire up FluidSynth (1 hour)
# → src/board/sound_engine.py

# 7. Write a hard-coded Song Plan and Performer (1 hour)
# → src/agents/composer.py (template)
# → src/agents/performer.py (rule-based)

# 8. Orchestrate and generate
# → src/orchestrator.py
# → python scripts/generate_one.py
# → Listen to output.wav
```

That first audio file — even if it's a clunky drum-and-bass loop in D minor — is the foundation. Everything else is iteration on top of a working pipeline.

---

## The Long Game

Generation 1 sounds like a drum machine with a lost bass player.

Generation 50 sounds like a competent but predictable backing track.

Generation 200 sounds like a band that's been playing together for a while — they have habits, preferences, and a recognizable style.

Generation 500+ is where it gets interesting. The system has forked into multiple genre specialists. It has invented new pattern modes that no human programmed. Its Critic evaluates dimensions that emerged from its own analysis of what makes its best work good. The band has taste.

That's the point. Not "AI generates music." Plenty of tools do that. The point is: **AI develops as a musician.** It starts bad, gets competent, finds a voice, and keeps refining it. The MIDI Studio's dimensional reduction makes this tractable. The multi-agent architecture makes it rich. The self-evaluation loop makes it real.

You build the stage. The band grows itself.
