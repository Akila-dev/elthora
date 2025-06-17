// components/GradientShaderMaterial.js
'use client';

import * as THREE from 'three';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import vertexShader from '@/assets/glsl/gradientVertex.glsl';
import fragmentShader from '@/assets/glsl/gradientFragment.glsl';

// Define the custom shader
const GradientMaterial = shaderMaterial(
	{
		uColorTop: new THREE.Color('#a0c4ff'), // Light blue
		uColorBottom: new THREE.Color('#004e92'), // Darker blue
	},
	vertexShader,
	fragmentShader
);

// Extend it into JSX
extend({ GradientMaterial });

export default GradientMaterial;
