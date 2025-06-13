import { Page, usePageStore, useCartStore } from '../store';
import { getThelaById } from '../utils/getThelas';
import { useEffect } from 'react';
import { Footer, Header } from './Components';

export default function CartsPage() {
    const id = usePageStore((s) => s.id);
    const setPage = usePageStore((s) => s.setPage);
    const reset = useCartStore((s) => s.reset);
    // console.log(useCartStore.getInitialState())
    useEffect(() => {
        const getThela = async () => {
            const response = await getThelaById(id);
            console.log(response);
            useCartStore.setState({
                theme: response.theme,
                modules: response.modules.split(','),
                appliances: [
                    response.appliances.includes('dishwasher'),
                    response.appliances.includes('ice machine'),
                    response.appliances.includes('solar panel'),
                ],
                glasses: [
                    response.glasses.includes('rock glasses'),
                    response.glasses.includes('highball'),
                    response.glasses.includes('martini'),
                ],
                display: response.display,
                top: response.top,
                name: response.name,
            });
        };
        getThela();
    }, []);
    return (
        <>
            <Header />
            <Footer>
                <div className="flex gap-px">
                    <button
                        onClick={() => {
                            setPage(Page.ViewCarts);
                            reset();
                        }}
                        className="bg-black px-6 py-4 rounded-l-3xl ">
                        Back
                    </button>
                    <button
                        onClick={() => {
                            setPage(Page.Theme);
                            reset();
                        }}
                        className="bg-black px-6 py-4 rounded-r-3xl ">
                        Make your own
                    </button>
                </div>
            </Footer>
        </>
    );
}
