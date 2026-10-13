import React, { useState, useEffect } from 'react';
import { content } from './content.js';
import Cursor from './components/Cursor.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Hero from './components/Hero.jsx';
import StackedCards from './components/StackedCards.jsx';
import SystemsPhilosophy from './components/SystemsPhilosophy.jsx';
import Timeline from './components/Timeline.jsx';
import Endorsements from './components/Endorsements.jsx';
import Contact from './components/Contact.jsx';

export default function PortfolioSwissApp({ onBackToSelector }) {
  const [theme, setTheme] = useState('light');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollPercent(totalScroll > 0 ? (current / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen transition-colors duration-200 font-sans ${
        isLight
          ? 'bg-white text-black selection:bg-[#FF4800] selection:text-black'
          : 'bg-[#050505] text-white selection:bg-[#FF4800] selection:text-black'
      }`}
    >
      <Cursor />

      {/* Top Bar Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b-2 border-current px-6 md:px-12 py-3 flex items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-4">
          {onBackToSelector && (
            <button
              onClick={onBackToSelector}
              className="font-bold text-[#FF4800] hover:underline cursor-pointer"
            >
              ← ALL ATELIERS
            </button>
          )}
          <a href="#" className="font-black text-sm uppercase tracking-tight">
            {content.meta.name}
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6 uppercase font-bold">
          <a href="#works" className="hover:text-[#FF4800] transition-colors">
            01. Systems
          </a>
          <a href="#philosophy" className="hover:text-[#FF4800] transition-colors">
            02. Invariants
          </a>
          <a href="#contact" className="hover:text-[#FF4800] transition-colors">
            03. Dispatch
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            className="hidden sm:inline-block py-2 px-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase hover:bg-[#FF4800] hover:text-black transition-colors"
          >
            ENGAGE
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero
        scrollPercent={scrollPercent}
        onExplore={() => {
          const el = document.getElementById('works');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Stacked Cards */}
      <StackedCards />

      {/* Philosophy */}
      <SystemsPhilosophy />

      {/* Timeline */}
      <Timeline />

      {/* Endorsements */}
      <Endorsements />

      {/* Contact */}
      <Contact />

      {/* Swiss Brutal Footer */}
      <footer className="py-8 px-6 md:px-12 border-t-2 border-current font-mono text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span>ELENA RADEK // SYSTEMS GUILD ZURICH</span>
          <span className="mx-2">■</span>
          <span>100% MATHEMATICAL INTEGRITY</span>
        </div>
        <div className="text-[#FF4800] font-bold">
          BUILD: SWISS-2026.04
        </div>
      </footer>
    </div>
  );
}
