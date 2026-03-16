
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LifeBeyondCoding() {
  const photos = [
    "/photos/photo1.jpeg",
    "/photos/photo2.jpeg",
    "/photos/photo3.jpeg",
    "/photos/photo4.jpeg",
    "/photos/photo5.jpeg",
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
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-20"
      >
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Life Beyond <span className="text-amber-500">Coding</span>
        </h3>

        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Extracurricular activities, events, and moments that shape my personal growth
          beyond development and technology.
        </p>
      </motion.div>

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
              className="absolute w-[260px] h-[420px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={src}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
