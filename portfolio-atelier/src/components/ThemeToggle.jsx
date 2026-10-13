import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2.5 rounded-full border border-stone-800/20 dark:border-white/20 hover:border-[#C37B5C] dark:hover:border-[#E08A68] text-stone-900 dark:text-white transition-colors cursor-pointer"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-stone-800" />
      ) : (
        <Sun className="w-4 h-4 text-[#E08A68]" />
      )}
    </button>
  );
}
