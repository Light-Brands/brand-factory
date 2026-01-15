# Love Token Visual Identity Guidelines

**Where Love Meets Life**

*A visual language for grounded spirituality and dignified exchange*

---

## Brand Essence

Love Token's visual identity embodies **grounded love** — the sacred made tangible, the spiritual made practical, the invisible made visible. Our design language speaks of warmth, trust, simplicity, and dignity.

### Core Visual Philosophy

**Grounded Love**: Earth tones and natural warmth. Love that has roots, that touches the ground, that manifests in real communities. Not ethereal or floating — planted, present, practical.

**Spiritual Love**: Sacred geometry, intentional spacing, reverent simplicity. The visual representation of meditation, presence, and collective consciousness. Calm, contemplative, connected.

**Living Love**: Movement and flow. Gradients that breathe, animations that pulse gently, interfaces that feel alive. Love in motion, circulating, never static.

---

## Brand Colors

### Primary Palette — The Colors of Grounded Love

**Heart Rose (Primary)** — #C06C84
The color of a beating heart. Warm, alive, grounded. Not the bright red of excitement but the deep rose of lasting love. This is our signature color — present in key actions, headers, and moments of connection.

**Earth Clay (Secondary)** — #8B5A3C
The color of hands working soil. Grounded, trustworthy, connected to the earth. Used for depth, stability, and community elements.

**Sunlit Gold (Accent)** — #D4A574
The color of morning light on skin. Warmth, generosity, the glow of giving. Used for highlights, celebrations, and earned value.

**Sacred Cream (Background)** — #FAF7F2
The color of aged parchment. Clean but warm, simple but rich. Primary background for breathing room and dignity.

### Spiritual Palette — The Colors of Inner Light

**Meditation Dusk** — #6B5B7A
The color of twilight consciousness. The in-between space. Used for meditation interfaces, depth, and contemplative moments.

**Om Sage** — #7A8B6B
The color of forest stillness. Growth, breath, nature's wisdom. Used for success states, health indicators, and community wellness.

**Lotus Soft** — #E8D5E0
The color of morning flowers. Gentle, receptive, opening. Used for highlights and Lumi-related elements.

### Functional Palette — The Colors of System Trust

**Deep Root (Text)** — #2D2A26
Nearly black but warm. Readable, grounded, trustworthy for all body text.

**Stone Grey (UI Neutral)** — #A69F96
The color of riverbed stones. Supporting UI elements and subtle backgrounds.

**Border Mist** — #D4CFC8
Soft division. Borders and dividers that separate without harsh lines.

**Success Sage** — #5A7A5A
Confirmation and completion. Earned credits, completed meditations.

**Warning Amber** — #C4934A
Gentle attention. Not alarming, but present. Low balance, reminders.

**Error Soft** — #A65A5A
Dignified notice of issues. Never harsh, always offering path forward.

---

## Approved Gradients

### The Love Flow Gradient
Heart Rose → Sunlit Gold (#C06C84 → #D4A574)
**Use for:** Primary CTAs, meditation completion, love flowing visualizations

### The Grounded Gradient
Earth Clay → Deep Root (#8B5A3C → #2D2A26)
**Use for:** Headers, premium features, depth

### The Spirit Gradient
Meditation Dusk → Lotus Soft (#6B5B7A → #E8D5E0)
**Use for:** Meditation screens, Lumi presence, contemplative moments

### The Dawn Gradient
Sacred Cream → Sunlit Gold (at 20%) (#FAF7F2 → #D4A574)
**Use for:** Background warmth, morning greeting screens

---

## Typography

### Primary Font

**Nunito** (preferred)
Alternatives: Inter, Work Sans

**Why Nunito:** Rounded terminals feel welcoming and warm. Highly readable at all sizes. Supports many languages (critical for global communities).

### Type Scale & Usage

**H1 — Semibold, Generous Spacing**
Use for: Page titles, celebration moments
Example: "Love is Flowing"
Size: 32-36px mobile, 48-56px desktop

**H2 — Medium Weight**
Use for: Section headers, card titles
Example: "Your Community"
Size: 24-28px mobile, 32-36px desktop

**H3 — Medium Weight**
Use for: Subsections, feature titles
Example: "Meditation History"
Size: 20-24px mobile, 24-28px desktop

**Body — Regular**
Size: 16-18px for optimal readability
Line height: 1.6 for calm reading
Use for: All descriptions, instructions, content

**Caption — Light Weight**
Size: 12-14px
Use for: Timestamps, helper text, secondary info

**Large Numbers — Bold**
Use for: Credit displays, counters, statistics
Special: Slightly compressed for impact
Example: "₨157" displays prominently

### Typography for Limited Literacy

**Symbol-First Design:**
When text accompanies symbols, use maximum 16px
Icons lead, text supports
Consider text optional in farmer interfaces

### Typography Principles

- Round letterforms feel warmer than geometric
- Generous line spacing creates calm
- Never sacrifice readability for style
- Support RTL languages for future expansion
- Numbers should feel celebratory, not cold

---

## Iconography

### Icon Style

**Aesthetic:** Rounded, warm, hand-drawn feeling
**Weight:** 2px stroke
**Corners:** Fully rounded caps and joins
**Size:** 24px standard, 48px for feature icons

### Core Icon Set (Symbolic Communication)

**Meditation** — Seated figure with gentle aura
**Love/Heart** — Rounded heart (not angular)
**Credits/Wallet** — Coin with heart center
**Community** — Connected figures in circle
**Growth** — Plant sprouting from soil
**Send** — Heart with motion lines
**Receive** — Open hands receiving
**Vendor** — Storefront with heart
**Success** — Checkmark inside circle
**Energy** — Sun with radiating warmth

### Symbol System for Low-Literacy Users

**Transaction Types:**
- Received: Green coin descending
- Spent: Coin flowing to storefront
- Earned: Heart transforming to coin

**Meditation States:**
- Ready: Lotus flower opening
- Active: Pulsing concentric circles
- Complete: Glowing heart

**Emotion/Mood Symbols:**
- Joy: Sunrise face
- Peace: Still water
- Gratitude: Hands together
- Hope: Seedling

---

## UI/UX Standards

### Corners & Shapes

**Border Radius:** 16-24px — Generously rounded, never harsh

| Element | Radius |
|---------|--------|
| Cards | 20px |
| Buttons | 16px |
| Modals | 24px |
| Input fields | 12px |
| Avatars | Full circle |
| Symbol buttons | Full circle |

### Shadows & Depth

**Gentle Lift**
```css
box-shadow: 0 2px 12px rgba(45, 42, 38, 0.08);
```
Use for: Cards, elevated content

**Warm Glow (Love Moments)**
```css
box-shadow: 0 0 24px rgba(192, 108, 132, 0.15);
```
Use for: Earned credits, celebrations, Lumi presence

**Deep Ground**
```css
box-shadow: 0 8px 24px rgba(45, 42, 38, 0.12);
```
Use for: Modals, important overlays

### Buttons

**Primary Action (Love Flow)**
Background: Heart Rose (#C06C84)
Text: White
State: Subtle lightening on hover
Shape: Pill-shaped (height/2 radius)

**Secondary Action**
Border: Heart Rose
Text: Heart Rose
Background: Transparent
State: Subtle fill on hover

**Tertiary/Text**
Text: Earth Clay
Underline on hover

**Symbol Buttons (For Farmers)**
Background: Circular gradient
Icon: Centered, white
Size: Minimum 56px for touch
State: Scale up slightly on press

### Wallet Display Pattern

**Primary Balance (Large):**
```
₨157
```
- Font: Bold, 36-48px
- Color: Deep Root
- Alignment: Center or leading

**Secondary Balance (Small):**
```
4.65 Love Credits
```
- Font: Regular, 14-16px
- Color: Stone Grey
- Alignment: Below primary

---

## Layout Principles

### Spacing System

4px base unit for grounded rhythm:
- 4px — Micro (icon-to-label)
- 8px — Tight (related elements)
- 16px — Default (card padding)
- 24px — Comfortable (section gaps)
- 32px — Breathing room (major sections)
- 48px — Meditation space (contemplative gaps)
- 64px — Page divisions

### Grid & Alignment

**Mobile (Primary):** 16px side margins
**Tablet:** 24px side margins
**Desktop:** Maximum content width 800px, centered

**Love Farmer UI:** Extra generous margins (24px mobile) for touch accuracy

### White Space Philosophy

Space is sacred. It is where love rests between actions.
- Dense layouts create anxiety
- Spacious layouts create dignity
- Every element earns its space
- Emptiness is not waste — it is breath

---

## Animation & Motion

### Timing

**Heartbeat:** 200ms — Quick acknowledgments
**Breath:** 400ms — Standard transitions
**Meditation:** 800ms — Contemplative moments
**Celebration:** 1200ms — Achievement reveals

### Easing

**Love Flow:** `cubic-bezier(0.4, 0.0, 0.2, 1)` — Natural, organic
**Grounded:** `ease-out` — Settles into place
**Rising:** `ease-in-out` — Lifts and lands gently

### Motion Principles

- Movement should feel like breathing
- Never jarring or demanding attention
- Pulse animations for meditation states
- Flow animations for credit movement
- Gentle scaling for celebrations
- Reduced motion support is mandatory

### The Love Pulse

For meditation active states:
```css
@keyframes lovePulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}
animation: lovePulse 4s ease-in-out infinite;
```

---

## Imagery Guidelines

### Photography Style

**Mood:**
- Natural light, warm tones
- Real people in real communities
- Hands working, connecting, creating
- Morning and golden hour preference

**Subjects:**
- Community gatherings
- Meditation in simple settings
- Local vendors and markets
- Nature and growing things
- Hands exchanging, holding, giving

**Avoid:**
- Stock photo aesthetics
- Sterile spiritual imagery
- Poverty-focused framing
- Western yoga studio aesthetics
- Anything that diminishes dignity

### Image Treatment

**Warmth Filter:** Slight warm overlay (+5-10% orange)
**Corners:** Consistent 16-20px radius
**Overlays:** When text overlays, use gradient (transparent to Earth Clay at 60%)

### Illustration Style

**For Symbol Communication:**
- Rounded, friendly forms
- Minimal detail, maximum clarity
- Warm color palette
- Cultural neutrality (avoid specific religious symbols)
- Hand-drawn feeling, not corporate

---

## Accessibility Requirements

### Color Contrast

All text meets WCAG AA:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Heart Rose on white: Tested and compliant

### Touch Targets

**Minimum:** 44x44px
**For Farmer UI:** 56x56px recommended
**Symbol Buttons:** 64x64px for primary actions

### Reduced Motion

All animations respect `prefers-reduced-motion`
Static alternatives for all animated states

### Screen Reader Support

All icons have aria-labels
Symbol-only interfaces have full text alternatives
Logical heading hierarchy maintained

### Limited Literacy Support

- Symbol-first design pattern
- Audio option for key messages (future)
- Color coding for transaction types
- Consistent position of elements across screens

---

## Application Examples

### Meditation Screen

```
[Sacred Cream Background]

[Centered: Meditation Dusk circle with
 gentle pulsing animation]

[Bottom: Love Flow gradient button]
"Begin Meditation"

[Status bar: Heart icons for streak]
```

### Wallet Screen (Love Farmer)

```
[Sacred Cream Background]

[Large, centered:]
₨157

[Below, smaller:]
4.65 Love Credits

[Symbol row: Recent transactions as icons]
🟢↓ 🔵→ 🟢↓ 🟠→

[Bottom: Pill button with QR icon]
"Pay Vendor"
```

### Celebration Modal

```
[Warm Glow shadow]
[Lotus Soft background]

[Large heart with pulse animation]

"Love is Flowing"

Your 22 minutes of meditation
earned ₨32 for your community.

[Heart Rose button]
"Continue"
```

---

## Design System Integration

Love Token inherits foundational patterns from **design-system-v2** (Onyx Design System):

**Component Library:** `/design-system/design-system-v2/components/`
**Design Tokens:** Override with Love Token palette
**Patterns:** Mobile-first, accessibility-compliant

**Customization Approach:**
1. Import base component
2. Override color tokens with Love Token palette
3. Add Love Token-specific variants (symbols, farmer UI)
4. Maintain all accessibility features

---

## Do's and Don'ts

### Do

- Use warm, grounded colors
- Create generous white space
- Design symbol-first for farmers
- Celebrate with gentle animation
- Respect cultural contexts
- Test with real communities

### Don't

- Use cold, corporate blues
- Crowd the interface
- Rely solely on text
- Use jarring animations
- Impose Western aesthetics
- Design without community input

---

## Design Philosophy Summary

Every visual decision serves the mission: to create a dignified interface where love can flow as currency.

Love Token's design is not decoration — it is the **environment where sacred exchange happens**. Make it warm, clear, grounded, and alive.

**Where love meets life, design holds the space.**

---

*This visual identity guide is a living document. As we learn from communities, we adapt our visual language to serve them better.*
