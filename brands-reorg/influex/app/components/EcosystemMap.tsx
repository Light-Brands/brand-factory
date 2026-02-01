"use client";

import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from "reactflow";
import "reactflow/dist/style.css";

import EntityNode from "./EntityNode";
import EntityDetailPanel from "./EntityDetailPanel";
import Legend from "./Legend";
import { createNodes, createEdges } from "@/lib/layout-algorithm";
import { getEntityById, type EcosystemEntity } from "@/lib/ecosystem-data";
import { ENGINE_COLORS, type EngineId } from "@/lib/constants";

const nodeTypes = {
  entityNode: EntityNode,
};

export default function EcosystemMap() {
  const initialNodes = useMemo(() => createNodes(), []);
  const initialEdges = useMemo(() => createEdges(), []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(
    null
  );

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      const entity = getEntityById(node.id);
      if (entity) {
        setSelectedEntity(entity);

        // Update node selection state
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            data: {
              ...n.data,
              selected: n.id === node.id,
            },
          }))
        );

        // Highlight connected edges
        setEdges((eds) =>
          eds.map((e) => {
            const isConnected = e.source === node.id || e.target === node.id;
            const sourceEntity = getEntityById(e.source);
            const color = sourceEntity
              ? ENGINE_COLORS[sourceEntity.engine as EngineId]
              : "#64748B";

            return {
              ...e,
              style: {
                ...e.style,
                opacity: isConnected ? 1 : 0.3,
                strokeWidth: isConnected ? (e.target === "client-dashboard" ? 4 : 3) : 2,
              },
            };
          })
        );
      }
    },
    [setNodes, setEdges]
  );

  const handlePaneClick = useCallback(() => {
    setSelectedEntity(null);
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: {
          ...n.data,
          selected: false,
        },
      }))
    );
    setEdges((eds) =>
      eds.map((e) => {
        const sourceEntity = getEntityById(e.source);
        const targetEntity = getEntityById(e.target);
        const isPrimary = targetEntity?.type === "hub";
        const color = sourceEntity
          ? ENGINE_COLORS[sourceEntity.engine as EngineId]
          : "#64748B";

        return {
          ...e,
          style: {
            stroke: color,
            strokeWidth: isPrimary ? 3 : 2,
            strokeDasharray: e.id === "authority-to-hub" ? "5,5" : undefined,
            opacity: isPrimary ? 0.8 : 0.5,
          },
        };
      })
    );
  }, [setNodes, setEdges]);

  const handleSelectEntity = useCallback(
    (id: string) => {
      const entity = getEntityById(id);
      if (entity) {
        setSelectedEntity(entity);
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            data: {
              ...n.data,
              selected: n.id === id,
            },
          }))
        );
      }
    },
    [setNodes]
  );

  const handleClosePanel = useCallback(() => {
    setSelectedEntity(null);
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: {
          ...n.data,
          selected: false,
        },
      }))
    );
    // Reset edges
    handlePaneClick();
  }, [setNodes, handlePaneClick]);

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
          minZoom: 0.5,
          maxZoom: 1.5,
        }}
        minZoom={0.3}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        proOptions={{ hideAttribution: true }}
        className="bg-transparent"
      >
        <Background color="#334155" gap={40} size={1} />
        <Controls
          showInteractive={false}
          className="!bg-slate-900/80 !border-white/10 !rounded-xl overflow-hidden"
        />
      </ReactFlow>

      <Legend />

      <EntityDetailPanel
        entity={selectedEntity}
        onClose={handleClosePanel}
        onSelectEntity={handleSelectEntity}
      />
    </div>
  );
}
