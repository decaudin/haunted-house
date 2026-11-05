import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Floor from './components/Floor'
import House from './components/House'
import Graves from './components/Graves'
import Ghosts from './components/Ghosts'
import Sky from './components/Sky'

export default function App() {
    return (
        <Canvas camera={{ position: [4, 2, 5], fov: 75 }} shadows="soft">
            <color attach="background" args={['black']} />

            <ambientLight color="#86cdff" intensity={0.55} />

            <directionalLight
                color="#86cdff"
                intensity={3}
                position={[3, 2, -8]}
                castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-top={8}
                shadow-camera-right={8}
                shadow-camera-bottom={-8}
                shadow-camera-left={-8}
                shadow-camera-near={1}
                shadow-camera-far={20}
            />

            <pointLight
                color="#f57d46"
                intensity={5}
                position={[0, 2.2, 2.5]}
            />

            <OrbitControls makeDefault enableDamping />

            <Floor />

            <House />

            <Graves />

            <Ghosts />

            <Sky />

            <fogExp2 attach="fog" args={['#060000', 0.025]} />
        </Canvas>
    )
}