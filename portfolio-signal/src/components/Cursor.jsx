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

  const isLock = mode === 'lock';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
        {/* Precision Target Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />

        {/* Trailing Cyan Magnetic Ring */}
        <div
          className={`absolute rounded-full border border-[#00F0FF]/60 transition-all duration-200 ${
            isLock
              ? 'w-14 h-14 bg-[#00F0FF]/15 border-[#00F0FF] scale-125'
              : 'w-8 h-8 animate-pulse'
          }`}
        />
      </div>
    </div>
  );
}
