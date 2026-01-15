# Cedar Capital: Visual Identity Guidelines

> *Rooted in Excellence, Growing Your Future*

---

## Table of Contents

1. [Brand Essence](#brand-essence)
2. [Logo](#logo)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Iconography](#iconography)
6. [Photography & Imagery](#photography--imagery)
7. [UI/UX Standards](#uiux-standards)
8. [Motion & Animation](#motion--animation)
9. [Web Implementation](#web-implementation)
10. [Accessibility](#accessibility)
11. [Do's and Don'ts](#dos-and-donts)
12. [Design Tokens](#design-tokens)

---

## Brand Essence

These guidelines ensure consistent representation of the Cedar Capital brand across all digital platforms, particularly for web development. The brand evokes themes of **growth**, **stability**, and **nature-inspired investment**—symbolized by the tree-house motif—positioning Cedar Capital as a reliable, organic growth-focused family real estate business.

### Visual Principles

| Principle | Expression |
|-----------|------------|
| **Rooted Stability** | Deep greens and earth tones—grounded yet aspirational |
| **Family Trust** | Warm, approachable, professional |
| **Organic Growth** | Natural forms, tree motifs, layered depth |
| **Timeless Elegance** | Gold accents with sophisticated restraint |
| **Sustainable Future** | Modern design honoring traditional values |

### Design Pillars

1. **Trustworthy:** Every visual choice reinforces reliability and professionalism
2. **Warm:** Inviting and family-oriented, never cold or corporate
3. **Grounded:** Stability through natural elements and earthy tones
4. **Elegant:** Sophisticated without being ostentatious
5. **Scalable:** Designed for growth across all touchpoints

---

## Logo

The primary logo features a stylized cedar tree incorporating a house silhouette in the trunk, with layered green leaves forming the canopy. The wordmark "Cedar Capital" appears below in an elegant, gold-toned script font. The overall design uses a dark green background for maximum contrast.

### Logo Versions

| Version | Usage |
|---------|-------|
| **Full Color (Primary)** | Use on light or dark backgrounds with sufficient contrast. Includes gradients in greens for leaves and gold for house/text. |
| **Monochrome** | Gold outline on dark green (for high-contrast needs) or all-white/black for versatility. |
| **Icon-Only** | The tree-house symbol without text, for favicons or small icons (32x32px or 64x64px). |
| **Stacked** | Primary layout—tree above text. Use for most applications. |
| **Horizontal** | Tree and text side-by-side. Use for narrow spaces like navigation bars. |

### Logo Specifications

| Specification | Value |
|---------------|-------|
| **Minimum Width (Desktop)** | 150px for full logo |
| **Minimum Width (Mobile)** | 100px (to maintain detail) |
| **Clear Space** | Height of the "C" in "Cedar" on all sides |
| **File Formats** | SVG (primary), PNG (raster), WebP (optimized) |
| **Maximum File Size** | Under 50KB for web optimization |

### Logo Clear Space

```
┌─────────────────────────────────┐
│                                 │
│   ┌─────────────────────┐       │
│   │                     │       │
│   │     🌲 [LOGO]       │ ← C   │
│   │                     │       │
│   │   Cedar Capital     │       │
│   │                     │       │
│   └─────────────────────┘       │
│         ↑                       │
│         C = height of "C"       │
└─────────────────────────────────┘
```

### Logo CSS Implementation

```css
.logo {
  max-width: 150px;
  height: auto;
  padding: 1em; /* Clear space equivalent */
}

.logo-horizontal {
  max-width: 200px;
  height: auto;
}

.logo-icon {
  width: 32px;
  height: 32px;
}

/* Favicon sizes */
.favicon-sm { width: 16px; height: 16px; }
.favicon-md { width: 32px; height: 32px; }
.favicon-lg { width: 64px; height: 64px; }
```

### Logo Usage Rules

**Do:**
- Place on dark backgrounds for maximum pop
- Animate subtly (e.g., leaf growth on hover) if it enhances UX
- Use SVG for scalability
- Maintain clear space

**Don't:**
- Stretch, distort, or rotate the logo
- Recolor outside of approved palette
- Add effects like shadows or drop-shadows
- Place on busy patterns or low-contrast backgrounds
- Use below minimum size specifications

---

## Color System

Derived from the logo's natural, earthy tones for a sophisticated, trustworthy feel. Primary colors should dominate (60-70% of design), with accents reserved for CTAs and highlights.

### Primary Palette

| Color | Name | Hex | RGB | Usage |
|-------|------|-----|-----|-------|
| ![#0F3D2B](https://via.placeholder.com/20/0F3D2B/0F3D2B) | **Forest Green** | `#0F3D2B` | 15, 61, 43 | Main backgrounds, headers, navigation bars. Evokes stability. |
| ![#BFA55A](https://via.placeholder.com/20/BFA55A/BFA55A) | **Gold Accent** | `#BFA55A` | 191, 165, 90 | Headings, icons, buttons, links. Use for highlights and CTAs. |
| ![#7CB342](https://via.placeholder.com/20/7CB342/7CB342) | **Light Leaf Green** | `#7CB342` | 124, 179, 66 | Interactive elements, hover states, progress bars, success messages. |

### Background & Neutral Palette

| Color | Name | Hex | RGB | Usage |
|-------|------|-----|-----|-------|
| ![#001A0F](https://via.placeholder.com/20/001A0F/001A0F) | **Dark Background** | `#001A0F` | 0, 26, 15 | Footers, modals, high-contrast sections. |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | **Neutral White** | `#FFFFFF` | 255, 255, 255 | Text on dark backgrounds. |
| ![#6B6B6B](https://via.placeholder.com/20/6B6B6B/6B6B6B) | **Neutral Gray** | `#6B6B6B` | 107, 107, 107 | Secondary text, borders, disabled states. |

### Extended Palette

| Color | Name | Hex | Usage |
|-------|------|-----|-------|
| ![#1A5038](https://via.placeholder.com/20/1A5038/1A5038) | **Cedar Deep** | `#1A5038` | Hover states on Forest Green |
| ![#D4B96A](https://via.placeholder.com/20/D4B96A/D4B96A) | **Gold Light** | `#D4B96A` | Hover states on Gold |
| ![#8DC653](https://via.placeholder.com/20/8DC653/8DC653) | **Leaf Bright** | `#8DC653` | Active/selected states |
| ![#F5F5F5](https://via.placeholder.com/20/F5F5F5/F5F5F5) | **Off White** | `#F5F5F5` | Secondary backgrounds |
| ![#E8E8E8](https://via.placeholder.com/20/E8E8E8/E8E8E8) | **Light Gray** | `#E8E8E8` | Borders, dividers |

### Color Contrast Ratios (WCAG Compliance)

| Combination | Ratio | Compliance |
|-------------|-------|------------|
| Gold (#BFA55A) on Forest Green (#0F3D2B) | ~7:1 | AAA |
| White (#FFFFFF) on Forest Green (#0F3D2B) | ~12:1 | AAA |
| White (#FFFFFF) on Dark Background (#001A0F) | ~19:1 | AAA |
| Forest Green on White | ~12:1 | AAA |

### CSS Color Variables

```css
:root {
  /* Primary Colors */
  --color-forest-green: #0F3D2B;
  --color-gold-accent: #BFA55A;
  --color-leaf-green: #7CB342;

  /* Background Colors */
  --color-dark-bg: #001A0F;
  --color-white: #FFFFFF;
  --color-off-white: #F5F5F5;

  /* Neutral Colors */
  --color-gray: #6B6B6B;
  --color-light-gray: #E8E8E8;

  /* Extended Palette */
  --color-cedar-deep: #1A5038;
  --color-gold-light: #D4B96A;
  --color-leaf-bright: #8DC653;

  /* Semantic Mapping */
  --color-primary: var(--color-forest-green);
  --color-secondary: var(--color-gold-accent);
  --color-accent: var(--color-leaf-green);
  --color-background: var(--color-white);
  --color-surface: var(--color-off-white);
  --color-text-primary: var(--color-forest-green);
  --color-text-secondary: var(--color-gray);
  --color-text-inverse: var(--color-white);
}
```

### Gradient Specifications

```css
/* Primary Hero Gradient */
.gradient-hero {
  background: linear-gradient(135deg, #7CB342 0%, #0F3D2B 100%);
}

/* Subtle Background Gradient */
.gradient-subtle {
  background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
}

/* Gold Accent Gradient */
.gradient-gold {
  background: linear-gradient(135deg, #D4B96A 0%, #BFA55A 100%);
}

/* Dark Section Gradient */
.gradient-dark {
  background: linear-gradient(180deg, #0F3D2B 0%, #001A0F 100%);
}
```

### Color Usage Guidelines

- **60-30-10 Rule:** 60% primary (Forest Green/White), 30% secondary (neutrals), 10% accent (Gold/Leaf Green)
- Avoid overusing gold to prevent visual fatigue—reserve for emphasis
- Test all color combinations for accessibility compliance
- Use gradients sparingly and purposefully (hero sections, major CTAs)

---

## Typography

The logo's wordmark features an elegant, slightly scripted feel. Pair with modern, readable fonts for web to balance sophistication and usability.

### Font Families

| Usage | Primary Font | Fallback |
|-------|--------------|----------|
| **Headings** | Playfair Display | Georgia, Times New Roman, serif |
| **Body** | Roboto | -apple-system, BlinkMacSystemFont, sans-serif |
| **Accent/Quotes** | Playfair Display Italic | Georgia, serif |

### Font Weights

**Playfair Display (Headings)**
- Regular (400) — Section headings, subheadings
- Bold (700) — Page titles, hero text

**Roboto (Body)**
- Light (300) — Captions, footnotes
- Regular (400) — Body text, descriptions
- Medium (500) — Navigation, buttons, emphasis

### Type Scale

| Level | Size | Weight | Line Height | Letter Spacing | Font | Color |
|-------|------|--------|-------------|----------------|------|-------|
| **H1** | 48px / 3rem | 700 | 1.2 | -0.01em | Playfair Display | Gold or White |
| **H2** | 32px / 2rem | 400 | 1.25 | -0.01em | Playfair Display | Forest Green |
| **H3** | 24px / 1.5rem | 700 | 1.3 | 0 | Playfair Display | Forest Green |
| **H4** | 20px / 1.25rem | 500 | 1.4 | 0 | Roboto | Forest Green |
| **Body** | 16px / 1rem | 400 | 1.5 | 0 | Roboto | Gray or Forest Green |
| **Body Large** | 18px / 1.125rem | 400 | 1.6 | 0 | Roboto | Gray |
| **Small/Caption** | 14px / 0.875rem | 300 | 1.4 | 0 | Roboto | Gray |
| **Overline** | 12px / 0.75rem | 500 | 1.2 | 0.1em | Roboto | Gold |

### Web Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
```

### CSS Typography Implementation

```css
/* Base Typography */
body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-gray);
}

/* Headings */
h1, .h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-gold-accent);
}

h2, .h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--color-forest-green);
}

h3, .h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-forest-green);
}

h4, .h4 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--color-forest-green);
}

/* Body Variants */
.body-large {
  font-size: 1.125rem;
  line-height: 1.6;
}

.caption {
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--color-gray);
}

.overline {
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold-accent);
}

/* Special Treatments */
.heading-uppercase {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Typography Guidelines

- **Uppercase:** Use for headings when evoking luxury; adds emphasis
- **Line Length:** Limit body text to 75 characters maximum for readability
- **Kerning:** Add +0.05em letter-spacing for headings
- **Hierarchy:** Maintain clear visual hierarchy through size, weight, and color
- **Accessibility:** Minimum 16px for body text; ensure 4.5:1 contrast ratio

---

## Iconography

Custom icons inspired by the tree motif reinforce the Cedar Capital brand identity.

### Icon Style

| Attribute | Specification |
|-----------|---------------|
| **Style** | Line-based, 1.5-2px stroke |
| **Corners** | Slightly rounded |
| **Color** | Gold (#BFA55A) or Forest Green (#0F3D2B) |
| **Sizes** | 16px, 20px, 24px, 32px |

### Icon Categories

| Category | Examples | Usage |
|----------|----------|-------|
| **Nature** | Leaf, tree, branch, root, seedling | Growth, sustainability |
| **Property** | House, building, key, floor plan | Real estate services |
| **Family** | People, heart, hands, generations | Family values |
| **Finance** | Chart, growth arrow, coin, shield | Investment, security |
| **Navigation** | Menu, close, arrow, search | UI navigation |

### Icon Guidelines

```css
/* Icon Base Styles */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }

.icon-gold { stroke: var(--color-gold-accent); }
.icon-green { stroke: var(--color-forest-green); }
.icon-white { stroke: var(--color-white); }
```

### Icon Do's and Don'ts

**Do:**
- Use consistent stroke weight across all icons
- Maintain optical alignment at all sizes
- Ensure icons are recognizable at small sizes
- Add appropriate ARIA labels

**Don't:**
- Mix filled and outlined styles
- Use icons decoratively without function
- Scale icons below 16px
- Use colors outside the brand palette

---

## Photography & Imagery

### Photography Style

| Element | Direction |
|---------|-----------|
| **Lighting** | Natural light preferred; warm, golden tones |
| **Color Grading** | Warm, slightly desaturated with green/gold overlay |
| **Composition** | Spacious, inviting, rule of thirds |
| **Subjects** | Real families, properties, nature, communities |
| **Mood** | Warm, trustworthy, aspirational, grounded |

### Subject Categories

| Category | Usage | Direction |
|----------|-------|-----------|
| **Properties** | Listings, portfolio | High-quality exterior/interior shots with natural light |
| **Families** | About, testimonials | Authentic multi-generational moments, diverse representation |
| **Nature** | Backgrounds, accents | Forests, trees, green spaces—reinforces brand motif |
| **Communities** | Location pages | Neighborhoods, local landmarks, community events |
| **Architecture** | Service pages | Quality construction, sustainable design details |

### Image Specifications

| Type | Aspect Ratio | Usage |
|------|--------------|-------|
| **Hero Images** | 16:9 | Homepage, landing pages |
| **Property Cards** | 4:3 | Listings, portfolio grids |
| **Thumbnails** | 1:1 (square) | Team photos, gallery grids |
| **Background** | Variable | Section backgrounds with overlay |

### Image Treatment

```css
/* Standard Image Treatment */
.image {
  filter: saturate(0.8) contrast(1.05);
  border-radius: 8px;
}

/* Green Tint Overlay */
.image-tinted::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(15, 61, 43, 0.1);
  pointer-events: none;
}

/* Hero Image Overlay */
.hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 26, 15, 0) 0%,
    rgba(0, 26, 15, 0.7) 100%
  );
}

/* Dark Overlay for Text */
.image-dark-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 26, 15, 0.5);
}
```

### Web Image Guidelines

- **Format:** WebP preferred; fallback to optimized JPEG/PNG
- **Lazy Loading:** Use `loading="lazy"` for below-fold images
- **Alt Text:** Mandatory descriptive alt text for accessibility
- **Compression:** Optimize to balance quality and file size
- **Responsive:** Provide multiple sizes with srcset

**Avoid:**
- Stock photography feeling
- Over-processed or heavily filtered images
- Cold, corporate environments
- Images without proper licensing

---

## UI/UX Standards

### Spacing System (4px Base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro spacing, icon padding |
| `space-2` | 8px | Tight gaps, inline elements |
| `space-3` | 12px | Compact components |
| `space-4` | 16px | Standard element spacing |
| `space-5` | 24px | Component padding |
| `space-6` | 32px | Section separation |
| `space-7` | 48px | Large section gaps |
| `space-8` | 64px | Major section divisions |

### Border Radius

| Element | Radius |
|---------|--------|
| **Buttons** | 8px |
| **Cards** | 12px |
| **Inputs** | 6px |
| **Modals** | 16px |
| **Images** | 8px |
| **Avatars** | 50% (circle) |

### Shadows

```css
/* Subtle Elevation */
.shadow-sm {
  box-shadow: 0 1px 3px rgba(15, 61, 43, 0.08);
}

/* Standard Card Shadow */
.shadow-md {
  box-shadow: 0 4px 12px rgba(15, 61, 43, 0.1);
}

/* Elevated/Hover State */
.shadow-lg {
  box-shadow: 0 8px 24px rgba(15, 61, 43, 0.15);
}

/* Modal/Overlay Shadow */
.shadow-xl {
  box-shadow: 0 16px 48px rgba(15, 61, 43, 0.2);
}

/* Gold Glow (Special States) */
.shadow-gold {
  box-shadow: 0 0 20px rgba(191, 165, 90, 0.3);
}
```

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--color-gold-accent);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-gold-light);
  box-shadow: 0 4px 12px rgba(191, 165, 90, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-forest-green);
  border: 2px solid var(--color-forest-green);
  border-radius: 8px;
  padding: 10px 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--color-forest-green);
  color: var(--color-white);
}

/* Tertiary/Text Button */
.btn-text {
  background: transparent;
  color: var(--color-gold-accent);
  border: none;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.btn-text:hover {
  color: var(--color-gold-light);
}
```

### Form Inputs

```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-light-gray);
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: var(--color-forest-green);
  background: var(--color-white);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-gold-accent);
  box-shadow: 0 0 0 3px rgba(191, 165, 90, 0.2);
}

.input::placeholder {
  color: var(--color-gray);
}

.input-error {
  border-color: #C75050;
}

.input-success {
  border-color: var(--color-leaf-green);
}
```

### Cards

```css
.card {
  background: var(--color-white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(15, 61, 43, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(15, 61, 43, 0.15);
}

.card-featured {
  border: 2px solid var(--color-gold-accent);
}
```

---

## Motion & Animation

### Motion Principles

| Principle | Application |
|-----------|-------------|
| **Purposeful** | Motion guides attention, never distracts |
| **Organic** | Easing inspired by natural movement |
| **Subtle** | Gentle transitions that feel trustworthy |
| **Respectful** | Honor reduced-motion preferences |

### Animation Tokens

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `motion-fast` | 150ms | ease-out | Micro-interactions, hover states |
| `motion-normal` | 200ms | ease-out | Standard transitions |
| `motion-slow` | 300ms | ease-in-out | Page transitions, reveals |
| `motion-emphasis` | 400ms | cubic-bezier(0.4, 0, 0.2, 1) | Important state changes |

### CSS Animation Examples

```css
/* Fade In Up - Content Reveal */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}

/* Subtle Scale - Card Hover */
@keyframes subtleScale {
  from { transform: scale(1); }
  to { transform: scale(1.02); }
}

/* Leaf Grow - Logo Animation */
@keyframes leafGrow {
  from {
    transform: scale(0.95);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.logo:hover {
  animation: leafGrow 0.3s ease-out forwards;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Web Implementation

### Layout Grid

```css
/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Grid System */
.grid {
  display: grid;
  gap: 24px;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .grid-4,
  .grid-3,
  .grid-2 { grid-template-columns: 1fr; }

  .container { padding: 0 16px; }
}
```

### Navigation

```css
/* Sticky Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-forest-green);
  padding: 16px 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  max-width: 150px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-gold-accent);
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-logo {
    max-width: 100px;
  }
}
```

### Hero Section

```css
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-forest-green);
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 48px 24px;
  z-index: 1;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 24px;
}

.hero-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: var(--color-gold-accent);
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1rem; }
}
```

### Footer

```css
.footer {
  background: var(--color-dark-bg);
  color: var(--color-white);
  padding: 64px 0 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer-heading {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: var(--color-gold-accent);
  margin-bottom: 24px;
}

.footer-link {
  color: var(--color-white);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-gold-accent);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

### Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| **Mobile** | < 640px | Single column, stacked layout |
| **Tablet** | 640px - 1024px | Two-column grids |
| **Desktop** | 1024px - 1440px | Full layout, 12-column grid |
| **Wide** | > 1440px | Max-width 1200px, centered |

---

## Accessibility

### WCAG Compliance

Cedar Capital websites must meet WCAG 2.1 AA standards minimum.

### Color Contrast

- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text (18px+):** Minimum 3:1 contrast ratio
- **UI components:** Minimum 3:1 contrast ratio

### Interactive Elements

- **Touch targets:** Minimum 44x44px
- **Focus states:** Visible focus indicators on all interactive elements
- **Keyboard navigation:** All functionality accessible via keyboard

```css
/* Focus State */
:focus-visible {
  outline: 3px solid var(--color-gold-accent);
  outline-offset: 2px;
}

/* Skip to Content Link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  padding: 8px 16px;
  background: var(--color-gold-accent);
  color: var(--color-white);
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 16px;
}
```

### ARIA Guidelines

- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Add `aria-label` to icon-only buttons
- Include `alt` text for all images
- Use `aria-expanded` for expandable sections
- Implement `aria-live` regions for dynamic content

---

## Do's and Don'ts

### Do

- Use generous white space—let content breathe
- Maintain consistent visual hierarchy
- Use color intentionally to guide attention
- Test all designs for accessibility
- Optimize images and assets for web performance
- Follow the 60-30-10 color rule
- Use the logo with proper clear space
- Implement responsive designs mobile-first

### Don't

- Clutter the interface with excessive elements
- Use aggressive colors or high-contrast combinations
- Add decorative elements without purpose
- Stretch, distort, or modify the logo
- Use colors outside the approved palette
- Sacrifice accessibility for aesthetics
- Use low-quality or stock-looking photography
- Ignore responsive design requirements

---

## Design Tokens

Complete design token reference for implementation:

```javascript
const cedarCapitalTokens = {
  colors: {
    primary: {
      forestGreen: '#0F3D2B',
      goldAccent: '#BFA55A',
      leafGreen: '#7CB342',
    },
    background: {
      dark: '#001A0F',
      white: '#FFFFFF',
      offWhite: '#F5F5F5',
    },
    neutral: {
      gray: '#6B6B6B',
      lightGray: '#E8E8E8',
    },
    extended: {
      cedarDeep: '#1A5038',
      goldLight: '#D4B96A',
      leafBright: '#8DC653',
    },
  },
  typography: {
    families: {
      heading: '"Playfair Display", Georgia, serif',
      body: '"Roboto", -apple-system, sans-serif',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      h1: '3rem',      // 48px
      h2: '2rem',      // 32px
      h3: '1.5rem',    // 24px
      h4: '1.25rem',   // 20px
      body: '1rem',    // 16px
      bodyLg: '1.125rem', // 18px
      caption: '0.875rem', // 14px
      overline: '0.75rem', // 12px
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
    8: '64px',
  },
  radii: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(15, 61, 43, 0.08)',
    md: '0 4px 12px rgba(15, 61, 43, 0.1)',
    lg: '0 8px 24px rgba(15, 61, 43, 0.15)',
    xl: '0 16px 48px rgba(15, 61, 43, 0.2)',
    gold: '0 0 20px rgba(191, 165, 90, 0.3)',
  },
  motion: {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
    slow: '300ms ease-in-out',
    emphasis: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1440px',
  },
};

export default cedarCapitalTokens;
```

---

## Quick Reference Card

| Element | Specification |
|---------|---------------|
| **Primary Color** | Forest Green `#0F3D2B` |
| **Secondary Color** | Gold Accent `#BFA55A` |
| **Accent Color** | Light Leaf Green `#7CB342` |
| **Heading Font** | Playfair Display |
| **Body Font** | Roboto |
| **Button Radius** | 8px |
| **Card Radius** | 12px |
| **Base Spacing** | 4px |
| **Max Content Width** | 1200px |
| **Minimum Touch Target** | 44x44px |

---

*Cedar Capital: Where roots meet results. Every design decision should reinforce trust, growth, and family values.*
