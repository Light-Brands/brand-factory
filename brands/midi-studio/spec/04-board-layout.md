# Board Layout & Ergonomics

> How the physical board is organized and why it's arranged the way it is.

## Full Board Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  M I D I   S T U D I O                                                          │
│                                                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  ║ MASTER ║ │
│  │ GTR │ │ BAS │ │ DRM │ │ PNO │ │ STR │ │ SYN │ │ BRS │ │ VOX │  ║        ║ │
│  │     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │  ║ TEMPO  ║ │
│  │ (R) │ │ (R) │ │ (R) │ │ (R) │ │ (R) │ │ (R) │ │ (R) │ │ (R) │  ║  (T)   ║ │
│  │     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │  ║        ║ │
│  │ (D) │ │ (D) │ │ (D) │ │ (D) │ │ (D) │ │ (D) │ │ (D) │ │ (D) │  ║ KEY    ║ │
│  │     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │  ║  {K}   ║ │
│  │ |S| │ │ |S| │ │ |S| │ │ |S| │ │ |S| │ │ |S| │ │ |S| │ │ |S| │  ║        ║ │
│  │     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │  ║ SCALE  ║ │
│  │ {M} │ │ {M} │ │ {M} │ │ {M} │ │ {M} │ │ {M} │ │ {M} │ │ {M} │  ║  {S}   ║ │
│  │     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │  ║        ║ │
│  │[MUT]│ │[MUT]│ │[MUT]│ │[MUT]│ │[MUT]│ │[MUT]│ │[MUT]│ │[MUT]│  ║  |V|   ║ │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘  ║        ║ │
│                                                                      ║  {Fx}  ║ │
│  ┌─── SCENE CONTROLS ────────────────────────────────────────────┐  ║        ║ │
│  │  [SAVE]  [LOAD]  [A] [B] [C] [D]    [REC] [LOOP] [PLAY/STOP]│  ║ [TAP]  ║ │
│  └───────────────────────────────────────────────────────────────┘  ║        ║ │
│                                                                      ╚════════╝ │
└─────────────────────────────────────────────────────────────────────────────────┘

  (R) = Range knob        |S| = Expression slider    [MUT] = Mute button
  (D) = Depth knob        {M} = Mode spinner         [TAP] = Tap tempo
  (T) = Tempo knob        {K} = Key spinner          {Fx} = Effects spinner
  |V| = Master volume     {S} = Scale spinner
```

## Layout Rationale

### Instrument Channel Strips (Left to Right)

The 8 channels are arranged left-to-right following a musical logic:

```
  GTR → BAS → DRM → PNO → STR → SYN → BRS → VOX
  ─────────────   ───────────   ───────────────────
   rhythm core     harmonic      color & texture
                   foundation
```

**Why this order:**
1. **Guitar + Bass + Drums** (channels 1-3) form the rhythm section — the core groove. Grouped left for left-hand access.
2. **Piano + Strings** (channels 4-5) provide harmonic foundation and emotional depth. Center position, accessible to both hands.
3. **Synth + Brass + Vocals** (channels 6-8) add color, power, and human element. Right side, often adjusted less frequently.

This mirrors how a mixing console groups instruments and how a band arranges on stage.

### Vertical Control Order (Top to Bottom)

Within each channel strip, controls are arranged top-to-bottom:

```
  (R) Range    ← set first (what register)
  (D) Depth    ← set second (how intense)
  |S| Slider   ← ride continuously during performance
  {M} Mode     ← change occasionally
  [MUT]        ← toggle as needed
```

**Why this order:**
1. **Range on top:** You set this first and adjust it least often. Top position = less hand travel for "set and forget" controls.
2. **Depth below Range:** Set after Range, adjusted more often. Close to Range so you can grab both with one hand (thumb on Range, fingers on Depth).
3. **Slider in the middle:** The most actively used control sits at natural resting hand height. Your fingers naturally fall here. This is where the performance lives.
4. **Mode at the bottom:** Changed less often than Expression. Below the slider so it doesn't interfere with slider movements.
5. **Mute at the very bottom:** Large, easy-to-hit button. You can tap it quickly without looking.

### Master Section (Right Side)

The master section is isolated on the right side of the board in its own column:

| Control | Type | Purpose |
|---------|------|---------|
| **Tempo** | Knob | Master tempo (40-240 BPM) with center detent at 120 |
| **Key** | Spinner | Root note selection (C, C#, D, D#... through B) — 12 positions |
| **Scale** | Spinner | Scale type (Major, Minor, Dorian, Mixolydian, Pentatonic, Blues, etc.) |
| **Master Volume** | Slider | Overall output level |
| **Effects** | Spinner | Global effect preset (Dry, Hall, Room, Plate, Delay, Chorus, etc.) |
| **Tap Tempo** | Button | Tap to set tempo manually |

**Why on the right:** The master section is adjusted less frequently than individual instruments. Putting it on the right edge keeps it out of the primary performance area (the 8 channel strips) while remaining easily accessible.

## Ergonomic Zones

The board is designed for a seated or standing performer working with both hands:

```
  ┌─────────────────────────────────────────────┐
  │                                             │
  │   LEFT HAND ZONE        RIGHT HAND ZONE     │
  │                                             │
  │   GTR  BAS  DRM  PNO    STR  SYN  BRS  VOX │
  │   ──── ──── ──── ────   ──── ──── ──── ─── │
  │                                             │
  │   Rhythm section         Color & texture     │
  │   (adjust frequently)    (adjust for builds) │
  │                                    MASTER ──→│
  └─────────────────────────────────────────────┘
```

**Typical performance gesture patterns:**
- **Left hand** manages guitar + bass + drums (the groove). These are the most frequently adjusted instruments.
- **Right hand** manages strings + synth + brass + vocals (the texture) and occasionally reaches to the master section.
- During a **build:** left hand rides the drum Depth slider up while right hand sweeps the strings Expression slider for vibrato.
- During a **breakdown:** both hands mute channels one by one (bottom buttons), leaving only drums or piano.
- During a **key change:** right hand reaches to Key spinner on the master section — one click shifts everything.

## Physical Dimensions

```
  Board width:  ~800mm (31.5") — comfortably spans arm's reach
  Board depth:  ~250mm (10") — front-to-back distance
  Channel width: ~80mm (3.1") per strip — enough for knobs + slider
  Master width:  ~100mm (3.9") — slightly wider for prominence

  Knob diameter:     20mm (Range and Depth)
  Spinner diameter:  15mm (Mode, Key, Scale, Effects)
  Slider length:     60mm throw
  Button size:       15mm × 15mm (Mute, Scene buttons)
```

**Total board footprint:** roughly the size of a 61-key MIDI keyboard, but much shallower (no keys). It sits on a desk or table comfortably.

## Scene Controls

The bottom row provides performance memory:

| Control | Purpose |
|---------|---------|
| **SAVE** | Save the current position of all 32+ controls as a scene |
| **LOAD** | Load a previously saved scene |
| **A / B / C / D** | Four scene memory slots — instant recall of entire board states |
| **REC** | Start recording the performance to MIDI |
| **LOOP** | Set a loop point for live looping |
| **PLAY / STOP** | Transport control |

**Scene workflow:** Set up a verse feel → save to A. Build a chorus feel → save to B. During performance, hit A for verse, B for chorus. The board smoothly interpolates between saved states (all knobs and sliders crossfade over a configurable time window).

## Lighting & Visual Feedback

Each channel strip has subtle LED indicators:

- **Channel label:** Backlit text (GTR, BAS, etc.) — always visible
- **Mute state:** Mute button glows red when muted, green when active
- **Mode display:** Small OLED or LED text showing current mode name
- **Slider position:** LED strip alongside each slider showing current value
- **Master key/scale:** Larger display showing current key and scale name (e.g., "D Minor")
- **Tempo display:** BPM readout next to tempo knob

All lighting is dim and functional — this is a performance instrument, not a light show. The performer should be able to read the board state at a glance in any lighting condition.
