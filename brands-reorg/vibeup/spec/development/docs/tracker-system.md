# Tracker - Development Progress & Architecture Dashboard

The Tracker is a comprehensive development dashboard that visualizes project progress,
task status, API routes, tooling configuration, and system architecture. It provides
a single source of truth for development status across all epics.

## Overview

The Tracker organizes development work into **Epics** - major feature areas that
contain related tasks across multiple categories (tables, endpoints, services,
components, tests, config).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           VIBEUP TRACKER                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │ Overview │  │  Tasks   │  │   TDD    │  │  Routes  │  │ Tooling  │     │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
│       │                                                                     │
│       ▼                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Epic Grid                                                           │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐                │   │
│  │  │ Epic 00 │  │ Epic 01 │  │ Epic 02 │  │ Epic 03 │  ...          │   │
│  │  │ Found.  │  │  Mira   │  │ Humans  │  │Practice │                │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘                │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Tab Structure

### 1. Overview Tab

The Overview tab provides:

- **Stats Summary** - Overall progress percentage, tasks complete, in-progress, blocked
- **Dependency Graph** - Visual representation of epic dependencies
- **Epic Grid** - Card-based view of all epics with progress rings

**Progress Calculation:**

```typescript
function getTotalProgress() {
  const allTasks = getAllTasks();
  const completed = allTasks.filter(t => t.status === 'complete').length;
  return {
    total: allTasks.length,
    completed,
    percentage: (completed / allTasks.length) * 100,
  };
}
```

### 2. Tasks Tab

Comprehensive task list with:

- **Type Filter** - table, endpoint, service, component, test, config
- **Grouped by Epic/Category** - Organized hierarchy
- **Expandable Details** - File paths, acceptance criteria, related tests
- **Status Indicators** - Visual status icons with colors

**Task Types:**

| Type | Icon | Description |
|------|------|-------------|
| `table` | 🗄️ | Database table |
| `endpoint` | 🔌 | API endpoint |
| `service` | ⚙️ | Backend service |
| `component` | 🧩 | React component |
| `test` | 🧪 | Test file/suite |
| `config` | ⚡ | Configuration |

**Task Statuses:**

| Status | Icon | Color |
|--------|------|-------|
| `pending` | ○ | White/30% |
| `in-progress` | ◐ | Gold (animated) |
| `complete` | ● | Aqua |
| `blocked` | ⊘ | Red |

### 3. TDD Tab

Test-Driven Development dashboard showing:

- **Coverage Thresholds** - Target vs actual coverage by layer
- **Test Inventory by Epic** - Expandable list of all tests
- **TDD Cycle Visualization** - Red → Green → Refactor

**Coverage Layers:**

| Layer | Target |
|-------|--------|
| Service Layer | 90% |
| API Routes | 85% |
| Components | 75% |
| Utils & Helpers | 95% |

### 4. Routes Tab

API route documentation with:

- **Epic Filter** - Filter routes by epic
- **Method Colors** - GET (aqua), POST (gold), PUT (teal), DELETE (red)
- **Route Details** - Parameters, request/response bodies, examples
- **Related Resources** - Linked service and test files

**Route Data Structure:**

```typescript
interface RouteData {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  epic: string;
  auth: boolean;

  // Details (expandable)
  params?: RouteParam[];
  requestBody?: string;
  responseBody?: string;
  example?: string;
  relatedService?: string;
  relatedTest?: string;
}
```

### 5. Tooling Tab

Development tooling configuration:

- **Available Commands** - CLI commands with parameters, examples, output
- **AI Agents** - Specialized agents with capabilities and invocation
- **Coding Rules** - Active rules with triggers and key points
- **Config Viewer** - Nested view of actual config file contents

**Command Structure:**

```typescript
interface ToolingCommand {
  name: string;         // e.g., '/commit'
  description: string;
  usage: string;        // CLI syntax
  parameters?: CommandParam[];
  examples?: string[];
  output?: string;
  filePath?: string;    // Path to config file
  configContent?: string;  // Actual file content
}
```

### 6. Architecture Tab

System architecture visualization:

- **Tech Stack** - Frontend, Backend, AI Services breakdown
- **Data Flow** - Browser → React → API → Services → Supabase
- **Database Tables by Epic** - Schema overview
- **External Integrations** - Stripe, Twilio, Claude, Sentry

## Data Model

### Epic Structure

```typescript
interface EpicData {
  epicId: string;       // e.g., 'Epic 00'
  epicName: string;     // e.g., 'Foundation'
  phase: 'Foundation' | 'MVP' | 'Growth';
  dependencies: string[];  // Epic IDs this depends on

  tasks: {
    tables: TrackerTask[];
    endpoints: TrackerTask[];
    services: TrackerTask[];
    components: TrackerTask[];
    tests: TrackerTask[];
    config: TrackerTask[];
  };
}
```

### Task Structure

```typescript
interface TrackerTask {
  id: string;
  epic: string;
  category: string;
  type: TaskType;
  name: string;
  description?: string;
  status: TaskStatus;

  // Expandable details
  filePath?: string;
  acceptanceCriteria?: string[];
  relatedTests?: string[];
  implementation?: string;
}
```

## Epic Dependencies

The dependency graph shows build order:

```
Epic 00: Foundation
         ↓
Epic 01: Mira
         ↓
    ┌────┴────┬────────┬────────┬────────┐
    │         │        │        │        │
Epic 1A   Epic 1B  Epic 02  Epic 03  Epic 05
Crypto    Karma    Humans  Practice  Impact
    │         │        │        │        │
    └────┬────┴────────┴────────┴────────┘
         ↓
    ┌────┴────┐
    │         │
Epic 04   Epic 06
Discovery Business
    │         │
    └────┬────┘
         ↓
Epic 07: Community
         ↓
Epic 08: Monetization
```

**Blocking Logic:**

```typescript
function getEpicStatus(epic: EpicData): EpicStatus {
  // Check if dependencies are complete
  for (const depId of epic.dependencies) {
    const depEpic = epicData.find(e => e.epicId === depId);
    if (depEpic && getEpicStatus(depEpic) !== 'complete') {
      return 'blocked';
    }
  }

  const counts = getEpicTaskCounts(epic);
  if (counts.completed === counts.total) return 'complete';
  if (counts.inProgress > 0) return 'in-progress';
  return 'not-started';
}
```

## Visual Components

### Progress Ring

SVG circular progress indicator:

```typescript
function ProgressRing({ percentage, size = 80, status }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="transform -rotate-90" width={size} height={size}>
      <circle className="stroke-white/10" ... />
      <circle
        className={colorClass[status]}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        ...
      />
    </svg>
  );
}
```

### Status Badge

Color-coded status indicators:

```typescript
const statusConfig = {
  'not-started': { label: 'Not Started', className: 'bg-white/10 text-white/50' },
  'in-progress': { label: 'In Progress', className: 'bg-gold-accent/20 text-gold-accent' },
  'blocked': { label: 'Blocked', className: 'bg-red-500/20 text-red-400' },
  'complete': { label: 'Complete', className: 'bg-aqua-light/20 text-aqua-light' },
};
```

### Expandable Details

Tasks and routes can be expanded to show additional information:

```typescript
const hasDetails = (task: TrackerTask) =>
  task.filePath ||
  task.acceptanceCriteria?.length ||
  task.relatedTests?.length ||
  task.implementation;

// Click to expand
<div onClick={() => canExpand && setExpandedTask(isExpanded ? null : task.id)}>
  {/* Task summary */}
</div>

{isExpanded && (
  <div className="p-4 bg-abyss-mystic/50 border-t-0 rounded-b-xl">
    {/* File path, acceptance criteria, tests, notes */}
  </div>
)}
```

## File Structure

```
design-system-v2/
├── pages/
│   └── Tracker.tsx              # Main tracker page (1187 lines)
└── data/
    └── trackerData.ts           # Epic and task data, helper functions
```

## Data Source

The tracker data is defined in `data/trackerData.ts`:

```typescript
// Epic definitions
export const epicData: EpicData[] = [
  {
    epicId: 'Epic 00',
    epicName: 'Foundation',
    phase: 'Foundation',
    dependencies: [],
    tasks: { ... }
  },
  // ... more epics
];

// Route definitions
export const routeData: RouteData[] = [
  {
    method: 'GET',
    path: '/api/users/:id',
    description: 'Get user by ID',
    epic: 'Epic 00',
    auth: true,
  },
  // ... more routes
];

// Tooling definitions
export const toolingCommands: ToolingCommand[] = [...];
export const toolingAgents: ToolingAgent[] = [...];
export const toolingRules: ToolingRule[] = [...];
```

## Helper Functions

```typescript
// Get all tasks from all epics
export function getAllTasks(): TrackerTask[] {
  return epicData.flatMap(epic =>
    Object.values(epic.tasks).flat()
  );
}

// Get total progress across all epics
export function getTotalProgress() {
  const allTasks = getAllTasks();
  const completed = allTasks.filter(t => t.status === 'complete').length;
  return {
    total: allTasks.length,
    completed,
    percentage: allTasks.length > 0 ? (completed / allTasks.length) * 100 : 0
  };
}

// Get epic status based on task completion and dependencies
export function getEpicStatus(epic: EpicData): EpicStatus {
  // Check dependencies first
  for (const depId of epic.dependencies) {
    const dep = epicData.find(e => e.epicId === depId);
    if (dep && getEpicStatus(dep) !== 'complete') {
      return 'blocked';
    }
  }
  // Then check task status
  // ...
}
```

## Usage

### Accessing the Tracker

Navigate to the Tracker section via the sidebar navigation.

### Filtering Tasks

1. Go to **Tasks** tab
2. Use the type filter buttons (All, Table, Endpoint, etc.)
3. Click on an epic card in Overview to filter to that epic

### Viewing Route Details

1. Go to **Routes** tab
2. Filter by epic using the buttons
3. Click on a route to expand parameters, body, examples

### Viewing Tooling Config

1. Go to **Tooling** tab
2. Expand a command/agent/rule to see details
3. Click "View Config" to see actual file contents

## Integration with Other Systems

### AUTODEV Integration

- AUTODEV can suggest task prioritization based on patterns
- Health metrics may affect which tasks are marked as blocked
- Recommendations can be linked to specific tracker tasks

### Feedback Integration

- Feedback items can reference tracker tasks
- Bug reports can be linked to specific epics/components

## Best Practices

### Updating Task Status

1. Mark tasks as `in-progress` when starting work
2. Update to `complete` only when all acceptance criteria are met
3. Use `blocked` when waiting on dependencies
4. Add implementation notes for context

### Managing Dependencies

1. Complete foundational epics first
2. Check dependency graph before starting new epic
3. Unblock dependent epics by completing blockers

### Route Documentation

1. Document all parameters with types and descriptions
2. Include request/response body examples
3. Link to related service and test files

## See Also

- [autodev-system.md](autodev-system.md) - AI-powered task recommendations
- [feedback-system.md](feedback-system.md) - Link feedback to tasks
- [architecture-summary.md](architecture-summary.md) - Overall architecture
