# Brand Scaffold Template

Use this template to bootstrap a new brand with the standard folder structure.

## Usage

1. Copy this entire `brand-scaffold/` directory to `brands/{brand-name}/`
2. Rename all `.template` files by removing the `.template` extension
3. Find and replace `{{BRAND_NAME}}` with the display name (e.g., "My Brand")
4. Find and replace `{{BRAND_SLUG}}` with the kebab-case slug (e.g., "my-brand")
5. Fill in the content for each file
6. Remove any conditional directories that don't apply (e.g., `app/` if no code)
7. Delete `.gitkeep` files once real files exist in those directories

## Structure

```
brand-scaffold/
├── metadata.json.template
├── README.md.template
├── project-plan.md.template
├── spec/
│   ├── README.md.template
│   └── master-plan.md.template
└── (conditional directories created as needed)
```

## Conditional Directories

Create these only when needed:

- `app/` — When the brand has deployable code
- `docs/` — For supplementary documentation
- `content/` — For publishing/media brands
- `handoff/` — For transition documents

## Spec Subdirectories

Create these under `spec/` as content develops:

- `brand/` — Brand identity, voice, visual design
- `architecture/` — Technical design, data models, APIs
- `epics/` — Feature specifications (numbered)
- `phases/` — Phased rollout plans (numbered)
- `design/` — UX/UI specs, design system refs
- `operations/` — Admin, feature flags, testing
- `development/` — AI coding config, dev tooling
- `governance/` — Council integration, decision frameworks
- `resources/` — Risk registers, stakeholder maps
