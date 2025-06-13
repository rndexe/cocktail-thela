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
            <div className="grid grid-cols-2 p-4 gap-2 overflow-scroll pointer-events-auto">
                {thelas.map((data) => {
                    return (
                        <Link to={`/${data.id}`} className="bg-white rounded-md shadow" key={data.id}>
                            <img
                                className="aspect-square object-contain"
                                src={`${API_URL}/files/thela/${data.id}/${data.image}`}
                            />
                            <div>{`${data.name}'s Thela`}</div>
                        </Link>
                    );
                })}
            </div>
            <Footer>
                <div className="flex justify-center">
                    <Link to="~/" className="bg-black px-8 py-2 rounded-full">
                        Home
                    </Link>
                </div>
            </Footer>
        </>
    );
}
