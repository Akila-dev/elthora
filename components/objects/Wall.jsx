export default function Wall(props) {
  return (
    <mesh {...props}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="#c2c8ff" />
    </mesh>
  );
}
