"use client";

import React, { useEffect, useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import CodingPlatforms from "@/components/CodingPlatforms";
import LifeBeyondCoding from "@/components/LifeBeyondCoding";
import Education from "@/components/Education";
import Connect from "@/components/Connect";
import Resume from "@/components/Resume";
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
      {/* Navigation Bar */}
      <NavBar />

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
        <div id="about" className="scroll-mt-24"><About /></div>
        <div id="experience" className="scroll-mt-24"><Experience /></div>
        <div id="projects" className="scroll-mt-24"><Projects /></div>
        <div id="certifications" className="scroll-mt-24"><Certifications /></div>
        <div id="platforms" className="scroll-mt-24"><CodingPlatforms /></div>
        <div id="life" className="scroll-mt-24"><LifeBeyondCoding /></div>
        <div id="education" className="scroll-mt-24"><Education /></div>
        <div id="resume" className="scroll-mt-24"><Resume /></div>
        <div id="connect" className="scroll-mt-24"><Connect /></div>
      </div>
    </main>
  );
}
