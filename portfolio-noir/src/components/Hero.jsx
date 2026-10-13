import React, { useState, useEffect, useRef } from 'react';
import { content } from '../content.js';

export default function Hero({ onExploreClick }) {
  const [mousePos, setMousePos] = useState({ x: 200, y: 300 });
  const [parisTime, setParisTime] = useState('');
  const heroRef = useRef(null);

  // Set default initial center position on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMousePos({
        x: window.innerWidth * 0.5,
        y: window.innerHeight * 0.42,
      });
    }
  }, []);

  // Live Paris Time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setParisTime(`${timeStr} CET`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e) => {
    if (!heroRef.current || !e.touches || !e.touches[0]) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    });
  };

  const fullName = `${content.hero.firstName} ${content.hero.lastName}`;
  const letters = fullName.split('');

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between p-4 sm:p-6 md:p-12 overflow-hidden select-none"
    >
      {/* Background Portrait revealed through cursor/touch clip-path spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-100 ease-out z-0 opacity-80"
        style={{
          clipPath: `circle(180px at ${mousePos.x}px ${mousePos.y}px)`,
        }}
      >
        <img
          src={content.meta.heroImage}
          alt="Julian Vance Portrait"
          className="w-full h-full object-cover grayscale contrast-125 brightness-90 scale-105"
        />
        {/* Soft vignette inside the spotlight */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80" />
      </div>

      {/* Top Corner Metadata */}
      <div className="relative z-10 flex flex-wrap justify-between items-start gap-3 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase opacity-75">
        <div>
          <span>{content.meta.baseLocations}</span>
          <span className="block text-[10px] text-red-600 dark:text-red-500 font-semibold mt-0.5">
            ● PARIS {parisTime || '16:04:18 CET'}
          </span>
        </div>
        <div className="text-right">
          <span>ARCHIVAL MONOGRAPHS</span>
          <span className="block text-[10px] opacity-80 mt-0.5">
            {content.meta.availability}
          </span>
        </div>
      </div>

      {/* Centerpiece: Responsive kinetic letter title */}
      <div className="relative z-10 my-auto py-6 sm:py-8">
        <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-x-1 sm:gap-x-2 md:gap-x-4">
          {letters.map((char, index) => {
            if (char === ' ') {
              return <span key={index} className="w-4 sm:w-8 md:w-16" />;
            }

            return (
              <span
                key={index}
                className="inline-block text-[13vw] sm:text-[16vw] md:text-[18vw] lg:text-[20vw] leading-[0.85] font-serif font-light tracking-tighter transition-transform duration-200 active:scale-105 hover:text-red-600 dark:hover:text-red-500 hover:scale-105 hover:-skew-x-6 cursor-default"
                style={{
                  fontFamily: "'Fraunces', 'Playfair Display', serif",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        <div className="mt-6 sm:mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 border-t border-current/20 pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] sm:tracking-[0.2em] font-mono max-w-md">
            {content.hero.kicker} — {content.hero.caption}
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-xs font-mono text-red-600 dark:text-red-500">
              [DRAG OR HOVER TO REVEAL PRINT]
            </span>
            <button
              onClick={onExploreClick}
              className="py-2.5 px-5 sm:px-6 rounded-full border border-current hover:bg-current hover:text-stone-900 dark:hover:text-stone-100 text-[11px] sm:text-xs uppercase tracking-widest font-mono transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Explore Index
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Corner Metadata */}
      <div className="relative z-10 flex justify-between items-end text-[9px] sm:text-[10px] font-mono tracking-widest uppercase opacity-60">
        <span>SCROLL DOWN // MANIFESTO</span>
        <span>HASSELBLAD & LEICA</span>
      </div>
    </section>
  );
}
