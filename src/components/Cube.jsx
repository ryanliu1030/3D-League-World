import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';

function Cube(props) {
  const ref = useRef();
  return (
    <RigidBody {...props} type="fixed" colliders="cuboid" ref={ref}>
      <mesh>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color={'#ffffff'} />
      </mesh>
    </RigidBody>
  );
}

export default Cube;
