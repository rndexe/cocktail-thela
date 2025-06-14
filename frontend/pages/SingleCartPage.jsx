import { useCartStore } from '../store';
import { getThelaById } from '../utils/getThelas';
import { useEffect } from 'react';
import { Footer, Header } from '../utils/Components';
import { useParams } from 'wouter';
import { navigate } from 'wouter/use-browser-location';

export default function SingleCartPage() {
    const reset = useCartStore((s) => s.reset);

    const params = useParams();

    console.log(params);
    // console.log(useCartStore.getInitialState())
    useEffect(() => {
        const getThela = async () => {
            const response = await getThelaById(params.id);
            console.log(response);
            useCartStore.setState({
                theme: response.theme,
                modules: response.modules.split(','),
                appliances: [
                    response.appliances.includes('dishwasher'),
                    response.appliances.includes('ice-machine'),
                    response.appliances.includes('solar-panel'),
                ],
                glasses: [
                    response.glasses.includes('rocks'),
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
                            navigate('/');
                            reset();
                        }}
                        className="px-6 py-4 rounded-l-xl basis-1/2 bg-gradient-to-b from-neutral-700 to-black active:to-neutral-700">
                        Back
                    </button>
                    <button
                        onClick={() => {
                            navigate('/make/theme');
                            reset();
                        }}
                        className="px-6 py-4 rounded-r-xl basis-1/2 bg-gradient-to-b from-neutral-700 to-black active:to-neutral-700">
                        Make your own
                    </button>
                </div>
            </Footer>
        </>
    );
}
