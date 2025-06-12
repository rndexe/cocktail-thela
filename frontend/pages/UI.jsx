import { usePageStore, Page, Theme } from '../store';
import { Header, ButtonSection, NavigationSection } from './Components';
import ThemePage from './ThemePage';
import ModulesPage from './ModulesPage';
import DisplayPage from './DisplayPage';
import AppliancePage from './AppliancePage';
import TopPage from './TopPage';
import GlassPage from './GlassPage';
import CartsPage from './CartsPage';
import SingleCartPage from './SingleCartPage';
// import { StoreLogger1, StoreLogger2 } from '../utils/StoreLogger';
import { NamePage } from './NamePage';

export default function UI() {
    const page = usePageStore((state) => state.page);

    if (page != Page.ViewCarts && page != Page.ViewSingleCart) {
        return (
            <div className="absolute bottom-0 top-0 left-0 right-0 pointer-events-none">
                <div className="h-full flex flex-col justify-between px-2 pt-6 pb-1">
                    <Header />
                    <ButtonSection>
                        <PageUI />
                        <NavigationSection />
                    </ButtonSection>
                </div>
            </div>
        );
    } else if (page == Page.ViewCarts) {
        return <CartsPage />;
    } else if (page == Page.ViewSingleCart) {
        return <SingleCartPage />;
    }
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
            return <GlassPage />;
        case Page.Name:
            return <NamePage />;
        // case Page.ViewCarts:
        //     return <CartsPage />;
        // case Page.ViewSingleCart:
        //     return <SingleCartPagePage />;
    }
}
