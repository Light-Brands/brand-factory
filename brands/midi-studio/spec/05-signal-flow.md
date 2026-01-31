# Signal Flow & Architecture

> How control movements become music — from knob turn to speaker output.

## Overview

```
  PHYSICAL         MIDI           SOUND           MIX            OUTPUT
  CONTROLS    →    DATA      →    ENGINE     →    BUS       →    AUDIO
  (board)          (protocol)     (synthesis)     (summing)      (speakers)
```

The board is a **MIDI controller** — it doesn't produce sound itself. It sends control data to a sound engine (software or hardware) that interprets the data into musical output. This separation is critical: the board is the instrument, the engine is the orchestra.

## Layer 1: Physical Controls → MIDI Data

Each control on the board generates standard MIDI messages:

### Per-Channel MIDI Mapping

Each instrument channel uses a dedicated MIDI channel (1-8):

| Control | MIDI Message Type | Data |
|---------|------------------|------|
| Range knob | CC #1 (Mod Wheel) | 0-127 continuous |
| Depth knob | CC #11 (Expression) | 0-127 continuous |
| Expression slider | CC #74 (Brightness) | 0-127 continuous |
| Mode spinner | Program Change | 1-8 (varies by instrument) |
| Mute button | CC #7 (Volume) | 0 or 127 (toggle) |

### Master Section MIDI Mapping (Channel 16)

| Control | MIDI Message Type | Data |
|---------|------------------|------|
| Tempo knob | CC #20 | 0-127 mapped to 40-240 BPM |
| Key spinner | CC #21 | 0-11 (C through B) |
| Scale spinner | CC #22 | 0-15 (scale type index) |
| Master volume | CC #7 | 0-127 |
| Effects spinner | CC #23 | 0-15 (effect preset index) |
| Tap tempo | Note On, Ch 16, Note 1 | Velocity 127 on tap |

### MIDI Data Rate

- Knobs and sliders: polled at 1000Hz, messages sent on value change (typically 30-60 messages/sec during active movement)
- Spinners: message sent on each click
- Buttons: message sent on press and release
- Total MIDI bandwidth: well within standard MIDI spec even with all controls moving simultaneously

## Layer 2: MIDI Data → Sound Engine

The sound engine receives MIDI CC values and interprets them musically. This is where the intelligence lives.

### Sound Engine Architecture

```
  MIDI In (per channel)
       │
       ▼
  ┌─────────────────────────────────────┐
  │         INSTRUMENT ENGINE           │
  │                                     │
  │  ┌──────────┐  ┌──────────────┐    │
  │  │ RANGE    │  │ PATTERN      │    │
  │  │ MAPPER   │  │ GENERATOR    │    │
  │  │          │  │              │    │
  │  │ CC→pitch │  │ mode+tempo   │    │
  │  │ zones    │  │ → note       │    │
  │  └────┬─────┘  │   sequences  │    │
  │       │        └──────┬───────┘    │
  │       ▼               ▼            │
  │  ┌─────────────────────────┐       │
  │  │ NOTE GENERATOR          │       │
  │  │                         │       │
  │  │ range + pattern + key   │       │
  │  │ → actual MIDI notes     │       │
  │  │ (pitch, velocity,       │       │
  │  │  timing, duration)      │       │
  │  └────────────┬────────────┘       │
  │               ▼                    │
  │  ┌─────────────────────────┐       │
  │  │ EXPRESSION PROCESSOR    │       │
  │  │                         │       │
  │  │ depth + expression CC   │       │
  │  │ → articulation,         │       │
  │  │   dynamics, timbre      │       │
  │  └────────────┬────────────┘       │
  │               ▼                    │
  │  ┌─────────────────────────┐       │
  │  │ SAMPLE/SYNTH PLAYER     │       │
  │  │                         │       │
  │  │ Renders final audio     │       │
  │  │ for this instrument     │       │
  │  └────────────┬────────────┘       │
  │               │                    │
  └───────────────┼────────────────────┘
                  ▼
            Audio to Mix Bus
```

### Range Mapper

Translates the Range CC value (0-127) into pitch zones based on the current master key and scale.

**Example — Guitar in D Minor:**
| Range CC Value | Pitch Zone | Musical Result |
|---------------|------------|----------------|
| 0-15 | Zone 1: Low open | D2-A2, power chord territory |
| 16-31 | Zone 2: Low chord | D3-F3, open chord voicings |
| 32-47 | Zone 3: Mid rhythm | A3-D4, barré chord zone |
| 48-63 | Zone 4: Mid melody | D4-A4, single-note lines |
| 64-79 | Zone 5: Upper melody | A4-D5, expressive lead |
| 80-95 | Zone 6: High lead | D5-A5, screaming solos |
| 96-127 | Zone 7: Extreme high | A5-D6, harmonic territory |

The zones are instrument-specific. Bass zones are lower and wider. Piano zones span the full keyboard. Strings zones map to orchestral sections.

### Pattern Generator

Uses the current Mode selection to generate rhythmic and melodic patterns:

**Input:** Mode (Program Change) + Tempo (master CC) + Key + Scale + Depth
**Output:** Timed note sequences

**Example — Drums, "Basic Beat" mode at 120 BPM:**
```
  Depth 0-30 (low):     K . . . S . . . K . . . S . . .
  Depth 31-60 (med):    K . h . S . h . K . h . S . h .
  Depth 61-90 (high):   K . h h S . h h K h h . S . h h
  Depth 91-127 (max):   K g h h S g h h K h h g S g h h

  K=kick  S=snare  h=hihat  g=ghost note  .=rest
```

As Depth increases, the pattern fills in — more ghost notes, more hihat activity, more rhythmic complexity. The performer controls complexity by turning one knob.

### Note Generator

Combines Range zones with Pattern output and the master harmonic lock:

1. Takes pitch zones from Range Mapper
2. Takes rhythmic patterns from Pattern Generator
3. Constrains all notes to the current master key and scale
4. Outputs complete MIDI note events (note number, velocity, timing, duration)

**The harmonic lock happens here.** No matter what combination of Range and Mode the performer selects, the Note Generator only outputs notes that belong to the current scale in the current key. Wrong notes are impossible by design.

### Expression Processor

Applies Depth and Expression CC values to the generated notes:

- **Depth → Velocity:** Maps to MIDI velocity curves (instrument-specific)
- **Depth → Complexity:** Controls pattern density (more notes at higher depth)
- **Expression → CC Modulation:** Sends continuous expression data to the sample player for real-time timbral control (vibrato, filter, tone, etc.)

## Layer 3: Mix Bus

All 8 instrument audio outputs are summed on the mix bus:

```
  Ch 1 (GTR) audio ──┐
  Ch 2 (BAS) audio ──┤
  Ch 3 (DRM) audio ──┤
  Ch 4 (PNO) audio ──┼──→ ┌──────────┐    ┌──────────┐    ┌────────┐
  Ch 5 (STR) audio ──┤    │ CHANNEL  │    │ MASTER   │    │ OUTPUT │
  Ch 6 (SYN) audio ──┤    │ SUMMING  │──→ │ EFFECTS  │──→ │ STAGE  │
  Ch 7 (BRS) audio ──┤    │          │    │ (reverb, │    │ (DAC)  │
  Ch 8 (VOX) audio ──┘    │ (level   │    │  delay,  │    │        │
                           │  balance │    │  chorus) │    │  L + R │
                           │  per ch) │    │          │    │  audio │
                           └──────────┘    └──────────┘    └────────┘
```

### Auto-Mix Intelligence

The mix bus has built-in intelligence for level balancing:

- **Frequency-aware leveling:** Bass and drums are given appropriate low-end space. Guitar and vocals sit in the mid-range. Strings and synth fill where needed.
- **Dynamic ducking:** When vocals (Ch 8) are active and prominent (high Depth), other mid-range instruments (guitar, piano) slightly duck to create space.
- **Mute transitions:** When a channel is muted, its audio fades over ~100ms (not hard cut) to avoid clicks.

### Master Effects

The Effects spinner on the master section selects a global effect preset applied to the mix bus:

| Preset | Effect | Character |
|--------|--------|-----------|
| 1 | Dry | No effects, raw mix |
| 2 | Room | Small room ambience, intimate |
| 3 | Hall | Concert hall reverb, spacious |
| 4 | Plate | Bright plate reverb, classic studio |
| 5 | Cathedral | Large space, epic wash |
| 6 | Delay (1/4) | Quarter-note rhythmic delay |
| 7 | Delay (dotted 1/8) | Dotted-eighth delay, The Edge style |
| 8 | Chorus | Gentle widening and movement |
| 9 | Tape Saturation | Warm, analog-style compression |
| 10 | Lo-Fi | Bit-crushed, vintage character |

## Layer 4: Output

Final audio is output as standard stereo audio:

- **Headphones:** 1/4" stereo jack for personal monitoring
- **Line out:** Balanced TRS or XLR for PA systems / studio monitors
- **USB audio:** Class-compliant USB audio for recording directly into a DAW
- **MIDI out:** Standard 5-pin DIN and USB MIDI for controlling external gear

## Performance Recording

When REC is pressed:

1. All MIDI data from all channels is recorded with timestamps
2. Audio output is simultaneously captured
3. The MIDI recording can be loaded into any DAW and edited note-by-note
4. Control automation (every knob turn, slider move, mode change) is recorded as MIDI CC data

This means a live MIDI Studio performance is fully editable after the fact. You can perform live, then go back and fine-tune individual instrument parts in a traditional DAW workflow.

## Loop Mode

When LOOP is activated:

1. A loop length is set (1 bar, 2 bars, 4 bars, 8 bars)
2. The first pass records all instrument output
3. Subsequent passes allow overdubbing — you can mute instruments, change settings, and layer new textures over the loop
4. This enables a single performer to build up a full arrangement layer by layer

**Workflow example:**
- Pass 1: Record drums + bass groove
- Pass 2: Add guitar rhythm + piano chords
- Pass 3: Add strings + synth pad
- Pass 4: Add brass stabs + vocal melody
- Now all 8 instruments are playing, built up by one person in 4 loop passes
