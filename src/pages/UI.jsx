import { usePageStore, Page, Theme } from '../store';
import { Header, ButtonSection, NavigationSection } from './Components';
import ThemePage from './ThemePage';
import ModulesPage from './ModulesPage';
import DisplayPage from './DisplayPage';
import AppliancePage from './AppliancePage';
import TopPage from './TopPage';
import GlassPage from './GlassPage';
import { StoreLogger1, StoreLogger2 } from '../utils/StoreLogger';

export default function UI() {
    return (
        <div className="absolute bottom-0 top-0 left-0 right-0 pointer-events-none">
            <div className="h-full flex flex-col justify-between px-2 pt-6 pb-1">
                <Header />
                <ButtonSection>
                    <PageUI />
                    <NavigationSection />
                </ButtonSection>
            </div>
            <StoreLogger1 />
            <StoreLogger2 />
        </div>
    );
}

function PageUI() {
    const page = usePageStore((state) => state.page);

    switch (page) {
        case Page.Landing:
            return null;
        case Page.Theme:
            return <ThemePage />;
        case Page.Modules:
            return <ModulesPage />;
        case Page.Display:
            return <DisplayPage />;
        case Page.Top:
            return <TopPage />;
        case Page.Appliances:
            return <AppliancePage />;
        case Page.Glass:
            return <GlassPage/>
        case Page.Name:
            return (
                <div className="w-full mb-1">
                    <input className="w-full rounded-lg bg-black text-2xl p-4" type="text"></input>
                </div>
            );
    }
}
