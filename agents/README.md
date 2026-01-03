# AI Agents

> Intelligent, Learning Agents for the AI Brand Factory

This directory contains all agent definitions for automated development, brand building, and strategic operations.

---

## Structure

```
agents/
├── README.md                  # This file
├── INTUITION-ENGINE.md        # Shared intuition engine integration
└── workflow/                  # Automated development workflow agents
    ├── orchestrator.md        # Workflow coordinator
    ├── issue-manager.md       # Issue creation agent
    ├── prep-agent.md          # Environment setup agent
    ├── implementer-agent.md   # Code implementation agent
    ├── reviewer-agent.md      # Code review agent
    ├── fixer-agent.md         # Review fix agent
    ├── validator-agent.md     # Validation & merge agent
    └── closer-agent.md        # Issue closure agent
```

---

## Intuition Engine Integration

All agents in this directory are integrated with the **Intuition Engine**, enabling:

- **Experience-based learning** - Agents learn from every interaction
- **Fast intuition** - Instant pattern recognition from accumulated wisdom
- **Continuous improvement** - Performance improves over time

See [INTUITION-ENGINE.md](./INTUITION-ENGINE.md) for the integration protocol.

---

## Agent Categories

### Workflow Agents

Automated development pipeline from issue to merge. See [workflow/README.md](./workflow/README.md).

```
Issue → Prep → Implement → Review → Fix → Validate → Merge → Close
```

### Future Agent Categories

- **Brand Agents** - Brand creation and management
- **Strategy Agents** - Business strategy and planning
- **Growth Agents** - Marketing and expansion
- **Stewardship Agents** - Governance and sustainability

---

## Design Principles

### 1. Single Responsibility

Each agent has one clear job. Complex tasks are broken into pipelines of specialized agents.

### 2. Explicit Handoffs

Agents communicate via structured handoffs, making coordination transparent and debuggable.

### 3. Continuous Learning

Every action is an episode. Every outcome teaches a lesson. Agents get wiser with use.

### 4. Human-Compatible Reasoning

Agents explain their decisions. Intuition is explicit and auditable.

---

## Creating New Agents

### Agent File Format

```markdown
---
name: agent-name
description: "One-line description"
version: 1.0.0
color: blue
category: workflow|brand|strategy|growth
triggers:
  - "trigger phrase 1"
  - "trigger phrase 2"
---

[Agent personality and role description]

## Core Philosophy

[Guiding principles]

## Intuition Engine Integration

This agent integrates with the Intuition Engine to learn from experience.
See [INTUITION-ENGINE.md](../INTUITION-ENGINE.md) for the integration protocol.

### Domain Lessons

| Trigger Pattern | Lesson Type |
|-----------------|-------------|
| When... | Then... |

## Main Workflow

[Step-by-step process]

## Handoff Protocol

[Input/output format]

## Quality Gates

[Success criteria]
```

### Integration Checklist

- [ ] Clear single responsibility
- [ ] Intuition engine integration section
- [ ] Defined input/output handoffs
- [ ] Quality gates and success criteria
- [ ] Domain-specific lesson examples

---

## Philosophy

> Agents are not just tools — they are learning entities that accumulate wisdom and improve over time.

The combination of specialized agents with shared intuition creates a system that is:

- **Modular** - Easy to understand and modify
- **Robust** - Failures are isolated and recoverable
- **Adaptive** - Performance improves with experience
- **Transparent** - Decisions are explainable
