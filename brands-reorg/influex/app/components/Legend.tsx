"use client";

import { motion } from "framer-motion";
import { ENGINE_COLORS, ENGINE_LABELS, type EngineId } from "@/lib/constants";

const LEGEND_ITEMS: EngineId[] = [
  "hub",
  "authority",
  "brand",
  "sales",
  "platform",
  "operations",
  "marketing",
  "promo",
];

export default function Legend() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-6 left-6 glass-dark p-4 rounded-xl z-10"
    >
      <h3 className="text-xs font-semibold text-white/70 mb-3 uppercase tracking-wider">
        Ecosystem Legend
      </h3>
      <div className="space-y-2">
        {LEGEND_ITEMS.map((id) => (
          <div key={id} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: ENGINE_COLORS[id] }}
            />
            <span className="text-xs text-white/80">{ENGINE_LABELS[id]}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
