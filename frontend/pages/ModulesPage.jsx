import { useState } from 'react';
import { useCartStore } from '../store';
import { Header, Footer, Navigation } from './Components';

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
                <Navigation />
            </Footer>
        </>
    );
}

function CounterButton({ text, className }) {
    const [count, setCount] = useState(0);
    const total = useCartStore((s) => s.getTotal);
    const setModules = useCartStore((s) => s.setModules);

    function decrease() {
        if (count > 0) {
            // decreaseModules();
            setModules(text.toLowerCase(), false);
            setCount(count - 1);
        }
    }

    function increase() {
        if (total() < 5) {
            // increaseModules();
            setModules(text.toLowerCase(), true);
            setCount(count + 1);
        }
    }

    return (
        <div
            className={`flex items-center justify-between pl-4 py-0 text-lg bg-black text-text basis-1/2 rounded-3xl ${className}`}>
            <div>{text}</div>
            <div className="flex items-center gap-1 text-xl">
                <button onClick={decrease} className="px-3 py-1 active:bg-highlight">
                    −
                </button>
                <span className="w-2 text-center">{count}</span>
                <button onClick={increase} className="px-3 py-1 active:bg-highlight">
                    +
                </button>
            </div>
        </div>
    );
}
