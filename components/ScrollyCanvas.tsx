'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ScrollyCanvas({ numFrames }: { numFrames: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [framesLoaded, setFramesLoaded] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const preloadImages = async () => {
      const newImages: HTMLImageElement[] = [];
      const loadPromises: Promise<void>[] = [];

      for (let i = 0; i < numFrames; i++) {
        const img = new Image();
        const src = `/sequence/${i.toString().padStart(3, '0')}.png`;
        img.src = src;
        loadPromises.push(
          new Promise((resolve) => {
            img.onload = () => {
              setFramesLoaded((prev) => prev + 1);
              resolve();
            };
          })
        );
        newImages.push(img);
      }
      
      await Promise.all(loadPromises);
      setImages(newImages);
    };

    preloadImages();
  }, [numFrames]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = images[index];

    // Implement object-fit: cover logic
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map scroll progress (0-1) to frame index
    const frameIndex = Math.min(
      numFrames - 1,
      Math.floor(latest * numFrames)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Initial render when first image loads or window resizes
  useEffect(() => {
    if (images.length > 0) {
        renderFrame(0);
    }
    
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(0); // Re-render current frame if possible, or just 0
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  if (framesLoaded < numFrames) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#121212] text-white z-50">
        Loading... {Math.round((framesLoaded / numFrames) * 100)}%
      </div>
    );
  }

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full object-cover" />
    </div>
  );
}
