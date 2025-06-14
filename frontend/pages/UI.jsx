import { Header, Footer, Navigation } from '../utils/Components';
import ThemePage from './ThemePage';
import ModulesPage from './ModulesPage';
import DisplayPage from './DisplayPage';
import AppliancePage from './AppliancePage';
import TopPage from './TopPage';
import GlassPage from './GlassPage';
import CartsPage from './CartsPage';
import SingleCartPage from './SingleCartPage';
import NamePage from './NamePage';
import { Switch, Route } from 'wouter';

export default function UI() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="h-full flex flex-col justify-between px-2 pt-6 pb-1">
                <Switch>
                    <Route path="/" component={Landing} />
                    <Route path="/make" nest>
                        <Route path="/theme" component={ThemePage} />
                        <Route path="/modules" component={ModulesPage} />
                        <Route path="/display" component={DisplayPage} />
                        <Route path="/top" component={TopPage} />
                        <Route path="/appliances" component={AppliancePage} />
                        <Route path="/glass" component={GlassPage} />
                        <Route path="/submit" component={NamePage} />
                    </Route>

                    <Route path="/view" nest>
                        <Route path="/" component={CartsPage} />
                        <Route path="/:id" component={SingleCartPage} />
                    </Route>

                    <Route>404, not found</Route>
                </Switch>
            </div>
        </div>
    );
}

function Landing() {
    return (
        <>
            <Header text={'Cocktail Thela'} type={'landing'} />
            <Footer>
                <Navigation thick texts={['View Carts', 'Make Cart']} actions={['/view', '/make/theme']} />
            </Footer>
        </>
    );
}
