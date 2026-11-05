import type { PointLight } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Ghosts() {

    const ghost1 = useRef<PointLight>(null)
    const ghost2 = useRef<PointLight>(null)
    const ghost3 = useRef<PointLight>(null)

    useFrame(({ clock }) => {
        const elapsedTime = clock.elapsedTime

        const ghost1Angle = elapsedTime * 0.5

        if (ghost1.current) {
            ghost1.current.position.x = Math.cos(ghost1Angle) * 4
            ghost1.current.position.z = Math.sin(ghost1Angle) * 4
            ghost1.current.position.y = Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.34) * Math.sin(ghost1Angle * 3.45)
        }

        const ghost2Angle = - elapsedTime * 0.38

        if (ghost2.current) {
            ghost2.current.position.x = Math.cos(ghost2Angle) * 5
            ghost2.current.position.z = Math.sin(ghost2Angle) * 5
            ghost2.current.position.y = Math.sin(ghost2Angle) * Math.sin(ghost2Angle * 2.34) * Math.sin(ghost2Angle * 3.45)
        }

        const ghost3Angle = elapsedTime * 0.23

        if (ghost3.current) {
            ghost3.current.position.x = Math.cos(ghost3Angle) * 6
            ghost3.current.position.z = Math.sin(ghost3Angle) * 6
            ghost3.current.position.y = Math.sin(ghost3Angle) * Math.sin(ghost3Angle * 2.34) * Math.sin(ghost3Angle * 3.45)
        }
    })

    return (
        <>
            <pointLight
                ref={ghost1}
                color="#8800ff"
                intensity={6}
                castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-far={10}
            />
            <pointLight
                ref={ghost2}
                color="#ff0088"
                intensity={6}
                castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-far={10}
            />
            <pointLight
                ref={ghost3}
                color="#ff0000"
                intensity={6}
                castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-far={10}
            />
        </>
    )
}