"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MovingStarfield() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });

  return (
    <group ref={ref}>
      <Stars radius={40} depth={35} count={2200} factor={3.2} saturation={0} fade speed={0.8} />
    </group>
  );
}

export function StarfieldBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} intensity={0.5} color="#22d3ee" />
        <pointLight position={[-8, -6, -4]} intensity={0.35} color="#a78bfa" />
        <MovingStarfield />
      </Canvas>
    </div>
  );
}
