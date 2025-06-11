import { useCartStore, usePageStore } from '../store';
import { Model as Cart } from '../objects/Cart';
import { Page } from '../store';
import Modules from './ModulesScene';
import Display from './DisplayScene';
import Top from './TopScene';
import Appliances from './ApplianceScene';
import Glasses from './GlassScene';

export default function Scene() {
    const page = usePageStore((s) => s.page);
    const theme = useCartStore((s) => s.theme);

    switch (page) {
        case Page.Landing:
            return <FullThela theme="apothecary" />;
            break;
        case Page.Theme:
            return (
                <group scale={0.5} position={[0, 0, 0.5]}>
                    <FullThela theme="summer" />
                    <FullThela theme="apothecary" position-x={-1} position-z={-1} />
                    <FullThela theme="concert" position-x={1} position-z={-1} />
                </group>
            );
            break;
        default:
            return <Thela theme={theme} />;
    }
}

function FullThela({ theme, ...props }) {
    // const page = useStore((s) => s.page);

    return (
        <group position-y={-0.5} {...props}>
            <Cart theme={theme} />
            <Modules theme={theme} allmodules={true} />
            <Display theme={theme} choice={'medium'} />
            <Top theme={theme} choice={'wooden'} />
            <Appliances all={true} />
            <Glasses all={true}/>
        </group>
    );
}

function Thela({ theme, ...props }) {
    const display = useCartStore((s) => s.display);

    return (
        <group position-y={-0.5} {...props}>
            <Cart theme={theme} />
            <Modules theme={theme} />
            {display && <Display theme={theme} />}

            {top && <Top theme={theme} />}
            <Appliances />
            <Glasses />
        </group>
    );
}
