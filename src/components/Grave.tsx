import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { SRGBColorSpace } from 'three'

type GraveProps = {
    position: [number, number, number]
    rotation: [number, number, number]
    scale: number
}

export default function Grave({ position, rotation, scale }: GraveProps) {

    const graveColorTexture = useTexture('/grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp')
    const graveARMTexture = useTexture('/grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp')
    const graveNormalTexture = useTexture('/grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp')

    const graveTextures = useMemo(() => {
        return [
            graveColorTexture,
            graveARMTexture,
            graveNormalTexture
        ].map((texture) => {
            const clonedTexture = texture.clone()
            if (texture === graveColorTexture) clonedTexture.colorSpace = SRGBColorSpace
            clonedTexture.repeat.set(0.3, 0.4)
            return clonedTexture
        })
    }, [graveColorTexture, graveARMTexture, graveNormalTexture])

    const [graveColor, graveARM, graveNormal] = graveTextures

    return (
        <mesh position={position} rotation={rotation} scale={scale}>
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial
                map={graveColor}
                aoMap={graveARM}
                normalMap={graveNormal}
                roughnessMap={graveARM}
                metalnessMap={graveARM}
            />
        </mesh>
    )
}