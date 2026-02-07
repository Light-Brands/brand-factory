'use client';

import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  entities,
  connections,
  Entity,
  EntityZone,
  zoneColors,
  roleColors,
  RelationshipRole,
} from '@/lib/ecosystem-data';
import EntityNode from './EntityNode';
import EntityDetailPanel from './EntityDetailPanel';

const nodeTypes = {
  entity: EntityNode,
};

// Three-column layout with arcs
function calculateDualConglomerateLayout(): Record<string, { x: number; y: number }> {
  const positions: Record<string, { x: number; y: number }> = {};

  // Three columns
  const leftX = 200;
  const centerX = 600;
  const rightX = 1000;
  const topY = 100;

  // Conglomerate positions at top
  positions['cho-ventures'] = { x: leftX - 100, y: topY };
  positions['ai-system'] = { x: centerX - 120, y: topY - 20 };
  positions['future-of-cities'] = { x: rightX - 100, y: topY };

  // CV sub-entities: semicircular arc below CV node
  const cvEntities = ['metro-1', 'chozen-ip', 'tony-cho-brand', 'ximena-cho-fund', 'cho-foundation', 'chozen-retreat', 'chozen-community', 'book-platform', 'course-platform', 'speaking-media', 'm1-fund'];
  const cvRadius = 300;
  const cvCenterX = leftX;
  const cvCenterY = topY + 180;
  cvEntities.forEach((id, index) => {
    const totalEntities = cvEntities.length;
    // Spread across semicircle below (from ~150deg to ~30deg, i.e., left to right below)
    const startAngle = Math.PI * 0.15;
    const endAngle = Math.PI * 0.85;
    const angle = startAngle + (index / (totalEntities - 1)) * (endAngle - startAngle);
    positions[id] = {
      x: cvCenterX + Math.cos(angle) * cvRadius - 80,
      y: cvCenterY + Math.sin(angle) * cvRadius - 40,
    };
  });

  // FoC sub-entities: semicircular arc below FoC node
  const focEntities = ['chozen-sebastian', 'foc-portugal'];
  const focRadius = 220;
  const focCenterX = rightX;
  const focCenterY = topY + 180;
  focEntities.forEach((id, index) => {
    const totalEntities = focEntities.length;
    const startAngle = Math.PI * 0.25;
    const endAngle = Math.PI * 0.75;
    const angle = totalEntities === 1
      ? Math.PI * 0.5
      : startAngle + (index / (totalEntities - 1)) * (endAngle - startAngle);
    positions[id] = {
      x: focCenterX + Math.cos(angle) * focRadius - 80,
      y: focCenterY + Math.sin(angle) * focRadius - 40,
    };
  });

  // Shared entities: 2x2 staggered grid below AI bridge
  const sharedEntities = ['climate-hub', 'phx-jax', 'ccrl', 'friends-of-phx'];
  const sharedStartY = topY + 250;
  const sharedSpacingX = 200;
  const sharedSpacingY = 160;
  sharedEntities.forEach((id, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    positions[id] = {
      x: centerX - sharedSpacingX / 2 + col * sharedSpacingX - 80,
      y: sharedStartY + row * sharedSpacingY,
    };
  });

  return positions;
}

export default function EcosystemMap() {
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);

  const positions = useMemo(() => calculateDualConglomerateLayout(), []);

  const initialNodes: Node[] = useMemo(() => {
    return entities.map((entity) => ({
      id: entity.id,
      type: 'entity',
      position: positions[entity.id] || { x: 0, y: 0 },
      data: {
        entity,
        isSelected: selectedEntity?.id === entity.id,
        isHovered: hoveredEntity === entity.id,
        isConnected: selectedEntity ? selectedEntity.connections.includes(entity.id) || entity.id === selectedEntity.id : true,
        onHover: (id: string | null) => setHoveredEntity(id),
      },
    }));
  }, [positions, selectedEntity, hoveredEntity]);

  const initialEdges: Edge[] = useMemo(() => {
    return connections.map((conn) => {
      const edgeColor = roleColors[conn.role];

      const isHighlighted = selectedEntity
        ? (conn.source === selectedEntity.id || conn.target === selectedEntity.id)
        : hoveredEntity
          ? (conn.source === hoveredEntity || conn.target === hoveredEntity)
          : false;

      const isConnectedToSelected = selectedEntity
        ? (selectedEntity.connections.includes(conn.source) || selectedEntity.connections.includes(conn.target))
        : true;

      const isConglomerateLevel = conn.type === 'conglomerate-link' || conn.type === 'ai-bridge';
      const isDashedRole = conn.role === 'in-kind-donor';
      const isAnimated = conn.type === 'ai-bridge' && isHighlighted;

      return {
        id: conn.id,
        source: conn.source,
        target: conn.target,
        type: 'default',
        animated: isAnimated,
        label: isHighlighted && conn.label ? conn.label : undefined,
        labelStyle: {
          fill: 'rgba(255,255,255,0.7)',
          fontSize: 10,
          fontWeight: 500,
        },
        labelBgStyle: {
          fill: 'rgba(10, 15, 28, 0.8)',
          fillOpacity: 0.8,
        },
        labelBgPadding: [4, 2] as [number, number],
        labelBgBorderRadius: 4,
        style: {
          stroke: isHighlighted ? edgeColor : isConnectedToSelected ? `${edgeColor}40` : `${edgeColor}15`,
          strokeWidth: isConglomerateLevel ? (isHighlighted ? 4 : 3) : (isHighlighted ? 2 : 1),
          strokeDasharray: isDashedRole ? '6 3' : undefined,
          opacity: selectedEntity ? (isHighlighted ? 1 : 0.2) : 1,
          transition: 'all 0.3s ease',
        },
        markerEnd: conn.bidirectional ? undefined : {
          type: MarkerType.ArrowClosed,
          color: edgeColor,
          width: 15,
          height: 15,
        },
      };
    });
  }, [selectedEntity, hoveredEntity]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes when selection changes
  useMemo(() => {
    setNodes(initialNodes);
  }, [initialNodes, setNodes]);

  // Update edges when selection changes
  useMemo(() => {
    setEdges(initialEdges);
  }, [initialEdges, setEdges]);

  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const entity = entities.find(e => e.id === node.id);
    if (entity) {
      setSelectedEntity(prev => prev?.id === entity.id ? null : entity);
    }
  }, []);

  const handlePaneClick = useCallback(() => {
    setSelectedEntity(null);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Background gradient orbs - three-zone */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-96 h-96 bg-cv-zone/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-bridge-zone/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/4 right-[15%] w-96 h-96 bg-foc-zone/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-shared-zone/8 rounded-full blur-3xl animate-pulse-slow delay-500" />
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          color="rgba(255, 255, 255, 0.03)"
          gap={40}
          size={1}
        />
        <Controls
          showZoom={true}
          showFitView={true}
          showInteractive={false}
        />
        <MiniMap
          nodeColor={(node) => {
            const entity = entities.find(e => e.id === node.id);
            return entity ? zoneColors[entity.zone] : '#666';
          }}
          maskColor="rgba(10, 15, 28, 0.9)"
          style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
        />
      </ReactFlow>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedEntity && (
          <EntityDetailPanel
            entity={selectedEntity}
            onClose={() => setSelectedEntity(null)}
          />
        )}
      </AnimatePresence>

      {/* Legend - Two sections */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-6 left-6 glass rounded-xl p-4 max-w-[260px]"
      >
        {/* Zone colors */}
        <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Zones</h3>
        <div className="space-y-1.5 mb-4">
          {([
            { label: 'Cho Ventures', color: 'bg-cv-zone', zone: 'cv' as EntityZone },
            { label: 'AI Bridge', color: 'bg-bridge-zone', zone: 'bridge' as EntityZone },
            { label: 'Future of Cities', color: 'bg-foc-zone', zone: 'foc' as EntityZone },
            { label: 'Shared Entities', color: 'bg-shared-zone', zone: 'shared' as EntityZone },
          ]).map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-xs text-white/70">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Role types */}
        <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Roles</h3>
        <div className="space-y-1.5">
          {([
            { label: 'Investor', role: 'investor' as RelationshipRole },
            { label: 'Developer', role: 'developer' as RelationshipRole },
            { label: 'Donor', role: 'donor' as RelationshipRole },
            { label: 'In-Kind Donor', role: 'in-kind-donor' as RelationshipRole },
            { label: 'AI Integration', role: 'ai-integration' as RelationshipRole },
            { label: 'Content Flow', role: 'content-flow' as RelationshipRole },
          ]).map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="w-6 h-0.5 rounded-full"
                style={{
                  backgroundColor: roleColors[item.role],
                  ...(item.role === 'in-kind-donor' ? { backgroundImage: `repeating-linear-gradient(90deg, ${roleColors[item.role]} 0px, ${roleColors[item.role]} 4px, transparent 4px, transparent 7px)`, backgroundColor: 'transparent' } : {}),
                }}
              />
              <span className="text-xs text-white/70">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
