import { type EngineId, type NodeType } from "./constants";

export interface EcosystemEntity {
  id: string;
  name: string;
  description: string;
  type: NodeType;
  engine: EngineId;
  parent?: string;
  features?: string[];
  metrics?: Record<string, string>;
  techStack?: string[];
}

export interface EcosystemConnection {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  style?: "default" | "dashed";
}

// All 29 entities
export const entities: EcosystemEntity[] = [
  // Tier 1: Central Hub (1 node)
  {
    id: "client-dashboard",
    name: "Client Dashboard",
    description:
      "AI-Powered Client Experience Center - The heart of everything. Every engine, every AI capability, every platform tool flows into this central hub to deliver a 100% top-notch client experience from start to finish.",
    type: "hub",
    engine: "hub",
    features: [
      "Self-Service Portal",
      "Real-Time Analytics",
      "Project Tracker",
      "AI Support Chat",
      "Asset Manager",
    ],
    metrics: {
      "Cost Reduction": "$100K → $22K/mo (78%)",
      "Client Satisfaction": "Target 98%+",
      "Engines Connected": "7",
      "AI Capabilities": "15+",
    },
  },

  // Tier 2: Engines (7 nodes)
  {
    id: "platform-core",
    name: "Platform Core",
    description:
      "The infrastructure backbone powering all client sites. Multi-tenant architecture with shared components, design system, and automated deployment pipelines.",
    type: "engine",
    engine: "platform",
    features: [
      "Multi-Tenant Architecture",
      "Shared Component Library",
      "Auto-Deploy Pipeline",
      "Design System Engine",
    ],
    metrics: {
      "Sites Supported": "100+",
      "Uptime": "99.9%",
      "Deploy Time": "< 2 min",
    },
    techStack: ["Next.js", "Vercel", "PostgreSQL", "Redis"],
  },
  {
    id: "brand-engine",
    name: "Brand Engine",
    description:
      "AI-powered brand creation that feeds directly into the Client Dashboard. From initial brand generation to page building, every output enhances the client experience.",
    type: "engine",
    engine: "brand",
    features: [
      "AI Brand Generator",
      "AI Page Builder",
      "Content AI Engine",
      "Asset Generation",
    ],
    metrics: {
      "Brands Created": "500+",
      "Pages Generated": "2000+",
      "Time Saved": "80%",
    },
    techStack: ["GPT-4", "Stable Diffusion", "Figma API"],
  },
  {
    id: "sales-engine",
    name: "Sales Engine",
    description:
      "AI-automated sales pipeline that handles lead scoring, proposal generation, and pipeline automation. Revenue flows directly to enhance client services.",
    type: "engine",
    engine: "sales",
    features: [
      "AI Lead Scoring",
      "Proposal Generator",
      "Pipeline Automation",
      "Revenue Analytics",
    ],
    metrics: {
      "Close Rate": "+35%",
      "Lead Response": "< 5 min",
      "Revenue Growth": "2.5x",
    },
    techStack: ["HubSpot", "GPT-4", "Stripe"],
  },
  {
    id: "marketing-engine",
    name: "Marketing Engine",
    description:
      "AI-powered marketing campaigns and funnels that drive qualified leads to the Sales Engine and awareness to the Client Dashboard.",
    type: "engine",
    engine: "marketing",
    features: [
      "Campaign Automation",
      "Funnel Builder",
      "Analytics Dashboard",
      "A/B Testing",
    ],
    metrics: {
      "Campaign ROI": "340%",
      "Lead Quality": "+45%",
      "Conversion Rate": "12%",
    },
    techStack: ["ActiveCampaign", "Google Ads", "Meta Ads"],
  },
  {
    id: "promo-engine",
    name: "Promo Engine",
    description:
      "Network and exposure engine that amplifies client visibility through The Influex Collective, cross-promotion, and events.",
    type: "engine",
    engine: "promo",
    features: [
      "The Influex Collective",
      "Cross-Promotion Engine",
      "Events Platform",
      "Partner Network",
    ],
    metrics: {
      "Network Reach": "50K+",
      "Events/Year": "24",
      "Partners": "150+",
    },
  },
  {
    id: "authority-engine",
    name: "Authority Engine",
    description:
      "Dmitriy's thought leadership that builds trust and credibility. The book, course, and personal brand establish authority that benefits all clients.",
    type: "engine",
    engine: "authority",
    features: [
      "Personal Brand",
      "The Essence Method Book",
      "Online Course",
      "Speaking Engagements",
    ],
    metrics: {
      "Book Sales": "10K+",
      "Course Students": "500+",
      "Trust Score": "High",
    },
  },
  {
    id: "operations-engine",
    name: "Operations Engine",
    description:
      "Automation and quality assurance that ensures flawless delivery. AI intake, automated testing, and performance monitoring maintain excellence.",
    type: "engine",
    engine: "operations",
    features: [
      "AI Intake System",
      "Auto-Test Suite",
      "Performance Monitor",
      "Quality Gates",
    ],
    metrics: {
      "Bug Reduction": "70%",
      "Test Coverage": "85%",
      "Response Time": "< 1s",
    },
    techStack: ["Playwright", "Datadog", "PagerDuty"],
  },

  // Tier 3: Platform Core Satellites (3 nodes)
  {
    id: "multi-tenant",
    name: "Multi-Tenant Architecture",
    description:
      "Shared infrastructure that powers all client sites efficiently, reducing costs while maintaining isolation and security.",
    type: "satellite",
    engine: "platform",
    parent: "platform-core",
    metrics: {
      "Cost Efficiency": "60%",
      "Isolation": "Complete",
    },
  },
  {
    id: "design-system",
    name: "Design System Engine",
    description:
      "Unified design language with reusable components ensuring brand consistency across all client deliverables.",
    type: "satellite",
    engine: "platform",
    parent: "platform-core",
    metrics: {
      Components: "200+",
      "Design Tokens": "150+",
    },
  },
  {
    id: "auto-deploy",
    name: "Auto-Deploy Pipeline",
    description:
      "Zero-touch deployment pipeline that pushes updates to all client sites with automatic rollback on failure.",
    type: "satellite",
    engine: "platform",
    parent: "platform-core",
    metrics: {
      "Deploy Success": "99.5%",
      Rollback: "< 30s",
    },
  },

  // Tier 3: Brand Engine Satellites (3 nodes)
  {
    id: "brand-generator",
    name: "AI Brand Generator",
    description:
      "Creates complete brand identities including logos, color palettes, typography, and brand voice using AI.",
    type: "satellite",
    engine: "brand",
    parent: "brand-engine",
    metrics: {
      "Generation Time": "< 2 min",
      Variations: "10+",
    },
  },
  {
    id: "page-builder",
    name: "AI Page Builder",
    description:
      "Generates complete web pages from brand guidelines and content, maintaining consistency and best practices.",
    type: "satellite",
    engine: "brand",
    parent: "brand-engine",
    metrics: {
      "Pages/Hour": "20+",
      "SEO Score": "95+",
    },
  },
  {
    id: "content-ai",
    name: "Content AI Engine",
    description:
      "Produces on-brand copy, blog posts, and marketing content that resonates with target audiences.",
    type: "satellite",
    engine: "brand",
    parent: "brand-engine",
    metrics: {
      "Content Types": "15+",
      "Tone Match": "98%",
    },
  },

  // Tier 3: Sales Engine Satellites (3 nodes)
  {
    id: "lead-scoring",
    name: "AI Lead Scoring",
    description:
      "Automatically scores and prioritizes leads based on behavior, fit, and intent signals.",
    type: "satellite",
    engine: "sales",
    parent: "sales-engine",
    metrics: {
      Accuracy: "92%",
      "Time Saved": "15h/week",
    },
  },
  {
    id: "proposal-gen",
    name: "Proposal Generator",
    description:
      "Creates customized proposals in minutes using AI, tailored to each prospect's specific needs.",
    type: "satellite",
    engine: "sales",
    parent: "sales-engine",
    metrics: {
      "Generation Time": "< 5 min",
      "Win Rate": "+25%",
    },
  },
  {
    id: "pipeline-auto",
    name: "Pipeline Automation",
    description:
      "Automates deal progression, follow-ups, and handoffs throughout the sales process.",
    type: "satellite",
    engine: "sales",
    parent: "sales-engine",
    metrics: {
      "Tasks Automated": "80%",
      "Cycle Time": "-30%",
    },
  },

  // Tier 3: Marketing Engine Satellites (3 nodes)
  {
    id: "campaign-auto",
    name: "Campaign Automation",
    description:
      "Orchestrates multi-channel campaigns with AI-optimized targeting, timing, and messaging.",
    type: "satellite",
    engine: "marketing",
    parent: "marketing-engine",
    metrics: {
      Channels: "8+",
      "Optimization": "Real-time",
    },
  },
  {
    id: "funnel-builder",
    name: "Funnel Builder",
    description:
      "Creates high-converting sales funnels with A/B testing and conversion optimization built-in.",
    type: "satellite",
    engine: "marketing",
    parent: "marketing-engine",
    metrics: {
      "Avg Conversion": "12%",
      "Test Velocity": "5x",
    },
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    description:
      "Real-time marketing analytics with attribution, ROI tracking, and predictive insights.",
    type: "satellite",
    engine: "marketing",
    parent: "marketing-engine",
    metrics: {
      "Data Sources": "20+",
      "Report Time": "< 1s",
    },
  },

  // Tier 3: Promo Engine Satellites (3 nodes)
  {
    id: "collective",
    name: "The Influex Collective",
    description:
      "Exclusive network of like-minded entrepreneurs sharing resources, referrals, and opportunities.",
    type: "satellite",
    engine: "promo",
    parent: "promo-engine",
    metrics: {
      Members: "500+",
      "Monthly Referrals": "50+",
    },
  },
  {
    id: "cross-promo",
    name: "Cross-Promotion Engine",
    description:
      "Automated cross-promotion between clients and partners, amplifying reach for everyone.",
    type: "satellite",
    engine: "promo",
    parent: "promo-engine",
    metrics: {
      "Reach Multiplier": "3x",
      "Partnerships": "Active",
    },
  },
  {
    id: "events",
    name: "Events Platform",
    description:
      "Virtual and in-person events that showcase clients, build community, and generate leads.",
    type: "satellite",
    engine: "promo",
    parent: "promo-engine",
    metrics: {
      "Events/Year": "24",
      "Avg Attendance": "200+",
    },
  },

  // Tier 3: Authority Engine Satellites (3 nodes)
  {
    id: "personal-brand",
    name: "Dmitriy's Personal Brand",
    description:
      "Dmitriy's established authority as a brand strategist, creating trust that transfers to all Influex clients.",
    type: "satellite",
    engine: "authority",
    parent: "authority-engine",
    metrics: {
      Followers: "25K+",
      "Speaking Events": "12/year",
    },
  },
  {
    id: "book",
    name: "The Essence Method Book",
    description:
      "The definitive guide to brand building that establishes Influex as the authority in the space.",
    type: "satellite",
    engine: "authority",
    parent: "authority-engine",
    metrics: {
      "Copies Sold": "10K+",
      Rating: "4.8/5",
    },
  },
  {
    id: "course",
    name: "Online Course",
    description:
      "Comprehensive brand building course that educates prospects and generates qualified leads.",
    type: "satellite",
    engine: "authority",
    parent: "authority-engine",
    metrics: {
      Students: "500+",
      Completion: "78%",
    },
  },

  // Tier 3: Operations Engine Satellites (3 nodes)
  {
    id: "intake-ai",
    name: "AI Intake System",
    description:
      "Automated client onboarding that gathers requirements, sets expectations, and initiates projects.",
    type: "satellite",
    engine: "operations",
    parent: "operations-engine",
    metrics: {
      "Onboard Time": "< 24h",
      "Data Capture": "95%",
    },
  },
  {
    id: "auto-test",
    name: "Auto-Test Suite",
    description:
      "Comprehensive automated testing ensuring every client deliverable meets quality standards.",
    type: "satellite",
    engine: "operations",
    parent: "operations-engine",
    metrics: {
      "Test Coverage": "85%",
      "Run Time": "< 5 min",
    },
  },
  {
    id: "performance",
    name: "Performance Monitor",
    description:
      "24/7 monitoring of all client sites with automatic alerting and self-healing capabilities.",
    type: "satellite",
    engine: "operations",
    parent: "operations-engine",
    metrics: {
      Uptime: "99.9%",
      "Alert Time": "< 30s",
    },
  },
];

// All connections - everything flows to Client Dashboard
export const connections: EcosystemConnection[] = [
  // Engine → Client Dashboard (Primary connections)
  {
    id: "platform-to-hub",
    source: "platform-core",
    target: "client-dashboard",
    animated: true,
  },
  {
    id: "brand-to-hub",
    source: "brand-engine",
    target: "client-dashboard",
    animated: true,
  },
  {
    id: "sales-to-hub",
    source: "sales-engine",
    target: "client-dashboard",
    animated: true,
  },
  {
    id: "marketing-to-hub",
    source: "marketing-engine",
    target: "client-dashboard",
    animated: true,
  },
  {
    id: "promo-to-hub",
    source: "promo-engine",
    target: "client-dashboard",
    animated: true,
  },
  {
    id: "authority-to-hub",
    source: "authority-engine",
    target: "client-dashboard",
    animated: true,
    style: "dashed", // Special styling for trust flow
  },
  {
    id: "ops-to-hub",
    source: "operations-engine",
    target: "client-dashboard",
    animated: true,
  },

  // Platform Core → Satellites
  { id: "platform-multi", source: "platform-core", target: "multi-tenant" },
  { id: "platform-design", source: "platform-core", target: "design-system" },
  { id: "platform-deploy", source: "platform-core", target: "auto-deploy" },

  // Brand Engine → Satellites
  { id: "brand-gen", source: "brand-engine", target: "brand-generator" },
  { id: "brand-page", source: "brand-engine", target: "page-builder" },
  { id: "brand-content", source: "brand-engine", target: "content-ai" },

  // Sales Engine → Satellites
  { id: "sales-lead", source: "sales-engine", target: "lead-scoring" },
  { id: "sales-proposal", source: "sales-engine", target: "proposal-gen" },
  { id: "sales-pipeline", source: "sales-engine", target: "pipeline-auto" },

  // Marketing Engine → Satellites
  { id: "marketing-campaign", source: "marketing-engine", target: "campaign-auto" },
  { id: "marketing-funnel", source: "marketing-engine", target: "funnel-builder" },
  { id: "marketing-analytics", source: "marketing-engine", target: "analytics" },

  // Promo Engine → Satellites
  { id: "promo-collective", source: "promo-engine", target: "collective" },
  { id: "promo-cross", source: "promo-engine", target: "cross-promo" },
  { id: "promo-events", source: "promo-engine", target: "events" },

  // Authority Engine → Satellites
  { id: "authority-personal", source: "authority-engine", target: "personal-brand" },
  { id: "authority-book", source: "authority-engine", target: "book" },
  { id: "authority-course", source: "authority-engine", target: "course" },

  // Operations Engine → Satellites
  { id: "ops-intake", source: "operations-engine", target: "intake-ai" },
  { id: "ops-test", source: "operations-engine", target: "auto-test" },
  { id: "ops-perf", source: "operations-engine", target: "performance" },
];

// Helper to get entity by ID
export function getEntityById(id: string): EcosystemEntity | undefined {
  return entities.find((e) => e.id === id);
}

// Helper to get satellites for an engine
export function getSatellitesForEngine(engineId: string): EcosystemEntity[] {
  return entities.filter((e) => e.parent === engineId);
}

// Helper to get all engines
export function getEngines(): EcosystemEntity[] {
  return entities.filter((e) => e.type === "engine");
}

// Helper to get the hub
export function getHub(): EcosystemEntity | undefined {
  return entities.find((e) => e.type === "hub");
}
