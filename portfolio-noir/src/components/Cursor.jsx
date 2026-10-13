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

  const isView = mode === 'view';
  const isHover = mode === 'hover';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 border ${
          isView
            ? 'w-24 h-24 bg-[#D11A2A] text-white border-transparent text-[10px] tracking-widest font-mono font-bold scale-110'
            : isHover
            ? 'w-12 h-12 border-[#D11A2A] bg-[#D11A2A]/10 scale-125'
            : 'w-8 h-8 border-current opacity-70'
        }`}
      >
        {isView ? (
          <span>VIEW WORK</span>
        ) : (
          <div className="w-1.5 h-1.5 rounded-full bg-[#D11A2A]" />
        )}
      </div>
    </div>
  );
}
