import { useState } from 'react';
import { useCartStore } from '../store';
import { Header, Footer, Navigation } from '../utils/Components';
import { toast } from 'sonner';
import { navigate } from 'wouter/use-browser-location';

export default function ModulesPage() {
    return (
        <>
            <Header text={'Choose Alcohol Modules'} />
            <Footer>
                <div className="grid grid-cols-2 gap-px mb-1">
                    <CounterButton text="Whiskey" />
                    <CounterButton text="Rum" />
                    <CounterButton text="Gin" />
                    <CounterButton text="Tequila" />
                    <CounterButton text="Vodka" className="col-span-2 w-1/2 justify-self-center" />
                </div>
                <ModuleNavigation />
            </Footer>
        </>
    );
}

function ModuleNavigation() {
    const total = useCartStore((s) => s.getTotal);
    return (
        <Navigation
            actions={[
                '/theme',
                () => {
                    if (total() < 5) toast.warning('Please add more modules');
                    else navigate('/make/display');
                },
            ]}
        />
    );
}

function CounterButton({ text, className }) {
    const [count, setCount] = useState(() => getInitialValue(text));
    const total = useCartStore((s) => s.getTotal);
    const setModules = useCartStore((s) => s.setModules);

    function decrease() {
        if (count > 0) {
            setModules(text.toLowerCase(), false);
            setCount(count - 1);
        }
    }

    function increase() {
        if (total() < 5) {
            setModules(text.toLowerCase(), true);
            setCount(count + 1);
        }
    }

    return (
        <div
            className={`bg-gradient-to-b from-neutral-700 to-black flex items-center justify-between pl-4 py-0 text-lg text-text basis-1/2 rounded-lg border border-neutral-300 ${className}`}>
            <div>{text}</div>
            <div className="font-mono flex items-center gap-1 text-xl">
                <button onClick={decrease} className="px-3 py-1 active:bg-bg">
                    −
                </button>
                <span className="w-2 text-center">{count}</span>
                <button onClick={increase} className="px-3 py-1 active:bg-bg">
                    +
                </button>
            </div>
        </div>
    );
}

function getInitialValue(text) {
    const modules = useCartStore.getState().modules;
    return modules.filter((item) => item === text.toLowerCase()).length;
}
