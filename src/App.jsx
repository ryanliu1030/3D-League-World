import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Floor from './components/Floor';
import Cube from './components/Cube';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Canvas>
        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
        <OrbitControls />
        <ambientLight />
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
