import React from 'react';
import { content } from '../content.js';

export default function EarthMaterials({ isDark }) {
  return (
    <section id="materials" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-stone-800/10 dark:border-white/10">
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C37B5C] dark:text-[#E08A68] font-mono block mb-2 font-semibold">
          03 // EARTH ALCHEMY
        </span>
        <h2 className={`text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight transition-colors ${
          isDark ? 'text-white' : 'text-stone-900'
        }`}>
          Materials & Wood Kiln Rhythms
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {content.earthMaterials.map((mat, idx) => (
          <div key={idx} className="border-b border-stone-800/10 dark:border-white/10 pb-6 sm:pb-8">
            <span className="text-[11px] sm:text-xs font-mono text-[#5E735A] dark:text-[#A8BAA4] block mb-2 font-semibold">
              ELEMENT 0{idx + 1} //
            </span>
            <h3 className={`text-xl sm:text-2xl font-serif italic mb-2 sm:mb-3 transition-colors ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {mat.title}
            </h3>
            <p className={`text-sm md:text-base leading-relaxed font-sans transition-colors ${
              isDark ? 'text-stone-200' : 'text-stone-700'
            }`}>
              {mat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
