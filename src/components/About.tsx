"use client";

import React from "react";
import { motion } from "framer-motion";
export default function About() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "C++"] },
    { category: "Web Technologies", items: ["HTML", "CSS"] },
    { category: "Tools/Platforms", items: ["Google Colab", "GitHub", "Automation Anywhere"] },
    { category: "Soft Skills", items: ["Adaptability", "Leadership", "Hard-working", "Problem-Solving"] },
  ];

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24 max-w-[90rem] mx-auto text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        
        {/* Left Side: About Me + Skills */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-7 xl:col-span-8 flex flex-col gap-16 order-2 lg:order-1"
        >
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              <span className="text-amber-500">About</span> Me
            </h2>
            <ul className="space-y-4 text-white/80 text-lg leading-relaxed">

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  I'm <span className="text-white font-medium">Shinda Peedikakandy</span>, a Computer Science and Engineering student at Lovely Professional University.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Passionate about artificial intelligence, machine learning, and building impactful software systems.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Experienced in programming with <span className="text-white">Python</span> and <span className="text-white">Java</span>.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Interested in developing optimized computer vision pipelines and predictive machine learning models.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  Always exploring innovative solutions and learning new technologies to solve real-world problems.
                </span>
              </li>

            </ul>
          </div>

          <div>
             <h3 className="text-3xl font-medium tracking-tight mb-8 text-white">
              My <span className="text-amber-500">Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-amber-500/80 mb-4">{skill.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-amber-500/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Photo Box */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-5 xl:col-span-4 h-[320px] md:h-[380px] lg:h-[420px] w-full rounded-2xl overflow-hidden group shadow-lg gold-glow-border-thin relative order-1 lg:order-2"
        >
          {/* Black & White effect to Color on hover */}
          <img 
            src="/photos/me.jpeg" 
            alt="Shinda Peedikakandy" 
            className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
