"use client";

import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we've scrolled past the 300vh canvas area, show nav background
      if (window.scrollY > window.innerHeight * 2.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certifications" },
    { name: "Resume", href: "#resume" },

  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg shadow-amber-500/5 py-4"
          : "bg-transparent py-6 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-widest hidden md:block">
          SHINDA<span className="text-amber-500">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-white/70 hover:text-amber-400 text-sm tracking-wide font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav - Hamburger can be added later, or horizontal scroll for now */}
        <div className="md:hidden w-full overflow-x-auto no-scrollbar">
          <ul className="flex items-center space-x-6 px-2 min-w-max">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white/80 hover:text-amber-400 text-sm tracking-wide font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
