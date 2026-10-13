import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 border border-current font-mono text-xs flex items-center gap-1.5 hover:bg-[#FF4800] hover:text-black hover:border-[#FF4800] transition-colors cursor-pointer"
    >
      {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
      <span className="text-[10px] font-bold uppercase">{theme === 'light' ? 'NIGHT' : 'DAY'}</span>
    </button>
  );
}
