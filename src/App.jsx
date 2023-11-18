import { Canvas } from '@react-three/fiber';
import {
  PerspectiveCamera,
  KeyboardControls,
  OrbitControls,
} from '@react-three/drei';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import Floor from './components/Floor';
import Cube from './components/Cube';
import Nunubot from './components/Nunubot';
import './styles.css';

function App() {
  return (
    <div className="App">
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'laugh', keys: ['F', 'f'] },
        ]}
      >
        <Canvas >
          <PerspectiveCamera position={[2, 2, 2]} makeDefault />
          <OrbitControls />
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <Physics gravity={[0, -30, 0]}>
            <Floor />
            <Suspense fallback={null}>
              <Nunubot scale={[0.005, 0.005, 0.005]} />
            </Suspense>
            <Cube position={[1, 0.05, 0]} />
            <Cube position={[0, 0.05, 1]} />
            <Cube position={[-1, 0.05, 0]} />
            <Cube position={[0, 0.05, -1]} />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default App;
