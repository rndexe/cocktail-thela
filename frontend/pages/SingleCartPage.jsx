import { Page, usePageStore, useCartStore } from '../store';
import { getThelaById } from '../utils/getThelas';
import { useEffect } from 'react';
import { ButtonSection } from './Components';

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
            });
        };
        getThela();
    }, []);
    return (
        <div className="absolute bottom-0 top-0 left-0 right-0 pointer-events-none">
            <div className="h-full flex flex-col justify-end px-2 pt-6 pb-1">
                <ButtonSection>
                    <div className="flex gap-px">
                        <button
                            onClick={() => {
                                setPage(Page.ViewCarts);
                                reset();
                            }}
                            className="btn rounded-l-3xl grow">
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setPage(Page.Theme);
                                reset();
                            }}
                            className="btn rounded-r-3xl grow">
                            Make your own
                        </button>
                    </div>
                </ButtonSection>
            </div>
        </div>
    );
}
