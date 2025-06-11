import { useGLTF } from '@react-three/drei';
import { useThemeTextures, getThemeColor } from './utils';

export function Model({ theme, type, ...props }) {
    const { nodes } = useGLTF('/models/Module.glb');

    const [tex1, tex2] = useThemeTextures(theme, 'module');
    const color = getThemeColor(theme);

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_0.geometry} material={nodes.Mesh_0.material} />
            <mesh geometry={nodes.Mesh_2.geometry}>
                <meshStandardMaterial map={tex1} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_3.geometry}>
                <meshStandardMaterial map={tex2} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_4.geometry}>
                <meshStandardMaterial color="#b5a642" metalness={1} roughness={0.3} />
            </mesh>
            <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
        </group>
    );
}

useGLTF.preload('/models/Module.glb');
