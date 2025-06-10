import { useTexture } from '@react-three/drei';

export function getThemeColor(theme) {
    switch (theme) {
        case 'concert':
            return '#000000';
        case 'summer':
            return '#FFFFFF';
        default:
        case 'apothecary':
            return '#898989';
    }
}

export function useThemeTextures(theme, path) {
    const [tex1, tex2] = useTexture([`/${path}/baseColor_1.jpg`, `/${path}/baseColor_2.jpg`]);
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
