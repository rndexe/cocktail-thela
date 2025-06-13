import { useCartStore, usePageStore, Page } from '../store';
import { Header, Footer, Navigation } from '../utils/Components';

export function NamePage() {
    const setName = useCartStore((s) => s.setName);
    const setPage = usePageStore((s) => s.setPage);

    return (
        <>
            <Header text={'Add your name'} />
            <Footer>
                <div className="w-full mb-1">
                    <input
                        name="name"
                        className="w-full rounded-lg bg-black text-2xl p-4"
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}></input>
                </div>
                <Navigation texts={['Back', 'Share']} actions={[() => setPage(Page.Glass), () => createThela()]} />
            </Footer>
        </>
    );
}
