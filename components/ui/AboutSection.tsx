"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-20 relative overflow-hidden bg-zinc-950/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-pink-500 text-xs font-bold uppercase tracking-wider">About Me</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bridging <span className="text-pink-500">Frontend</span> &{" "}
            <span className="text-blue-500">Backend</span>
          </h2>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            MERN Stack Developer with 3 years of experience building and shipping web and mobile applications.
            Specialized in developing frontends with React/Next.js and writing robust Node.js/Express backends,
            with practical experience managing databases (MongoDB, Firebase) and handling media storage via
            Cloudflare R2.
          </p>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            Hands-on experience writing secure REST APIs, setting up multifactor authentication, and
            integrating third-party services like Stripe, Tap, and SendGrid. Comfortable handling remote
            Linux/Unix servers via SSH, managing live application processes with PM2, and using AI tools
            to speed up frontend and backend development workflows.
          </p>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            Focused on writing clean, maintainable code and working within agile teams to turn project
            requirements into working production features.
          </p>
        </motion.div>

        {/* Right side content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 text-center hover:border-pink-500/30 transition-all">
              <div className="text-4xl font-bold text-pink-500">3+</div>
              <div className="text-zinc-400 text-sm mt-1">Years Experience</div>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all">
              <div className="text-4xl font-bold text-blue-500">15+</div>
              <div className="text-zinc-400 text-sm mt-1">Projects Shipped</div>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 text-center hover:border-green-500/30 transition-all">
              <div className="text-4xl font-bold text-green-500">20%</div>
              <div className="text-zinc-400 text-sm mt-1">Performance Boost</div>
            </div>
            <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all">
              <div className="text-4xl font-bold text-purple-500">24/7</div>
              <div className="text-zinc-400 text-sm mt-1">Server Uptime</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-white/5 rounded-xl p-6">
            <p className="text-zinc-300 text-sm leading-relaxed">
              <span className="text-pink-400 font-semibold">💡 Currently:</span> Available for freelance
              projects and full-time opportunities. Let's build something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}