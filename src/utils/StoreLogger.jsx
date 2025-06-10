import { useEffect } from 'react';
import { useCartStore, usePageStore } from '../store';

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
export function StoreLogger2() {
    useEffect(() => {
        const unsub = usePageStore.subscribe((state, prevState) => {
            console.log('📦 Zustand Cart change:');
            // console.log(prevState);
            console.log(state);
        });
        return unsub;
    }, []);
    return null;
}
// Include this anywhere once in your app (like in App.tsx)
