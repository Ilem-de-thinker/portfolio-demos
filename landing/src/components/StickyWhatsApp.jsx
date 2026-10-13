import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config.js';

export default function StickyWhatsApp() {
  const handleClick = () => {
    const defaultMsg = encodeURIComponent("Hello! I have a question about the Five Ateliers portfolio architectures.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-50">
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-2.5 sm:gap-3 py-2.5 px-3.5 sm:py-3 sm:px-5 rounded-full bg-stone-900/95 text-stone-100 border border-emerald-500/50 hover:border-emerald-400 shadow-2xl backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer min-h-[44px]"
        aria-label="Direct message studio on WhatsApp"
      >
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 text-emerald-400">
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-emerald-400 font-mono font-medium">
            Studio Line
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-stone-200 group-hover:text-white flex items-center gap-1">
            <span>WhatsApp Dispatch</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
          </span>
        </div>
      </button>
    </aside>
  );
}
