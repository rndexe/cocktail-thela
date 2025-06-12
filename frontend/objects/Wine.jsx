import { useGLTF } from '@react-three/drei';

export function Model(props) {
    const { nodes } = useGLTF('/models/Wine_glasses.glb');
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        </group>
    );
}

useGLTF.preload('/models/Wine_glasses.glb');
