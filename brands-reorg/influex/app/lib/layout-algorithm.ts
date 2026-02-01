import { type Node, type Edge } from "reactflow";
import { entities, connections, type EcosystemEntity } from "./ecosystem-data";
import { ENGINE_COLORS, NODE_SIZES, type EngineId } from "./constants";

// Canvas dimensions
const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 900;
const CENTER_X = CANVAS_WIDTH / 2;
const CENTER_Y = CANVAS_HEIGHT / 2;

// Layout radii
const ENGINE_RADIUS = 320;
const SATELLITE_RADIUS = 140;

// Engine positioning (angles in degrees, clockwise from top)
// Strategically positioned based on their role
const ENGINE_POSITIONS: Record<string, number> = {
  "authority-engine": 270, // Top (12 o'clock) - Thought leadership above all
  "brand-engine": 320, // Top-right - AI brand creation
  "sales-engine": 20, // Right - Revenue
  "platform-core": 70, // Bottom-right - Infrastructure
  "operations-engine": 120, // Bottom - Quality
  "marketing-engine": 170, // Bottom-left - Campaigns
  "promo-engine": 220, // Left - Network
};

// Convert degrees to radians
function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

// Calculate position on a circle
function getCirclePosition(
  centerX: number,
  centerY: number,
  radius: number,
  angleDegrees: number
): { x: number; y: number } {
  const angleRadians = toRadians(angleDegrees);
  return {
    x: centerX + radius * Math.cos(angleRadians),
    y: centerY + radius * Math.sin(angleRadians),
  };
}

// Get satellite positions around an engine
function getSatellitePositions(
  engineX: number,
  engineY: number,
  count: number,
  baseAngle: number
): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  const angleSpread = 90; // Satellites spread over 90 degrees
  const startAngle = baseAngle - angleSpread / 2;

  for (let i = 0; i < count; i++) {
    const angle = startAngle + (angleSpread / (count - 1 || 1)) * i;
    positions.push(getCirclePosition(engineX, engineY, SATELLITE_RADIUS, angle));
  }

  return positions;
}

// Create ReactFlow nodes from entities
export function createNodes(): Node[] {
  const nodes: Node[] = [];

  entities.forEach((entity) => {
    let position = { x: 0, y: 0 };
    const size = NODE_SIZES[entity.type];

    if (entity.type === "hub") {
      // Client Dashboard at center
      position = {
        x: CENTER_X - size.width / 2,
        y: CENTER_Y - size.height / 2,
      };
    } else if (entity.type === "engine") {
      // Engines on inner ring
      const angleDegrees = ENGINE_POSITIONS[entity.id] || 0;
      const circlePos = getCirclePosition(CENTER_X, CENTER_Y, ENGINE_RADIUS, angleDegrees);
      position = {
        x: circlePos.x - size.width / 2,
        y: circlePos.y - size.height / 2,
      };
    } else if (entity.type === "satellite" && entity.parent) {
      // Satellites around their parent engine
      const parentEntity = entities.find((e) => e.id === entity.parent);
      if (parentEntity) {
        const parentAngle = ENGINE_POSITIONS[entity.parent] || 0;
        const parentPos = getCirclePosition(CENTER_X, CENTER_Y, ENGINE_RADIUS, parentAngle);

        // Get all satellites for this parent
        const siblings = entities.filter((e) => e.parent === entity.parent);
        const siblingIndex = siblings.findIndex((s) => s.id === entity.id);

        // Calculate satellite positions - spread outward from center
        const outwardAngle = parentAngle; // Point away from hub
        const satellitePositions = getSatellitePositions(
          parentPos.x,
          parentPos.y,
          siblings.length,
          outwardAngle
        );

        if (siblingIndex >= 0 && siblingIndex < satellitePositions.length) {
          const satPos = satellitePositions[siblingIndex];
          position = {
            x: satPos.x - size.width / 2,
            y: satPos.y - size.height / 2,
          };
        }
      }
    }

    nodes.push({
      id: entity.id,
      type: "entityNode",
      position,
      data: {
        entity,
        color: ENGINE_COLORS[entity.engine as EngineId],
      },
    });
  });

  return nodes;
}

// Create ReactFlow edges from connections
export function createEdges(): Edge[] {
  return connections.map((conn) => {
    const sourceEntity = entities.find((e) => e.id === conn.source);
    const targetEntity = entities.find((e) => e.id === conn.target);

    // Determine if this is an engine-to-hub connection (primary)
    const isPrimary = targetEntity?.type === "hub";
    const color = sourceEntity
      ? ENGINE_COLORS[sourceEntity.engine as EngineId]
      : "#64748B";

    return {
      id: conn.id,
      source: conn.source,
      target: conn.target,
      type: "smoothstep",
      animated: conn.animated || false,
      style: {
        stroke: color,
        strokeWidth: isPrimary ? 3 : 2,
        strokeDasharray: conn.style === "dashed" ? "5,5" : undefined,
        opacity: isPrimary ? 0.8 : 0.5,
      },
    };
  });
}

// Get layout bounds for fitting the view
export function getLayoutBounds() {
  return {
    x: 0,
    y: 0,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
  };
}
