
"use client";

import React, { useState } from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  const [hovered, setHovered] = useState(false);

  const certs = [
    {
      title: "Essentials Automation Professional",
      org: "Automation Anywhere",
      image: "/certs/automation.png",
      link: "https://certificates.automationanywhere.com/",
    },
    {
      title: "Python Certification",
      org: "HackerRank",
      image: "/certs/python.png",
      link: "https://www.hackerrank.com/certificates",
    },
    {
      title: "C++ Programming: OOPs and DSA",
      org: "CSE Pathshala",
      image: "/certs/cpp.png",
      link: "https://www.linkedin.com/",
    },
    {
      title: "Deep Learning Microlearning",
      org: "Board Infinity",
      image: "/certs/dl.png",
      link: "https://www.boardinfinity.com/",
    },
    {
      title: "Generative AI Applications",
      org: "Infosys",
      image: "/certs/genai.png",
      link: "https://www.infosys.com/",
    },
  ];

  const achievements = [
    {
      title: "TATA GenAI Powered Data Analytics Job Simulation",
      org: "Forage",
      date: "Nov 2025",
      desc: "Worked on data cleaning, exploratory data analysis, visualization and AI-assisted insights for business decision making.",
    },
    {
      title: "Johnson & Johnson MedTech Robotics and Controls Job Simulation",
      org: "Forage",
      date: "Nov 2025",
      desc: "Completed robotics control design tasks analyzing system delays and improving performance reliability.",
    },
  ];

  return (
    <section className="relative z-20 py-28 bg-[#121212] overflow-hidden">

      {/* ================= CERTIFICATIONS ================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
          CERTIFICATES
        </h2>

        <p className="text-sm text-white/50 tracking-widest uppercase">
          Scroll to explore →
        </p>
      </div>

      <div
        className="relative overflow-hidden mb-24"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={!hovered ? { x: ["0%", "-50%"] } : {}}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8 w-max px-6"
        >
          {[...certs, ...certs].map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[320px] h-[320px] shrink-0 rounded-3xl bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all"
            >
              {/* Org Badge */}
              <div className="absolute top-5 left-5 text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full">
                {cert.org}
              </div>

              {/* Image */}
              <div className="w-full h-[180px] flex items-center justify-center p-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-[140px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <div className="px-6 pb-6">
                <h3 className="text-lg text-white font-medium leading-snug">
                  {cert.title}
                </h3>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ================= ACHIEVEMENTS ================= */}

      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <div className="flex items-center gap-4 mb-12">
          <Trophy className="w-8 h-8 text-amber-500" />
          <h3 className="text-3xl font-medium text-white tracking-tight">
            Achievements
          </h3>
        </div>

        <div className="space-y-8">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="text-xl font-semibold text-white">
                {ach.title}
              </h4>

              <div className="flex justify-between items-center mt-3 mb-4">
                <span className="text-white/80 text-sm font-medium">
                  {ach.org}
                </span>

                <span className="text-amber-400 text-sm px-3 py-1 bg-white/5 rounded-full">
                  {ach.date}
                </span>
              </div>

              <p className="text-white/70 text-sm leading-relaxed">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

