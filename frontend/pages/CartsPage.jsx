import { API_URL } from '../utils/constants';
import { getThelaImageList } from '../utils/getThelas';
import { useEffect, useState } from 'react';
import { Footer } from '../utils/Components';
import { Link } from 'wouter';

export default function CartsPage() {
    return (
        <>
            <div className='grow pointer-events-auto'>
                <div className="grid grid-cols-2 p-4 gap-3 overflow-auto rounded-2xl bg-black/50  min-h-full">
                    <Carts />
                </div>
            </div>
            <Footer>
                <div className="flex justify-center pt-4">
                    <Link
                        to="~/"
                        className="px-8 py-3 rounded-2xl  bg-gradient-to-b from-neutral-700 to-black active:to-neutral-700 border border-neutral-300">
                        Home
                    </Link>
                </div>
            </Footer>
        </>
    );
}

function Carts() {
    const [thelas, setThelas] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getThelas = async () => {
            const response = await getThelaImageList();
            setThelas(response);
            setIsLoaded(true);
        };
        getThelas();
    }, []);

    if (!isLoaded)
        return (
            <div className="w-full text-text text-xl flex justify-center items-center col-span-2">
                <p>Loading...</p>
            </div>
        );

    if (isLoaded && !thelas.length)
        return (
            <div className="w-full text-text text-xl flex justify-center items-center col-span-2">
                <p>No carts found.</p>
            </div>
        );
    return thelas.map((data) => {
        return (
            <Link to={`/${data.id}`} className="self-start bg-neutral-300 rounded-lg shadow" key={data.id}>
                <img
                    className="aspect-square object-contain h-36 w-full"
                    src={`${API_URL}/files/thela/${data.id}/${data.image}?thumb=0x144`}
                />
                <div className="text-center border-t border-neutral-300 bg-neutral-100 rounded-b-lg">{`${data.name}'s Cart`}</div>
            </Link>
        );
    });
}
