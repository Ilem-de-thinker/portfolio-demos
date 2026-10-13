import React, { useState, useEffect } from 'react';
import { content } from './content.js';
import Cursor from './components/Cursor.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Hero from './components/Hero.jsx';
import EngineeredSystems from './components/EngineeredSystems.jsx';
import CircuitTimeline from './components/CircuitTimeline.jsx';
import ProtocolsStack from './components/ProtocolsStack.jsx';
import Endorsements from './components/Endorsements.jsx';
import TerminalContact from './components/TerminalContact.jsx';

export default function PortfolioSignalApp({ onBackToSelector }) {
  const [theme, setTheme] = useState('dark');
  const [cursorMode, setCursorMode] = useState('default');

  useEffect(() => {
    const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = isLight ? 'light' : 'dark';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isLight
          ? 'bg-[#F0F4F8] text-[#0B1220] selection:bg-[#00F0FF] selection:text-black'
          : 'bg-[#05080E] text-[#F0F4F8] selection:bg-[#00F0FF] selection:text-black'
      }`}
    >
      <Cursor mode={cursorMode} />

      {/* Top Bar Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-current/20 px-6 md:px-12 py-3 flex items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-4">
          {onBackToSelector && (
            <button
              onClick={onBackToSelector}
              className="font-bold text-[#00F0FF] hover:underline cursor-pointer"
            >
              ← ALL ATELIERS
            </button>
          )}
          <a href="#" className="font-bold text-sm tracking-tight text-[#00F0FF]">
            {content.meta.name}
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6 uppercase font-bold text-stone-400">
          <a href="#systems" className="hover:text-[#00F0FF] transition-colors">
            Cores
          </a>
          <a href="#contact" className="hover:text-[#00F0FF] transition-colors">
            Terminal
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            className="hidden sm:inline-block py-2 px-4 bg-[#00F0FF] text-black font-bold uppercase hover:bg-white transition-colors"
          >
            DISPATCH
          </a>
        </div>
      </header>

      {/* Hero with Interactive Canvas Field & Scramble */}
      <Hero
        onExplore={() => {
          const el = document.getElementById('systems');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Engineered Systems with 3D Tilt */}
      <EngineeredSystems setCursorMode={setCursorMode} />

      {/* Circuit Timeline with Scroll-Scrubbed Trace */}
      <CircuitTimeline />

      {/* Protocols Stack */}
      <ProtocolsStack />

      {/* Endorsements */}
      <Endorsements />

      {/* Terminal Dispatch Contact */}
      <TerminalContact />

      {/* Signal Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-current/20 font-mono text-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500">
        <div>
          <span>KAELEN VANCE // DISTRIBUTED ARCHITECTURES</span>
          <span className="mx-2">·</span>
          <span>TOKYO & SAN FRANCISCO</span>
        </div>
        <div className="text-[#00F0FF] font-bold">
          LATENCY GUARANTEE: SUB-MICROSECOND
        </div>
      </footer>
    </div>
  );
}
