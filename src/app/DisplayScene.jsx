import { useCartStore } from '../store';
import { Model as Display_medium } from '../objects/Display_medium';

export default function Display({ theme, choice, ...props }) {
    const display = choice ? choice : useCartStore((s) => s.display);

    switch (display) {
        case 'tall':
            return null;
        case 'medium':
            return <Display_medium position={[0, 0.841 / 2 + 0.372 + 0.616 / 2, -0.13]} theme={theme} />;
        case 'short':
            return null;
        default:
            return null;
    }
}
