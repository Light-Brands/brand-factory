export type EntityCategory = 'hub' | 'real-estate' | 'regenerative' | 'authority' | 'philanthropy';
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
    id: 'cho-ventures',
    name: 'Cho Ventures',
    shortName: 'CHO',
    category: 'hub',
    status: 'active',
    tagline: 'AI-Powered Command Center',
    description: 'The central nervous system connecting all Cho Ventures entities. A unified CRM, AI orchestration, content engine, and analytics dashboard that enables seamless cross-entity experiences and operational efficiency.',
    location: 'Miami, FL',
    metrics: [
      { label: 'Entities Connected', value: '10+' },
      { label: 'Cross-Entity Intelligence', value: 'Real-time' },
      { label: 'Community Members', value: '10,000+' },
      { label: 'AI Automations', value: '50+' },
    ],
    aiApplications: [
      'Unified CRM with cross-entity intelligence',
      'AI-powered lead routing and scoring',
      'Automated content generation',
      'Real-time analytics dashboard',
      'Cross-entity referral engine',
    ],
    connections: ['metro-1', 'future-of-cities', 'phx-jax', 'climate-hub', 'ccrl', 'chozen-ip', 'book-platform', 'course-platform', 'speaking-media', 'cho-foundation', 'ximena-cho-fund', 'tony-cho-brand'],
    icon: 'hub',
  },
  {
    id: 'metro-1',
    name: 'Metro 1 Commercial',
    shortName: 'M1',
    category: 'real-estate',
    status: 'active',
    tagline: 'Miami\'s Premier Commercial Brokerage',
    description: 'A leading commercial real estate brokerage pioneering regenerative development in Miami\'s urban core. Known for transformative work in Wynwood and beyond.',
    location: 'Miami, FL',
    metrics: [
      { label: 'Transactions', value: '$4B+' },
      { label: 'Experience', value: '25+ Years' },
      { label: 'Team', value: '30+ Agents' },
      { label: 'Markets', value: 'South Florida' },
    ],
    aiApplications: [
      'Lead qualification and scoring',
      'Property-to-client matching',
      'Market intelligence monitoring',
      'Automated follow-up sequences',
      'Cross-entity client referrals',
    ],
    connections: ['cho-ventures', 'future-of-cities', 'climate-hub'],
    icon: 'building',
  },
  {
    id: 'future-of-cities',
    name: 'Future of Cities',
    shortName: 'FoC',
    category: 'real-estate',
    status: 'active',
    tagline: 'ESG Development Consortium',
    description: 'A NewCo IP structure for regenerative placemaking — housing the Regenerative Placemaking Framework, Generation Regeneration book/trademark, a membership platform for developers and urbanists, and a global development pipeline. Multi-city ESG-compliant developments demonstrating how real estate can serve people, planet, and profit.',
    location: 'Multi-City',
    metrics: [
      { label: 'Projects', value: '12+' },
      { label: 'Focus', value: 'Regenerative Placemaking' },
      { label: 'IP', value: 'Framework + Book' },
      { label: 'Expansion', value: 'Global' },
    ],
    aiApplications: [
      'ESG trend analysis and monitoring',
      'Stakeholder communication automation',
      'Sustainability impact reporting',
      'Investor relations personalization',
      'Policy monitoring and alerts',
      'Membership platform engagement',
    ],
    connections: ['cho-ventures', 'metro-1', 'phx-jax', 'climate-hub'],
    icon: 'city',
  },
  {
    id: 'phx-jax',
    name: 'PHX-JAX District',
    shortName: 'PHX',
    category: 'real-estate',
    status: 'active',
    tagline: 'Arts & Innovation Campus',
    description: 'An 8.5-acre mixed-use development in Jacksonville creating a vibrant arts, innovation, and creative workspace campus. Includes affordable housing, Friends of PHXJAX 501(c)(3) for community programming, Bloom Labs coworking/innovation space, and the annual Spring Mural Jam public art event.',
    location: 'Jacksonville, FL',
    metrics: [
      { label: 'Campus Size', value: '8.5 Acres' },
      { label: 'Focus', value: 'Arts & Innovation' },
      { label: 'Type', value: 'Mixed-Use' },
      { label: 'Nonprofit', value: 'Friends of PHXJAX' },
    ],
    aiApplications: [
      'Tenant prospecting and matching',
      'Event marketing automation',
      'Community building facilitation',
      'Space optimization analytics',
      'Predictive maintenance',
      'Affordable housing pipeline tracking',
    ],
    connections: ['cho-ventures', 'future-of-cities'],
    icon: 'warehouse',
  },
  {
    id: 'climate-hub',
    name: 'Climate + Innovation HUB',
    shortName: 'HUB',
    category: 'real-estate',
    status: 'active',
    tagline: 'Miami Climate Tech Incubator',
    description: 'An innovation center in Little Haiti focused on climate tech incubation, startup acceleration, and programming that addresses environmental challenges.',
    location: 'Miami (Little Haiti)',
    metrics: [
      { label: 'Focus', value: 'Climate Tech' },
      { label: 'Startups', value: '50+' },
      { label: 'Programs', value: 'Incubation' },
      { label: 'Impact', value: 'Global' },
    ],
    aiApplications: [
      'Startup screening and evaluation',
      'Mentor-startup matching',
      'Investor matching algorithms',
      'Program personalization',
      'Impact measurement tracking',
    ],
    connections: ['cho-ventures', 'metro-1', 'future-of-cities', 'cho-foundation'],
    icon: 'leaf',
  },
  {
    id: 'ccrl',
    name: 'ChoZen Center for Regenerative Living (CCRL)',
    shortName: 'CCRL',
    category: 'regenerative',
    status: 'active',
    tagline: 'Bioregional Hub — 501(c)(3)',
    description: 'A 40-acre bioregional hub and 501(c)(3) in Sebastian, FL. Programs include the Artisan Market, Farm Volunteer Days, Leadership Training, Weekly Programming, Artist Residency, and Youth Summer Camp. A living laboratory for regenerative living and Blue Zone principles.',
    location: 'Sebastian, FL',
    metrics: [
      { label: 'Property', value: '40 Acres' },
      { label: 'Entity', value: '501(c)(3)' },
      { label: 'Programs', value: '6+ Active' },
      { label: 'Impact', value: 'Bioregional' },
    ],
    aiApplications: [
      'Program scheduling and optimization',
      'Guest experience personalization',
      'Post-visit nurture sequences',
      'Event targeting and promotion',
      'Demand forecasting',
      'Volunteer coordination',
    ],
    connections: ['cho-ventures', 'chozen-ip', 'book-platform', 'course-platform', 'tony-cho-brand'],
    icon: 'sun',
  },
  {
    id: 'chozen-ip',
    name: 'ChoZen IP',
    shortName: 'CZIP',
    category: 'regenerative',
    status: 'active',
    tagline: 'Brand, Hospitality & Membership Platform',
    description: 'The ChoZen brand identity and intellectual property holding — encompassing residential living, hospitality experiences, a membership platform, Casa Colibri, Sacred Items Gift Shop, and tech/productization. Manages brand licensing to CCRL and other ChoZen-branded ventures.',
    location: 'Sebastian, FL / Digital',
    metrics: [
      { label: 'Scope', value: 'Brand + IP' },
      { label: 'Ventures', value: 'Hospitality + Residential' },
      { label: 'Platform', value: 'Membership' },
      { label: 'Commerce', value: 'Gift Shop + Experiences' },
    ],
    aiApplications: [
      'Personalized content feeds',
      'Member-to-member matching',
      'Event recommendations',
      'Learning path curation',
      'Community health monitoring',
      'Brand licensing management',
    ],
    connections: ['cho-ventures', 'ccrl', 'course-platform', 'tony-cho-brand'],
    icon: 'users',
  },
  {
    id: 'book-platform',
    name: 'Tony\'s Book',
    shortName: 'BOOK',
    category: 'authority',
    status: 'planned',
    tagline: 'Regenerative Living Philosophy',
    description: 'Tony Cho\'s upcoming book codifying his philosophy of regenerative living, placemaking, and building communities that thrive.',
    location: 'Publishing',
    metrics: [
      { label: 'Topic', value: 'Regenerative Living' },
      { label: 'Audience', value: 'Global' },
      { label: 'Format', value: 'Multi-Platform' },
      { label: 'Launch', value: 'Coming Soon' },
    ],
    aiApplications: [
      'Pre-launch list building',
      'Launch sequence automation',
      'AI book companion chatbot',
      'Reader-to-student conversion',
      'Review generation and monitoring',
    ],
    connections: ['cho-ventures', 'course-platform', 'speaking-media', 'ccrl'],
    icon: 'book',
  },
  {
    id: 'course-platform',
    name: 'Online Course',
    shortName: 'COURSE',
    category: 'authority',
    status: 'planned',
    tagline: 'Learn Regenerative Principles',
    description: 'An online learning platform teaching regenerative development principles, with certification paths and direct connections to the ChoZen ecosystem.',
    location: 'Digital',
    metrics: [
      { label: 'Format', value: 'Online Learning' },
      { label: 'Goal', value: '1,000+ Students' },
      { label: 'Certification', value: 'Available' },
      { label: 'Integration', value: 'Full Ecosystem' },
    ],
    aiApplications: [
      'Personalized learning paths',
      'AI course companion',
      'Progress tracking and nudges',
      'Certification management',
      'Alumni engagement',
    ],
    connections: ['cho-ventures', 'book-platform', 'chozen-ip', 'ccrl'],
    icon: 'graduation',
  },
  {
    id: 'speaking-media',
    name: 'Speaking & Media',
    shortName: 'SPEAK',
    category: 'authority',
    status: 'active',
    tagline: 'Thought Leadership Engine',
    description: 'Tony\'s speaking engagements, podcast appearances, and media presence amplifying the regenerative development message globally.',
    location: 'Global',
    metrics: [
      { label: 'Engagements', value: '24+/Year' },
      { label: 'Podcasts', value: '50+/Year' },
      { label: 'Reach', value: 'Global' },
      { label: 'Topics', value: 'Regenerative' },
    ],
    aiApplications: [
      'Speaking kit generation',
      'Podcast prep and research',
      'Media follow-up automation',
      'Content repurposing',
      'Opportunity identification',
    ],
    connections: ['cho-ventures', 'book-platform'],
    icon: 'mic',
  },
  {
    id: 'cho-foundation',
    name: 'Cho Family Foundation',
    shortName: 'CFF',
    category: 'philanthropy',
    status: 'active',
    tagline: 'Environmental & Cultural Impact (DAF)',
    description: 'A Donor-Advised Fund supporting environmental conservation, wildlife protection, and indigenous culture preservation.',
    location: 'Miami, FL',
    metrics: [
      { label: 'Type', value: 'Donor-Advised Fund' },
      { label: 'Focus', value: 'Environment & Culture' },
      { label: 'Programs', value: 'Multiple' },
      { label: 'Impact', value: 'Growing' },
    ],
    aiApplications: [
      'Donor scoring and cultivation',
      'Grant application screening',
      'Impact story generation',
      'Donor communication personalization',
      'Program-donor matching',
    ],
    connections: ['cho-ventures', 'ximena-cho-fund', 'climate-hub'],
    icon: 'heart',
  },
  {
    id: 'ximena-cho-fund',
    name: 'Ximena Cho Legacy Fund',
    shortName: 'XCLF',
    category: 'philanthropy',
    status: 'active',
    tagline: 'Legacy Philanthropy (DAF)',
    description: 'A Donor-Advised Fund supporting legacy philanthropic initiatives aligned with the Cho family\'s mission of regenerative impact and community empowerment.',
    location: 'Miami, FL',
    metrics: [
      { label: 'Type', value: 'Donor-Advised Fund' },
      { label: 'Focus', value: 'Legacy Philanthropy' },
      { label: 'Alignment', value: 'Regenerative Impact' },
      { label: 'Scope', value: 'Strategic Giving' },
    ],
    aiApplications: [
      'Grant tracking and management',
      'Impact reporting automation',
      'Donor management',
      'Community needs analysis',
      'Success story generation',
    ],
    connections: ['cho-ventures', 'cho-foundation'],
    icon: 'handshake',
  },
  {
    id: 'tony-cho-brand',
    name: 'Tony Cho Personal Brand',
    shortName: 'TCPB',
    category: 'authority',
    status: 'active',
    tagline: 'Thought Leadership & Spokesperson',
    description: 'Tony Cho\'s personal brand as a regenerative living thought leader — encompassing speaking & media appearances, books (including Soft Power), online courses cross-platformed on FoC and ChoZen, and thought leadership in regenerative placemaking.',
    location: 'Global',
    metrics: [
      { label: 'Role', value: 'Thought Leader' },
      { label: 'Books', value: 'Soft Power + More' },
      { label: 'Reach', value: 'Global' },
      { label: 'Topics', value: 'Regenerative Living' },
    ],
    aiApplications: [
      'Personal brand content strategy',
      'Speaking engagement pipeline',
      'Cross-platform course integration',
      'Media presence optimization',
      'Thought leadership positioning',
    ],
    connections: ['cho-ventures', 'book-platform', 'speaking-media', 'ccrl', 'chozen-ip', 'future-of-cities'],
    icon: 'star',
  },
];

export const connections: Connection[] = [
  // Hub connections (primary)
  { id: 'hub-m1', source: 'cho-ventures', target: 'metro-1', type: 'primary', bidirectional: true },
  { id: 'hub-foc', source: 'cho-ventures', target: 'future-of-cities', type: 'primary', bidirectional: true },
  { id: 'hub-phx', source: 'cho-ventures', target: 'phx-jax', type: 'primary', bidirectional: true },
  { id: 'hub-climate', source: 'cho-ventures', target: 'climate-hub', type: 'primary', bidirectional: true },
  { id: 'hub-ccrl', source: 'cho-ventures', target: 'ccrl', type: 'primary', bidirectional: true },
  { id: 'hub-chozen-ip', source: 'cho-ventures', target: 'chozen-ip', type: 'primary', bidirectional: true },
  { id: 'hub-book', source: 'cho-ventures', target: 'book-platform', type: 'primary', bidirectional: true },
  { id: 'hub-course', source: 'cho-ventures', target: 'course-platform', type: 'primary', bidirectional: true },
  { id: 'hub-speaking', source: 'cho-ventures', target: 'speaking-media', type: 'primary', bidirectional: true },
  { id: 'hub-foundation', source: 'cho-ventures', target: 'cho-foundation', type: 'primary', bidirectional: true },
  { id: 'hub-ximena-fund', source: 'cho-ventures', target: 'ximena-cho-fund', type: 'primary', bidirectional: true },
  { id: 'hub-tony-brand', source: 'cho-ventures', target: 'tony-cho-brand', type: 'primary', bidirectional: true },

  // Real estate cluster
  { id: 'm1-foc', source: 'metro-1', target: 'future-of-cities', type: 'secondary', bidirectional: true },
  { id: 'm1-climate', source: 'metro-1', target: 'climate-hub', type: 'secondary', bidirectional: true },
  { id: 'foc-phx', source: 'future-of-cities', target: 'phx-jax', type: 'secondary', bidirectional: true },
  { id: 'foc-climate', source: 'future-of-cities', target: 'climate-hub', type: 'secondary', bidirectional: true },

  // Regenerative cluster
  { id: 'ccrl-chozen-ip', source: 'ccrl', target: 'chozen-ip', type: 'secondary', bidirectional: true },
  { id: 'ccrl-course', source: 'ccrl', target: 'course-platform', type: 'secondary', bidirectional: true },

  // Authority cluster
  { id: 'book-course', source: 'book-platform', target: 'course-platform', type: 'secondary', bidirectional: true },
  { id: 'book-speaking', source: 'book-platform', target: 'speaking-media', type: 'secondary', bidirectional: true },
  { id: 'course-chozen-ip', source: 'course-platform', target: 'chozen-ip', type: 'secondary', bidirectional: true },

  // Philanthropy cluster
  { id: 'foundation-ximena', source: 'cho-foundation', target: 'ximena-cho-fund', type: 'secondary', bidirectional: true },
  { id: 'foundation-climate', source: 'cho-foundation', target: 'climate-hub', type: 'secondary', bidirectional: true },

  // Cross-cluster data flows
  { id: 'ccrl-book', source: 'ccrl', target: 'book-platform', type: 'data-flow', label: 'Content', bidirectional: false },

  // Tony Cho Brand connections
  { id: 'tony-book', source: 'tony-cho-brand', target: 'book-platform', type: 'secondary', bidirectional: true },
  { id: 'tony-speaking', source: 'tony-cho-brand', target: 'speaking-media', type: 'secondary', bidirectional: true },
  { id: 'tony-ccrl', source: 'tony-cho-brand', target: 'ccrl', type: 'secondary', bidirectional: true },
  { id: 'tony-chozen-ip', source: 'tony-cho-brand', target: 'chozen-ip', type: 'secondary', bidirectional: true },
  { id: 'tony-foc', source: 'tony-cho-brand', target: 'future-of-cities', type: 'secondary', bidirectional: true },
];

export const categoryLabels: Record<EntityCategory, string> = {
  'hub': 'Central Hub',
  'real-estate': 'Real Estate & Development',
  'regenerative': 'Regenerative Living',
  'authority': 'Authority Platform',
  'philanthropy': 'Impact & Philanthropy',
};

export const categoryColors: Record<EntityCategory, { bg: string; text: string; border: string; glow: string }> = {
  'hub': { bg: 'bg-hub', text: 'text-hub-light', border: 'border-hub', glow: 'shadow-hub/50' },
  'real-estate': { bg: 'bg-real-estate', text: 'text-real-estate-light', border: 'border-real-estate', glow: 'shadow-real-estate/50' },
  'regenerative': { bg: 'bg-regenerative', text: 'text-regenerative-light', border: 'border-regenerative', glow: 'shadow-regenerative/50' },
  'authority': { bg: 'bg-authority', text: 'text-authority-light', border: 'border-authority', glow: 'shadow-authority/50' },
  'philanthropy': { bg: 'bg-philanthropy', text: 'text-philanthropy-light', border: 'border-philanthropy', glow: 'shadow-philanthropy/50' },
};
