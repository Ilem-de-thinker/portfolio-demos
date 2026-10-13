import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import HeroMiniature from './HeroMiniature.jsx';

export default function DesignCard({ design, onSelectDesign, onLivePreview }) {
  return (
    <div className="group relative flex flex-col bg-stone-900/40 dark:bg-stone-900/70 border border-stone-800/80 hover:border-stone-600 transition-all duration-300 rounded-2xl overflow-hidden backdrop-blur-sm">
      {/* Interactive Hero Miniature Header */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 border-b border-stone-800/80 overflow-hidden bg-stone-950">
        <HeroMiniature type={design.previewType} />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex gap-1.5 p-1 bg-stone-950/70 backdrop-blur-md rounded-full border border-stone-800">
          {design.swatches.map((color, idx) => (
            <div
              key={idx}
              className="w-3.5 h-3.5 rounded-full border border-white/20"
              style={{ backgroundColor: color }}
              title={`Palette swatch ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
              {design.persona}
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-stone-100 mb-2">
            {design.name}
          </h3>

          <p className="text-sm font-medium text-amber-400/90 dark:text-amber-300/90 mb-3 sm:mb-4">
            {design.vibe}
          </p>

          <p className="text-sm text-stone-400 leading-relaxed mb-5 sm:mb-6">
            {design.description}
          </p>

          <div className="space-y-1.5 mb-6 sm:mb-8">
            {design.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => onLivePreview(design)}
            className="w-full sm:w-1/2 py-3 px-4 min-h-[44px] rounded-xl text-xs font-semibold tracking-wider uppercase border border-stone-700 hover:border-stone-500 hover:bg-stone-800/50 text-stone-200 transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
          >
            <span>Live Preview</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          <button
            onClick={() => onSelectDesign(design)}
            className="w-full sm:w-1/2 py-3 px-4 min-h-[44px] rounded-xl text-xs font-semibold tracking-wider uppercase bg-stone-100 hover:bg-white text-stone-950 transition-colors flex items-center justify-center gap-2 shadow-lg group/btn cursor-pointer"
          >
            <span>Choose Design</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
