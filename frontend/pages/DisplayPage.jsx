import { useCartStore, usePageStore, Page } from '../store';
import { Header, Footer, Navigation, Options } from '../utils/Components';

export default function DisplayPage() {
    const setPage = usePageStore((s) => s.setPage);

    return (
        <>
            <Header text={'Choose your Display'} />
            <Footer>
                <Displays />
                <Navigation actions={[() => setPage(Page.Modules), () => setPage(Page.Top)]} />
            </Footer>
        </>
    );
}

function Displays() {
    const setDisplay = useCartStore((s) => s.setDisplay);
    const display = useCartStore((s) => s.display);

    function handleClick(e) {
        setDisplay(e.target.dataset.choice);
    }

    return (
        <Options
            items={[
                { text: 'Tall', value: 'tall' },
                { text: 'Medium', value: 'medium' },
                { text: 'Short', value: 'short' },
            ]}
            onChange={handleClick}
            storeValue={display}
        />
    );
}
