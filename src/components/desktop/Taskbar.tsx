'use client';

import React, { useState, useEffect } from 'react';
import { useWindowManager } from '@/contexts/WindowManager';

const Taskbar = () => {
  const { windows, focusWindow, minimizeWindow } = useWindowManager();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 flex items-center justify-between px-4 z-40">
      {/* Left side - Application Menu */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">
          ◉
        </div>
      </div>

      {/* Center - Open Windows */}
      <div className="flex items-center space-x-1">
        {windows.map(window => (
          <button
            key={window.id}
            onClick={() => window.isMinimized ? focusWindow(window.id) : minimizeWindow(window.id)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              window.isMinimized
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {window.title}
          </button>
        ))}
      </div>

      {/* Right side - System Tray */}
      <div className="flex items-center space-x-4 text-white text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-2 border border-white rounded-sm relative">
            <div className="absolute inset-0.5 bg-green-400 rounded-sm"></div>
          </div>
          <span>100%</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 rounded-full bg-green-400"></div>
          <span>WiFi</span>
        </div>

        <div className="text-white">
          {currentTime.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;