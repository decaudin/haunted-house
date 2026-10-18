type BushProps = {
    position: [number, number, number]
    scale: number
}

export default function Bush({ position, scale }: BushProps) {
    
    return (
        <mesh position={position} scale={scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial />
        </mesh>
    )
}