import { useCartStore } from '../store';

export function NamePage() {
    const setName = useCartStore((s) => s.setName);
    return (
        <div className="w-full mb-1">
            <input
                name="name"
                className="w-full rounded-lg bg-black text-2xl p-4"
                type="text"
                onChange={(e) => {
                    setName(e.target.value);
                }}></input>
        </div>
    );
}
