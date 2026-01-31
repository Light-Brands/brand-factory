# Control Types

> The 4 physical controls and why each one was chosen for its role.

## Overview

Every instrument on the board gets exactly 4 controls. Each control type was chosen because its physical behavior matches the musical dimension it controls.

```
┌──────────────┬──────────────┬─────────────────┬──────────────────┐
│   KNOB (R)   │   KNOB (D)   │   SLIDER (E)    │   SPINNER (M)    │
│              │              │       ▲         │                  │
│    ╭───╮     │    ╭───╮     │   ┌───┤         │     ╭─●─╮       │
│    │ ● │     │    │ ● │     │   │   │         │     │   │       │
│    ╰───╯     │    ╰───╯     │   │   │         │     ╰───╯       │
│              │              │   │   │         │    click-click   │
│   7 o'clock  │   7 o'clock  │   │   │         │                  │
│      to      │      to      │   └───┘         │    endless       │
│   5 o'clock  │   5 o'clock  │       ▼         │    rotation      │
│              │              │                 │                  │
│   RANGE      │   DEPTH      │   EXPRESSION    │   MODE           │
│   (where)    │   (how much) │   (character)   │   (behavior)     │
└──────────────┴──────────────┴─────────────────┴──────────────────┘
```

---

## 1. Range Knob (R)

**Physical form:** Standard potentiometer knob, ~270° rotation arc (7 o'clock to 5 o'clock).

**Why a knob:** Range has definite boundaries — every instrument has a lowest and highest possible pitch. The knob's fixed arc naturally maps to this bounded space. Fully counter-clockwise = lowest register. Fully clockwise = highest register. The position of the knob tells you exactly where in pitch space the instrument lives, even by touch alone.

**Behavior:**
- Smooth, continuous rotation
- Slight detent (resistance bump) at the 12 o'clock center position
- Center position = the instrument's natural "home" register
- Left half = lower register territory
- Right half = upper register territory
- Output is quantized to scale-locked pitch zones (not chromatic pitches)

**Physical characteristics:**
- Medium-size knob (~20mm diameter) for fine control
- Rubber-coated grip for precision
- White indicator line on dark knob body
- Clear panel marking showing LOW → HIGH

**MIDI mapping:** Sends CC values 0-127 mapped to pitch zones within the instrument's range. The sound engine interprets zones contextually — a guitar at Range 30 plays open-chord territory, while Range 100 plays high-fret lead territory.

---

## 2. Depth Knob (D)

**Physical form:** Standard potentiometer knob, ~270° rotation arc, identical in size to Range.

**Why a knob:** Intensity, like range, is bounded — there's a minimum (silence/whisper) and a maximum (full power). The physical feel of turning a knob also maps well to the concept of "dialing in" energy. You intuitively understand "turn it up" and "turn it down."

**Behavior:**
- Smooth, continuous rotation
- Slight detent at 12 o'clock = moderate/default intensity
- Fully counter-clockwise = minimal energy (ghost notes, whisper, gentle)
- Fully clockwise = maximum energy (full power, fortissimo, aggressive)
- Affects both volume AND complexity — higher depth = louder AND more harmonically rich

**Physical characteristics:**
- Same size as Range knob (~20mm)
- Rubber-coated grip
- White indicator line
- Clear panel marking showing SOFT → HARD

**MIDI mapping:** Sends CC values 0-127 mapped to velocity/intensity curves specific to each instrument. Depth 0-30 = delicate playing. 30-70 = normal range. 70-127 = powerful/aggressive.

**Key distinction from volume:** Depth is NOT just a volume control. A guitar at low depth plays gentle fingerpicking. At high depth, it plays aggressive strumming. The *behavior* changes with intensity, not just the loudness.

---

## 3. Expression Slider (E)

**Physical form:** 60mm linear fader, vertical orientation.

**Why a slider:** Expression is the control you ride continuously during performance — sweeping tone, adjusting character, creating movement in real time. A slider's linear throw gives you:
- **Direct spatial mapping:** finger position = parameter value (unlike a knob where you have to interpret angle)
- **Visual feedback:** you can see the fader position at a glance across all 8 channels
- **Ergonomic real-time control:** sliding a finger up and down is the fastest, most natural continuous gesture

**Behavior:**
- Smooth, low-friction travel
- No center detent (expression is meant to roam freely)
- Bottom position = one extreme of the expression parameter
- Top position = opposite extreme
- What "expression" means is instrument-specific (see instrument mappings)

**Physical characteristics:**
- 60mm throw length (compact but enough for precision)
- Smooth-glide fader cap
- LED indicator strip alongside showing current value
- Panel markings specific to each instrument's expression parameter

**MIDI mapping:** Sends CC values 0-127 continuously as the fader moves. Mapped to the instrument-specific expression parameter (tone, vibrato, drive, sustain, etc.).

**Why this is the SLIDER and not a knob:** You interact with expression differently than range or depth. Range and depth you SET and leave. Expression you RIDE — constantly adjusting during performance. A slider lets you do this with one finger while your other hand manages a different instrument's controls. The linear throw is also faster to sweep than rotating a knob.

---

## 4. Mode Spinner (M)

**Physical form:** Endless rotary encoder with detented clicks.

**Why a spinner:** Mode is fundamentally different from the other three controls — it's **discrete, not continuous.** You don't want to "smoothly blend" between fingerpicking and strumming. You want to click from one to the other. The spinner's detented steps give you:
- **Distinct positions:** each click = a different musical behavior
- **No wrong values:** every position is a valid, complete mode
- **Quick cycling:** spin fast to jump through options, or click one step at a time
- **Endless rotation:** no dead ends, you can always keep cycling forward

**Behavior:**
- Click-to-click rotation (each click is a distinct mode)
- 5-8 modes per instrument (varies by instrument)
- Small LED display or ring showing current mode name
- Spinning fast = rapid mode cycling
- Each mode fundamentally changes what the instrument does (not just tone — behavior)

**Physical characteristics:**
- Smaller knob than Range/Depth (~15mm) with deep knurling for grip
- Tactile click detents you can feel and hear
- LED ring or small OLED showing current mode label
- Panel listing available modes for each instrument

**MIDI mapping:** Sends Program Change or CC messages. Each detent position triggers a mode switch in the sound engine, loading a different playing behavior, pattern set, and articulation model.

**Why this is the SPINNER and not a knob or button bank:** Buttons would require 5-8 per instrument (40-64 total — too many). A regular knob would make it too easy to land between modes. The endless spinner with detents gives you fast, tactile, unambiguous mode selection with a single compact control.

---

## Control Interaction

The 4 controls are independent but interact musically:

```
         RANGE ──────────────── sets the pitch neighborhood
            │
            ├── DEPTH ────────── sets intensity within that range
            │      │
            │      ├── EXPRESSION ── shapes the character in real time
            │      │       │
            │      │       └── MODE ── determines the playing behavior
            │      │              │
            ▼      ▼              ▼
         ┌─────────────────────────┐
         │    SOUND ENGINE         │
         │  (interprets all 4      │
         │   into musical output)  │
         └─────────────────────────┘
```

Examples of interaction:
- **Guitar, Range high + Depth high + Mode "arpeggio"** = fast, aggressive high-register arpeggios
- **Guitar, Range low + Depth low + Mode "fingerpick"** = gentle low-register fingerpicking
- **Strings, Range mid + Depth high + Expression full + Mode "tremolo"** = intense, vibrato-rich orchestral tremolo in the mid-register
- **Drums, Depth low + Mode "basic beat" + Expression full swing** = soft, laid-back groove with heavy swing
