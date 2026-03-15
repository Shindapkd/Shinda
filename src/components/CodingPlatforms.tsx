"use client";

import React from "react";
import { Code2 } from "lucide-react";

export default function CodingPlatforms() {
  const platforms = [
    {
      name: "LeetCode",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop", // placeholder
      link: "#",
      stats: "Highlight your Leetcode progress",
    },
    {
      name: "GeeksforGeeks",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // placeholder
      link: "#",
      stats: "Highlight your GFG progress",
    },
    {
      name: "HackerRank",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", // placeholder
      link: "#",
      stats: "Highlight your HackerRank progress",
    },
  ];

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <Code2 className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Coding <span className="text-amber-500">Platforms</span>
          </h3>
          <p className="text-white/80 max-w-xl text-lg">
            Showcasing continuous problem-solving progress and algorithmic skills across various competitive programming platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              className="group block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={platform.image}
                  alt={`${platform.name} Progress`}
                  className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-semibold text-white tracking-tight mb-2">{platform.name}</h4>
                <p className="text-amber-200 text-sm">{platform.stats}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
