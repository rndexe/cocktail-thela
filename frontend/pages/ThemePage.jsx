import { useCartStore, usePageStore, Page } from '../store';
import { Header, Footer, Navigation, Options } from '../utils/Components';

export default function ThemePage() {
    const setPage = usePageStore((s) => s.setPage);

    return (
        <>
            <Header text={'Choose a Theme'} />
            <Footer>
                <Themes />
                <Navigation actions={[() => setPage(Page.Landing), () => setPage(Page.Modules)]} />
            </Footer>
        </>
    );
}

function Themes() {
    const setTheme = useCartStore((state) => state.setTheme);
    const theme = useCartStore((state) => state.theme);

    function handleClick(e) {
        setTheme(e.target.dataset.choice);
    }

    return (
        <Options
            items={[
                { text: 'Apothecary', value: 'apotecary' },
                { text: 'Summer', value: 'summer' },
                { text: 'Concert', value: 'concert' },
            ]}
            onChange={handleClick}
            storeValue={theme}
        />
    );
}
