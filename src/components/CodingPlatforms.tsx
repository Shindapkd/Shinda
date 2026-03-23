"use client";

import React, { useState } from "react";
import { Code2 } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function CodingPlatforms() {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  const platforms = [
    {
      name: "HackerRank",
      username: "ashindapeediaka1",
      logo: "/photos/hacker.webp",
      hoverImage: "/photos/hr.png",
      link: "https://www.hackerrank.com/profile/shindapeedikaka1",
      stats: ["4 Badges", "★★★★★ Python", "1 Certificate"],
    },
    {
      name: "LeetCode",
      username: "Shinda_Peedikakandy",
      logo: "/photos/lc.webp",
      hoverImage: "/photos/leetcode.png",
      link: "https://leetcode.com/u/Shinda_Peedikakandy/",
      stats: ["152 Problems", "1479 Rating", "Top 50.98%"],
    },
    {
      name: "GeeksforGeeks",
      username: "Shinda Peedikakandy",
      logo: "/photos/gfglg.jpg",
      hoverImage: "/photos/gfg.png",
      link: "https://www.geeksforgeeks.org/profile/shindapeed7lpv?tab=activity",
      stats: ["98 Coding Score", "30 Problems", "9177 Rank"],
    },
  ];

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24">

      <div className="max-w-6xl mx-auto backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">

        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >

          <Code2 className="w-12 h-12 text-amber-500 mb-6" />

          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Coding <span className="text-amber-500">Platforms</span>
          </h3>

          <p className="text-white/80 max-w-xl text-lg">
            Track my problem solving progress across competitive programming platforms.
          </p>

        </motion.div>


        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {platforms.map((platform, idx) => (

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noreferrer"

              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}

              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]"
            >

              {/* Logo + Name */}
              <div className="flex items-center gap-4 mb-4">

                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-20 h-20 object-contain rounded-xl bg-white/5 p-3 border border-white/10"
                />

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    {platform.name}
                  </h4>

                  <p className="text-white/60 text-sm">
                    {platform.username}
                  </p>

                </div>

              </div>


              {/* Stats */}
              <div className="flex flex-wrap gap-3 mt-4">

                {platform.stats.map((stat, i) => (

                  <div
                    key={i}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-200"
                  >
                    {stat}
                  </div>

                ))}

              </div>


              {/* View Profile */}
              <div className="mt-6 text-sm text-amber-400 font-medium flex items-center gap-2 opacity-80 group-hover:opacity-100 transition">
                View Profile →
              </div>

            </motion.a>

          ))}

        </div>

      </div>


      {/* POPUP CARD FOLLOWING CURSOR */}
      <AnimatePresence>

        {hoveredIndex !== null && (

          <motion.div
            key="hover-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ x, y }}

            className="pointer-events-none fixed top-0 left-0 z-[100] w-[380px] rounded-2xl overflow-hidden border border-amber-500/30 bg-black shadow-2xl"
          >

            <img
              src={platforms[hoveredIndex].hoverImage}
              alt="Platform Screenshot"
              className="w-full h-full object-cover"
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}