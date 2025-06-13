import { clsx } from 'clsx';

export function Header({ type, text }) {
    const className = clsx('text-black text-center', {
        'font-heading text-[4.0rem]': type == 'landing',
        'font-body text-xl': !type,
    });
    return <h1 className={className}>{text}</h1>;
}

export function Footer({ children }) {
    return <div className="text-text text-xl font-body pointer-events-auto touch-none">{children}</div>;
}

export function Navigation({ texts = ['Back', 'Next'], actions, thick }) {
    return (
        <div className="flex gap-px">
            <NavButton onClick={actions[0]} thick={thick}>
                {texts[0]}
            </NavButton>
            <NavButton onClick={actions[1]} thick={thick}>
                {texts[1]}
            </NavButton>
        </div>
    );
}

export function NavButton({ children, thick, ...props }) {
    return (
        <button
            className={clsx('bg-black active:bg-highlight basis-1/2 first:rounded-l-3xl last:rounded-r-3xl', {
                'py-4': thick,
                'py-2': !thick,
            })}
            {...props}>
            {children}
        </button>
    );
}

export function Options({ items, storeValue, onChange, className }) {
    return (
        <div className="flex gap-px mb-1">
            {items.map((item, index) => {
                const isHighlighted = Array.isArray(storeValue) ? storeValue[index] : storeValue == item.value;
                return (
                    <button
                        key={item.value}
                        onClick={onChange}
                        data-choice={item.value}
                        className={clsx(
                            'bg-black px-6 py-4 grow first:rounded-l-2xl last:rounded-r-2xl',
                            {
                                'bg-highlight': isHighlighted,
                            },
                            className,
                        )}>
                        {item.text}
                    </button>
                );
            })}
        </div>
    );
}
