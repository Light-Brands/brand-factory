# Light Brands Handoff Protocol

## The Complete Guide to Work Transfer Between Consulting and Development

---

## Purpose

This document defines the formal process for transferring work between Light Brands Consulting and Light Brands Development. The handoff protocol ensures:

1. **Clean boundaries** between client-facing and engineering work
2. **Clear specifications** that eliminate ambiguity
3. **Protected focus** for both divisions
4. **Quality outcomes** through structured processes
5. **Accountability** through documented transfers

---

## Core Principles

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        HANDOFF PRINCIPLES                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. ANONYMITY                                                               │
│     Development never knows client identity                                  │
│     Work is judged on merit, not relationship                               │
│                                                                              │
│  2. SCOPE LOCK                                                              │
│     Once handed off, scope cannot change without new Work Unit              │
│     Prevents scope creep and maintains predictability                       │
│                                                                              │
│  3. COMPLETENESS                                                            │
│     Handoff packages must contain everything needed                         │
│     No back-and-forth for basic information                                 │
│                                                                              │
│  4. TRACEABILITY                                                            │
│     Every transfer is logged and trackable                                  │
│     Clear audit trail for accountability                                    │
│                                                                              │
│  5. QUALITY GATES                                                           │
│     Work cannot transfer without meeting criteria                           │
│     Both directions have quality requirements                               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## The Work Unit

### Definition

A **Work Unit** is the atomic element of work transfer. It represents a single, scoped piece of work that can be completed independently.

### Work Unit Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           WORK UNIT TEMPLATE                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  WORK UNIT ID: WU-[YEAR]-[SEQUENCE]                                         │
│  Example: WU-2026-0147                                                      │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  HEADER                                                              │    │
│  │  ───────────────────────────────────────────────────────────────────│    │
│  │  Title: [Descriptive name of deliverable]                           │    │
│  │  Category: [Identity | Web | AI | Content | Integration | Other]    │    │
│  │  Priority: [Critical | High | Standard | Low]                       │    │
│  │  Tier: [Spark | Ignite | Illuminate | Radiate | Transcend]         │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  SCOPE                                                               │    │
│  │  ───────────────────────────────────────────────────────────────────│    │
│  │  Deliverables:                                                       │    │
│  │  • [Specific item 1]                                                 │    │
│  │  • [Specific item 2]                                                 │    │
│  │  • [Specific item 3]                                                 │    │
│  │                                                                      │    │
│  │  NOT Included:                                                       │    │
│  │  • [Explicit exclusion 1]                                            │    │
│  │  • [Explicit exclusion 2]                                            │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  ACCEPTANCE CRITERIA                                                 │    │
│  │  ───────────────────────────────────────────────────────────────────│    │
│  │  □ [Measurable criterion 1]                                          │    │
│  │  □ [Measurable criterion 2]                                          │    │
│  │  □ [Measurable criterion 3]                                          │    │
│  │  □ [Measurable criterion 4]                                          │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  TECHNICAL REQUIREMENTS                                              │    │
│  │  ───────────────────────────────────────────────────────────────────│    │
│  │  Technology: [Stack requirements if applicable]                      │    │
│  │  Integrations: [Systems to connect with]                            │    │
│  │  Standards: [Specific standards to follow]                          │    │
│  │  Constraints: [Limitations or restrictions]                         │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  TIMELINE                                                            │    │
│  │  ───────────────────────────────────────────────────────────────────│    │
│  │  Handoff Date: [Date]                                               │    │
│  │  Internal Deadline: [Date] (includes buffer)                        │    │
│  │  Client Deadline: [Date]                                            │    │
│  │  Estimated Effort: [Hours/days]                                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  REFERENCES                                                          │    │
│  │  ───────────────────────────────────────────────────────────────────│    │
│  │  Brand Assets: [Link to brand assets]                               │    │
│  │  Related Work Units: [List of related WU IDs]                       │    │
│  │  Inspiration: [Links to reference materials]                        │    │
│  │  Documentation: [Links to relevant docs]                            │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Work Unit Categories

| Category | Description | Typical Deliverables |
|----------|-------------|---------------------|
| **Identity** | Visual brand elements | Logos, colors, typography, guidelines |
| **Web** | Website and web applications | Pages, features, functionality |
| **AI** | AI agent and automation systems | Agents, workflows, integrations |
| **Content** | Written and media content | Copy, documents, media assets |
| **Integration** | System connections | APIs, data pipelines, automations |
| **Other** | Miscellaneous work | Research, audits, analysis |

---

## Handoff Direction 1: Consulting → Development

### Trigger

A Work Unit is ready for handoff when:

1. Client has approved the scope
2. Payment has been received (or payment terms agreed)
3. All reference materials are gathered
4. Acceptance criteria are defined and measurable
5. Timeline is confirmed

### Handoff Package Contents

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONSULTING → DEVELOPMENT PACKAGE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  REQUIRED ELEMENTS                                                          │
│  ─────────────────                                                          │
│                                                                              │
│  ✓ Work Unit Document (complete template above)                             │
│  ✓ Reference Materials                                                      │
│    ├── Brand assets (if applicable)                                         │
│    ├── Existing systems access (if applicable)                              │
│    ├── Inspiration/examples                                                 │
│    └── Previous work unit deliverables (if applicable)                      │
│  ✓ Technical Specifications                                                 │
│    ├── Technology requirements                                              │
│    ├── Integration details                                                  │
│    └── Constraints and limitations                                          │
│                                                                              │
│  NOT INCLUDED (Stripped Information)                                        │
│  ─────────────────────────────────────                                      │
│                                                                              │
│  ✗ Client name                                                              │
│  ✗ Client contact information                                               │
│  ✗ Payment amount or terms                                                  │
│  ✗ Contract details                                                         │
│  ✗ Negotiation history                                                      │
│  ✗ Client communication history                                             │
│  ✗ Client relationship context                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Handoff Checklist

Before transferring to Development, Consulting must verify:

- [ ] Work Unit ID assigned
- [ ] Title is clear and descriptive
- [ ] Category correctly assigned
- [ ] Priority level set
- [ ] All deliverables listed specifically
- [ ] Exclusions clearly stated
- [ ] Every acceptance criterion is measurable
- [ ] Technical requirements documented
- [ ] All integrations specified
- [ ] Deadlines are realistic with buffer
- [ ] All reference materials attached
- [ ] Client information removed
- [ ] Payment confirmed

### Handoff Process

```
Step 1: Consulting creates Work Unit document
           │
           ▼
Step 2: Consulting runs pre-handoff checklist
           │
           ▼
Step 3: Work Unit enters Handoff Queue
           │
           ▼
Step 4: Development reviews for completeness
           │
           ├── If incomplete → Return to Consulting with specific requests
           │
           └── If complete → Accept into Development Queue
                    │
                    ▼
Step 5: Work Unit assigned to engineer(s)
           │
           ▼
Step 6: Status updated to "In Development"
```

---

## Handoff Direction 2: Development → Consulting

### Trigger

A Work Unit is ready for return when:

1. All deliverables are complete
2. All acceptance criteria are met
3. QA process is passed
4. Documentation is complete
5. Deployment instructions provided (if applicable)

### Return Package Contents

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT → CONSULTING PACKAGE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  REQUIRED ELEMENTS                                                          │
│  ─────────────────                                                          │
│                                                                              │
│  ✓ Deliverables                                                             │
│    ├── All files as specified in scope                                      │
│    ├── Organized folder structure                                           │
│    └── Appropriate file formats                                             │
│                                                                              │
│  ✓ Documentation                                                            │
│    ├── Usage instructions                                                   │
│    ├── Technical notes                                                      │
│    └── Known limitations (if any)                                           │
│                                                                              │
│  ✓ QA Report                                                                │
│    ├── Tests passed                                                         │
│    ├── Screenshots/recordings                                               │
│    ├── Accessibility verification                                           │
│    └── Performance metrics                                                  │
│                                                                              │
│  ✓ Deployment Guide (if applicable)                                         │
│    ├── Setup instructions                                                   │
│    ├── Configuration requirements                                           │
│    ├── Environment variables                                                │
│    └── Maintenance notes                                                    │
│                                                                              │
│  ✓ Acceptance Checklist                                                     │
│    └── All criteria marked complete with evidence                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Return Checklist

Before returning to Consulting, Development must verify:

- [ ] All deliverables match scope exactly
- [ ] Every acceptance criterion met with evidence
- [ ] Automated tests passed
- [ ] Manual QA completed
- [ ] Light Guardian review passed (if applicable)
- [ ] Documentation is clear and complete
- [ ] Files organized and properly named
- [ ] Deployment tested (if applicable)
- [ ] No client-specific information included in code/assets
- [ ] Version control properly tagged

### Return Process

```
Step 1: Engineer marks work complete
           │
           ▼
Step 2: Work enters QA queue
           │
           ▼
Step 3: Automated tests run
           │
           ├── If failed → Return to engineer with details
           │
           └── If passed → Continue to manual QA
                    │
                    ▼
Step 4: Manual QA review
           │
           ├── If issues → Return to engineer with details
           │
           └── If passed → Continue to agent review
                    │
                    ▼
Step 5: Light Guardian review (for brand/content work)
           │
           ├── If concerns → Return to engineer with details
           │
           └── If approved → Prepare return package
                    │
                    ▼
Step 6: Return package assembled
           │
           ▼
Step 7: Status updated to "Ready for Delivery"
           │
           ▼
Step 8: Consulting notified of completion
```

---

## Quality Gates

### Gate 1: Pre-Handoff (Consulting → Development)

| Criterion | Check | Owner |
|-----------|-------|-------|
| Scope Complete | All deliverables explicitly listed | Consulting |
| Criteria Measurable | Each criterion can be verified | Consulting |
| References Attached | All needed materials included | Consulting |
| Timeline Realistic | Adequate time for quality work | Consulting |
| Payment Confirmed | Financial obligation met | Consulting |

### Gate 2: Pre-Return (Development → Consulting)

| Criterion | Check | Owner |
|-----------|-------|-------|
| Scope Met | All deliverables present | Development |
| Criteria Verified | Each criterion passed with evidence | Development |
| Tests Passed | Automated checks successful | Development |
| QA Approved | Manual review complete | Development |
| Docs Complete | Usage instructions clear | Development |

### Gate 3: Client Delivery (Consulting)

| Criterion | Check | Owner |
|-----------|-------|-------|
| Package Complete | All materials for client | Consulting |
| Presentation Ready | Demo/walkthrough prepared | Consulting |
| Support Documented | How to get help clear | Consulting |
| Feedback Mechanism | How to request changes | Consulting |

---

## Revision Handling

### Within Original Scope

If client requests changes within the original acceptance criteria:

```
Client Request
      │
      ▼
Consulting assesses → Within scope?
      │
      ├── Yes → Create Revision Request (same Work Unit)
      │         └── Development addresses
      │
      └── No → New Work Unit required
                └── Client informed of additional investment
```

### Revision Request Template

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         REVISION REQUEST                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Original Work Unit: WU-2026-0147                                           │
│  Revision Number: R1                                                        │
│                                                                              │
│  CHANGES REQUESTED                                                          │
│  ─────────────────                                                          │
│  1. [Specific change]                                                       │
│     └── Reason: [Why this is within scope]                                 │
│  2. [Specific change]                                                       │
│     └── Reason: [Why this is within scope]                                 │
│                                                                              │
│  SCOPE VERIFICATION                                                         │
│  ──────────────────                                                         │
│  □ Changes align with original acceptance criteria                          │
│  □ Changes don't add new deliverables                                       │
│  □ Changes don't require significant rework                                 │
│                                                                              │
│  If any box unchecked: NEW WORK UNIT REQUIRED                               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Revision Limits

Standard work units include revision allowances:

| Tier | Revision Rounds Included |
|------|-------------------------|
| Spark | 1 |
| Ignite | 2 |
| Illuminate | 3 |
| Radiate | As defined in SOW |
| Transcend | Unlimited (within reason) |

Beyond included revisions, additional investment required.

---

## Communication Protocol

### Permitted Communication

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COMMUNICATION GUIDELINES                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  CONSULTING → DEVELOPMENT                                                   │
│  ─────────────────────────                                                  │
│  ✓ Work Unit handoff packages                                               │
│  ✓ Clarification requests (via formal channels)                             │
│  ✓ Priority adjustments                                                     │
│  ✓ Timeline updates                                                         │
│  ✓ Revision requests                                                        │
│                                                                              │
│  DEVELOPMENT → CONSULTING                                                   │
│  ─────────────────────────                                                  │
│  ✓ Return packages                                                          │
│  ✓ Clarification questions                                                  │
│  ✓ Status updates                                                           │
│  ✓ Blocker notifications                                                    │
│  ✓ Completion notifications                                                 │
│                                                                              │
│  NOT PERMITTED                                                              │
│  ─────────────                                                              │
│  ✗ Development contacting clients directly                                  │
│  ✗ Consulting making technical decisions                                    │
│  ✗ Side-channel scope discussions                                           │
│  ✗ Informal priority changes                                                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Clarification Process

When Development needs clarification:

```
1. Development submits formal Clarification Request
         │
         ▼
2. Consulting receives notification
         │
         ▼
3. Consulting either:
   ├── Provides answer (if known)
   └── Contacts client for information
         │
         ▼
4. Consulting updates Work Unit with clarification
         │
         ▼
5. Development proceeds
```

### Blocker Protocol

When Development encounters a blocker:

```
BLOCKER IDENTIFIED
        │
        ▼
Development documents:
├── What is blocked
├── Why it's blocked
├── What's needed to unblock
└── Impact on timeline
        │
        ▼
Blocker notification sent to Consulting
        │
        ▼
Consulting assesses and either:
├── Resolves internally
├── Contacts client for resolution
└── Adjusts scope/timeline
        │
        ▼
Resolution documented in Work Unit
        │
        ▼
Development proceeds
```

---

## Status Tracking

### Work Unit Statuses

| Status | Owner | Description |
|--------|-------|-------------|
| **Draft** | Consulting | Being defined |
| **Ready for Handoff** | Consulting | Complete, awaiting transfer |
| **In Review** | Development | Being assessed for completeness |
| **Queued** | Development | Accepted, awaiting assignment |
| **In Progress** | Development | Actively being worked |
| **QA** | Development | In quality assurance |
| **Ready for Delivery** | Consulting | Complete, ready for client |
| **Delivered** | Consulting | Sent to client |
| **In Revision** | Development | Client revisions in progress |
| **Closed** | Consulting | Client accepted, complete |

### Status Flow Diagram

```
                           ┌─────────────────┐
                           │      DRAFT      │
                           └────────┬────────┘
                                    │
                                    ▼
                       ┌────────────────────────┐
                       │  READY FOR HANDOFF     │
                       └───────────┬────────────┘
                                   │
              ┌────────────────────┴─────────────────────┐
              │                                          │
              ▼                                          │
     ┌────────────────┐                                  │
     │   IN REVIEW    │ ─── Incomplete ──────────────────┘
     └───────┬────────┘
             │ Complete
             ▼
     ┌────────────────┐
     │     QUEUED     │
     └───────┬────────┘
             │
             ▼
     ┌────────────────┐
     │  IN PROGRESS   │
     └───────┬────────┘
             │
             ▼
     ┌────────────────┐
     │       QA       │ ─── Failed ───┐
     └───────┬────────┘               │
             │ Passed                  │
             ▼                         │
┌────────────────────────┐            │
│  READY FOR DELIVERY    │            │
└───────────┬────────────┘            │
            │                          │
            ▼                          │
     ┌────────────────┐               │
     │   DELIVERED    │               │
     └───────┬────────┘               │
             │                         │
             ├── Accepted ─────────────┼──►  ┌────────────────┐
             │                         │     │     CLOSED     │
             └── Revisions ───────────►│     └────────────────┘
                                       │
                               ┌───────┴────────┐
                               │  IN REVISION   │
                               └────────────────┘
```

---

## Metrics & Reporting

### Handoff Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Handoff Completeness | 95%+ | % accepted on first submission |
| Clarification Rate | <10% | % requiring clarification |
| Return Completeness | 98%+ | % accepted on first return |
| On-Time Delivery | 95%+ | % delivered by deadline |
| First-Time Acceptance | 85%+ | % client approves without revision |

### Weekly Handoff Report

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    WEEKLY HANDOFF REPORT                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  Week of: [Date]                                                            │
│                                                                              │
│  CONSULTING → DEVELOPMENT                                                   │
│  ├── Work Units Handed Off: X                                               │
│  ├── Accepted First Time: X (Y%)                                            │
│  ├── Returned for Completion: X                                             │
│  └── Average Handoff Quality Score: X/10                                    │
│                                                                              │
│  DEVELOPMENT → CONSULTING                                                   │
│  ├── Work Units Returned: X                                                 │
│  ├── Passed QA First Time: X (Y%)                                           │
│  ├── Returned for Fixes: X                                                  │
│  └── Average Return Quality Score: X/10                                     │
│                                                                              │
│  CLIENT DELIVERY                                                            │
│  ├── Work Units Delivered: X                                                │
│  ├── Accepted First Time: X (Y%)                                            │
│  ├── In Revision: X                                                         │
│  └── Average Client Satisfaction: X/10                                      │
│                                                                              │
│  BLOCKERS & ISSUES                                                          │
│  └── [List any ongoing issues]                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Implementation Notes

### For Solo Operations

When a single person operates both divisions:

1. **Maintain the protocol anyway** - builds good habits for scale
2. **Use separate "hats"** - when working on Consulting tasks, don't think about Development
3. **Document handoffs** - even if handing off to yourself
4. **Track metrics** - identify where the process breaks down

### For Team Operations

When scaling to multiple people:

1. **Clear role assignment** - each person knows their division
2. **Formal handoff reviews** - someone verifies each transfer
3. **Queue management** - transparent prioritization
4. **Regular sync meetings** - address blockers quickly

---

## Appendix: Templates

### Work Unit Template (Markdown)

```markdown
# Work Unit: WU-[YEAR]-[SEQUENCE]

## Header
- **Title:** [Descriptive name]
- **Category:** [Identity | Web | AI | Content | Integration | Other]
- **Priority:** [Critical | High | Standard | Low]
- **Tier:** [Spark | Ignite | Illuminate | Radiate | Transcend]

## Scope

### Deliverables
- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]

### Not Included
- [Exclusion 1]
- [Exclusion 2]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Technical Requirements
- **Technology:** [Requirements]
- **Integrations:** [Systems]
- **Standards:** [Standards]
- **Constraints:** [Limitations]

## Timeline
- **Handoff Date:** [Date]
- **Internal Deadline:** [Date]
- **Client Deadline:** [Date]
- **Estimated Effort:** [Hours/days]

## References
- **Brand Assets:** [Link]
- **Related Work Units:** [WU IDs]
- **Inspiration:** [Links]
- **Documentation:** [Links]
```

### QA Report Template (Markdown)

```markdown
# QA Report: WU-[YEAR]-[SEQUENCE]

## Summary
- **QA Date:** [Date]
- **QA Engineer:** [Name]
- **Result:** [Pass | Fail]

## Automated Tests
| Test | Result | Notes |
|------|--------|-------|
| Lint | Pass/Fail | |
| Types | Pass/Fail | |
| Unit | Pass/Fail | |
| Integration | Pass/Fail | |
| Accessibility | Pass/Fail | |
| Performance | Pass/Fail | |

## Manual Review
- [ ] Design fidelity verified
- [ ] Cross-browser tested
- [ ] Mobile responsive
- [ ] Content accurate
- [ ] Brand consistent

## Agent Review (if applicable)
- [ ] Ethical alignment confirmed
- [ ] Brand integrity verified
- [ ] Message authenticity confirmed

## Issues Found
| Issue | Severity | Resolution |
|-------|----------|------------|
| | | |

## Screenshots/Evidence
[Attach or link]

## Recommendation
[Pass for delivery / Return for fixes]
```

---

*Handoff Protocol Version: 1.0*
*Last Updated: January 2026*
