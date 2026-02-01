/**
 * Markdown Renderer Component
 * Light Brand Consulting Design System
 *
 * Wraps react-markdown with custom component overrides
 * styled to match the design system.
 */

import React from 'react';
import Markdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  return (
    <div className={`prose-custom ${className}`}>
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 mt-8 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3 mt-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-text-primary mb-2 mt-5">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold text-text-secondary mb-2 mt-4">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-text-secondary leading-relaxed mb-4">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-radiance-gold hover:text-radiance-amber underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside pl-5 mb-4 space-y-1 text-text-secondary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside pl-5 mb-4 space-y-1 text-text-secondary">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-radiance-gold/40 pl-4 my-4 text-text-muted italic">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-depth-surface text-radiance-gold px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return (
              <code className="block bg-depth-surface border border-depth-border rounded-brand-card p-4 my-4 text-sm font-mono text-text-secondary overflow-x-auto">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-depth-surface border border-depth-border rounded-brand-card p-4 my-4 overflow-x-auto">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-depth-border rounded-brand-card overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-depth-surface">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left text-xs font-semibold text-text-muted uppercase tracking-wider border-b border-depth-border">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-sm text-text-secondary border-b border-depth-border">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="border-depth-border my-6" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-text-primary">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-text-secondary">{children}</em>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownRenderer;
