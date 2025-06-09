import { useStore } from '../store';
import { Model as Cart } from '../thela/Cart';
import { Model as Tequila } from '../thela/Tequilla';
import { Model as Vodka } from '../thela/Vodka';
import { Model as Rum } from '../thela/Rum';
import { Model as Display } from '../thela/Display';
import { Model as Roof } from '../thela/Roof';
import { Model as Wine } from '../thela/Wine';
import { Model as Dish } from '../thela/Dish';
import { Model as Ice } from '../thela/Ice';
import { Model as Rock } from '../thela/Rock';
import { Page } from '../store';
import { useState, useEffect } from 'react';

export default function Scene() {
    const page = useStore((s) => s.page);

    if (page == Page.Theme) {
        return (
            <group scale={0.5}>
                <FullThela theme="apothecary" />
                <FullThela theme="summer" position-x={-1} position-z={-1} />
                <FullThela theme="concert" position-x={1} position-z={-1} />
            </group>
        );
    } else {
        return <FullThela theme="apothecary" />;
    }
}

function FullThela({ theme, ...props }) {
    const page = useStore((s) => s.page);

    return (
        <group position-y={-0.5} {...props}>
            <Cart theme={theme} />
            <Modules theme={theme} />
            {page != Page.Modules && <Display position={[0, 0.841 / 2 + 0.372 + 0.616 / 2, -0.13]} theme={theme} />}
            {page != Page.Modules && page != Page.Display && (
                <Roof position={[0, 0.841 / 2 + 0.372 + 0.616 + 0.06 / 2, 0.02]} theme={theme} />
            )}
            {page != Page.Modules && page != Page.Display && <Wine position={[0, 1.27, 0]} />}
            {(page == Page.Appliances || page == Page.Glass || page == Page.Name) && (
                <Dish position={[0.27, -0.04, -0.1]} />
            )}
            {(page == Page.Appliances || page == Page.Glass || page == Page.Name) && (
                <Ice position={[-0.34, -0.07, -0.1]} />
            )}
            {(page == Page.Glass || page == Page.Name) && <Rock position={[-0.34, 0.15, -0.1]} />}
            {/* <BoundingBoxWithLog objectRef={ref} /> */}
        </group>
    );
}

function Modules({ theme }) {
    const [visibleModules, setVisibleModules] = useState([true, true, true, true, true]);
    const page = useStore((s) => s.page);

    useEffect(() => {
        if (page !== Page.Modules) {
            // On all other pages: show all modules
            setVisibleModules([true, true, true, true, true]);
            return;
        }
        setVisibleModules([false, false, false, false, false]);
        let i = 0;

        const revealNext = () => {
            setVisibleModules((prev) => {
                const next = [...prev];
                if (i < next.length) next[i] = true;
                return next;
            });
            i++;
            if (i >= 5) clearInterval(interval);
        };

        revealNext(); // show first module immediately

        const interval = setInterval(revealNext, 800);
        return () => clearInterval(interval);
    }, [page]);

    return (
        <>
            <Tequila position={[-0.375, 0.841 / 2 + 0.372 / 2, -0.13]} theme={theme} visible={visibleModules[4]} />
            <Vodka position={[-0.335, 0.841 / 2 + 0.363 / 2, 0.203]} theme={theme} visible={visibleModules[3]} />
            <Rum position={[0.375, 0.841 / 2 + 0.363 / 2, -0.13]} theme={theme} />
            <Rum
                position={[0.265, 0.841 / 2 + 0.363 / 2, 0.135]}
                rotation-y={-Math.PI / 4}
                theme={theme}
                visible={visibleModules[1]}
            />
            <Rum
                position={[0, 0.841 / 2 + 0.363 / 2, 0.245]}
                rotation-y={-Math.PI / 2}
                theme={theme}
                visible={visibleModules[2]}
            />
        </>
    );
}
