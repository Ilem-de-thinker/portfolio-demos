import React, { useState, useEffect } from 'react';
import {
  DESIGNS,
  HOW_IT_WORKS_STEPS,
  INCLUDED_FEATURES,
  FAQS,
  WHATSAPP_NUMBER
} from './config.js';
import DesignCard from './components/DesignCard.jsx';
import InquiryDrawer from './components/InquiryDrawer.jsx';
import FaqAccordion from './components/FaqAccordion.jsx';
import StickyWhatsApp from './components/StickyWhatsApp.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import Cursor from './components/Cursor.jsx';
import { ArrowDown, Sparkles, MessageCircle, Layers, CheckCircle } from 'lucide-react';

export default function LandingApp({ onPreviewPortfolio }) {
  const [theme, setTheme] = useState('dark');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(DESIGNS[0]);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  // Initial theme check
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isDark ? 'dark' : 'light';
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSelectDesign = (design) => {
    setSelectedDesign(design);
    setDrawerOpen(true);
  };

  const handleLivePreview = (design) => {
    if (onPreviewPortfolio) {
      onPreviewPortfolio(design.id);
    } else {
      window.location.search = `?portfolio=${design.id}`;
    }
  };

  const handleScrollToDesigns = () => {
    const el = document.getElementById('architectures');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      theme === 'dark' ? 'bg-[#0A0A0B] text-stone-100' : 'bg-[#FAF9F5] text-stone-900'
    }`}>
      <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />

      {/* Top Bar: Strictly follows the 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors border-stone-200/60 dark:border-stone-800/80 bg-stone-50/80 dark:bg-[#0A0A0B]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="/"
            className="text-base sm:text-lg font-bold tracking-tight uppercase font-grotesk whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            The Five Ateliers
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            <a
              href="#architectures"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
            >
              Architectures
            </a>
            <a
              href="#process"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
            <a
              href="#specs"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
            >
              Specifications
            </a>
            <a
              href="#faqs"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
            >
              Questions
            </a>
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => {
                setSelectedDesign(DESIGNS[0]);
                setDrawerOpen(true);
              }}
              className="py-2 px-3.5 sm:py-2.5 sm:px-5 min-h-[40px] rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-stone-900 transition-all shadow-md whitespace-nowrap shrink-0 cursor-pointer flex items-center justify-center"
            >
              Select Design
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20 md:pt-36 md:pb-28 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Subtle decorative radial atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[300px] bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-600 dark:text-amber-400 font-mono font-medium">
            <span>Awwwards-Level Digital Craft</span>
            <span aria-hidden="true">·</span>
            <span>Zero Shared Templates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] sm:leading-[1.05] text-stone-900 dark:text-stone-100 mb-6 sm:mb-8 font-grotesk text-balance">
            Personal websites that make the world remember you.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
            Five completely independent personal portfolio architectures. Built from scratch for photographers, designers, filmmakers, artisans, and engineers who demand $1M agency craft.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleScrollToDesigns}
              className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-8 min-h-[44px] rounded-full text-xs font-bold tracking-widest uppercase bg-amber-400 hover:bg-amber-300 text-stone-950 transition-all flex items-center justify-center gap-3 shadow-xl cursor-pointer"
            >
              <span>Explore The 5 Blueprints</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={() => {
                const defaultMsg = encodeURIComponent("Hello! I want to build a bespoke personal portfolio website with your studio.");
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
              }}
              className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-8 min-h-[44px] rounded-full text-xs font-bold tracking-widest uppercase border border-stone-300 dark:border-stone-700 hover:border-stone-500 text-stone-700 dark:text-stone-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to inspect blueprints</span>
          <div className="w-px h-8 bg-stone-300 dark:bg-stone-700 animate-pulse" />
        </div>
      </section>

      {/* The 5 Architectures Showcase Section */}
      <section id="architectures" className="px-6 py-20 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-mono">
            01 // The Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-2 font-grotesk">
            Five Distinct Creative Souls
          </h2>
          <p className="text-stone-500 dark:text-stone-400 mt-3 text-base">
            Each portfolio is built with its own bespoke typography system, motion physics, custom cursor, and interactive narrative rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DESIGNS.map((design) => (
            <DesignCard
              key={design.id}
              design={design}
              onSelectDesign={handleSelectDesign}
              onLivePreview={handleLivePreview}
            />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="px-6 py-24 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-mono">
            02 // Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-2 font-grotesk">
            Effortless Ownership in 3 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              className="p-8 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-stone-100/50 dark:bg-stone-900/30 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-black font-mono text-amber-500/80 block mb-6">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included Specifications */}
      <section id="specs" className="px-6 py-24 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-mono">
            03 // Engineering Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-2 font-grotesk">
            What Sets These Apart From Templates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDED_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-stone-200/60 dark:border-stone-800/60 bg-stone-100/30 dark:bg-stone-900/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                  {feat.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faqs" className="px-6 py-24 max-w-4xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-mono">
            04 // Clarity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mt-2 font-grotesk">
            Frequently Asked Questions
          </h2>
        </div>

        <FaqAccordion faqs={FAQS} />
      </section>

      {/* Final WhatsApp Call To Action */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-10 md:p-16 overflow-hidden bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 text-stone-100 text-center flex flex-col items-center">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-medium">
              Start The Conversation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6 font-grotesk text-balance">
              Ready to present your work with true creative gravity?
            </h2>
            <p className="text-base text-stone-400 mb-8 leading-relaxed">
              Message us on WhatsApp. Tell us your discipline, and we will send you the deployment files or set up your domain today.
            </p>

            <button
              onClick={() => {
                const defaultMsg = encodeURIComponent("Hello! I'm interested in commissioning a personal portfolio from The Five Ateliers.");
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
              }}
              className="py-4 px-10 rounded-full text-xs font-bold tracking-widest uppercase bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 cursor-pointer mx-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect On WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Studio Footer */}
      <footer className="border-t border-stone-200/60 dark:border-stone-800/60 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-500 font-mono">
          <div>
            <span>THE FIVE ATELIERS © 2026</span>
            <span className="mx-2">·</span>
            <span>INDEPENDENT DIGITAL CRAFT</span>
          </div>

          <div className="flex gap-6">
            <a href="#architectures" className="hover:text-stone-300 transition-colors">Architectures</a>
            <a href="#process" className="hover:text-stone-300 transition-colors">Process</a>
            <a href="#faqs" className="hover:text-stone-300 transition-colors">FAQ</a>
          </div>
        </div>
      </footer>

      {/* Side Inquiry Drawer */}
      <InquiryDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        selectedDesign={selectedDesign}
        allDesigns={DESIGNS}
      />

      {/* Custom Sticky WhatsApp Button */}
      <StickyWhatsApp />
    </div>
  );
}
