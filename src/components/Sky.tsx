import { useMemo } from 'react'
import { MathUtils } from 'three'
import { Sky as ThreeSky } from 'three/addons/objects/Sky.js'

export default function Sky() {

    const sky = useMemo(() => {
        const sky = new ThreeSky()

        sky.scale.setScalar(100)

        const uniforms = sky.material.uniforms

        uniforms.turbidity.value = 7.71
        uniforms.rayleigh.value = 4
        uniforms.mieCoefficient.value = 0.00035
        uniforms.mieDirectionalG.value = 0.95
        uniforms.cloudCoverage.value = 0.2
        uniforms.showSunDisc.value = false

        const sunElevation = -0.115
        const sunAzimuth = 162.47

        const phi = MathUtils.degToRad(90 - sunElevation)
        const theta = MathUtils.degToRad(sunAzimuth)

        uniforms.sunPosition.value.setFromSphericalCoords(1, phi, theta)

        return sky
    }, [])

    return <primitive object={sky} />
}