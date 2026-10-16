"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraRig } from "./CameraRig";
import { Lights } from "./Lights";
import { SceneParticles } from "./SceneParticles";
import { HeroObject } from "./HeroObject";
import { AboutBlob } from "./AboutBlob";
import { SkillsScene } from "./SkillsScene";
import { ProjectsScene } from "./ProjectsScene";
import { usePortfolioStore } from "@/store/usePortfolioStore";

function MainScene() {
  const activeSection = usePortfolioStore((state) => state.activeSection);
  const viewport = useThree((state) => state.viewport);
  const size = useThree((state) => state.size);

  const isMobile = size.width < 768;

  // Place the hero orb right behind the profile pic
  const heroPosition: [number, number, number] = isMobile
    ? [0, viewport.height * 0.28, -1]
    : [viewport.width * 0.33, 0.1, -1];
  const heroScale = isMobile ? 0.5 : 0.68;

  return (
    <>
      <Lights />
      <SceneParticles />

      {activeSection === "hero" && (
        <group position={heroPosition} scale={heroScale}>
          <HeroObject />
        </group>
      )}
      {activeSection === "about" && <AboutBlob />}
      {activeSection === "skills" && <SkillsScene />}
      {activeSection === "projects" && <ProjectsScene />}

      <CameraRig />
    </>
  );
}

export default function CanvasRoot() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#09090b] pointer-events-none">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}