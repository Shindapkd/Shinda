"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0 - 15%
// Section 1: 0% - 20%
const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15, 0.2], [1, 1, 0, 0]);
const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

// Section 2: 30% - 50%
const opacity2 = useTransform(scrollYProgress, [0.28, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
const y2 = useTransform(scrollYProgress, [0.28, 0.5], [80, -60]);

// Section 3: 55% - 75%
const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
const y3 = useTransform(scrollYProgress, [0.55, 0.75], [80, -60]);

  return (
    <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none z-20">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
      <motion.div 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center"
        style={{ opacity: opacity1, y: y1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white drop-shadow-2xl">
          SHINDA PEEDIKAKANDY
        </h1>

        <p className="mt-4 text-xl md:text-3xl lg:text-4xl text-white font-light">
          AI & ML Engineer
        </p>
      </motion.div>

        {/* Section 2 */}
        <motion.div 
          className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-xl"
          style={{ opacity: opacity2, y: y2 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-tight drop-shadow-2xl">
            I design <br />
            <span className="text-amber-400">immersive digital experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-xl text-right"
          style={{ opacity: opacity3, y: y3 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-tight drop-shadow-2xl">
            Where design <br />
            <span className="text-amber-400">meets engineering.</span>
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
