# Legal Vault

> *The secure repository for all legal documents and agreements.*

---

## Overview

The Legal Vault is the central, authoritative repository for all legal documents within the organization. Every contract, agreement, policy, and legal filing has its home here.

## Structure

```
legal-vault/
├── agreements/             # Executed/signed agreements ONLY
│   ├── ndas/              # Non-disclosure agreements
│   │   └── {entity}/     # Organized by counterparty
│   ├── mou/              # Memoranda of understanding
│   ├── contracts/         # Client and vendor contracts
│   └── partnerships/      # Partnership and JV agreements
│
├── negotiations/           # Active deals in progress
│   └── {entity}/          # Grouped by counterparty
│       ├── reviews/       # NDA reviews, analysis
│       ├── drafts/        # Response drafts, proposals
│       └── correspondence/
│
├── compliance/            # Regulatory and compliance
│   ├── policies/         # Internal policies
│   ├── audits/           # Audit reports and findings
│   └── filings/          # Regulatory filings
│
├── partners/              # Partner contact details
│   ├── _template.md      # Blank template for new partners
│   └── {entity}.md       # One file per partner (business info, banking, contacts)
│
├── intellectual-property/ # IP assets
│   ├── trademarks/       # Trademark registrations
│   └── licenses/         # IP license agreements
│
├── templates/             # Reusable document templates
│
└── archive/               # Expired/terminated documents
```

### Key Principle

**`agreements/`** contains only executed, signed, or binding documents.
Everything else — drafts, reviews, analyses, proposals — belongs in **`negotiations/`** grouped by counterparty.

## Document Naming Convention

```
{type}_{counterparty}_{date}_{status}.{ext}

Components:
- type:        contract, nda, msa, sow, license, amendment, policy, etc.
- counterparty: Company or person name (lowercase, hyphens for spaces)
- date:        YYYY-MM-DD (effective date or signature date)
- status:      draft, pending, signed, executed, expired, terminated
- ext:         pdf, docx, xlsx, etc.
```

### Examples

```
contract_acme-corp_2024-01-15_executed.pdf
nda_jane-smith_2024-02-20_signed.pdf
msa_techservices_2024-03-01_draft.docx
amendment_acme-corp_2024-06-15_executed.pdf
policy_data-retention_2024-01-01_active.pdf
trademark_brand-logo_2024-03-01_registration.pdf
```

## Document Lifecycle

| Status | Description |
|--------|-------------|
| `draft` | Document under preparation or negotiation |
| `pending` | Awaiting signature or approval |
| `signed` | Signed by one party, awaiting countersignature |
| `executed` | Fully signed and effective |
| `active` | For policies and ongoing documents |
| `expired` | Past expiration date |
| `terminated` | Ended before natural expiration |
| `archived` | Moved to long-term storage |

## Access Control

| Role | Contracts | Agreements | Compliance | IP | Templates |
|------|-----------|------------|------------|----|-----------|
| Legal Team | Full | Full | Full | Full | Full |
| Leadership | Read | Read | Read | Read | Read |
| Department Heads | Own dept | Own dept | Policies only | Read | Templates |
| Finance | Vendor/Client | Read | Audits | - | - |
| HR | Employment | NDAs | Policies | - | Templates |

## Filing Procedures

### New Documents

1. Ensure document is final and properly executed
2. Apply naming convention
3. Place in appropriate folder
4. Update Agreement Keeper with metadata
5. Set calendar reminders for key dates

### Amendments

1. Name with reference to original: `amendment_counterparty_date_executed.pdf`
2. File in same folder as original contract
3. Link to original in Agreement Keeper
4. Update key dates if changed

### Expiration/Termination

1. Mark document status as expired/terminated
2. Move to `/archive/` folder after retention review
3. Update Agreement Keeper status
4. Remove calendar reminders

## Retention Schedule

| Document Type | Active Period | Archive Period | Total |
|---------------|---------------|----------------|-------|
| Contracts | Duration + 2 years | 7 years | 9+ years |
| NDAs | Duration + 2 years | 10 years | 12+ years |
| Employment | Termination + 7 years | 7 years | 14+ years |
| IP Filings | Perpetual | N/A | Perpetual |
| Policies | Until superseded + 2 years | 7 years | 9+ years |
| Audits | Completion + 7 years | 3 years | 10 years |

## Search and Retrieval

The Agreement Keeper agent provides search capabilities:

```bash
# Find by counterparty
/legal find "Acme Corp"

# Find by type
/legal find type:contract

# Find expiring soon
/legal find expiring:30days

# Find by value
/legal find value:>100000
```

## Security Requirements

- All documents must be stored in their designated folders
- No documents should be stored outside the Legal Vault
- Sensitive documents require encryption at rest
- Access logs maintained for audit purposes
- Regular backups performed

## Questions?

Contact the Legal Department or invoke the Agreement Keeper agent for assistance.

---

*Managed by the Legal Department Agent Group*
