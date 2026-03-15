"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: "Aug 2023 - Present",
      score: "CGPA: 7.3",
    },
    {
      degree: "Intermediate",
      institution: "Amrita Vidyalayam",
      location: "Kuthuparamba, Kerala",
      date: "Jun 2022 - Mar 2023",
      score: "Percentage: 86%",
    },
    {
      degree: "Matriculation",
      institution: "Amrita Vidyalayam",
      location: "Kuthuparamba, Kerala",
      date: "Jun 2019 - Mar 2020",
      score: "Percentage: 92%",
    },
  ];

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <div className="flex items-center justify-center gap-4 mb-16">
          <GraduationCap className="w-10 h-10 text-amber-500" />
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            <span className="text-amber-500">Education</span>
          </h3>
        </div>

        <div className="relative border-l border-amber-500/30 pl-8 ml-4 md:ml-0 md:pl-10 space-y-12">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[45px] top-1 h-5 w-5 rounded-full bg-black border-2 border-amber-500 group-hover:border-white transition-colors duration-300" />
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-white tracking-tight mb-2">{edu.degree}</h4>
                  <div className="text-lg text-white/90 font-medium mb-1">{edu.institution}</div>
                  <div className="text-sm text-amber-200 mb-4">{edu.location}</div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white shadow-sm">
                    {edu.score}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 opacity-80 text-sm font-medium tracking-wide text-amber-400">
                  {edu.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
