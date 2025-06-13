import { useCartStore } from '../store';
import { Header, Footer, Navigation } from '../utils/Components';
import createThela from '../utils/createThela';

export default function NamePage() {
    const setName = useCartStore((s) => s.setName);

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
                <Navigation
                    texts={['Back', 'Share']}
                    actions={[
                        '/glass',
                        () => {
                            createThela();
                        },
                    ]}
                />
            </Footer>
        </>
    );
}
