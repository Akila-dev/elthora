"use client";

import { useRef, useEffect } from "react";

import { LookingAtElthora1, LookingAtElthora2 } from "@/modeljsx";
import { ElthoraOrb, Wall } from "@/components";

export default function ProductScene() {
  const elthoraOrbRef = useRef();

  const finalY = -3;
  const finalScale = 1.5;
  return (
    <group>
      {/* <Wall position={[0, 0, -10]} /> */}
      <ElthoraOrb ref={elthoraOrbRef} scale={1} position={[0, 0.5, 0]} />
      {/* <LookingAtElthora1
        position={[-1, finalY, 0]}
        rotation={[0, Math.PI * 0.2, 0]}
        scale={finalScale}
      />
      <LookingAtElthora2
        position={[0.7, finalY, -0.5]}
        rotation={[0, -Math.PI * 0, 0]}
        scale={finalScale}
      /> */}
    </group>
  );
}
