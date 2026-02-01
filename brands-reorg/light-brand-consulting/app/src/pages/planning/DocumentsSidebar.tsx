/**
 * Documents Sidebar Component
 * Brand list with expandable file trees
 */

import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { ChevronRightIcon } from '../../components/Icons';
import Tag from '../../components/Tag';
import { FileTree } from './FileTree';
import type { PlanningBrand } from '../../data/planning-docs';

interface DocumentsSidebarProps {
  brands: PlanningBrand[];
  activeBrandSlug: string | null;
  activeDocPath: string | null;
  onSelectBrand: (slug: string) => void;
  onSelectDoc: (brandSlug: string, relativePath: string) => void;
}

const STATUS_VARIANT: Record<string, 'default' | 'premium' | 'wisdom' | 'success' | 'warning'> = {
  active: 'success',
  planning: 'wisdom',
  'handed-off': 'default',
  'needs-review': 'warning',
};

export const DocumentsSidebar: React.FC<DocumentsSidebarProps> = ({
  brands,
  activeBrandSlug,
  activeDocPath,
  onSelectBrand,
  onSelectDoc,
}) => {
  const [expandedBrands, setExpandedBrands] = useState<Set<string>>(new Set());

  const toggleBrand = (slug: string) => {
    setExpandedBrands((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
    onSelectBrand(slug);
  };

  return (
    <div className="space-y-1">
      {brands.map((brand) => {
        const isExpanded = expandedBrands.has(brand.slug);
        const isActive = activeBrandSlug === brand.slug;

        return (
          <div key={brand.slug}>
            <button
              onClick={() => toggleBrand(brand.slug)}
              className={cn(
                'flex items-center gap-2 w-full text-left px-3 py-2.5 rounded-lg',
                'transition-all duration-200',
                isActive
                  ? 'bg-depth-surface border border-depth-border'
                  : 'hover:bg-depth-surface/50'
              )}
            >
              <ChevronRightIcon
                size={14}
                className={cn(
                  'shrink-0 text-text-muted transition-transform duration-200',
                  isExpanded && 'rotate-90'
                )}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    'text-sm font-medium truncate',
                    isActive ? 'text-text-primary' : 'text-text-secondary'
                  )}>
                    {brand.brandName}
                  </span>
                  <Tag variant={STATUS_VARIANT[brand.status] || 'default'} size="sm">
                    {brand.status}
                  </Tag>
                </div>
                <span className="text-[10px] text-text-muted">
                  {brand.docCount} docs
                </span>
              </div>
            </button>

            {isExpanded && (
              <div className="ml-3 pl-3 border-l border-depth-border mt-1 mb-2">
                <FileTree
                  nodes={brand.tree}
                  activeDocPath={activeDocPath}
                  onSelectDoc={(path) => onSelectDoc(brand.slug, path)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DocumentsSidebar;
