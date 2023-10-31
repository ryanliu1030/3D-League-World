function Floor() {
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[Math.PI / -2, 0, 0]}
      scale={[100000, 100000, 100000]}
    >
      <planeGeometry />
      <meshStandardMaterial color={'#93c5fd'} />
    </mesh>
  );
}

export default Floor;
