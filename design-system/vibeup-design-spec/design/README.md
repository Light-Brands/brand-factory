# Design Documentation

Complete UX/UI specifications, design system guidelines, and user flow documentation for VIBEUP.

## Overview

This directory consolidates all design and user experience documentation—from comprehensive design system guidelines to user journey maps, component specifications, and implementation patterns.

## Design System

### [GUIDELINES.md](GUIDELINES.md)
**Comprehensive design system** (32KB, 1625 lines) covering:
- Design philosophy and principles
- Color system (primary, secondary, semantic)
- Typography scale and hierarchy
- Spacing system (8px grid)
- Component specifications
- Layout patterns and responsive behavior
- Animation and motion principles
- Accessibility standards (WCAG AA compliance)
- Dark mode considerations
- Design tokens and variables

### [existing-patterns.json](existing-patterns.json)
Catalog of existing UI patterns and components with:
- Component definitions
- Variant specifications
- Props and configuration options
- Usage examples
- Dependencies and relationships

### [CODEX_USAGE.md](CODEX_USAGE.md)
Guide to using design system documentation:
- How to read component specs
- Implementation guidelines
- Pattern application
- Integration with development workflow

## Component Library

### [ui-component-library.md](ui-component-library.md)
Complete component catalog following the design system:
- Base components (Button, Input, Card, Modal, etc.)
- Composite components (ProfileCard, ConnectionCard, PracticeCard)
- Animation patterns (spring physics, staggered entry)
- Mobile-first responsive behavior
- Accessibility implementation
- Brand-aligned styling

## User Experience

### [user-journey-maps.md](user-journey-maps.md)
Complete user flows with Mermaid diagrams:
- Onboarding journey (signup → first practice)
- Profile completion flow
- Discovery and connection journey
- Practice logging flow
- Community engagement journey
- Business interaction flow

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

## Design Principles

### 1. Mobile-First Native Feel

Everything must feel like a native mobile app on Android, iOS, and web:
- Design for <640px screens first
- Touch targets minimum 44×44px
- Bottom-sheet modals on mobile, centered dialogs on desktop
- Native-like animations (spring physics)
- No horizontal scroll at any screen size
- Loading states feel instant (<100ms perceived latency)

### 2. Brand-Aligned Visual Language

All components implement VIBEUP's brand identity:
- **Colors**: Soft, warm palette from [../brand/01-visual-identity.md](../brand/01-visual-identity.md)
- **Typography**: Poppins (headings), Inter (body) with clear hierarchy
- **Spacing**: Breathable layouts using 8px grid system
- **Elevation**: Subtle shadows, 16px border radius
- **Motion**: Gentle, purposeful animations using spring physics

### 3. Progressive Disclosure

Complex features revealed gradually:
- Start simple, add depth when ready
- Mira guides feature discovery
- Advanced options behind clear entry points
- Never overwhelming, always inviting

### 4. Accessibility First

All components must be accessible:
- WCAG AA compliance minimum
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels and roles
- Color contrast ratios maintained
- Large text size support

### 5. Performance Optimized

Design decisions consider performance:
- Lazy loading for heavy components
- Optimistic UI updates
- Skeleton states during loading
- Minimal layout shifts
- Efficient animations (GPU-accelerated)

## Component Organization

Components follow atomic design principles:

1. **Atoms** - Base elements (Button, Input, Icon)
2. **Molecules** - Simple composites (SearchBar, TagList)
3. **Organisms** - Complex components (ProfileCard, NavigationBar)
4. **Templates** - Page layouts
5. **Pages** - Fully realized screens

## Responsive Breakpoints

```typescript
mobile: < 640px   // Primary design target
tablet: 640-1024px
desktop: > 1024px
```

## Animation Framework

Using Framer Motion with:
- **Spring physics**: Natural, organic feel
- **Staggered children**: Sequential entrance
- **Gesture recognition**: Swipe, drag, tap
- **Page transitions**: Smooth, contextual
- **Micro-interactions**: Delightful feedback

## Design Tokens

Core design values used throughout:

```typescript
// Spacing (8px grid)
spacing: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

// Border radius
radius: { sm: 8, md: 16, lg: 24, full: 9999 }

// Elevation (shadows)
elevation: { sm, md, lg, xl }

// Typography scale
fontSize: { xs, sm, base, lg, xl, 2xl, 3xl, 4xl }
```

## Implementation Guidelines

### Using the Design System

1. **Start with GUIDELINES.md**: Understand principles and patterns
2. **Reference ui-component-library.md**: Find the component you need
3. **Check existing-patterns.json**: See if pattern already exists
4. **Use templates/**: Bootstrap new components from templates
5. **Validate with tools/**: Check accessibility and pattern compliance

### Building New Components

1. Check if component exists in library
2. If not, check if pattern exists in existing-patterns.json
3. Follow atomic design principles
4. Implement brand standards from [../brand/01-visual-identity.md](../brand/01-visual-identity.md)
5. Use Framer Motion for animations
6. Test on mobile first
7. Validate accessibility
8. Document in ui-component-library.md

### Maintaining Consistency

- Always reference GUIDELINES.md for standards
- Use design tokens, not magic numbers
- Follow spacing system (8px grid)
- Maintain brand color palette
- Use established component patterns
- Test responsive behavior
- Validate accessibility

## Integration with Brand

Design system is deeply integrated with brand identity:

- **Visual Identity**: [../brand/01-visual-identity.md](../brand/01-visual-identity.md) defines the visual language
- **Voice & Messaging**: [../brand/03-brand-voice-messaging.md](../brand/03-brand-voice-messaging.md) guides all copy
- **Mira Personality**: [../brand/04-mira-personality-guide.md](../brand/04-mira-personality-guide.md) shapes AI interactions
- **Integration Guide**: [../brand/brand-identity-integration.md](../brand/brand-identity-integration.md) shows how brand informs design

## Related Documentation

- [../brand/01-visual-identity.md](../brand/01-visual-identity.md) - Visual design standards
- [../brand/06-ux-wireframe-blueprint.md](../brand/06-ux-wireframe-blueprint.md) - Complete wireframes
- [../epics/](../epics/) - Feature specs using these components
- [../MASTER-PLAN.md](../MASTER-PLAN.md) - Platform overview

## Quick Reference

**Finding Components**: Check [ui-component-library.md](ui-component-library.md)  
**Design Standards**: Read [GUIDELINES.md](GUIDELINES.md)  
**User Flows**: See [user-journey-maps.md](user-journey-maps.md)  
**Templates**: Browse [templates/](templates/) directory  
**Existing Patterns**: Search [existing-patterns.json](existing-patterns.json)

---

[← Back to Main README](../README.md)

