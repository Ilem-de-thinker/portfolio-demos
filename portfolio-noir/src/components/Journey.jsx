import React from 'react';
import { content } from '../content.js';

export default function Journey() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-red-600 dark:text-red-500">
          [EXHIBITIONS & MONOGRAPHS]
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mt-2">
          Curatorial Journey
        </h2>
      </div>

      <div className="divide-y divide-current/20">
        {content.journey.map((item, idx) => (
          <div key={idx} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-baseline gap-6">
              <span className="text-sm font-mono text-red-600 dark:text-red-500 font-bold">
                {item.year}
              </span>
              <h3 className="text-lg md:text-xl font-serif font-light tracking-tight">
                {item.title}
              </h3>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest opacity-60">
              {item.venue}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
