"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "reactflow";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NODE_ICONS, NODE_SIZES, GLOW_CLASSES, type EngineId } from "@/lib/constants";
import type { EcosystemEntity } from "@/lib/ecosystem-data";

interface EntityNodeData {
  entity: EcosystemEntity;
  color: string;
  selected?: boolean;
}

function EntityNode({ data, selected }: NodeProps<EntityNodeData>) {
  const { entity, color } = data;
  const Icon = NODE_ICONS[entity.id];
  const size = NODE_SIZES[entity.type];
  const glowClass = GLOW_CLASSES[entity.engine as EngineId];

  const isHub = entity.type === "hub";
  const isEngine = entity.type === "engine";
  const isSatellite = entity.type === "satellite";

  return (
    <>
      {/* Connection handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-transparent !border-0 !w-4 !h-4"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-transparent !border-0 !w-4 !h-4"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-transparent !border-0 !w-4 !h-4"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-transparent !border-0 !w-4 !h-4"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: size.width,
          height: size.height,
        }}
        className={cn(
          "relative rounded-2xl flex flex-col items-center justify-center p-3 cursor-pointer transition-all duration-300",
          isHub && "node-hub hub-pulse hub-gradient-border",
          isEngine && "node-engine",
          isSatellite && "node-satellite",
          selected && glowClass,
          !selected && "hover:scale-105"
        )}
      >
        {/* Glow effect on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100",
            glowClass
          )}
        />

        {/* Icon */}
        {Icon && (
          <div
            className={cn(
              "flex items-center justify-center rounded-xl mb-1",
              isHub && "w-12 h-12",
              isEngine && "w-10 h-10",
              isSatellite && "w-8 h-8"
            )}
            style={{ color }}
          >
            <Icon
              size={isHub ? 28 : isEngine ? 24 : 18}
              strokeWidth={1.5}
            />
          </div>
        )}

        {/* Name */}
        <span
          className={cn(
            "font-semibold text-center leading-tight",
            isHub && "text-sm",
            isEngine && "text-xs",
            isSatellite && "text-[10px]"
          )}
          style={{ color: isHub ? color : undefined }}
        >
          {entity.name}
        </span>

        {/* Hub subtitle */}
        {isHub && (
          <span className="text-[10px] text-white/60 mt-1 text-center">
            AI-Powered Hub
          </span>
        )}

        {/* Engine indicator dot */}
        {(isEngine || isSatellite) && (
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        )}

        {/* Selection ring */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-[-4px] rounded-2xl border-2"
            style={{ borderColor: color }}
          />
        )}
      </motion.div>
    </>
  );
}

export default memo(EntityNode);
