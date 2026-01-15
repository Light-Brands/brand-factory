'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { entities, connections, categoryColors, iconMap, Entity } from '../lib/ecosystem-data';
import EntityDetailPanel from './EntityDetailPanel';

// Convert entities to React Flow nodes
const createNodes = (): Node[] => {
  const centerX = 400;
  const centerY = 300;
  const radius = 250;

  // Hub is at center
  const hubNode: Node = {
    id: 'na-hub',
    type: 'default',
    position: { x: centerX - 60, y: centerY - 40 },
    data: {
      label: (
        <div className="flex flex-col items-center p-2">
          <span className="text-2xl">{iconMap['hub']}</span>
          <span className="text-xs font-bold mt-1">NA Hub</span>
        </div>
      ),
    },
    style: {
      background: categoryColors['hub'].hex,
      color: 'white',
      border: `2px solid ${categoryColors['hub'].hex}`,
      borderRadius: '50%',
      width: 120,
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  // Other entities in a circle around the hub
  const otherEntities = entities.filter(e => e.id !== 'na-hub');
  const angleStep = (2 * Math.PI) / otherEntities.length;

  const otherNodes: Node[] = otherEntities.map((entity, index) => {
    const angle = angleStep * index - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle) - 50;
    const y = centerY + radius * Math.sin(angle) - 30;

    return {
      id: entity.id,
      type: 'default',
      position: { x, y },
      data: {
        label: (
          <div className="flex flex-col items-center p-2">
            <span className="text-xl">{iconMap[entity.icon] || '📦'}</span>
            <span className="text-xs font-bold mt-1">{entity.shortName}</span>
          </div>
        ),
      },
      style: {
        background: categoryColors[entity.category].hex,
        color: 'white',
        border: `2px solid ${categoryColors[entity.category].hex}`,
        borderRadius: '12px',
        width: 100,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: entity.status === 'planned' ? 0.8 : 1,
      },
    };
  });

  return [hubNode, ...otherNodes];
};

// Convert connections to React Flow edges
const createEdges = (): Edge[] => {
  return connections.map(conn => ({
    id: conn.id,
    source: conn.source,
    target: conn.target,
    type: 'smoothstep',
    animated: conn.type === 'data-flow',
    label: conn.label,
    labelStyle: { fontSize: 10, fill: '#666' },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 },
    style: {
      stroke: conn.type === 'primary' ? '#475569' : conn.type === 'data-flow' ? '#10b981' : '#94a3b8',
      strokeWidth: conn.type === 'primary' ? 2 : 1,
      strokeDasharray: conn.type === 'secondary' ? '5,5' : undefined,
    },
    markerEnd: conn.bidirectional ? undefined : {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: conn.type === 'primary' ? '#475569' : '#94a3b8',
    },
  }));
};

export default function EcosystemMap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(createNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(createEdges());
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    const entity = entities.find(e => e.id === node.id);
    setSelectedEntity(entity || null);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedEntity(null);
  }, []);

  return (
    <div className="w-full h-screen flex">
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          attributionPosition="bottom-left"
        >
          <Background color="#e5e7eb" gap={20} />
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              const entity = entities.find(e => e.id === node.id);
              return entity ? categoryColors[entity.category].hex : '#475569';
            }}
          />
        </ReactFlow>

        {/* Legend */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-bold text-sm mb-2">Nothing Artificial Ecosystem</h3>
          <div className="space-y-1">
            {Object.entries(categoryColors).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 text-xs">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: value.hex }}
                />
                <span className="capitalize">{key.replace('-', ' ')}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t space-y-1 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-6 border-t-2 border-slate-600" />
              <span>Primary</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 border-t border-dashed border-slate-400" />
              <span>Secondary</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 border-t border-emerald-500" />
              <span>Data Flow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      {selectedEntity && (
        <EntityDetailPanel
          entity={selectedEntity}
          onClose={() => setSelectedEntity(null)}
        />
      )}
    </div>
  );
}
