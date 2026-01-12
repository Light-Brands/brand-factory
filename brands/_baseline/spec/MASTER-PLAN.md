# Baseline Foundation Master Plan

> The foundational blueprint for creating clean-slate brand applications with Next.js, Node.js, and AI-driven development.

---

## Executive Summary

The Baseline Foundation provides a minimal, production-ready starting point for new brand applications. It establishes:

- **Clean architecture** - Next.js 14+ with App Router
- **Type-safe development** - TypeScript throughout
- **AI-assisted workflow** - Integrated Claude Code configurations
- **Design system foundation** - design-system-v2 tokens and components
- **Visual consistency** - Icon-first approach, no emojis
- **Validation baseline** - Single test page for stack verification

---

## Vision

### Purpose

Create the minimal viable foundation that any brand can extend without carrying unnecessary complexity or assumptions.

### Principles

| Principle | Description |
|-----------|-------------|
| **Minimal Surface** | Include only what's necessary for a functional starting point |
| **Maximum Extensibility** | Every decision should be overridable |
| **AI-First Development** | Optimized for Claude Code and automated workflows |
| **Type Safety** | TypeScript strict mode, no `any` types |
| **Icon-First Design** | Professional iconography, never emojis |

---

## Platform Architecture

### Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                      PRESENTATION                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Next.js 14+ (App Router)                           │   │
│  │  ├── React 18+ (Server Components)                  │   │
│  │  ├── TypeScript 5+ (Strict Mode)                    │   │
│  │  └── Tailwind CSS 3+ (Utility-First)                │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                      DESIGN SYSTEM                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  design-system-v2                                   │   │
│  │  ├── Tokens (colors, typography, spacing)           │   │
│  │  ├── Components (50+ React components)              │   │
│  │  └── Themes (light/dark mode support)               │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                      DEVELOPMENT                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ai-coding-config                                   │   │
│  │  ├── Rules (45+ coding standards)                   │   │
│  │  ├── Agents (5+ specialized assistants)             │   │
│  │  └── Commands (workflow automation)                 │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                      RUNTIME                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Node.js 20+ (LTS)                                  │   │
│  │  ├── Package Manager: pnpm (preferred)              │   │
│  │  ├── Testing: Vitest + React Testing Library        │   │
│  │  └── Linting: ESLint + Prettier                     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
{{BRAND_SLUG}}/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page (test page)
│   ├── globals.css              # Global styles + Tailwind
│   └── favicon.ico              # Brand favicon
│
├── components/                   # Brand-specific components
│   ├── ui/                      # Extended UI components
│   └── icons/                   # Custom icon components
│
├── lib/                          # Utilities and helpers
│   ├── utils.ts                 # Common utilities
│   └── constants.ts             # App constants
│
├── public/                       # Static assets
│   └── icons/                   # SVG icons
│
├── tokens/                       # Design token overrides
│   └── index.ts                 # Token exports
│
├── spec/                         # Specifications (from _baseline)
│
├── .claude/                      # Claude Code config (auto-generated)
├── .cursor/                      # Cursor IDE config (auto-generated)
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── next.config.js               # Next.js config
└── README.md                     # Project readme
```

---

## Development Principles

### AI-Driven Development

This foundation is optimized for Claude Code workflows:

| Aspect | Configuration |
|--------|---------------|
| **Code Generation** | TypeScript-first, following ai-coding-config rules |
| **Component Creation** | Based on design-system-v2 patterns |
| **Testing** | Vitest with React Testing Library |
| **Git Workflow** | Conscious commits with clear messages |
| **Documentation** | Inline JSDoc + markdown specs |

### Code Standards

Inherited from `ai-coding-config/rules/`:

- **TypeScript Strict Mode** - No implicit any, strict null checks
- **Functional Components** - React Server Components where possible
- **Named Exports** - Explicit exports for better tree-shaking
- **Error Boundaries** - Graceful error handling at boundaries
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support

### Icon-First Design

| Category | Implementation |
|----------|----------------|
| **Action Icons** | Lucide React (primary library) |
| **Status Indicators** | SVG icons with semantic colors |
| **Navigation** | Icon + label combinations |
| **Data Visualization** | Infographic components |
| **Loading States** | Animated SVG spinners |
| **Empty States** | Illustrative line art |

**Prohibited:** Emojis, emoticons, unicode symbols as decorative elements

---

## Foundation Features

### Included in Baseline

| Feature | Description |
|---------|-------------|
| App Shell | Root layout with theme provider |
| Test Page | Single page for stack validation |
| Design Tokens | Color, typography, spacing system |
| Icon System | Lucide React integration |
| Theme Support | Light/dark mode toggle |
| Type Safety | Full TypeScript coverage |
| AI Config | Claude + Cursor configurations |

### Not Included (Add as Needed)

| Feature | Add When |
|---------|----------|
| Authentication | User accounts required |
| Database | Persistent data needed |
| API Routes | Backend logic required |
| State Management | Complex client state |
| CMS | Content management needed |
| Analytics | Usage tracking required |

---

## Phase Overview

### Phase 0: Foundation (This Template)

**Goal:** Establish the minimal working application

**Deliverables:**
- [ ] Next.js project structure
- [ ] Design system integration
- [ ] AI configuration files
- [ ] Single test page
- [ ] Build and development scripts

### Phase 1: Brand Customization

**Goal:** Apply brand identity to the foundation

**Deliverables:**
- [ ] Brand colors and typography
- [ ] Custom iconography
- [ ] Logo and favicon
- [ ] Brand-specific components

### Phase 2: Feature Development

**Goal:** Build application features

**Deliverables:**
- [ ] Feature epics defined
- [ ] Components implemented
- [ ] API routes (if needed)
- [ ] Data layer (if needed)

### Phase 3: Production Readiness

**Goal:** Prepare for deployment

**Deliverables:**
- [ ] Performance optimization
- [ ] SEO configuration
- [ ] Error monitoring
- [ ] CI/CD pipeline

---

## Success Criteria

### Foundation Validation

The baseline is complete when:

| Criterion | Validation |
|-----------|------------|
| **Build Success** | `pnpm build` completes without errors |
| **Type Safety** | `pnpm type-check` passes |
| **Lint Clean** | `pnpm lint` shows no errors |
| **Test Pass** | `pnpm test` executes successfully |
| **Dev Server** | `pnpm dev` serves test page |
| **Icons Render** | Test page displays Lucide icons |
| **Theme Toggle** | Light/dark mode switches correctly |

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3.0s |
| Bundle Size (initial) | < 100KB |

---

## Appendix

### Quick Commands

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Production build
pnpm start            # Start production server

# Quality
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript check
pnpm test             # Run tests

# AI Assistance
claude .              # Open Claude Code
cursor .              # Open Cursor IDE
```

### Related Documents

- [Tech Stack](./architecture/tech-stack.md)
- [Visual Identity](./brand/visual-identity.md)
- [Design Guidelines](./design/GUIDELINES.md)
- [Claude Configuration](./development/CLAUDE.md)
- [Foundation Epic](./epics/epic-00-foundation.md)

---

*Master Plan Version: 1.0.0*
