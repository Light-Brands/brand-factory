/**
 * Documents Tab Component
 * Grid layout with sidebar (brand list + file tree) and document viewer
 */

import React, { useState, useMemo } from 'react';
import Card from '../../components/Card';
import Tag from '../../components/Tag';
import { MarkdownRenderer } from '../../components/MarkdownRenderer';
import { DocumentsSidebar } from './DocumentsSidebar';
import { DocumentIcon } from '../../components/Icons';
import { PLANNING_BRANDS, PLANNING_BRAND_COUNT, PLANNING_DOC_COUNT } from '../../data/planning-docs';
import type { PlanningBrand, PlanningDoc } from '../../data/planning-docs';

interface DocumentsTabProps {}

export const DocumentsTab: React.FC<DocumentsTabProps> = () => {
  const [activeBrandSlug, setActiveBrandSlug] = useState<string | null>(null);
  const [activeDocPath, setActiveDocPath] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);

  // Find the active document
  const activeDoc = useMemo<PlanningDoc | null>(() => {
    if (!activeBrandSlug || !activeDocPath) return null;
    const brand = PLANNING_BRANDS.find((b: PlanningBrand) => b.slug === activeBrandSlug);
    if (!brand) return null;
    return brand.docs.find((d: PlanningDoc) => d.relativePath === activeDocPath) || null;
  }, [activeBrandSlug, activeDocPath]);

  const activeBrand = useMemo<PlanningBrand | null>(() => {
    if (!activeBrandSlug) return null;
    return PLANNING_BRANDS.find((b: PlanningBrand) => b.slug === activeBrandSlug) || null;
  }, [activeBrandSlug]);

  const handleSelectBrand = (slug: string) => {
    setActiveBrandSlug(slug);
  };

  const handleSelectDoc = (brandSlug: string, relativePath: string) => {
    setActiveBrandSlug(brandSlug);
    setActiveDocPath(relativePath);
    // On mobile, hide sidebar when a doc is selected
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Stats bar */}
      <div className="flex items-center gap-4 mb-6">
        <Tag variant="wisdom" size="sm">{PLANNING_BRAND_COUNT} brands</Tag>
        <Tag variant="default" size="sm">{PLANNING_DOC_COUNT} documents</Tag>
        {/* Mobile toggle */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="md:hidden ml-auto text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          {showSidebar ? 'Show Document' : 'Show Brands'}
        </button>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        {/* Sidebar */}
        <div className={`${showSidebar ? 'block' : 'hidden'} md:block`}>
          <Card elevation="subtle" className="max-h-[calc(100vh-280px)] overflow-y-auto sticky top-24">
            <DocumentsSidebar
              brands={PLANNING_BRANDS}
              activeBrandSlug={activeBrandSlug}
              activeDocPath={activeDocPath}
              onSelectBrand={handleSelectBrand}
              onSelectDoc={handleSelectDoc}
            />
          </Card>
        </div>

        {/* Document viewer */}
        <div className={`${!showSidebar ? 'block' : 'hidden'} md:block`}>
          {activeDoc ? (
            <Card elevation="subtle">
              {/* Doc header */}
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-depth-border">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {activeDoc.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {activeBrand && (
                      <Tag variant="wisdom" size="sm">{activeBrand.brandName}</Tag>
                    )}
                    <span className="text-xs text-text-muted">{activeDoc.relativePath}</span>
                  </div>
                </div>
                {/* Mobile back button */}
                <button
                  onClick={() => setShowSidebar(true)}
                  className="md:hidden text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  &larr; Back
                </button>
              </div>

              {/* Markdown content */}
              <MarkdownRenderer content={activeDoc.content} />
            </Card>
          ) : (
            <Card elevation="subtle">
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-wisdom-violet/10 flex items-center justify-center mb-4">
                  <DocumentIcon size={28} className="text-wisdom-violet" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Select a Document
                </h3>
                <p className="text-sm text-text-muted max-w-sm">
                  Choose a brand from the sidebar and click on a document to view it here.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
