import React from 'react';
import { content } from '../content.js';

export default function Timeline() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current font-mono">
      <div className="mb-12">
        <span className="text-xs font-bold text-[#FF4800] uppercase tracking-widest block mb-2">
          03 // CHRONOLOGY
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          Systems Track Record
        </h2>
      </div>

      <div className="divide-y-2 divide-current border-y-2 border-current">
        {content.timeline.map((item, idx) => (
          <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-3 text-sm font-bold text-[#FF4800]">
              {item.period}
            </div>
            <div className="md:col-span-5 text-lg font-bold uppercase">
              {item.role}
            </div>
            <div className="md:col-span-4 text-xs uppercase opacity-80 md:text-right">
              {item.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
