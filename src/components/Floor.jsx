import { CuboidCollider, RigidBody } from '@react-three/rapier';

function Floor(props) {
  return (
    <RigidBody {...props} type="fixed" restitution={0.2} friction={1}>
      <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#93c5fd" />
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  );
}

export default Floor;
