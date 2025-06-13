import { usePageStore, Page } from '../store';
import { PageInfo } from './pageinfo';
import createThela from '../utils/createThela';
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

export function Navigation() {
    const page = usePageStore((state) => state.page);
    const setPage = usePageStore((state) => state.setPage);

    return (
        <div className="flex gap-px">
            <NavButton
                onClick={() => {
                    setPage(PageInfo[page].button1);
                }}>
                {PageInfo[page].button1text}
            </NavButton>
            <NavButton
                onClick={() => {
                    page == Page.Name ? createThela() : setPage(PageInfo[page].button2);
                }}>
                {PageInfo[page].button2text}
            </NavButton>
        </div>
    );
}

export function NavButton({ children, ...props }) {
    return (
        <button
            className="bg-black py-2 active:bg-highlight basis-1/2 first:rounded-l-3xl last:rounded-r-3xl"
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
