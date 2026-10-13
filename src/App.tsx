import React, { useState, useEffect } from 'react';
import LandingApp from '../landing/src/App.jsx';
import PortfolioNoirApp from '../portfolio-noir/src/App.jsx';
import PortfolioSwissApp from '../portfolio-swiss/src/App.jsx';
import PortfolioCinemaApp from '../portfolio-cinema/src/App.jsx';
import PortfolioAtelierApp from '../portfolio-atelier/src/App.jsx';
import PortfolioSignalApp from '../portfolio-signal/src/App.jsx';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'noir' | 'swiss' | 'cinema' | 'atelier' | 'signal'>('landing');

  // Check URL query param on mount and popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const p = params.get('portfolio');
      if (p && ['noir', 'swiss', 'cinema', 'atelier', 'signal'].includes(p)) {
        setCurrentView(p as any);
      } else {
        setCurrentView('landing');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const navigateTo = (view: 'landing' | 'noir' | 'swiss' | 'cinema' | 'atelier' | 'signal') => {
    setCurrentView(view);
    const url = new URL(window.location.href);
    if (view === 'landing') {
      url.searchParams.delete('portfolio');
    } else {
      url.searchParams.set('portfolio', view);
    }
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'noir', label: 'Noir' },
    { id: 'swiss', label: 'Swiss' },
    { id: 'cinema', label: 'Cinema' },
    { id: 'atelier', label: 'Atelier' },
    { id: 'signal', label: 'Signal' },
  ];

  return (
    <div className="relative min-h-screen pb-20 sm:pb-0">
      {/* Desktop Quick Switcher (top right) */}
      <nav
        aria-label="Portfolio Switcher Desktop"
        className="hidden sm:flex fixed top-3 right-4 sm:right-6 z-[999990] items-center gap-1.5 p-1 bg-stone-900/90 dark:bg-stone-950/90 text-stone-200 backdrop-blur-md rounded-full border border-stone-800 shadow-2xl text-[11px] font-mono"
      >
        <button
          onClick={() => navigateTo('landing')}
          className={`px-3 py-1.5 rounded-full transition-all cursor-pointer min-h-[34px] flex items-center justify-center ${
            currentView === 'landing'
              ? 'bg-amber-400 text-stone-950 font-bold shadow'
              : 'hover:text-white text-stone-400'
          }`}
        >
          Selector
        </button>

        <div className="w-px h-3 bg-stone-700 mx-0.5" />

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id as any)}
            className={`px-2.5 py-1.5 rounded-full transition-all cursor-pointer min-h-[34px] flex items-center justify-center ${
              currentView === item.id
                ? 'bg-white text-stone-950 font-bold shadow'
                : 'hover:text-white text-stone-400'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile-First Bottom Thumb Switcher Bar (ergonomic thumb reach, never blocks content) */}
      <nav
        aria-label="Portfolio Switcher Mobile"
        className="sm:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[999990] flex items-center gap-1 p-1.5 bg-stone-950/95 text-stone-200 backdrop-blur-xl rounded-full border border-stone-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-[11px] font-mono max-w-[95vw] overflow-x-auto scrollbar-none touch-manipulation"
      >
        <button
          onClick={() => navigateTo('landing')}
          className={`px-3 py-2 rounded-full transition-all cursor-pointer min-h-[44px] flex items-center justify-center shrink-0 active:scale-95 ${
            currentView === 'landing'
              ? 'bg-amber-400 text-stone-950 font-bold'
              : 'text-stone-400 hover:text-white'
          }`}
        >
          Selector
        </button>

        <div className="w-px h-4 bg-stone-800 mx-0.5 shrink-0" />

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id as any)}
            className={`px-2.5 py-2 rounded-full transition-all cursor-pointer min-h-[44px] flex items-center justify-center shrink-0 active:scale-95 ${
              currentView === item.id
                ? 'bg-white text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Render Selected View */}
      {currentView === 'landing' && (
        <LandingApp onPreviewPortfolio={(id: any) => navigateTo(id)} />
      )}

      {currentView === 'noir' && (
        <PortfolioNoirApp onBackToSelector={() => navigateTo('landing')} />
      )}

      {currentView === 'swiss' && (
        <PortfolioSwissApp onBackToSelector={() => navigateTo('landing')} />
      )}

      {currentView === 'cinema' && (
        <PortfolioCinemaApp onBackToSelector={() => navigateTo('landing')} />
      )}

      {currentView === 'atelier' && (
        <PortfolioAtelierApp onBackToSelector={() => navigateTo('landing')} />
      )}

      {currentView === 'signal' && (
        <PortfolioSignalApp onBackToSelector={() => navigateTo('landing')} />
      )}
    </div>
  );
}
