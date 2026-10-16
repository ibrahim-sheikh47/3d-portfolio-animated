"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HeroShaderMaterial } from "./HeroShaderMaterial";
import { useResponsiveCanvas } from "@/hooks/useResponsiveCanvas";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mousePosition = usePortfolioStore((state) => state.mousePosition);
  const isReducedMotion = usePortfolioStore((state) => state.isReducedMotion);
  const { distsortMultiplier } = useResponsiveCanvas();

  // Memoized once — no longer rebuilt (and shader recompiled) on every
  // mousemove-triggered re-render.
  const shaderArgs = useMemo(() => {
    const args = {
      uniforms: THREE.UniformsUtils.clone(HeroShaderMaterial.uniforms),
      vertexShader: HeroShaderMaterial.vertexShader,
      fragmentShader: HeroShaderMaterial.fragmentShader,
    };

    (args.uniforms.uColor.value as any) = new THREE.Color("#1e3a8a"); // deep blue
    (args.uniforms.uRimColor.value as any) = new THREE.Color("#3b82f6"); // bright blue

    return args;
  }, []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      if (materialRef.current.uniforms.uTime) {
        materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      }

      if (materialRef.current.uniforms.uDistortion) {
        materialRef.current.uniforms.uDistortion.value = isReducedMotion
          ? 0.1
          : 1.0 * (distsortMultiplier || 1);
      }
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.1;

      if (!isReducedMotion && mousePosition) {
        const targetRotX = (mousePosition.y || 0) * 0.5;
        const targetRotY = (mousePosition.x || 0) * 0.5;
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          targetRotX,
          delta * 3
        );
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          targetRotY,
          delta * 3
        );
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.6}>
      {/* detail 4 = ~5,120 faces, still perfectly smooth for a shader-distorted
          blob. Bump to 5–6 max if you want more displacement resolution and
          your frame rate can take it — never anywhere near 64. */}
      <icosahedronGeometry args={[1, 4]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[shaderArgs]}
        transparent
      />
    </mesh>
  );
}