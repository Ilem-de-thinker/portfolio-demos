import React, { useState, useEffect } from 'react';
import { content } from '../content.js';

export default function Hero({ scrollPercent = 0, onExplore }) {
  const [zurichTime, setZurichTime] = useState('');
  const [scrollVelocity, setScrollVelocity] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Live Zurich Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('de-CH', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setZurichTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll velocity to modulate marquee speed & direction
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      const velocity = Math.min(Math.max(delta * 0.15, -8), 8);
      setScrollVelocity(velocity !== 0 ? velocity : 1);
      setLastScrollY(currentY);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrollVelocity(1);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY]);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden border-b border-current">
      {/* Visible Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 pointer-events-none opacity-15">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-current h-full" />
        ))}
      </div>

      {/* Top Telemetry Bar */}
      <div className="relative z-10 px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap justify-between items-center text-xs font-mono border-b border-current gap-2">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="bg-[#FF4800] text-black font-bold px-1.5 sm:px-2 py-0.5 text-[11px] sm:text-xs">
            ZRH.GRID
          </span>
          <span className="text-[11px] sm:text-xs">{content.meta.location}</span>
          <span className="hidden sm:inline text-current font-bold">
            [{zurichTime || '14:22:04'} CET]
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <span className="font-bold">
            SCROLL: {Math.round(scrollPercent)}%
          </span>
          <span className="hidden md:inline bg-current text-white dark:text-black px-2 py-0.5 text-[10px]">
            {content.meta.status}
          </span>
        </div>
      </div>

      {/* Hero Stacked Headline sliding in */}
      <div className="relative z-10 my-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 max-w-7xl">
        <span className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-widest text-[#FF4800] block mb-3 sm:mb-4">
          {content.hero.subline}
        </span>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10vw] font-black tracking-tighter uppercase leading-[0.88] select-none">
          {content.hero.headlineParts.map((word, idx) => (
            <div
              key={idx}
              className={`hover:text-[#FF4800] transition-colors duration-150 ${
                idx === 1 ? 'sm:pl-10 md:pl-16' : idx === 2 ? 'sm:pl-20 md:pl-32 text-[#FF4800] hover:text-current' : ''
              }`}
            >
              {word}
            </div>
          ))}
        </h1>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-t border-current pt-4 sm:pt-6">
          <p className="text-xs md:text-sm font-mono max-w-xl opacity-85">
            {content.hero.telemetry}
          </p>

          <button
            onClick={onExplore}
            className="py-3 px-6 sm:px-8 bg-current text-white dark:text-black hover:bg-[#FF4800] hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-fit min-h-[44px] flex items-center justify-center"
          >
            Inspect Stacked Architecture ↓
          </button>
        </div>
      </div>

      {/* Opposing Infinite Marquees modulated by scroll velocity */}
      <div className="relative z-10 w-full overflow-hidden border-t border-current select-none font-mono">
        {/* Top Marquee (moves left to right) */}
        <div className="py-2.5 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap">
          <div
            className="swiss-marquee-top"
            style={{
              '--top-dur': `${Math.max(25 / Math.abs(scrollVelocity || 1), 5)}s`,
              '--top-dir': scrollVelocity < 0 ? 'reverse' : 'normal',
            }}
          >
            {content.marqueeTop.concat(content.marqueeTop).map((item, idx) => (
              <span key={idx} className="mx-4 sm:mx-6">
                {item} <span className="text-[#FF4800]">■</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (moves right to left) */}
        <div className="py-2 bg-[#FF4800] text-black text-xs font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap">
          <div
            className="swiss-marquee-bottom"
            style={{
              '--bot-dur': `${Math.max(28 / Math.abs(scrollVelocity || 1), 6)}s`,
              '--bot-dir': scrollVelocity < 0 ? 'reverse' : 'normal',
            }}
          >
            {content.marqueeBottom.concat(content.marqueeBottom).map((item, idx) => (
              <span key={idx} className="mx-4 sm:mx-6">
                {item} <span>●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
