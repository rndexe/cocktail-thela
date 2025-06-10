import { useGLTF } from '@react-three/drei';
import { useThemeTextures, getThemeColor } from './utils';

export function Model({ theme, ...props }) {
    const { nodes } = useGLTF('/Roof.glb');
    const [tex1, tex2] = useThemeTextures(theme, 'roof_apo');
    const color = getThemeColor(theme);

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_0.geometry} material={nodes.Mesh_0.material} />
            <mesh geometry={nodes.Mesh_1.geometry}>
                <meshStandardMaterial map={tex1} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_2.geometry}>
                <meshStandardMaterial map={tex2} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
            <mesh geometry={nodes.Mesh_4.geometry} material={nodes.Mesh_4.material} />
            <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
            <mesh geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} />
        </group>
    );
}

useGLTF.preload('/Roof.glb');
