# VIBEUP Design System Implementation Guide

**Version:** 2.0.0  
**Last Updated:** 2025-12-19

> **Philosophy**: For the WHY behind these decisions, see [../brand/01-visual-identity.md](../brand/01-visual-identity.md)  
> **Tokens**: All values below reference [../../tokens/](../../tokens/) as the single source of truth

---

## Quick Reference

```yaml
Framework: Next.js 13+ (App Router)
Language: TypeScript (strict mode)
Styling: Tailwind CSS + Design Tokens
State: React Hooks
Animations: Framer Motion
Tokens: Centralized in ../../tokens/
```

---

## Design Tokens: Single Source of Truth

All design values live in `../../tokens/`. Never hardcode hex colors, pixel values, or spacing in components.

### Importing Tokens

```typescript
// Import all tokens
import { colors, typography, spacing, borderRadius, shadows } from '../../tokens';

// Use in components
const MyComponent = () => (
  <div style={{ 
    backgroundColor: colors['abyss-base'],
    color: colors['moonlight'],
    padding: spacing['4'],
    borderRadius: borderRadius['vibe-card'],
    boxShadow: shadows['elevation']
  }}>
    Content
  </div>
);
```

### Available Token Categories

| Category | File | What It Contains |
|----------|------|------------------|
| **Colors** | `colors.ts` | 17 color tokens (abyss scale, moonlight scale, accents, semantic) |
| **Typography** | `typography.ts` | Font families, sizes, weights, letter spacing |
| **Spacing** | `spacing.ts` | 30 spacing values + 13 border radius values |
| **Shadows** | `shadows.ts` | 16 shadow definitions including glows |

---

## Color System

### Background Scale (Abyss)

```typescript
import { colors } from '../../tokens';

// Primary backgrounds
colors['abyss-base']     // #0D0D0D - Page backgrounds, app canvas
colors['abyss-mystic']   // #121212 - Card backgrounds, elevated surfaces
colors['abyss-light']    // #1A1A1A - Hover states, interactive backgrounds
colors['abyss-lighter']  // #2A2A2A - Borders, dividers, subtle separators
```

**Usage Pattern**:
- Page backgrounds: `abyss-base`
- Cards and modals: `abyss-mystic`
- Hover states on dark surfaces: `abyss-light`
- Borders and dividers: `abyss-lighter`

### Text Scale (Moonlight)

```typescript
// Text colors
colors['moonlight']       // #F5F5F5 - Primary text, headings
colors['moonlight-soft']  // #E0E0E0 - Secondary text, descriptions
colors['moonlight-muted'] // #A0A0A0 - Captions, metadata, helper text
```

**Contrast Ratios** (on `abyss-base`):
- `moonlight`: 18.1:1 (AAA) ✓
- `moonlight-soft`: 14.5:1 (AAA) ✓
- `moonlight-muted`: 7.2:1 (AA) ✓

### Accent Colors

```typescript
// Primary accents
colors['aqua-light']   // #97D9C4 - Primary buttons, links, Mira elements
colors['aqua-medium']  // #7BC4B1 - Secondary accents, hover states
colors['teal-light']   // #5BB8B0 - Interactive elements, supporting accents
colors['gold-accent']  // #D4AF37 - Premium features, achievements
```

**Usage Pattern**:
- Primary CTAs: `aqua-light`
- Hover states: `aqua-medium`
- Links and secondary interactions: `teal-light`
- Premium/achievement highlights: `gold-accent`

### Semantic Colors

```typescript
// Status and feedback
colors['success']  // #4CAF50 - Success states, positive feedback
colors['warning']  // #FF9800 - Warnings, pending states
colors['error']    // #EF5350 - Errors, destructive actions
colors['info']     // #29B6F6 - Informational states, tips
```

---

## Typography System

### Font Families

```typescript
import { typography } from '../../tokens';

// Primary typeface
typography.fontFamily.sans  // ['Inter', 'SF Pro', 'system-ui', 'sans-serif']

// Monospace (code, technical content)
typography.fontFamily.mono  // ['JetBrains Mono', 'Fira Code', 'monospace']
```

### Type Scale

```typescript
// Font sizes with line heights
typography.fontSize.xs     // 0.75rem (12px)
typography.fontSize.sm     // 0.875rem (14px)
typography.fontSize.base   // 1rem (16px) - Body text default
typography.fontSize.lg     // 1.125rem (18px)
typography.fontSize.xl     // 1.25rem (20px)
typography.fontSize['2xl'] // 1.5rem (24px)
typography.fontSize['3xl'] // 1.875rem (30px)
typography.fontSize['4xl'] // 2.25rem (36px)
```

### Font Weights

```typescript
typography.fontWeight.light     // 300
typography.fontWeight.normal    // 400 - Body text
typography.fontWeight.medium    // 500
typography.fontWeight.semibold  // 600
typography.fontWeight.bold      // 700 - Headings
typography.fontWeight.black     // 900 - Hero text
```

### Letter Spacing

```typescript
typography.letterSpacing.tight      // -0.025em
typography.letterSpacing.normal     // 0
typography.letterSpacing.wide       // 0.025em
typography.letterSpacing.wider      // 0.05em
typography.letterSpacing['ultra-wide']  // 0.2em - Hero text
```

### Typography Usage Patterns

```typescript
// H1 - Hero headers
{
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize['4xl'],
  fontWeight: typography.fontWeight.black,
  letterSpacing: typography.letterSpacing['ultra-wide'],
  color: colors['aqua-light']
}

// H2 - Section headers
{
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize['2xl'],
  fontWeight: typography.fontWeight.bold,
  color: colors['teal-light']
}

// Body - Regular content
{
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.normal,
  lineHeight: '1.6',
  color: colors['moonlight']
}

// Caption - Metadata
{
  fontFamily: typography.fontFamily.sans,
  fontSize: typography.fontSize.sm,
  fontWeight: typography.fontWeight.light,
  color: colors['moonlight-muted']
}
```

---

## Spacing System

### Spacing Scale

```typescript
import { spacing } from '../../tokens';

// Base spacing values (in rem)
spacing['0']   // 0
spacing['1']   // 0.25rem (4px)
spacing['2']   // 0.5rem (8px)
spacing['3']   // 0.75rem (12px)
spacing['4']   // 1rem (16px) - Default spacing
spacing['6']   // 1.5rem (24px) - Comfortable spacing
spacing['8']   // 2rem (32px) - Section spacing
spacing['12']  // 3rem (48px) - Major breaks
spacing['16']  // 4rem (64px) - Page-level divisions
spacing['24']  // 6rem (96px)
spacing['32']  // 8rem (128px)
```

### Border Radius

```typescript
import { borderRadius } from '../../tokens';

borderRadius['sm']        // 0.125rem (2px)
borderRadius['default']   // 0.25rem (4px)
borderRadius['lg']        // 0.5rem (8px)
borderRadius['xl']        // 0.75rem (12px)
borderRadius['2xl']       // 1rem (16px) - Cards
borderRadius['3xl']       // 1.5rem (24px) - Modals
borderRadius['vibe-btn']  // 1.5rem (24px) - Buttons
borderRadius['vibe-card'] // 1rem (16px) - Cards
borderRadius['full']      // 9999px - Avatars, pills
```

### Spacing Usage Patterns

```typescript
// Card padding
padding: spacing['6']  // 24px comfortable padding

// Section spacing
marginBottom: spacing['12']  // 48px between major sections

// Inline spacing (buttons, tags)
gap: spacing['2']  // 8px between inline elements

// Page content padding
padding: `${spacing['4']} ${spacing['4']}`  // 16px vertical and horizontal

// Mobile bottom nav clearance
paddingBottom: spacing['28']  // 112px (7rem) to clear island nav
```

---

## Shadow System

### Shadow Tokens

```typescript
import { shadows } from '../../tokens';

// Standard elevations
shadows['sm']       // Subtle elevation
shadows['default']  // Standard card elevation
shadows['md']       // Medium elevation
shadows['lg']       // Large elevation
shadows['xl']       // Maximum elevation
shadows['2xl']      // Hero/modal elevation

// Brand-specific glows
shadows['mira-glow']         // Mira AI elements
shadows['mira-glow-intense'] // Active Mira states
shadows['aqua-glow']         // Accent button hovers
shadows['gold-glow']         // Premium feature highlights
shadows['teal-glow']         // Interactive element accents

// Inner shadows
shadows['inner']     // Subtle inner shadow
shadows['inner-lg']  // Prominent inner shadow
```

### Shadow Usage Patterns

```typescript
// Cards
boxShadow: shadows['elevation']

// Buttons (primary, hover state)
boxShadow: shadows['aqua-glow']

// Mira chat bubbles
boxShadow: shadows['mira-glow']

// Premium features
boxShadow: shadows['gold-glow']

// Modals
boxShadow: shadows['2xl']
```

---

## Component Design Patterns

### Mobile-First Responsive

All components must be designed for <640px screens first, then enhanced for larger viewports.

```typescript
// ✓ CORRECT: Mobile-first
className="text-sm sm:text-base md:text-lg"
className="px-3 sm:px-4 md:px-6"
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

// ✗ WRONG: Desktop-first (requires mobile overrides)
className="text-lg md:text-base sm:text-sm"
```

### Touch Targets

Minimum 44×44px tappable areas for all interactive elements.

```typescript
// ✓ CORRECT: Accessible touch targets
className="min-h-[44px] min-w-[44px]"
className="p-3" // Creates sufficient touch area

// ✗ WRONG: Too small for touch
className="w-6 h-6" // 24px - insufficient
```

### Button Hierarchy

```typescript
// Primary Button
{
  background: colors['aqua-light'],
  color: colors['abyss-base'],
  padding: `${spacing['3']} ${spacing['6']}`,
  borderRadius: borderRadius['vibe-btn'],
  boxShadow: shadows['none'],
  // Hover
  hover: {
    background: colors['aqua-medium'],
    boxShadow: shadows['aqua-glow']
  }
}

// Secondary Button
{
  background: 'transparent',
  color: colors['aqua-light'],
  border: `1px solid ${colors['abyss-lighter']}`,
  padding: `${spacing['3']} ${spacing['6']}`,
  borderRadius: borderRadius['vibe-btn'],
  // Hover
  hover: {
    background: colors['abyss-light']
  }
}

// Ghost Button
{
  background: 'transparent',
  color: colors['aqua-light'],
  border: `1px solid ${colors['abyss-light']}`,
  padding: `${spacing['3']} ${spacing['6']}`,
  borderRadius: borderRadius['vibe-btn'],
  // Hover
  hover: {
    background: colors['abyss-light']
  }
}

// Danger Button
{
  background: colors['error'],
  color: colors['moonlight'],
  padding: `${spacing['3']} ${spacing['6']}`,
  borderRadius: borderRadius['vibe-btn']
}
```

### Card Pattern

```typescript
{
  background: colors['abyss-mystic'],
  borderRadius: borderRadius['vibe-card'],
  padding: spacing['6'],
  boxShadow: shadows['elevation'],
  border: `1px solid ${colors['abyss-lighter']}`
}
```

### Input Pattern

```typescript
{
  background: colors['abyss-light'],
  color: colors['moonlight'],
  border: `1px solid ${colors['abyss-lighter']}`,
  borderRadius: borderRadius['xl'],
  padding: `${spacing['3']} ${spacing['4']}`,
  fontSize: typography.fontSize.base,
  // Focus state
  focus: {
    borderColor: colors['aqua-light'],
    background: colors['abyss-mystic'],
    outline: 'none',
    boxShadow: `0 0 0 2px ${colors['aqua-light']}40` // 25% opacity
  }
}
```

---

## Animation Standards

### Timing

```typescript
// Transition durations
const duration = {
  fast: '200ms',      // Quick feedback
  normal: '300ms',    // Standard transitions
  slow: '400ms',      // Entrances/exits
  complex: '600ms'    // Complex sequences
};
```

### Easing

```typescript
// Easing functions
const easing = {
  out: 'ease-out',     // Responsive feel
  in: 'ease-in',       // Graceful exits
  inOut: 'ease-in-out',
  natural: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
};
```

### Framer Motion Patterns

```typescript
// Entry animation (list items)
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, delay: index * 0.05 }}

// Hover effects
whileHover={{ y: -2, boxShadow: shadows['aqua-glow'] }}
whileTap={{ scale: 0.95 }}

// Modal entry (bottom sheet on mobile)
initial={{ y: '100%' }}
animate={{ y: 0 }}
exit={{ y: '100%' }}
transition={{ type: 'spring', damping: 25, stiffness: 300 }}
```

---

## Accessibility Requirements

### Color Contrast

All text must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text).

Our token-based color system ensures compliance:
- `moonlight` on `abyss-base`: 18.1:1 (AAA) ✓
- `aqua-light` on `abyss-base`: 10.5:1 (AAA) ✓
- `moonlight-muted` on `abyss-base`: 7.2:1 (AA) ✓

### Interactive Elements

```typescript
// Focus states (keyboard navigation)
focus: {
  outline: 'none',
  ring: `2px solid ${colors['aqua-light']}`,
  ringOffset: `2px solid ${colors['abyss-base']}`
}

// Touch targets
minHeight: '44px',
minWidth: '44px'

// ARIA labels
'aria-label': 'Descriptive label',
'role': 'button'
```

### Motion Preferences

```css
/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Tailwind Integration

### Custom Config (tailwind.config.js)

```javascript
import { colors, typography, spacing, borderRadius, shadows } from './tokens';

export default {
  theme: {
    extend: {
      colors: colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      letterSpacing: typography.letterSpacing,
      spacing: spacing,
      borderRadius: borderRadius,
      boxShadow: shadows,
    },
  },
};
```

### Using Tokens in Tailwind Classes

```typescript
// Colors
className="bg-abyss-base text-moonlight"
className="border-abyss-lighter"
className="text-aqua-light hover:text-aqua-medium"

// Spacing
className="p-4 gap-2 space-y-6"
className="mb-12" // 48px section spacing

// Border radius
className="rounded-vibe-card"  // Cards
className="rounded-vibe-btn"   // Buttons
className="rounded-full"       // Avatars

// Shadows
className="shadow-elevation"      // Cards
className="shadow-mira-glow"      // Mira elements
className="hover:shadow-aqua-glow" // Button hover
```

---

## Development Workflow

### 1. Never Hardcode Values

```typescript
// ✗ WRONG
backgroundColor: '#0D0D0D'
padding: '24px'
borderRadius: '16px'

// ✓ CORRECT
import { colors, spacing, borderRadius } from '../../tokens';

backgroundColor: colors['abyss-base']
padding: spacing['6']
borderRadius: borderRadius['vibe-card']
```

### 2. Import Tokens at Component Level

```typescript
/**
 * Component implementing the Onyx Design System
 * Tokens: ../../tokens/
 * Brand Philosophy: ../spec/brand/01-visual-identity.md
 * Component Catalog: ../spec/design/COMPONENT-CATALOG.md
 */
import { colors, typography, spacing, shadows } from '../../tokens';

export const MyComponent = () => {
  // Component implementation using tokens
};
```

### 3. Update Tokens, Not Components

When design changes are needed:
1. Update the token value in `tokens/*.ts`
2. All components using that token update automatically
3. No need to search/replace across components

---

## Related Documentation

- **Brand Philosophy (WHY)**: [../brand/01-visual-identity.md](../brand/01-visual-identity.md)
- **Component Catalog (WHAT)**: [COMPONENT-CATALOG.md](COMPONENT-CATALOG.md)
- **Design Tokens (VALUES)**: [../../tokens/](../../tokens/)
- **UX Wireframes**: [../brand/06-ux-wireframe-blueprint.md](../brand/06-ux-wireframe-blueprint.md)

---

**Design System Version**: 2.0.0  
**Tokens Location**: `design-system-v2/tokens/`  
**Last Updated**: December 19, 2025

