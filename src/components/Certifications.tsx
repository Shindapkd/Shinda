
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Trophy, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const certs = [
    {
      title: "Essentials Automation Professional",
      image: "/photos/automation.png",
      link: "/cert/aacert.pdf",
    },
    {
      title: "Python Certification",
      image: "/photos/hacker.webp",
      link: "/cert/pythcert.pdf",
    },
    {
      title: "C++ Programming: OOPs and DSA",
      image: "/photos/pathshala.png",
      link: "/cert/cpdscert.jpeg",
    },
    {
      title: "Deep Learning Microlearning",
      image: "/photos/board.webp",
      link: "/cert/dpcert.jpg",
    },
    {
      title: "Generative AI Applications",
      image: "/photos/infosys.png",
      link: "/cert/gacert.pdf",
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // AUTO SCROLL
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        container.scrollBy({
          left: 1,
          behavior: "auto",
        });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0 });
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative z-20 py-28 bg-[#121212] overflow-hidden">

      {/* ================= CERTIFICATES ================= */}

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex justify-between items-center"
      >
        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
          CERTIFICATES
        </h2>
      </motion.div>

      {/* CERTIFICATE SLIDER */}
      <div 
        className="relative mb-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 border border-white/10 rounded-full p-3 hover:bg-black transition"
        >
          <ArrowLeft className="text-white w-6 h-6" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 border border-white/10 rounded-full p-3 hover:bg-black transition"
        >
          <ArrowRight className="text-white w-6 h-6" />
        </button>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar px-12"
        >
          {[...certs, ...certs].map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[320px] h-[320px] shrink-0 rounded-3xl bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all"
            >

              {/* IMAGE */}
              <div className="w-full h-[180px] flex items-center justify-center p-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-[140px] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TITLE */}
              <div className="px-6 pb-6">
                <h3 className="text-lg text-white font-medium leading-snug">
                  {cert.title}
                </h3>
              </div>

            </a>
          ))}
        </div>

      </div>

      {/* ================= ACHIEVEMENTS ================= */}

      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <Trophy className="w-8 h-8 text-amber-500" />
          <h3 className="text-3xl font-medium text-white tracking-tight">
            Achievements
          </h3>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((ach, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}