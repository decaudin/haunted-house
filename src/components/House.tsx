import Bush from './Bush'

export default function House() {

    return (
        <>
            <mesh position-y={1.25}>
                <boxGeometry args={[4, 2.5, 4]} />
                <meshStandardMaterial />
            </mesh>

            <mesh position-y={3.25} rotation-y={Math.PI * 0.25}>
                <coneGeometry args={[3.5, 1.5, 4]} />
                <meshStandardMaterial />
            </mesh>

            <mesh position={[0, 1, 2.01]}>
                <planeGeometry args={[2.2, 2.2]} />
                <meshStandardMaterial />
            </mesh>
            
            <Bush position={[0.8, 0.2, 2.2]} scale={0.5} />

            <Bush position={[1.4, 0.1, 2.1]} scale={0.25} />

            <Bush position={[-0.8, 0.1, 2.2]} scale={0.4} />

            <Bush position={[-1, 0.05, 2.6]} scale={0.15} />
        </>
    )
}