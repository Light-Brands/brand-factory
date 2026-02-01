# Planning Page for Light Brand Consulting App

## Goal
Add a "Planning" section to the Light Brand Consulting React app that connects to the brands-reorg folder and displays brand documents for all brands in the portfolio.

## App Context
- **Framework**: React 19 SPA with Vite 6.2 (hash-based routing)
- **App location**: `brands-reorg/light-brand-consulting/app/`
- **Brands-reorg location**: `brands-reorg/` (parent of app, outside project root)
- **Styling**: Tailwind CSS via CDN, custom design system
- **No backend** — all data hardcoded in constants

## What We're Building

A new `/#/planning` page with 3 sub-tabs:
1. **Project Planner** — placeholder card ("Coming Soon")
2. **Brand Planner** — placeholder card ("Coming Soon")
3. **Documents** — sidebar + viewer for all brand docs

All brands from brands-reorg (17 total): Buildtrack, Cedar Capital, Cho Ventures AI, Chrono Commune, Earth Weavers, Influex, Lawless AI, Light Brands, Love Token, Neuro Tracker X, Nothing Artificial, Solar AI Accelerator, Sovereignty Series, Transcend Documentary, Transformational Epicenter, Unified Sanctuaries, VibeUp (~334 markdown files total)

---

## Implementation Steps

### Step 1: Install dependencies
```bash
cd brands-reorg/light-brand-consulting/app
npm install react-markdown
npm install -D tsx
```
Add `generate-docs` script to package.json, chain into `dev` and `build`.

### Step 2: Create build-time data generation script
**New file**: `scripts/generate-planning-docs.ts`

Node script (run via `tsx`) that:
- Walks `brands-reorg/` for ALL brand directories with `metadata.json`
- Recursively reads all `.md` files from those brand directories
- Extracts title from first `# ` heading in each file
- Builds a tree structure (folders + files) per brand
- Writes output to `src/data/planning-docs.ts` as typed constants

**Generated types:**
```typescript
interface PlanningDoc { id, fileName, title, relativePath, content }
interface PlanningDocFolder { name, path, type, children[] }
interface PlanningBrand { slug, brandName, description, type, status, tags, councilStatus, docCount, tree[], docs[] }
```

### Step 3: Add icons to Icons.tsx
Add `FolderIcon`, `DocumentIcon`, `ChevronRightIcon` — same SVG pattern as existing icons (stroke-based, `width={size}`, viewBox 0 0 24 24).

### Step 4: Create Tabs component
**New file**: `src/components/Tabs.tsx`

Horizontal tab bar with gold underline on active tab. Props: `tabs[]`, `activeTab`, `onTabChange`. Matches existing design system transitions.

### Step 5: Create MarkdownRenderer component
**New file**: `src/components/MarkdownRenderer.tsx`

Wrapper around `react-markdown` with custom component overrides styled to the design system (headings, links, code blocks, tables, blockquotes all using existing color tokens).

### Step 6: Create Planning page + sub-components
**New files:**
- `src/pages/Planning.tsx` — main page with header + Tabs + tab content switching
- `src/pages/planning/DocumentsTab.tsx` — grid layout: sidebar (brand list + file tree) + document viewer
- `src/pages/planning/DocumentsSidebar.tsx` — brand list with expandable file trees
- `src/pages/planning/FileTree.tsx` — recursive tree renderer for folders/files

**Design**: Uses `wisdom-violet` accent (Tag variant="wisdom") to differentiate from public pages. Placeholders use Card with "Coming Soon" Tag.

**Documents layout**: CSS grid `grid-cols-[280px_1fr]` on desktop, stacked on mobile. Sidebar shows brands as expandable sections with nested file tree. Each brand shows a colored status tag (active, planning, handed-off, needs-review). Clicking a file loads it in the viewer via MarkdownRenderer.

### Step 7: Wire routing + navigation
**Modify these files:**

| File | Change |
|------|--------|
| `src/types.ts` | Add `\| 'planning'` to PageKey union |
| `src/lib/constants.ts` | Add `{ key: 'planning', label: 'Planning', href: '/planning' }` to NAV_ITEMS |
| `src/components/Footer.tsx` | Add `'planning'` to nav array |
| `src/App.tsx` | Add `PlanningPage` import + route case |
| `src/pages/index.ts` | Add `export { default as PlanningPage } from './Planning';` |
| `src/components/index.ts` | Add exports for Tabs, MarkdownRenderer |

---

## File Summary

**New files (8):**
- `scripts/generate-planning-docs.ts`
- `src/data/planning-docs.ts` (auto-generated)
- `src/components/Tabs.tsx`
- `src/components/MarkdownRenderer.tsx`
- `src/pages/Planning.tsx`
- `src/pages/planning/DocumentsTab.tsx`
- `src/pages/planning/DocumentsSidebar.tsx`
- `src/pages/planning/FileTree.tsx`

**Modified files (8):**
- `package.json` (deps + scripts)
- `src/types.ts` (PageKey)
- `src/lib/constants.ts` (NAV_ITEMS)
- `src/components/Footer.tsx` (nav list)
- `src/components/Icons.tsx` (3 new icons)
- `src/components/index.ts` (exports)
- `src/pages/index.ts` (exports)
- `src/App.tsx` (import + route case)

## Implementation Status
**COMPLETED** — All files created and build verified.

## Verification
1. Run `npm run generate-docs` — verify `src/data/planning-docs.ts` has 17 brands
2. Run `npm run dev` — navigate to `/#/planning`
3. Verify all 3 tabs render (Project Planner, Brand Planner show placeholders)
4. Verify Documents tab shows 17 brands in sidebar with status tags
5. Click through documents — markdown renders correctly
6. Check "Planning" appears in header nav and footer
7. Check mobile responsive layout (sidebar collapses)

## Note
This was built for the public-facing SPA at `brands-reorg/light-brand-consulting/app/`. The admin dashboard app (Command Center with sidebar navigation) is a separate application and would need its own integration.
