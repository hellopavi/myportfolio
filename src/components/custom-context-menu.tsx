
'use client';

import React from 'react';
import { Undo2, Redo2, RefreshCw, Download } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CustomContextMenuProps {
  x: number;
  y: number;
  isOpen: boolean;
}

const MenuItem = ({ icon: Icon, label, onClick, href }: { icon: React.ElementType, label: string, onClick?: () => void, href?: string }) => {
  const content = (
    <div className="flex items-center gap-4 group">
      <Icon className="h-5 w-5 text-accent group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-headline-display tracking-wider uppercase">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} download className="block px-6 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-md" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="w-full text-left block px-6 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-md">
      {content}
    </button>
  );
};

export function CustomContextMenu({ x, y, isOpen }: CustomContextMenuProps) {
  if (!isOpen) return null;

  const handleBack = () => window.history.back();
  const handleForward = () => window.history.forward();
  const handleRefresh = () => window.location.reload();

  return (
    <div
      style={{ top: y, left: x }}
      className={cn(
        "context-menu fixed z-[100] w-72 rounded-xl border border-primary/20 bg-card/80 backdrop-blur-lg p-2 shadow-2xl shadow-primary/20"
      )}
    >
      <div className="flex flex-col">
        <MenuItem icon={Undo2} label="Back" onClick={handleBack} />
        <MenuItem icon={Redo2} label="Forward" onClick={handleForward} />
        <MenuItem icon={RefreshCw} label="Refresh" onClick={handleRefresh} />
        <div className="h-px my-2 bg-primary/20" />
        <MenuItem icon={Download} label="Download Resume" href={socialLinks.resume} />
      </div>
    </div>
  );
}
