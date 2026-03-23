"use client";

import React from "react";
import { motion } from "framer-motion";
export default function About() {
  const skills = [
    { category: "ML/AI Frameworks", items: ["Scikit-Learn", "OpenCV", "NumPy", "Pandas", "SMOTE"] },
    { category: "Languages & Scripting", items: ["Python", "Java", "C++", "SQL basics"] },
    { category: "Cloud & DevOps", items: ["Google Colab", "Automation Anywhere", "Linux/OS basics"] },
    { category: "Version Control & Tools", items: ["Git", "GitHub", "Jupyter", "VS Code"] },
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
                  I am <span className="text-white font-medium">Shinda Peedikakandy</span>, an aspiring AI/ML Engineer and Computer Science student at Lovely Professional University.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  I am deeply drawn to artificial intelligence and machine learning because of their profound ability to turn raw data into scalable, real-world solutions.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  My career goal is to architect highly optimized computer vision pipelines and intelligent predictive models that drive measurable industry impact.
                </span>
              </li>

            </ul>
          </div>

          <div>
             <h3 className="text-3xl font-medium tracking-tight mb-8 text-white">
              My <span className="text-amber-500">Skills</span>
            </h3>
            {/* Tools & Platforms Table */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-xl">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-amber-500 uppercase tracking-widest text-xs w-1/3">Category</th>
                    <th className="px-6 py-4 font-semibold text-amber-500 uppercase tracking-widest text-xs w-2/3">Proficiencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {skills.map((skill, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white/90">{skill.category}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, i) => (
                            <span key={i} className="px-3 py-1 rounded bg-white/10 border border-white/5 text-xs text-white">
                              {item}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Soft Skills & Activities */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-medium mb-5 text-white tracking-tight">
                  Soft <span className="text-amber-500">Skills</span>
                </h3>
                <ul className="space-y-3 text-white/80 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 text-sm">✦</span> 
                    <span>Analytical Problem-Solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 text-sm">✦</span> 
                    <span>Adaptability & Fast Learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 text-sm">✦</span> 
                    <span>Cross-Functional Communication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-medium mb-5 text-white tracking-tight">
                  Technical <span className="text-amber-500">Activities</span>
                </h3>
                <ul className="space-y-3 text-white/80 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 text-sm">✦</span> 
                    <span>TATA GenAI Data Analytics Job Simulation (Forage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 text-sm">✦</span> 
                    <span>Active participant in algorithmic programming contests</span>
                  </li>
                </ul>
              </div>
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
