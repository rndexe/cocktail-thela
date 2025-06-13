import { useEffect } from 'react';
import { useCartStore } from '../store';

export function StoreLogger1() {
    useEffect(() => {
        const unsub = useCartStore.subscribe((state, prevState) => {
            console.log('📦 Zustand Page change:');
            // console.log(prevState);
            console.log(state);
        });
        return unsub;
    }, []);
    return null;
}

// Include this anywhere once in your app (like in App.tsx)
