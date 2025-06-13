import { usePageStore, Page } from '../store';
import { Header, Footer, Navigation } from './Components';
import ThemePage from './ThemePage';
import ModulesPage from './ModulesPage';
import DisplayPage from './DisplayPage';
import AppliancePage from './AppliancePage';
import TopPage from './TopPage';
import GlassPage from './GlassPage';
import CartsPage from './CartsPage';
import SingleCartPage from './SingleCartPage';
import { NamePage } from './NamePage';

export default function UI() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="h-full flex flex-col justify-between px-2 pt-6 pb-1">
                <PageUI />
            </div>
        </div>
    );
}

function PageUI() {
    const page = usePageStore((state) => state.page);

    switch (page) {
        case Page.Landing:
            return (
                <>
                    <Header text={'Cocktail Thela'} type={'landing'} />
                    <Footer>
                        <Navigation />
                    </Footer>
                </>
            );
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
        case Page.ViewCarts:
            return <CartsPage />;
        case Page.ViewSingleCart:
            return <SingleCartPage />;
    }
}
