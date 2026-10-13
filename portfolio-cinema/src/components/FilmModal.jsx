import React from 'react';
import { X, Play, Clock, Video, MapPin } from 'lucide-react';

export default function FilmModal({ film, onClose }) {
  if (!film) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
      {/* Dark theater backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-5xl bg-[#0C0C0C] text-[#E7E5E0] border border-[#D4AF37]/40 rounded-lg overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Full 2.39:1 Frame Screen */}
        <div className="relative aspect-[2.39/1] w-full bg-black">
          <img
            src={film.image}
            alt={film.title}
            className="w-full h-full object-cover contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/60 pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 bg-black/70 border border-[#D4AF37] rounded text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Slate */}
        <div className="p-6 md:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4 font-mono text-xs text-[#D4AF37]">
            <span>{film.sceneCode}</span>
            <span>{film.optics}</span>
            <span>{film.runtime}</span>
          </div>

          <h3 className="text-3xl md:text-5xl font-light tracking-wide uppercase font-cinema text-white">
            {film.title}
          </h3>

          <p className="text-base md:text-lg text-stone-300 leading-relaxed font-sans">
            {film.synopsis}
          </p>

          <div className="p-6 bg-black/60 border border-stone-800 rounded space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block">
              Director's Production Notes
            </span>
            <p className="text-sm text-stone-400 italic font-sans leading-relaxed">
              "{film.directorNote}"
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-stone-800 font-mono text-xs text-stone-500">
            <div>YEAR: {film.year}</div>
            <div>LOCATION: {film.location}</div>
            <div>STATUS: ARCHIVED IN 70MM REEL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
