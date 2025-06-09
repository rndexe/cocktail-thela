/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#BBBBBB',
                text: '#FFFFFF',
                black: '#262626',
            },
            fontFamily: {
                heading: 'Viaoda Libre',
                body: 'Simonetta',
            },
        },
    },
    plugins: [],
};
