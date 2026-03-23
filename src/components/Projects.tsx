"use client";

import React, { useState, useEffect, useRef } from "react";
import { Github, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  skills_demonstrated: string;
  more_details: string;
  tech: string[];
  github: string;
  date: string;
  image: string;
};

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: ProjectType[] = [
    {
      id: 0,
      title: "Adaptive Facial Recognition System for Real-Time Attendance",
      description: "Designed and implemented an end-to-end face recognition pipeline for fast, GPU-free real-time attendance tracking with 92% test accuracy.",
      skills_demonstrated: "Computer Vision Pipeline Design, Image Normalization, SVM Classification, Real-time Optimization",
      more_details: "Improved robustness to lighting and image quality variations by integrating CLAHE normalization, adaptive face cropping, and outlier removal reducing noisy samples by 4% and stabilizing model performance.",
      tech: ["Python", "OpenCV", "scikit-image", "scikit-learn", "NumPy", "Pandas"],
      github: "https://github.com/Shindapkd/Supervised_Face_Recognition_System_Using_Classification",
      date: "Dec 2025",
      image: "/photos/fcrpj.png"
    },
    {
      id: 1,
      title: "Identification of Genetic Disorder in the Medical Field",
      description: "Developed an SVM-based image classification model for precise genetic disorder prediction, achieving 92% accuracy through optimized feature extraction.",
      skills_demonstrated: "Data Balancing (SMOTE), Image Classification, GUI Development, Modular Architecture Design",
      more_details: "Applied SMOTE to rebalance the dataset and built a fast, user-friendly GUI for real-time predictions under 2 seconds per image using a clean, modular architecture.",
      tech: ["Python", "SVM", "imbalanced-learn", "OpenCV", "Tkinter", "NumPy", "Pandas"],
      github: "https://github.com/Shindapkd/Support-Vector-Machine-for-Identification-of-Genetical-Disorders-in-Medical-Field",
      date: "Apr 2025",
      image: "/photos/gndpj.png"
    }
  ];

  const selectedProject = selectedProjectId !== null ? projects.find(p => p.id === selectedProjectId) : null;

  // Scroll to top of section when project changes
  useEffect(() => {
    if (selectedProjectId !== null && containerRef.current) {
      const yOffset = -100; // offset for fixed headers if any
      const element = containerRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [selectedProjectId]);

  const handleNextProject = () => {
    if (selectedProjectId !== null) {
      const nextId = (selectedProjectId + 1) % projects.length;
      setSelectedProjectId(nextId);
    }
  };

  return (
    <section ref={containerRef} className="relative z-20 py-24 px-4 md:px-12 lg:px-24 min-h-screen flex items-center">
      <div className="max-w-6xl w-full mx-auto backdrop-blur-sm bg-black/40 rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8 md:p-12">
        
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-white text-center drop-shadow-md">
                Featured <span className="text-amber-500">Projects</span>
              </h3>

              <div className="flex flex-col gap-10">
                {projects.map((proj, idx) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className="group relative flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:bg-black/60 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:border-amber-500/50"
                  >
                    <div className="w-full md:w-2/5 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shrink-0 relative">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="w-full md:w-3/5 flex flex-col relative z-10 justify-center">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors drop-shadow-sm">
                          {proj.title}
                        </h4>
                      </div>
                      <span className="inline-block text-sm font-medium bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full whitespace-nowrap mb-4 w-max border border-amber-500/30">
                        {proj.date}
                      </span>
                      
                      <p className="text-white/90 font-medium text-base leading-relaxed mb-4 line-clamp-3 drop-shadow-sm">
                        {proj.description}
                      </p>
                      
                      <div className="mb-6">
                        <span className="text-amber-500 font-semibold text-sm">Skills Demonstrated: </span>
                        <span className="text-white/80 text-sm">{proj.skills_demonstrated}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-200">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-auto font-bold text-sm text-amber-500 tracking-wide flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Full Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedProjectId(null)}
                className="group flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors mb-8 w-max"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium tracking-wide">Back to Projects</span>
              </button>

              {/* Detail Content */}
              <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden relative mb-12 border border-white/10">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="px-4 md:px-8">
                <div className="inline-block px-4 py-1.5 bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-300 font-medium text-sm rounded-full mb-6 w-max border border-amber-500/30">
                  {selectedProject.date}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-md">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-12">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none mb-16">
                  <h3 className="text-2xl font-semibold text-amber-400 mb-6 tracking-tight drop-shadow-sm">Overview</h3>
                  <p className="text-white font-medium text-xl leading-relaxed mb-6 drop-shadow-sm">
                    {selectedProject.description}
                  </p>

                  <h3 className="text-xl font-semibold text-amber-400 mb-6 tracking-tight drop-shadow-sm">Skills Demonstrated</h3>
                  <p className="text-white font-medium text-lg leading-relaxed mb-10 drop-shadow-sm">
                    {selectedProject.skills_demonstrated}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-amber-400 mb-6 tracking-tight drop-shadow-sm">Technical Details & Implementation</h3>
                  <p className="text-white/95 font-medium text-lg leading-relaxed drop-shadow-sm">
                    {selectedProject.more_details}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-amber-400 focus:ring-4 focus:ring-amber-500/30 transition-all text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] w-full md:w-auto"
                  >
                    <Github className="w-6 h-6" /> View on GitHub
                  </a>

                  <button
                    onClick={handleNextProject}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all text-lg w-full md:w-auto"
                  >
                    Next Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
