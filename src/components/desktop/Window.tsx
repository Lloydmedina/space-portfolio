'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWindowManager, WindowData } from '@/contexts/WindowManager';

interface WindowProps {
  window: WindowData;
}

const Window: React.FC<WindowProps> = ({ window }) => {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition } = useWindowManager();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    });
    focusWindow(window.id);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const maxX = globalThis.innerWidth - window.size.width;
      const maxY = globalThis.innerHeight - window.size.height;
      const newX = Math.max(0, Math.min(e.clientX - dragStart.x, maxX));
      const newY = Math.max(0, Math.min(e.clientY - dragStart.y, maxY));

      updateWindowPosition(window.id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, window.id, window.size, updateWindowPosition]);

  if (window.isMinimized) return null;

  const Component = window.component;

  return (
    <motion.div
      ref={windowRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute bg-gray-800 border border-gray-600 rounded-lg shadow-2xl overflow-hidden"
      style={{
        left: window.isMaximized ? 0 : window.position.x,
        top: window.isMaximized ? 0 : window.position.y,
        width: window.isMaximized ? '100vw' : window.size.width,
        height: window.isMaximized ? 'calc(100vh - 48px)' : window.size.height,
        zIndex: window.zIndex,
      }}
      onMouseDown={() => focusWindow(window.id)}
    >
      {/* Window Title Bar */}
      <div
        className="bg-gray-700 border-b border-gray-600 px-4 py-2 flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <h3 className="text-white text-sm font-medium">{window.title}</h3>
        <div className="window-controls flex items-center space-x-2">
          <button
            onClick={() => minimizeWindow(window.id)}
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"
            title="Minimize"
          />
          <button
            onClick={() => maximizeWindow(window.id)}
            className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"
            title="Maximize"
          />
          <button
            onClick={() => closeWindow(window.id)}
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"
            title="Close"
          />
        </div>
      </div>

      {/* Window Content */}
      <div className="h-full overflow-auto bg-white">
        <Component />
      </div>
    </motion.div>
  );
};

export default Window;