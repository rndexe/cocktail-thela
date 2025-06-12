import { useCartStore } from '../store';
import { clsx } from 'clsx';

export default function AppliancePage() {
    const setAppliances = useCartStore((s) => s.setAppliances);
    const appliances = useCartStore((s) => s.appliances);
    function handleClick(e) {
        setAppliances(e.target.dataset.choice);
    }

    return (
        <div className="btn-ctr text-base">
            <button
                onClick={handleClick}
                data-choice="dishwasher"
                className={clsx('btn rounded-l-lg', appliances[0] && 'bg-highlight')}>
                Dishwasher
            </button>
            <button
                onClick={handleClick}
                data-choice="ice-machine"
                className={clsx('btn', appliances[1] && 'bg-highlight')}>
                Ice Machine
            </button>
            <button
                onClick={handleClick}
                data-choice="solar-panel"
                className={clsx('btn rounded-r-lg', appliances[2] && 'bg-highlight')}>
                Solar Panel
            </button>
        </div>
    );
}
