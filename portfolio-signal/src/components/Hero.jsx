import React, { useState, useEffect } from 'react';
import { content } from '../content.js';
import InteractiveField from './InteractiveField.jsx';
import ScrambleText from './ScrambleText.jsx';
import { Terminal, Cpu, ArrowDown } from 'lucide-react';

export default function Hero({ onExplore }) {
  const [cycleCount, setCycleCount] = useState(14028);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleCount((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between p-4 sm:p-6 md:p-12 overflow-hidden select-none border-b border-current/20">
      {/* Interactive Canvas Field */}
      <InteractiveField />

      {/* Top Telemetry Terminal Bar */}
      <div className="relative z-10 flex flex-wrap justify-between items-center text-xs font-mono tracking-wider text-[#00F0FF] gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00F0FF] shrink-0" />
          <span className="truncate max-w-[220px] sm:max-w-none text-[11px] sm:text-xs">{content.hero.terminalPrompt}</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] text-stone-400">
          <span>UPTIME: {content.meta.uptime}</span>
          <span className="text-[#00F0FF]">OPS/SEC: {cycleCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Main Decode Scramble Hero */}
      <div className="relative z-10 my-auto py-8 sm:py-12 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] text-[10px] sm:text-xs font-mono mb-4 sm:mb-6">
          <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span className="truncate">KERNEL SPACE HARDWARE-ACCELERATED ENGINES</span>
        </div>

        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[8vw] font-black uppercase tracking-tight font-signal leading-none">
          <ScrambleText text={content.hero.headline} />
        </h1>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-xl font-mono text-[#00F0FF] tracking-wider max-w-2xl">
          {content.hero.subtitle}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-t border-current/20 pt-4 sm:pt-6">
          <p className="text-[11px] sm:text-xs font-mono text-stone-400 max-w-md">
            {content.hero.telemetry}
          </p>

          <button
            onClick={onExplore}
            className="py-3 px-6 sm:px-8 min-h-[44px] bg-[#00F0FF] text-black hover:bg-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-fit"
          >
            <span>Inspect Engine Cores</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Status Bus */}
      <div className="relative z-10 flex flex-wrap justify-between items-center text-[9px] sm:text-[10px] font-mono text-stone-400 border-t border-current/15 pt-3 sm:pt-4 gap-2">
        <span>LOCATIONS: {content.meta.locations}</span>
        <span className="text-[#00F0FF]">BUS: PCI-E 5.0 ACTIVE</span>
      </div>
    </section>
  );
}
