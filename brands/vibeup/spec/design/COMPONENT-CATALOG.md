# VIBEUP Component Catalog

**Version**: 2.0.0  
**Last Updated**: December 19, 2025

> **Implementation**: All components are in `../../components/`  
> **Design System**: See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for token usage patterns  
> **Philosophy**: See [../brand/01-visual-identity.md](../brand/01-visual-identity.md) for brand essence

---

## Overview

Complete catalog of 50+ React components implementing the Onyx Design System. All components use design tokens from `../../tokens/` — no hardcoded values.

### Importing Components

```typescript
// Import individual components
import { Button, Card, Avatar, Input } from '../../components';

// Import with tokens
import { colors, spacing, borderRadius } from '../../tokens';
```

---

## Component Mapping

Cross-reference between spec requirements and actual implementations:

| Component Category | Implementation File | Key Tokens Used |
|--------------------|---------------------|-----------------|
| **Core UI** | | |
| Buttons | `Button.tsx` | `colors['aqua-light']`, `borderRadius['vibe-btn']`, `shadows['aqua-glow']` |
| Cards | `Card.tsx` | `colors['abyss-mystic']`, `borderRadius['vibe-card']`, `shadows['elevation']` |
| Inputs | `Input.tsx`, `Textarea.tsx` | `colors['abyss-light']`, `colors['aqua-light']` (focus) |
| Avatars | `Avatar.tsx` | `borderRadius['full']` |
| Tags/Badges | `Tag.tsx` | `colors['aqua-light']`, `borderRadius['full']` |
| Navigation | `Tabs.tsx` | `colors['aqua-light']`, `colors['moonlight-muted']` |
| **Feedback** | | |
| Modals | `Modal.tsx` | `colors['abyss-mystic']`, `borderRadius['3xl']`, `shadows['2xl']` |
| Tooltips | `Tooltip.tsx` | `colors['abyss-mystic']`, `shadows['lg']` |
| Skeletons | `Skeleton.tsx` | `colors['abyss-light']`, pulse animation |
| Loading | `LoadingSpinner.tsx` | `colors['aqua-light']`, rotation animation |
| Empty States | `EmptyState.tsx` | `colors['moonlight-muted']` |
| **Mira AI** | | |
| Mira Guide | `MiraGuide.tsx` | `colors['aqua-light']`, `shadows['mira-glow']` |
| Mira Intelligence | `MiraIntelligence.tsx` | Gradient: `abyss-mystic` → `aqua-light` |
| Chat Bubbles | `ChatBubble.tsx` | `colors['abyss-mystic']`, `borderRadius['2xl']` |
| **Page Components** | | |
| Home | `HomeComponents.tsx` | Full Onyx palette |
| Dashboard | `DashboardComponents.tsx` | Epic-specific colors + base palette |
| Profile | `ProfilePageComponents.tsx` | Standard palette |
| Practices | `PracticesPageComponents.tsx` | Standard palette + `colors['success']` |
| Discovery | `DiscoverPageComponents.tsx` | Standard palette |
| Messages | `MessagesPageComponents.tsx` | Standard palette |
| Business | `BusinessComponents.tsx` | `colors['gold-accent']` for premium |
| Community | `CommunityComponents.tsx` | Standard palette |
| Impact | `ImpactPageComponents.tsx` | `colors['success']`, `colors['info']` |
| **Layout** | | |
| App Header | `LayoutComponents.tsx` | `colors['abyss-mystic']`, `shadows['sm']` |
| Island Navigation | `IslandNavigation.tsx` | `colors['abyss-mystic']`, bottom positioning |
| Sidebar | `FeatureNavigationSidebar.tsx` | `colors['abyss-mystic']` |

---

## Core UI Components

### Button

**File**: `components/Button.tsx`

**Token Usage**:
```typescript
import { colors, borderRadius, shadows, spacing } from '../tokens';

// Primary variant
backgroundColor: colors['aqua-light']
color: colors['abyss-base']
borderRadius: borderRadius['vibe-btn']
padding: `${spacing['3']} ${spacing['6']}`

// Hover state
hover: {
  backgroundColor: colors['aqua-medium']
  boxShadow: shadows['aqua-glow']
}

// Secondary variant
backgroundColor: 'transparent'
color: colors['aqua-light']
border: `1px solid ${colors['abyss-lighter']}`

// Danger variant
backgroundColor: colors['error']
color: colors['moonlight']
```

**Variants**: `primary`, `secondary`, `ghost`, `danger`

**Props**: `variant`, `size`, `disabled`, `loading`, `onClick`, `children`

---

### Card

**File**: `components/Card.tsx`

**Token Usage**:
```typescript
import { colors, borderRadius, shadows, spacing } from '../tokens';

backgroundColor: colors['abyss-mystic']
borderRadius: borderRadius['vibe-card']
padding: spacing['6']
boxShadow: shadows['elevation']
border: `1px solid ${colors['abyss-lighter']}`
```

**Props**: `className`, `padding`, `hover`, `onClick`, `children`

---

### Input

**File**: `components/Input.tsx`

**Token Usage**:
```typescript
import { colors, borderRadius, spacing, typography } from '../tokens';

backgroundColor: colors['abyss-light']
color: colors['moonlight']
border: `1px solid ${colors['abyss-lighter']}`
borderRadius: borderRadius['xl']
padding: `${spacing['3']} ${spacing['4']}`
fontFamily: typography.fontFamily.sans
fontSize: typography.fontSize.base

// Focus state
focus: {
  borderColor: colors['aqua-light']
  backgroundColor: colors['abyss-mystic']
  boxShadow: `0 0 0 2px ${colors['aqua-light']}40`
}

// Error state
error: {
  borderColor: colors['error']
}

// Disabled state
disabled: {
  opacity: 0.5
  cursor: 'not-allowed'
}
```

**Props**: `type`, `value`, `onChange`, `placeholder`, `error`, `disabled`, `icon`

---

### Avatar

**File**: `components/Avatar.tsx`

**Token Usage**:
```typescript
import { colors, borderRadius, shadows } from '../tokens';

borderRadius: borderRadius['full']
border: `2px solid ${colors['aqua-light']}`
boxShadow: shadows['sm']

// Size variants
size: {
  sm: '32px',
  md: '48px',
  lg: '64px',
  xl: '96px'
}

// Online indicator
indicator: {
  backgroundColor: colors['success']
  borderRadius: borderRadius['full']
  border: `2px solid ${colors['abyss-mystic']}`
}
```

**Props**: `src`, `alt`, `size`, `online`, `fallback`

---

## Mira AI Components

### MiraGuide

**File**: `components/MiraGuide.tsx`

**Token Usage**:
```typescript
import { colors, borderRadius, shadows, spacing } from '../tokens';

// Mira greeting container
background: `linear-gradient(135deg, ${colors['abyss-mystic']}, ${colors['aqua-light']}20)`
borderRadius: borderRadius['2xl']
padding: spacing['6']
boxShadow: shadows['mira-glow']
border: `1px solid ${colors['aqua-light']}40`

// Mira avatar
backgroundColor: colors['aqua-light']
borderRadius: borderRadius['full']
boxShadow: shadows['mira-glow-intense']

// Text
color: colors['moonlight']
fontWeight: typography.fontWeight.medium
```

**Props**: `message`, `onDismiss`, `avatar`, `actions`

---

### MiraIntelligence

**File**: `components/MiraIntelligence.tsx`

**Token Usage**:
```typescript
// Intelligent suggestion card
background: `linear-gradient(to right, ${colors['abyss-mystic']}, ${colors['aqua-light']}10)`
borderRadius: borderRadius['2xl']
border: `1px solid ${colors['aqua-light']}30`
padding: spacing['4']

// Hover state
hover: {
  borderColor: colors['aqua-light']
  boxShadow: shadows['aqua-glow']
  transform: 'translateY(-2px)'
}

// Icon
color: colors['aqua-light']
```

**Props**: `suggestion`, `context`, `onClick`, `confidence`

---

### ChatBubble

**File**: `components/ChatBubble.tsx`

**Token Usage**:
```typescript
// User message (right-aligned)
backgroundColor: colors['aqua-light']
color: colors['abyss-base']
borderRadius: `${borderRadius['2xl']} ${borderRadius['2xl']} 4px ${borderRadius['2xl']}`
padding: `${spacing['3']} ${spacing['4']}`
maxWidth: '75%'
marginLeft: 'auto'

// Mira message (left-aligned)
backgroundColor: colors['abyss-mystic']
color: colors['moonlight']
borderRadius: `${borderRadius['2xl']} ${borderRadius['2xl']} ${borderRadius['2xl']} 4px`
padding: `${spacing['3']} ${spacing['4']}`
maxWidth: '75%'
marginRight: 'auto'
boxShadow: shadows['mira-glow']
```

**Props**: `content`, `sender`, `timestamp`, `avatar`

---

## Layout Components

### AppHeader

**File**: `components/LayoutComponents.tsx`

**Token Usage**:
```typescript
backgroundColor: colors['abyss-mystic']
borderBottom: `1px solid ${colors['abyss-lighter']}`
padding: `${spacing['3']} ${spacing['4']}`
boxShadow: shadows['sm']
position: 'sticky'
top: 0
zIndex: 50

// Logo/brand
color: colors['aqua-light']

// Navigation links
color: colors['moonlight-soft']
hover: {
  color: colors['aqua-light']
}

// User menu button
backgroundColor: colors['abyss-light']
borderRadius: borderRadius['full']
```

**Props**: `user`, `navigation`, `onMenuClick`

---

### IslandNavigation

**File**: `components/IslandNavigation.tsx`

**Token Usage**:
```typescript
// Bottom navigation container (mobile)
backgroundColor: colors['abyss-mystic']
borderTop: `1px solid ${colors['abyss-lighter']}`
padding: `${spacing['2']} ${spacing['4']}`
boxShadow: `0 -4px 12px rgba(0, 0, 0, 0.4)`
position: 'fixed'
bottom: 0
left: 0
right: 0

// Navigation items
color: colors['moonlight-muted']
padding: spacing['2']

// Active item
color: colors['aqua-light']
backgroundColor: `${colors['aqua-light']}20`
borderRadius: borderRadius['xl']

// Icon size
minHeight: '44px'
minWidth: '44px'
```

**Props**: `items`, `activeRoute`, `onNavigate`

---

## Page-Specific Components

### ProfileCard

**File**: `components/ProfilePageComponents.tsx`

**Token Usage**:
```typescript
// Profile card container
backgroundColor: colors['abyss-mystic']
borderRadius: borderRadius['vibe-card']
padding: spacing['6']
boxShadow: shadows['elevation']
border: `1px solid ${colors['abyss-lighter']}`

// Profile name
fontSize: typography.fontSize['2xl']
fontWeight: typography.fontWeight.bold
color: colors['moonlight']

// Bio/description
fontSize: typography.fontSize.base
color: colors['moonlight-soft']
lineHeight: '1.6'

// Stats
color: colors['aqua-light']
fontWeight: typography.fontWeight.semibold

// Badges
backgroundColor: `${colors['aqua-light']}20`
color: colors['aqua-light']
borderRadius: borderRadius['full']
padding: `${spacing['1']} ${spacing['3']}`
```

**Props**: `user`, `editable`, `onEdit`, `stats`

---

### PracticeCard

**File**: `components/PracticesPageComponents.tsx`

**Token Usage**:
```typescript
// Practice card
backgroundColor: colors['abyss-mystic']
borderRadius: borderRadius['vibe-card']
padding: spacing['4']
border: `1px solid ${colors['abyss-lighter']}`

// Practice type indicator
backgroundColor: `${colors['aqua-light']}20`
color: colors['aqua-light']
borderRadius: borderRadius['full']

// Streak display
color: colors['success']
fontWeight: typography.fontWeight.bold

// Timer
fontSize: typography.fontSize['4xl']
fontWeight: typography.fontWeight.black
color: colors['aqua-light']

// Progress bar
backgroundColor: colors['abyss-light']
height: spacing['1']
borderRadius: borderRadius['full']

progress: {
  backgroundColor: colors['aqua-light']
  borderRadius: borderRadius['full']
}
```

**Props**: `practice`, `streak`, `onStart`, `onLog`

---

## Feedback Components

### Modal

**File**: `components/Modal.tsx`

**Token Usage**:
```typescript
// Overlay
backgroundColor: 'rgba(0, 0, 0, 0.8)'
backdropFilter: 'blur(4px)'

// Modal container (mobile: bottom sheet)
backgroundColor: colors['abyss-mystic']
borderRadius: {
  mobile: `${borderRadius['3xl']} ${borderRadius['3xl']} 0 0`, // Top corners only
  desktop: borderRadius['3xl']
}
padding: spacing['6']
boxShadow: shadows['2xl']
border: `1px solid ${colors['abyss-lighter']}`

// Header
fontSize: typography.fontSize['2xl']
fontWeight: typography.fontWeight.bold
color: colors['moonlight']
marginBottom: spacing['4']

// Close button
color: colors['moonlight-muted']
hover: {
  color: colors['moonlight']
}
```

**Props**: `isOpen`, `onClose`, `title`, `children`, `size`

---

### LoadingSpinner

**File**: `components/LoadingSpinner.tsx`

**Token Usage**:
```typescript
// Spinner ring
borderColor: `${colors['abyss-lighter']} ${colors['abyss-lighter']} ${colors['abyss-lighter']} ${colors['aqua-light']}`
borderWidth: '3px'
borderRadius: borderRadius['full']
animation: 'spin 0.8s linear infinite'

// Size variants
size: {
  sm: '16px',
  md: '32px',
  lg: '48px'
}

// Center glow (optional)
backgroundColor: `${colors['aqua-light']}30`
boxShadow: shadows['mira-glow']
```

**Props**: `size`, `color`, `withGlow`

---

### EmptyState

**File**: `components/EmptyState.tsx`

**Token Usage**:
```typescript
// Container
padding: `${spacing['12']} ${spacing['4']}`
textAlign: 'center'

// Icon
color: colors['moonlight-muted']
fontSize: typography.fontSize['4xl']
marginBottom: spacing['4']

// Title
fontSize: typography.fontSize['xl']
fontWeight: typography.fontWeight.semibold
color: colors['moonlight']
marginBottom: spacing['2']

// Description
fontSize: typography.fontSize.base
color: colors['moonlight-muted']
lineHeight: '1.6'

// CTA button (if present)
marginTop: spacing['6']
```

**Props**: `icon`, `title`, `description`, `action`

---

## Token Migration Patterns

### Before (Hardcoded)

```typescript
// ❌ Old way - hardcoded values
const Button = styled.button`
  background-color: #97D9C4;
  color: #0D0D0D;
  border-radius: 24px;
  padding: 12px 24px;
  box-shadow: 0 0 20px rgba(151, 217, 196, 0.15);
  
  &:hover {
    background-color: #7BC4B1;
  }
`;
```

### After (Token-Based)

```typescript
// ✅ New way - using tokens
import { colors, borderRadius, spacing, shadows } from '../../tokens';

const Button = styled.button`
  background-color: ${colors['aqua-light']};
  color: ${colors['abyss-base']};
  border-radius: ${borderRadius['vibe-btn']};
  padding: ${spacing['3']} ${spacing['6']};
  box-shadow: ${shadows['aqua-glow']};
  
  &:hover {
    background-color: ${colors['aqua-medium']};
  }
`;
```

---

## Component Development Checklist

When creating new components:

- [ ] Import tokens, never hardcode values
- [ ] Use mobile-first responsive patterns
- [ ] Ensure 44×44px minimum touch targets
- [ ] Include proper focus states for keyboard navigation
- [ ] Add ARIA labels and roles
- [ ] Test on mobile (<640px) first
- [ ] Use semantic color tokens (`success`, `error`, etc.) appropriately
- [ ] Follow animation timing standards (200-600ms)
- [ ] Document token usage in component header comment
- [ ] Test with reduced-motion preferences

---

## Related Documentation

- **Design System**: [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) - Implementation patterns
- **Design Tokens**: [../../tokens/](../../tokens/) - Source of truth for all values
- **Brand Philosophy**: [../brand/01-visual-identity.md](../brand/01-visual-identity.md) - The WHY
- **UX Wireframes**: [../brand/06-ux-wireframe-blueprint.md](../brand/06-ux-wireframe-blueprint.md)

---

**Component Library Version**: 2.0.0  
**Total Components**: 50+  
**All components use design tokens** - No hardcoded values  
**Last Updated**: December 19, 2025

