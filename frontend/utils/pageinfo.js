import { Page } from '../store';

export const PageInfo = {
    Landing: {
        button1: Page.ViewCarts,
        button1text: 'View Carts',
        button2: Page.Theme,
        button2text: 'Make Cart',
    },
    Theme: {
        button1: Page.Landing,
        button1text: 'Back',
        button2: Page.Modules,
        button2text: 'Next',
    },
    Modules: {
        button1: Page.Theme,
        button1text: 'Back',
        button2: Page.Display,
        button2text: 'Next',
    },
    Display: {
        button1: Page.Modules,
        button1text: 'Back',
        button2: Page.Top,
        button2text: 'Next',
    },
    Top: {
        button1: Page.Display,
        button1text: 'Back',
        button2: Page.Appliances,
        button2text: 'Next',
    },
    Appliances: {
        button1: Page.Top,
        button1text: 'Back',
        button2: Page.Glass,
        button2text: 'Next',
    },
    Glass: {
        button1: Page.Appliances,
        button1text: 'Back',
        button2: Page.Name,
        button2text: 'Next',
    },
    Name: {
        button1: Page.Glass,
        button1text: 'Back',
        button2: Page.Landing,
        button2text: 'Submit',
    },
    ViewCarts: {
    }
};
