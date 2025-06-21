"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useFrame, useThree } from "@react-three/fiber";
import { CubeCamera } from "@react-three/drei";

import { WavyMaterial } from "@/components";

import {
  clothMaterial,
  elthoraOrbMaterial,
  elthoraOuterOrbMaterial,
  elthoraInnerOrbMaterial,
} from "@/utils/materials";

gsap.registerPlugin(useGSAP);

const ElthoraOrb = (props) => {
  const ref = useRef();
  useGSAP(
    () => {
      // gsap code here...
      gsap.to(ref.current.rotation, {
        x: 0,
        y: Math.PI * 2,
        z: 0,
        duration: 1,
        repeat: -1,
        ease: "none",
      }); // <-- automatically reverted
    },
    { scope: props.ref }
  );

  return (
    <mesh {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        {elthoraOrbMaterial}
      </mesh>
    </mesh>
  );
};

export default ElthoraOrb;
