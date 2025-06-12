import { useCartStore, Theme } from '../store';
import { clsx } from 'clsx';

export default function ThemePage() {
    const setTheme = useCartStore((state) => state.setTheme);
    const theme = useCartStore((state) => state.theme);

    return (
        <div className="btn-ctr ">
            <button
                onClick={() => {
                    setTheme(Theme.Apothecary);
                }}
                className={clsx('btn rounded-l-lg', theme == 'apothecary' && 'bg-highlight')}>
                Apothecary
            </button>
            <button
                onClick={() => {
                    setTheme(Theme.Summer);
                }}
                className={clsx('btn ', theme == 'summer' && 'bg-highlight')}>
                Summer
            </button>
            <button
                onClick={() => {
                    setTheme(Theme.Concert);
                }}
                className={clsx('btn rounded-r-lg', theme == 'concert' && 'bg-highlight')}>
                Concert
            </button>
        </div>
    );
}
