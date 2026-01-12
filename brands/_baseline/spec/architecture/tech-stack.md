# Baseline Tech Stack

> Next.js and Node.js foundation specifications for clean-slate brand applications.

---

## Overview

This document defines the core technology stack for the baseline template. All technologies are selected for:

- **Production readiness** - Battle-tested in large-scale applications
- **Developer experience** - Excellent tooling and documentation
- **AI compatibility** - Optimized for Claude Code workflows
- **Type safety** - Full TypeScript support
- **Performance** - Fast builds and runtime

---

## Core Stack

### Frontend Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x+ | React framework with App Router |
| **React** | 18.x+ | UI component library |
| **TypeScript** | 5.x+ | Type-safe JavaScript |

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/node": "^20.10.0"
  }
}
```

### Runtime

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 20.x LTS | JavaScript runtime |
| **pnpm** | 8.x+ | Package manager |

### Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.x+ | Utility-first CSS |
| **CSS Variables** | - | Theme tokens |

```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

### Icons

| Technology | Version | Purpose |
|------------|---------|---------|
| **Lucide React** | Latest | Icon library |

```json
{
  "dependencies": {
    "lucide-react": "^0.300.0"
  }
}
```

---

## Project Configuration

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      { "name": "next" }
    ],
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/tokens/*": ["./tokens/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable experimental features as needed
  experimental: {
    // typedRoutes: true,
  },

  // Image optimization domains
  images: {
    domains: [],
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Extend with brand tokens
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Development Tools

### Code Quality

| Tool | Purpose | Configuration |
|------|---------|---------------|
| **ESLint** | Linting | `eslint.config.js` |
| **Prettier** | Formatting | `.prettierrc` |
| **TypeScript** | Type checking | `tsconfig.json` |

```json
{
  "devDependencies": {
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### Testing

| Tool | Purpose | Configuration |
|------|---------|---------------|
| **Vitest** | Unit testing | `vitest.config.ts` |
| **React Testing Library** | Component testing | - |
| **Playwright** | E2E testing (optional) | `playwright.config.ts` |

```json
{
  "devDependencies": {
    "vitest": "^1.2.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.2.0",
    "@vitejs/plugin-react": "^4.2.0"
  }
}
```

### Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

---

## Scripts

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "validate": "pnpm lint && pnpm type-check && pnpm test:run"
  }
}
```

---

## Directory Structure

```
app/
├── layout.tsx           # Root layout
├── page.tsx             # Home page (test page)
├── globals.css          # Global styles
├── not-found.tsx        # 404 page
└── error.tsx            # Error boundary

components/
├── ui/                  # UI primitives
│   ├── button.tsx
│   ├── card.tsx
│   └── index.ts
├── icons/               # Custom icons
│   └── index.ts
└── theme-toggle.tsx     # Dark mode toggle

lib/
├── utils.ts             # Utility functions
├── constants.ts         # App constants
└── cn.ts                # className utility

tokens/
├── colors.ts            # Color tokens
├── typography.ts        # Font tokens
├── spacing.ts           # Spacing scale
└── index.ts             # Token exports

public/
├── favicon.ico
└── icons/               # Static SVG icons

tests/
├── setup.ts             # Test setup
└── components/          # Component tests
```

---

## Environment Variables

### Schema

```typescript
// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_APP_URL: string;
    // Add more as needed
  }
}
```

### Files

| File | Purpose | Git |
|------|---------|-----|
| `.env.local` | Local development | Ignored |
| `.env.example` | Template | Committed |
| `.env.production` | Production vars | Ignored |

```bash
# .env.example
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Performance Targets

### Build Metrics

| Metric | Target |
|--------|--------|
| Build time | < 60s |
| Bundle size (initial) | < 100KB |
| First Load JS | < 150KB |

### Runtime Metrics

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.0s |
| Cumulative Layout Shift | < 0.1 |

---

## Extension Points

### Adding Features

| Feature | Add When | Packages |
|---------|----------|----------|
| **Database** | Persistent data needed | Prisma, Drizzle |
| **Auth** | User accounts needed | NextAuth.js, Clerk |
| **State** | Complex client state | Zustand, Jotai |
| **Forms** | Form handling needed | React Hook Form, Zod |
| **API** | External integrations | Axios, SWR, React Query |
| **CMS** | Content management | Sanity, Contentful |
| **Analytics** | Usage tracking | Vercel Analytics |

### Integration Patterns

```typescript
// Example: Adding Zustand for state
// lib/store.ts
import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));
```

---

## Deployment

### Recommended Platforms

| Platform | Best For |
|----------|----------|
| **Vercel** | Default recommendation |
| **Netlify** | Alternative |
| **AWS Amplify** | AWS ecosystem |
| **Docker** | Custom infrastructure |

### Vercel Configuration

```json
// vercel.json (optional)
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "outputDirectory": ".next"
}
```

---

*Tech Stack Version: 1.0.0*
