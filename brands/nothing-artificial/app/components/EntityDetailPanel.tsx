'use client';

import React from 'react';
import { Entity, categoryColors, categoryLabels, iconMap, entities } from '../lib/ecosystem-data';

interface EntityDetailPanelProps {
  entity: Entity;
  onClose: () => void;
}

export default function EntityDetailPanel({ entity, onClose }: EntityDetailPanelProps) {
  const colors = categoryColors[entity.category];
  const connectedEntities = entities.filter(e => entity.connections.includes(e.id));

  return (
    <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto shadow-xl">
      {/* Header */}
      <div
        className="p-6 text-white"
        style={{ backgroundColor: colors.hex }}
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="text-3xl">{iconMap[entity.icon] || '📦'}</span>
            <h2 className="text-xl font-bold mt-2">{entity.name}</h2>
            <p className="text-sm opacity-90">{entity.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xl"
          >
            ×
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="text-xs bg-white/20 px-2 py-1 rounded">
            {categoryLabels[entity.category]}
          </span>
          <span className={`text-xs px-2 py-1 rounded ${
            entity.status === 'active' ? 'bg-green-500' :
            entity.status === 'planned' ? 'bg-yellow-500' : 'bg-blue-500'
          }`}>
            {entity.status.charAt(0).toUpperCase() + entity.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">About</h3>
          <p className="text-sm text-gray-600">{entity.description}</p>
        </div>

        {/* Location */}
        {entity.location && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-sm text-gray-600">{entity.location}</p>
          </div>
        )}

        {/* Metrics */}
        {entity.metrics && entity.metrics.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-3">
              {entity.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 text-center"
                >
                  <div className="text-lg font-bold" style={{ color: colors.hex }}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Applications */}
        {entity.aiApplications && entity.aiApplications.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">AI Applications</h3>
            <ul className="space-y-2">
              {entity.aiApplications.map((app, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Connected Entities */}
        {connectedEntities.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Connected To</h3>
            <div className="flex flex-wrap gap-2">
              {connectedEntities.map((connected) => (
                <span
                  key={connected.id}
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full text-white"
                  style={{ backgroundColor: categoryColors[connected.category].hex }}
                >
                  {iconMap[connected.icon] || '📦'}
                  {connected.shortName}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          Part of the Nothing Artificial Ecosystem
        </p>
      </div>
    </div>
  );
}
