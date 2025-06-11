import { useGLTF } from '@react-three/drei';

export function Model(props) {
    const { nodes } = useGLTF('/models/Rock_glasses.glb');
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_0.geometry} material={nodes.Mesh_0.material} />
            <mesh
                geometry={nodes.Mesh_2001.geometry}
                // material={nodes.Mesh_2001.material}
                position={[0.009, 0.009, -0.033]}
                rotation={[0, 0, 0.086]}>
                <meshPhysicalMaterial color={'white'} roughness={0.1} metalness={0.8} transparent opacity={0.9} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/models/Rock_glasses.glb');
