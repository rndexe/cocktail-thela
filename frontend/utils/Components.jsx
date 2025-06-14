import { clsx } from 'clsx';
import { Link } from 'wouter';
import { useState, useRef, useEffect } from 'react';

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

export function Navigation({ texts = ['Back', 'Next'], actions, thick, disabled }) {
    return (
        <div className="flex gap-px border border-neutral-300 rounded-2xl">
            <NavButton action={actions[0]} thick={thick}>
                {texts[0]}
            </NavButton>
            <NavButton action={actions[1]} thick={thick} disabled={disabled}>
                {texts[1]}
            </NavButton>
        </div>
    );
}

export function NavButton({ children, thick, action, disabled }) {
    const className = clsx(
        'text-center basis-1/2 first:rounded-l-2xl last:rounded-r-2xl bg-gradient-to-b from-neutral-700 to-black active:to-neutral-700 disabled:text-neutral-700',
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
            <button className={className} onClick={action} disabled={disabled}>
                {children}
            </button>
        );
    }
}

export function Options({ items, storeValue, onChange, className }) {
    return (
        <div className="flex gap-px mb-1 rounded-xl border border-neutral-300">
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

export default function ShareModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isModalOpen && modalRef.current) {
            modalRef.current.focus();
        }
    }, [isModalOpen]);

    const handleSubmit = async () => {
        setIsModalOpen(true);
        setIsSubmitting(true);
        setIsSuccess(false);

        // Simulate async submit
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsSuccess(true);
        } catch {
            setIsSuccess(false); // In a real case, handle errors here
        } finally {
            setIsSubmitting(false);
        }
    };

    const goHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="p-4">
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
                Submit
            </button>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true">
                    <div
                        ref={modalRef}
                        tabIndex={-1}
                        className="bg-white rounded-lg p-6 w-80 shadow-lg text-center outline-none">
                        {isSubmitting ? (
                            <>
                                <div className="mb-4">
                                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                                </div>
                                <p className="text-gray-700">Sharing...</p>
                            </>
                        ) : isSuccess ? (
                            <>
                                <p className="text-green-600 text-lg mb-4">Shared successfully!</p>
                                <button onClick={goHome} className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
                                    Go to Home
                                </button>
                            </>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
}
