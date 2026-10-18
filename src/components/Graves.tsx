import Grave from './Grave'

const graves: {
    id: number
    position: [number, number, number]
    rotation: [number, number, number]
    scale: number
}[] = []

for (let i = 0; i < 30; i++) {
    let x: number
    let z: number
    let attempts = 0

    do {
        const angle = Math.random() * Math.PI * 2
        const radius = 3 + Math.random() * 4

        x = Math.sin(angle) * radius
        z = Math.cos(angle) * radius
        attempts++
    } while (
        graves.some(
            (grave) =>
                Math.hypot(grave.position[0] - x, grave.position[2] - z) < 0.85
        ) && attempts < 1000
    )

    graves.push({
        id: i,
        position: [x, Math.random() * 0.4, z],
        rotation: [
            (Math.random() - 0.5) * 0.4,
            (Math.random() - 0.5) * 0.4,
            (Math.random() - 0.5) * 0.4
        ],
        scale: 0.8 + Math.random() * 0.4
    })
}

export default function Graves() {

    return (
        <>
            {graves.map((grave) => (
                <Grave
                    key={grave.id}
                    position={grave.position}
                    rotation={grave.rotation}
                    scale={grave.scale}
                />
            ))}
        </>
    )
}