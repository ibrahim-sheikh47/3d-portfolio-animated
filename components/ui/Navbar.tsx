"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const navItems = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export function Navbar() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleNavClick = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      const yOffset = -80; // Account for navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#09090b]/40 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-xl tracking-wider uppercase cursor-default"
      >
        Ibrahim<span className="text-blue-500">.</span>
      </motion.div>

      <nav
        onMouseLeave={() => setHoveredSection(null)}
        className="hidden md:flex space-x-16 items-center  p-1 absolute left-1/2 transform -translate-x-1/2 "
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            onMouseEnter={() => setHoveredSection(item)}
            className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
              hoveredSection === item ? "text-white" : "text-zinc-400"
            }`}
          >
            {hoveredSection === item && (
              <motion.div
                layoutId="hoverTab"
                className="absolute inset-0 bg-blue-600/20 border border-blue-500/40 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </button>
        ))}
      </nav>

      <div className="w-[100px]"></div>
    </header>
  );
}