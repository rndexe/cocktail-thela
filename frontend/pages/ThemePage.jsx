import { useCartStore } from '../store';
import { Header, Footer, Navigation, Options } from '../utils/Components';

export default function ThemePage() {
    return (
        <>
            <Header text={'Choose a Theme'} />
            <Footer>
                <Themes />
                <Navigation actions={['~/', '/modules']} />
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
