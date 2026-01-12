# Design Guidelines

> Design system integration and UI/UX principles for the baseline brand template.

---

## Overview

This document defines how to integrate with design-system-v2 and apply consistent design principles across the brand application.

---

## Design Principles

### Core Principles

| Principle | Description |
|-----------|-------------|
| **Clarity** | Information hierarchy is immediately apparent |
| **Consistency** | Patterns repeat predictably |
| **Efficiency** | Minimize user effort to complete tasks |
| **Accessibility** | Usable by everyone |
| **Icon-First** | Iconography over emojis, always |

### Visual Hierarchy

```
┌─────────────────────────────────────────┐
│  PRIMARY    Large, bold, prominent      │
│  ─────────────────────────────────────  │
│  Secondary  Medium, supporting          │
│  ─────────────────────────────────────  │
│  tertiary   Small, subtle, contextual   │
└─────────────────────────────────────────┘
```

---

## Component Usage

### From design-system-v2

#### Buttons

| Variant | Usage | Example |
|---------|-------|---------|
| `primary` | Main actions | Save, Submit, Continue |
| `secondary` | Alternative actions | Cancel, Back |
| `ghost` | Subtle actions | Navigation, toggles |
| `destructive` | Dangerous actions | Delete, Remove |

```tsx
import { Button } from '@/components/ui/button';
import { Save, Trash, ChevronRight } from 'lucide-react';

// Primary with icon
<Button>
  <Save className="h-4 w-4 mr-2" />
  Save Changes
</Button>

// Ghost icon-only
<Button variant="ghost" size="icon">
  <Trash className="h-4 w-4" />
</Button>

// Secondary with trailing icon
<Button variant="secondary">
  Continue
  <ChevronRight className="h-4 w-4 ml-2" />
</Button>
```

#### Cards

| Pattern | Usage |
|---------|-------|
| Basic Card | Content containers |
| Interactive Card | Clickable items |
| Feature Card | Highlighted content |

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <h3 className="text-lg font-semibold">Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Inputs

| Type | Usage |
|------|-------|
| Text | Single-line input |
| Textarea | Multi-line input |
| Select | Option selection |
| Checkbox | Boolean toggle |

```tsx
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// With icon
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
  <Input className="pl-10" placeholder="Search..." />
</div>
```

---

## Layout Patterns

### Page Layout

```tsx
// Standard page structure
<main className="min-h-screen bg-background">
  <Header />
  <div className="container mx-auto px-4 py-8">
    {/* Page content */}
  </div>
  <Footer />
</main>
```

### Grid System

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

### Container Widths

| Size | Max Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Narrow content |
| `md` | 768px | Medium content |
| `lg` | 1024px | Standard pages |
| `xl` | 1280px | Wide layouts |
| `2xl` | 1536px | Full-width |

---

## Icon System

### Icon Library

**Primary:** Lucide React

```tsx
import {
  Home,
  Settings,
  User,
  Bell,
  Search,
  Menu,
  X,
  Check,
  AlertTriangle,
  Info,
} from 'lucide-react';
```

### Icon Sizes

| Context | Size | Class |
|---------|------|-------|
| Inline text | 16px | `h-4 w-4` |
| Buttons | 16-20px | `h-4 w-4` or `h-5 w-5` |
| Navigation | 20-24px | `h-5 w-5` or `h-6 w-6` |
| Headers | 24-32px | `h-6 w-6` or `h-8 w-8` |
| Empty states | 48px+ | `h-12 w-12` |

### Icon Colors

```tsx
// Semantic colors
<Check className="h-4 w-4 text-success" />
<AlertTriangle className="h-4 w-4 text-warning" />
<X className="h-4 w-4 text-error" />
<Info className="h-4 w-4 text-info" />

// Neutral colors
<Settings className="h-4 w-4 text-muted" />
<User className="h-4 w-4 text-foreground" />
```

---

## Color Application

### Background Colors

| Token | Usage |
|-------|-------|
| `bg-background` | Page background |
| `bg-card` | Card surfaces |
| `bg-muted` | Subtle backgrounds |
| `bg-primary` | Primary actions |
| `bg-secondary` | Secondary elements |

### Text Colors

| Token | Usage |
|-------|-------|
| `text-foreground` | Primary text |
| `text-muted` | Secondary text |
| `text-primary` | Emphasis, links |
| `text-success` | Success messages |
| `text-warning` | Warnings |
| `text-error` | Errors |

### Border Colors

| Token | Usage |
|-------|-------|
| `border-border` | Default borders |
| `border-muted` | Subtle borders |
| `border-primary` | Focus states |

---

## Typography

### Headings

```tsx
<h1 className="text-4xl font-bold">Page Title</h1>
<h2 className="text-3xl font-semibold">Section</h2>
<h3 className="text-2xl font-semibold">Subsection</h3>
<h4 className="text-xl font-medium">Card Title</h4>
```

### Body Text

```tsx
<p className="text-base">Standard body text.</p>
<p className="text-sm text-muted">Secondary text.</p>
<p className="text-xs text-muted">Caption text.</p>
```

### Font Weights

| Weight | Class | Usage |
|--------|-------|-------|
| 400 | `font-normal` | Body text |
| 500 | `font-medium` | Labels, emphasis |
| 600 | `font-semibold` | Headings |
| 700 | `font-bold` | Strong emphasis |

---

## Spacing

### Spacing Scale

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

### Common Patterns

```tsx
// Card padding
<div className="p-4 md:p-6">

// Stack spacing
<div className="space-y-4">

// Grid gaps
<div className="grid gap-4 md:gap-6">

// Section margins
<section className="my-12 md:my-16">
```

---

## Interactive States

### Focus States

```css
/* Default focus ring */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
}
```

### Hover States

```tsx
// Button hover
<button className="hover:bg-primary/90">

// Card hover
<div className="hover:border-primary transition-colors">

// Link hover
<a className="hover:text-primary hover:underline">
```

### Disabled States

```tsx
<button disabled className="opacity-50 cursor-not-allowed">
<input disabled className="bg-muted cursor-not-allowed">
```

---

## Responsive Design

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Approach

```tsx
// Stack on mobile, row on tablet+
<div className="flex flex-col md:flex-row gap-4">

// Full width on mobile, constrained on larger
<div className="w-full md:w-1/2 lg:w-1/3">

// Hidden on mobile
<div className="hidden md:block">
```

---

## Dark Mode

### Implementation

```tsx
// Root layout with dark mode class
<html className={theme === 'dark' ? 'dark' : ''}>
  <body className="bg-background text-foreground">
```

### Color Variables

```css
:root {
  --background: 255 255 255;
  --foreground: 23 23 23;
}

.dark {
  --background: 10 10 10;
  --foreground: 250 250 250;
}
```

### Theme Toggle

```tsx
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
```

---

## Accessibility

### Requirements

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | 4.5:1 minimum for text |
| Focus indicators | Visible focus rings |
| Keyboard navigation | All interactive elements |
| Screen readers | ARIA labels on icons |
| Touch targets | 44x44px minimum |

### ARIA Labels

```tsx
// Icon-only buttons
<button aria-label="Open settings">
  <Settings className="h-5 w-5" />
</button>

// Decorative icons
<span aria-hidden="true">
  <Calendar className="h-4 w-4" />
</span>
```

---

## Prohibited Patterns

| Avoid | Use Instead |
|-------|-------------|
| Emojis in UI | Lucide icons |
| Inline styles | Tailwind utilities |
| Magic numbers | Spacing tokens |
| Hardcoded colors | Color tokens |
| Fixed font sizes | Typography scale |

---

*Design Guidelines Version: 1.0.0*
