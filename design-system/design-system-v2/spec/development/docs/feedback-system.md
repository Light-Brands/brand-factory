# Feedback System - Visual Feedback Collection & Management

The Feedback System provides a visual, context-aware way to collect and manage feedback
directly on any page of the design system. Users can click anywhere to leave feedback
with automatic screenshot capture and position tracking.

## Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          FEEDBACK SYSTEM                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  User Interaction          Context Capture           Storage & Management   │
│  ┌─────────────┐          ┌─────────────┐          ┌─────────────┐        │
│  │ Click to    │  ──────► │ Screenshot  │  ──────► │ IndexedDB   │        │
│  │ Leave       │          │ Position    │          │ localStorage│        │
│  │ Feedback    │          │ Section     │          │             │        │
│  └─────────────┘          └─────────────┘          └─────────────┘        │
│                                                             │               │
│                                                             ▼               │
│                                                    ┌─────────────┐        │
│                                                    │  Feedback   │        │
│                                                    │  Dashboard  │        │
│                                                    └─────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Core Concepts

### Feedback Mode

When enabled, the entire page becomes clickable for feedback collection:

1. Click the **feedback button** (floating in bottom-right)
2. Page enters **feedback mode** with visual overlay
3. Click anywhere to capture that location
4. Fill out the feedback form
5. Screenshot is automatically captured

### Feedback Items

Each feedback item contains:

```typescript
interface FeedbackItem {
  id: string;
  pageId: PageId;              // 'dashboard' | 'tracker' | 'showcase' | 'feedback'

  // Location context
  sectionPath: string;         // DOM path to clicked element
  componentName: string;       // React component name if available
  position: { x: number; y: number };  // % of viewport
  textContext: string;         // Nearby text for context

  // Captured media
  screenshot?: string;         // Base64 data URL

  // User input
  category: FeedbackCategory;
  priority: FeedbackPriority;
  title: string;
  notes: string;

  // Status tracking
  status: FeedbackStatus;
  createdAt: string;
  updatedAt: string;
}
```

### Categories

| Category | Icon | Use Case |
|----------|------|----------|
| `bug` | 🐛 | Something isn't working correctly |
| `enhancement` | ✨ | Improvement to existing feature |
| `question` | ❓ | Need clarification or help |
| `design` | 🎨 | Visual/UX feedback |
| `content` | 📝 | Text, copy, or content issues |

### Priorities

| Priority | Color | Description |
|----------|-------|-------------|
| `low` | Blue | Nice to have |
| `medium` | Yellow | Should address |
| `high` | Orange | Important |
| `critical` | Red | Blocking issue |

### Statuses

| Status | Color | Description |
|--------|-------|-------------|
| `new` | Gold | Just submitted |
| `in-progress` | Aqua | Being worked on |
| `resolved` | Teal | Fixed/addressed |
| `blocked` | Red | Blocked by dependency |

## Architecture

### Component Structure

```
design-system-v2/
├── pages/
│   └── Feedback.tsx              # Feedback dashboard page
├── components/
│   └── feedback/
│       ├── FeedbackButton.tsx    # Floating action button
│       ├── FeedbackMode.tsx      # Capture overlay
│       ├── FeedbackModal.tsx     # Submission form
│       ├── FeedbackMarkerLayer.tsx # Visual markers on page
│       ├── FeedbackDetail.tsx    # Detail view modal
│       └── index.ts              # Barrel export
├── contexts/
│   └── FeedbackContext.tsx       # Global state management
├── data/
│   ├── feedbackTypes.ts          # TypeScript types & configs
│   └── feedbackStorage.ts        # IndexedDB storage
└── utils/
    └── feedbackCapture.ts        # Screenshot & context capture
```

### Context API

The `FeedbackContext` provides global state and actions:

```typescript
interface FeedbackContextValue {
  // Items
  items: FeedbackItem[];           // All feedback items
  pageItems: FeedbackItem[];       // Items for current page
  newCount: number;                // Count of new items

  // UI State
  feedbackMode: boolean;           // Is capture mode active
  showMarkers: boolean;            // Are markers visible
  selectedFeedbackId: string | null;
  pendingCapture: CapturedContext | null;
  isModalOpen: boolean;

  // Actions
  toggleFeedbackMode: () => void;
  toggleMarkers: () => void;
  openModal: () => void;
  closeModal: () => void;

  // CRUD Operations
  createFeedback: (data: FeedbackFormData) => Promise<FeedbackItem | null>;
  updateFeedback: (id: string, updates: Partial<FeedbackItem>) => Promise<void>;
  deleteFeedback: (id: string) => Promise<void>;
  refreshItems: () => Promise<void>;

  // Navigation
  navigateToFeedback: (item: FeedbackItem, onNavigate?: (pageId: string) => void) => void;
}
```

### Usage

```typescript
import { useFeedback } from '../contexts/FeedbackContext';

function MyComponent() {
  const {
    feedbackMode,
    toggleFeedbackMode,
    pageItems,
    newCount
  } = useFeedback();

  return (
    <div>
      <span>New feedback: {newCount}</span>
      <button onClick={toggleFeedbackMode}>
        {feedbackMode ? 'Exit' : 'Leave Feedback'}
      </button>
    </div>
  );
}
```

## How It Works

### 1. Entering Feedback Mode

When the user clicks the feedback button:

```typescript
const toggleFeedbackMode = useCallback(() => {
  setFeedbackMode(prev => {
    if (prev) {
      setPendingCapture(null);  // Clear pending capture
    }
    return !prev;
  });
}, []);
```

Visual overlay appears with crosshair cursor.

### 2. Capturing Context

When user clicks in feedback mode:

```typescript
// Captured on click
interface CapturedContext {
  pageId: PageId;
  position: { x: number; y: number };  // Percentage of viewport
  sectionPath: string;                  // e.g., "main > section.hero > div"
  componentName: string;                // React component name
  textContext: string;                  // Nearby text (50 chars)
  screenshot?: string;                  // Full-page screenshot
}
```

### 3. Screenshot Capture

Uses `html2canvas` for screenshot capture:

```typescript
import html2canvas from 'html2canvas';

async function captureScreenshot(): Promise<string> {
  const canvas = await html2canvas(document.body, {
    useCORS: true,
    allowTaint: true,
    logging: false,
  });
  return canvas.toDataURL('image/png');
}
```

### 4. Storage

Feedback is stored in IndexedDB with localStorage fallback:

```typescript
// feedbackStorage.ts
export const feedbackStorage = {
  async create(item: Partial<FeedbackItem>): Promise<FeedbackItem> {
    const newItem = {
      ...item,
      id: `fb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // Store in IndexedDB
    await db.put('feedback', newItem);
    return newItem;
  },

  async getAll(): Promise<FeedbackItem[]> {
    return db.getAll('feedback');
  },

  async update(id: string, updates: Partial<FeedbackItem>): Promise<void> {
    const existing = await db.get('feedback', id);
    await db.put('feedback', { ...existing, ...updates, updatedAt: new Date().toISOString() });
  },
};
```

### 5. Visual Markers

Markers appear on the page at feedback locations:

```typescript
// FeedbackMarkerLayer.tsx
function FeedbackMarkerLayer() {
  const { pageItems, showMarkers, setSelectedFeedback } = useFeedback();

  if (!showMarkers) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {pageItems.map(item => (
        <FeedbackMarker
          key={item.id}
          item={item}
          onClick={() => setSelectedFeedback(item.id)}
        />
      ))}
    </div>
  );
}
```

### 6. Navigation to Feedback

Users can navigate to a feedback item's exact location:

```typescript
const navigateToFeedback = useCallback((item: FeedbackItem, onNavigate?: (pageId: string) => void) => {
  // Navigate to page if different
  if (item.pageId !== currentPageId && onNavigate) {
    onNavigate(item.pageId);
    setTimeout(() => scrollToFeedbackPosition(item), 500);
  } else {
    scrollToFeedbackPosition(item);
  }
}, [currentPageId]);

const scrollToFeedbackPosition = (item: FeedbackItem) => {
  const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const targetY = (item.position.y / 100) * docHeight;

  window.scrollTo({
    top: targetY - window.innerHeight / 3,
    behavior: 'smooth'
  });

  // Flash the marker
  setTimeout(() => {
    const marker = document.querySelector(`[data-feedback-id="${item.id}"]`);
    marker?.classList.add('animate-ping');
  }, 500);
};
```

## Feedback Dashboard

The Feedback page (`pages/Feedback.tsx`) provides:

### Statistics

```typescript
const stats = {
  total: 0,
  new: 0,
  inProgress: 0,
  resolved: 0,
  blocked: 0,
  byCategory: {} as Record<string, number>,
  byPage: {} as Record<string, number>,
};
```

### Filtering

- **Status filter** - New, In Progress, Resolved, Blocked
- **Category filter** - Bug, Enhancement, Question, Design, Content
- **Priority filter** - Low, Medium, High, Critical
- **Page filter** - Dashboard, Tracker, Showcase, etc.
- **Search** - Full-text search in title, notes, section path

### Sorting

Items are sorted by:
1. Status priority (new > blocked > in-progress > resolved)
2. Creation date (newest first)

## Integration with App

The feedback system wraps the entire app:

```typescript
// App.tsx
import { FeedbackProvider } from './contexts/FeedbackContext';
import {
  FeedbackButton,
  FeedbackMode,
  FeedbackModal,
  FeedbackMarkerLayer,
} from './components/feedback';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <FeedbackProvider pageId={activeSection}>
      <div className="flex min-h-screen">
        {/* App content */}
        <main data-page={activeSection}>
          {/* Page content */}
        </main>

        {/* Feedback System Components */}
        <FeedbackButton />
        <FeedbackMode />
        <FeedbackModal />
        <FeedbackMarkerLayer />
      </div>
    </FeedbackProvider>
  );
}
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `ESC` | Exit feedback mode or close modal |

## Best Practices

### For Users

1. **Be specific** - Include enough detail in title/notes
2. **Use categories correctly** - Bug vs enhancement matters for triage
3. **Set appropriate priority** - Reserve "critical" for blocking issues
4. **Include screenshot** - Visual context helps understanding

### For Developers

1. **Check new feedback regularly** - Dashboard shows new count
2. **Update status** - Move items through workflow
3. **Use "Go to" navigation** - Jump to exact location
4. **Reference in commits** - Link feedback ID when fixing

## Data Persistence

### IndexedDB Schema

```typescript
const schema = {
  feedback: {
    keyPath: 'id',
    indexes: [
      { name: 'pageId', keyPath: 'pageId' },
      { name: 'status', keyPath: 'status' },
      { name: 'createdAt', keyPath: 'createdAt' },
    ],
  },
};
```

### Storage Limits

- Screenshots are stored as base64 (can be large)
- Consider periodic cleanup of resolved items
- IndexedDB quota is typically 50% of available disk

## See Also

- [autodev-system.md](autodev-system.md) - AUTODEV monitors feedback patterns
- [tracker-system.md](tracker-system.md) - Link feedback to tasks
- [architecture-summary.md](architecture-summary.md) - Overall architecture
