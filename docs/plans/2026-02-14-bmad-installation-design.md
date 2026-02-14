# BMAD Method Installation Design

**Date:** 2026-02-14
**Status:** Approved
**Owner:** Brand Factory

## Overview

Install BMAD Method (Breakthrough Method for Agile AI-Driven Development) as shared tooling in brand-factory, making it available to all 25+ brands while preserving the experimental version in test-brand.

## Background

BMAD Method is an AI-driven agile development framework with:
- 21 specialized agents
- 50+ guided workflows
- Scale-adaptive intelligence (Level 0-4)
- Official installer: `npx bmad-method@alpha install`

Currently, `brands/test-brand/.bmad-method/` contains an experimental clone. We need a stable, shared installation for all brands.

## Goals

1. Install BMAD at `/tooling/bmad-method/` as shared infrastructure
2. Make BMAD skills and tools available to all brands
3. Preserve `test-brand/.bmad-method/` as experimental sandbox
4. Follow existing brand-factory tooling patterns (similar to ai-coding-config, signnow)
5. Enable easy updates from upstream

## Installation Approach

### Method: Direct Installation with Documentation

**Rationale:** Clean, maintainable approach that follows official installation without over-engineering.

**Installation Command:**
```bash
cd /Users/lawless/Documents/brand-factory
npx bmad-method@alpha install
```

**Configuration:**
- **Target Directory:** `/tooling/bmad-method`
- **Modules:** All (core + all available modules)
- **Settings:** Accept installer defaults

## Architecture

### Directory Structure

```
brand-factory/
├── tooling/
│   ├── ai-coding-config/      # Existing shared tooling
│   ├── signnow/               # Existing shared tooling
│   └── bmad-method/           # NEW - Shared BMAD installation
│       ├── .claude/
│       │   └── skills/        # BMAD skills available to all brands
│       ├── docs/              # BMAD documentation
│       ├── src/               # BMAD source code (bmm, core, utility)
│       ├── tools/             # BMAD CLI tools
│       ├── package.json       # BMAD dependencies
│       └── [other BMAD files]
├── brands/
│   └── test-brand/
│       └── .bmad-method/      # Experimental sandbox (kept separate)
└── BMAD-USAGE.md              # NEW - Usage documentation
```

### Brand Integration Pattern

Brands access BMAD in two ways:

**1. Via Claude Code Skills**
- Skills in `/tooling/bmad-method/.claude/skills/` auto-discovered by Claude Code
- Available when working from project root
- Invoke with `/bmad-help` or specific workflow commands

**2. Via Direct References**
- Import BMAD tools: `import { ... } from '../../tooling/bmad-method/src/...'`
- Reference documentation: `/tooling/bmad-method/docs/`
- Use CLI tools: `/tooling/bmad-method/tools/`

## Documentation

### Create `/BMAD-USAGE.md`

Root-level guide explaining:
- Where BMAD is installed
- How to use BMAD skills in Claude Code
- How to reference BMAD in brand code
- Difference between shared and experimental versions
- Update procedures

**Content:**
```markdown
# Using BMAD Method in Brand Factory

## Quick Start
BMAD Method is installed at `/tooling/bmad-method/` and available to all brands.

## For Claude Code Users
BMAD skills are automatically available when working from the project root.
Run `/bmad-help` to see available workflows.

## For Brands
Reference BMAD tools and documentation:
- Skills: `/tooling/bmad-method/.claude/skills/`
- Docs: `/tooling/bmad-method/docs/`
- Tools: `/tooling/bmad-method/tools/`

## Experimental Version
`brands/test-brand/.bmad-method/` is a sandbox for testing modifications.
Do NOT use for production work - use `/tooling/bmad-method/` instead.

## Updates
To update BMAD: `cd tooling/bmad-method && npm update`
```

### Update `/CLAUDE.md`

Add BMAD section to "Key Directories":
```markdown
## BMAD Method Integration

BMAD Method framework installed at `/tooling/bmad-method/` - 21 specialized agents and 50+ workflows for agile AI development. See `/BMAD-USAGE.md` for details.

- Use `/bmad-help` for workflow recommendations
- Experimental version in `brands/test-brand/.bmad-method/` is for testing only
```

## Separation of Concerns

### Shared BMAD (`/tooling/bmad-method/`)

**Purpose:** Production-ready, stable version for all brands

**Characteristics:**
- Official installation via npm installer
- Updated from upstream
- Used by all brands
- Committed to git (configuration only, not node_modules)

**Usage:** All brands reference this for production work

### Experimental BMAD (`brands/test-brand/.bmad-method/`)

**Purpose:** Sandbox for testing modifications and extensions

**Characteristics:**
- Forked/modified version
- Changes not pushed upstream
- Isolated from other brands
- Can become custom fork if needed

**Usage:** test-brand experiments and development only

## Maintenance

### Updating Shared BMAD

```bash
cd /tooling/bmad-method
npm update
# Or reinstall from scratch:
npx bmad-method@alpha install
```

### Updating Experimental BMAD

Manual changes only - no upstream sync. This is intentional to preserve experimental modifications.

## Git Considerations

### .gitignore Updates

Ensure these patterns are present:
```
# BMAD installations
tooling/bmad-method/node_modules/
brands/*/bmad-method/node_modules/
```

### What to Commit

**Commit:**
- `/tooling/bmad-method/` configuration files (package.json, .claude/, docs/, etc.)
- `BMAD-USAGE.md`
- Updated `CLAUDE.md`

**Don't Commit:**
- `node_modules/` directories
- Build artifacts
- Temporary files

**Leave as-is:**
- `brands/test-brand/.bmad-method/` (already tracked, keep current state)

## Success Criteria

✅ BMAD installed at `/tooling/bmad-method/`
✅ All modules installed
✅ Skills accessible to Claude Code
✅ Documentation in place (`BMAD-USAGE.md`, updated `CLAUDE.md`)
✅ test-brand experimental version preserved
✅ Changes committed to git

## Future Considerations

- **Per-Brand Customization:** Brands can create `.bmad-config.json` if they need to override defaults
- **Version Pinning:** Consider pinning BMAD version in `/tooling/bmad-method/package.json` for stability
- **CI/CD Integration:** Add BMAD workflow validation to CI pipeline if needed
- **Custom Extensions:** If test-brand experiments prove valuable, promote them to shared tooling

## References

- BMAD Method Repository: https://github.com/Light-Brands/bmad-method
- BMAD Documentation: https://bmadmethod.com
- Installation Guide: README.md in bmad-method repo
