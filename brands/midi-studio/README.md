# MIDI Studio — The Instrument Board

> One person. Eight instruments. Full organic music.

## What Is This?

MIDI Studio is a physical control surface — a board — that lets a single person perform live music with 8 major instruments simultaneously. Instead of playing individual notes on each instrument, you control the *essential character* of each instrument through a small set of physical controls: knobs, sliders, and spinners.

The result: you shape music organically, in real time, the way a painter uses a palette — blending, adjusting, feeling your way through a living composition.

## The Core Idea

Every musical instrument, no matter how complex, can be reduced to **4 independent dimensions of expression**:

| Control | Type | What It Does |
|---------|------|-------------|
| **Range** | Knob | Where in pitch space — low to high |
| **Depth** | Knob | How much energy/intensity — soft to powerful |
| **Expression** | Slider | Continuous real-time tone shaping |
| **Mode** | Spinner | Cycles through playing styles/behaviors |

These 4 controls give you **full spectrum coverage** of any instrument because they map directly to the physics of how sound works: something vibrates (range), something excites it (depth), something modifies it (expression), and the player chooses a technique (mode).

## The 8 Instruments

| # | Instrument | Range | Depth | Expression | Mode |
|---|-----------|-------|-------|------------|------|
| 1 | Guitar | Fret position | Pick intensity | Tone color | Strum/pick/arpeggio |
| 2 | Bass | Octave position | Attack force | Drive/grit | Finger/slap/pick |
| 3 | Drums | Kit tuning | Hit intensity | Swing/feel | Pattern type |
| 4 | Piano | Register | Velocity | Sustain | Voicing style |
| 5 | Strings | Orchestral register | Bow pressure | Vibrato | Articulation |
| 6 | Synth | Pitch/octave | Filter cutoff | Resonance | Waveform |
| 7 | Brass | Register | Breath force | Mute position | Section type |
| 8 | Vocals | Pitch register | Breath/power | Vibrato | Vowel shape |

## Why It Works

You can't make a wrong note. The system is **harmonically locked** — all instruments share a master key, scale, and tempo. Every position on every control produces musically valid output. You're not choosing notes; you're choosing *character, energy, and feel*.

This is dimensional reduction applied to music. See [spec/01-theory.md](spec/01-theory.md) for the full explanation.

## Board Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  MIDI STUDIO — INSTRUMENT BOARD                                     │
│                                                                     │
│  [GTR] [BAS] [DRM] [PNO] [STR] [SYN] [BRS] [VOX]   ║ [MASTER] ║  │
│   (R)   (R)   (R)   (R)   (R)   (R)   (R)   (R)     ║   (T)    ║  │
│   (D)   (D)   (D)   (D)   (D)   (D)   (D)   (D)     ║   (K)    ║  │
│   |S|   |S|   |S|   |S|   |S|   |S|   |S|   |S|     ║   |V|    ║  │
│   {M}   {M}   {M}   {M}   {M}   {M}   {M}   {M}     ║   {Fx}   ║  │
│                                                       ║   [REC]  ║  │
└─────────────────────────────────────────────────────────────────────┘
  (R)=Range knob  (D)=Depth knob  |S|=Slider  {M}=Mode spinner
  (T)=Tempo  (K)=Key/Scale  |V|=Master Volume  {Fx}=Effects  [REC]=Record
```

## Documentation

- [spec/01-theory.md](spec/01-theory.md) — The theory: why 4 controls per instrument works
- [spec/02-control-types.md](spec/02-control-types.md) — What each control type is and does
- [spec/03-instrument-board.md](spec/03-instrument-board.md) — All 8 instruments with full control mappings
- [spec/04-board-layout.md](spec/04-board-layout.md) — Physical board layout and ergonomics
- [spec/05-signal-flow.md](spec/05-signal-flow.md) — How signals move from controls to sound output
