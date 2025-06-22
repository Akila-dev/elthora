"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useFrame, useThree } from "@react-three/fiber";

import {
  clothMaterial,
  elthoraOrbMaterial,
  elthoraOuterOrbMaterial,
  elthoraInnerOrbMaterial,
} from "@/utils/materials";

gsap.registerPlugin(useGSAP);

const ElthoraOrb = (props) => {
  const ref = useRef();

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
