import { useStore, Page } from '../store';
import { useState } from 'react';

export default function UI() {
    const page = useStore((state) => state.page);
    const setPage = useStore((state) => state.setPage);

    function getPageUI() {
        switch (page) {
            case Page.Landing:
                return (
                    <>
                        <h1 className="text-[4.0rem] leading-none font-heading text-black">Cocktail Thela</h1>
                        <ButtonSection>
                            <div className="w-full flex gap-px">
                                <button className="bg-black grow py-4 rounded-l-3xl active:bg-neutral-700">
                                    View Carts
                                </button>
                                <button
                                    onClick={() => {
                                        setPage(Page.Theme);
                                    }}
                                    className="bg-black grow py-4 rounded-r-3xl active:bg-neutral-700">
                                    Make Cart
                                </button>
                            </div>
                        </ButtonSection>
                    </>
                );
            case Page.Theme:
                return (
                    <>
                        <Header>Choose your theme</Header>
                        <ButtonSection>
                            <div className="flex gap-px mb-1 ">
                                <button className="bg-black px-6 py-4 grow rounded-l-2xl ">Apothecary</button>
                                <button className="bg-black  px-6 py-4 grow ">Summer</button>
                                <button className="bg-black px-6 py-4 grow rounded-r-2xl ">Concert</button>
                            </div>
                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Landing);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Modules);
                                }}
                            />
                        </ButtonSection>
                    </>
                );
            case Page.Modules:
                return (
                    <>
                        <Header>Choose your modules</Header>
                        <ButtonSection>
                            <div className="grid grid-cols-2 gap-px mb-1">
                                <CounterButton text="Whiskey" />
                                <CounterButton text="Rum" />
                                <CounterButton text="Gin" />
                                <CounterButton text="Tequila" />
                                <CounterButton text="Vodka" className="col-span-2 w-1/2 justify-self-center" />
                            </div>
                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Theme);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Display);
                                }}
                            />
                        </ButtonSection>
                    </>
                );

            case Page.Display:
                return (
                    <>
                        <Header>Choose your Display</Header>
                        <ButtonSection>
                            <div className="flex gap-px mb-1 ">
                                <button className="bg-black px-6 py-4 grow rounded-l-2xl ">Tall</button>
                                <button className="bg-black  px-6 py-4 grow ">Medium</button>
                                <button className="bg-black px-6 py-4 grow rounded-r-2xl ">Short</button>
                            </div>
                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Modules);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Top);
                                }}
                            />
                        </ButtonSection>
                    </>
                );
            case Page.Top:
                return (
                    <>
                        <Header>Choose your Top</Header>
                        <ButtonSection>
                            <div className="flex gap-px mb-1 ">
                                <button className="bg-black px-6 py-4 grow rounded-l-2xl ">Wooden</button>
                                <button className="bg-black  px-6 py-4 grow ">Canopy</button>
                                <button className="bg-black px-6 py-4 grow rounded-r-2xl ">Umbrella</button>
                            </div>

                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Display);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Appliances);
                                }}
                            />
                        </ButtonSection>
                    </>
                );
            case Page.Appliances:
                return (
                    <>
                        <Header>Choose Appliances</Header>
                        <ButtonSection>
                            <div className="flex gap-px mb-1 ">
                                <button className="bg-black px-2 py-4 grow rounded-l-2xl ">Dishwasher</button>
                                <button className="bg-black  px-2 py-4 grow ">Ice Machine</button>
                                <button className="bg-black px-2 py-4 grow rounded-r-2xl ">Solar Panel</button>
                            </div>
                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Top);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Glass);
                                }}
                            />
                        </ButtonSection>
                    </>
                );
            case Page.Glass:
                return (
                    <>
                        <Header>Choose your Glassware</Header>
                        <ButtonSection>
                            <div className="flex gap-px mb-1 ">
                                <button className="bg-black px-6 py-4 grow rounded-l-2xl ">Rocks</button>
                                <button className="bg-black  px-6 py-4 grow ">Highball</button>
                                <button className="bg-black px-6 py-4 grow rounded-r-2xl ">Martini</button>
                            </div>
                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Appliances);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Name);
                                }}
                            />
                        </ButtonSection>
                    </>
                );
            case Page.Name:
                return (
                    <>
                        <Header>Add your name</Header>
                        <ButtonSection>
                            <div className="w-full mb-1">
                                <input className="w-full rounded-2xl bg-black text-2xl p-4" type="text"></input>
                            </div>
                            <NavigationSection
                                onClickBack={() => {
                                    setPage(Page.Top);
                                }}
                                onClickNext={() => {
                                    setPage(Page.Name);
                                }}
                                submit
                            />
                        </ButtonSection>
                    </>
                );
        }
    }

    return (
        <div className="absolute bottom-0 top-0 left-0 right-0 pointer-events-none">
            <div className="h-full flex flex-col justify-between px-2 pt-6 pb-1">{getPageUI()}</div>
        </div>
    );
}

function Header({ children, className }) {
    return <h2 className={`text-black text-center font-body ${className} text-xl`}>{children}</h2>;
}

function ButtonSection({ children }) {
    return <div className="text-text text-xl font-body pointer-events-auto touch-none">{children}</div>;
}

function NavigationSection({ onClickBack, onClickNext, submit }) {
    return (
        <div className="flex gap-px">
            <Button onClick={onClickBack} className="basis-1/2 rounded-l-3xl">
                Back
            </Button>
            <Button onClick={onClickNext} className="basis-1/2 rounded-r-3xl">
                {submit ? 'Submit' : 'Next'}
            </Button>
        </div>
    );
}

function Button({ onClick, children, className }) {
    return (
        <button onClick={onClick} className={`bg-black py-2 active:bg-neutral-700 ${className}`}>
            {children}
        </button>
    );
}

function CounterButton({ text, className }) {
    const [count, setCount] = useState(0);

    return (
        <div
            className={`flex items-center justify-between pl-4 py-0 text-lg bg-black text-text basis-1/2 rounded-3xl ${className}`}>
            <div>{text}</div>
            <div className="flex items-center gap-1 text-xl">
                <button onClick={() => setCount(count - 1)} className="px-3 py-1">
                    −
                </button>
                <span className="w-2 text-center">{count}</span>
                <button onClick={() => setCount(count + 1)} className="px-3 py-1">
                    +
                </button>
            </div>
        </div>
    );
}
