import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping, SRGBColorSpace } from 'three'
import Bush from './Bush'

export default function House() {

    const wallColorTexture = useTexture('/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.webp')
    const wallARMTexture = useTexture('/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.webp')
    const wallNormalTexture = useTexture('/wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.webp')

    const roofColorTexture = useTexture('/roof/roof_slates_02_1k/roof_slates_02_diff_1k.webp')
    const roofARMTexture = useTexture('/roof/roof_slates_02_1k/roof_slates_02_arm_1k.webp')
    const roofNormalTexture = useTexture('/roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.webp')

    const doorColorTexture = useTexture('/door/color.webp')
    const doorAlphaTexture = useTexture('/door/alpha.webp')
    const doorAmbientOcclusionTexture = useTexture('/door/ambientOcclusion.webp')
    const doorHeightTexture = useTexture('/door/height.webp')
    const doorNormalTexture = useTexture('/door/normal.webp')
    const doorMetalnessTexture = useTexture('/door/metalness.webp')
    const doorRoughnessTexture = useTexture('/door/roughness.webp')

    const wallColor = useMemo(() => {
        const texture = wallColorTexture.clone()
        texture.colorSpace = SRGBColorSpace
        return texture
    }, [wallColorTexture])

    const roofTextures = useMemo(() => {
        return [
            roofColorTexture,
            roofARMTexture,
            roofNormalTexture
        ].map((texture) => {
            const clonedTexture = texture.clone()
            if (texture === roofColorTexture) clonedTexture.colorSpace = SRGBColorSpace
            clonedTexture.repeat.set(3, 1)
            clonedTexture.wrapS = RepeatWrapping
            return clonedTexture
        })
    }, [roofColorTexture, roofARMTexture, roofNormalTexture])

    const [roofColor, roofARM, roofNormal] = roofTextures

    const doorColor = useMemo(() => {
        const texture = doorColorTexture.clone()
        texture.colorSpace = SRGBColorSpace
        return texture
    }, [doorColorTexture])

    return (
        <>
            <mesh position-y={1.25}>
                <boxGeometry args={[4, 2.5, 4]} />
                <meshStandardMaterial
                    map={wallColor}
                    aoMap={wallARMTexture}
                    normalMap={wallNormalTexture}
                    roughnessMap={wallARMTexture}
                    metalnessMap={wallARMTexture}
                />
            </mesh>

            <mesh position-y={3.25} rotation-y={Math.PI * 0.25}>
                <coneGeometry args={[3.5, 1.5, 4]} />
                <meshStandardMaterial
                    map={roofColor}
                    aoMap={roofARM}
                    normalMap={roofNormal}
                    roughnessMap={roofARM}
                    metalnessMap={roofARM}
                />
            </mesh>

            <mesh position={[0, 1, 2.01]}>
                <planeGeometry args={[2.2, 2.2, 100, 100]} />
                <meshStandardMaterial
                    map={doorColor}
                    transparent
                    alphaMap={doorAlphaTexture}
                    aoMap={doorAmbientOcclusionTexture}
                    displacementMap={doorHeightTexture}
                    displacementScale={0.15}
                    displacementBias={-0.04}
                    normalMap={doorNormalTexture}
                    roughnessMap={doorRoughnessTexture}
                    metalnessMap={doorMetalnessTexture}
                />
            </mesh>
            
            <Bush position={[0.8, 0.2, 2.2]} scale={0.5} />

            <Bush position={[1.4, 0.1, 2.1]} scale={0.25} />

            <Bush position={[-0.8, 0.1, 2.2]} scale={0.4} />

            <Bush position={[-1, 0.05, 2.6]} scale={0.15} />
        </>
    )
}