import { MeshDistortMaterial } from "@react-three/drei";

export const bodyMaterial = (
  <meshPhysicalMaterial
    color="#c2c8ff"
    roughness={0.25}
    metalness={0.05}
    sheen={1}
    sheenColor="#ffffff"
    sheenRoughness={0.6}
    clearcoat={0.3}
    clearcoatRoughness={0.2}
    envMapIntensity={1}
    reflectivity={0.5}
    transparent={true}
    // opacity={0.9}
  />
);
export const clothMaterial = (
  <meshPhysicalMaterial
    color="#616ee0"
    roughness={0.25}
    metalness={0.05}
    sheen={1}
    sheenColor="#ffffff"
    sheenRoughness={0.6}
    clearcoat={0.3}
    clearcoatRoughness={0.2}
    envMapIntensity={1}
    reflectivity={0.5}
    transparent={true}
    // opacity={0.9}
  />
);
export const furnitureMaterial = (
  <meshPhysicalMaterial
    color="#c2c8ff"
    roughness={0.25}
    metalness={0.05}
    sheen={1}
    sheenColor="#ffffff"
    sheenRoughness={0.6}
    clearcoat={0.3}
    clearcoatRoughness={0.2}
    envMapIntensity={1}
    reflectivity={0.5}
  />
);

export const elthoraOrbMaterial = (
  <MeshDistortMaterial
    color="#616ee0"
    speed={1}
    distort={0.1}
    roughness={1}
    transmission={0.5} // glass effect
    thickness={1.0}
    transparent={true}
    opacity={0.9}
    metalness={0.5}
    clearcoat={1.0}
    clearcoatRoughness={0.1}
    reflectivity={0.5}
  />
);

// export default { bodyMaterial, clothMaterial, furnitureMaterial };
