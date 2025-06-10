import { Page } from '../store';

export const PageInfo = {
    Landing: {
        Heading: 'Cocktail Thela',
        button1: null,
        button1text: 'View Carts',
        button2: Page.Theme,
        button2text: 'Make Cart',
    },
    Theme: {
        Heading: 'Choose your theme',
        button1: Page.Landing,
        button1text: 'Back',
        button2: Page.Modules,
        button2text: 'Next',
    },
    Modules: {
        Heading: 'Choose your modules',
        button1: Page.Theme,
        button1text: 'Back',
        button2: Page.Display,
        button2text: 'Next',
    },
    Display: {
        Heading: 'Choose your Display',
        button1: Page.Modules,
        button1text: 'Back',
        button2: Page.Top,
        button2text: 'Next',
    },
    Top: {
        Heading: 'Choose your Top',
        button1: Page.Display,
        button1text: 'Back',
        button2: Page.Appliances,
        button2text: 'Next',
    },
    Appliances: {
        Heading: 'Choose your Appliances',
        button1: Page.Top,
        button1text: 'Back',
        button2: Page.Glass,
        button2text: 'Next',
    },
    Glass: {
        Heading: 'Choose your Glasses',
        button1: Page.Appliances,
        button1text: 'Back',
        button2: Page.Name,
        button2text: 'Next',
    },
    Name: {
        Heading: 'Add your Name',
        button1: Page.Glass,
        button1text: 'Back',
        button2: null,
        button2text: 'Submit',
    },
};
