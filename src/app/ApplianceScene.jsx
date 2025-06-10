import { Model as Dishwasher } from '../objects/Dish';
import { Model as IceMachine } from '../objects/Ice';
import { useCartStore } from '../store';

export default function Appliances({ all }) {
    const appliances = all ? [true, true, true] : useCartStore((s) => s.appliances);

    return (
        <>
            {appliances[0] && <Dishwasher position={[0.27, -0.04, -0.1]} />}
            {appliances[1] && <IceMachine position={[-0.34, -0.07, -0.1]} />}
            {/* {appliances[2] && <SolarPanel />} */}
        </>
    );
}
