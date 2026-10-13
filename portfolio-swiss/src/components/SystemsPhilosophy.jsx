import React from 'react';
import { content } from '../content.js';

export default function SystemsPhilosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono font-bold text-[#FF4800] uppercase tracking-widest block mb-2">
            {content.about.kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            {content.about.headline}
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed font-sans">
          {content.about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-current">
            {content.about.stats.map((stat, idx) => (
              <div key={idx} className="font-mono">
                <span className="text-3xl md:text-4xl font-black text-[#FF4800] block">
                  {stat.metric}
                </span>
                <span className="text-[11px] uppercase tracking-wider block opacity-75 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Invariant Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
        {content.systemsPrinciples.map((rule) => (
          <div
            key={rule.num}
            className="p-6 border-2 border-current bg-stone-50 dark:bg-stone-900/40 hover:bg-[#FF4800] hover:text-black transition-colors duration-200 group"
          >
            <span className="text-sm font-bold text-[#FF4800] group-hover:text-black block mb-4">
              PRINCIPLE {rule.num}
            </span>
            <h3 className="text-xl font-bold uppercase mb-3">
              {rule.name}
            </h3>
            <p className="text-xs font-sans leading-relaxed opacity-90 group-hover:opacity-100">
              {rule.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
