export type EntityCategory = 'hub' | 'research' | 'product' | 'community' | 'authority' | 'impact';
export type EntityStatus = 'active' | 'planned' | 'foundation';

export interface Entity {
  id: string;
  name: string;
  shortName: string;
  category: EntityCategory;
  status: EntityStatus;
  tagline: string;
  description: string;
  location?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  aiApplications?: string[];
  connections: string[];
  icon: string;
}

export interface Connection {
  id: string;
  source: string;
  target: string;
  type: 'primary' | 'secondary' | 'data-flow';
  label?: string;
  bidirectional: boolean;
}

export const entities: Entity[] = [
  {
    id: 'na-hub',
    name: 'Nothing Artificial Hub',
    shortName: 'NAH',
    category: 'hub',
    status: 'planned',
    tagline: 'AI-Powered Command Center',
    description: 'The central nervous system connecting all Nothing Artificial entities. A unified CRM, AI orchestration, content engine, and analytics dashboard that enables seamless cross-entity experiences while maintaining the human-centric philosophy at its core.',
    location: 'Montreal, QC',
    metrics: [
      { label: 'Entities Connected', value: '8+' },
      { label: 'Cross-Entity Intelligence', value: 'Real-time' },
      { label: 'Community Members', value: '25,000+' },
      { label: 'AI Models', value: '10+' },
    ],
    aiApplications: [
      'Unified CRM with cross-entity intelligence',
      'AI-powered lead routing and scoring',
      'Research-to-content pipeline',
      'Real-time analytics dashboard',
      'Cross-entity referral engine',
    ],
    connections: ['cognitive-labs', 'na-intelligence', 'na-chain', 'na-enterprise', 'na-academy', 'research-community', 'publications', 'na-foundation'],
    icon: 'hub',
  },
  {
    id: 'cognitive-labs',
    name: 'Cognitive Labs',
    shortName: 'LABS',
    category: 'research',
    status: 'active',
    tagline: 'Human Cognition Research',
    description: 'The scientific foundation of Nothing Artificial. Research into how humans think, learn, and process information—providing the cognitive science basis for all products and services.',
    location: 'Montreal, QC',
    metrics: [
      { label: 'Research Areas', value: '5+' },
      { label: 'Papers Published', value: '50+' },
      { label: 'University Partners', value: '10+' },
      { label: 'Grants Active', value: '5+' },
    ],
    aiApplications: [
      'Literature discovery and monitoring',
      'Research data analysis',
      'Collaboration matching',
      'Paper summarization',
      'Grant intelligence',
    ],
    connections: ['na-hub', 'na-intelligence', 'na-academy', 'na-foundation', 'publications'],
    icon: 'brain',
  },
  {
    id: 'na-intelligence',
    name: 'NA Intelligence',
    shortName: 'NAI',
    category: 'product',
    status: 'active',
    tagline: 'AI That Enhances Humans',
    description: 'AI-powered tools and products designed to enhance human capabilities, not replace them. Cognitive assistants, decision support tools, and learning amplifiers built on cognitive science principles.',
    location: 'Montreal, QC',
    metrics: [
      { label: 'Products', value: '5+' },
      { label: 'Active Users', value: '10,000+' },
      { label: 'Enhancement Score', value: '3x' },
      { label: 'User Satisfaction', value: '4.5/5' },
    ],
    aiApplications: [
      'Cognitive enhancement tools',
      'Decision support systems',
      'Learning amplification',
      'Attention management',
      'Memory enhancement',
    ],
    connections: ['na-hub', 'cognitive-labs', 'na-enterprise', 'na-academy'],
    icon: 'sparkles',
  },
  {
    id: 'na-chain',
    name: 'NA Chain',
    shortName: 'CHAIN',
    category: 'product',
    status: 'planned',
    tagline: 'Trust Infrastructure',
    description: 'Blockchain-based trust infrastructure for transparency, verifiable credentials, and decentralized identity. Ensuring authenticity and attribution in an AI-augmented world.',
    location: 'Montreal, QC',
    metrics: [
      { label: 'Focus', value: 'Trust & Verification' },
      { label: 'Credentials Issued', value: 'Coming Soon' },
      { label: 'Verification Rate', value: '100%' },
      { label: 'Network', value: 'Global' },
    ],
    aiApplications: [
      'Verification automation',
      'Anomaly detection',
      'Attribution analysis',
      'Identity intelligence',
      'Impact certification',
    ],
    connections: ['na-hub', 'na-academy', 'research-community', 'na-foundation'],
    icon: 'link',
  },
  {
    id: 'na-enterprise',
    name: 'NA Enterprise',
    shortName: 'ENT',
    category: 'product',
    status: 'active',
    tagline: 'Human-Centric AI for Organizations',
    description: 'Enterprise solutions bringing human-centric AI principles to organizations. Consulting, custom implementations, and training programs for ethical AI adoption.',
    location: 'Global',
    metrics: [
      { label: 'Clients', value: '25+' },
      { label: 'Industries', value: '10+' },
      { label: 'Client Retention', value: '90%+' },
      { label: 'NPS', value: '60+' },
    ],
    aiApplications: [
      'Lead qualification and scoring',
      'Proposal generation assistance',
      'Account intelligence',
      'ROI modeling',
      'Implementation support',
    ],
    connections: ['na-hub', 'na-intelligence', 'na-academy', 'publications'],
    icon: 'building',
  },
  {
    id: 'na-academy',
    name: 'NA Academy',
    shortName: 'ACAD',
    category: 'authority',
    status: 'planned',
    tagline: 'Learn Human-Centric AI',
    description: 'The educational platform teaching human-centric AI principles. Courses, certifications, and learning paths for researchers, practitioners, developers, and enterprise leaders.',
    location: 'Digital',
    metrics: [
      { label: 'Courses', value: '10+' },
      { label: 'Target Enrollments', value: '2,500+' },
      { label: 'Certifications', value: '4 Levels' },
      { label: 'Completion Rate', value: '70%+' },
    ],
    aiApplications: [
      'Learning path personalization',
      'AI tutor assistance',
      'Progress prediction',
      'Content recommendations',
      'Certification intelligence',
    ],
    connections: ['na-hub', 'cognitive-labs', 'na-intelligence', 'na-chain', 'research-community'],
    icon: 'graduation',
  },
  {
    id: 'research-community',
    name: 'Research Community',
    shortName: 'COMM',
    category: 'community',
    status: 'planned',
    tagline: 'Connect. Learn. Enhance.',
    description: 'The digital community for researchers, practitioners, and believers in human-centric technology. Forums, events, collaboration, and shared purpose.',
    location: 'Digital',
    metrics: [
      { label: 'Target Members', value: '25,000+' },
      { label: 'Monthly Active', value: '40%+' },
      { label: 'Contribution Rate', value: '20%+' },
      { label: 'Events/Year', value: '100+' },
    ],
    aiApplications: [
      'Member matching',
      'Content curation',
      'Discussion facilitation',
      'Expert recognition',
      'Event recommendations',
    ],
    connections: ['na-hub', 'na-academy', 'na-chain', 'publications', 'na-foundation'],
    icon: 'users',
  },
  {
    id: 'publications',
    name: 'Publications & Media',
    shortName: 'PUB',
    category: 'authority',
    status: 'active',
    tagline: 'Thought Leadership Platform',
    description: 'The thought leadership platform spreading the human-centric AI philosophy. Newsletter, blog, podcasts, speaking engagements, and media presence.',
    location: 'Global',
    metrics: [
      { label: 'Newsletter Subs', value: '50,000+' },
      { label: 'Blog Visitors', value: '100K/mo' },
      { label: 'Speaking/Year', value: '36+' },
      { label: 'Podcast Downloads', value: '100K+' },
    ],
    aiApplications: [
      'Content generation assistance',
      'Newsletter curation',
      'Social content creation',
      'Speaking preparation',
      'Media monitoring',
    ],
    connections: ['na-hub', 'cognitive-labs', 'na-enterprise', 'research-community'],
    icon: 'mic',
  },
  {
    id: 'na-foundation',
    name: 'NA Foundation',
    shortName: 'FND',
    category: 'impact',
    status: 'planned',
    tagline: 'Advancing Human-Centric Tech',
    description: 'The impact organization funding research, supporting open source, and advocating for ethical AI policy. Ensuring the human-centric mission extends beyond commercial success.',
    location: 'Montreal, QC',
    metrics: [
      { label: 'Grants/Year', value: '$500K+' },
      { label: 'Research Funded', value: '20+' },
      { label: 'Open Source Projects', value: '10+' },
      { label: 'Policy Engagements', value: '5+' },
    ],
    aiApplications: [
      'Grant application screening',
      'Impact measurement',
      'Donor intelligence',
      'Research prioritization',
      'Open source triage',
    ],
    connections: ['na-hub', 'cognitive-labs', 'na-chain', 'research-community'],
    icon: 'heart',
  },
];

export const connections: Connection[] = [
  // Hub connections (primary)
  { id: 'hub-labs', source: 'na-hub', target: 'cognitive-labs', type: 'primary', bidirectional: true },
  { id: 'hub-intel', source: 'na-hub', target: 'na-intelligence', type: 'primary', bidirectional: true },
  { id: 'hub-chain', source: 'na-hub', target: 'na-chain', type: 'primary', bidirectional: true },
  { id: 'hub-enterprise', source: 'na-hub', target: 'na-enterprise', type: 'primary', bidirectional: true },
  { id: 'hub-academy', source: 'na-hub', target: 'na-academy', type: 'primary', bidirectional: true },
  { id: 'hub-community', source: 'na-hub', target: 'research-community', type: 'primary', bidirectional: true },
  { id: 'hub-publications', source: 'na-hub', target: 'publications', type: 'primary', bidirectional: true },
  { id: 'hub-foundation', source: 'na-hub', target: 'na-foundation', type: 'primary', bidirectional: true },

  // Research cluster
  { id: 'labs-intel', source: 'cognitive-labs', target: 'na-intelligence', type: 'secondary', label: 'Research → Product', bidirectional: false },
  { id: 'labs-academy', source: 'cognitive-labs', target: 'na-academy', type: 'secondary', label: 'Research → Curriculum', bidirectional: false },
  { id: 'labs-publications', source: 'cognitive-labs', target: 'publications', type: 'secondary', label: 'Research → Content', bidirectional: false },
  { id: 'labs-foundation', source: 'cognitive-labs', target: 'na-foundation', type: 'secondary', bidirectional: true },

  // Product cluster
  { id: 'intel-enterprise', source: 'na-intelligence', target: 'na-enterprise', type: 'secondary', bidirectional: true },
  { id: 'intel-academy', source: 'na-intelligence', target: 'na-academy', type: 'secondary', label: 'Tools for Learning', bidirectional: true },

  // Community cluster
  { id: 'academy-community', source: 'na-academy', target: 'research-community', type: 'secondary', bidirectional: true },
  { id: 'academy-chain', source: 'na-academy', target: 'na-chain', type: 'secondary', label: 'Credentials', bidirectional: false },
  { id: 'community-publications', source: 'research-community', target: 'publications', type: 'secondary', bidirectional: true },
  { id: 'community-chain', source: 'research-community', target: 'na-chain', type: 'secondary', label: 'Reputation', bidirectional: false },

  // Authority cluster
  { id: 'publications-enterprise', source: 'publications', target: 'na-enterprise', type: 'secondary', label: 'Thought Leadership', bidirectional: false },

  // Impact cluster
  { id: 'foundation-community', source: 'na-foundation', target: 'research-community', type: 'secondary', bidirectional: true },
  { id: 'foundation-chain', source: 'na-foundation', target: 'na-chain', type: 'secondary', label: 'Impact Verification', bidirectional: false },

  // Data flows
  { id: 'research-to-product', source: 'cognitive-labs', target: 'na-intelligence', type: 'data-flow', label: 'Insights', bidirectional: false },
  { id: 'community-to-content', source: 'research-community', target: 'publications', type: 'data-flow', label: 'Stories', bidirectional: false },
];

export const categoryLabels: Record<EntityCategory, string> = {
  'hub': 'Central Hub',
  'research': 'Research & Science',
  'product': 'Products & Services',
  'community': 'Community',
  'authority': 'Authority Platform',
  'impact': 'Impact & Foundation',
};

export const categoryColors: Record<EntityCategory, { bg: string; text: string; border: string; glow: string; hex: string }> = {
  'hub': { bg: 'bg-slate-700', text: 'text-slate-100', border: 'border-slate-500', glow: 'shadow-slate-500/50', hex: '#475569' },
  'research': { bg: 'bg-blue-600', text: 'text-blue-100', border: 'border-blue-400', glow: 'shadow-blue-500/50', hex: '#2563eb' },
  'product': { bg: 'bg-emerald-600', text: 'text-emerald-100', border: 'border-emerald-400', glow: 'shadow-emerald-500/50', hex: '#059669' },
  'community': { bg: 'bg-violet-600', text: 'text-violet-100', border: 'border-violet-400', glow: 'shadow-violet-500/50', hex: '#7c3aed' },
  'authority': { bg: 'bg-amber-600', text: 'text-amber-100', border: 'border-amber-400', glow: 'shadow-amber-500/50', hex: '#d97706' },
  'impact': { bg: 'bg-rose-600', text: 'text-rose-100', border: 'border-rose-400', glow: 'shadow-rose-500/50', hex: '#e11d48' },
};

export const iconMap: Record<string, string> = {
  'hub': '🎯',
  'brain': '🧠',
  'sparkles': '✨',
  'link': '🔗',
  'building': '🏢',
  'graduation': '🎓',
  'users': '👥',
  'mic': '🎙️',
  'heart': '❤️',
};
