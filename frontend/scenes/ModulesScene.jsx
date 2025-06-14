import { Model as Module } from '../objects/Module';
import { useCartStore } from '../store';
import { cart_height, module_height } from '../utils/constants';

export default function Modules({ theme, allmodules }) {
    const modules = allmodules ? ['whiskey', 'gin', 'rum', 'vodka', 'tequila'] : useCartStore((s) => s.modules);

    return (
        <>
            {modules.map((val, i) => {
                const [cx, cz, r] = [0, 0.13, 0.373];
                const angle = (i / 8) * Math.PI * 2 + Math.PI;
                if (val !== null) {
                    return (
                        <Module
                            key={i}
                            type={val}
                            position={[
                                cx + r * Math.cos(angle),
                                cart_height / 2 + module_height / 2,
                                -(cz + r * Math.sin(angle)),
                            ]}
                            rotation={[0, angle, 0]}
                            theme={theme}
                        />
                    );
                }
            })}
        </>
    );
}
