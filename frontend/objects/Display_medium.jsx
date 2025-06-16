import { useGLTF } from '@react-three/drei';
import { useThemeTextures, getThemeColor } from './utils';

export function Model({ theme, ...props }) {
    const { nodes } = useGLTF('/models/Display_med.glb');

    const [tex1, tex2] = useThemeTextures(theme, 'display_medium');
    const color = getThemeColor(theme);

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_0.geometry}>
                <meshStandardMaterial map={tex1} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_1.geometry}>
                <meshStandardMaterial map={tex2} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_2.geometry}>
                <meshStandardMaterial color="#b5a642" metalness={1} roughness={0.3} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/models/Display_med.glb');
