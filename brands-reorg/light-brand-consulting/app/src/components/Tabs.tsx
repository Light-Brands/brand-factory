/**
 * Tabs Component
 * Light Brand Consulting Design System
 */

import React from 'react';
import { cn } from '../lib/utils';

export interface Tab {
  key: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div className={cn('border-b border-depth-border', className)}>
      <nav className="flex gap-1 -mb-px overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={cn(
              'px-4 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200',
              'border-b-2 focus:outline-none',
              activeTab === tab.key
                ? 'border-radiance-gold text-radiance-gold'
                : 'border-transparent text-text-muted hover:text-text-secondary hover:border-depth-border'
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
