import { usePageStore, Page } from '../store';
import { PageInfo } from './pageinfo';
import createThela from '../utils/createThela';
import { clsx } from 'clsx';

export function Header() {
    const page = usePageStore((state) => state.page);
    const isLanding = page == Page.Landing;
    const className = clsx(
        'text-black text-center',
        isLanding && 'font-heading text-[4.0rem]',
        !isLanding && 'font-body text-xl',
    );
    return <h1 className={className}>{PageInfo[page].Heading}</h1>;
}

export function ButtonSection({ children }) {
    return <div className="text-text text-xl font-body pointer-events-auto touch-none">{children}</div>;
}

export function NavigationSection() {
    const page = usePageStore((state) => state.page);
    const setPage = usePageStore((state) => state.setPage);

    const isLanding = page == Page.Landing;
    const buttonClass = clsx('basis-1/2', isLanding && 'py-4', !isLanding && 'py-0');

    if (page != Page.ViewCarts && page != Page.ViewSingleCart) {
        return (
            <div className="flex gap-px">
                <Button
                    onClick={() => {
                        setPage(PageInfo[page].button1);
                    }}
                    className={clsx(buttonClass, 'rounded-l-3xl')}>
                    {PageInfo[page].button1text}
                </Button>
                <Button
                    onClick={() => {
                        page == Page.Name ? createThela() : setPage(PageInfo[page].button2);
                    }}
                    // className="basis-1/2 py-2 rounded-r-3xl">
                    className={clsx(buttonClass, 'rounded-r-3xl')}>
                    {PageInfo[page].button2text}
                </Button>
            </div>
        );
    } else {
        return null;
    }
}

export function Button({ children, className, ...props }) {
    return (
        <button className={`bg-black py-2 active:bg-highlight ${className}`} {...props}>
            {children}
        </button>
    );
}
