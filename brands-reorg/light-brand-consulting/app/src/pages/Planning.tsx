/**
 * Planning Page
 * Light Brand Consulting
 *
 * Internal planning dashboard with tabs:
 * - Project Planner (coming soon)
 * - Brand Planner (coming soon)
 * - Documents (brand doc viewer)
 */

import React, { useState } from 'react';
import { PageKey } from '../types';
import Tag from '../components/Tag';
import Card from '../components/Card';
import { Tabs } from '../components/Tabs';
import { SparkleIcon } from '../components/Icons';
import { DocumentsTab } from './planning/DocumentsTab';

interface PlanningPageProps {
  onNavigate: (page: PageKey) => void;
}

const PLANNING_TABS = [
  { key: 'documents', label: 'Documents' },
  { key: 'project-planner', label: 'Project Planner' },
  { key: 'brand-planner', label: 'Brand Planner' },
];

export const PlanningPage: React.FC<PlanningPageProps> = ({ onNavigate: _onNavigate }) => {
  const [activeTab, setActiveTab] = useState('documents');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'documents':
        return <DocumentsTab />;
      case 'project-planner':
        return (
          <Card elevation="subtle">
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-wisdom-violet/10 flex items-center justify-center mb-4">
                <SparkleIcon size={28} className="text-wisdom-violet" />
              </div>
              <Tag variant="wisdom" size="sm" className="mb-4">Coming Soon</Tag>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Project Planner
              </h3>
              <p className="text-sm text-text-muted max-w-sm">
                A visual project planning tool for managing brand development timelines,
                milestones, and deliverables.
              </p>
            </div>
          </Card>
        );
      case 'brand-planner':
        return (
          <Card elevation="subtle">
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-wisdom-violet/10 flex items-center justify-center mb-4">
                <SparkleIcon size={28} className="text-wisdom-violet" />
              </div>
              <Tag variant="wisdom" size="sm" className="mb-4">Coming Soon</Tag>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Brand Planner
              </h3>
              <p className="text-sm text-text-muted max-w-sm">
                Strategic brand planning workspace for positioning, identity development,
                and go-to-market strategies.
              </p>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-28 pb-8">
        <div className="container-wide">
          <div className="animate-fade-in">
            <Tag variant="wisdom" className="mb-4">Internal</Tag>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3">
              Brand <span className="text-gradient-ai">Planning</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Browse documentation, plan projects, and manage brand development across the portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="container-wide">
          <Tabs
            tabs={PLANNING_TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="mb-8"
          />
          {renderTabContent()}
        </div>
      </section>
    </div>
  );
};

export default PlanningPage;
