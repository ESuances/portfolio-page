import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";

const JavaLogo = (props) => {
    const JavaLogoRef = useRef()
    const { nodes, materials } = useGLTF('/models/Java_Logo.glb')

    //Animation to make 3d object jump in space
    useGSAP(() => {
       gsap.to(JavaLogoRef.current.position, {
           y: JavaLogoRef.current.position.y + 0.5,
           duration: 1.5,
           repeat: -1,
           yoyo: true,
       })
    });

    return (
        <group {...props} ref={JavaLogoRef} rotation={[0, -19.5, 0]}>
            <group position={[0, -0.479, -0.085]} scale={0.585}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus004.geometry}
                    material={materials.Java_Cup}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus004_1.geometry}
                    material={materials.Java_Smoke}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/Java_Logo.glb')
export default JavaLogo
