/**
 * FileTree Component
 * Recursive tree renderer for folder/file navigation
 */

import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { FolderIcon, DocumentIcon, ChevronRightIcon } from '../../components/Icons';
import type { PlanningDocFolder } from '../../data/planning-docs';

interface FileTreeProps {
  nodes: PlanningDocFolder[];
  activeDocPath: string | null;
  onSelectDoc: (relativePath: string) => void;
  depth?: number;
}

const FileTreeNode: React.FC<{
  node: PlanningDocFolder;
  activeDocPath: string | null;
  onSelectDoc: (relativePath: string) => void;
  depth: number;
}> = ({ node, activeDocPath, onSelectDoc, depth }) => {
  const [isOpen, setIsOpen] = useState(depth < 1);

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center gap-1.5 w-full text-left py-1 px-1 rounded',
            'text-xs text-text-muted hover:text-text-secondary transition-colors',
            'hover:bg-depth-surface/50'
          )}
          style={{ paddingLeft: `${depth * 12 + 4}px` }}
        >
          <ChevronRightIcon
            size={12}
            className={cn(
              'shrink-0 transition-transform duration-200',
              isOpen && 'rotate-90'
            )}
          />
          <FolderIcon size={14} className="shrink-0 text-radiance-gold/60" />
          <span className="truncate">{node.name}</span>
        </button>
        {isOpen && node.children && (
          <div>
            {node.children.map((child) => (
              <FileTreeNode
                key={child.path}
                node={child}
                activeDocPath={activeDocPath}
                onSelectDoc={onSelectDoc}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const isActive = activeDocPath === node.path;

  return (
    <button
      onClick={() => onSelectDoc(node.path)}
      className={cn(
        'flex items-center gap-1.5 w-full text-left py-1 px-1 rounded',
        'text-xs transition-colors',
        isActive
          ? 'bg-wisdom-violet/15 text-wisdom-violet'
          : 'text-text-muted hover:text-text-secondary hover:bg-depth-surface/50'
      )}
      style={{ paddingLeft: `${depth * 12 + 4}px` }}
    >
      <DocumentIcon size={13} className="shrink-0" />
      <span className="truncate">{node.name.replace(/\.md$/, '')}</span>
    </button>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({
  nodes,
  activeDocPath,
  onSelectDoc,
  depth = 0,
}) => {
  return (
    <div className="space-y-0.5">
      {nodes.map((node) => (
        <FileTreeNode
          key={node.path}
          node={node}
          activeDocPath={activeDocPath}
          onSelectDoc={onSelectDoc}
          depth={depth}
        />
      ))}
    </div>
  );
};

export default FileTree;
