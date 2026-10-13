import React from 'react';
import { content } from '../content.js';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
          CHAPTER 05 // CRITIQUE
        </span>
        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight font-cinema">
          Curatorial Notices
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {content.testimonials.map((t, idx) => (
          <div key={idx} className="border-l border-[#D4AF37] pl-8 py-2 flex flex-col justify-between">
            <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-6 font-cinema">
              "{t.quote}"
            </blockquote>
            <div className="font-mono text-xs">
              <span className="text-[#D4AF37] font-bold block">{t.speaker}</span>
              <span className="opacity-70">{t.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
