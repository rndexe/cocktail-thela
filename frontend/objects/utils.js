import { useTexture } from '@react-three/drei';

export function getThemeColor(theme) {
    switch (theme) {
        case 'concert':
            return '#121212';
        case 'summer':
            return '#FFFFFF';
        default:
        case 'apothecary':
            return '#898989';
    }
}

export function useThemeTextures(theme, path) {
    const [tex1, tex2] = useTexture([`/textures/${path}/baseColor_1.jpg`, `/textures/${path}/baseColor_2.jpg`]);
    tex1.flipY = false;
    tex2.flipY = false;

    switch (theme) {
        case 'concert':
            return [null, null];
        case 'summer':
        default:
        case 'apothecary':
            return [tex1, tex2];
            break;
    }
}

export function useThemeTexturesCart(theme) {
    const [tex1, tex2, tex3, tex4] = useTexture([
        '/textures/cart/baseColor_6.jpg',
        '/textures/cart/baseColor_7.jpg',
        '/textures/cart/baseColor_8.jpg',
        '/textures/cart/baseColor_9.jpg',
    ]);
    tex1.flipY = false;
    tex2.flipY = false;
    tex3.flipY = false;
    tex4.flipY = false;

    switch (theme) {
        case 'concert':
            return [null, null, null, null];
        case 'summer':
        default:
        case 'apothecary':
            return [tex1, tex2, tex3, tex4];
            break;
    }
}
