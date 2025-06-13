import { useCartStore, usePageStore, Page, appliances_names } from '../store';
import { Header, Footer, Navigation, Options } from '../utils/Components';

export default function AppliancePage() {
    const setPage = usePageStore((s) => s.setPage);

    return (
        <>
            <Header text={'Choose your Appliances'} />
            <Footer>
                <Appliances />
                <Navigation actions={[() => setPage(Page.Top), () => setPage(Page.Glass)]} />
            </Footer>
        </>
    );
}

function Appliances() {
    const setAppliances = useCartStore((s) => s.setAppliances);
    const appliances = useCartStore((s) => s.appliances);

    function handleClick(e) {
        setAppliances(e.target.dataset.choice);
    }

    return (
        <Options
            items={[
                { text: 'Dishwasher', value: appliances_names[0] },
                { text: 'Ice Machine', value: appliances_names[1] },
                { text: 'Solar Panel', value: appliances_names[2] },
            ]}
            onChange={handleClick}
            storeValue={appliances}
            className={'text-base'}
        />
    );
}
