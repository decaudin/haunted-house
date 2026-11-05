import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping, SRGBColorSpace } from 'three'

type BushProps = {
    position: [number, number, number]
    scale: number
}

export default function Bush({ position, scale }: BushProps) {

    const bushColorTexture = useTexture('/bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.webp')
    const bushARMTexture = useTexture('/bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.webp')
    const bushNormalTexture = useTexture('/bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.webp')

    const bushTextures = useMemo(() => {
        return [
            bushColorTexture,
            bushARMTexture,
            bushNormalTexture
        ].map((texture) => {
            const clonedTexture = texture.clone()
            if (texture === bushColorTexture) clonedTexture.colorSpace = SRGBColorSpace
            clonedTexture.repeat.set(2, 1)
            clonedTexture.wrapS = RepeatWrapping
            return clonedTexture
        })
    }, [bushColorTexture, bushARMTexture, bushNormalTexture])

    const [bushColor, bushARM, bushNormal] = bushTextures

    return (
        <mesh position={position} rotation-x={-0.75} scale={scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
                color="#ccffcc"
                map={bushColor}
                aoMap={bushARM}
                normalMap={bushNormal}
                roughnessMap={bushARM}
                metalnessMap={bushARM}
            />
        </mesh>
    )
}