import { Environment, Grid, Loader, OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import UI from './pages/UI';
import Scene from './scenes/Scene';
import { Toaster } from 'sonner';
import { StoreLogger } from './utils/StoreLogger';

function App() {
    console.log('1.0.2');
    return (
        <>
            <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [0, 3, 7], fov: 25 }}>
                {import.meta.env.DEV && <Stats />}
                <Grid
                    args={[8, 8]}
                    position-y={-0.841 / 2 - 0.5}
                    cellSize={1}
                    cellThickness={2}
                    cellColor={'white'}
                    sectionSize={10}
                    sectionColor={'white'}
                />
                <Scene />
                {import.meta.env.DEV && <OrbitControls />}
                {import.meta.env.PROD && <OrbitControls enablePan={false} maxPolarAngle={1.5} minPolarAngle={1.0} />}
                <Environment preset="warehouse" environmentIntensity={2.0} />
            </Canvas>
            <UI />
            <Toaster
                position="top-center"
                duration={2000}
                toastOptions={{
                    classNames: {
                        toast: '!bg-neutral-200 !text-neutral-700',
                    },
                }}
            />
            {import.meta.env.DEV && <StoreLogger />}
            <Loader />
        </>
    );
}

export default App;
