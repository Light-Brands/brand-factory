# AI Configuration Integration

> Complete manifest for auto-embedding ai-coding-config and design-system-v2 into brand projects.

---

## Overview

This document serves as the integration manifest between brand projects and the centralized configuration sources. It defines exactly what gets imported and how overrides work.

---

## Source Locations

```yaml
sources:
  ai-coding-config:
    path: "@design-system/ai-coding-config"
    absolute: "/home/user/brand-factory/design-system/ai-coding-config"

  design-system-v2:
    path: "@design-system/design-system-v2"
    absolute: "/home/user/brand-factory/design-system/design-system-v2"
```

---

## AI Coding Config Imports

### Rules (Auto-Imported)

| Rule File | Purpose | Always Active |
|-----------|---------|---------------|
| `heart-centered-ai-philosophy.mdc` | Core development philosophy | Yes |
| `conscious-commits.mdc` | Git commit guidelines | Yes |
| `git-interaction.mdc` | Git workflow patterns | Yes |
| `prompt-engineering.mdc` | AI prompt best practices | Yes |
| `typescript-standards.mdc` | TypeScript coding standards | Yes |
| `react-best-practices.mdc` | React patterns | Yes |
| `testing-requirements.mdc` | Testing guidelines | Yes |
| `observability.mdc` | Logging and monitoring | Yes |
| `code-review-checklist.mdc` | Review standards | On Review |

### Agents (Available)

| Agent | Purpose | Activation |
|-------|---------|------------|
| `autonomous-developer` | Independent code generation | On Request |
| `code-reviewer` | Code review automation | On Review |
| `test-engineer` | Test generation and validation | On Test |
| `architecture-auditor` | Architecture validation | On Audit |
| `ux-designer` | UI/UX recommendations | On Design |

### Commands (Registered)

| Command | Description |
|---------|-------------|
| `/ai-coding-config` | Load AI coding configurations |
| `/load-rules` | Load specific rule sets |
| `/review` | Trigger code review |
| `/swarm` | Multi-agent collaboration |

### Personalities (Optional)

| Personality | Style | Use Case |
|-------------|-------|----------|
| `sherlock` | Analytical, detective-like | Debugging |
| `bob-ross` | Gentle, encouraging | Learning |
| `samantha` | Warm, conversational | User-facing |
| `marie-kondo` | Organized, minimalist | Refactoring |
| `ron-swanson` | Direct, efficient | Quick fixes |

---

## Design System v2 Imports

### Design Tokens

| Token File | Contents | Import |
|------------|----------|--------|
| `colors.ts` | 17 color tokens | Required |
| `typography.ts` | Font families, sizes, weights | Required |
| `spacing.ts` | Spacing scale (4px base) | Required |
| `shadows.ts` | Elevation and glow effects | Required |
| `borderRadius.ts` | Border radius scale | Required |

### Token Integration

```typescript
// tokens/index.ts - Brand token override pattern
import {
  colors as baseColors,
  typography as baseTypography,
  spacing,
  shadows,
  borderRadius,
} from '@design-system-v2/tokens';

// Override specific tokens while keeping base
export const colors = {
  ...baseColors,
  primary: {
    main: '{{PRIMARY_COLOR}}',
    light: '{{PRIMARY_COLOR_LIGHT}}',
    dark: '{{PRIMARY_COLOR_DARK}}',
  },
};

export const typography = {
  ...baseTypography,
  fontFamily: {
    sans: ['{{FONT_FAMILY}}', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
};

// Re-export unchanged tokens
export { spacing, shadows, borderRadius };
```

### Components (Available)

#### Core Components

| Component | Purpose | Extension Point |
|-----------|---------|-----------------|
| `Button` | Action triggers | Variants, icons |
| `Card` | Content container | Styles, slots |
| `Input` | Text input | Validation, icons |
| `Textarea` | Multi-line input | Auto-resize |
| `Avatar` | User/entity image | Sizes, fallback |

#### Layout Components

| Component | Purpose | Extension Point |
|-----------|---------|-----------------|
| `Sidebar` | Navigation panel | Items, collapse |
| `Header` | Page header | Logo, nav, actions |
| `Footer` | Page footer | Links, content |
| `IslandNavigation` | Tab navigation | Tabs, indicators |

#### Feedback Components

| Component | Purpose | Extension Point |
|-----------|---------|-----------------|
| `FeedbackMarker` | Inline feedback | Position, content |
| `FeedbackModal` | Modal feedback | Fields, actions |
| `FeedbackButton` | Feedback trigger | Icon, label |

### Component Integration

```typescript
// components/ui/button.tsx - Extend base component
import { Button as BaseButton, type ButtonProps } from '@design-system-v2/components';
import { cn } from '@/lib/cn';

export function Button({ className, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(
        // Brand-specific overrides
        'brand-specific-class',
        className
      )}
      {...props}
    />
  );
}
```

### Specification Templates

| Template | Location | Purpose |
|----------|----------|---------|
| `data-models-template.md` | `spec/architecture/` | Database schema |
| `api-reference-template.md` | `spec/architecture/` | API documentation |
| `service-layer-template.md` | `spec/architecture/` | Business logic |
| `deployment-template.md` | `spec/architecture/` | Infrastructure |
| `visual-identity-template.md` | `spec/brand/` | Brand design |
| `brand-voice-template.md` | `spec/brand/` | Messaging |
| `ai-personality-template.md` | `spec/brand/` | AI character |
| `GUIDELINES.md` | `spec/design/` | Design principles |
| `component-catalog-template.md` | `spec/design/` | Component specs |
| `user-journey-template.md` | `spec/design/` | UX flows |
| `feature-flags-template.md` | `spec/operations/` | Feature toggles |
| `testing-strategy-template.md` | `spec/operations/` | Test planning |
| `observability-template.md` | `spec/operations/` | Monitoring |

---

## Integration Configuration

### .claude/settings.json

```json
{
  "rules": {
    "import": [
      "@ai-coding-config/rules/heart-centered-ai-philosophy.mdc",
      "@ai-coding-config/rules/conscious-commits.mdc",
      "@ai-coding-config/rules/git-interaction.mdc",
      "@ai-coding-config/rules/typescript-standards.mdc",
      "@ai-coding-config/rules/react-best-practices.mdc",
      "@ai-coding-config/rules/testing-requirements.mdc"
    ]
  },
  "agents": {
    "available": [
      "autonomous-developer",
      "code-reviewer",
      "test-engineer"
    ]
  },
  "context": {
    "include": [
      "spec/MASTER-PLAN.md",
      "spec/architecture/tech-stack.md",
      "spec/brand/visual-identity.md"
    ]
  }
}
```

### .cursor/settings.json

```json
{
  "rules": {
    "directory": ".cursor/rules"
  },
  "import": {
    "from": "@ai-coding-config/.cursor/rules",
    "include": [
      "typescript-standards.mdc",
      "react-best-practices.mdc"
    ]
  }
}
```

---

## Resolution Order

When resolving configurations, the following order applies (later overrides earlier):

```
1. design-system-v2 defaults
   └── Base tokens, components, templates

2. ai-coding-config defaults
   └── Rules, agents, commands

3. Brand-specific overrides
   └── tokens/, components/, spec/development/

4. Local development overrides
   └── .env.local, personal settings
```

---

## Sync Commands

### Initial Setup

```bash
# Clone configurations into brand
pnpm dlx ai-coding-config init

# Or manually copy
cp -r @design-system/ai-coding-config/.claude ./.claude
cp -r @design-system/ai-coding-config/.cursor ./.cursor
```

### Update Configurations

```bash
# Pull latest from sources
pnpm dlx ai-coding-config update

# Or manually sync
rsync -av @ai-coding-config/rules/ ./.cursor/rules/
```

### Validate Integration

```bash
# Check configuration validity
pnpm dlx ai-coding-config validate

# Check token consistency
pnpm dlx design-system-v2 check-tokens
```

---

## Customization Guide

### Adding Brand Rules

Create brand-specific rules in `.cursor/rules/`:

```markdown
---
title: "Brand-Specific Rule"
description: "Custom rule for this brand"
glob: "**/*.{ts,tsx}"
---

# Brand-Specific Guidelines

## Custom Pattern
- Brand-specific coding patterns
- Project-specific conventions
```

### Extending Components

```typescript
// components/ui/brand-button.tsx
import { Button } from '@design-system-v2/components';
import { Sparkles } from 'lucide-react';

export function BrandButton(props) {
  return (
    <Button {...props}>
      <Sparkles className="h-4 w-4 mr-2" />
      {props.children}
    </Button>
  );
}
```

### Overriding Tokens

```typescript
// tokens/colors.ts
import { colors as base } from '@design-system-v2/tokens/colors';

export const colors = {
  ...base,
  primary: {
    main: '#YOUR_PRIMARY',
    light: '#YOUR_PRIMARY_LIGHT',
    dark: '#YOUR_PRIMARY_DARK',
  },
};
```

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Rules not loading | Path incorrect | Check `.claude/settings.json` |
| Tokens not applying | Import order | Check token override pattern |
| Components missing | Not exported | Check component index file |
| Agents not available | Not registered | Run `/ai-coding-config` |

---

*Integration Manifest Version: 1.0.0*
