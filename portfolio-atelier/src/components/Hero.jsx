import React, { useState, useEffect } from 'react';
import { content } from '../content.js';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onExplore, isDark }) {
  const [blobPhase, setBlobPhase] = useState(0);

  // Hypnotic organic morphing pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setBlobPhase((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Compute organic coordinates for morphing SVG
  const rad = (blobPhase * Math.PI) / 180;
  const rx = 180 + Math.sin(rad) * 35;
  const ry = 190 + Math.cos(rad * 1.5) * 40;
  const rot = blobPhase * 0.4;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between p-4 sm:p-6 md:p-16 overflow-hidden select-none">
      {/* Slow Hypnotic Morphing Organic SVG Blob Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45 dark:opacity-25 z-0">
        <svg
          viewBox="0 0 600 600"
          className="w-[120vw] max-w-[850px] h-[120vw] max-h-[850px] transition-transform duration-1000 ease-in-out"
          style={{ transform: `rotate(${rot}deg)` }}
        >
          <defs>
            <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C37B5C" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#8A9A86" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EFE8DC" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGrad)"
            d={`M 300, 100 
                C ${300 + rx}, ${100} ${500}, ${300 - ry} 500, 300 
                C 500, ${300 + ry} ${300 + rx * 0.8}, 500 300, 500 
                C ${300 - rx}, 500 100, ${300 + ry} 100, 300 
                C 100, ${300 - ry} ${300 - rx * 0.9}, 100 300, 100 Z`}
            className="filter blur-xl"
          />
        </svg>
      </div>

      {/* Top Corner Studio Metadata */}
      <div className={`relative z-10 flex flex-wrap justify-between items-start text-[11px] sm:text-xs uppercase tracking-[0.2em] font-mono gap-2 transition-colors ${
        isDark ? 'text-stone-300' : 'text-stone-700'
      }`}>
        <div>
          <span>{content.meta.studios}</span>
          <span className="block text-[11px] text-[#C37B5C] dark:text-[#E08A68] font-serif italic mt-0.5">
            {content.meta.firingMethod}
          </span>
        </div>
        <div className="text-right">
          <span>{content.meta.availability}</span>
        </div>
      </div>

      {/* Hero Headline: Text lines rise from masked overflow with graceful stagger */}
      <div className="relative z-10 my-auto py-8 sm:py-12 max-w-5xl">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#5E735A] dark:text-[#A8BAA4] font-mono font-semibold block mb-4 sm:mb-6">
          {content.hero.kicker}
        </span>

        {/* Masked Rising Headline Container */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5vw] font-serif leading-[1.08] sm:leading-[1.05] tracking-tight">
          <span className="block overflow-hidden">
            <span className="inline-block animate-in slide-in-from-bottom-12 duration-1000 ease-out italic text-[#C37B5C] dark:text-[#E08A68]">
              {content.hero.line1}
            </span>
          </span>
          <span className="block overflow-hidden mt-1 md:mt-3">
            <span className={`inline-block animate-in slide-in-from-bottom-12 duration-1000 delay-200 ease-out not-italic font-light transition-colors ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {content.hero.line2}
            </span>
          </span>
        </h1>

        <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-stone-800/10 dark:border-white/10 pt-6 sm:pt-8">
          <p className={`text-sm md:text-base font-sans max-w-lg leading-relaxed transition-colors ${
            isDark ? 'text-stone-200' : 'text-stone-700'
          }`}>
            {content.hero.subtext}
          </p>

          {/* Magnetic Handcrafted Button - Mobile First full width on small screens */}
          <button
            onClick={onExplore}
            className="group relative py-3.5 px-8 rounded-full border border-[#C37B5C] dark:border-[#E08A68] text-[#C37B5C] dark:text-[#E08A68] hover:bg-[#C37B5C] dark:hover:bg-[#E08A68] hover:text-white dark:hover:text-[#12100E] transition-all duration-300 font-serif italic text-sm tracking-wider flex items-center justify-center gap-3 shadow-md hover:scale-105 cursor-pointer w-full sm:w-fit min-h-[48px]"
          >
            <span>Touch the Vessels</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Bottom Quiet Notation */}
      <div className={`relative z-10 flex flex-col sm:flex-row justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-mono gap-1 transition-colors ${
        isDark ? 'text-stone-400' : 'text-stone-600'
      }`}>
        <span>CAMILLE LAURENT · CERAMIC ARTS</span>
        <span>APT & UJI RESIDENCY</span>
      </div>
    </section>
  );
}
