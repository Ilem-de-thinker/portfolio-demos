import React from 'react';
import { content } from '../content.js';

export default function Disciplines() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
          CHAPTER 03 // CRAFT
        </span>
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight font-cinema">
          Directorial Disciplines
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {content.disciplines.map((disc, idx) => (
          <div key={idx} className="border-b border-current/20 pb-8">
            <span className="text-xs font-mono text-[#D4AF37] block mb-2">
              LENS 0{idx + 1} //
            </span>
            <h3 className="text-2xl font-light uppercase tracking-wide mb-3 font-cinema">
              {disc.title}
            </h3>
            <p className="text-sm opacity-80 leading-relaxed font-sans">
              {disc.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
