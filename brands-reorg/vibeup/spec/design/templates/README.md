# Design System Templates

**Version:** 1.0.0 **Last Updated:** 2025-12-12

This folder contains production-ready templates and real-world examples for building
components, pages, hooks, and features in the VIBEUP application.

---

## 📁 Template Files

### Core Templates

These templates provide full boilerplate code ready to be copied and customized:

#### 1. `component-template.tsx`

**Use for:** Creating new React components

**Includes:**

- ✅ TypeScript with proper typing
- ✅ Props interface with JSDoc
- ✅ Framer Motion animations
- ✅ Accessibility features (ARIA, keyboard nav)
- ✅ Multiple variant support
- ✅ Loading states
- ✅ Logging integration
- ✅ Comprehensive documentation

**Quick Start:**

```bash
cp templates/component-template.tsx components/feature/MyComponent.tsx
# Replace ComponentName with MyComponent
# Customize props, styling, and logic
```

---

#### 2. `page-template.tsx`

**Use for:** Creating new Next.js pages

**Includes:**

- ✅ "use client" directive
- ✅ Complete page layout structure
- ✅ Authentication checks
- ✅ Data fetching patterns
- ✅ Search and filtering
- ✅ Loading/error/empty states
- ✅ Responsive design
- ✅ SEO metadata

**Quick Start:**

```bash
cp templates/page-template.tsx app/my-feature/page.tsx
# Update routes, API endpoints, and components
```

---

#### 3. `hook-template.ts`

**Use for:** Creating custom React hooks

**Includes:**

- ✅ Complete CRUD operations
- ✅ Loading and error states
- ✅ Auto-fetch and polling options
- ✅ Optimistic updates
- ✅ Logging and error tracking
- ✅ TypeScript types
- ✅ Memoization

**Quick Start:**

```bash
cp templates/hook-template.ts hooks/use-my-feature.ts
# Replace feature name and customize logic
```

---

#### 4. `utils-template.ts`

**Use for:** Creating utility functions

**Includes:**

- ✅ Formatting utilities (dates, numbers, currency)
- ✅ Validation functions
- ✅ String manipulation
- ✅ Array operations
- ✅ Object utilities
- ✅ Async helpers (retry, delay)
- ✅ Full TypeScript types
- ✅ JSDoc documentation

**Quick Start:**

```bash
cp templates/utils-template.ts utils/my-feature/helpers.ts
# Add or remove functions as needed
```

---

#### 5. `epic-template.md`

**Use for:** Planning new epics/features

**Includes:**

- ✅ Complete epic structure
- ✅ Implementation checklist
- ✅ Phase-by-phase breakdown
- ✅ Design system compliance checklist
- ✅ Testing strategy
- ✅ Security checklist
- ✅ Deployment plan

**Quick Start:**

```bash
cp templates/epic-template.md docs/epic-[number]-feature-name.md
# Fill in all sections as you plan
```

---

## 🎯 Example Files

These are real, production-quality examples from the VIBEUP codebase that demonstrate
best practices:

### `example-community-card.tsx`

**Original:** `components/communities/CommunityCard.tsx`

**Key Patterns Demonstrated:**

- Proper component structure and naming
- Explicit props interface with JSDoc
- Framer Motion staggered animations
- Responsive design (mobile-first)
- Dark mode styling
- Conditional rendering
- Image optimization with Next.js

**What to Learn:**

- How to structure a card component
- Animation patterns for list items
- Badge/status indicator patterns
- Image handling with fallbacks

---

### `example-app-header.tsx`

**Original:** `components/core/app-header.tsx`

**Key Patterns Demonstrated:**

- Complex component with many props
- State management with useState
- AnimatePresence for transitions
- Sticky positioning
- Responsive layout
- Accessibility (ARIA labels)
- Conditional sub-component rendering

**What to Learn:**

- How to build complex navigation components
- Managing multiple UI states
- Responsive header patterns
- Animation coordination

---

### `example-discover-page.tsx`

**Original:** `app/community/discover/page.tsx`

**Key Patterns Demonstrated:**

- Complete page structure with "use client"
- Data fetching with useEffect/useCallback
- Search and filter implementation
- Loading/error/empty states
- Responsive grid layout
- Logging integration
- List animations

**What to Learn:**

- Full page architecture
- Data fetching patterns
- Search/filter UI patterns
- State management in pages

---

## 🚀 Usage Workflow

### Creating a New Component

1. **Copy the template:**

   ```bash
   cp templates/component-template.tsx components/my-feature/MyComponent.tsx
   ```

2. **Review examples:**
   - Read `example-community-card.tsx` for card patterns
   - Read `example-app-header.tsx` for complex components

3. **Customize:**
   - Rename `ComponentName` to `MyComponent`
   - Update props interface
   - Customize styling
   - Add feature-specific logic

4. **Verify compliance:**
   - Check against../design/guidelines.md`
   - Run TypeScript: `npm run type-check`
   - Run linting: `npm run lint`

---

### Creating a New Page

1. **Copy the template:**

   ```bash
   cp templates/page-template.tsx app/my-route/page.tsx
   ```

2. **Review example:**
   - Study `example-discover-page.tsx` for complete implementation

3. **Customize:**
   - Update metadata for SEO
   - Implement data fetching
   - Add components
   - Update routes and navigation

4. **Test:**
   - Loading states
   - Error handling
   - Mobile responsiveness
   - Accessibility

---

### Creating a New Hook

1. **Copy the template:**

   ```bash
   cp templates/hook-template.ts hooks/use-my-feature.ts
   ```

2. **Customize:**
   - Rename function and types
   - Update API endpoints
   - Adjust CRUD operations
   - Configure options

3. **Test:**
   - Write unit tests
   - Test loading states
   - Test error handling

---

### Planning a New Epic

1. **Copy the template:**

   ```bash
   cp templates/epic-template.md docs/epic-[N]-feature-name.md
   ```

2. **Fill in sections:**
   - Problem statement
   - Success criteria
   - Architecture design
   - Implementation checklist
   - Testing strategy

3. **Use as tracking document:**
   - Check off items as completed
   - Update with notes and changes
   - Reference in PRs and commits

---

## 📚 Reference Documentation

All templates and examples are designed to work with:

- *../design/guidelines.md`** - Comprehensive development standards
- *../design/existing-patterns.json`** - Extracted patterns from codebase
- **Workspace Rules** - TypeScript, Git, and coding standards

---

## ✅ Compliance Checklist

Before committing new code, verify:

### Components

- [ ] Follows naming convention (FeatureName + ComponentType)
- [ ] Has explicit props interface with JSDoc
- [ ] Uses `cn()` for className composition
- [ ] Includes proper animations
- [ ] Has ARIA labels and keyboard navigation
- [ ] Supports dark mode

### Pages

- [ ] Has "use client" directive (if interactive)
- [ ] Implements authentication checks
- [ ] Has loading, error, and empty states
- [ ] Uses responsive design patterns
- [ ] Includes SEO metadata

### Hooks

- [ ] Uses TypeScript types
- [ ] Handles errors properly
- [ ] Integrates with logging
- [ ] Memoizes callbacks
- [ ] Documents usage

### Code Quality

- [ ] TypeScript compiles with no errors
- [ ] ESLint passes
- [ ] No `any` types
- [ ] Proper error boundaries
- [ ] Logging statements added

---

## 🎨 Styling Guidelines

### Colors

```typescript
primary: "#04282F"(deep - abyss);
accent: "#97d8c4"(aqua - light);
gold: "#fbbf24";
```

### Layout

```typescript
container: "max-w-6xl mx-auto"
padding: "px-4 py-6"
mobile-nav: "pb-28 sm:pb-24"
```

### Responsive Breakpoints

```yaml
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 🔍 Finding More Examples

To find additional examples in the codebase:

```bash
# Find components
find components -name "*.tsx" | head -10

# Find pages
find app -name "page.tsx" | head -10

# Find hooks
find hooks -name "use-*.ts"

# Find utilities
find utils -name "*.ts"
```

---

## 📖 Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **TypeScript:** https://www.typescriptlang.org/docs/

---

## 🤝 Contributing

When you create a particularly good component, page, or utility:

1. Consider adding it as an example
2. Document key patterns it demonstrates
3. Add usage notes
4. Reference it in this README

---

## 📝 Version History

```yaml
v1.0.0:
  date: 2025-12-12
  changes:
    - Initial templates folder created
    - Added 5 core templates
    - Added 3 real-world examples
    - Added comprehensive README
```

---

**Questions?** Refer to../design/guidelines.md`,../design/codex-usage.md`,
or review the example files.
