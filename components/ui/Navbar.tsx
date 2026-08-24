"use client";

import { motion } from "framer-motion";
import { usePortfolioStore } from "@/store/usePortfolioStore";

const navItems = ["hero", "about", "skills", "projects", "experience", "contact"];

export function Navbar() {
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  const setReducedMotion = usePortfolioStore((state) => state.setReducedMotion);

  const handleNavClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#09090b]/40 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-xl tracking-wider uppercase cursor-pointer"
        onClick={() => handleNavClick("hero")}
      >
        Ibrahim<span className="text-blue-500">.</span>
      </motion.div>

      <nav className="hidden md:flex space-x-1 items-center bg-zinc-900/50 rounded-full border border-white/10 p-1">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 text-zinc-400 hover:text-white"
          >
            {activeSection === item && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-600/20 border border-blue-500/40 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setReducedMotion(!isReducedMotion)}
          className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
        >
          {isReducedMotion ? "Enable 3D Motion" : "Reduced Motion"}
        </button>
      </div>
    </header>
  );
}