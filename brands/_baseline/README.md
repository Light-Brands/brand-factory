# Baseline Brand Template

> A clean-slate foundation for creating new brands with Next.js, Node.js, and integrated AI-driven development.

---

## Overview

This is the **baseline template** for all new brand projects. It provides:

- **Clean Next.js + Node.js foundation** - Production-ready stack
- **Auto-embedded AI coding configurations** - Inherited from `ai-coding-config`
- **Design system integration** - Built on `design-system-v2` tokens and components
- **Icon-first visual approach** - Infographics and icons, never emojis
- **Single test page foundation** - Minimal starting point for validation

---

## Quick Start

### 1. Copy This Template

```bash
cp -r brands/_baseline brands/your-brand-name
```

### 2. Customize Brand Identity

Edit the following files to establish your brand:

| File | Purpose |
|------|---------|
| `spec/brand/visual-identity.md` | Colors, typography, iconography |
| `spec/brand/brand-voice.md` | Messaging tone and guidelines |
| `spec/MASTER-PLAN.md` | Vision and roadmap |

### 3. Configure AI Development

The baseline auto-imports AI configurations. Customize in:

| File | Purpose |
|------|---------|
| `spec/development/CLAUDE.md` | Claude Code settings |
| `spec/development/ai-config-integration.md` | Rule and agent imports |

---

## Directory Structure

```
_baseline/
├── README.md                          # This file
├── spec/
│   ├── README.md                      # Spec index with auto-embed references
│   ├── MASTER-PLAN.md                 # Foundation vision and architecture
│   │
│   ├── brand/                         # Brand identity
│   │   └── visual-identity.md         # Icon-first design principles
│   │
│   ├── architecture/                  # Technical foundation
│   │   └── tech-stack.md              # Next.js + Node.js specifications
│   │
│   ├── design/                        # UX/UI guidelines
│   │   └── GUIDELINES.md              # Design system integration
│   │
│   ├── development/                   # AI-driven development
│   │   ├── CLAUDE.md                  # Claude Code configuration
│   │   └── ai-config-integration.md   # Auto-embed manifest
│   │
│   ├── operations/                    # DevOps and monitoring
│   │   └── README.md                  # Operations placeholder
│   │
│   └── epics/                         # Feature specifications
│       └── epic-00-foundation.md      # Foundation with test page
│
└── app/                               # Application code (generated)
```

---

## Design Philosophy

### Icon-First Visual Language

This template enforces a professional, clean aesthetic:

| Use | Avoid |
|-----|-------|
| SVG icons from Lucide, Heroicons, or Phosphor | Emojis in any context |
| Infographics for data visualization | Decorative emoticons |
| Symbolic iconography for actions | Unicode symbols as decoration |
| Line-art illustrations | Cartoon-style graphics |

### Why No Emojis?

- **Consistency** - Icons scale and style uniformly
- **Professionalism** - Appropriate for all brand contexts
- **Accessibility** - Icons support ARIA labels and screen readers
- **Customization** - Icons can be themed to brand colors

---

## Auto-Embedded Configurations

This template automatically inherits from:

### From `ai-coding-config`

- Development rules and coding standards
- Claude commands and agents
- Git interaction patterns
- Testing and observability guidelines

### From `design-system-v2`

- Design tokens (colors, typography, spacing)
- React component library (50+ components)
- Theme system with light/dark modes
- Layout patterns and compositions

See `spec/development/ai-config-integration.md` for the complete manifest.

---

## Version

| Field | Value |
|-------|-------|
| Template Version | 1.0.0 |
| Compatible With | Next.js 14+, Node.js 20+ |
| Design System | design-system-v2 |
| AI Config | ai-coding-config v1.x |

---

*This template is maintained as part of the Brand Factory ecosystem.*
