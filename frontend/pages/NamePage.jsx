import { toast } from 'sonner';
import { useCartStore } from '../store';
import { Header, Footer, Navigation } from '../utils/Components';
import createThela from '../utils/createThela';
import { useRef, useState } from 'react';

export default function NamePage() {
    const setName = useCartStore((s) => s.setName);
    const [disabled, setDisabled] = useState(false);
    const ref = useRef();

    return (
        <>
            <Header text={'Add your name'} />
            <Footer>
                <div className="w-full mb-1">
                    <input
                        ref={ref}
                        name="name"
                        className="w-full rounded-lg bg-black text-2xl p-2"
                        type="text"
                        maxlength="10"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}></input>
                </div>
                <Navigation
                    disabled={disabled}
                    texts={['Back', 'Save']}
                    actions={[
                        '/glass',
                        () => {
                            if (!ref.current.value) toast.warning('Please add a name');
                            else {
                                setDisabled(true);
                                toast.promise(createThela(), {
                                    loading: 'Sharing...',
                                    success: 'Your Cart has been saved successfully!',
                                    error: 'Oops! Something went wrong.',
                                });
                            }
                        },
                    ]}
                />
            </Footer>
        </>
    );
}
