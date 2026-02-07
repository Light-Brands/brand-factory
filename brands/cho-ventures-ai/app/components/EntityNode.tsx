'use client';

import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { motion } from 'framer-motion';
import { Entity, EntityZone } from '@/lib/ecosystem-data';
import {
  Building2,
  Building,
  Warehouse,
  Leaf,
  Sun,
  Users,
  BookOpen,
  GraduationCap,
  Mic,
  Heart,
  Handshake,
  Sparkles,
  Brain,
  Globe,
  User,
  Wallet,
  Landmark,
  MapPinned,
  FlaskConical,
  Shield,
} from 'lucide-react';

interface EntityNodeProps {
  data: {
    entity: Entity;
    isSelected: boolean;
    isHovered: boolean;
    isConnected: boolean;
    onHover: (id: string | null) => void;
  };
}

const zoneStyles: Record<EntityZone, { bg: string; border: string; glow: string; text: string }> = {
  cv: {
    bg: 'bg-gradient-to-br from-cv-zone/30 to-cv-zone/10',
    border: 'border-cv-zone/60',
    glow: 'shadow-[0_0_40px_rgba(236,72,153,0.4)]',
    text: 'text-cv-zone-light',
  },
  foc: {
    bg: 'bg-gradient-to-br from-foc-zone/30 to-foc-zone/10',
    border: 'border-foc-zone/60',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.4)]',
    text: 'text-foc-zone-light',
  },
  bridge: {
    bg: 'bg-gradient-to-br from-bridge-zone/30 to-bridge-zone/10',
    border: 'border-bridge-zone/60',
    glow: 'shadow-[0_0_50px_rgba(6,182,212,0.5)]',
    text: 'text-bridge-zone-light',
  },
  shared: {
    bg: 'bg-gradient-to-br from-shared-zone/30 to-shared-zone/10',
    border: 'border-shared-zone/60',
    glow: 'shadow-[0_0_35px_rgba(245,158,11,0.4)]',
    text: 'text-shared-zone-light',
  },
};

const iconMap: Record<string, React.ElementType> = {
  hub: Sparkles,
  brain: Brain,
  building: Building2,
  city: Building,
  warehouse: Warehouse,
  leaf: Leaf,
  sun: Sun,
  users: Users,
  book: BookOpen,
  graduation: GraduationCap,
  mic: Mic,
  heart: Heart,
  handshake: Handshake,
  globe: Globe,
  user: User,
  wallet: Wallet,
  landmark: Landmark,
  'map-pin': MapPinned,
  flask: FlaskConical,
  shield: Shield,
};

function EntityNode({ data }: EntityNodeProps) {
  const { entity, isSelected, isHovered, isConnected, onHover } = data;
  const styles = zoneStyles[entity.zone];
  const IconComponent = iconMap[entity.icon] || Sparkles;
  const isBridge = entity.tier === 'bridge';
  const isConglomerate = entity.tier === 'conglomerate';
  const isShared = entity.zone === 'shared';

  const width = isBridge ? 'w-[240px]' : isConglomerate ? 'w-[200px]' : 'w-[160px]';
  const iconSize = isBridge ? 'w-16 h-16' : isConglomerate ? 'w-14 h-14' : 'w-10 h-10';
  const iconInner = isBridge ? 'w-8 h-8' : isConglomerate ? 'w-7 h-7' : 'w-5 h-5';
  const titleSize = isBridge ? 'text-base' : isConglomerate ? 'text-base' : 'text-sm';
  const centerText = isBridge || isConglomerate;

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0" />
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0" />
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-0" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isSelected ? 1.05 : isHovered ? 1.02 : 1,
          opacity: isConnected ? 1 : 0.3,
        }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => onHover(entity.id)}
        onMouseLeave={() => onHover(null)}
        className={`
          relative cursor-pointer
          ${width}
          ${styles.bg}
          backdrop-blur-xl
          border-2 ${styles.border}
          rounded-2xl
          p-4
          transition-all duration-300
          ${isSelected || isHovered ? styles.glow : ''}
          ${isSelected ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-transparent' : ''}
        `}
      >
        {/* Animated glow ring for bridge node */}
        {isBridge && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-[-2px] bg-gradient-conic from-cv-zone via-bridge-zone via-foc-zone via-shared-zone to-cv-zone rounded-2xl animate-spin-slow opacity-40" />
            <div className="absolute inset-[1px] bg-cho-deep/90 rounded-2xl" />
          </div>
        )}

        {/* Subtler spinning border for conglomerate nodes */}
        {isConglomerate && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className={`absolute inset-[-2px] rounded-2xl animate-spin-slow opacity-20 ${
              entity.zone === 'cv'
                ? 'bg-gradient-conic from-cv-zone via-cv-zone-dark via-cv-zone-light to-cv-zone'
                : 'bg-gradient-conic from-foc-zone via-foc-zone-dark via-foc-zone-light to-foc-zone'
            }`} />
            <div className="absolute inset-[1px] bg-cho-deep/90 rounded-2xl" />
          </div>
        )}

        <div className="relative z-10">
          {/* Icon */}
          <div className={`
            ${iconSize}
            rounded-xl
            ${styles.bg}
            border ${styles.border}
            flex items-center justify-center
            mb-3
            ${centerText ? 'mx-auto' : ''}
          `}>
            <IconComponent className={`${iconInner} ${styles.text}`} />
          </div>

          {/* Name */}
          <h3 className={`
            ${titleSize}
            font-semibold text-white
            leading-tight
            mb-1
            ${centerText ? 'text-center' : ''}
          `}>
            {entity.name}
          </h3>

          {/* Tagline */}
          <p className={`
            text-xs text-white/50
            leading-tight
            ${centerText ? 'text-center' : ''}
            line-clamp-2
          `}>
            {entity.tagline}
          </p>

          {/* Status badge */}
          {entity.status !== 'active' && (
            <div className={`mt-2 ${centerText ? 'text-center' : ''}`}>
              <span className={`
                inline-block
                text-[10px] font-medium
                uppercase tracking-wider
                px-2 py-0.5
                rounded-full
                ${entity.status === 'planned' ? 'bg-authority/20 text-authority-light' : 'bg-white/10 text-white/50'}
              `}>
                {entity.status}
              </span>
            </div>
          )}

          {/* Dual-dot indicator for shared entities */}
          {isShared && (
            <div className={`flex items-center gap-1 mt-2 ${centerText ? 'justify-center' : ''}`}>
              <div className="w-2 h-2 rounded-full bg-cv-zone" />
              <div className="w-2 h-2 rounded-full bg-foc-zone" />
            </div>
          )}

          {/* Connection count indicator */}
          <div className={`
            absolute -top-2 -right-2
            w-6 h-6
            rounded-full
            ${styles.bg}
            border ${styles.border}
            flex items-center justify-center
            text-[10px] font-bold
            ${styles.text}
          `}>
            {entity.connections.length}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default memo(EntityNode);
