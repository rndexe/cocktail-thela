import { create } from 'zustand';

// Enum-like object
export const Page = {
    Landing: 'Landing',
    Theme: 'Theme',
    Modules: 'Module',
    Display: 'Display',
    Top: 'Top',
    Appliances: 'App',
    Glass: 'Glass',
    Name: 'Name',
    ViewCarts: 'ViewCarts',
    ViewSingleCart: 'ViewSingleCart',
};

export const useStore = create((set) => ({
    page: Page.Landing,
    setPage: (newPage) => set({ page: newPage }),
}));
