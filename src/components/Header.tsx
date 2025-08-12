'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Portfolio
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* System Tray */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3 text-sm">
              <span className="text-gray-300">100%</span>
              <div className="w-2 h-4 rounded-sm bg-green-400"></div>
              <span className="text-gray-300">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </span>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
  >
    {children}
  </Link>
);

export default Header;
