import { useCartStore, glass_names } from '../store';
import { Header, Footer, Navigation, Options } from '../utils/Components';

export default function GlassPage() {
    return (
        <>
            <Header text={'Choose your Glasses'} />
            <Footer>
                <Glasses />
                <Navigation actions={['/appliances', '/submit']} />
            </Footer>
        </>
    );
}

function Glasses() {
    const setGlasses = useCartStore((s) => s.setGlasses);
    const glasses = useCartStore((s) => s.glasses);

    function handleClick(e) {
        setGlasses(e.target.dataset.choice);
    }

    return (
        <Options
            items={[
                { text: 'Rocks', value: glass_names[0] },
                { text: 'Highball', value: glass_names[1] },
                { text: 'Martini', value: glass_names[2] },
            ]}
            onChange={handleClick}
            storeValue={glasses}
        />
    );
}
