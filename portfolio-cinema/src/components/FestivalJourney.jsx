import React from 'react';
import { content } from '../content.js';

export default function FestivalJourney() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
          CHAPTER 04 // LAURELS
        </span>
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight font-cinema">
          Festival Selections & Awards
        </h2>
      </div>

      <div className="divide-y divide-current/20 font-mono">
        {content.festivals.map((fest, idx) => (
          <div key={idx} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-baseline gap-6">
              <span className="text-sm text-[#D4AF37] font-bold">
                {fest.year}
              </span>
              <h3 className="text-lg md:text-xl font-light tracking-wide uppercase font-cinema">
                {fest.event}
              </h3>
            </div>
            <span className="text-xs uppercase tracking-widest opacity-70">
              {fest.distinction}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
