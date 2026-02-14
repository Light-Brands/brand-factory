# Using BMAD Method in Brand Factory

## Quick Start

BMAD Method is installed at `/tooling/bmad-method/` and available to all brands.

**What is BMAD?** Breakthrough Method for Agile AI-Driven Development - an AI-driven framework with 21 specialized agents, 50+ guided workflows, and scale-adaptive intelligence.

**Version:** 6.0.0-alpha.23
**Installation Date:** 2026-02-14

## Installation Structure

```
tooling/
├── bmad-method/              # Core BMAD installation
│   ├── _config/              # Configuration files
│   ├── _memory/              # Agent memory and state
│   ├── core/                 # Core workflows and agents
│   │   ├── workflows/        # Brainstorming, elicitation, party-mode
│   │   ├── agents/           # Core agents
│   │   ├── tasks/            # Task definitions
│   │   └── resources/        # Templates and helpers
│   ├── bmb/                  # BMB module
│   ├── bmgd/                 # BMGD module
│   ├── bmm/                  # BMM (BMAD Method) module
│   └── cis/                  # CIS module
└── bmad-output/              # Planning and implementation artifacts
    ├── planning-artifacts/   # Generated plans
    └── implementation-artifacts/  # Generated code
```

## Available Workflows

BMAD provides workflows organized by module:

### Core Module Workflows
- **Brainstorming** - Turn ideas into designs and specs
- **Advanced Elicitation** - Deep requirement gathering
- **Party Mode** - Multi-agent collaboration

### BMM (BMAD Method) Module
- Full development lifecycle workflows
- Sprint planning and management
- Architecture and design workflows

### Other Modules
- **BMB** - Backend development workflows
- **BMGD** - General development workflows
- **CIS** - CI/CD and infrastructure workflows

## How to Use BMAD

### Method 1: Direct Workflow Reference

Reference BMAD workflows in your work:

```
# Brainstorming workflow
See: /tooling/bmad-method/core/workflows/brainstorming/workflow.md

# Party mode (multi-agent)
See: /tooling/bmad-method/core/workflows/party-mode/workflow.md
```

### Method 2: Output Artifacts

BMAD generates planning and implementation artifacts:

```
# Planning artifacts
/tooling/bmad-output/planning-artifacts/

# Implementation artifacts
/tooling/bmad-output/implementation-artifacts/
```

## Configuration

BMAD configuration is stored in:

```
/tooling/bmad-method/_config/
```

**Current Settings:**
- User: autod3v
- Language: English
- Output: `/tooling/bmad-output/`

## Architecture

```
brand-factory/
├── tooling/
│   ├── bmad-method/           # Shared BMAD (USE THIS)
│   │   ├── core/              # Core workflows & agents
│   │   ├── bmm/               # BMAD Method module
│   │   └── [other modules]/
│   └── bmad-output/           # Generated artifacts
└── brands/
    └── test-brand/
        └── .bmad-method/      # Experimental (DO NOT USE)
```

## Production vs Experimental

### `/tooling/bmad-method/` - Production (USE THIS)

- Official installation via npx
- Stable, tested version
- Used by all brands
- Shared across all projects
- **Use this for all production work**

### `brands/test-brand/.bmad-method/` - Experimental (DO NOT USE)

- Sandbox for testing modifications
- May contain breaking changes
- Not synced with upstream
- Isolated from other brands
- **Only for test-brand experiments**

⚠️ **Important:** Always use `/tooling/bmad-method/` for production work. The test-brand version is for experimentation only.

## Available Tracks

BMAD provides different tracks based on your project needs:

| Track | Best For | Time to First Story |
|-------|----------|-------------------|
| **Quick Flow** | Bug fixes, small features | ~10-30 minutes |
| **BMad Method** | Products and platforms | ~30 min - 2 hours |
| **Enterprise** | Compliance-heavy systems | ~1-3 hours |

## Updates

### Updating Shared BMAD

```bash
cd tooling/bmad-method
# Check current version
cat _config/core/config.yaml | grep Version

# To update, reinstall:
cd /Users/lawless/Documents/brand-factory
npx bmad-method@alpha install
# When prompted, enter: tooling/bmad-method
```

**Note:** During alpha, updates may require fresh install. See BMAD changelog for version-specific instructions.

## Modules Installed

Current installation includes all core modules:

- ✅ **core** - Essential workflows (brainstorming, elicitation, party-mode)
- ✅ **bmm** - BMAD Method full lifecycle
- ✅ **bmb** - Backend development
- ✅ **bmgd** - General development
- ✅ **cis** - CI/CD and infrastructure

## For Brand Developers

### Referencing BMAD in Brand Code

Brands can reference BMAD resources:

```typescript
// Reference BMAD workflows
import workflow from '../../tooling/bmad-method/core/workflows/brainstorming/workflow.md'

// Use BMAD agents
// See: ../../tooling/bmad-method/core/agents/

// Access resources
// See: ../../tooling/bmad-method/core/resources/
```

### Brand Integration Patterns

**Option 1: Use BMAD workflows directly**
- Reference workflow markdown files
- Follow structured processes
- Generate artifacts to `/tooling/bmad-output/`

**Option 2: Copy and customize**
- Copy workflow to brand directory
- Customize for brand-specific needs
- Keep reference to original in comments

## Support and Resources

- **Documentation:** `/tooling/bmad-method/*/workflows/`
- **Official Docs:** http://docs.bmad-method.org/
- **GitHub:** https://github.com/bmad-code-org/BMAD-METHOD/
- **YouTube:** https://www.youtube.com/@BMadCode
- **Changelog:** https://github.com/bmad-code-org/BMAD-METHOD/blob/main/CHANGELOG.md

## Troubleshooting

**Output folder issues:**
- Default output: `/tooling/bmad-output/`
- Can be configured in `_config/*/config.yaml`
- Ensure write permissions

**Workflow not found:**
- Check module is installed
- Verify path: `/tooling/bmad-method/{module}/workflows/{workflow-name}/`
- See installed modules: `ls -la /tooling/bmad-method/`

**Version compatibility:**
- Current version: 6.0.0-alpha.23
- During alpha, breaking changes may occur
- Check changelog before updating

## Next Steps

1. **Explore workflows:** Browse `/tooling/bmad-method/core/workflows/`
2. **Try brainstorming:** Follow the brainstorming workflow for your next feature
3. **Review agents:** See `/tooling/bmad-method/core/agents/` for available agents
4. **Generate artifacts:** Check `/tooling/bmad-output/` after using workflows

## Philosophy

BMAD believes knowledge should be free and accessible:

- ✅ 100% free and open source
- ✅ No paywalls or gated content
- ✅ No gated Discord channels
- ✅ Everything available to everyone

**Love BMAD?** Star the repo and subscribe to the YouTube channel!
