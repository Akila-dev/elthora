import { MeshDistortMaterial } from "@react-three/drei";

export const bodyMaterial = (
  <meshPhysicalMaterial
    color="#d2d8ff" // More vibrant lavender
    roughness={0.5}
    metalness={0.3}
    sheen={1}
    sheenColor="#e7c3ff"
    sheenRoughness={0.3}
    clearcoat={0.8}
    clearcoatRoughness={0.05}
    envMapIntensity={1.2}
    reflectivity={0.6}
    transparent={true} // keep this if you're using opacity
    opacity={1} // 🔼 Increase this toward 1 for more solidity
    transmission={0.1} // 🔽 Lower this to reduce glass-like see-through
    thickness={0.1} // 🔽 Reduce depth effect
    attenuationDistance={0.1}
    attenuationColor="#d2d8ff" // Match base color for subtlety
  />
);
export const clothMaterial = (
  <meshPhysicalMaterial
    color="#7682ee" // More vibrant lavender
    roughness={0.3}
    metalness={0.3}
    sheen={1}
    sheenColor="#ffffff"
    sheenRoughness={0.3}
    clearcoat={0.8}
    clearcoatRoughness={0.05}
    envMapIntensity={1.2}
    reflectivity={0.6}
    transparent={true} // keep this if you're using opacity
    opacity={1} // 🔼 Increase this toward 1 for more solidity
    transmission={0.1} // 🔽 Lower this to reduce glass-like see-through
    thickness={0.1} // 🔽 Reduce depth effect
    attenuationDistance={0.1}
    attenuationColor="#a287ff" // Match base color for subtlety
  />
);

// export const bodyMaterial = (
//   <meshPhysicalMaterial
//     color="#c2c8ff"
//     roughness={0.25}
//     metalness={0.1}
//     sheen={1}
//     sheenColor="#c2c8ff"
//     sheenRoughness={0.6}
//     clearcoat={0.3}
//     clearcoatRoughness={0.2}
//     envMapIntensity={1}
//     reflectivity={0.5}
//     transparent={true}
//     // opacity={0.9}
//   />
// );
// export const clothMaterial = (
//   <meshPhysicalMaterial
//     color="#616ee0"
//     roughness={0.25}
//     metalness={0.1}
//     sheen={1}
//     sheenColor="#616ee0"
//     sheenRoughness={0.6}
//     clearcoat={0.1}
//     clearcoatRoughness={0.1}
//     envMapIntensity={1}
//     reflectivity={0.5}
//     transparent={true}
//     // opacity={0.9}
//   />
// );

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
