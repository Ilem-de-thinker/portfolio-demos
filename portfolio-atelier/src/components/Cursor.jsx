import React, { useEffect, useState } from 'react';

export default function Cursor({ mode = 'default' }) {
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [visible]);

  if (isTouch || !visible) return null;

  const isInspect = mode === 'inspect';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ${
          isInspect
            ? 'w-16 h-16 bg-[#C37B5C]/80 text-[#FBF8F3] text-[10px] uppercase font-serif tracking-widest backdrop-blur-sm shadow-lg'
            : 'w-4 h-4 bg-[#C37B5C]/60 blur-[0.5px]'
        }`}
      >
        {isInspect && <span>HOLD</span>}
      </div>
    </div>
  );
}
