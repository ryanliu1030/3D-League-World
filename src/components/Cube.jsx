import { useRef } from 'react';

function Cube(props) {
  const mesh = useRef();
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color={'#ffffff'} />
    </mesh>
  );
}

export default Cube;
