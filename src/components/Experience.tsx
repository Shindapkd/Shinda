"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Intern",
      company: "Corizo",
      date: "Apr 2024",
      description: [
        "Gained practical experience in data preprocessing, model building, and model evaluation through structured training using NumPy, Pandas, and scikit-learn.",
        "Strengthened machine learning fundamentals through mentor-led and self-paced modules, including live doubt-clearing sessions.",
        "Enhanced industry readiness by completing an internship-integrated program.",
      ],
      hoverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // placeholder
      hoverDetails: "Trained and evaluated machine learning models locally. Delivered deep insights via EDA and evaluated predictions utilizing advanced regression metrics. Trained and evaluated machine learning models locally. Delivered deep insights via EDA and evaluated predictions utilizing advanced regression metrics",
      tech: ["Python", "Machine Learning"],
      type: "Experience",
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Motion values to track the cursor's viewport position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add a slight spring physics to the movement for smoothness
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Add 20px offset so the card doesn't sit exactly under the pointer
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-white text-center">
          Professional <span className="text-amber-500">Experience</span>
        </h3>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 cursor-default"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h4 className="text-2xl font-semibold text-white tracking-tight">{exp.role}</h4>
                  <div className="text-lg text-white/80 mt-1">{exp.company}</div>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3 mb-6 text-white/80">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="text-amber-500 mt-1.5">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex flex-wrap gap-3 mt-6 border-t border-white/10 pt-6">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-amber-200 font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mouse Follower Pop-up (Only visibly renders when hoveredIndex is set) */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key="hover-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ x, y }}
            className="pointer-events-none fixed top-0 left-0 z-[100] w-72 md:w-80 bg-zinc-950/80 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 shadow-2xl flex flex-col gap-4 hidden sm:flex"
          >
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/50">
              <img 
                src={experiences[hoveredIndex].hoverImage} 
                alt="Experience Visual" 
                className="w-full h-full object-cover filter brightness-[0.8]"
              />
            </div>
            <div>
              <h4 className="text-amber-400 font-semibold mb-2 tracking-wide text-xs uppercase px-1">
                What I did
              </h4>
              <p className="text-white/90 text-sm leading-relaxed px-1 pb-1">
                {experiences[hoveredIndex].hoverDetails}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
