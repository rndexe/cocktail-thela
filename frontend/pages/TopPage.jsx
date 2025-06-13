import { useCartStore } from '../store';
import { Header, Footer, Navigation, Options } from './Components';

export default function TopPage() {
    return (
        <>
            <Header text={'Choose your Top'} />
            <Footer>
                <Tops />
                <Navigation />
            </Footer>
        </>
    );
}

function Tops() {
    const setTop = useCartStore((s) => s.setTop);
    const top = useCartStore((s) => s.top);

    function handleClick(e) {
        setTop(e.target.dataset.choice);
    }

    return (
        <Options
            items={[
                { text: 'Wooden', value: 'wooden' },
                { text: 'Canopy', value: 'canopy' },
                { text: 'Umbrella', value: 'umbrella' },
            ]}
            onChange={handleClick}
            storeValue={top}
        />
    );
}
