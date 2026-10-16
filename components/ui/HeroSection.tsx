"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, LinkedinIcon } from "lucide-react";


const LINKEDIN_URL = "https://www.linkedin.com/in/ibrahimsh7";


export function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleExplore = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 px-6 md:px-24 py-12 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10 select-none pointer-events-none"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-3"
        >
          MERN Stack Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none mb-6"
        >
          HI, I'M{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            IBRAHIM SHEIKH
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-zinc-400 font-medium max-w-2xl mb-8 leading-relaxed"
        >
          I turn ideas into fast, reliable products. For 3+ years I've shipped
          full-stack web and mobile apps for real clients, from clean React and
          Next.js interfaces to secure Node.js APIs, payments, and live
          backends.
        </motion.p>

        <motion.div variants={itemVariants} className="pointer-events-auto flex items-center gap-5">
          <button
            onClick={handleExplore}
            className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Explore My Work</span>

            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
            <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ibrahim Sheikh on LinkedIn"
            className="flex items-center justify-center w-14 h-14 rounded-lg border border-white/15 bg-white/5 text-zinc-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Profile picture - top priority layer, full image, not cropped */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-30 isolate shrink-0 pointer-events-none"
      >
        <Image
          src="/profilee.png"
          alt="Ibrahim Sheikh"
          width={900}
          height={1000}
          priority
          className="w-full mt-10 md:mt-0 md:w-[26rem] h-auto rounded-3xl bg-zinc-900 ring-2 ring-black/20 shadow-2xl shadow-black/60 p-1"
        />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-zinc-500 text-xs tracking-widest animate-bounce">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}