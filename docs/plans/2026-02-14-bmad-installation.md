# BMAD Method Installation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Install BMAD Method framework at `/tooling/bmad-method/` as shared tooling for all brands

**Architecture:** Official installer creates BMAD installation with 21 agents, 50+ workflows, skills, docs, and tools. Documentation layer guides brand integration. Experimental version in test-brand preserved.

**Tech Stack:** BMAD Method (@alpha), Node.js, npm

---

## Task 1: Run BMAD Installer

**Files:**
- Create: `tooling/bmad-method/` (directory and contents created by installer)

**Step 1: Navigate to project root**

```bash
cd /Users/lawless/Documents/brand-factory
pwd
```

Expected output: `/Users/lawless/Documents/brand-factory`

**Step 2: Run BMAD installer**

```bash
npx bmad-method@alpha install
```

When prompted:
- **Installation directory:** Enter `tooling/bmad-method`
- **Which modules to install:** Select "All" or all available options
- **Configuration options:** Accept defaults (press Enter)

Expected: Installer creates `tooling/bmad-method/` with complete BMAD structure

**Step 3: Verify installation**

```bash
ls -la tooling/bmad-method/
```

Expected output should include:
- `.claude/` directory
- `docs/` directory
- `src/` directory
- `tools/` directory
- `package.json`
- Other BMAD files

**Step 4: Verify skills directory**

```bash
ls -la tooling/bmad-method/.claude/skills/
```

Expected: Directory exists with BMAD skill files

**Step 5: Do NOT commit yet**

Wait until documentation is complete before committing.

---

## Task 2: Create BMAD-USAGE.md Documentation

**Files:**
- Create: `BMAD-USAGE.md` (root level)

**Step 1: Create BMAD-USAGE.md**

```bash
# No test needed - this is documentation
```

**Step 2: Write documentation content**

Create file at `/Users/lawless/Documents/brand-factory/BMAD-USAGE.md`:

```markdown
# Using BMAD Method in Brand Factory

## Quick Start

BMAD Method is installed at `/tooling/bmad-method/` and available to all brands.

**What is BMAD?** Breakthrough Method for Agile AI-Driven Development - an AI-driven framework with 21 specialized agents, 50+ guided workflows, and scale-adaptive intelligence.

## For Claude Code Users

BMAD skills are automatically available when working from the project root. The skills are located in `/tooling/bmad-method/.claude/skills/`.

**Getting Started:**
```bash
# Run this command to see available BMAD workflows
/bmad-help

# Get recommendations for your specific task
/bmad-help What do you suggest I do to get started building a new web application?
```

**Available Tracks:**
- **Quick Flow** - Bug fixes, small features (~10-30 min)
- **BMad Method** - Products and platforms (~30 min - 2 hours)
- **Enterprise** - Compliance-heavy systems (~1-3 hours)

## For Developers

Reference BMAD tools and documentation in your brand code:

**Skills:**
```
/tooling/bmad-method/.claude/skills/
```

**Documentation:**
```
/tooling/bmad-method/docs/
```

**Tools & Utilities:**
```
/tooling/bmad-method/tools/
```

**Source Code:**
```typescript
// Example: Import BMAD utilities in a brand
import { ... } from '../../tooling/bmad-method/src/...'
```

## Architecture

```
brand-factory/
├── tooling/
│   └── bmad-method/           # Shared BMAD (USE THIS)
│       ├── .claude/skills/    # BMAD skills
│       ├── docs/              # Documentation
│       ├── src/               # Source code
│       └── tools/             # CLI tools
└── brands/
    └── test-brand/
        └── .bmad-method/      # Experimental (DO NOT USE)
```

## Production vs Experimental

### `/tooling/bmad-method/` - Production (USE THIS)

- Official installation via npm
- Stable, tested version
- Used by all brands
- Updated from upstream
- **Use this for all production work**

### `brands/test-brand/.bmad-method/` - Experimental (DO NOT USE)

- Sandbox for testing modifications
- May contain breaking changes
- Not synced with upstream
- Isolated from other brands
- **Only for test-brand experiments**

⚠️ **Important:** Always use `/tooling/bmad-method/` for production work. The test-brand version is for experimentation only.

## Updates

### Updating Shared BMAD

```bash
cd tooling/bmad-method
npm update

# Or reinstall from scratch:
npx bmad-method@alpha install
```

### Checking Version

```bash
cd tooling/bmad-method
npm list bmad-method
```

## Modules

BMAD extends with official modules for specialized domains. Current installation includes all core modules. Modules can be added later if needed.

## Support

- **Documentation:** `/tooling/bmad-method/docs/`
- **GitHub:** https://github.com/Light-Brands/bmad-method
- **Website:** https://bmadmethod.com
- **Discord:** https://discord.gg/gk8jAdXWmj

## Next Steps

1. Run `/bmad-help` in Claude Code to see available workflows
2. Explore documentation in `/tooling/bmad-method/docs/`
3. Try a Quick Flow workflow for your next small task
4. Explore BMad Method track for your next feature
```

**Step 3: Verify file created**

```bash
ls -la BMAD-USAGE.md
cat BMAD-USAGE.md | head -20
```

Expected: File exists and contains the documentation

**Step 4: Do NOT commit yet**

Wait until all documentation is complete.

---

## Task 3: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md:14` (after design-system line)

**Step 1: Read current CLAUDE.md**

```bash
cat CLAUDE.md
```

Expected: See current content with Key Directories section

**Step 2: Add BMAD section to CLAUDE.md**

Insert after the `design-system` line (around line 14):

```markdown
## BMAD Method Integration

BMAD Method framework installed at `/tooling/bmad-method/` - 21 specialized agents and 50+ workflows for agile AI development. See `/BMAD-USAGE.md` for details.

- Use `/bmad-help` for workflow recommendations
- Skills auto-discovered from `/tooling/bmad-method/.claude/skills/`
- Experimental version in `brands/test-brand/.bmad-method/` is for testing only
```

The section should be inserted after:
```markdown
- `design-system/` — Shared component library and design tokens
```

And before:
```markdown
## SignNow Integration (Document Signing)
```

**Step 3: Verify the edit**

```bash
cat CLAUDE.md | grep -A 5 "BMAD Method"
```

Expected: See the new BMAD section in the output

**Step 4: Do NOT commit yet**

Wait until .gitignore is updated.

---

## Task 4: Update .gitignore

**Files:**
- Modify: `.gitignore` (add BMAD patterns)

**Step 1: Check if .gitignore exists**

```bash
ls -la .gitignore
```

Expected: File exists or doesn't exist (will create if needed)

**Step 2: Read current .gitignore**

```bash
cat .gitignore 2>/dev/null || echo "No .gitignore found"
```

**Step 3: Add BMAD ignore patterns**

Append to `.gitignore`:

```
# BMAD installations
tooling/bmad-method/node_modules/
brands/*/bmad-method/node_modules/
brands/*/.bmad-method/node_modules/
```

If the file doesn't exist, create it with:

```
# Dependencies
node_modules/

# BMAD installations
tooling/bmad-method/node_modules/
brands/*/bmad-method/node_modules/
brands/*/.bmad-method/node_modules/
```

**Step 4: Verify patterns added**

```bash
cat .gitignore | grep -A 3 "BMAD"
```

Expected: See BMAD section in .gitignore

**Step 5: Do NOT commit yet**

Wait until verification is complete.

---

## Task 5: Verify Installation

**Files:**
- N/A (verification only)

**Step 1: Verify tooling/bmad-method structure**

```bash
ls -la tooling/bmad-method/.claude/skills/ | head -10
```

Expected: See BMAD skill files

**Step 2: Verify package.json exists**

```bash
cat tooling/bmad-method/package.json | grep -E '"name"|"version"'
```

Expected: See BMAD package name and version

**Step 3: Verify docs directory**

```bash
ls -la tooling/bmad-method/docs/
```

Expected: See documentation files

**Step 4: Verify src directory**

```bash
ls -la tooling/bmad-method/src/
```

Expected: See source code directories (bmm, core, utility, etc.)

**Step 5: Verify test-brand experimental version untouched**

```bash
ls -la brands/test-brand/.bmad-method/ | head -5
```

Expected: Existing experimental version still present and unchanged

**Step 6: Check git status**

```bash
git status
```

Expected: See new/modified files:
- `tooling/bmad-method/` (many new files)
- `BMAD-USAGE.md`
- `CLAUDE.md`
- `.gitignore`

---

## Task 6: Commit Installation

**Files:**
- Commit: All BMAD installation files and documentation

**Step 1: Stage BMAD installation files**

```bash
git add tooling/bmad-method/
```

Note: This will add configuration files but NOT node_modules (excluded by .gitignore)

**Step 2: Stage documentation**

```bash
git add BMAD-USAGE.md CLAUDE.md .gitignore
```

**Step 3: Verify staged files**

```bash
git status
```

Expected: See staged files, verify node_modules are NOT staged

**Step 4: Commit with descriptive message**

```bash
git commit -m "$(cat <<'EOF'
Install BMAD Method framework as shared tooling

- Install BMAD at /tooling/bmad-method/ using official installer
- Add BMAD-USAGE.md documentation for brand integration
- Update CLAUDE.md with BMAD section
- Update .gitignore to exclude node_modules
- Preserve test-brand/.bmad-method/ as experimental sandbox

BMAD provides 21 specialized agents, 50+ workflows, and scale-adaptive
intelligence for all 25+ brands.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

**Step 5: Verify commit**

```bash
git log -1 --stat
```

Expected: See commit with all staged files

**Step 6: Verify installation complete**

```bash
echo "✅ BMAD installation complete!"
echo "Run '/bmad-help' in Claude Code to get started"
```

---

## Success Criteria

After completing all tasks:

✅ BMAD installed at `/tooling/bmad-method/`
✅ All modules installed
✅ Skills directory exists: `/tooling/bmad-method/.claude/skills/`
✅ Documentation created: `BMAD-USAGE.md`
✅ CLAUDE.md updated with BMAD section
✅ .gitignore updated to exclude node_modules
✅ test-brand experimental version preserved
✅ Changes committed to git
✅ Ready to use: `/bmad-help` command available

## Post-Installation

**Testing BMAD:**
1. Open Claude Code in brand-factory root
2. Run `/bmad-help` to verify skills are discovered
3. Try a quick workflow to test functionality

**For Brands:**
- Reference `/BMAD-USAGE.md` for integration patterns
- Use `/tooling/bmad-method/` for all production work
- Do NOT use `brands/test-brand/.bmad-method/`

## Troubleshooting

**Skills not discovered:**
- Verify working from project root
- Check `.claude/skills/` exists in `/tooling/bmad-method/`
- Restart Claude Code

**Installation failed:**
- Check Node.js version (requires v20+)
- Verify npm access
- Try running installer with `--verbose` flag

**Path issues:**
- Always reference as `/tooling/bmad-method/` from root
- Brands use relative path: `../../tooling/bmad-method/`
