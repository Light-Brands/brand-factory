import {
  LayoutDashboard,
  Cpu,
  Palette,
  DollarSign,
  Megaphone,
  Users,
  Crown,
  Settings,
  Globe,
  Paintbrush,
  Rocket,
  Wand2,
  FileCode,
  BrainCircuit,
  Target,
  FileText,
  GitBranch,
  BarChart3,
  Workflow,
  LineChart,
  Network,
  Zap,
  Calendar,
  User,
  BookOpen,
  GraduationCap,
  Bot,
  TestTube,
  Activity,
  type LucideIcon,
} from "lucide-react";

export type EngineId =
  | "hub"
  | "platform"
  | "brand"
  | "sales"
  | "marketing"
  | "promo"
  | "authority"
  | "operations";

export type NodeType = "hub" | "engine" | "satellite";

export const ENGINE_COLORS: Record<EngineId, string> = {
  hub: "#10B981",
  platform: "#3B82F6",
  brand: "#06B6D4",
  sales: "#EF4444",
  marketing: "#F43F5E",
  promo: "#F59E0B",
  authority: "#8B5CF6",
  operations: "#64748B",
};

export const ENGINE_LABELS: Record<EngineId, string> = {
  hub: "Client Dashboard",
  platform: "Platform Core",
  brand: "Brand Engine",
  sales: "Sales Engine",
  marketing: "Marketing Engine",
  promo: "Promo Engine",
  authority: "Authority Engine",
  operations: "Operations Engine",
};

export const ENGINE_DESCRIPTIONS: Record<EngineId, string> = {
  hub: "AI-Powered Client Experience Center - The heart of everything",
  platform: "Infrastructure that powers all client sites",
  brand: "AI brand creation feeding client dashboard",
  sales: "AI-automated sales pipeline & closing",
  marketing: "AI-powered marketing campaigns & funnels",
  promo: "Network & exposure for clients",
  authority: "Dmitriy's thought leadership boosting trust",
  operations: "Automation & quality assurance",
};

export const NODE_ICONS: Record<string, LucideIcon> = {
  // Hub
  "client-dashboard": LayoutDashboard,

  // Engines
  "platform-core": Cpu,
  "brand-engine": Palette,
  "sales-engine": DollarSign,
  "marketing-engine": Megaphone,
  "promo-engine": Users,
  "authority-engine": Crown,
  "operations-engine": Settings,

  // Platform Core satellites
  "multi-tenant": Globe,
  "design-system": Paintbrush,
  "auto-deploy": Rocket,

  // Brand Engine satellites
  "brand-generator": Wand2,
  "page-builder": FileCode,
  "content-ai": BrainCircuit,

  // Sales Engine satellites
  "lead-scoring": Target,
  "proposal-gen": FileText,
  "pipeline-auto": GitBranch,

  // Marketing Engine satellites
  "campaign-auto": BarChart3,
  "funnel-builder": Workflow,
  "analytics": LineChart,

  // Promo Engine satellites
  "collective": Network,
  "cross-promo": Zap,
  "events": Calendar,

  // Authority Engine satellites
  "personal-brand": User,
  "book": BookOpen,
  "course": GraduationCap,

  // Operations Engine satellites
  "intake-ai": Bot,
  "auto-test": TestTube,
  "performance": Activity,
};

export const NODE_SIZES = {
  hub: { width: 240, height: 140 },
  engine: { width: 180, height: 100 },
  satellite: { width: 140, height: 80 },
};

export const GLOW_CLASSES: Record<EngineId, string> = {
  hub: "glow-hub",
  platform: "glow-platform",
  brand: "glow-brand",
  sales: "glow-sales",
  marketing: "glow-marketing",
  promo: "glow-promo",
  authority: "glow-authority",
  operations: "glow-operations",
};
