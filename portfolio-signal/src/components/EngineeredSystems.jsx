import React, { useState } from 'react';
import { content } from '../content.js';
import TiltCard from './TiltCard.jsx';
import { ExternalLink, Terminal, Activity, X } from 'lucide-react';

export default function EngineeredSystems({ setCursorMode }) {
  const [activeSystem, setActiveSystem] = useState(null);

  return (
    <section id="systems" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#00F0FF] block mb-2">
            CORE // HIGH-PERFORMANCE ARTIFACTS
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-signal">
            Engineered Systems
          </h2>
        </div>
        <div className="text-xs font-mono text-[#00F0FF]">
          [3D TILT WITH HARDWARE LIGHT-SWEEP EDGE]
        </div>
      </div>

      {/* Grid of 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.systems.map((sys) => (
          <TiltCard
            key={sys.id}
            className="p-8 bg-current/5 border border-current/20 hover:border-[#00F0FF] rounded-2xl flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-current/15 font-mono text-xs mb-6">
                <span className="text-[#00F0FF] font-bold">{sys.code}</span>
                <span className="px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                  {sys.language}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3 font-signal group-hover:text-[#00F0FF] transition-colors">
                {sys.title}
              </h3>

              <p className="text-sm opacity-80 leading-relaxed font-sans mb-6">
                {sys.summary}
              </p>

              {/* Benchmark KPIs */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-black/40 border border-[#00F0FF]/30 rounded-xl font-mono text-xs mb-6">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Throughput</span>
                  <span className="text-[#00F0FF] font-bold text-sm">{sys.throughput}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Latency</span>
                  <span className="text-[#00F0FF] font-bold text-sm">{sys.latency}</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="space-y-1.5 text-xs font-mono text-stone-400 mb-6">
                {sys.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <span className="text-[#00F0FF]">›</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-current/15 flex justify-between items-center text-xs font-mono">
              <span className="text-stone-500">PRODUCTION VERIFIED</span>
              <button
                onClick={() => setActiveSystem(sys)}
                className="text-[#00F0FF] hover:underline flex items-center gap-1.5 font-bold cursor-pointer"
              >
                <span>KERNEL DEEP DIVE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Deep Dive Modal */}
      {activeSystem && (
        <div className="fixed inset-0 z-[99999] bg-black/85 flex items-center justify-center p-4">
          <div className="bg-[#05080E] text-stone-100 border border-[#00F0FF] p-8 max-w-xl w-full font-mono text-xs space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
            <div className="flex justify-between items-center border-b border-stone-800 pb-4">
              <span className="text-[#00F0FF] font-bold">{activeSystem.code} // AUDIT</span>
              <button
                onClick={() => setActiveSystem(null)}
                className="p-1 bg-[#00F0FF] text-black font-bold cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h4 className="text-2xl font-bold uppercase font-signal">{activeSystem.title}</h4>
            <p className="font-sans text-sm opacity-85 leading-relaxed">{activeSystem.deepDive}</p>
            <div className="p-4 bg-black/70 border border-[#00F0FF]/40 space-y-2">
              <div className="text-[#00F0FF] font-bold">KERNEL HARDWARE SPECS:</div>
              <div>- Pinned CPU Cores: 0-7 Isolated via isolcpus</div>
              <div>- Zero page faults recorded over 2.4B operations</div>
              <div>- Memory alignment: 64-byte L1 cache boundaries</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
