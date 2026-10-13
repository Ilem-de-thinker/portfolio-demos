import React from 'react';
import { X } from 'lucide-react';

export default function VesselModal({ vessel, onClose, isDark }) {
  if (!vessel) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-8">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className={`relative w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl z-10 max-h-[92vh] flex flex-col md:flex-row overflow-y-auto transition-colors ${
        isDark
          ? 'bg-[#181513] text-white border-[#E08A68]/30'
          : 'bg-[#FAF7F2] text-[#161311] border-[#C37B5C]/30'
      }`}>
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto relative bg-stone-900 shrink-0">
          <img
            src={vessel.image}
            alt={vessel.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-stone-800/10 dark:border-white/10 text-xs font-mono">
              <span className="text-[#C37B5C] dark:text-[#E08A68] font-bold">{vessel.series}</span>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-stone-500/10 cursor-pointer text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-serif italic mt-5 mb-3 transition-colors ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {vessel.name}
            </h3>

            <p className={`text-sm md:text-base leading-relaxed font-sans mb-6 transition-colors ${
              isDark ? 'text-stone-200' : 'text-stone-700'
            }`}>
              {vessel.note}
            </p>

            <div className={`p-4 rounded-xl border space-y-2 text-xs font-mono transition-colors ${
              isDark
                ? 'bg-white/10 border-white/15 text-stone-200'
                : 'bg-stone-900/5 border-stone-800/10 text-stone-700'
            }`}>
              <div>EARTH ORIGIN: {vessel.clay}</div>
              <div>KILN ATMOSPHERE: {vessel.finish}</div>
              <div>CREATION YEAR: {vessel.year}</div>
            </div>
          </div>

          <div className={`pt-6 border-t border-stone-800/10 dark:border-white/10 text-xs font-mono transition-colors ${
            isDark ? 'text-stone-400' : 'text-stone-500'
          }`}>
            PRIVATE COMMISSION ENQUIRIES WELCOME
          </div>
        </div>
      </div>
    </div>
  );
}
