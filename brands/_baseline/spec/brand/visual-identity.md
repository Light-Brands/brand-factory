# Baseline Visual Identity

> Icon-first design principles for professional, consistent brand applications.

---

## Design Philosophy

### Core Principle: Icons Over Emojis

This template enforces a strict icon-first visual language:

| Always Use | Never Use |
|------------|-----------|
| SVG icons | Emojis |
| Infographics | Emoticons |
| Line illustrations | Unicode symbols (decorative) |
| Symbolic iconography | Animated emoji |
| Data visualizations | Sticker-style graphics |

### Rationale

| Benefit | Description |
|---------|-------------|
| **Scalability** | Icons render crisply at any size |
| **Themability** | Icons adapt to brand colors |
| **Accessibility** | Icons support ARIA labels |
| **Professionalism** | Appropriate for all contexts |
| **Consistency** | Uniform style across platforms |
| **Performance** | SVGs are lightweight and cacheable |

---

## Icon System

### Primary Icon Library

**Lucide React** is the default icon library.

```typescript
// Installation
pnpm add lucide-react

// Usage
import { Home, Settings, User, Search } from 'lucide-react';

// In components
<Home className="h-5 w-5 text-primary" />
<Settings className="h-5 w-5 text-muted" />
```

### Icon Categories

| Category | Examples | Usage |
|----------|----------|-------|
| **Navigation** | Home, Menu, ChevronLeft, ChevronRight | Page navigation, menus |
| **Actions** | Plus, Minus, Edit, Trash, Download | User interactions |
| **Status** | Check, X, AlertTriangle, Info | Feedback, alerts |
| **Objects** | File, Folder, Image, Calendar | Content types |
| **Communication** | Mail, MessageSquare, Bell, Send | Messaging, notifications |
| **Media** | Play, Pause, Volume, Camera | Media controls |
| **Social** | Share, Heart, Star, ThumbsUp | Social interactions |

### Icon Sizing Scale

| Size | Pixels | Tailwind | Usage |
|------|--------|----------|-------|
| xs | 12px | `h-3 w-3` | Inline text indicators |
| sm | 16px | `h-4 w-4` | Button icons, list markers |
| md | 20px | `h-5 w-5` | Default size, navigation |
| lg | 24px | `h-6 w-6` | Feature icons, headers |
| xl | 32px | `h-8 w-8` | Hero sections, empty states |
| 2xl | 48px | `h-12 w-12` | Landing pages, highlights |

### Icon Styling

```typescript
// Color variants
<Icon className="text-primary" />      // Primary brand color
<Icon className="text-secondary" />    // Secondary color
<Icon className="text-muted" />        // Muted/disabled
<Icon className="text-success" />      // Success state
<Icon className="text-warning" />      // Warning state
<Icon className="text-error" />        // Error state

// Stroke weight
<Icon strokeWidth={1} />               // Light
<Icon strokeWidth={1.5} />             // Default
<Icon strokeWidth={2} />               // Medium
<Icon strokeWidth={2.5} />             // Bold
```

---

## Color System

### Baseline Palette

Inherited from design-system-v2 tokens. Override as needed.

| Token | Default | Usage |
|-------|---------|-------|
| `primary` | `{{PRIMARY_COLOR}}` | Primary actions, links |
| `secondary` | `{{SECONDARY_COLOR}}` | Secondary elements |
| `background` | `#FFFFFF` / `#0A0A0A` | Page background |
| `foreground` | `#171717` / `#FAFAFA` | Primary text |
| `muted` | `#737373` | Secondary text |
| `border` | `#E5E5E5` / `#262626` | Borders, dividers |

### Semantic Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `success` | `#22C55E` | `#4ADE80` | Success states |
| `warning` | `#F59E0B` | `#FBBF24` | Warning states |
| `error` | `#EF4444` | `#F87171` | Error states |
| `info` | `#3B82F6` | `#60A5FA` | Information |

### Color Application

```css
/* Icon colors match semantic meaning */
.icon-success { @apply text-success; }
.icon-warning { @apply text-warning; }
.icon-error { @apply text-error; }
.icon-info { @apply text-info; }
```

---

## Typography

### Font Stack

```typescript
// tokens/typography.ts
export const fontFamily = {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
};
```

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| `display` | 48px | 1.1 | 700 | Hero headlines |
| `h1` | 36px | 1.2 | 700 | Page titles |
| `h2` | 30px | 1.25 | 600 | Section headers |
| `h3` | 24px | 1.3 | 600 | Subsections |
| `h4` | 20px | 1.35 | 600 | Card headers |
| `body` | 16px | 1.5 | 400 | Body text |
| `small` | 14px | 1.5 | 400 | Secondary text |
| `caption` | 12px | 1.4 | 400 | Captions, labels |

---

## Spacing System

### Scale

Based on 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | Tight spacing |
| `2` | 8px | Compact elements |
| `3` | 12px | Default gap |
| `4` | 16px | Standard spacing |
| `6` | 24px | Section gaps |
| `8` | 32px | Large spacing |
| `12` | 48px | Section margins |
| `16` | 64px | Page sections |

---

## Infographic Components

### Data Visualization

For charts and data visualization, use icon-based infographics:

| Type | Implementation | Use Case |
|------|----------------|----------|
| **Progress** | Linear bar with icon | Completion status |
| **Statistics** | Icon + number | Metrics display |
| **Comparison** | Icon grid | Feature comparison |
| **Timeline** | Icon markers | Process flow |
| **Categories** | Icon labels | Grouping |

### Example: Stat Card

```tsx
import { TrendingUp, Users, Activity } from 'lucide-react';

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center gap-2 text-muted mb-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
```

---

## Component Patterns

### Buttons with Icons

```tsx
// Icon-only button
<Button variant="ghost" size="icon">
  <Settings className="h-5 w-5" />
</Button>

// Icon + label
<Button>
  <Plus className="h-4 w-4 mr-2" />
  Add Item
</Button>

// Label + icon
<Button>
  Continue
  <ChevronRight className="h-4 w-4 ml-2" />
</Button>
```

### Status Indicators

```tsx
// Success
<div className="flex items-center gap-2 text-success">
  <CheckCircle className="h-4 w-4" />
  <span>Completed</span>
</div>

// Warning
<div className="flex items-center gap-2 text-warning">
  <AlertTriangle className="h-4 w-4" />
  <span>Attention needed</span>
</div>

// Error
<div className="flex items-center gap-2 text-error">
  <XCircle className="h-4 w-4" />
  <span>Failed</span>
</div>
```

### Empty States

```tsx
function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <Icon className="h-12 w-12 text-muted mb-4" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted max-w-sm">{description}</p>
    </div>
  );
}

// Usage
<EmptyState
  icon={Inbox}
  title="No messages"
  description="Your inbox is empty. Messages will appear here."
/>
```

---

## Accessibility

### Icon Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Screen Readers** | Add `aria-label` for icon-only elements |
| **Focus States** | Visible focus rings on interactive icons |
| **Color Contrast** | 4.5:1 minimum for icon colors |
| **Touch Targets** | 44x44px minimum for interactive icons |

```tsx
// Icon-only button (accessible)
<button aria-label="Open settings">
  <Settings className="h-5 w-5" />
</button>

// Decorative icon (hidden from screen readers)
<div>
  <Calendar className="h-4 w-4" aria-hidden="true" />
  <span>December 1, 2024</span>
</div>
```

---

## Brand Customization

### Override Checklist

When customizing this baseline:

- [ ] Define primary and secondary colors
- [ ] Select brand typography
- [ ] Choose icon weight preference
- [ ] Create custom icons if needed
- [ ] Define illustration style
- [ ] Configure dark mode palette

### Custom Icon Guidelines

If creating brand-specific icons:

| Guideline | Specification |
|-----------|---------------|
| Format | SVG |
| Viewbox | 24x24 |
| Stroke Width | 1.5-2px |
| Corners | Rounded (2px radius) |
| Style | Outline/line art |
| Colors | currentColor |

---

*Visual Identity Version: 1.0.0*
