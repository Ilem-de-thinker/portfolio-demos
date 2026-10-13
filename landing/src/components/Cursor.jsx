import React, { useEffect, useState } from 'react';

export default function Cursor({ cursorText = "", cursorVariant = "default" }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  const isView = cursorVariant === 'view';
  const isLink = cursorVariant === 'link';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 ${
          isView
            ? 'w-20 h-20 bg-stone-900/90 dark:bg-white/90 text-stone-100 dark:text-stone-900 text-xs font-semibold tracking-wider backdrop-blur-sm shadow-xl'
            : isLink
            ? 'w-10 h-10 bg-amber-500/20 border border-amber-500 scale-125'
            : 'w-4 h-4 bg-stone-900 dark:bg-stone-100 opacity-80'
        }`}
      >
        {isView && <span>{cursorText || "EXPLORE"}</span>}
      </div>
    </div>
  );
}
