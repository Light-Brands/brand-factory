# VIBEUP Unified Design System

A comprehensive design system combining the Onyx component library with complete VIBEUP platform specifications.

## Overview

This unified system provides:
- **50+ React Components** - Production-ready dark mode UI components
- **Live Showcase** - Interactive component playground with 103 navigable sections
- **Complete Spec Documentation** - 200+ pages of platform specifications
- **Design Tokens** - Centralized color, typography, spacing, and shadow definitions

## Quick Start

```bash
# Install dependencies
npm install

# Run the showcase
npm run dev
```

## Structure

```
design-system-v2/
├── components/          # 50+ React components
├── pages/               # Showcase application
├── tokens/              # Design tokens (colors, typography, spacing, shadows)
├── spec/                # Complete VIBEUP specification
│   ├── epics/           # 9 feature epic documents
│   ├── architecture/    # Technical system design
│   ├── operations/      # Operational documentation
│   ├── brand/           # Brand identity & voice
│   ├── design/          # UX/UI specifications
│   └── development/     # AI coding infrastructure
└── public/              # Static assets
```

## Design System Navigation

The showcase sidebar contains **19 collapsible groups** with **103 total sections**:

### UI Components (13 groups, 58 sections)
| Group | Sections |
|-------|----------|
| Foundations | Identity, Palette, Typography |
| Home Page | Sacred Loading, Soft Arrival, Email Capture, Onboarding Form, Containers |
| Profile Page | Stats & Badges, Action Buttons, Attributes & Pills, Photos & Uploads, Sections & Layout |
| Discover Page | Search & Navigation, Recommendation Cards, Filters & Chips, Loading & Empty States |
| Messages Page | Conversation List, Message Bubbles, Input & Actions, Status & Empty States |
| Practices Page | Practice Cards, Stats & Streaks, Timer & Sessions, Calendar & History, Full Dashboard, Modals & Flows |
| My Profile Page | My Profile (Own View), Public Profile View, Edit Mode & Controls, Quick Edit Sections, Photo Management, Account Settings |
| Settings Page | Account & Profile, Notifications, Privacy & Security, Data & Preferences |
| Community Page | Full Community View, Community Cards, Community Header, Members & Roles, Posts & Rules |
| Business Page | Full Business Profile, Business Cards, Services & Listings, Reviews & Ratings |
| Notifications Page | Notification Items, Notification Types, Controls & Filters |
| Impact Page | Full Impact Dashboard, Impact Statistics, Voting Cards |
| Core: Auth & Layout | Mira AI Guide, Auth & Onboarding, Navigation & Headers, Profile Systems, Social & Discovery, Error Systems |

### Spec Documentation (6 groups, 45 sections)
| Group | Sections |
|-------|----------|
| Epics | Epic 00-08 (Foundation through Monetization) |
| Architecture | Data Models, API Reference, Service Layer, AI Model Router, AI Coding Config, Deployment |
| Operations | Admin Panel, Feature Flags, Observability, Testing Strategy, Environment Variables |
| Brand | Visual Identity, Brand Deck, Voice & Messaging, Mira Personality, Product Vision, UX Wireframes, Brand Integration, Conscious Development |
| Design Specs | UI Component Library, User Journey Maps, Guidelines, Codex Usage, Templates, Tools |
| Development | Coding Rules, Commands, AI Agents, Plugins, Skills, Dev Templates, Implementation Plan |

## Design Tokens: Single Source of Truth

All design values are defined in `tokens/` - **never hardcode values in components**.

```typescript
import { colors, typography, spacing, borderRadius, shadows } from './tokens';

// Colors (17 tokens)
colors['abyss-base']     // #0D0D0D - Primary background
colors['moonlight']      // #F5F5F5 - Primary text
colors['aqua-light']     // #97D9C4 - Primary accent

// Typography
typography.fontFamily.sans  // ['Inter', 'SF Pro', 'system-ui']
typography.fontSize.base    // 1rem (16px)
typography.fontWeight.bold  // 700

// Spacing & Border Radius
spacing['6']              // 1.5rem (24px)
borderRadius['vibe-card'] // 1rem (16px)

// Shadows
shadows['elevation']      // Standard card elevation
shadows['mira-glow']      // Mira AI glow effect
```

**Documentation**: See [tokens/README.md](tokens/README.md) for complete token reference.

## Component Usage

```tsx
import { Button, Card, Avatar } from './components';

const MyComponent = () => (
  <Card>
    <Avatar src="/user.jpg" size="lg" />
    <Button variant="primary">Click Me</Button>
  </Card>
);
```

## Features

### Dark Mode Exclusive
All components are designed for dark mode aesthetics with the Onyx color palette.

### Tailwind CSS
Utility-first styling with zero runtime overhead.

### TypeScript
Fully typed props and states for better developer experience.

### Accessibility
Built with ARIA standards in mind.

### Tree-shakable
Only include the components you use.

## Documentation Architecture

**Tokens → Design System → Components** with **Brand Philosophy** guiding all decisions.

### Design Tokens (Source of Truth)
- **[tokens/README.md](tokens/README.md)** - Complete token reference
- **[tokens/colors.ts](tokens/colors.ts)** - 17 color tokens with JSDoc
- **[tokens/typography.ts](tokens/typography.ts)** - Type system
- **[tokens/spacing.ts](tokens/spacing.ts)** - Spacing & border radius
- **[tokens/shadows.ts](tokens/shadows.ts)** - Elevation & glows

### Brand Philosophy (WHY)
- **[spec/brand/01-visual-identity.md](spec/brand/01-visual-identity.md)** - Visual philosophy
- **[spec/brand/03-brand-voice-messaging.md](spec/brand/03-brand-voice-messaging.md)** - Voice & tone
- **[spec/brand/04-mira-personality-guide.md](spec/brand/04-mira-personality-guide.md)** - Mira AI personality

### Design System (HOW)
- **[spec/design/DESIGN-SYSTEM.md](spec/design/DESIGN-SYSTEM.md)** - Implementation guide
- **[spec/design/COMPONENT-CATALOG.md](spec/design/COMPONENT-CATALOG.md)** - Component reference
- **[spec/design/user-journey-maps.md](spec/design/user-journey-maps.md)** - User flows

### Platform Specifications
- **[spec/MASTER-PLAN.md](spec/MASTER-PLAN.md)** - Platform vision
- **[spec/epics/](spec/epics/)** - Feature specifications
- **[spec/architecture/](spec/architecture/)** - Technical design
- **[spec/operations/](spec/operations/)** - Operational docs

## Tech Stack

```yaml
Framework: React + TypeScript
Styling: Tailwind CSS
Build: Vite
Components: 50+ production-ready
Documentation: 200+ pages of specs
```

## License

Proprietary - VIBEUP Internal Use Only

---

**Maintainers**: VIBEUP Development Team
