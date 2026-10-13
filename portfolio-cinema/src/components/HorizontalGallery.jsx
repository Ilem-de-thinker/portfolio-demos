import React, { useRef, useState } from 'react';
import { content } from '../content.js';
import { Film, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HorizontalGallery({ onSelectFilm, setCursorMode }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="films" className="py-16 sm:py-24 border-t border-current/20 overflow-hidden">
      <div className="px-4 sm:px-6 md:px-16 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block mb-2">
            CHAPTER 02 // SELECTED CINEMA
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight font-cinema">
            Films & Directorial Works
          </h2>
        </div>

        {/* Gallery navigation buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="p-3 border border-current/30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="p-3 border border-current/30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Film Reel Carousel with Mobile Touch Snapping */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-8 overflow-x-auto px-4 sm:px-6 md:px-16 scrollbar-none pb-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {content.films.map((film, idx) => (
          <div
            key={film.id}
            onMouseEnter={() => setCursorMode && setCursorMode('play')}
            onMouseLeave={() => setCursorMode && setCursorMode('default')}
            onClick={() => onSelectFilm(film)}
            className="group relative flex-none w-[86vw] sm:w-[65vw] md:w-[50vw] lg:w-[42vw] snap-center cursor-pointer select-none active:scale-[0.99] transition-transform"
          >
            {/* 2.39:1 Anamorphic Film Still Frame */}
            <div className="relative aspect-[2.39/1] bg-black border border-stone-800 overflow-hidden shadow-2xl rounded-sm">
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Viewfinder overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Slate header inside frame */}
              <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 flex justify-between items-center text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D4AF37]">
                <span>{film.sceneCode}</span>
                <span>{film.runtime}</span>
              </div>

              {/* Center Play glyph: Visible on mobile touch, hover on desktop */}
              <div className="absolute inset-0 flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37] bg-black/70 backdrop-blur-sm flex items-center justify-center text-[#D4AF37] shadow-lg">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Optics info */}
              <div className="absolute bottom-2.5 sm:bottom-3 inset-x-3 sm:inset-x-4 flex justify-between text-[9px] sm:text-[10px] font-mono text-stone-300">
                <span className="truncate max-w-[200px]">{film.optics}</span>
                <span>{film.year}</span>
              </div>
            </div>

            {/* Film Narrative Details */}
            <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-wide font-cinema text-[#D4AF37] group-hover:text-white transition-colors">
                {film.title}
              </h3>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-sans line-clamp-2">
                {film.synopsis}
              </p>
              <div className="text-[11px] sm:text-xs font-mono text-stone-500 pt-0.5">
                LOCATION: {film.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
