import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { KeyboardControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import Floor from './components/Floor';
import Cube from './components/Cube';
import Nunubot from './components/Nunubot';
import NunuSnowball from './components/NunuSnowball';
import './styles.css';

function App() {
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW', 'W', 'w'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS', 'S', 's'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA', 'A', 'a'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD', 'D', 'd'] },
    { name: 'laugh', keys: ['KeyF', 'F', 'f'] },
    { name: 'snowball', keys: ['Space'] },
  ];

  const [showSnowball, setShowSnowball] = useState(false);

  return (
    <div className="App">
      <KeyboardControls map={keyboardMap}>
        <Canvas>
          <ambientLight />
          <Physics timeStep={'vary'}>
            <Floor />
            <Ecctrl camInitDis={-3} floatingDis={0}>
              <Suspense fallback={null}>
                <Nunubot scale={0.005} position={[0, -0.65, 0]} />
                <NunuSnowball
                  position={[0, -0.65, 0.8]}
                  scale={0.005}
                  visible={showSnowball}
                  showSnowball={showSnowball}
                  setShowSnowball={setShowSnowball}
                />
              </Suspense>
            </Ecctrl>
            <Cube position={[1, 0.05, 0]} />
            <Cube position={[-1, 0.05, 0]} />
            <Cube position={[0, 0.05, -1]} />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default App;
