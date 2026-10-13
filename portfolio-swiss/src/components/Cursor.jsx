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

  const isAction = mode === 'action';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999999]"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
        {/* Precision Swiss Crosshair */}
        <div className="w-6 h-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#FF4800]" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FF4800]" />
        </div>
        {isAction && (
          <div className="absolute left-4 top-4 bg-black text-[#FF4800] text-[9px] font-mono px-1 border border-[#FF4800]">
            INSPECT
          </div>
        )}
      </div>
    </div>
  );
}
