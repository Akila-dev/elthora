"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

import { SceneWrapper, SelectiveBloom, CanvasLoader } from "@/components";

export default function MainScene() {
  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      style={{
        background: "#c2c8ff",
        position: "fixed",
        top: 0,
        height: "100vh",
      }}
      gl={{ toneMapping: THREE.NoToneMapping }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.2} />
        <SceneWrapper />
        {/* <CanvasLoader /> */}
        <Environment files="/env.jpg" />

        {/* <SelectiveBloom /> */}
        {/* <OrbitControls enabled={false} /> */}
        <OrbitControls enableZoom />
      </Suspense>
    </Canvas>
  );
}
