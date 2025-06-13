import { useCartStore } from '../store';
import { getThelaById } from '../utils/getThelas';
import { useEffect } from 'react';
import { Footer, Header } from '../utils/Components';
import { useLocation, useParams } from 'wouter';

export default function SingleCartPage() {
    const reset = useCartStore((s) => s.reset);
    const [location, navigate] = useLocation();

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
                            navigate('/');
                            reset();
                        }}
                        className="bg-black px-6 py-4 rounded-l-3xl grow">
                        Back
                    </button>
                    <button
                        onClick={() => {
                            navigate('~/make/theme');
                            reset();
                        }}
                        className="bg-black px-6 py-4 rounded-r-3xl grow">
                        Make your own
                    </button>
                </div>
            </Footer>
        </>
    );
}
