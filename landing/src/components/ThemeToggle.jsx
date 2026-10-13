import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-stone-300/40 dark:border-stone-700/60 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 text-stone-800 dark:text-stone-200"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-amber-400" />
      )}
    </button>
  );
}
