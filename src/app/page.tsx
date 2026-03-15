"use client";

import React, { useEffect, useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import CodingPlatforms from "@/components/CodingPlatforms";
import LifeBeyondCoding from "@/components/LifeBeyondCoding";
import Education from "@/components/Education";
import Connect from "@/components/Connect";
import Lenis from "lenis";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-transparent font-sans selection:bg-white/20">
      {/* Fixed canvas in the background */}
      <ScrollyCanvas containerRef={containerRef} />

      {/* The scrolling area where the animation happens */}
      <div ref={containerRef} className="relative h-[300vh] w-full">
        {/* Overlay manages the text animations */}
        <Overlay containerRef={containerRef} />
      </div>

      {/* The content that appears "inside" the laptop screen. 
          It naturally scrolls up over the fixed background after 300vh. */}
      <div className="relative z-30 min-h-screen pb-16 pt-[10vh]">
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <CodingPlatforms />
        <LifeBeyondCoding />
        <Education />
        <Connect />
      </div>
    </main>
  );
}
