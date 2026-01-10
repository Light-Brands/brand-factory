# Love Token Brand Identity

**The complete brand identity system for Love Token — where love meets life.**

---

## Overview

This folder contains the comprehensive brand identity specifications for Love Token, defining how the platform looks, speaks, and feels across all touchpoints.

## Documents

| Document | Purpose |
|----------|---------|
| [visual-identity.md](visual-identity.md) | Colors, typography, UI/UX standards, imagery |
| [brand-voice-messaging.md](brand-voice-messaging.md) | Communication guidelines, copy patterns, tone |
| [lumi-personality.md](lumi-personality.md) | AI companion personality, voice, behaviors |

## Brand Essence

### Three Pillars of Love Token

**Grounded Love** — Love that manifests in material reality. Practical, tangible, dignified.

**Spiritual Love** — Love cultivated through presence and intention. Contemplative, sacred, connected.

**Living Love** — Love in motion. Flowing, circulating, breathing.

### Core Visual Identity

- **Primary Color:** Heart Rose (#C06C84) — warm, alive, grounded
- **Typography:** Nunito — rounded, welcoming, globally readable
- **Design Philosophy:** Dignity through simplicity, space as sacred

### Core Voice Identity

- **Tone:** Wise grandmother — warm, grounded, clear
- **Priority:** Dignity first, always
- **Language:** Simple truth, never jargon

### AI Companion: Lumi

- **Role:** Omnipresent guide embodying platform warmth
- **Character:** Luminous, humble, present
- **Voice:** Simple, warm, dignified

## Integration with Design System

Love Token uses **design-system-v2** as its foundation:

```
/design-system/design-system-v2/
├── components/        # Base React components
├── tokens/           # Override with Love Token palette
└── spec/             # Brand-agnostic templates
```

**Customization approach:**
1. Import base components from design-system-v2
2. Override color tokens with Love Token palette
3. Add Love Token-specific variants (symbol-based farmer UI)
4. Maintain all accessibility features

## Usage

When building Love Token interfaces:

1. **Start with visual-identity.md** — Understand colors, spacing, typography
2. **Reference brand-voice-messaging.md** — Write all copy following guidelines
3. **Implement Lumi per lumi-personality.md** — AI companion presence

## Key Principles

**For Visual Design:**
- Warmth over coolness
- Space as sacred
- Symbol-first for farmers
- Dignity in every pixel

**For Copy:**
- Simple words, deep meaning
- Love as practical currency
- Never patronize
- Celebrate without performance

**For Lumi:**
- Present but not intrusive
- Guide without controlling
- Warm without being saccharine
- Simple without being simplistic

---

*Every visual choice, every word, every interaction serves one purpose: creating the environment where love can flow as currency.*
