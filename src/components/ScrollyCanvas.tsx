"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const VALID_FRAMES = Array.from({ length: 120 }, (_, i) => i + 1).filter(
  (f) => f < 75 || f > 115
);
const FRAME_COUNT = VALID_FRAMES.length;

export default function ScrollyCanvas({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Read scroll from shared container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 0.1, 0.7, 1], [0, 0, FRAME_COUNT - 1, FRAME_COUNT - 1]);

  // Zoom mapping
  // 0 - 70%: scale = 1
  // 70% - 100%: scale increases to fit the laptop screen exactly into the view
  const canvasScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.6]);

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const loadPromises = VALID_FRAMES.map((frameNumber, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const frameNum = frameNumber.toString().padStart(3, "0");
        img.src = `/shinda/ezgif-frame-${frameNum}.png`;
        img.onload = () => {
          loadedImages[i] = img;
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages);
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          resolve(); // gracefully fail single frames
        };
      });
    });

    Promise.all(loadPromises);
  }, []);

  // Frame Rendering
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false }); // alpha false for perf
      if (!ctx) return;

      const currentFrameIndex = Math.min(Math.floor(frameIndex.get()), FRAME_COUNT - 1);
      const img = images[currentFrameIndex] || images[0];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;

      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    render();

    const unsubscribe = frameIndex.on("change", render);
    window.addEventListener("resize", render);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#121212] -z-10 pointer-events-none">
      <div className="w-full h-full flex items-center justify-center">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center font-sans text-white text-sm z-50">
             Loading Cinematics...
          </div>
        )}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            scale: canvasScale,
            transformOrigin: "50% 50%",
          }}
        />
      </div>
    </div>
  );
}
