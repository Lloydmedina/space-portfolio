'use client';

import React from 'react';
import { useWindowManager } from '@/contexts/WindowManager';

interface DesktopIconProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ComponentType;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, title, icon, component }) => {
  const { openWindow } = useWindowManager();

  const handleDoubleClick = () => {
    openWindow(id, title, component);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer select-none"
      onDoubleClick={handleDoubleClick}
    >
      <div className="text-white text-2xl mb-1">
        {icon}
      </div>
      <span className="text-white text-xs text-center leading-tight">
        {title}
      </span>
    </div>
  );
};

export default DesktopIcon;