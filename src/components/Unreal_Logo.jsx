import {Float, useGLTF} from '@react-three/drei'

const UnrealLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/Unreal_Logo.glb')


    return (
        <Float floatIntensity={10}>
            <group {...props} position={[-8, 6, 0]} rotation={[0,1,0]} scale={0.15} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LogoColor.geometry}
                    material={materials.Unreal_Logo_M}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/Unreal_Logo.glb')
export default UnrealLogo
