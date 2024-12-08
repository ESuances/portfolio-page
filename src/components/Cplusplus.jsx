
import {Float, useGLTF} from '@react-three/drei';


const Cplusplus = (props) => {
    const { nodes, materials } = useGLTF('/models/Cplusplus_Logo.glb')

    return (
        <Float floatIntensity={1}>
            <group {...props} dispose={null}>
                <group rotation={[Math.PI / 3, 0, 0.5]} position={[2, -2, 0]} scale={[1, 0.1, 1]}>
                    <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Letters}/>
                    <mesh geometry={nodes.Cylinder_2.geometry} material={materials.ShieldInterior}/>
                    <mesh geometry={nodes.Cylinder_3.geometry} material={materials.ShieldExterior}/>
                </group>
            </group>
        </Float>
    )
}

useGLTF.preload('/models/Cplusplus_Logo.glb')
export default Cplusplus

