import { useCartStore } from '../store';
import { clsx } from 'clsx';

export default function GlassPage() {
    const setGlasses = useCartStore((s) => s.setGlasses);
    const glasses = useCartStore((s) => s.glasses);
    function handleClick(e) {
        setGlasses(e.target.dataset.choice);
    }

    return (
        <div className="btn-ctr">
            <button
                onClick={handleClick}
                data-choice="rocks"
                className={clsx('btn rounded-l-lg', glasses[0] && 'bg-highlight')}>
                Rocks
            </button>
            <button
                onClick={handleClick}
                data-choice="highball"
                className={clsx('btn', glasses[1] && 'bg-highlight')}>
                Highball
            </button>
            <button
                onClick={handleClick}
                data-choice="martini"
                className={clsx('btn rounded-r-lg', glasses[2] && 'bg-highlight')}>Martini</button>
        </div>
    );
}
