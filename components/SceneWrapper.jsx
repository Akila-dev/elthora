"use client";

import { useRef, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Billboard, Text } from "@react-three/drei";

import { ProductScene } from "@/components";

gsap.registerPlugin(useGSAP);

const SceneWrapper = () => {
  return (
    <>
      <ProductScene />
    </>
  );
};

export default SceneWrapper;
