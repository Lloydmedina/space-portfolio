'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export interface WindowData {
  id: string;
  title: string;
  component: React.ComponentType;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

interface WindowManagerContextType {
  windows: WindowData[];
  openWindow: (id: string, title: string, component: React.ComponentType) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};

export const WindowManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1000);

  const openWindow = useCallback((id: string, title: string, component: React.ComponentType) => {
    setWindows(prev => {
      // Don't open if already exists, just focus it
      const existing = prev.find(w => w.id === id);
      if (existing) {
        return prev.map(w => 
          w.id === id 
            ? { ...w, zIndex: nextZIndex, isMinimized: false }
            : w
        );
      }

      // Create new window
      const newWindow: WindowData = {
        id,
        title,
        component,
        isMinimized: false,
        isMaximized: false,
        position: { x: 100 + (prev.length * 30), y: 80 + (prev.length * 30) },
        size: { width: 800, height: 600 },
        zIndex: nextZIndex,
      };

      return [...prev, newWindow];
    });
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const closeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized, zIndex: nextZIndex } : w
    ));
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const focusWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
    ));
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const updateWindowPosition = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, position } : w
    ));
  }, []);

  const updateWindowSize = useCallback((id: string, size: { width: number; height: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, size } : w
    ));
  }, []);

  return (
    <WindowManagerContext.Provider value={{
      windows,
      openWindow,
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      focusWindow,
      updateWindowPosition,
      updateWindowSize,
    }}>
      {children}
    </WindowManagerContext.Provider>
  );
};