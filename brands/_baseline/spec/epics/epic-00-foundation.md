# Epic 00: Foundation

> Establish the minimal viable application foundation with a single test page.

---

## Overview

| Field | Value |
|-------|-------|
| Epic ID | EPIC-00 |
| Title | Foundation |
| Status | Active |
| Priority | P0 - Critical |

---

## Objective

Create the minimal working Next.js application that:

- Validates the technology stack
- Demonstrates design system integration
- Confirms AI configuration setup
- Provides a foundation for feature development

---

## Success Criteria

| Criterion | Validation Command |
|-----------|-------------------|
| Build succeeds | `pnpm build` |
| Type-check passes | `pnpm type-check` |
| Lint passes | `pnpm lint` |
| Dev server runs | `pnpm dev` |
| Test page renders | Browser check |
| Icons display | Visual validation |
| Theme toggles | Click toggle |
| Tests pass | `pnpm test` |

---

## Deliverables

### D1: Project Structure

Create the Next.js project with required directories:

```
{{BRAND_SLUG}}/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── favicon.ico
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── utils.ts
│   └── cn.ts
├── tokens/
│   └── index.ts
├── public/
│   └── icons/
├── tests/
│   └── setup.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── vitest.config.ts
├── .eslintrc.json
└── .prettierrc
```

### D2: Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: '{{BRAND_NAME}}',
  description: '{{BRAND_DESCRIPTION}}',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### D3: Test Page

The foundation test page validates:

- Component rendering
- Icon display
- Theme switching
- Typography
- Color tokens
- Spacing

```tsx
// app/page.tsx
import {
  Check,
  X,
  AlertTriangle,
  Info,
  Home,
  Settings,
  User,
  Bell,
  Search,
  Sun,
  Moon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Foundation Test Page</h1>
          <ThemeToggle />
        </header>

        {/* Status Card */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Check className="h-5 w-5 text-success" />
              Stack Validation
            </h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span>Next.js App Router</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span>TypeScript Strict Mode</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span>Lucide Icons</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span>Design Tokens</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Icon Gallery */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Icon System</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center gap-2">
                <Home className="h-6 w-6" />
                <span className="text-xs text-muted">Home</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Settings className="h-6 w-6" />
                <span className="text-xs text-muted">Settings</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <User className="h-6 w-6" />
                <span className="text-xs text-muted">User</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Bell className="h-6 w-6" />
                <span className="text-xs text-muted">Bell</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Search className="h-6 w-6" />
                <span className="text-xs text-muted">Search</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Indicators */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Status Indicators</h2>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-success">
                <Check className="h-5 w-5" />
                <span>Success</span>
              </div>
              <div className="flex items-center gap-2 text-warning">
                <AlertTriangle className="h-5 w-5" />
                <span>Warning</span>
              </div>
              <div className="flex items-center gap-2 text-error">
                <X className="h-5 w-5" />
                <span>Error</span>
              </div>
              <div className="flex items-center gap-2 text-info">
                <Info className="h-5 w-5" />
                <span>Info</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Button Variants</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Typography Scale</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-4xl font-bold">Display Text</p>
            <p className="text-3xl font-semibold">Heading 1</p>
            <p className="text-2xl font-semibold">Heading 2</p>
            <p className="text-xl font-medium">Heading 3</p>
            <p className="text-base">Body text - the quick brown fox.</p>
            <p className="text-sm text-muted">Secondary text.</p>
            <p className="text-xs text-muted">Caption text.</p>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-sm text-muted py-8 border-t">
          <p>Baseline Foundation v1.0.0</p>
          <p>Icon-first design - No emojis</p>
        </footer>
      </div>
    </main>
  );
}
```

### D4: Theme Toggle Component

```tsx
// components/theme-toggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (systemPrefers ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
```

### D5: Basic UI Components

```tsx
// components/ui/button.tsx
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-white hover:bg-primary/90': variant === 'primary',
            'bg-secondary text-foreground hover:bg-secondary/80': variant === 'secondary',
            'hover:bg-muted': variant === 'ghost',
            'bg-error text-white hover:bg-error/90': variant === 'destructive',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-8 px-3 text-sm': size === 'sm',
            'h-12 px-6': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

```tsx
// components/ui/card.tsx
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card p-6 shadow-sm',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-4 flex gap-2', className)} {...props} />;
}
```

### D6: Utility Functions

```tsx
// lib/cn.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
// lib/utils.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
```

### D7: Test Setup

```tsx
// tests/setup.ts
import '@testing-library/jest-dom';
```

```tsx
// tests/components/button.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');
  });
});
```

---

## Acceptance Tests

### AT-1: Build Validation

```bash
# Should complete without errors
pnpm build

# Expected output includes:
# - Route (app) size information
# - First Load JS size < 150KB
```

### AT-2: Development Server

```bash
# Should start without errors
pnpm dev

# Visit http://localhost:3000
# - Page renders
# - No console errors
```

### AT-3: Visual Validation

Manual checks on test page:

- [ ] Page title displays
- [ ] All icons render (no broken images)
- [ ] Theme toggle switches colors
- [ ] Buttons have correct variants
- [ ] Typography scale is visible
- [ ] No emojis present anywhere

### AT-4: Test Suite

```bash
# Should pass
pnpm test

# Expected: all tests pass
```

---

## Dependencies

### Required Packages

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.300.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/node": "^20.10.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.2.0",
    "vitest": "^1.2.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.2.0",
    "@vitejs/plugin-react": "^4.2.0"
  }
}
```

---

## Notes

- This epic establishes the minimal foundation
- No database, auth, or complex state
- Extend with additional epics as needed
- All UI uses icons, never emojis

---

*Epic 00 Version: 1.0.0*
