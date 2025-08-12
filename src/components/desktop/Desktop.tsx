'use client';

import React from 'react';
import { WindowManagerProvider, useWindowManager } from '@/contexts/WindowManager';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Taskbar from './Taskbar';
import AboutWindow from './AboutWindow';
import ProjectsWindow from './ProjectsWindow';
import ContactWindow from './ContactWindow';

const DesktopContent = () => {
  const { windows } = useWindowManager();

  return (
    <>
      {/* Desktop Icons */}
      <div className="absolute top-8 left-8 space-y-4 z-10">
        <DesktopIcon
          id="about"
          title="About Me"
          icon="👤"
          component={AboutWindow}
        />
        <DesktopIcon
          id="projects"
          title="Projects"
          icon="🚀"
          component={ProjectsWindow}
        />
        <DesktopIcon
          id="contact"
          title="Contact"
          icon="📧"
          component={ContactWindow}
        />
      </div>

      {/* Windows */}
      {windows.map(window => (
        <Window key={window.id} window={window} />
      ))}

      {/* Taskbar */}
      <Taskbar />
    </>
  );
};

const Desktop = () => {
  return (
    <WindowManagerProvider>
      <div className="h-screen w-screen overflow-hidden relative" style={{ paddingBottom: '48px' }}>
        <DesktopContent />
      </div>
    </WindowManagerProvider>
  );
};

export default Desktop;