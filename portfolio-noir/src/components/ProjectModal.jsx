import React from 'react';
import { X, MapPin, Calendar, Camera } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-stone-950 text-stone-100 border border-stone-800 rounded-2xl overflow-y-auto z-10 flex flex-col md:flex-row shadow-2xl">
        {/* Artwork Side */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-stone-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[70vh] object-contain grayscale contrast-125 brightness-95 rounded-lg shadow-2xl"
          />
        </div>

        {/* Info Side */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">
                SERIES {project.index} // ARCHIVAL
              </span>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-light tracking-tight mt-6 mb-4">
              {project.title}
            </h3>

            <p className="text-sm text-stone-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-3 py-4 border-y border-stone-800/80 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-red-500" />
                <span>{project.medium}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-500" />
                <span>Exhibition Year: {project.year}</span>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block mb-2">
                Curatorial Statement
              </span>
              <p className="text-xs text-stone-400 leading-relaxed italic font-serif">
                "{project.statement}"
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 text-xs font-mono text-stone-500">
            <span>PRINT INQUIRY: EDITIONS OF 5 ARCHIVAL PRINTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
