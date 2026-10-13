import React, { useState, useEffect } from 'react';
import { content } from './content.js';
import Cursor from './components/Cursor.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import WorkIndex from './components/WorkIndex.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import Disciplines from './components/Disciplines.jsx';
import Journey from './components/Journey.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';

export default function PortfolioNoirApp({ onBackToSelector }) {
  const [theme, setTheme] = useState('dark');
  const [cursorMode, setCursorMode] = useState('default');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check initial preference
    const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = isLight ? 'light' : 'dark';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Color tokens
  // Light: warm paper off-white (#F8F6F0), ink black (#0E0E0E), blood-red (#D11A2A)
  // Dark: near-black charcoal (#0A0A0A), ivory (#FAF8F5)
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ease-out font-sans ${
        isDark
          ? 'bg-[#0A0A0A] text-[#FAF8F5] selection:bg-[#D11A2A] selection:text-white'
          : 'bg-[#F8F6F0] text-[#0E0E0E] selection:bg-[#D11A2A] selection:text-white'
      }`}
    >
      <Cursor mode={cursorMode} />

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b border-current/15 px-6 md:px-12 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          {onBackToSelector && (
            <button
              onClick={onBackToSelector}
              className="text-[10px] uppercase font-mono tracking-widest text-[#D11A2A] hover:underline cursor-pointer"
            >
              ← All Ateliers
            </button>
          )}
          <a
            href="#top"
            className="text-base font-serif tracking-tight uppercase font-medium whitespace-nowrap shrink-0"
          >
            {content.meta.name}
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest opacity-80">
          <a href="#works" className="hover:text-[#D11A2A] transition-colors whitespace-nowrap shrink-0">
            Selected Works
          </a>
          <a href="#about" className="hover:text-[#D11A2A] transition-colors whitespace-nowrap shrink-0">
            Story
          </a>
          <a href="#contact" className="hover:text-[#D11A2A] transition-colors whitespace-nowrap shrink-0">
            Commissions
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            className="hidden sm:inline-block py-2 px-5 rounded-full border border-current hover:bg-[#D11A2A] hover:border-[#D11A2A] hover:text-white text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
          >
            Commission
          </a>
        </div>
      </header>

      {/* Hero */}
      <Hero onExploreClick={handleScrollToWork} />

      {/* Manifesto */}
      <Manifesto />

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#D11A2A]">
              [ABOUT JULIAN VANCE]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight mt-2 mb-8">
              {content.about.headline}
            </h2>
            <div className="space-y-6 text-base opacity-80 leading-relaxed font-sans">
              {content.about.storyParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t lg:border-t-0 lg:border-l border-current/20 pt-8 lg:pt-0 lg:pl-12">
            {content.about.stats.map((stat, idx) => (
              <div key={idx}>
                <span className="text-4xl sm:text-5xl font-serif font-light text-[#D11A2A] block mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Index */}
      <WorkIndex
        onSelectProject={(p) => setSelectedProject(p)}
        setCursorMode={setCursorMode}
      />

      {/* Disciplines */}
      <Disciplines />

      {/* Exhibition Journey */}
      <Journey />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 border-t border-current/20 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest opacity-60">
        <div>
          <span>JULIAN VANCE ATELIER © 2026</span>
          <span className="mx-2">·</span>
          <span>PARIS / KYOTO</span>
        </div>
        <div>
          <span>HASSELBLAD & LEICA MONOGRAPHS</span>
        </div>
      </footer>

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
