import { API_URL } from '../utils/constants';
import { getThelaImageList } from '../utils/getThelas';
import { useEffect, useState } from 'react';
import { Footer } from '../utils/Components';
import { Link } from 'wouter';

export default function CartsPage() {
    const [thelas, setThelas] = useState([]);

    useEffect(() => {
        const getThelas = async () => {
            const response = await getThelaImageList();
            setThelas(response);
        };
        getThelas();
    }, []);

    return (
        <>
            <div className="grid grid-cols-2 p-4 gap-3 overflow-scroll pointer-events-auto rounded-2xl bg-black/50">
                {thelas.map((data) => {
                    return (
                        <Link to={`/${data.id}`} className="bg-neutral-100 rounded-lg shadow" key={data.id}>
                            <img
                                className="aspect-square object-contain"
                                src={`${API_URL}/files/thela/${data.id}/${data.image}`}
                            />
                            <div className='text-center border-t border-neutral-300 bg-neutral-100 rounded-b-lg'>{`${data.name}'s Thela`}</div>
                        </Link>
                    );
                })}
            </div>
            <Footer>
                <div className="flex justify-center pt-4">
                    <Link to="~/" className="px-8 py-3 rounded-2xl bg-gradient-to-b from-neutral-700 to-black active:to-neutral-700">
                        Home
                    </Link>
                </div>
            </Footer>
        </>
    );
}
