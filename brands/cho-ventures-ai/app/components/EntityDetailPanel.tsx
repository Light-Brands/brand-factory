'use client';

import { motion } from 'framer-motion';
import {
  Entity,
  EntityZone,
  entities,
  connections,
  zoneLabels,
  roleLabels,
  roleColors,
} from '@/lib/ecosystem-data';
import {
  X,
  MapPin,
  Sparkles,
  ArrowRight,
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
  Cpu,
  Link,
  Brain,
  Globe,
  User,
  Wallet,
  Landmark,
  MapPinned,
  FlaskConical,
  Shield,
  GitFork,
} from 'lucide-react';

interface EntityDetailPanelProps {
  entity: Entity;
  onClose: () => void;
}

const zoneStyles: Record<EntityZone, {
  bg: string;
  border: string;
  text: string;
  accent: string;
  gradientFrom: string;
  gradientTo: string;
}> = {
  cv: {
    bg: 'bg-cv-zone/10',
    border: 'border-cv-zone/30',
    text: 'text-cv-zone-light',
    accent: 'text-cv-zone',
    gradientFrom: 'from-cv-zone/20',
    gradientTo: 'to-cv-zone/5',
  },
  foc: {
    bg: 'bg-foc-zone/10',
    border: 'border-foc-zone/30',
    text: 'text-foc-zone-light',
    accent: 'text-foc-zone',
    gradientFrom: 'from-foc-zone/20',
    gradientTo: 'to-foc-zone/5',
  },
  bridge: {
    bg: 'bg-bridge-zone/10',
    border: 'border-bridge-zone/30',
    text: 'text-bridge-zone-light',
    accent: 'text-bridge-zone',
    gradientFrom: 'from-bridge-zone/20',
    gradientTo: 'to-bridge-zone/5',
  },
  shared: {
    bg: 'bg-shared-zone/10',
    border: 'border-shared-zone/30',
    text: 'text-shared-zone-light',
    accent: 'text-shared-zone',
    gradientFrom: 'from-shared-zone/20',
    gradientTo: 'to-shared-zone/5',
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

export default function EntityDetailPanel({ entity, onClose }: EntityDetailPanelProps) {
  const styles = zoneStyles[entity.zone];
  const IconComponent = iconMap[entity.icon] || Sparkles;

  const connectedEntities = entity.connections
    .map(id => entities.find(e => e.id === id))
    .filter(Boolean) as Entity[];

  // Get relationship roles for this entity
  const entityConnections = connections.filter(
    conn => conn.source === entity.id || conn.target === entity.id
  );

  // Get conglomerate membership info
  const parentConglomerates = entity.parentConglomerates
    ?.map(id => entities.find(e => e.id === id))
    .filter(Boolean) as Entity[] | undefined;

  // Footer text based on zone
  const footerText = entity.zone === 'cv'
    ? 'Part of the Cho Ventures portfolio'
    : entity.zone === 'foc'
      ? 'Part of Future of Cities'
      : entity.zone === 'shared'
        ? 'Shared between CV & FoC'
        : 'AI Communication Bridge';

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute top-4 right-4 bottom-4 w-[400px] z-50"
    >
      <div className={`
        h-full
        glass-dark
        rounded-2xl
        overflow-hidden
        flex flex-col
        border ${styles.border}
      `}>
        {/* Header with gradient */}
        <div className={`
          relative
          px-6 pt-6 pb-8
          bg-gradient-to-br ${styles.gradientFrom} ${styles.gradientTo}
        `}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>

          {/* Zone badge */}
          <div className={`
            inline-flex items-center gap-1.5
            text-xs font-medium uppercase tracking-wider
            ${styles.text}
            mb-4
          `}>
            <div className={`w-2 h-2 rounded-full ${styles.bg} ${styles.border} border`} />
            {zoneLabels[entity.zone]}
          </div>

          {/* Icon and title */}
          <div className="flex items-start gap-4">
            <div className={`
              w-16 h-16
              rounded-2xl
              ${styles.bg}
              border ${styles.border}
              flex items-center justify-center
              flex-shrink-0
            `}>
              <IconComponent className={`w-8 h-8 ${styles.text}`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {entity.name}
              </h2>
              <p className="text-sm text-white/60">
                {entity.tagline}
              </p>
            </div>
          </div>

          {/* Location */}
          {entity.location && (
            <div className="mt-4 flex items-center gap-2 text-white/50">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{entity.location}</span>
            </div>
          )}

          {/* Status badge */}
          {entity.status !== 'active' && (
            <div className="mt-4">
              <span className={`
                inline-flex items-center gap-1.5
                text-xs font-medium uppercase tracking-wider
                px-3 py-1.5
                rounded-full
                ${entity.status === 'planned' ? 'bg-authority/20 text-authority-light border border-authority/30' : 'bg-white/10 text-white/50 border border-white/10'}
              `}>
                {entity.status === 'planned' ? 'Coming Soon' : entity.status}
              </span>
            </div>
          )}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-sm text-white/70 leading-relaxed">
              {entity.description}
            </p>
          </div>

          {/* Conglomerate Membership */}
          {parentConglomerates && parentConglomerates.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                <GitFork className="w-4 h-4" />
                Conglomerate Membership
              </h3>
              <div className="space-y-2">
                {parentConglomerates.map((parent) => {
                  const parentZoneStyles = zoneStyles[parent.zone];
                  const ParentIcon = iconMap[parent.icon] || Sparkles;
                  return (
                    <div
                      key={parent.id}
                      className={`
                        flex items-center gap-3
                        p-2 rounded-lg
                        ${parentZoneStyles.bg}
                        border ${parentZoneStyles.border}
                      `}
                    >
                      <div className={`
                        w-8 h-8 rounded-lg
                        ${parentZoneStyles.bg}
                        border ${parentZoneStyles.border}
                        flex items-center justify-center
                      `}>
                        <ParentIcon className={`w-4 h-4 ${parentZoneStyles.text}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{parent.name}</div>
                        <div className={`text-xs ${parentZoneStyles.text}`}>{zoneLabels[parent.zone]}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Relationship Roles */}
          {entityConnections.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Link className="w-4 h-4" />
                Relationship Roles
              </h3>
              <div className="space-y-2">
                {entityConnections.slice(0, 8).map((conn) => {
                  const otherId = conn.source === entity.id ? conn.target : conn.source;
                  const otherEntity = entities.find(e => e.id === otherId);
                  if (!otherEntity) return null;
                  const direction = conn.source === entity.id ? 'to' : 'from';
                  return (
                    <div
                      key={conn.id}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5"
                    >
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium text-white"
                        style={{ backgroundColor: `${roleColors[conn.role]}30`, borderColor: `${roleColors[conn.role]}50`, borderWidth: 1 }}
                      >
                        {roleLabels[conn.role]}
                      </span>
                      <span className="text-xs text-white/40">{direction}</span>
                      <span className="text-xs text-white/70 font-medium">{otherEntity.shortName}</span>
                    </div>
                  );
                })}
                {entityConnections.length > 8 && (
                  <div className="text-xs text-white/40 text-center pt-1">
                    +{entityConnections.length - 8} more roles
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Metrics */}
          {entity.metrics && entity.metrics.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {entity.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className={`
                      p-3 rounded-xl
                      ${styles.bg}
                      border ${styles.border}
                    `}
                  >
                    <div className={`text-lg font-bold ${styles.text}`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/50">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Applications */}
          {entity.aiApplications && entity.aiApplications.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                AI Applications
              </h3>
              <ul className="space-y-2">
                {entity.aiApplications.map((app, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.accent}`} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Connected Entities */}
          {connectedEntities.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Link className="w-4 h-4" />
                Connected Entities ({connectedEntities.length})
              </h3>
              <div className="space-y-2">
                {connectedEntities.slice(0, 6).map((connected) => {
                  const connectedZoneStyles = zoneStyles[connected.zone];
                  const ConnectedIcon = iconMap[connected.icon] || Sparkles;
                  return (
                    <div
                      key={connected.id}
                      className={`
                        flex items-center gap-3
                        p-2 rounded-lg
                        bg-white/5
                        border border-white/5
                        hover:bg-white/10
                        transition-colors
                      `}
                    >
                      <div className={`
                        w-8 h-8 rounded-lg
                        ${connectedZoneStyles.bg}
                        border ${connectedZoneStyles.border}
                        flex items-center justify-center
                      `}>
                        <ConnectedIcon className={`w-4 h-4 ${connectedZoneStyles.text}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          {connected.name}
                        </div>
                        <div className={`text-xs ${connectedZoneStyles.text}`}>
                          {zoneLabels[connected.zone]}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {connectedEntities.length > 6 && (
                  <div className="text-xs text-white/40 text-center pt-2">
                    +{connectedEntities.length - 6} more connections
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`
          px-6 py-4
          border-t border-white/5
          bg-cho-deep/50
        `}>
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/30">
              {footerText}
            </div>
            <div className={`
              flex items-center gap-1
              text-xs font-medium
              ${styles.text}
            `}>
              <Sparkles className="w-3 h-3" />
              AI-Powered
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
