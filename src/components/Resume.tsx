"use client";

import React, { useState } from "react";
import { Download, Eye, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
  const [selectedCV, setSelectedCV] = useState<'general' | 'specialized' | null>(null);

  const cvs = {
    general: {
      name: "General CV",
      filename: "Shinda_Peedikakandy_CV.pdf",
      path: "/Shinda_Peedikakandy_CV.pdf"
    },
    specialized: {
      name: "Specialized CV",
      filename: "Shinda_Specialized_CV.pdf",
      path: "/Shinda_Specialized_CV.pdf"
    }
  };

  return (
    <section className="relative z-20 py-24 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto backdrop-blur-sm bg-black/40 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            My <span className="text-amber-500">Resumes</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Select a resume to view or download. I have prepared a general version as well as a specialized one highlighting specific expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* General CV Card */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-500" />
              General CV
            </h3>
            <div className="relative group w-full max-w-sm cursor-pointer" onClick={() => setSelectedCV('general')}>
              <div className="w-full aspect-[1/1.4] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden border border-white/10 relative shadow-xl">
                 
                 {/* Document dummy lines to simulate text */}
                 <div className="absolute inset-0 flex flex-col p-8 gap-5 pointer-events-none filter blur-[6px] opacity-40">
                   <div className="h-6 bg-amber-400 w-1/2 rounded"></div>
                   <div className="h-2 bg-white/80 w-1/3 rounded mt-2"></div>
                   <div className="h-px bg-white/20 w-full my-2"></div>
                   <div className="h-3 bg-white/70 w-2/3 rounded"></div>
                   <div className="h-2 bg-white/40 w-full rounded"></div>
                   <div className="h-2 bg-white/40 w-full rounded"></div>
                   <div className="h-2 bg-white/40 w-5/6 rounded"></div>
                   <div className="h-4 bg-white/70 w-1/4 rounded mt-4"></div>
                   <div className="h-2 bg-white/40 w-full rounded"></div>
                   <div className="h-2 bg-white/40 w-11/12 rounded"></div>
                 </div>

                 {/* Hover overlay */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-10">
                   <button className="flex items-center gap-2 bg-amber-500 text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-300 scale-95 group-hover:scale-100">
                     <Eye className="w-5 h-5" />
                     View General CV
                   </button>
                 </div>
              </div>
            </div>
          </div>

          {/* Specialized CV Card */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-500" />
              Specialized CV
            </h3>
            <div className="relative group w-full max-w-sm cursor-pointer" onClick={() => setSelectedCV('specialized')}>
              <div className="w-full aspect-[1/1.4] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden border border-amber-500/20 relative shadow-xl">
                 
                 {/* Document dummy lines to simulate text */}
                 <div className="absolute inset-0 flex flex-col p-8 gap-5 pointer-events-none filter blur-[6px] opacity-40">
                   <div className="h-6 bg-amber-500 w-2/3 rounded"></div>
                   <div className="h-2 bg-white/80 w-1/4 rounded mt-2"></div>
                   <div className="h-px bg-amber-500/30 w-full my-2"></div>
                   <div className="h-3 bg-white/70 w-1/2 rounded"></div>
                   <div className="h-2 bg-amber-500/40 w-full rounded"></div>
                   <div className="h-2 bg-white/40 w-full rounded"></div>
                   <div className="h-2 bg-white/40 w-4/5 rounded"></div>
                   <div className="h-4 bg-white/70 w-1/3 rounded mt-4"></div>
                   <div className="h-2 bg-white/40 w-full rounded"></div>
                   <div className="h-2 bg-white/40 w-10/12 rounded"></div>
                 </div>

                 {/* Hover overlay */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-10">
                   <button className="flex items-center gap-2 bg-amber-500 text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-300 scale-95 group-hover:scale-100">
                     <Eye className="w-5 h-5" />
                     View Specialized CV
                   </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-medium text-white tracking-tight px-2">{cvs[selectedCV].name}</h3>
                <div className="flex items-center gap-2 sm:gap-4">
                  <a 
                    href={cvs[selectedCV].path} 
                    download={cvs[selectedCV].filename}
                    className="flex items-center gap-2 text-sm bg-amber-500/20 text-amber-400 hover:bg-amber-500 flex-shrink-0 hover:text-black border border-amber-500/30 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button 
                    onClick={() => setSelectedCV(null)}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 w-full bg-zinc-800">
                <iframe 
                  src={`${cvs[selectedCV].path}#view=FitH`} 
                  className="w-full h-full border-none"
                  title={`${cvs[selectedCV].name} PDF`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
