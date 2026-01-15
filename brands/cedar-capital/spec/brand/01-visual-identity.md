# Cedar Capital: Visual Identity Guidelines

> *Local heart + institutional confidence*

---

## Table of Contents

1. [Brand Essence](#brand-essence)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [UI Components](#ui-components)
6. [Iconography](#iconography)
7. [Photography & Imagery](#photography--imagery)
8. [Motion & Animation](#motion--animation)
9. [Logo & Brand Mark](#logo--brand-mark)
10. [Application Examples](#application-examples)

---

## Brand Essence

### Brand Intent

Cedar Capital should feel like:

| Quality | Expression |
|---------|------------|
| **Trustworthy like a bank** | Capital, certainty, professionalism |
| **Warm like a local family** | Human, relational, "we'll actually show up" |
| **Modern + streamlined** | Tech behind the scenes, but never "cold AI" |

**Shorthand:** "Local heart + institutional confidence."

### Visual Mood Words

- Earthy
- Premium
- Calm
- Grounded
- Warm
- Clean
- Non-neon

### Design Pillars

1. **Trustworthy:** Every visual choice reinforces safety and credibility
2. **Warm:** Inviting, never cold or sterile
3. **Grounded:** Earthy colors and natural feel
4. **Professional:** Bank-grade polish without corporate coldness
5. **Human:** Real people, real presence, authenticity

### What to Avoid

- Neon colors, overly techy gradients, "crypto bro" vibes
- Aggressive red urgency design
- Sterile corporate stock-photo-only look
- AI-generated faces/images as primary brand photos
- Overly glossy "investor brochure" stock photography

---

## Color System

### Primary Colors

*Use these most often.*

| Color | Name | Hex | RGB | Usage |
|-------|------|-----|-----|-------|
| ![#0B3D2E](https://via.placeholder.com/20/0B3D2E/0B3D2E) | **Cedar Green** | `#0B3D2E` | 11, 61, 46 | Primary brand color, headers, nav, buttons, key accents |
| ![#C8A24A](https://via.placeholder.com/20/C8A24A/C8A24A) | **Capital Gold** | `#C8A24A` | 200, 162, 74 | Premium highlights, icons, subtle emphasis, button accents |

### Secondary Colors

*Support the look without overpowering.*

| Color | Name | Hex | RGB | Usage |
|-------|------|-----|-----|-------|
| ![#1F5B47](https://via.placeholder.com/20/1F5B47/1F5B47) | **Evergreen** | `#1F5B47` | 31, 91, 71 | Hover states, section backgrounds, secondary buttons, links |
| ![#0F2233](https://via.placeholder.com/20/0F2233/0F2233) | **Navy Ink** | `#0F2233` | 15, 34, 51 | Body text alternative, footer backgrounds, "serious + clean" |

### Neutral Colors

*These keep it warm + readable.*

| Color | Name | Hex | RGB | Usage |
|-------|------|-----|-----|-------|
| ![#F6F1E6](https://via.placeholder.com/20/F6F1E6/F6F1E6) | **Cream** | `#F6F1E6` | 246, 241, 230 | Primary background (warm, avoids sterile white) |
| ![#E9DDC7](https://via.placeholder.com/20/E9DDC7/E9DDC7) | **Sand** | `#E9DDC7` | 233, 221, 199 | Subtle panels, form sections, cards |
| ![#D2C7B3](https://via.placeholder.com/20/D2C7B3/D2C7B3) | **Stone** | `#D2C7B3` | 210, 199, 179 | Borders, lines, UI dividers |
| ![#1F2933](https://via.placeholder.com/20/1F2933/1F2933) | **Charcoal** | `#1F2933` | 31, 41, 51 | Primary body text (no pure black for readability) |

### Utility Colors

*Keep these muted so the brand stays calm.*

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| ![#2F6F55](https://via.placeholder.com/20/2F6F55/2F6F55) | **Success** | `#2F6F55` | Confirmations, positive states |
| ![#B07A2A](https://via.placeholder.com/20/B07A2A/B07A2A) | **Warning** | `#B07A2A` | Cautions, attention needed |
| ![#A13A3A](https://via.placeholder.com/20/A13A3A/A13A3A) | **Error** | `#A13A3A` | Errors, critical alerts |
| ![#2B5C7A](https://via.placeholder.com/20/2B5C7A/2B5C7A) | **Info** | `#2B5C7A` | Information, guidance |

### Color Usage Rules

#### Backgrounds

```css
/* Default page background */
.page {
  background: #F6F1E6; /* Cream */
}

/* Section alternation */
.section-alt {
  background: #E9DDC7; /* Sand */
}

/* Footer / deep sections */
.footer {
  background: #0F2233; /* Navy Ink */
  color: #F6F1E6;      /* Cream text */
}
```

#### Buttons

```css
/* Primary Button */
.button-primary {
  background: #0B3D2E;  /* Cedar Green */
  color: #F6F1E6;       /* Cream */
}

.button-primary:hover {
  background: #1F5B47;  /* Evergreen */
}

.button-primary:focus {
  box-shadow: 0 0 0 3px rgba(200, 162, 74, 0.3); /* Capital Gold at 30% */
}

/* Secondary Button */
.button-secondary {
  background: transparent;
  border: 1px solid #0B3D2E;  /* Cedar Green */
  color: #0B3D2E;
}

.button-secondary:hover {
  background: #E9DDC7;  /* Sand */
}

/* Accent Button (use sparingly) */
.button-accent {
  background: #C8A24A;  /* Capital Gold */
  color: #0F2233;       /* Navy Ink */
}

.button-accent:hover {
  background: #B8923D;  /* Slightly deeper gold */
}
```

#### Links

```css
/* Links */
a {
  color: #1F5B47;  /* Evergreen */
}

a:hover {
  color: #0B3D2E;  /* Cedar Green */
  text-decoration: underline;
}
```

---

## Typography

### Font Families

| Usage | Primary | Fallback |
|-------|---------|----------|
| **Headlines** | Plus Jakarta Sans (600-700 weight) | system-ui, -apple-system, sans-serif |
| **Body** | Inter (400-500 weight) | system-ui, -apple-system, sans-serif |

#### Alternative "More Rounded" Option

If a more rounded friendly feel is desired (similar to Satoshi):

| Usage | Primary | Fallback |
|-------|---------|----------|
| **Headlines** | Manrope (600-700) | system-ui, sans-serif |
| **Body** | DM Sans (400-500) | system-ui, sans-serif |

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **H1** | 44-52px | 700 | 1.05-1.15 | Hero headlines, page titles |
| **H2** | 32-36px | 700 | 1.2 | Section headers |
| **H3** | 24-28px | 600 | 1.3 | Subsection headers, card titles |
| **Body** | 16-18px | 400-500 | 1.5-1.7 | Main content |
| **Small** | 13-14px | 400 | 1.4 | Captions, helper text (avoid going smaller) |

### Typography in Practice

```css
/* Headlines */
h1, h2, h3 {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  color: #0B3D2E; /* Cedar Green */
}

h1 {
  font-size: clamp(2.75rem, 5vw, 3.25rem); /* 44-52px */
  font-weight: 700;
  line-height: 1.1;
}

h2 {
  font-size: clamp(2rem, 4vw, 2.25rem); /* 32-36px */
  font-weight: 700;
  line-height: 1.2;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 1.75rem); /* 24-28px */
  font-weight: 600;
  line-height: 1.3;
}

/* Body */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem; /* 16px base, scales up to 18px */
  font-weight: 400;
  line-height: 1.6;
  color: #1F2933; /* Charcoal */
}

/* Small text */
.small, .caption {
  font-size: 0.875rem; /* 14px */
  color: #1F2933;
}
```

### Typography Style Rules

- **Avoid all-caps** for large blocks (feels aggressive)
- **Use sentence case** for headings most of the time (feels human)
- **Keep paragraphs short** — trust increases when content is scannable
- Prioritize **readability** over decoration

---

## Spacing & Layout

### Spacing Scale (8px Base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro spacing, icon padding |
| `space-2` | 8px | Tight spacing, inline elements |
| `space-3` | 12px | Compact elements |
| `space-4` | 16px | Default element spacing |
| `space-5` | 20-28px | Card padding |
| `space-6` | 32px | Section separation |
| `space-7` | 40-56px | Mobile section padding |
| `space-8` | 72-96px | Desktop section padding |

### Layout Guidelines

| Element | Specification |
|---------|---------------|
| **Section padding (desktop)** | 72-96px vertical |
| **Section padding (mobile)** | 40-56px vertical |
| **Card padding** | 20-28px |
| **Content max-width** | 1200px centered |
| **Body text max-width** | 65-75 characters per line |

### Grid System

| Breakpoint | Width | Columns | Margin |
|------------|-------|---------|--------|
| **Mobile** | <640px | 4 | 16px |
| **Tablet** | 640-1024px | 8 | 24px |
| **Desktop** | >1024px | 12 | auto (max 1200px) |

---

## UI Components

### Corner Radius

| Element | Radius |
|---------|--------|
| **Buttons** | 10-14px |
| **Cards** | 16-20px (soft, warm, premium) |
| **Inputs** | 8-12px |
| **Modals** | 20px |

### Shadows

Keep shadows subtle—don't go "SaaS neon."

```css
/* Card shadow */
.card {
  box-shadow: 0 2px 8px rgba(31, 41, 51, 0.08);
}

/* Elevated shadow */
.elevated {
  box-shadow: 0 4px 16px rgba(31, 41, 51, 0.12);
}

/* Modal shadow */
.modal {
  box-shadow: 0 8px 32px rgba(31, 41, 51, 0.16);
}
```

### Card Component

```css
.card {
  background: #E9DDC7;       /* Sand */
  border: 1px solid #D2C7B3; /* Stone */
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(31, 41, 51, 0.08);
}
```

### Form Elements

```css
.input {
  background: #F6F1E6;       /* Cream */
  border: 1px solid #D2C7B3; /* Stone */
  border-radius: 10px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  color: #1F2933;            /* Charcoal */
}

.input:focus {
  border-color: #0B3D2E;     /* Cedar Green */
  outline: none;
  box-shadow: 0 0 0 3px rgba(200, 162, 74, 0.2); /* Gold focus ring */
}
```

---

## Iconography

### Icon Style

| Attribute | Specification |
|-----------|---------------|
| **Style** | Simple line icons |
| **Stroke** | 1.5-2px |
| **Sizes** | 20px, 24px standard |
| **Color** | Cedar Green #0B3D2E or Capital Gold #C8A24A (sparingly) |

### Icon Principles

- Icons should be **supportive, not decorative noise**
- Keep them **simple and recognizable**
- **Consistent visual weight** across all icons
- **Inherit color from context** when possible

---

## Photography & Imagery

### Photo Style

| Element | Direction |
|---------|-----------|
| **Lighting** | Natural light |
| **Feel** | Outdoor/local Austin feel |
| **Subjects** | Family vibe (dogs/cats okay, tasteful) |
| **Mood** | Authentic, un-posed, real moments |

### Photography Principles

- **Real humans, real local presence**
- Not overly staged corporate headshots
- Show genuine people in genuine moments
- Reflect the local Austin community

### What to Avoid

- Overly glossy "investor brochure" stock photography
- AI-generated faces/images as primary brand photos (undermines "human trust" promise)
- Cold, sterile environments
- Stock photo feeling
- Over-processed images

### Image Treatment

```css
/* Standard image treatment */
.image {
  border-radius: 16px;
}

/* Hero image overlay (for text legibility) */
.hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(15, 34, 51, 0) 0%,
    rgba(15, 34, 51, 0.5) 100%
  );
}
```

---

## Motion & Animation

### Motion Principles

- **Purposeful** — Motion guides attention, never distracts
- **Gentle** — Smooth, never jarring
- **Respectful** — Of user attention and preferences

### Timing

| Type | Duration |
|------|----------|
| **Quick actions** | 200ms |
| **Standard transitions** | 300ms |
| **Entrance/exit** | 400ms |
| **Complex sequences** | 600ms |

### Easing

```css
/* Standard */
transition-timing-function: ease-out;

/* Entrances */
transition-timing-function: ease-out;

/* Exits */
transition-timing-function: ease-in;

/* Complex */
transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
```

---

## Logo & Brand Mark

### Logo Direction

- A simple **cedar tree mark** or abstract leaf/branch is on-theme
- Avoid overly detailed seals/crests (can feel fake)
- Use **gold as an accent**, not the whole logo fill

### Logo Colors

| Context | Primary | Accent |
|---------|---------|--------|
| **Light background** | Cedar Green #0B3D2E | Capital Gold #C8A24A |
| **Dark background** | Cream #F6F1E6 | Capital Gold #C8A24A |

### Clear Space

Minimum clear space = height of the "C" in Cedar

---

## Application Examples

### Website Landing Page Recipe

| Element | Value |
|---------|-------|
| **Background** | Cream #F6F1E6 |
| **Nav + key UI** | Cedar Green #0B3D2E |
| **Accents** | Capital Gold #C8A24A |
| **Footer** | Navy Ink #0F2233 |
| **Typography** | Plus Jakarta Sans + Inter |
| **Cards** | Sand #E9DDC7 with Stone borders #D2C7B3 |

### Section Structure

**Hero Section:**
- Headline in Cedar Green
- Subhead in Charcoal
- Gold underline or accent dot
- Real photo of team/local Austin
- CTA: "Get a Fair Offer" (Cedar Green button)

**Seller/Investor Split:**
- Two soft cards on Sand background
- Icons in Capital Gold
- Clear CTAs for each audience

**Deal Cards (Investor Section):**
- Sand background
- Thin Stone border
- Cedar Green headings
- Capital Gold accent line
- Clean numbers (ROI, ARV, price)

**Footer:**
- Navy Ink background
- Cream text
- Small gold accents

---

## Design Token Summary

```javascript
const cedarCapitalTokens = {
  colors: {
    primary: {
      cedarGreen: '#0B3D2E',
      capitalGold: '#C8A24A',
    },
    secondary: {
      evergreen: '#1F5B47',
      navyInk: '#0F2233',
    },
    neutral: {
      cream: '#F6F1E6',
      sand: '#E9DDC7',
      stone: '#D2C7B3',
      charcoal: '#1F2933',
    },
    utility: {
      success: '#2F6F55',
      warning: '#B07A2A',
      error: '#A13A3A',
      info: '#2B5C7A',
    },
  },
  typography: {
    families: {
      heading: '"Plus Jakarta Sans", system-ui, sans-serif',
      body: '"Inter", system-ui, sans-serif',
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '72px',
    9: '96px',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  shadows: {
    card: '0 2px 8px rgba(31, 41, 51, 0.08)',
    elevated: '0 4px 16px rgba(31, 41, 51, 0.12)',
    modal: '0 8px 32px rgba(31, 41, 51, 0.16)',
  },
  motion: {
    quick: '200ms ease-out',
    standard: '300ms ease-out',
    entrance: '400ms ease-out',
    complex: '600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
};
```

---

## CSS Variables (Ready to Use)

```css
:root {
  /* Primary Colors */
  --color-cedar-green: #0B3D2E;
  --color-capital-gold: #C8A24A;

  /* Secondary Colors */
  --color-evergreen: #1F5B47;
  --color-navy-ink: #0F2233;

  /* Neutral Colors */
  --color-cream: #F6F1E6;
  --color-sand: #E9DDC7;
  --color-stone: #D2C7B3;
  --color-charcoal: #1F2933;

  /* Utility Colors */
  --color-success: #2F6F55;
  --color-warning: #B07A2A;
  --color-error: #A13A3A;
  --color-info: #2B5C7A;

  /* Button hover states */
  --color-gold-hover: #B8923D;

  /* Typography */
  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 72px;
  --space-9: 96px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(31, 41, 51, 0.08);
  --shadow-elevated: 0 4px 16px rgba(31, 41, 51, 0.12);
  --shadow-modal: 0 8px 32px rgba(31, 41, 51, 0.16);

  /* Transitions */
  --transition-quick: 200ms ease-out;
  --transition-standard: 300ms ease-out;
  --transition-entrance: 400ms ease-out;
}
```

---

## Emotional Gut Check

**If a distressed homeowner lands on the site, they should feel:**
> "I'm safe. These people will treat me fairly."

**If an investor lands on the site, they should feel:**
> "These people are organized and credible."

**If either feels rushed, flashy, or confused — the brand has failed.**

This palette + layout direction avoids that completely.

---

*Cedar Capital: Every visual choice serves the mission—to help sellers feel safe and investors feel confident. Design should be calm, clear, warm, and trustworthy.*
