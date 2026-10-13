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

  const isPlay = mode === 'play';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999999]"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
        {isPlay ? (
          <div className="w-20 h-20 rounded-full border border-[#D4AF37] bg-black/80 backdrop-blur-sm text-[#D4AF37] font-mono text-[9px] tracking-widest flex items-center justify-center animate-pulse">
            PLAY SCENE
          </div>
        ) : (
          <div className="w-10 h-10 border border-[#D4AF37]/50 rounded-sm relative flex items-center justify-center">
            {/* Viewfinder cross marks */}
            <div className="w-1 h-1 bg-[#D4AF37]" />
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]" />
          </div>
        )}
      </div>
    </div>
  );
}
