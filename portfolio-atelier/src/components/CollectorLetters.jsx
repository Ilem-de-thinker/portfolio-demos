import React, { useState } from 'react';
import { content } from '../content.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CollectorLetters({ isDark }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : content.collectorLetters.length - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev < content.collectorLetters.length - 1 ? prev + 1 : 0));
  };

  const active = content.collectorLetters[currentIdx];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-stone-800/10 dark:border-white/10">
      <div className="flex justify-between items-end mb-8 sm:mb-16 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C37B5C] dark:text-[#E08A68] font-mono block mb-2 font-semibold">
            05 // LETTERS
          </span>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            Collector Reflections
          </h2>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={prev}
            aria-label="Previous letter"
            className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
              isDark
                ? 'border-white/20 text-white hover:border-[#E08A68] hover:text-[#E08A68]'
                : 'border-stone-800/20 text-stone-900 hover:border-[#C37B5C] hover:text-[#C37B5C]'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next letter"
            className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
              isDark
                ? 'border-white/20 text-white hover:border-[#E08A68] hover:text-[#E08A68]'
                : 'border-stone-800/20 text-stone-900 hover:border-[#C37B5C] hover:text-[#C37B5C]'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className={`p-6 sm:p-12 md:p-16 rounded-2xl sm:rounded-[32px] border shadow-lg transition-all duration-300 ${
        isDark
          ? 'bg-white/10 border-white/15'
          : 'bg-stone-900/5 border-stone-800/10'
      }`}>
        <blockquote className={`text-xl sm:text-2xl md:text-3xl font-serif italic leading-relaxed mb-6 sm:mb-8 transition-colors ${
          isDark ? 'text-white' : 'text-stone-900'
        }`}>
          "{active.letter}"
        </blockquote>
        <div className="font-mono text-xs">
          <span className="font-bold text-[#C37B5C] dark:text-[#E08A68] block text-sm">{active.name}</span>
          <span className={`transition-colors ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>{active.location}</span>
        </div>
      </div>
    </section>
  );
}
