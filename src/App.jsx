import { Environment, Grid, OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import UI from './components/UI';
import Scene from './components/Scene';

function App() {
    return (
        <>
            
            <Canvas camera={{ position: [0, 3, 7], fov: 25 }}>
                <Stats/>
                <Grid
                    args={[6, 6]}
                    position-y={-0.841 / 2 - 0.5}
                    cellSize={1}
                    cellThickness={1}
                    cellColor={'white'}
                    sectionSize={10}
                    sectionColor={'white'}
                />
                <Scene />
                <OrbitControls/>
                {/* <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={1.0} minPolarAngle={1.0}  /> */}
                <Environment preset="warehouse" environmentIntensity={1} />
            </Canvas>
            <UI />
        </>
    );
}

export default App;
