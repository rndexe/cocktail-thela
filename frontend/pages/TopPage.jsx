import { useCartStore } from '../store';
import { clsx } from 'clsx';

export default function TopPage() {
    const setTop = useCartStore((s) => s.setTop);
    const top = useCartStore((s) => s.top);

    function handleClick(e) {
        setTop(e.target.dataset.choice);
    }

    return (
        <div className="btn-ctr">
            <button
                onClick={handleClick}
                data-choice="wooden"
                className={clsx('btn rounded-l-lg', top == 'wooden' && 'bg-highlight')}>
                Wooden
            </button>
            <button
                onClick={handleClick}
                data-choice="canopy"
                className={clsx('btn', top == 'canopy' && 'bg-highlight')}>
                Canopy
            </button>
            <button
                onClick={handleClick}
                data-choice="umbrella"
                className={clsx('btn rounded-r-lg', top == 'umbrella' && 'bg-highlight')}>
                Umbrella
            </button>
        </div>
    );
}
