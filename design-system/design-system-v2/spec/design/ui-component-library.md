# UI Component Library - Complete Catalog

**Version**: 2.0.0  
**Last Updated**: December 19, 2025

> **Note**: Updated to reference the Onyx Design System components and dark mode palette.

---

## Overview

Complete catalog of all UI components in VIBEUP following the Onyx Design System guidelines.

**Implementation Reference**: All components are implemented in `design-system-v2/components/`. Import from the component library:

```typescript
import { Button, Card, Avatar, Input } from '../components';
```

**Design Tokens**: Colors, typography, spacing, and shadows are defined in `design-system-v2/tokens/`.

---

## Component Mapping Table

Cross-reference between spec components and Onyx implementations:

| Spec Component | Onyx Implementation | File |
|----------------|---------------------|------|
| **Core UI** | | |
| Button | `Button` | `components/Button.tsx` |
| Card | `Card` | `components/Card.tsx` |
| Input | `Input` | `components/Input.tsx` |
| Textarea | `Textarea` | `components/Textarea.tsx` |
| Avatar | `Avatar` | `components/Avatar.tsx` |
| Tag/Badge | `Tag` | `components/Tag.tsx` |
| Tabs | `Tabs` | `components/Tabs.tsx` |
| Toggle/Switch | `Toggle` | `components/Toggle.tsx` |
| Dropdown | `Dropdown` | `components/Dropdown.tsx` |
| Tooltip | `Tooltip` | `components/Tooltip.tsx` |
| Modal | `Modal` | `components/Modal.tsx` |
| Accordion | `AccordionItem` | `components/Accordion.tsx` |
| Skeleton | `Skeleton` | `components/Skeleton.tsx` |
| Loading Spinner | `LoadingSpinner` | `components/LoadingSpinner.tsx` |
| Empty State | `EmptyState` | `components/EmptyState.tsx` |
| **Mira AI** | | |
| Mira Greeting | `MiraGuide` | `components/MiraGuide.tsx` |
| Mira Intelligence | `MiraIntelligence` | `components/MiraIntelligence.tsx` |
| Mira Interaction | `MiraInteraction` | `components/MiraInteraction.tsx` |
| Chat Bubble | `ChatBubble` | `components/ChatBubble.tsx` |
| **Profile** | | |
| Profile Header | `ProfileHeader` | `components/ProfileHeader.tsx` |
| Profile Card | `ProfileCard` | `components/ProfilePageComponents.tsx` |
| Profile Stats | `ProfileStats` | `components/ProfilePageComponents.tsx` |
| Profile Section | `ProfileSection` | `components/ProfilePageComponents.tsx` |
| Attribute Pill | `AttributePill` | `components/ProfilePageComponents.tsx` |
| Profile Editing | `ProfileEditingInterface` | `components/ProfileComponents.tsx` |
| **Practices** | | |
| Practice Card | `PracticeCard` | `components/PracticesPageComponents.tsx` |
| Streak Display | `StreakDisplay` | `components/PracticesPageComponents.tsx` |
| Practice Timer | `PracticeTimerDisplay` | `components/PracticesPageComponents.tsx` |
| Weekly Calendar | `WeeklyCalendar` | `components/PracticesPageComponents.tsx` |
| Practice Dashboard | `RefinedPracticesDashboard` | `components/PracticesPageComponents.tsx` |
| **Discovery** | | |
| Search Bar | `SearchBar` | `components/DiscoverPageComponents.tsx` |
| Recommendation Card | `RecommendationCard` | `components/DiscoverPageComponents.tsx` |
| Filter Chip | `FilterChip` | `components/DiscoverPageComponents.tsx` |
| Match Score Badge | `MatchScoreBadge` | `components/DiscoverPageComponents.tsx` |
| **Messages** | | |
| Conversation List | `ConversationListItem` | `components/MessagesPageComponents.tsx` |
| Message Bubble | `MessageBubble` | `components/MessagesPageComponents.tsx` |
| Message Input | `MessageInput` | `components/MessagesPageComponents.tsx` |
| Typing Indicator | `TypingIndicator` | `components/MessagesPageComponents.tsx` |
| **Business** | | |
| Listing Card | `ListingCard` | `components/BusinessComponents.tsx` |
| Verification Badge | `VerificationBadge` | `components/BusinessComponents.tsx` |
| Business Profile Editor | `BusinessProfileEditor` | `components/BusinessComponents.tsx` |
| **Community** | | |
| Community Header | `CommunityHeader` | `components/CommunityComponents.tsx` |
| Community Card | `CommunityPostCard` | `components/CommunityComponents.tsx` |
| Community Tabs | `CommunityTabs` | `components/CommunityComponents.tsx` |
| **Layout** | | |
| App Header | `AppHeader` | `components/LayoutComponents.tsx` |
| Bottom Nav | `ConditionalIslandNavigation` | `components/IslandNavigation.tsx` |
| Feature Sidebar | `FeatureNavigationSidebar` | `components/FeatureNavigationSidebar.tsx` |

---

## Onyx Design System Colors

```typescript
// Import from tokens
import { colors } from '../tokens';

// Background Scale (Abyss)
colors['abyss-base']     // #0D0D0D - Primary background
colors['abyss-mystic']   // #121212 - Card backgrounds
colors['abyss-light']    // #1A1A1A - Hover states
colors['abyss-lighter']  // #2A2A2A - Borders

// Text Scale (Moonlight)
colors['moonlight']       // #F5F5F5 - Primary text
colors['moonlight-soft']  // #E0E0E0 - Secondary text
colors['moonlight-muted'] // #A0A0A0 - Tertiary text

// Accent Colors
colors['aqua-light']   // #97D9C4 - Primary accent
colors['aqua-medium']  // #7BC4B1 - Secondary accent
colors['teal-light']   // #5BB8B0 - Interactive
colors['gold-accent']  // #D4AF37 - Premium
```

---

## Typography Standards

```typescript
// Font family
fontFamily: {
  sans: ['Inter', 'SF Pro', 'system-ui', 'sans-serif'],
}

// Type scale
fontSize: {
  'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '900', letterSpacing: '0.02em' }],
  'h2': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
  'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
  'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0.01em' }],
}
```

---

## Border Radius Standards

```typescript
borderRadius: {
  'card': '16px',      // rounded-2xl
  'button': '24px',    // rounded-vibe-btn
  'modal': '24px',     // rounded-3xl
  'full': '9999px',    // Avatars - rounded-full
}
```

---

## Shadow Standards

```typescript
boxShadow: {
  'elevation': '0 2px 8px rgba(0, 0, 0, 0.3)',           // Cards
  'mira-glow': '0 0 24px rgba(151, 217, 196, 0.2)',      // Mira elements
  'aqua-glow': '0 0 20px rgba(151, 217, 196, 0.15)',     // Accent glow
  'deep': '0 10px 25px rgba(0, 0, 0, 0.4)',              // Modals
}
```

---

## Button Hierarchy

**Primary Button**:
- Background: `aqua-light` (#97D9C4)
- Text: `abyss-base` (#0D0D0D)
- Border radius: 24px
- Hover: `aqua-medium` (#7BC4B1)
- Usage: Main actions (Begin Practice, Send Message)

**Secondary Button**:
- Background: `gold-accent` (#D4AF37)
- Text: `abyss-base` (#0D0D0D)
- Border radius: 24px
- Hover: Slightly brighter
- Usage: Premium actions

**Ghost Button**:
- Border: `abyss-light` (#1A1A1A)
- Text: `aqua-light` (#97D9C4)
- Background: Transparent
- Hover: `abyss-light` background
- Usage: Alternative actions (Cancel, Learn More)

**Danger Button**:
- Background: `error` (#EF5350)
- Text: White
- Usage: Destructive actions (Delete, Remove)

---

## Mira-Specific Styling

**Mira Message Components**:
- Background: Gradient from `abyss-mystic` to `aqua-light`
- Text: `moonlight` (#F5F5F5)
- Border radius: 16px
- Shadow: `mira-glow`
- Icon/Avatar: Aqua glow effect with `animate-neural` class

**Mira Suggestions**:
- Background: `aqua-light` at 10% opacity
- Border: 1px `abyss-lighter`
- Border radius: 16px
- Hover: Increased glow

---

## Component Organization

```
design-system-v2/components/
├── Button.tsx                    # Core button component
├── Card.tsx                      # Base card component
├── Input.tsx                     # Text input
├── Textarea.tsx                  # Multi-line input
├── Avatar.tsx                    # User avatars
├── Tag.tsx                       # Tags/badges
├── Tabs.tsx                      # Tab navigation
├── Toggle.tsx                    # Toggle switches
├── Dropdown.tsx                  # Dropdown menus
├── Tooltip.tsx                   # Tooltips
├── Modal.tsx                     # Modal dialogs
├── Accordion.tsx                 # Collapsible sections
├── Skeleton.tsx                  # Loading skeletons
├── LoadingSpinner.tsx            # Spinners
├── EmptyState.tsx                # Empty states
├── MiraGuide.tsx                 # Mira greeting
├── MiraIntelligence.tsx          # Mira AI interface
├── MiraInteraction.tsx           # Mira chat interaction
├── ChatBubble.tsx                # Chat message bubbles
├── ProfileHeader.tsx             # Profile page header
├── ProfilePageComponents.tsx     # Profile stats, cards, sections
├── ProfileComponents.tsx         # Profile editing
├── PracticesPageComponents.tsx   # Practice cards, timer, calendar
├── DiscoverPageComponents.tsx    # Search, filters, recommendations
├── MessagesPageComponents.tsx    # Conversations, bubbles, input
├── BusinessComponents.tsx        # Business profiles, listings
├── CommunityComponents.tsx       # Community headers, posts
├── LayoutComponents.tsx          # App header, navigation
├── IslandNavigation.tsx          # Bottom navigation
├── FeatureNavigationSidebar.tsx  # Feature sidebar
├── AuthComponents.tsx            # Authentication flows
├── SocialComponents.tsx          # Social discovery
├── ErrorComponents.tsx           # Error handling
└── [40+ more components...]
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

**Related**: [`GUIDELINES.md`](GUIDELINES.md), [`templates/`](templates/), [`../tokens/`](../../tokens/)
