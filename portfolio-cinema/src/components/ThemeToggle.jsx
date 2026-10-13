import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 border border-current/30 hover:border-[#D4AF37] text-[#D4AF37] font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
    >
      {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-[#D4AF37]" />}
      <span className="text-[10px] tracking-widest">{theme === 'light' ? 'NIGHT' : 'DAY'}</span>
    </button>
  );
}
