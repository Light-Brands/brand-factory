# UI Component Library - Complete Catalog

**Version**: 1.0.0  
**Last Updated**: December 16, 2025

---

## Overview

Complete catalog of all UI components in VIBEUP following design system guidelines.

**Brand Identity Integration**: All components implement the [VIBEUP brand identity system](../brand/01-visual-identity.md) with consistent colors, typography, spacing, and interaction patterns. See [brand-identity-integration.md](brand-identity-integration.md#design-system-integration) for complete integration guidelines.

---

## Brand Design System

### Color Palette

```typescript
// tailwind.config.ts
const colors = {
  'vibe-deep-blue': '#002B7F',      // Primary brand color
  'vibe-white': '#F7F9FC',          // Background
  'vibe-graphite': '#0A0C10',       // Primary text
  'vibe-sky-blue': '#5BB8FF',       // Interactive elements
  'vibe-soft-aqua': '#A7E6FF',      // Mira glow
  'vibe-midnight': '#001A47',       // Premium moments
  'vibe-light-grey': '#E6E9EF',     // UI neutral
  'vibe-cool-grey': '#C7CEDA',      // Borders
}
```

### Typography Standards

```typescript
// Font family
fontFamily: {
  sans: ['Söhne', 'Inter', 'SF Pro', 'system-ui', 'sans-serif'],
}

// Type scale
fontSize: {
  'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '0.02em' }],
  'h2': ['1.875rem', { lineHeight: '1.3', fontWeight: '500' }],
  'body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
  'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '300', letterSpacing: '0.01em' }],
}
```

### Border Radius Standards

```typescript
borderRadius: {
  'card': '16px',
  'button': '12px',
  'modal': '20px',
  'full': '9999px',  // Avatars
}
```

### Shadow Standards

```typescript
boxShadow: {
  'elevation': '0 2px 8px rgba(0, 43, 127, 0.08)',      // Cards, elevated content
  'mira-glow': '0 0 24px rgba(91, 184, 255, 0.2)',     // Mira elements
  'deep': '0 8px 24px rgba(0, 43, 127, 0.12)',         // Modals, overlays
}
```

### Button Hierarchy

**Primary Button**:
- Background: `vibe-deep-blue` (#002B7F)
- Text: White
- Border radius: 12px
- Hover: Slightly brighter
- Usage: Main actions (Begin Practice, Send Message)

**Secondary Button**:
- Border: `vibe-deep-blue` (2px)
- Text: `vibe-deep-blue`
- Background: Transparent
- Hover: Subtle background
- Usage: Alternative actions (Learn More, Cancel)

**Tertiary Button**:
- Text: `vibe-deep-blue`
- Background: None
- Underline on hover
- Usage: Low-priority actions (Skip, Dismiss)

### Mira-Specific Styling

**Mira Message Components**:
- Background: Gradient from `vibe-deep-blue` to `vibe-sky-blue`
- Text: White
- Border radius: 16px
- Shadow: `mira-glow`
- Icon/Avatar: Soft aqua glow effect

**Mira Suggestions**:
- Background: `vibe-soft-aqua` at 10% opacity
- Border: 1px `vibe-sky-blue`
- Border radius: 12px
- Hover: Slight glow increase

---

## Component Organization

```
components/
├── ui/                           # Base components (shadcn/ui)
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Switch.tsx
│   └── [30+ base components]
│
├── mira/                         # Mira-specific
│   ├── MiraGreeting.tsx
│   ├── MiraSuggestions.tsx
│   └── MiraChat.tsx
│
├── profile/                      # Profile components
│   ├── ProfileHeader.tsx
│   ├── ProfileTabs.tsx
│   ├── AboutTab.tsx
│   ├── ChemistryTab.tsx
│   └── EditProfile.tsx
│
├── practices/                    # Practice components
│   ├── TodayPage.tsx
│   ├── PracticeCard.tsx
│   ├── CalendarView.tsx
│   └── ConfigurePractice.tsx
│
├── discovery/                    # Discovery components
│   ├── DiscoveryFeed.tsx
│   ├── UserProfileCard.tsx
│   ├── SearchModal.tsx
│   └── MapView.tsx
│
├── messaging/                    # Messaging components
│   ├── ConversationList.tsx
│   ├── MessageThread.tsx
│   └── MessageInput.tsx
│
├── impact/                       # Impact components
│   ├── ImpactPage.tsx
│   ├── ImpactItemCard.tsx
│   └── VotingInterface.tsx
│
├── business/                     # Business components
│   ├── BusinessProfile.tsx
│   └── BusinessCard.tsx
│
├── community/                    # Community components
│   ├── CommunityProfile.tsx
│   ├── VibesFeed.tsx
│   └── MemberDirectory.tsx
│
└── shared/                       # Shared across epics
    ├── AppHeader.tsx
    ├── BottomNav.tsx
    ├── LoadingSpinner.tsx
    └── EmptyState.tsx
```

---

## Key Component Patterns

### Mobile-First Responsive

All components designed for <640px first, then enhanced for larger screens. Touch targets minimum 44×44px. Bottom-sheet modals on mobile.

### Animation Standards

```typescript
// Entry animations (list items)
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.05 }}

// Hover effects
whileHover={{ y: -2 }}
whileTap={{ scale: 0.95 }}

// Modal entry (bottom sheet on mobile)
initial={{ y: '100%' }}
animate={{ y: 0 }}
exit={{ y: '100%' }}
```

### Type Safety

All components have explicit TypeScript interfaces with JSDoc comments. No `any` types allowed.

---

**Related**: [`GUIDELINES.md`](GUIDELINES.md), [`templates/`](templates/)

