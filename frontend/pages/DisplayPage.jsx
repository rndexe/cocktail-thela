import { useCartStore } from '../store';
import { clsx } from 'clsx';

export default function DisplayPage() {
    const setDisplay = useCartStore((s) => s.setDisplay);
    const display = useCartStore((s) => s.display);

    function handleClick(e) {
        setDisplay(e.target.dataset.choice);
    }

    return (
        <div className="btn-ctr ">
            <button
                onClick={handleClick}
                data-choice="tall"
                className={clsx('btn rounded-l-lg', display == 'tall' && 'bg-highlight')}>
                Tall
            </button>
            <button
                onClick={handleClick}
                data-choice="medium"
                className={clsx('btn ', display == 'medium' && 'bg-highlight')}>
                Medium
            </button>
            <button
                onClick={handleClick}
                data-choice="short"
                className={clsx('btn rounded-r-lg ', display == 'short' && 'bg-highlight')}>
                Short
            </button>
        </div>
    );
}
