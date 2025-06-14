/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './frontend/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#9ca3af',
                text: '#d1d5db',
                black: '#262626',
                highlight: '#404040',
            },
            fontFamily: {
                heading: 'Viaoda Libre',
                body: 'Vollkorn',
                mono: 'Roboto mono',
            },
        },
    },
    plugins: [],
};
