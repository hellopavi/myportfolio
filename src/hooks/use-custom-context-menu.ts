
'use client';

import { useState, useEffect, useCallback } from 'react';

export function useCustomContextMenu() {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; isOpen: boolean } | null>(null);

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setContextMenu({ x: event.clientX, y: event.clientY, isOpen: true });
  }, []);

  const handleClick = useCallback(() => {
    if (contextMenu?.isOpen) {
      setContextMenu(null);
    }
  }, [contextMenu]);

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, [handleContextMenu, handleClick]);

  return { contextMenu };
}
