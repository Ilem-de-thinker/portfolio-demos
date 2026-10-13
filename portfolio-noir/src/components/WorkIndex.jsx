import React, { useState } from 'react';
import { content } from '../content.js';
import { ArrowUpRight } from 'lucide-react';

export default function WorkIndex({ onSelectProject, setCursorMode }) {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="works"
      onMouseMove={handleMouseMove}
      className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-red-600 dark:text-red-500 font-bold">
            [INDEX 2023 — 2025]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight mt-2">
            Selected Works
          </h2>
        </div>
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest opacity-60">
          TAP TO VIEW ARCHIVAL EDITIONS
        </p>
      </div>

      {/* Floating Image Preview on Hover (Desktop only) */}
      {activeProject && (
        <div
          className="fixed pointer-events-none z-50 w-72 md:w-96 h-96 md:h-[480px] rounded-lg overflow-hidden border border-white/20 shadow-2xl transition-all duration-150 ease-out hidden md:block"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 200}px`,
          }}
        >
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
          />
          <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 backdrop-blur-sm p-4 text-white text-xs font-mono">
            <span className="text-red-500 font-bold block">{activeProject.medium}</span>
            <span>{activeProject.location} · {activeProject.year}</span>
          </div>
        </div>
      )}

      {/* Typographic Index List with Mobile-First Inline Previews */}
      <div className="divide-y divide-current/20">
        {content.projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => {
              setActiveProject(project);
              if (setCursorMode) setCursorMode('view');
            }}
            onMouseLeave={() => {
              setActiveProject(null);
              if (setCursorMode) setCursorMode('default');
            }}
            onClick={() => onSelectProject(project)}
            className="group py-6 sm:py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 cursor-pointer transition-colors active:bg-current/5 hover:pl-4 duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs sm:text-sm font-mono text-red-600 dark:text-red-500 font-bold">
                  {project.index}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight group-hover:italic group-hover:text-red-600 dark:group-hover:text-red-500 transition-all">
                  {project.title}
                </h3>
              </div>

              {/* Mobile-Only Visual Thumbnail (replaces missing hover state) */}
              <div className="md:hidden w-full h-44 rounded-lg overflow-hidden relative border border-current/20 mt-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono bg-black/70 text-white px-2 py-1 rounded">
                  <span>{project.location}</span>
                  <span className="text-red-400 font-bold">VIEW [TAP]</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 text-xs font-mono uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity pt-1 md:pt-0">
              <span className="truncate max-w-[200px] sm:max-w-none">{project.medium}</span>
              <div className="flex items-center gap-2 shrink-0">
                <span>{project.year}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
