"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ENGINE_COLORS,
  ENGINE_LABELS,
  NODE_ICONS,
  type EngineId,
} from "@/lib/constants";
import {
  type EcosystemEntity,
  getSatellitesForEngine,
} from "@/lib/ecosystem-data";

interface EntityDetailPanelProps {
  entity: EcosystemEntity | null;
  onClose: () => void;
  onSelectEntity: (id: string) => void;
}

export default function EntityDetailPanel({
  entity,
  onClose,
  onSelectEntity,
}: EntityDetailPanelProps) {
  if (!entity) return null;

  const color = ENGINE_COLORS[entity.engine as EngineId];
  const Icon = NODE_ICONS[entity.id];
  const satellites = entity.type === "engine" ? getSatellitesForEngine(entity.id) : [];
  const isHub = entity.type === "hub";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={entity.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
        }}
        className="absolute top-6 right-6 bottom-6 w-96 glass-panel rounded-2xl overflow-hidden z-20"
      >
        {/* Header */}
        <div
          className="relative p-6 pb-4"
          style={{
            background: `linear-gradient(135deg, ${color}20 0%, transparent 100%)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex items-start gap-4">
            {Icon && (
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon size={28} style={{ color }} />
              </div>
            )}
            <div className="flex-1">
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color }}
              >
                {isHub ? "Central Hub" : ENGINE_LABELS[entity.engine as EngineId]}
              </span>
              <h2 className="text-xl font-bold mt-1">{entity.name}</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 space-y-6 overflow-y-auto max-h-[calc(100%-140px)]">
          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
              {isHub ? "The Heart of Influex" : "Overview"}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {entity.description}
            </p>
          </div>

          {/* Features */}
          {entity.features && entity.features.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                {isHub ? "Client Features" : "Capabilities"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {entity.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {entity.metrics && Object.keys(entity.metrics).length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                {isHub ? "ROI & Impact" : "Key Metrics"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(entity.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <span className="text-xs text-white/50 block mb-1">{key}</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Satellites / Sub-components */}
          {satellites.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                Sub-Components
              </h3>
              <div className="space-y-2">
                {satellites.map((sat) => {
                  const SatIcon = NODE_ICONS[sat.id];
                  return (
                    <button
                      key={sat.id}
                      onClick={() => onSelectEntity(sat.id)}
                      className={cn(
                        "w-full flex items-center gap-3 p-3 rounded-lg",
                        "bg-white/5 border border-white/10",
                        "hover:bg-white/10 hover:border-white/20 transition-all",
                        "text-left group"
                      )}
                    >
                      {SatIcon && (
                        <SatIcon
                          size={18}
                          style={{ color }}
                          className="opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                      <span className="flex-1 text-sm">{sat.name}</span>
                      <ChevronRight
                        size={16}
                        className="text-white/30 group-hover:text-white/60 transition-colors"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {entity.techStack && entity.techStack.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {entity.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hub special messaging */}
          {isHub && (
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: `${color}10`,
                borderColor: `${color}30`,
              }}
            >
              <h4 className="text-sm font-semibold mb-2" style={{ color }}>
                Client-First Philosophy
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Everything in the Influex ecosystem flows into this dashboard.
                Every engine, every AI capability, every tool exists to deliver
                an exceptional client experience.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
