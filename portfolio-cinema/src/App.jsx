import React, { useState, useEffect } from 'react';
import { content } from './content.js';
import Cursor from './components/Cursor.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Hero from './components/Hero.jsx';
import DirectorsStatement from './components/DirectorsStatement.jsx';
import HorizontalGallery from './components/HorizontalGallery.jsx';
import FilmModal from './components/FilmModal.jsx';
import Disciplines from './components/Disciplines.jsx';
import FestivalJourney from './components/FestivalJourney.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';

export default function PortfolioCinemaApp({ onBackToSelector }) {
  const [theme, setTheme] = useState('dark');
  const [cursorMode, setCursorMode] = useState('default');
  const [selectedFilm, setSelectedFilm] = useState(null);

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
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isLight
          ? 'bg-[#E7E5E0] text-[#1A1A1A] selection:bg-[#D4AF37] selection:text-black'
          : 'bg-[#080808] text-[#E7E5E0] selection:bg-[#D4AF37] selection:text-black'
      }`}
    >
      <Cursor mode={cursorMode} />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-current/20 px-6 md:px-12 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {onBackToSelector && (
            <button
              onClick={onBackToSelector}
              className="font-mono text-xs text-[#D4AF37] hover:underline cursor-pointer"
            >
              ← ALL ATELIERS
            </button>
          )}
          <a
            href="#"
            className="text-sm font-light tracking-[0.2em] uppercase font-cinema"
          >
            {content.meta.name}
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest opacity-80">
          <a href="#films" className="hover:text-[#D4AF37] transition-colors">
            Reel
          </a>
          <a href="#statement" className="hover:text-[#D4AF37] transition-colors">
            Statement
          </a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
            Slate
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            className="hidden sm:inline-block py-2 px-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
          >
            Direct Inquiry
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero
        onExplore={() => {
          const el = document.getElementById('films');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Directors Statement */}
      <DirectorsStatement />

      {/* Horizontal Gallery */}
      <HorizontalGallery
        onSelectFilm={(f) => setSelectedFilm(f)}
        setCursorMode={setCursorMode}
      />

      {/* Disciplines */}
      <Disciplines />

      {/* Festival Journey */}
      <FestivalJourney />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Film Slate Footer */}
      <footer className="py-12 px-6 md:px-16 border-t border-current/20 font-mono text-xs flex flex-col sm:flex-row justify-between items-center gap-4 opacity-75">
        <div>
          <span>MATEO THORNE // CINEMATOGRAPHY SLATE</span>
          <span className="mx-2">·</span>
          <span>REYKJAVIK & LONDON</span>
        </div>
        <div className="text-[#D4AF37]">
          KODAK 35MM / 70MM ARCHIVE
        </div>
      </footer>

      {/* Film Inspection Modal */}
      <FilmModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />
    </div>
  );
}
