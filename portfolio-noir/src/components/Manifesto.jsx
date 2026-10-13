import React, { useRef, useState, useEffect } from 'react';
import { content } from '../content.js';

export default function Manifesto() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through this section we have scrolled (0 to 1)
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height * 0.7), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split all lines into words
  const allWords = content.manifesto.flatMap((line) => line.split(' '));

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 md:px-16 max-w-6xl mx-auto border-t border-current/20"
    >
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest font-mono text-red-600 dark:text-red-500">
          [MANIFESTO // SHADOW DISCIPLINE]
        </span>
      </div>

      <p className="text-3xl sm:text-4xl md:text-6xl font-serif font-light leading-[1.25] tracking-tight">
        {allWords.map((word, idx) => {
          const threshold = idx / allWords.length;
          const isRevealed = scrollProgress >= threshold;

          return (
            <span
              key={idx}
              className={`inline-block mr-3 transition-all duration-300 ${
                isRevealed
                  ? 'opacity-100 text-stone-900 dark:text-stone-100'
                  : 'opacity-20 text-stone-500'
              }`}
            >
              {word}
            </span>
          );
        })}
      </p>

      <div className="mt-16 flex items-center justify-between text-xs font-mono uppercase tracking-widest opacity-60">
        <span>GELATIN SILVER MONOGRAPHS</span>
        <span>NO DIGITAL RETOUCHING</span>
      </div>
    </section>
  );
}
