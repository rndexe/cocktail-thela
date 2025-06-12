import { useGLTF } from '@react-three/drei';
import { getThemeColor, useThemeTexturesCart } from './utils';

export function Model({ theme, ...props }) {
    const { nodes } = useGLTF('/models/Cart.glb');

    const [tex1, tex2, tex3, tex4] = useThemeTexturesCart(theme);
    const color = getThemeColor(theme);

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_0.geometry}>
                <meshStandardMaterial color={'grey'} />
            </mesh>
            <mesh geometry={nodes.Mesh_2.geometry}>
                <meshStandardMaterial color={'black'} />
            </mesh>
            <mesh geometry={nodes.Mesh_7.geometry}>
                <meshStandardMaterial map={tex1} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_8.geometry}>
                <meshStandardMaterial map={tex2} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_9.geometry}>
                <meshStandardMaterial color={'grey'} />
            </mesh>
            <mesh geometry={nodes.Mesh_10.geometry}>
                <meshStandardMaterial map={tex3} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_11.geometry}>
                <meshStandardMaterial map={tex4} color={color} />
            </mesh>
            <mesh geometry={nodes.Mesh_13.geometry}>
                <meshStandardMaterial color="#b5a642" metalness={1} roughness={0.3} />
            </mesh>
            <mesh geometry={nodes.Mesh_14.geometry}>
                <meshStandardMaterial color="#b5a642" metalness={1} roughness={0.3} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/models/Cart.glb');
