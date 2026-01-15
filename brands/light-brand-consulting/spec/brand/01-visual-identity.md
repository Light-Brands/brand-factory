# Light Brand Consulting - Visual Identity

> *"Transform your business into an AI super intelligence. See your fullest capacity."*

## Design Philosophy

Light Brand Consulting's visual identity embodies the **moment of illumination** — that instant when clarity breaks through confusion, when potential becomes visible, when the path forward reveals itself.

Our design language draws from:
- **Dawn breaking** — warm light emerging from professional darkness
- **The golden hour** — that magical quality of transformative insight
- **Candlelight in deep space** — warmth and wisdom in sophisticated depth
- **Clarity emerging** — the visual representation of "seeing your fullest capacity"

### Core Design Principles

1. **Illumination Over Decoration** — Every visual element serves the purpose of clarity
2. **Warmth Within Depth** — Professional sophistication with human approachability
3. **Light Touch Aesthetic** — Clean, uncluttered, purposeful
4. **Transformative Moments** — Strategic use of luminous accents to mark "illumination" moments

---

## Color System

### The Illumination Palette

Light Brand Consulting uses a unique color palette that differentiates from other brands while maintaining compatibility with the Onyx Design System infrastructure.

Our palette is built on the concept of **light emerging from depth** — warm, luminous accents against sophisticated dark backgrounds.

### Primary Palette

#### Radiance Scale (Accent Colors)

| Token | Hex | Usage | Meaning |
|-------|-----|-------|---------|
| `radiance-gold` | `#E8B84A` | Primary CTAs, illumination moments | The moment of clarity, breakthrough insights |
| `radiance-amber` | `#D4944C` | Hover states, active interactions | Sustained illumination, engaged states |
| `radiance-warm` | `#C67D4E` | Tertiary accents, gradients | Warmth, human connection |

#### Clarity Scale (Secondary Accents)

| Token | Hex | Usage | Meaning |
|-------|-----|-------|---------|
| `clarity-cream` | `#FDF6E3` | Premium highlights, special text | Pure clarity, revelation |
| `clarity-soft` | `#F5E6C8` | Subtle highlights, backgrounds | Soft illumination |
| `clarity-muted` | `#D9C9A5` | Borders, secondary elements | Gentle guidance |

#### Wisdom Scale (Supporting Accents)

| Token | Hex | Usage | Meaning |
|-------|-----|-------|---------|
| `wisdom-violet` | `#8B7EC8` | AI elements, intelligence indicators | Deep insight, AI wisdom |
| `wisdom-soft` | `#A599D4` | Secondary AI accents | Supported intelligence |
| `wisdom-muted` | `#7A6BA8` | Subtle wisdom indicators | Background intelligence |

### Background Scale (Depth)

Leveraging the Onyx Design System's abyss scale with slight warmth adjustments:

| Token | Hex | Usage | Contrast w/ Cream |
|-------|-----|-------|-------------------|
| `depth-base` | `#0F0E0D` | Page backgrounds | 18.5:1 (AAA) |
| `depth-elevated` | `#151413` | Cards, modals | 16.8:1 (AAA) |
| `depth-surface` | `#1C1A18` | Hover states | 14.6:1 (AAA) |
| `depth-border` | `#2A2724` | Borders, dividers | 10.2:1 (AAA) |

### Text Scale (Moonlight Warm)

| Token | Hex | Usage | Contrast on depth-base |
|-------|-----|-------|------------------------|
| `text-primary` | `#F8F5F0` | Headings, primary content | 18.2:1 (AAA) |
| `text-secondary` | `#E5E0D8` | Body text, descriptions | 15.1:1 (AAA) |
| `text-muted` | `#A8A299` | Captions, metadata | 7.8:1 (AA) |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#5CB85C` | Positive outcomes, confirmations |
| `warning` | `#F0A030` | Caution states, attention needed |
| `error` | `#E85A5A` | Errors, critical alerts |
| `info` | `#5DADE2` | Informational states |

---

## Color Application Guidelines

### Primary CTA Pattern
```css
/* Illumination Button - Primary Call to Action */
.btn-illumination {
  background: linear-gradient(135deg, #E8B84A 0%, #D4944C 100%);
  color: #0F0E0D;
  box-shadow: 0 4px 20px rgba(232, 184, 74, 0.25);
}

.btn-illumination:hover {
  background: linear-gradient(135deg, #F0C45A 0%, #E0A05C 100%);
  box-shadow: 0 6px 28px rgba(232, 184, 74, 0.35);
}
```

### Secondary Action Pattern
```css
/* Clarity Button - Secondary Actions */
.btn-clarity {
  background: transparent;
  border: 1px solid #D9C9A5;
  color: #FDF6E3;
}

.btn-clarity:hover {
  background: rgba(253, 246, 227, 0.08);
  border-color: #F5E6C8;
}
```

### AI/Intelligence Elements
```css
/* Wisdom Glow - AI-powered features */
.wisdom-element {
  border: 1px solid #8B7EC8;
  box-shadow: 0 0 20px rgba(139, 126, 200, 0.15);
}

.wisdom-glow {
  box-shadow: 0 0 30px rgba(139, 126, 200, 0.25),
              0 0 60px rgba(139, 126, 200, 0.15);
}
```

### Card Elevations
```css
/* Elevated Card */
.card-elevated {
  background: #151413;
  border: 1px solid #2A2724;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

/* Premium Card - Illuminated Edge */
.card-premium {
  background: #151413;
  border: 1px solid #3D3630;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(232, 184, 74, 0.1);
}
```

---

## Gradients

### Primary Gradients

| Name | Definition | Usage |
|------|------------|-------|
| **Illumination** | `linear-gradient(135deg, #E8B84A 0%, #D4944C 100%)` | Primary CTAs, hero highlights |
| **Dawn** | `linear-gradient(180deg, #0F0E0D 0%, #1C1A18 50%, #2A2724 100%)` | Background depth |
| **Clarity Fade** | `linear-gradient(180deg, rgba(253,246,227,0.12) 0%, transparent 100%)` | Subtle highlights |
| **Wisdom Glow** | `radial-gradient(ellipse at center, rgba(139,126,200,0.15) 0%, transparent 70%)` | AI element backgrounds |

### Gradient Application

```css
/* Hero Section Background */
.hero-bg {
  background: linear-gradient(180deg,
    #0F0E0D 0%,
    #151413 40%,
    #1C1A18 100%
  );
}

/* Illumination Moment - Key Insight Highlight */
.illumination-moment {
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(232, 184, 74, 0.08) 0%,
    transparent 60%
  );
}

/* Capacity Gap Visualization */
.capacity-bridge {
  background: linear-gradient(90deg,
    #A8A299 0%,
    #E8B84A 50%,
    #FDF6E3 100%
  );
}
```

---

## Typography

### Font Stack

```css
/* Primary Font - Clean, professional, approachable */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display Font - For hero statements and major headlines */
--font-display: 'Inter', sans-serif;
/* Uses font-weight: 900 (Black) for impact */
```

### Type Scale

| Level | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| **Hero** | 4rem / 64px | 900 (Black) | -0.02em | Main hero statements |
| **H1** | 3rem / 48px | 700 (Bold) | -0.015em | Page titles |
| **H2** | 2.25rem / 36px | 700 (Bold) | -0.01em | Section headers |
| **H3** | 1.5rem / 24px | 600 (Semi) | 0 | Subsection headers |
| **H4** | 1.25rem / 20px | 600 (Semi) | 0 | Card titles |
| **Body** | 1rem / 16px | 400 (Regular) | 0.01em | Body content |
| **Body-lg** | 1.125rem / 18px | 400 (Regular) | 0.01em | Featured body text |
| **Caption** | 0.875rem / 14px | 400 (Regular) | 0.02em | Captions, metadata |
| **Small** | 0.75rem / 12px | 500 (Medium) | 0.03em | Tags, badges |

### Typography Patterns

```css
/* Hero Statement */
.hero-statement {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #F8F5F0;
}

.hero-statement .highlight {
  color: #E8B84A;
}

/* Section Header */
.section-header {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: #F8F5F0;
}

/* Emphasis Text */
.emphasis {
  font-size: 1.125rem;
  font-weight: 600;
  color: #E8B84A;
}

/* Body Content */
.body-content {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.01em;
  color: #E5E0D8;
}
```

---

## Iconography

### Icon Style Guidelines

- **Style**: Outlined icons with 1.5px stroke
- **Size Scale**: 16px, 20px, 24px, 32px
- **Corner Radius**: Rounded corners (2px radius at 24px size)
- **Color**: Inherit from text color or use accent colors

### Brand-Specific Icons

| Icon | Usage | Meaning |
|------|-------|---------|
| **Lightbulb (illuminated)** | Illumination Session, insights | Clarity, revelation |
| **Blueprint/Grid** | Blueprint service | Strategic architecture |
| **Book/Quill** | Story service | Narrative, authority |
| **Sunrise/Dawn** | Transformation | Beginning, potential |
| **Compass** | Navigation, guidance | Direction, clarity |
| **Spark/Star** | Premium, achievement | Excellence, recognition |

### Icon Color Application

```css
/* Default Icon */
.icon {
  color: #A8A299;
}

/* Interactive Icon */
.icon-interactive:hover {
  color: #E8B84A;
}

/* Premium Icon */
.icon-premium {
  color: #E8B84A;
}

/* AI/Wisdom Icon */
.icon-wisdom {
  color: #8B7EC8;
}
```

---

## Shadow System

### Elevation Levels

| Level | Shadow | Usage |
|-------|--------|-------|
| **Subtle** | `0 2px 8px rgba(0,0,0,0.3)` | Slight elevation, hover states |
| **Elevated** | `0 4px 24px rgba(0,0,0,0.4)` | Cards, modals |
| **Floating** | `0 8px 40px rgba(0,0,0,0.5)` | Dropdowns, popovers |
| **Dramatic** | `0 16px 64px rgba(0,0,0,0.6)` | Hero elements, feature highlights |

### Glow Effects

| Name | Shadow | Usage |
|------|--------|-------|
| **Illumination Glow** | `0 0 30px rgba(232,184,74,0.25)` | Primary CTAs, illumination moments |
| **Wisdom Glow** | `0 0 30px rgba(139,126,200,0.2)` | AI-powered features |
| **Clarity Glow** | `0 0 20px rgba(253,246,227,0.15)` | Premium highlights |

```css
/* Illumination Glow - Button Focus State */
.btn-illumination:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(232, 184, 74, 0.4),
              0 4px 20px rgba(232, 184, 74, 0.25);
}

/* Wisdom Glow - AI Feature Card */
.card-ai {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4),
              0 0 30px rgba(139, 126, 200, 0.15);
}
```

---

## Component Theming

### Button Variants

```tsx
// Light Brand Consulting Button Variants
const buttonVariants = {
  // Primary - Illumination gradient
  primary: `
    bg-gradient-to-br from-radiance-gold to-radiance-amber
    text-depth-base font-semibold
    shadow-lg shadow-radiance-gold/25
    hover:from-radiance-gold/90 hover:to-radiance-amber/90
    hover:shadow-xl hover:shadow-radiance-gold/30
  `,

  // Secondary - Clarity outline
  secondary: `
    bg-transparent border border-clarity-muted
    text-clarity-cream
    hover:bg-clarity-cream/8 hover:border-clarity-soft
  `,

  // Ghost - Minimal
  ghost: `
    bg-transparent text-text-secondary
    hover:text-radiance-gold hover:bg-depth-surface
  `,

  // Wisdom - AI features
  wisdom: `
    bg-wisdom-violet/20 border border-wisdom-violet/40
    text-clarity-cream
    hover:bg-wisdom-violet/30 hover:border-wisdom-soft/60
    shadow-lg shadow-wisdom-violet/15
  `,
};
```

### Card Variants

```tsx
// Light Brand Consulting Card Variants
const cardVariants = {
  // Default elevated card
  default: `
    bg-depth-elevated border border-depth-border
    shadow-lg shadow-black/40
  `,

  // Premium card with illumination accent
  premium: `
    bg-depth-elevated
    border border-radiance-gold/20
    shadow-xl shadow-black/40
    ring-1 ring-radiance-gold/10
  `,

  // Interactive card
  interactive: `
    bg-depth-elevated border border-depth-border
    shadow-lg shadow-black/40
    hover:border-radiance-gold/30 hover:shadow-xl
    transition-all duration-300
  `,

  // AI-powered feature card
  wisdom: `
    bg-depth-elevated border border-wisdom-violet/30
    shadow-lg shadow-black/40
    shadow-wisdom-violet/10
  `,
};
```

### Input Styling

```tsx
// Light Brand Consulting Input Styles
const inputStyles = {
  base: `
    bg-depth-surface border border-depth-border
    text-text-primary placeholder:text-text-muted
    focus:border-radiance-gold focus:ring-2 focus:ring-radiance-gold/20
    rounded-lg px-4 py-3
  `,

  error: `
    border-error focus:border-error focus:ring-error/20
  `,
};
```

---

## Responsive Design

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

### Mobile-First Patterns

```css
/* Hero Typography Scaling */
.hero-statement {
  font-size: 2.5rem;  /* Mobile */
}

@media (min-width: 768px) {
  .hero-statement {
    font-size: 3.5rem;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .hero-statement {
    font-size: 4rem;  /* Desktop */
  }
}
```

---

## Animation & Motion

### Timing Functions

| Name | Easing | Usage |
|------|--------|-------|
| **ease-out** | `cubic-bezier(0, 0, 0.2, 1)` | Exit animations |
| **ease-in** | `cubic-bezier(0.4, 0, 1, 1)` | Enter animations |
| **ease-in-out** | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |
| **spring** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful interactions |

### Animation Patterns

```css
/* Illumination Reveal - Content fading in */
@keyframes illuminate {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.illuminate-in {
  animation: illuminate 0.6s ease-out forwards;
}

/* Glow Pulse - For attention-grabbing elements */
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(232, 184, 74, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(232, 184, 74, 0.35);
  }
}

.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

/* Wisdom Shimmer - For AI elements */
@keyframes wisdom-shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.wisdom-shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(139, 126, 200, 0.3) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: wisdom-shimmer 3s ease-in-out infinite;
}
```

---

## Brand Application Examples

### Hero Section

```tsx
<section className="min-h-screen bg-depth-base relative overflow-hidden">
  {/* Subtle radial gradient for depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-depth-base via-depth-elevated to-depth-base" />

  {/* Illumination glow effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
                  bg-radial-gradient from-radiance-gold/8 to-transparent blur-3xl" />

  <div className="relative z-10 max-w-5xl mx-auto px-8 py-32">
    <Tag variant="premium" className="mb-6">AI Consulting</Tag>

    <h1 className="hero-statement mb-8">
      Let us help you see your
      <span className="text-radiance-gold"> fullest capacity</span>
    </h1>

    <p className="text-xl text-text-secondary mb-12 max-w-2xl leading-relaxed">
      Transform your business into an AI super intelligence.
      Light consulting creates capacity, not dependency.
    </p>

    <div className="flex gap-4">
      <Button variant="primary" size="lg">
        Book Illumination Session
      </Button>
      <Button variant="secondary" size="lg">
        Explore Services
      </Button>
    </div>
  </div>
</section>
```

### Service Card

```tsx
<Card variant="interactive" className="p-8">
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 rounded-lg bg-radiance-gold/15">
      <LightbulbIcon className="w-6 h-6 text-radiance-gold" />
    </div>
    <Tag variant="premium">$500</Tag>
  </div>

  <h3 className="text-xl font-semibold text-text-primary mb-2">
    Illumination Session
  </h3>

  <p className="text-text-secondary mb-6">
    A single focused conversation revealing 3 AI opportunities hiding
    in your current operations.
  </p>

  <div className="flex items-center text-sm text-text-muted mb-6">
    <ClockIcon className="w-4 h-4 mr-2" />
    90 minutes
  </div>

  <Button variant="primary" className="w-full">
    Learn More
  </Button>
</Card>
```

---

## Accessibility Compliance

### Color Contrast Matrix

| Combination | Ratio | WCAG Level |
|-------------|-------|------------|
| text-primary on depth-base | 18.2:1 | AAA |
| text-secondary on depth-base | 15.1:1 | AAA |
| text-muted on depth-base | 7.8:1 | AA |
| radiance-gold on depth-base | 9.4:1 | AAA |
| clarity-cream on depth-base | 19.1:1 | AAA |
| wisdom-violet on depth-base | 6.2:1 | AA |
| depth-base on radiance-gold | 9.4:1 | AAA |

### Focus States

All interactive elements must have visible focus states:

```css
/* Focus Ring Pattern */
.focusable:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #0F0E0D, 0 0 0 4px #E8B84A;
}
```

---

## Token Export Reference

```typescript
// Light Brand Consulting Color Tokens
export const lightBrandColors = {
  // Radiance (Primary Accent)
  'radiance-gold': '#E8B84A',
  'radiance-amber': '#D4944C',
  'radiance-warm': '#C67D4E',

  // Clarity (Secondary Accent)
  'clarity-cream': '#FDF6E3',
  'clarity-soft': '#F5E6C8',
  'clarity-muted': '#D9C9A5',

  // Wisdom (AI/Intelligence Accent)
  'wisdom-violet': '#8B7EC8',
  'wisdom-soft': '#A599D4',
  'wisdom-muted': '#7A6BA8',

  // Depth (Backgrounds)
  'depth-base': '#0F0E0D',
  'depth-elevated': '#151413',
  'depth-surface': '#1C1A18',
  'depth-border': '#2A2724',

  // Text
  'text-primary': '#F8F5F0',
  'text-secondary': '#E5E0D8',
  'text-muted': '#A8A299',

  // Semantic
  'success': '#5CB85C',
  'warning': '#F0A030',
  'error': '#E85A5A',
  'info': '#5DADE2',
} as const;
```

---

## Design System Mapping

### Onyx → Light Brand Token Mapping

| Onyx Token | Light Brand Token | Notes |
|------------|-------------------|-------|
| `aqua-light` | `radiance-gold` | Primary accent shift |
| `aqua-medium` | `radiance-amber` | Secondary accent |
| `teal-light` | `wisdom-violet` | Tertiary/AI accent |
| `gold-accent` | `clarity-cream` | Premium highlight |
| `abyss-base` | `depth-base` | Warmer black |
| `abyss-mystic` | `depth-elevated` | Card backgrounds |
| `abyss-light` | `depth-surface` | Hover surfaces |
| `abyss-lighter` | `depth-border` | Borders |
| `moonlight` | `text-primary` | Primary text |
| `moonlight-soft` | `text-secondary` | Secondary text |
| `moonlight-muted` | `text-muted` | Muted text |

This mapping allows Light Brand Consulting to use Onyx Design System components while applying its unique brand identity through token overrides.

---

*Visual Identity Version: 1.0*
*Created: January 6, 2026*
*Last Updated: January 6, 2026*
