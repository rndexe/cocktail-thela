/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './frontend/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#BBBBBB',
                text: '#FFFFFF',
                black: '#262626',
                highlight: '#404040',
            },
            fontFamily: {
                heading: 'Viaoda Libre',
                body: 'Simonetta',
            },
            borderRadius: {
                lg: '1rem',
            },
        },
    },
    plugins: [],
};
