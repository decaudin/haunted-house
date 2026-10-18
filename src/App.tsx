import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Floor from './components/Floor'
import House from './components/House'
import Graves from './components/Graves'

export default function App() {
    return (
        <Canvas camera={{ position: [4, 2, 5], fov: 75 }}>
            <color attach="background" args={['black']} />

            <ambientLight color="#ffffff" intensity={0.5} />

            <directionalLight
                color="#ffffff"
                intensity={1.5}
                position={[3, 2, -8]}
            />

            <OrbitControls makeDefault enableDamping />

            <Floor />

            <House />

            <Graves />
        </Canvas>
    )
}