import { clsx } from 'clsx';
import { Link } from 'wouter';

export function Header({ type, text }) {
    const className = clsx('text-black text-center', {
        'font-heading text-[4.0rem]': type == 'landing',
        'font-heading text-2xl': !type,
    });
    return <h1 className={className}>{text}</h1>;
}

export function Footer({ children }) {
    return <div className="text-text text-xl font-body pointer-events-auto touch-none">{children}</div>;
}

export function Navigation({ texts = ['Back', 'Next'], actions, thick }) {
    return (
        <div className="flex gap-px border border-text rounded-2xl">
            <NavButton action={actions[0]} thick={thick}>
                {texts[0]}
            </NavButton>
            <NavButton action={actions[1]} thick={thick}>
                {texts[1]}
            </NavButton>
        </div>
    );
}

export function NavButton({ children, thick, action }) {
    const className = clsx(
        'text-center basis-1/2 first:rounded-l-2xl last:rounded-r-2xl bg-gradient-to-b from-neutral-700 to-black active:to-neutral-700',
        {
            'py-4': thick,
            'py-2': !thick,
        },
    );
    if (typeof action == 'string') {
        return (
            <Link className={className} to={action}>
                {children}
            </Link>
        );
    } else {
        return (
            <button className={className} onClick={action}>
                {children}
            </button>
        );
    }
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
                            'bg-gradient-to-b from-neutral-700 to-black px-5 py-3 grow first:rounded-l-xl last:rounded-r-xl',
                            {
                                'to-neutral-600': isHighlighted,
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
