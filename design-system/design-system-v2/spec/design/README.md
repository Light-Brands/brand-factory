# Design Documentation

Complete implementation guide for the VIBEUP design system—from design tokens to component specifications.

> **Philosophy**: For the WHY behind design decisions, see [../brand/01-visual-identity.md](../brand/01-visual-identity.md)  
> **Source of Truth**: All values are defined in [../../tokens/](../../tokens/)

---

## Overview

This directory provides comprehensive HOW-TO documentation for implementing VIBEUP's design system. All documentation references design tokens as the single source of truth—no hardcoded values.

**Key Principle**: Tokens → Design System → Components

---

## Core Documentation

### [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)
**Complete implementation guide** covering:
- Design token usage patterns (colors, typography, spacing, shadows)
- Component design patterns (buttons, cards, inputs, modals)
- Mobile-first responsive patterns
- Animation and motion standards
- Accessibility requirements (WCAG AA+)
- Tailwind CSS integration
- Development workflow

**Start here** for implementing any UI feature.

### [COMPONENT-CATALOG.md](COMPONENT-CATALOG.md)
**Comprehensive component reference** with:
- All 50+ component specifications
- Token usage for each component
- Props and variant details
- Usage examples with token imports
- Component mapping table
- Migration patterns (hardcoded → token-based)

**Use this** to find existing components or create new ones.

### [user-journey-maps.md](user-journey-maps.md)
User flow diagrams showing:
- Onboarding journey (signup → first practice)
- Profile completion flow
- Discovery and connection journey
- Practice logging flow
- Community engagement journey
- Business interaction flow

**Reference this** for understanding user context and flow.

---

## Design Tokens: The Foundation

All design values live in `../../tokens/`:

| Token File | Purpose | Import Example |
|------------|---------|----------------|
| `colors.ts` | 17 color tokens (backgrounds, text, accents, semantic) | `import { colors } from '../../tokens';` |
| `typography.ts` | Font families, sizes, weights, letter spacing | `import { typography } from '../../tokens';` |
| `spacing.ts` | 30 spacing values + 13 border radius values | `import { spacing, borderRadius } from '../../tokens';` |
| `shadows.ts` | 16 shadow definitions including glows | `import { shadows } from '../../tokens';` |
| `index.ts` | Unified export point | `import { colors, typography, spacing, shadows } from '../../tokens';` |

### Token Usage Example

```typescript
import { colors, borderRadius, spacing, shadows } from '../../tokens';

const MyComponent = () => (
  <div style={{
    backgroundColor: colors['abyss-mystic'],
    color: colors['moonlight'],
    padding: spacing['6'],
    borderRadius: borderRadius['vibe-card'],
    boxShadow: shadows['elevation']
  }}>
    Content
  </div>
);
```

**Never hardcode values**—always import from tokens.

---

## Design Principles

### 1. Token-First Development

All design values come from tokens. When you need a color, spacing value, or shadow:
1. Check if token exists in `../../tokens/`
2. If missing, add to tokens (single source of truth)
3. Import token in component
4. Never hardcode hex colors, pixel values, or inline styles

### 2. Mobile-First Responsive

Design for <640px screens first, then enhance for larger viewports:
- Touch targets: 44×44px minimum
- Bottom-sheet modals on mobile
- Responsive typography and spacing
- Test on mobile before desktop

### 3. Brand-Aligned Implementation

Every component implements brand philosophy:
- **Colors**: Onyx palette creates calm, immersive dark mode experience
- **Typography**: Clear hierarchy with Inter font family
- **Spacing**: Breathable layouts using 4px grid system
- **Motion**: Gentle, purposeful animations with spring physics
- **Accessibility**: WCAG AA minimum, AAA preferred

### 4. Progressive Disclosure

Complex features revealed gradually:
- Start simple, add depth when ready
- Mira guides feature discovery
- Advanced options behind clear entry points
- Never overwhelming, always inviting

### 5. Accessibility First

All components must be accessible:
- WCAG AA compliance minimum
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels and roles
- High contrast ratios (18:1 on primary text)
- Reduced-motion alternatives

---

## Component Organization

Components follow atomic design principles:

1. **Atoms** - Base elements (Button, Input, Icon)
2. **Molecules** - Simple composites (SearchBar, TagList)
3. **Organisms** - Complex components (ProfileCard, NavigationBar)
4. **Templates** - Page layouts
5. **Pages** - Fully realized screens

All components in `../../components/` directory.

---

## Responsive Breakpoints

```typescript
mobile: < 640px   // Primary design target
tablet: 640-1024px
desktop: > 1024px
```

Always design mobile-first, then add enhancements for larger screens.

---

## Animation Framework

Using Framer Motion with:
- **Spring physics**: Natural, organic feel
- **Staggered children**: Sequential entrance animations
- **Gesture recognition**: Swipe, drag, tap interactions
- **Page transitions**: Smooth, contextual navigation
- **Micro-interactions**: Delightful feedback

Timing standards:
- Quick: 200ms
- Normal: 300ms
- Slow: 400ms
- Complex: 600ms

---

## Templates & Tools

### [templates/](templates/)
Component and page templates:
- React component templates
- Page layout templates
- Form patterns
- Modal/dialog templates
- Card variations

### [tools/](tools/)
Design tools and utilities:
- Component generators
- Pattern validators
- Design token converters
- Accessibility checkers

---

## Implementation Guidelines

### Starting a New Feature

1. **Understand the WHY**: Read [../brand/01-visual-identity.md](../brand/01-visual-identity.md)
2. **Review patterns**: Check [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for implementation patterns
3. **Find components**: Look in [COMPONENT-CATALOG.md](COMPONENT-CATALOG.md) for existing components
4. **Check wireframes**: Review [../brand/06-ux-wireframe-blueprint.md](../brand/06-ux-wireframe-blueprint.md) for UX flow
5. **Import tokens**: Use `../../tokens/` for all values
6. **Build mobile-first**: Start with <640px, then enhance
7. **Test accessibility**: Keyboard navigation, screen readers, contrast
8. **Document**: Add component to catalog if new

### Building New Components

1. Check if component exists in [COMPONENT-CATALOG.md](COMPONENT-CATALOG.md)
2. If not, check if pattern exists
3. Follow atomic design principles
4. Import tokens, never hardcode values
5. Implement brand standards
6. Use Framer Motion for animations
7. Test on mobile first
8. Validate accessibility
9. Document in component catalog

### Maintaining Consistency

- Always reference [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for standards
- Use design tokens, not magic numbers
- Follow spacing system (4px grid)
- Maintain brand color palette
- Use established component patterns
- Test responsive behavior
- Validate accessibility

---

## Integration with Brand

Design system is deeply integrated with brand identity:

| Brand Document | Purpose | Link |
|----------------|---------|------|
| Visual Identity | WHY we design this way | [../brand/01-visual-identity.md](../brand/01-visual-identity.md) |
| Voice & Messaging | Copy and tone guidelines | [../brand/03-brand-voice-messaging.md](../brand/03-brand-voice-messaging.md) |
| Mira Personality | AI interaction patterns | [../brand/04-mira-personality-guide.md](../brand/04-mira-personality-guide.md) |
| Integration Guide | How brand informs design | [../brand/brand-identity-integration.md](../brand/brand-identity-integration.md) |

---

## Quick Reference

**Finding Components**: [COMPONENT-CATALOG.md](COMPONENT-CATALOG.md)  
**Implementation Patterns**: [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)  
**User Flows**: [user-journey-maps.md](user-journey-maps.md)  
**Templates**: [templates/](templates/) directory  
**Design Tokens**: [../../tokens/](../../tokens/)  
**Brand Philosophy**: [../brand/01-visual-identity.md](../brand/01-visual-identity.md)

---

## Documentation Hierarchy

```
Philosophy (WHY)
└── ../brand/01-visual-identity.md
    │
    ↓
Implementation (HOW)
├── DESIGN-SYSTEM.md ← You are here
├── COMPONENT-CATALOG.md
└── user-journey-maps.md
    │
    ↓
Source Code (VALUES)
├── ../../tokens/colors.ts
├── ../../tokens/typography.ts
├── ../../tokens/spacing.ts
└── ../../tokens/shadows.ts
    │
    ↓
Components (IMPLEMENTATION)
└── ../../components/*.tsx
```

---

## Archived Documentation

The following files have been replaced by the new token-first system:

- `GUIDELINES.md` → Replaced by `DESIGN-SYSTEM.md` (token-based implementation guide)
- `ui-component-library.md` → Replaced by `COMPONENT-CATALOG.md` (component reference)

Archived files kept for reference but should not be used for new development.

---

## Related Documentation

- [../brand/](../brand/) - Brand philosophy and voice
- [../epics/](../epics/) - Feature specifications
- [../architecture/](../architecture/) - Technical system design
- [../MASTER-PLAN.md](../MASTER-PLAN.md) - Platform overview
- [../../README.md](../../README.md) - Design system overview

---

**Design System Version**: 2.0.0  
**Documentation Status**: Token-first, no hardcoded values  
**Last Updated**: December 19, 2025

[← Back to Main README](../README.md)
