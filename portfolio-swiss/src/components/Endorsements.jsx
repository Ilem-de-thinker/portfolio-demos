import React from 'react';
import { content } from '../content.js';

export default function Endorsements() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current">
      <div className="mb-12">
        <span className="text-xs font-mono font-bold text-[#FF4800] uppercase tracking-widest block mb-2">
          04 // VERIFICATION
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          Executive Endorsements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.endorsements.map((item, idx) => (
          <div key={idx} className="p-8 border-2 border-current bg-stone-50 dark:bg-stone-900/40 flex flex-col justify-between">
            <p className="text-lg md:text-xl font-bold uppercase leading-snug mb-8">
              "{item.quote}"
            </p>
            <div className="pt-4 border-t border-current font-mono text-xs">
              <span className="font-black text-[#FF4800] block">{item.name}</span>
              <span className="opacity-75">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
