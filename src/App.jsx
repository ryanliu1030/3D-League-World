import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Floor from './components/Floor';
import Cube from './components/Cube';
import Nunu from './components/Nunu';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Canvas>
        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
        <OrbitControls />
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Nunu scale={[0.005, 0.005, 0.005]} />
        </Suspense>
        <Floor />
        <Cube position={[1, 0.05, 0]} />
        <Cube position={[0, 0.05, 1]} />
        <Cube position={[-1, 0.05, 0]} />
        <Cube position={[0, 0.05, -1]} />
      </Canvas>
    </div>
  );
}

export default App;
