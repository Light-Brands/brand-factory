# Love Token Image Placement Guide

> **Purpose**: A comprehensive guide for placing generated images throughout the Love Token website. Each placeholder has a unique `promptId` that corresponds to prompts in `image-prompts.md`.

---

## Quick Reference

| Prompt ID | Page | Location | Size | Format |
|-----------|------|----------|------|--------|
| `hero-meditation-circle` | Homepage | Hero section (right) | 1:1 square | PNG/WebP |
| `pillar-grounded-love` | Homepage | Philosophy section | 128x128 | PNG/SVG |
| `pillar-spiritual-love` | Homepage | Philosophy section | 128x128 | PNG/SVG |
| `pillar-living-love` | Homepage | Philosophy section | 128x128 | PNG/SVG |
| `role-love-farmer` | Homepage | Roles section | 96x96 circle | PNG |
| `role-donor` | Homepage | Roles section | 96x96 circle | PNG |
| `role-vendor` | Homepage | Roles section | 96x96 circle | PNG |
| `hero-love-flow-river` | How It Works | Hero section (right) | 1:1 square | PNG/WebP |
| `flow-step-1-donors` | How It Works | Flow cards | 16:9 wide | PNG/SVG |
| `flow-step-2-meditate` | How It Works | Flow cards | 16:9 wide | PNG/SVG |
| `flow-step-3-credits` | How It Works | Flow cards | 16:9 wide | PNG/SVG |
| `flow-step-4-spend` | How It Works | Flow cards | 16:9 wide | PNG/SVG |
| `flow-step-5-redeem` | How It Works | Flow cards | 16:9 wide | PNG/SVG |
| `flow-step-6-circulates` | How It Works | Flow cards | 16:9 wide | PNG/SVG |
| `hero-community-gathering` | About | Hero section (right) | 1:1 square | PNG/WebP |
| `mission-intergenerational` | About | Mission section | 16:9 wide | PNG/WebP |
| `meditation-bg-abstract` | Meditate | Full page background | full | PNG/WebP |
| `celebration-meditation-complete` | Meditate | Completion state | 1:1 circle | PNG |

---

## Detailed Placement Instructions

### Homepage (`/app/page.tsx`)

#### 1. Hero Image
- **Prompt ID**: `hero-meditation-circle`
- **Location**: Right side of hero section (desktop only, hidden on mobile)
- **Current**: `ImagePlaceholder` component
- **Replace with**: Next.js `<Image>` component
- **Recommended size**: 600x600px (@2x: 1200x1200px)
- **Format**: WebP with PNG fallback
- **Treatment**: Rounded corners (16px), subtle shadow

```tsx
// Replace ImagePlaceholder with:
import Image from 'next/image';

<Image
  src="/images/hero-meditation-circle.webp"
  alt="A diverse community sitting in peaceful meditation outdoors at golden hour"
  width={600}
  height={600}
  className="rounded-card shadow-warm-glow"
  priority
/>
```

#### 2. Three Pillars Images
- **Prompt IDs**: `pillar-grounded-love`, `pillar-spiritual-love`, `pillar-living-love`
- **Location**: Inside each pillar card, replacing icon circles
- **Current**: 128x128px `ImagePlaceholder` components
- **Replace with**: Custom illustrations or photographs
- **Recommended size**: 128x128px (@2x: 256x256px)
- **Format**: PNG with transparency or SVG for illustrations

```tsx
// Replace ImagePlaceholder with:
<Image
  src={`/images/${pillar.imagePromptId}.png`}
  alt={pillar.imageDescription}
  width={128}
  height={128}
  className="rounded-love"
/>
```

#### 3. Role Images
- **Prompt IDs**: `role-love-farmer`, `role-donor`, `role-vendor`
- **Location**: Inside each role card in the "Join the Love Economy" section
- **Current**: 96x96px circular `ImagePlaceholder` components
- **Replace with**: Portrait photographs (circular crop)
- **Recommended size**: 96x96px (@2x: 192x192px)
- **Format**: WebP with PNG fallback
- **Treatment**: Circular crop, warm color filter

```tsx
// Replace ImagePlaceholder with:
<Image
  src={`/images/${role.imagePromptId}.webp`}
  alt={role.imageDescription}
  width={96}
  height={96}
  className="rounded-full object-cover"
/>
```

---

### How It Works Page (`/app/how-it-works/page.tsx`)

#### 1. Hero Image
- **Prompt ID**: `hero-love-flow-river`
- **Location**: Right side of hero section
- **Current**: `ImagePlaceholder` component
- **Replace with**: Next.js `<Image>` component
- **Recommended size**: 600x600px
- **Format**: WebP with PNG fallback
- **Style**: Painterly/watercolor illustration of flowing river

#### 2. Flow Step Images
- **Prompt IDs**: `flow-step-1-donors` through `flow-step-6-circulates`
- **Location**: Inside each flow step card
- **Current**: Wide aspect ratio `ImagePlaceholder` components
- **Replace with**: Step-specific illustrations
- **Recommended size**: 280x120px (@2x: 560x240px)
- **Format**: SVG preferred, PNG acceptable
- **Style**: Consistent icon/illustration style across all 6 steps

```tsx
// Replace ImagePlaceholder with:
<Image
  src={`/images/${item.imagePromptId}.svg`}
  alt={item.imageDescription}
  width={280}
  height={120}
  className="rounded-love"
/>
```

---

### About Page (`/app/about/page.tsx`)

#### 1. Hero Image
- **Prompt ID**: `hero-community-gathering`
- **Location**: Right side of hero section
- **Current**: `ImagePlaceholder` component
- **Replace with**: Next.js `<Image>` component
- **Recommended size**: 600x600px
- **Format**: WebP with PNG fallback
- **Style**: Documentary photography, warm color grading

#### 2. Mission Section Image
- **Prompt ID**: `mission-intergenerational`
- **Location**: Above the Lumi component in mission section
- **Current**: Wide aspect ratio `ImagePlaceholder` component
- **Replace with**: Next.js `<Image>` component
- **Recommended size**: 448x252px (@2x: 896x504px)
- **Format**: WebP with PNG fallback
- **Style**: Documentary photography, warm and intimate

```tsx
// Replace ImagePlaceholder with:
<Image
  src="/images/mission-intergenerational.webp"
  alt="An elder and young person sharing a meaningful moment together"
  width={448}
  height={252}
  className="rounded-card shadow-gentle"
/>
```

---

### Meditate Page (`/app/meditate/page.tsx`)

#### 1. Background Image
- **Prompt ID**: `meditation-bg-abstract`
- **Location**: Full page background (behind all content)
- **Current**: `ImagePlaceholder` in absolute positioned div with 10% opacity
- **Replace with**: CSS background-image or Next.js Image with fill
- **Recommended size**: 1920x1080px minimum
- **Format**: WebP with PNG fallback
- **Treatment**: 10-20% opacity, object-fit: cover

```tsx
// Replace ImagePlaceholder with CSS background:
<div
  className="absolute inset-0 opacity-10 bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/meditation-bg-abstract.webp)' }}
/>
```

#### 2. Celebration Image
- **Prompt ID**: `celebration-meditation-complete`
- **Location**: Completion state, center of screen
- **Current**: Circular `ImagePlaceholder` component
- **Replace with**: Animated celebration illustration
- **Recommended size**: 256x256px
- **Format**: PNG with transparency, or animated SVG/Lottie
- **Treatment**: Consider adding gentle animation (breathing/pulsing)

```tsx
// Replace ImagePlaceholder with:
<Image
  src="/images/celebration-meditation-complete.png"
  alt="Meditation completion celebration"
  width={128}
  height={128}
  className="rounded-full"
/>
```

---

## Image File Organization

```
/brands/love-token/app/public/images/
├── heroes/
│   ├── hero-meditation-circle.webp
│   ├── hero-love-flow-river.webp
│   └── hero-community-gathering.webp
├── pillars/
│   ├── pillar-grounded-love.png
│   ├── pillar-spiritual-love.png
│   └── pillar-living-love.png
├── roles/
│   ├── role-love-farmer.webp
│   ├── role-donor.webp
│   └── role-vendor.webp
├── flow-steps/
│   ├── flow-step-1-donors.svg
│   ├── flow-step-2-meditate.svg
│   ├── flow-step-3-credits.svg
│   ├── flow-step-4-spend.svg
│   ├── flow-step-5-redeem.svg
│   └── flow-step-6-circulates.svg
├── backgrounds/
│   └── meditation-bg-abstract.webp
├── celebrations/
│   └── celebration-meditation-complete.png
└── misc/
    └── mission-intergenerational.webp
```

---

## Image Generation Workflow

### Step 1: Generate Images
Use the prompts from `image-prompts.md` with your preferred AI image generation tool:
- Midjourney (recommended for photography)
- DALL-E 3 (good for illustrations)
- Stable Diffusion (flexible, local option)

### Step 2: Post-Processing
1. **Resize** to recommended dimensions
2. **Apply warm color filter** (+8-12% orange/warm tones)
3. **Add rounded corners** where specified
4. **Export** in WebP format (PNG fallback for transparency)
5. **Optimize** file size (use tools like ImageOptim, Squoosh)

### Step 3: Place Images
1. Add images to `/public/images/` directory
2. Replace `ImagePlaceholder` components with `next/image` `<Image>` components
3. Update alt text to match accessibility requirements
4. Test responsive behavior

### Step 4: Remove Placeholders
Once all images are in place:
1. Remove unused `ImagePlaceholder` imports
2. Delete placeholder components if no longer needed
3. Update this guide to mark images as complete

---

## Accessibility Requirements

All images must have:
- Meaningful `alt` text describing the image content
- `aria-hidden="true"` for purely decorative images
- Sufficient color contrast for any overlaid text
- Reduced motion alternatives for animated images

---

## Performance Considerations

- Use WebP format for photographs (30-50% smaller than JPEG)
- Use SVG for icons and simple illustrations
- Implement lazy loading for below-fold images
- Use `priority` prop for above-fold hero images
- Provide multiple sizes with `srcSet` for responsive images

---

## Brand Compliance Checklist

Before finalizing any image, verify:

- [ ] Warm color temperature present (not cold/blue)
- [ ] Dignity preserved (no pity framing)
- [ ] Natural/documentary feel (not stock photo aesthetic)
- [ ] Earth tones dominant (heart-rose, earth-clay, sunlit-gold)
- [ ] Authentic subjects (real or realistic, not perfect/posed)
- [ ] Grounded spirituality (earth-connected, not ethereal)
- [ ] Would pass the "wise grandmother" test

---

*Reference: See `image-prompts.md` for complete AI generation prompts*
*Last updated: January 2026*
