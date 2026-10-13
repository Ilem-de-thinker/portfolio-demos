import React from 'react';
import { content } from '../content.js';

export default function Endorsements() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current/20 font-mono">
      <div className="mb-16">
        <span className="text-xs uppercase tracking-widest text-[#00F0FF] block mb-2">
          PEER AUDIT // VALIDATION
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-signal">
          Engineering Endorsements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.endorsements.map((item, idx) => (
          <div key={idx} className="p-8 border border-current/20 bg-current/5 rounded-2xl flex flex-col justify-between">
            <blockquote className="text-base md:text-lg leading-relaxed mb-6 font-sans">
              "{item.quote}"
            </blockquote>
            <div className="pt-4 border-t border-current/15 text-xs">
              <span className="text-[#00F0FF] font-bold block">{item.author}</span>
              <span className="opacity-70">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
