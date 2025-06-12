import { Model as Roof } from '../objects/Roof';
import { Model as Wine } from '../objects/Wine';
import { useCartStore } from '../store';
import { cart_height, display_medium_height, module_height, roof_height } from '../utils/constants';

export default function Modules({ theme, choice }) {
    const top = choice ? choice : useCartStore((s) => s.top);

    switch (top) {
        case 'wooden':
            return (
                <group position={[0, cart_height / 2 + module_height + display_medium_height + roof_height / 2, 0]}>
                    <Roof theme={theme} position-z={0.022} />
                    <Wine position-y={-0.165} />
                </group>
            );
        case 'canopy':
            return null;
        case 'umbrella':
            return null;
        default:
            return null;
    }
}
