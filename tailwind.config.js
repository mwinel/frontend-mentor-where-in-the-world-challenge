const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        typography: (theme) => ({}),
        extend: {
            fontFamily: {
                nunito: ['Nunito', ...fontFamily.sans],
            },
            display: ['group-hover'],
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
