
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LifeBeyondCoding() {
  const photos = [
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
  ];

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [hovered]);

  const getPosition = (i: number) => {
    const pos = (i - index + photos.length) % photos.length;

    const layout = [
      { x: -420, rotate: -20, scale: 0.85, z: 1 },
      { x: -220, rotate: -10, scale: 0.92, z: 2 },
      { x: 0, rotate: 0, scale: 1, z: 5 },
      { x: 220, rotate: 10, scale: 0.92, z: 2 },
      { x: 420, rotate: 20, scale: 0.85, z: 1 },
    ];

    return layout[pos] || { x: 650, scale: 0, rotate: 0, z: 0 };
  };

  return (
    <section className="relative z-20 py-28 overflow-hidden bg-[#121212]">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-20">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Life Beyond <span className="text-amber-500">Coding</span>
        </h3>

        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Extracurricular activities, events, and moments that shape my personal growth
          beyond development and technology.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center h-[420px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {photos.map((src, i) => {
          const pos = getPosition(i);

          return (
            <motion.div
              key={i}
              animate={{
                x: pos.x,
                rotate: pos.rotate,
                scale: pos.scale,
                zIndex: pos.z,
              }}
              whileHover={{
                scale: pos.scale + 0.1,
                y: -15,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.6)"
              }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
              }}
              className="absolute w-[260px] h-[360px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={src}
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
