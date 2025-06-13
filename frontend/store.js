import { create } from 'zustand';

export const Page = {
    Landing: 'Landing',
    Theme: 'Theme',
    Modules: 'Modules',
    Display: 'Display',
    Top: 'Top',
    Appliances: 'Appliances',
    Glass: 'Glass',
    Name: 'Name',
    ViewCarts: 'ViewCarts',
    ViewSingleCart: 'ViewSingleCart',
};

export const glass_names = ['rocks', 'highball', 'martini'];
export const appliances_names = ['dishwasher', 'ice-machine', 'solar-panel'];

const initialState = {
    theme: null,
    modules: [null, null, null, null, null],
    display: null,
    top: null,
    appliances: [false, false, false],
    glasses: [false, false, false],
    name: null,
};
export const useCartStore = create((set, get) => ({
    ...initialState,
    setTheme: (newTheme) => set({ theme: newTheme }),
    getTotal: () => get().modules.filter(Boolean).length,
    setModules: (module, add) =>
        set((state) => {
            const index = add
                ? state.modules.findIndex((el) => el === null)
                : state.modules.findLastIndex((el) => el === module);
            const updatedModules = [...state.modules];
            updatedModules[index] = add ? module : null;
            return {
                modules: updatedModules,
            };
        }),
    setDisplay: (display) => set({ display: display }),
    setTop: (top) => set({ top: top }),
    setName: (name) => set({ name: name }),
    setAppliances: (appliance) =>
        set((state) => {
            const newAppliances = [...state.appliances];

            switch (appliance) {
                case 'dishwasher':
                    newAppliances[0] = !newAppliances[0];
                    break;
                case 'ice-machine':
                    newAppliances[1] = !newAppliances[1];
                    break;
                case 'solar-panel':
                    newAppliances[2] = !newAppliances[2];
                    break;
            }

            return {
                appliances: newAppliances,
            };
        }),
    setGlasses: (glass) =>
        set((state) => {
            const newGlasses = [...state.glasses];

            switch (glass) {
                case 'rocks':
                    newGlasses[0] = !newGlasses[0];
                    break;
                case 'highball':
                    newGlasses[1] = !newGlasses[1];
                    break;
                case 'martini':
                    newGlasses[2] = !newGlasses[2];
                    break;
            }

            return {
                glasses: newGlasses,
            };
        }),
    reset: () => set(initialState),
}));
