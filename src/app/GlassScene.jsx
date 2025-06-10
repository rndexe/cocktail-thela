import { Model as Rock } from '../objects/Rock';
import { useCartStore } from '../store';
// import { cart_height, display_medium_height, module_height, roof_height } from '../utils/constants';

export default function Glasses({ all }) {
    const glasses = all ? [true, true, true] : useCartStore((s) => s.glasses);

    return (
        <>
            {glasses[0] && <Rock position={[-0.34, 0.15, -0.1]} />}
            {/* {glasses[1] && <IceMachine position={[-0.34, -0.07, -0.1]} />} */}
            {/* {appliances[2] && <S />} */}
        </>
    );
}
