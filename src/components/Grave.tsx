type GraveProps = {
    position: [number, number, number]
    rotation: [number, number, number]
    scale: number
}

export default function Grave({ position, rotation, scale }: GraveProps) {

    return (
            <mesh position={position} rotation={rotation} scale={scale}>
                <boxGeometry args={[0.6, 0.8, 0.2]} />
                <meshStandardMaterial />
            </mesh>
    )
}