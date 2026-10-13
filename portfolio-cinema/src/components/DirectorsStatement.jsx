import React from 'react';
import { content } from '../content.js';

export default function DirectorsStatement() {
  return (
    <section id="statement" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
            {content.statement.sceneNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight uppercase font-cinema">
            {content.statement.headline}
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-base md:text-lg opacity-85 leading-relaxed font-sans">
          {content.statement.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-current/20 font-mono">
            {content.statement.slateStats.map((item, idx) => (
              <div key={idx}>
                <span className="text-3xl md:text-4xl font-light text-[#D4AF37] block">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider block opacity-70 mt-1">
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
