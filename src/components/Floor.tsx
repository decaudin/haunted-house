import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping, SRGBColorSpace } from 'three'

export default function Floor() {

    const floorAlphaTexture = useTexture('/floor/alpha.webp')
    const floorColorTexture = useTexture('/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp')
    const floorARMTexture = useTexture('/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp')
    const floorNormalTexture = useTexture('/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.webp')
    const floorDisplacementTexture = useTexture('/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.webp')

    const textures = useMemo(() => {
        return [
            floorColorTexture,
            floorARMTexture,
            floorNormalTexture,
            floorDisplacementTexture
        ].map((texture) => {
            const clonedTexture = texture.clone()
            if (texture === floorColorTexture) clonedTexture.colorSpace = SRGBColorSpace
            clonedTexture.repeat.set(8, 8)
            clonedTexture.wrapS = RepeatWrapping
            clonedTexture.wrapT = RepeatWrapping
            return clonedTexture
        })
    }, [floorColorTexture, floorARMTexture, floorNormalTexture, floorDisplacementTexture])

    const [floorColor, floorARM, floorNormal, floorDisplacement] = textures

    return (
        <mesh rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[20, 20, 100, 100]} />
            <meshStandardMaterial
                map={floorColor}
                transparent
                alphaMap={floorAlphaTexture}
                aoMap={floorARM}
                displacementMap={floorDisplacement}
                displacementScale={0.3}
                displacementBias={-0.2}
                normalMap={floorNormal}
                roughnessMap={floorARM}
                metalnessMap={floorARM}
            />
        </mesh>
    )
}