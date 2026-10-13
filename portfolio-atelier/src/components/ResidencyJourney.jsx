import React from 'react';
import { content } from '../content.js';

export default function ResidencyJourney({ isDark }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-stone-800/10 dark:border-white/10 font-sans">
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C37B5C] dark:text-[#E08A68] font-mono block mb-2 font-semibold">
          04 // RESIDENCY RECORD
        </span>
        <h2 className={`text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight transition-colors ${
          isDark ? 'text-white' : 'text-stone-900'
        }`}>
          Exhibition & Kiln Seasons
        </h2>
      </div>

      <div className="divide-y divide-stone-800/10 dark:divide-white/10">
        {content.residencyJourney.map((item, idx) => (
          <div key={idx} className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm font-mono text-[#C37B5C] dark:text-[#E08A68] font-bold shrink-0">
                {item.year}
              </span>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-serif italic transition-colors ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                {item.exhibition}
              </h3>
            </div>
            <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest pl-8 md:pl-0 transition-colors ${
              isDark ? 'text-stone-300' : 'text-stone-600'
            }`}>
              {item.place}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
