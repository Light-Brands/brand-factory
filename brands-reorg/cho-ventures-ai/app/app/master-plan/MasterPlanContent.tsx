'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MasterPlanContent({ content }: { content: string }) {
  return (
    <main className="min-h-screen bg-cho-midnight text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ecosystem Map
          </Link>
          <div className="w-px h-6 bg-white/10" />
          <h1 className="text-lg font-semibold text-white/90">Master Plan</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-8 prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-4
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-hub-light
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
          prose-p:text-white/70 prose-p:leading-relaxed
          prose-a:text-hub-light prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-li:text-white/70
          prose-code:text-hub-light prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
          prose-table:border-collapse
          prose-th:bg-white/5 prose-th:text-white/90 prose-th:px-4 prose-th:py-2 prose-th:border prose-th:border-white/10
          prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-white/10 prose-td:text-white/60
          prose-hr:border-white/10
          prose-blockquote:border-hub/40 prose-blockquote:text-white/50
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
