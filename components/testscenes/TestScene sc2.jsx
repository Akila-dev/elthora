'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import {
	OrbitControls,
	Instances,
	Instance,
	Environment,
} from '@react-three/drei';
import { GradientMaterial } from '@/components';
import { LadyOnChair } from '@/modeljsx';

function Model() {
	return <LadyOnChair scale={20} position={[0, -2, 0]} />;
}

function TestScene() {
	return (
		<Canvas shadows camera={{ position: [0, 1, 8], fov: 50 }}>
			<ambientLight intensity={1} />
			<directionalLight
				position={[5, 10, 8]}
				castShadow
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
			/>
			<Environment preset="studio" environmentIntensity={0.1} />
			<Model />
			<mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
				<planeGeometry args={[50, 50]} />
				<shadowMaterial opacity={0.2} />
				<meshStandardMaterial
					color="#eeeeee"
					metalness={1}
					roughness={0.5}
					specular={0.5}
					sides={THREE.DoubleSide}
				/>
			</mesh>
			<OrbitControls />
		</Canvas>
	);
}

export default TestScene;
