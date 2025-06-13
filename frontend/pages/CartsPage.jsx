import { API_URL } from '../utils/constants';
import { getThelaImageList } from '../utils/getThelas';
import { useEffect, useState } from 'react';
import { Page, usePageStore } from '../store';
import { Footer } from '../utils/Components';

export default function CartsPage() {
    const [thelas, setThelas] = useState([]);
    const setPage = usePageStore((s) => s.setPage);

    useEffect(() => {
        const getThelas = async () => {
            const response = await getThelaImageList();
            setThelas(response);
        };
        getThelas();
    }, []);

    return (
        <>
            <div className="grid grid-cols-2 p-4 gap-2 overflow-scroll pointer-events-auto">
                {thelas.map((data) => {
                    return (
                        <button
                            onClick={() => {
                                setPage(Page.ViewSingleCart, data.id);
                            }}
                            className="bg-white rounded-md shadow"
                            key={data.id}>
                            <img
                                className="aspect-square object-contain"
                                src={`${API_URL}/files/thela/${data.id}/${data.image}`}
                            />
                            <div>{`${data.name}'s Thela`}</div>
                        </button>
                    );
                })}
            </div>
            <Footer>
                <div className="flex justify-center">
                    <button
                        onClick={() => {
                            setPage(Page.Landing);
                        }}
                        className="bg-black px-8 py-2 rounded-full">
                        Home
                    </button>
                </div>
            </Footer>
        </>
    );
}
