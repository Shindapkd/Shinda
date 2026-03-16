"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: "Aug 2023 - Present",
      score: "CGPA: 7.3",
      image: "/photos/lpu.webp",
      tag: "B.Tech",
    },
    {
      degree: "Intermediate",
      institution: "Amrita Vidyalayam",
      location: "Kuthuparamba, Kerala",
      date: "Jun 2022 - Mar 2023",
      score: "Percentage: 86%",
      image: "/photos/amrita12.jpg",
      tag: "12th Grade",
    },
    {
      degree: "Matriculation",
      institution: "Amrita Vidyalayam",
      location: "Kuthuparamba, Kerala",
      date: "Jun 2019 - Mar 2020",
      score: "Percentage: 92%",
      image: "/photos/amrita10.webp",
      tag: "10th Grade",
    },
  ];

  return (
     <section className="relative z-20 py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0f]">

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-16"
      >
        <GraduationCap className="w-10 h-10 text-amber-500" />
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
          <span className="text-amber-500">Education</span>
        </h3>
      </motion.div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {educations.map((edu, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            key={idx}
            className="rounded-3xl overflow-hidden bg-black/60 border border-white/10 hover:border-amber-400 transition-all duration-300 group"
          >

            {/* Image */}
            <div className="relative h-[220px] overflow-hidden">

              <img
                src={edu.image}
                alt={edu.degree}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Tag */}
              <div className="absolute top-4 left-4 text-xs bg-black/60 px-3 py-1 rounded-full text-white tracking-wide">
                {edu.tag}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              {/* Score */}
              <div className="absolute bottom-4 right-4 text-3xl font-bold text-amber-400 drop-shadow-xl">
                {edu.score}
              </div>

            </div>

            {/* Content */}
            <div className="p-6">

              <h4 className="text-xl font-semibold text-white mb-3">
                {edu.degree}
              </h4>

              <div className="text-cyan-400 font-medium">
                {edu.institution}
              </div>

              <div className="text-white/70 text-sm mt-1">
                {edu.location}
              </div>

              <div className="text-white/60 text-sm mt-4">
                {edu.date}
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}