import { useCartStore, usePageStore, Page, glass_names } from '../store';
import { Header, Footer, Navigation, Options } from '../utils/Components';

export default function GlassPage() {
    const setPage = usePageStore((s) => s.setPage);

    return (
        <>
            <Header text={'Choose your Glasses'} />
            <Footer>
                <Glasses />
                <Navigation actions={[() => setPage(Page.Appliances), () => setPage(Page.Name)]} />
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
