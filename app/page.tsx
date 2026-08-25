"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useMousePosition } from "@/hooks/useMousePosition";

// FIX 1: Lazy load 3D Canvas with SSR disabled
const CanvasRoot = dynamic(
  () =>
    import("@/components/canvas/CanvasRoot").then((mod) => mod.default || mod),
  {
    ssr: false, // ✅ Prevents hydration mismatch
    loading: () => null,
  },
);

// FIX 2: Lazy load sections - USE ONLY NAMED EXPORTS
const HeroSection = dynamic(
  () => import("@/components/ui/HeroSection").then((mod) => mod.HeroSection),
  { ssr: true },
);

const AboutSection = dynamic(
  () => import("@/components/ui/AboutSection").then((mod) => mod.AboutSection),
  { ssr: false },
);

const SkillsSection = dynamic(
  () =>
    import("@/components/ui/SkillsSection").then((mod) => mod.SkillsSection),
  { ssr: false },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/ui/ProjectsSection").then(
      (mod) => mod.ProjectsSection,
    ),
  { ssr: false },
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/ui/ExperienceSection").then(
      (mod) => mod.ExperienceSection,
    ),
  { ssr: false },
);

const ContactSection = dynamic(
  () =>
    import("@/components/ui/ContactSection").then((mod) => mod.ContactSection),
  { ssr: false },
);

let gsapLoaded = false;

export default function Home() {
  useMousePosition();

  const setActiveSection = usePortfolioStore((state) => state.setActiveSection);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];
    let timeoutId: NodeJS.Timeout;

    const updateActiveSection = () => {
      // Mark that we're scrolling
      isScrollingRef.current = true;

      // Clear previous timeout
      if (timeoutId) clearTimeout(timeoutId);

      // Find which section is currently in view
      let activeSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          activeSection = sectionId;
        }
      });

      // Update the active section
      setActiveSection(activeSection);

      // Reset scrolling flag after a delay
      timeoutId = setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    };

    // Update on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial update
    updateActiveSection();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [setActiveSection]);

  useEffect(() => {
    if (isReducedMotion || gsapLoaded) return;

    const loadGSAP = async () => {
      try {
        const gsap = await import("gsap");
        const ScrollTrigger = await import("gsap/ScrollTrigger");

        gsap.gsap.registerPlugin(ScrollTrigger.ScrollTrigger);
        gsapLoaded = true;

        const ctx = gsap.gsap.context(() => {
          ["about", "skills", "projects", "experience", "contact"].forEach(
            (section) => {
              gsap.gsap.fromTo(
                `#${section} h2`,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: `#${section}`,
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                  },
                },
              );
            },
          );

          gsap.gsap.fromTo(
            "#experience .relative.pl-8",
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.2,
              duration: 1.2,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: "#experience",
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }, containerRef);

        return () => ctx.revert();
      } catch (error) {
        console.error("Failed to load GSAP:", error);
      }
    };

    const timer = setTimeout(loadGSAP, 1000);
    return () => clearTimeout(timer);
  }, [isReducedMotion]);

  return (
    <main ref={containerRef} className="relative min-h-screen">
      <CanvasRoot /> {/* ✅ Cleaner - ssr: false handles everything */}
      <CustomCursor />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-zinc-600 tracking-widest uppercase bg-zinc-950/60 backdrop-blur-md">
        © {new Date().getFullYear()} Ibrahim. Built with Next.js 16, TS, R3F &
        Framer Motion.
      </footer>
    </main>
  );
}
