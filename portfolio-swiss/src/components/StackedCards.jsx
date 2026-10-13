import React, { useState } from 'react';
import { content } from '../content.js';
import { ExternalLink } from 'lucide-react';

export default function StackedCards() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-b border-current">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#FF4800] uppercase tracking-widest">
            02 // STACKED ARCHITECTURES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mt-2">
            Selected Systems
          </h2>
        </div>
        <div className="text-xs font-mono uppercase opacity-70">
          [STICKY STACKED STRUCTURAL PANELS]
        </div>
      </div>

      {/* Sticky Stacked Cards Container */}
      <div className="space-y-8 sm:space-y-12 pb-12">
        {content.projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="sticky top-16 sm:top-24 z-10 bg-white dark:bg-[#0C0C0C] text-black dark:text-white border-2 border-black dark:border-white shadow-2xl p-4 sm:p-6 md:p-10 transition-transform duration-300"
            style={{
              top: `${64 + idx * 16}px`,
            }}
          >
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-current font-mono text-[11px] sm:text-xs">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="bg-[#FF4800] text-black font-bold px-1.5 sm:px-2 py-0.5">
                  PANEL 0{idx + 1}
                </span>
                <span className="font-bold">{proj.code}</span>
                <span className="hidden sm:inline">[{proj.year}]</span>
              </div>
              <span className="uppercase text-[#FF4800] font-bold text-[10px] sm:text-xs">
                {proj.client}
              </span>
            </div>

            {/* Card Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 my-6 sm:my-8 items-start">
              {/* Left Column: Title & Specs */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-sans">
                  {proj.summary}
                </p>

                <div className="p-3 sm:p-4 bg-stone-100 dark:bg-stone-900 border border-current font-mono text-xs space-y-2">
                  <div className="font-bold text-[#FF4800] uppercase mb-1">
                    Systemic Specifications:
                  </div>
                  {proj.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="text-[#FF4800]">■</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm font-mono opacity-80 leading-relaxed">
                  {proj.narrative}
                </p>
              </div>

              {/* Right Column: High-contrast technical architectural visual */}
              <div className="lg:col-span-5 h-48 sm:h-64 md:h-80 border-2 border-current overflow-hidden relative group">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale contrast-150 brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black text-white p-2 sm:p-3 font-mono text-[9px] sm:text-[10px] flex justify-between border-t border-white">
                  <span>SCALE: 1:1 RESOLUTION</span>
                  <span className="text-[#FF4800]">INSPECTION MODE</span>
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="pt-4 sm:pt-6 border-t border-current flex justify-between items-center font-mono text-xs">
              <span className="text-[#FF4800] font-bold uppercase text-[10px] sm:text-xs">
                STATUS: IN PRODUCTION
              </span>
              <button
                onClick={() => setSelectedProject(proj)}
                className="hover:underline flex items-center gap-1.5 cursor-pointer font-bold py-2 min-h-[44px]"
              >
                <span>READ BRIEF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Brief Drawer Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[99999] bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black text-black dark:text-white border-2 border-current p-6 sm:p-8 max-w-xl w-full font-mono text-xs space-y-4 sm:space-y-6">
            <div className="flex justify-between items-center border-b border-current pb-4">
              <span className="font-bold text-[#FF4800]">{selectedProject.code} // BRIEF</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 font-bold cursor-pointer min-h-[36px]"
              >
                CLOSE [✕]
              </button>
            </div>
            <h4 className="text-lg sm:text-xl font-bold uppercase">{selectedProject.title}</h4>
            <p className="font-sans text-sm leading-relaxed">{selectedProject.narrative}</p>
            <div className="p-3 bg-stone-100 dark:bg-stone-900 border border-current space-y-1">
              <div className="font-bold">IMPACT METRICS:</div>
              <div>- Zero reported accessibility contrast regressions in audit</div>
              <div>- Sub-16ms layout reflow on ultra-wide viewports</div>
              <div>- Production parity maintained across 420+ deployments</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
