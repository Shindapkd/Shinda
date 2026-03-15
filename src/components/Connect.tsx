"use client";

import React from "react";
import { Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react";

export default function Connect() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shinda-peedikakandy",
      icon: <Linkedin className="w-5 h-5 text-white" />,
      text: "linkedin.com/in/shinda-peedikakandy"
    },
    {
      name: "GitHub",
      href: "https://github.com/Shindapeedikakandy",
      icon: <Github className="w-5 h-5 text-white" />,
      text: "github.com/Shindapeedikakandy"
    },
    {
      name: "Email",
      href: "mailto:shindapeedikakandy@gmail.com",
      icon: <Mail className="w-5 h-5 text-white" />,
      text: "shindapeedikakandy@gmail.com"
    },
    {
      name: "Phone",
      href: "tel:+918848267452",
      icon: <Phone className="w-5 h-5 text-white" />,
      text: "+91-8848267452"
    }
  ];

  return (
    <footer className="relative z-20 py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/40 p-12 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Let's <span className="text-amber-500">Connect</span>
          </h3>
          <p className="text-white/80 max-w-sm text-lg leading-relaxed">
            I'm currently looking for new opportunities and engaging projects. 
            Feel free to reach out to collaborate on exciting technically-driven systems or to just say hi.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-black/40 group-hover:scale-110 group-hover:bg-amber-900/50 transition-all">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wide">{link.name}</span>
                  <span className="text-xs text-amber-200 font-medium">{link.text}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-amber-500/50 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12 text-amber-500/80 text-sm tracking-widest font-medium">
        © 2026 SHINDA PEEDIKAKANDY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
