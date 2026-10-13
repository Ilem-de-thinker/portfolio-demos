import React, { useState, useEffect } from 'react';
import { content } from '../content.js';

export default function Hero({ onExplore }) {
  const [letterboxOpen, setLetterboxOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Animate letterbox opening on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterboxOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate title scale and opacity based on scroll
  const titleScale = 1 + Math.min(scrollY * 0.003, 2.5);
  const titleOpacity = Math.max(1 - scrollY * 0.0025, 0);

  return (
    <section className="relative min-h-[92vh] sm:min-h-[110vh] w-full flex flex-col justify-between overflow-hidden select-none bg-black text-[#E7E5E0]">
      {/* Cinematic 2.39:1 Letterbox Bars that animate open on load */}
      <div
        className={`fixed top-0 inset-x-0 bg-black z-50 transition-all duration-1000 ease-out border-b border-stone-800 ${
          letterboxOpen ? 'h-0' : 'h-1/5 sm:h-1/4'
        }`}
      />
      <div
        className={`fixed bottom-0 inset-x-0 bg-black z-50 transition-all duration-1000 ease-out border-t border-stone-800 ${
          letterboxOpen ? 'h-0' : 'h-1/5 sm:h-1/4'
        }`}
      />

      {/* Background Full-Bleed Scene with Parallax */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
        }}
      >
        <img
          src={content.meta.heroImage}
          alt="Cinematic Icelandic Twilight"
          className="w-full h-full object-cover brightness-75 contrast-125 scale-110"
        />
        {/* Cinematic atmospheric overlays & grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      </div>

      {/* Top Slate Telemetry */}
      <div className="relative z-20 px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 flex justify-between items-start text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-stone-400 gap-2">
        <div>
          <span className="text-[#D4AF37] font-bold block mb-0.5">● ROLL 04 · SCENE 01</span>
          <span>{content.hero.fps}</span>
        </div>
        <div className="text-right">
          <span className="text-[#D4AF37]">{content.hero.timecode}</span>
          <span className="block text-[9px] sm:text-[10px] text-stone-500">2.39:1 ANAMORPHIC WIDESCREEN</span>
        </div>
      </div>

      {/* Pinned Scaling Title that fills screen on scroll and dissolves */}
      <div
        className="relative z-20 my-auto text-center px-4 sm:px-6 transition-transform duration-75 ease-out"
        style={{
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
        }}
      >
        <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] font-mono text-[#D4AF37] block mb-3 sm:mb-4">
          A FILM PORTFOLIO BY
        </span>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white leading-none font-cinema">
          {content.hero.title}
        </h1>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase text-stone-300 max-w-2xl mx-auto">
          {content.hero.discipline}
        </p>
      </div>

      {/* Bottom Slate Info */}
      <div className="relative z-20 px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs font-mono tracking-wider border-t border-stone-800/80 pt-4 sm:pt-6">
        <span className="text-stone-400 italic font-sans text-xs sm:text-sm max-w-md text-center sm:text-left">
          "{content.hero.logline}"
        </span>

        <button
          onClick={onExplore}
          className="w-full sm:w-auto py-3 px-6 sm:px-8 min-h-[44px] flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black uppercase tracking-widest text-[11px] transition-colors cursor-pointer"
        >
          View Horizontal Work Reel →
        </button>
      </div>
    </section>
  );
}
