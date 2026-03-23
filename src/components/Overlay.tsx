"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10"
        style={{ opacity: opacity1, y: y1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] gold-shine-text">
          SHINDA PEEDIKAKANDY
        </h1>

        <div className="mt-4 text-xl md:text-3xl lg:text-4xl text-white font-medium h-12 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <TypeAnimation
            sequence={[
              'AI/ML Engineer',
              2000,
              'Computer Science Student',
              2000,
              'Software Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </div>
      </motion.div>

        {/* Section 2 */}
        <motion.div 
          className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-4xl"
          style={{ opacity: opacity2, y: y2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-2xl">
            Building intelligent systems that solve <span className="text-amber-400">real-world problems.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-4xl text-right"
          style={{ opacity: opacity3, y: y3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-2xl">
            Transforming raw data into <span className="text-amber-400">predictive intelligence.</span>
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
