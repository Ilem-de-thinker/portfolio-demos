import React, { useRef, useEffect } from 'react';

export default function InteractiveField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchMove, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Dynamic grid density: lighter on mobile for 60fps performance
    const isMobile = width < 768;
    const cols = isMobile ? 18 : 28;
    const rows = isMobile ? 10 : 14;
    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const cellW = width / cols;
      const cellH = height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = (i + 0.5) * cellW;
          const originY = (j + 0.5) * cellH;

          // Compute distance to mouse / touch
          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Force reaction
          let offsetX = 0;
          let offsetY = 0;
          if (mouse.active && dist < (isMobile ? 130 : 180)) {
            const maxDist = isMobile ? 130 : 180;
            const force = (1 - dist / maxDist) * 22;
            offsetX = -(dx / dist) * force;
            offsetY = -(dy / dist) * force;
          }

          // Ambient wave
          const wave = Math.sin(frame * 0.03 + i * 0.3 + j * 0.2) * 3;

          const finalX = originX + offsetX;
          const finalY = originY + offsetY + wave;

          // Draw node
          ctx.beginPath();
          ctx.arc(finalX, finalY, dist < 120 ? 2 : 1, 0, Math.PI * 2);
          ctx.fillStyle = dist < 120 ? '#00F0FF' : 'rgba(0, 240, 255, 0.28)';
          ctx.fill();

          // Draw faint horizontal connection
          if (i < cols - 1) {
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(finalX + cellW * 0.4, finalY);
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.07)';
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto touch-none"
    />
  );
}
