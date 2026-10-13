import React from 'react';
import { content } from '../content.js';

export default function JournalStory({ isDark }) {
  return (
    <section id="journal" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-stone-800/10 dark:border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C37B5C] dark:text-[#E08A68] font-mono block mb-3 font-semibold">
            01 // STUDIO DIARY
          </span>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-serif italic leading-snug transition-colors ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {content.journal.heading}
          </h2>
        </div>

        <div className={`lg:col-span-7 space-y-6 text-sm sm:text-base md:text-lg leading-relaxed font-sans transition-colors ${
          isDark ? 'text-stone-200' : 'text-stone-700'
        }`}>
          {content.journal.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-10 border-t border-stone-800/10 dark:border-white/10">
            {content.journal.stats.map((item, idx) => (
              <div key={idx}>
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#C37B5C] dark:text-[#E08A68] block">
                  {item.number}
                </span>
                <span className={`text-[11px] sm:text-xs uppercase tracking-wider block mt-1 font-mono transition-colors ${
                  isDark ? 'text-stone-300' : 'text-stone-600'
                }`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
