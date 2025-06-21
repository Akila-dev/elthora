// components/WavyShaderMaterial.js
"use client";

import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import vertexShader from "@/assets/glsl/wavyVertex.glsl";
import fragmentShader from "@/assets/glsl/wavyFragment.glsl";

// Define the custom shader
const WavyMaterial = shaderMaterial(
  {
    uTime: 0,
    uEnvMap: null,
    uResolution: new THREE.Vector2(),
  },
  vertexShader,
  fragmentShader
);
// class WavyMaterial extends THREE.ShaderMaterial {
//   constructor() {
//     super({
//       uniforms: {
//         uTime: { value: 0 },
//         uMouse: { value: new THREE.Vector2() },
//       },
//       vertexShader: vertexShader,
//       fragmentShader: fragmentShader,
//       transparent: true,
//     });
//   }
// }

// Extend it into JSX
extend({ WavyMaterial });

export default WavyMaterial;
