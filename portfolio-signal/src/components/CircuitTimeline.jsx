import React, { useRef, useState, useEffect } from 'react';
import { content } from '../content.js';

export default function CircuitTimeline() {
  const containerRef = useRef(null);
  const [circuitProgress, setCircuitProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setCircuitProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current/20 font-mono">
      <div className="mb-16">
        <span className="text-xs uppercase tracking-widest text-[#00F0FF] block mb-2">
          CHRONOLOGY // KERNEL TRACE
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-signal">
          Engineering Trajectory
        </h2>
      </div>

      <div className="relative pl-8 md:pl-16">
        {/* Scroll-Scrubbed SVG Circuit Trace Line */}
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-current/10">
          <div
            className="w-full bg-[#00F0FF] shadow-[0_0_12px_#00F0FF] transition-all duration-100 ease-out"
            style={{ height: `${circuitProgress * 100}%` }}
          />
        </div>

        <div className="space-y-12">
          {content.timeline.map((item, idx) => {
            const isPassed = circuitProgress >= idx / content.timeline.length;

            return (
              <div key={idx} className="relative">
                {/* Circuit Node Pin */}
                <div
                  className={`absolute -left-8 md:-left-16 top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isPassed
                      ? 'border-[#00F0FF] bg-[#00F0FF]/20 shadow-[0_0_10px_#00F0FF]'
                      : 'border-current/30 bg-black'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${isPassed ? 'bg-[#00F0FF]' : 'bg-current/30'}`} />
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-[#00F0FF] font-bold block">
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase font-signal">
                    {item.title}
                  </h3>
                  <p className="text-xs opacity-75 font-sans">
                    {item.org}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
