import React from 'react';
import { content } from '../content.js';
import { ArrowUpRight } from 'lucide-react';

export default function VesselEditions({ onSelectVessel, setCursorMode, isDark }) {
  return (
    <section id="vessels" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-stone-800/10 dark:border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-16 gap-3">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C37B5C] dark:text-[#E08A68] font-mono block mb-2 font-semibold">
            02 // EARTH ARCHIVE
          </span>
          <h2 className={`text-2xl sm:text-4xl md:text-6xl font-serif font-light tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            Handcrafted Vessels & Editions
          </h2>
        </div>
        <span className={`text-[10px] sm:text-xs uppercase tracking-widest font-mono transition-colors ${
          isDark ? 'text-stone-400' : 'text-stone-500'
        }`}>
          [TOUCH TO INSPECT VESSEL]
        </span>
      </div>

      {/* Asymmetric Parallax Pairs with expanding rounded mask reveals */}
      <div className="space-y-12 sm:space-y-24">
        {content.vessels.map((vessel, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={vessel.id}
              onClick={() => onSelectVessel(vessel)}
              onMouseEnter={() => setCursorMode && setCursorMode('inspect')}
              onMouseLeave={() => setCursorMode && setCursorMode('default')}
              className={`group flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-6 sm:gap-12 lg:gap-20 items-center cursor-pointer`}
            >
              {/* Image Frame with expanding rounded organic mask */}
              <div className="w-full lg:w-3/5 h-[260px] sm:h-[400px] md:h-[520px] rounded-[20px] sm:rounded-[36px] overflow-hidden relative shadow-xl transition-all duration-700 group-hover:rounded-[16px] bg-stone-900">
                <img
                  src={vessel.image}
                  alt={vessel.name}
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex justify-between items-end text-white text-[11px] sm:text-xs font-mono">
                  <span>{vessel.clay}</span>
                  <span className="text-[#E08A68] font-bold">{vessel.year}</span>
                </div>
              </div>

              {/* Vessel Narrative */}
              <div className="w-full lg:w-2/5 space-y-3 sm:space-y-4">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#5E735A] dark:text-[#A8BAA4] font-mono font-semibold block">
                  {vessel.series}
                </span>

                <h3 className={`text-xl sm:text-3xl md:text-4xl font-serif italic group-hover:text-[#C37B5C] dark:group-hover:text-[#E08A68] transition-colors ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}>
                  {vessel.name}
                </h3>

                <p className={`text-sm md:text-base leading-relaxed font-sans transition-colors ${
                  isDark ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  {vessel.note}
                </p>

                <div className={`p-3.5 sm:p-4 rounded-2xl border space-y-1 text-xs font-mono transition-colors ${
                  isDark
                    ? 'bg-white/10 border-white/15 text-stone-200'
                    : 'bg-stone-900/5 border-stone-800/10 text-stone-700'
                }`}>
                  <div>CLAY: {vessel.clay}</div>
                  <div>GLAZE: {vessel.finish}</div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#C37B5C] dark:text-[#E08A68] font-semibold min-h-[44px]">
                  <span>Inspect Vessel Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
