import React, { useState, useEffect } from 'react';
import { content } from './content.js';
import Cursor from './components/Cursor.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Hero from './components/Hero.jsx';
import JournalStory from './components/JournalStory.jsx';
import VesselEditions from './components/VesselEditions.jsx';
import VesselModal from './components/VesselModal.jsx';
import EarthMaterials from './components/EarthMaterials.jsx';
import ResidencyJourney from './components/ResidencyJourney.jsx';
import CollectorLetters from './components/CollectorLetters.jsx';
import Contact from './components/Contact.jsx';
import { Menu, X } from 'lucide-react';

export default function PortfolioAtelierApp({ onBackToSelector }) {
  const [theme, setTheme] = useState('light');
  const [cursorMode, setCursorMode] = useState('default');
  const [selectedVessel, setSelectedVessel] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isDark ? 'dark' : 'light';
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isDark
          ? 'dark bg-[#12100E] text-white selection:bg-[#C37B5C] selection:text-white'
          : 'bg-[#FAF7F2] text-[#161311] selection:bg-[#C37B5C] selection:text-white'
      }`}
    >
      <Cursor mode={cursorMode} />

      {/* Top Bar Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 sm:px-6 md:px-16 py-3.5 sm:py-4 flex items-center justify-between gap-4 transition-colors ${
          isDark
            ? 'bg-[#12100E]/90 border-white/10 text-white'
            : 'bg-[#FAF7F2]/90 border-stone-800/10 text-[#161311]'
        }`}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {onBackToSelector && (
            <button
              onClick={onBackToSelector}
              className="text-[11px] sm:text-xs uppercase tracking-widest font-mono text-[#C37B5C] dark:text-[#E08A68] hover:underline cursor-pointer min-h-[44px] flex items-center"
            >
              ← ALL ATELIERS
            </button>
          )}
          <a
            href="#"
            className={`text-base sm:text-lg font-serif italic tracking-wide font-medium transition-colors ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}
          >
            {content.meta.name}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300">
          <a href="#vessels" className="hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors">
            Vessels
          </a>
          <a href="#journal" className="hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors">
            Journal
          </a>
          <a href="#materials" className="hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors">
            Materials
          </a>
          <a href="#contact" className="hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors">
            Studio Visit
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          
          <a
            href="#contact"
            className="hidden sm:inline-block py-2 px-5 sm:px-6 rounded-full border border-[#C37B5C] dark:border-[#E08A68] text-[#C37B5C] dark:text-[#E08A68] hover:bg-[#C37B5C] dark:hover:bg-[#E08A68] hover:text-white dark:hover:text-[#12100E] text-xs font-serif italic tracking-wider transition-colors cursor-pointer min-h-[40px] flex items-center"
          >
            Private Inquiries
          </a>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle mobile menu"
            className={`md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
              isDark
                ? 'border-white/20 text-white hover:border-[#E08A68]'
                : 'border-stone-800/20 text-stone-900 hover:border-[#C37B5C]'
            }`}
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileNavOpen && (
        <div
          className={`md:hidden fixed inset-x-0 top-[61px] z-30 border-b shadow-xl backdrop-blur-xl p-6 transition-all duration-300 ${
            isDark
              ? 'bg-[#181513]/95 border-white/10 text-white'
              : 'bg-[#FAF7F2]/95 border-stone-800/10 text-[#161311]'
          }`}
        >
          <nav className="flex flex-col gap-4 text-sm font-mono uppercase tracking-widest">
            <a
              href="#vessels"
              onClick={closeMobileNav}
              className="py-2.5 border-b border-current/10 hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors flex items-center justify-between"
            >
              <span>Vessels & Editions</span>
              <span>→</span>
            </a>
            <a
              href="#journal"
              onClick={closeMobileNav}
              className="py-2.5 border-b border-current/10 hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors flex items-center justify-between"
            >
              <span>Studio Diary</span>
              <span>→</span>
            </a>
            <a
              href="#materials"
              onClick={closeMobileNav}
              className="py-2.5 border-b border-current/10 hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors flex items-center justify-between"
            >
              <span>Earth Alchemy</span>
              <span>→</span>
            </a>
            <a
              href="#contact"
              onClick={closeMobileNav}
              className="py-2.5 hover:text-[#C37B5C] dark:hover:text-[#E08A68] transition-colors flex items-center justify-between"
            >
              <span>Studio Visit & Inquiries</span>
              <span>→</span>
            </a>
          </nav>
        </div>
      )}

      {/* Hero */}
      <Hero
        isDark={isDark}
        onExplore={() => {
          const el = document.getElementById('vessels');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Journal Story */}
      <JournalStory isDark={isDark} />

      {/* Handcrafted Vessel Editions */}
      <VesselEditions
        isDark={isDark}
        onSelectVessel={(v) => setSelectedVessel(v)}
        setCursorMode={setCursorMode}
      />

      {/* Earth Materials */}
      <EarthMaterials isDark={isDark} />

      {/* Residency Journey */}
      <ResidencyJourney isDark={isDark} />

      {/* Collector Letters */}
      <CollectorLetters isDark={isDark} />

      {/* Contact */}
      <Contact isDark={isDark} />

      {/* Quiet Signature Footer */}
      <footer
        className={`py-12 px-4 sm:px-6 md:px-16 border-t max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono transition-colors ${
          isDark
            ? 'border-white/10 text-stone-300'
            : 'border-stone-800/10 text-stone-600'
        }`}
      >
        <div>
          <span>CAMILLE LAURENT ATELIER © 2026</span>
          <span className="mx-2">·</span>
          <span>PROVENCE & KYOTO</span>
        </div>
        <div className="font-serif italic text-sm text-[#C37B5C] dark:text-[#E08A68]">
          The memory of water in stone.
        </div>
      </footer>

      {/* Vessel Modal */}
      <VesselModal
        isDark={isDark}
        vessel={selectedVessel}
        onClose={() => setSelectedVessel(null)}
      />
    </div>
  );
}
