# Brand Factory — Brand Registry

Central index for all brands in the Light Brands ecosystem.

---

## Active Brands

| Brand | Type | Status | App | Spec | Description |
|-------|------|--------|-----|------|-------------|
| [Buildtrack](./buildtrack/) | Platform | Planning | - | Yes | Construction project management platform |
| [Cedar Capital](./cedar-capital/) | Platform | Active | Yes | Yes | Real estate investment platform connecting sellers with investors |
| [Cho Ventures AI](./cho-ventures-ai/) | Platform | Active | Yes | Yes | AI-powered venture consulting and ecosystem platform |
| [Chrono Commune](./chrono-commune/) | Platform | Planning | - | Yes | Community-driven time management and collaboration platform |
| [Earth Weavers](./earth-weavers/) | Spec-Only | Planning | - | Yes | Cultural and ecological partnership initiative |
| [Influex](./influex/) | Platform | Active | Yes | Yes | Elite influencer ecosystem and partnership platform |
| [Lawless AI](./lawless-ai/) | Platform | Planning | Yes | - | Personal AI platform |
| [Light Brand Consulting](./light-brand-consulting/) | Platform | Active | Yes | Yes | AI transformation consulting and brand development platform |
| [Light Brands](./light-brands/) | Spec-Only | Active | - | Yes | Parent brand and AI consulting ecosystem strategy |
| [Love Token](./love-token/) | Platform | Active | Yes | Yes | Love economy platform connecting meditation with community value |
| [Neuro Tracker X](./neuro-tracker-x/) | Platform | Planning | - | Yes | Neuroscience-based tracking platform |
| [Nothing Artificial](./nothing-artificial/) | Platform | Active | Yes | Yes | Authentic AI brand and community platform |
| [Solar AI Accelerator](./solar-ai-accelerator/) | Spec-Only | Planning | - | Yes | Solar energy AI accelerator program |
| [Sovereignty Series](./sovereignty-series/) | Content | Active | - | - | Multi-volume book series on personal sovereignty |
| [Transcend Documentary](./transcend-documentary/) | Platform | Active | Yes | Yes | Documentary project website and platform |
| [Transformational Epicenter](./transformational-epicenter/) | Platform | Planning | - | Yes | Transformational retreat and wellness center platform |
| [Unified Sanctuaries](./unified-sanctuaries/) | Platform | Active | Yes | Yes | Community land project and intentional living platform |
| [Vibeup](./vibeup/) | Platform | Handed-Off | Yes | Yes | Conscious social platform for wellness seekers and practitioners |

**Total: 18 brands** (10 active, 6 planning, 1 handed-off, 1 content)

---

## Standard Brand Structure

Every brand folder follows this canonical structure:

```
brands/{brand-name}/
├── metadata.json              # REQUIRED - Brand registry metadata
├── README.md                  # REQUIRED - Brand overview + navigation
├── project-plan.md            # REQUIRED - Development roadmap
│
├── spec/                      # REQUIRED - All specifications
│   ├── README.md              # Navigation hub for spec/
│   ├── master-plan.md         # Comprehensive spec document
│   ├── brand/                 # Brand identity, voice, visual design
│   ├── architecture/          # Technical design, data models, APIs
│   ├── epics/                 # Feature specifications (numbered)
│   ├── phases/                # Phased rollout plans (numbered)
│   ├── design/                # UX/UI specs, design system refs
│   ├── operations/            # Admin, feature flags, testing
│   ├── development/           # AI coding config, dev tooling
│   ├── governance/            # Council integration, decision frameworks
│   └── resources/             # Risk registers, stakeholder maps
│
├── app/                       # CONDITIONAL - Only for brands with code
├── docs/                      # CONDITIONAL - Supplementary docs
├── content/                   # CONDITIONAL - For publishing brands
└── handoff/                   # CONDITIONAL - Transition documents
```

---

## Naming Conventions

- **Folders**: `lowercase-kebab-case` (no underscores, no capitals)
- **Markdown files**: `lowercase-kebab-case.md`
- **Exceptions**: `README.md`, `CLAUDE.md`, `AGENTS.md` (always uppercase)
- **Numbered sequences**: `00-name.md`, `01-name.md`, `02-name.md`
- **No spaces in filenames** — ever
- **metadata.json**: always lowercase

---

## Brand Lifecycle

```
Proposal → Planning → Active → Handed-Off → Archived
```

| Stage | Description |
|-------|-------------|
| **Proposal** | Brand idea submitted to council for evaluation |
| **Planning** | Approved by council, specifications in development |
| **Active** | In active development or operation |
| **Handed-Off** | Transitioned to external team or partner |
| **Paused** | Development temporarily suspended |
| **Archived** | No longer active, retained for reference |

---

## Brand Types

| Type | Description |
|------|-------------|
| **Platform** | Has or will have a deployed application |
| **Spec-Only** | Strategy and specification documents only |
| **Content** | Publishing, media, or content-focused brand |

---

## Creating a New Brand

Use the scaffold template in `proposal-vault/templates/brand-scaffold/` to bootstrap a new brand with the standard structure. See the [template README](../proposal-vault/templates/brand-scaffold/README.md) for instructions.

---

## metadata.json Schema

Every brand's `metadata.json` follows this schema:

```json
{
  "brandName": "Brand Display Name",
  "slug": "brand-name",
  "type": "platform|spec-only|content",
  "status": "active|planning|paused|archived|handed-off",
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp",
  "createdBy": "creator",
  "description": "One-line description",
  "hasPlan": true,
  "hasApp": false,
  "hasIdentity": true,
  "hasSpec": true,
  "tags": ["tag1", "tag2"],
  "councilStatus": "approved|pending|needs-review",
  "originalPlanFile": "path or null",
  "originalIdentityFile": "path or null"
}
```
