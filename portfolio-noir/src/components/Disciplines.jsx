import React from 'react';
import { content } from '../content.js';

export default function Disciplines() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-red-600 dark:text-red-500">
          [PRACTICE & METHOD]
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mt-2">
          Darkroom Disciplines
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {content.disciplines.map((disc, idx) => (
          <div key={idx} className="border-b border-current/20 pb-8">
            <span className="text-xs font-mono text-red-600 dark:text-red-500 block mb-2">
              0{idx + 1} //
            </span>
            <h3 className="text-xl md:text-2xl font-serif tracking-tight mb-3">
              {disc.name}
            </h3>
            <p className="text-sm opacity-75 leading-relaxed font-sans">
              {disc.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
