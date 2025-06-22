export default function Lights() {
  const intensity = 0.8;
  return (
    <>
      <directionalLight
        color="#61dafb"
        position={[-5, 5, 15]}
        intensity={intensity}
      />
      <directionalLight
        color="#616ee0"
        position={[-3, 5, 15]}
        intensity={intensity}
      />
      <directionalLight
        color="#e16ee0"
        position={[0, 5, 20]}
        intensity={intensity}
      />
      <directionalLight
        color="#61dafb"
        position={[0, 0, 20]}
        intensity={intensity}
      />

      <directionalLight
        color="#61dafb"
        position={[5, 5, 15]}
        intensity={intensity}
      />
      <directionalLight
        color="#616ee0"
        position={[3, 5, 10]}
        intensity={intensity}
      />
    </>
  );
}
