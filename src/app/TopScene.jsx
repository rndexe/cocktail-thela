import { Model as Roof } from '../objects/Roof';
import { useCartStore } from '../store';
import { cart_height, display_medium_height, module_height, roof_height } from '../utils/constants';

export default function Modules({ theme, choice }) {
    const top = choice ? choice : useCartStore((s) => s.top);

    switch (top) {
        case 'wooden':
            return (
                <Roof
                    position={[0, cart_height/2 + module_height + display_medium_height + roof_height / 2, 0.02]}
                    theme={theme}
                />
            );
        case 'canopy':
            return null;
        case 'umbrella':
            return null;
        default:
            return null;
    }
}
