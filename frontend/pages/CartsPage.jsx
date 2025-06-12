import { API_URL } from '../utils/constants';
import { getThelaImageList } from '../utils/getThelas';
import { useEffect, useState } from 'react';
import { Page, usePageStore } from '../store';
import { ButtonSection } from './Components';

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
        <div className="absolute bottom-0 top-0 left-0 right-0">
            <div className="h-full flex flex-col justify-between px-2 pt-6 pb-1">
                <div className="grid grid-cols-2 p-4 gap-2 overflow-scroll">
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
                <ButtonSection>
                    <button
                        onClick={() => {
                            setPage(Page.Landing);
                        }}
                        className="btn rounded-3xl w-full">
                        Back
                    </button>
                </ButtonSection>
            </div>
        </div>
    );
}
