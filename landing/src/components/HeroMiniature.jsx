import React, { useState, useEffect } from 'react';

export default function HeroMiniature({ type }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (type === 'noir') {
    return (
      <div className="relative w-full h-full bg-[#0E0E0E] text-[#F8F6F0] overflow-hidden flex flex-col justify-between p-6 select-none">
        <div className="flex justify-between items-center text-[10px] tracking-widest uppercase opacity-60 font-mono">
          <span>PARIS 48°51'N</span>
          <span className="text-red-500 font-bold">● MONOGRAPH</span>
        </div>
        <div className="my-auto text-center">
          <div className="text-3xl md:text-4xl font-serif tracking-tight font-light italic">
            JULIAN <span className="not-italic font-normal tracking-tighter">VANCE</span>
          </div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-stone-400 mt-2">
            Haute Couture & Monochrome
          </p>
        </div>
        <div className="flex justify-between items-end text-[9px] font-mono text-stone-500 border-t border-stone-800/80 pt-2">
          <span>EST. 2018</span>
          <span className="text-red-500/80">35MM SILVER GELATIN</span>
        </div>
        {/* Subtle spotlight glow */}
        <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent pointer-events-none opacity-40 animate-pulse" />
      </div>
    );
  }

  if (type === 'swiss') {
    return (
      <div className="relative w-full h-full bg-white text-black overflow-hidden flex flex-col justify-between p-6 select-none font-sans">
        {/* Hairline 4-column visible grid */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
          <div className="border-r border-stone-200" />
          <div className="border-r border-stone-200" />
          <div className="border-r border-stone-200" />
          <div />
        </div>
        <div className="relative z-10 flex justify-between text-[10px] font-mono tracking-wider">
          <span className="bg-black text-white px-1.5 py-0.5">ZRH.8001</span>
          <span className="text-[#FF4800] font-bold">100% SCALE</span>
        </div>
        <div className="relative z-10 my-auto">
          <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9]">
            RADICAL<br />
            SYSTEMS<br />
            <span className="text-[#FF4800]">FUNCTION</span>
          </h4>
        </div>
        {/* Animated mini marquee */}
        <div className="relative z-10 overflow-hidden bg-black text-white py-1 text-[9px] font-mono tracking-widest whitespace-nowrap">
          <div
            className="inline-block"
            style={{ transform: `translateX(-${(tick * 1.5) % 300}px)` }}
          >
            MODULAR PROTOCOLS — ZURICH DESIGN SYSTEMS — ARCHITECTURAL RIGOR — FORM FOLLOWS INVARIANT — 
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cinema') {
    return (
      <div className="relative w-full h-full bg-[#080808] text-[#E7E5E0] overflow-hidden flex flex-col justify-between select-none">
        {/* 2.39:1 Letterbox bars */}
        <div className="w-full h-3 bg-black z-20 border-b border-stone-800" />
        <div className="relative flex-1 flex flex-col justify-between p-5 bg-radial from-[#1e1c16] via-[#0b0a09] to-[#050505]">
          <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-[#D4AF37]">
            <span>SCENE 01 / TAKE 04</span>
            <span>24 FPS · 2.39:1</span>
          </div>
          <div className="my-auto text-center">
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 block mb-1">
              A FILM BY
            </span>
            <h4 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-[#E7E5E0]">
              MATEO THORNE
            </h4>
            <span className="text-[10px] italic text-[#D4AF37]/90 mt-1 block">
              Director & Motion Auteur
            </span>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-stone-500">
            <span>REYKJAVIK / LONDON</span>
            <span>70MM ANAMORPHIC</span>
          </div>
        </div>
        <div className="w-full h-3 bg-black z-20 border-t border-stone-800" />
      </div>
    );
  }

  if (type === 'atelier') {
    return (
      <div className="relative w-full h-full bg-[#FBF8F3] text-[#161311] overflow-hidden flex flex-col justify-between p-6 select-none">
        {/* Organic morphing background blob */}
        <div
          className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#EFE8DC] opacity-70 filter blur-xl transition-all duration-1000"
          style={{
            transform: `scale(${1 + Math.sin(tick * 0.05) * 0.1}) rotate(${tick * 0.5}deg)`,
          }}
        />
        <div
          className="absolute -left-6 -bottom-6 w-36 h-36 rounded-full bg-[#C37B5C]/15 opacity-80 filter blur-lg transition-all duration-1000"
        />
        <div className="relative z-10 flex justify-between text-[10px] tracking-widest uppercase text-[#8A9A86] font-medium">
          <span>STUDIO N° 07</span>
          <span>PROVENCE & KYOTO</span>
        </div>
        <div className="relative z-10 my-auto">
          <p className="text-xl md:text-2xl font-serif italic text-[#161311] leading-snug">
            The patience of clay, <br />
            <span className="not-italic text-[#C37B5C] font-normal">the memory of water</span>
          </p>
          <span className="text-[10px] uppercase tracking-widest text-stone-500 mt-2 block">
            Camille Laurent · Ceramicist
          </span>
        </div>
        <div className="relative z-10 flex justify-between text-[9px] uppercase tracking-wider text-stone-400 border-t border-[#EFE8DC] pt-2">
          <span>WOOD KILN FIRED</span>
          <span>BOTANICAL INK</span>
        </div>
      </div>
    );
  }

  // Signal
  return (
    <div className="relative w-full h-full bg-[#05080E] text-[#F0F4F8] overflow-hidden flex flex-col justify-between p-6 select-none font-mono">
      {/* Dynamic scan line & cyan accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,240,255,0.03)_51%)] bg-[length:100%_4px] pointer-events-none" />
      <div className="relative z-10 flex justify-between items-center text-[9px] text-[#00F0FF]">
        <span>SYS.RUNNING: 99.999%</span>
        <span>LATENCY: 0.12MS</span>
      </div>
      <div className="relative z-10 my-auto">
        <div className="text-[10px] text-stone-500 mb-1 tracking-wider">
          KERNEL // CONSENSUS ENGINE
        </div>
        <h4 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
          KAELEN VANCE <span className="inline-block w-2 h-4 bg-[#00F0FF] animate-pulse" />
        </h4>
        <p className="text-[10px] text-[#00F0FF]/80 mt-1">
          High-Frequency Systems Architect
        </p>
      </div>
      <div className="relative z-10 flex justify-between text-[9px] text-stone-500 border-t border-stone-800 pt-2">
        <span>RUST · ZIG · DISTRIBUTED</span>
        <span className="text-[#00F0FF]">ZERO-COPY</span>
      </div>
    </div>
  );
}
