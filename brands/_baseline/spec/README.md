# Baseline Specification Index

> Complete specification reference for the baseline brand template with auto-embedded configurations.

---

## Auto-Embed Configuration

This specification automatically inherits configurations from centralized sources. All referenced files are resolved at development time.

### Embedded Sources

```yaml
ai-coding-config:
  source: "@design-system/ai-coding-config"
  auto_import:
    - rules/heart-centered-ai-philosophy.mdc
    - rules/conscious-commits.mdc
    - rules/prompt-engineering.mdc
    - rules/typescript-standards.mdc
    - rules/react-best-practices.mdc
    - rules/testing-requirements.mdc
    - rules/observability.mdc
  agents:
    - autonomous-developer
    - code-reviewer
    - test-engineer
  commands:
    - /ai-coding-config
    - /load-rules
    - /review

design-system-v2:
  source: "@design-system/design-system-v2"
  auto_import:
    tokens:
      - colors.ts
      - typography.ts
      - spacing.ts
      - shadows.ts
      - borderRadius.ts
    components:
      - core/*
      - layout/*
      - feedback/*
    templates:
      - spec/architecture/*-template.md
      - spec/brand/*-template.md
      - spec/design/*-template.md
      - spec/operations/*-template.md
```

---

## Specification Documents

### Core

| Document | Description | Status |
|----------|-------------|--------|
| [MASTER-PLAN.md](./MASTER-PLAN.md) | Foundation vision and architecture | Active |

### Brand Identity

| Document | Description | Status |
|----------|-------------|--------|
| [visual-identity.md](./brand/visual-identity.md) | Icon-first design principles | Active |

### Architecture

| Document | Description | Status |
|----------|-------------|--------|
| [tech-stack.md](./architecture/tech-stack.md) | Next.js + Node.js foundation | Active |

### Design

| Document | Description | Status |
|----------|-------------|--------|
| [GUIDELINES.md](./design/GUIDELINES.md) | Design system integration | Active |

### Development

| Document | Description | Status |
|----------|-------------|--------|
| [CLAUDE.md](./development/CLAUDE.md) | Claude Code configuration | Active |
| [ai-config-integration.md](./development/ai-config-integration.md) | Auto-embed manifest | Active |

### Operations

| Document | Description | Status |
|----------|-------------|--------|
| [README.md](./operations/README.md) | Operations placeholder | Pending |

### Epics

| Document | Description | Status |
|----------|-------------|--------|
| [epic-00-foundation.md](./epics/epic-00-foundation.md) | Foundation with test page | Active |

---

## Configuration Resolution

When building a brand from this template, configurations resolve in this order:

```
1. design-system-v2/tokens/     -> Brand tokens (can override)
2. design-system-v2/components/ -> Component library (extend, don't modify)
3. ai-coding-config/rules/      -> Development standards (inherit all)
4. ai-coding-config/agents/     -> AI agents (selective import)
5. brand-specific/              -> Brand customizations (highest priority)
```

### Override Pattern

To customize inherited configurations:

```typescript
// tokens/colors.ts - Brand override example
import { colors as baseColors } from '@design-system-v2/tokens/colors';

export const colors = {
  ...baseColors,
  primary: {
    ...baseColors.primary,
    main: '#YOUR_BRAND_COLOR',
  },
};
```

---

## Template Variables

Replace these placeholders when creating a new brand:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{BRAND_NAME}}` | Full brand name | "Acme Solutions" |
| `{{BRAND_SLUG}}` | URL-safe identifier | "acme-solutions" |
| `{{PRIMARY_COLOR}}` | Main brand color | "#3B82F6" |
| `{{SECONDARY_COLOR}}` | Secondary color | "#10B981" |
| `{{FONT_FAMILY}}` | Primary typeface | "Inter" |
| `{{ICON_LIBRARY}}` | Icon source | "lucide-react" |

---

## Validation Checklist

Before finalizing a brand specification:

- [ ] All template variables replaced
- [ ] Visual identity configured with icons (no emojis)
- [ ] Tech stack documented
- [ ] Claude configuration customized
- [ ] Foundation epic reviewed
- [ ] Test page specification complete

---

## Cross-References

### Internal

- [Brand Factory Root](../../../README.md)
- [Design System v2](../../../design-system/design-system-v2/README.md)
- [AI Coding Config](../../../design-system/ai-coding-config/README.md)

### Templates

- [Architecture Templates](../../../design-system/design-system-v2/spec/architecture/)
- [Brand Templates](../../../design-system/design-system-v2/spec/brand/)
- [Design Templates](../../../design-system/design-system-v2/spec/design/)

---

*Specification Version: 1.0.0*
