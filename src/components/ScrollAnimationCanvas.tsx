import React, { useEffect, useRef } from 'react';

const FRAME_COUNT = 300;

export const ScrollAnimationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    const loadedFlags = new Uint8Array(FRAME_COUNT);

    let currentFrame = 0;
    let targetFrame = 0;
    let lastDrawnFrame = -1;
    let animId: number;

    const getFrameUrl = (index: number) => {
      const num = String(index + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${num}.jpg`;
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      lastDrawnFrame = -1;
      renderFrame(Math.round(currentFrame));
    };

    const drawCover = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewW = window.innerWidth;
      const viewH = window.innerHeight;

      const imgW = img.naturalWidth || 1920;
      const imgH = img.naturalHeight || 1080;
      const imgAspect = imgW / imgH;
      const viewAspect = viewW / viewH;

      let drawW: number;
      let drawH: number;

      if (viewAspect > imgAspect) {
        drawW = viewW;
        drawH = viewW / imgAspect;
      } else {
        drawH = viewH;
        drawW = viewH * imgAspect;
      }

      const drawX = (viewW - drawW) / 2;
      const drawY = (viewH - drawH) / 2;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    };

    const getNearestLoadedImage = (index: number): HTMLImageElement | null => {
      if (loadedFlags[index] && images[index]) return images[index];

      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        const prev = index - offset;
        if (prev >= 0 && loadedFlags[prev] && images[prev]) return images[prev];

        const next = index + offset;
        if (next < FRAME_COUNT && loadedFlags[next] && images[next]) return images[next];
      }
      return null;
    };

    const renderFrame = (index: number) => {
      const clamped = Math.max(0, Math.min(FRAME_COUNT - 1, index));
      const img = getNearestLoadedImage(clamped);
      if (img) {
        drawCover(img);
        lastDrawnFrame = clamped;
      }
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;
      targetFrame = scrollFraction * (FRAME_COUNT - 1);
    };

    // Preload frames
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    images[0] = firstImg;
    firstImg.onload = () => {
      loadedFlags[0] = 1;
      renderFrame(0);

      // Preload the rest
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        images[i] = img;
        img.onload = () => {
          loadedFlags[i] = 1;
          if (Math.round(currentFrame) === i) {
            renderFrame(i);
          }
        };
      }
    };

    const loop = () => {
      const delta = targetFrame - currentFrame;
      if (Math.abs(delta) > 0.001) {
        currentFrame += delta * 0.12;
      } else {
        currentFrame = targetFrame;
      }

      const rounded = Math.round(currentFrame);
      if (rounded !== lastDrawnFrame) {
        renderFrame(rounded);
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    resizeCanvas();
    onScroll();
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none object-cover"
      style={{
        zIndex: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};
