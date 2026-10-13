import React from 'react';
import { content } from '../content.js';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-red-600 dark:text-red-500">
          [CRITIQUE & RECOGNITION]
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mt-2">
          Curatorial Words
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {content.testimonials.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-between border-l-2 border-red-600 dark:border-red-500 pl-6 py-2">
            <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
              "{item.quote}"
            </blockquote>
            <div>
              <span className="text-sm font-semibold block">{item.author}</span>
              <span className="text-xs font-mono opacity-60 uppercase tracking-widest">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
