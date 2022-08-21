/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode : 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#081A51",
                "light-white": "rgba(255,255,255,0.17)",
                "bg-dark": "rgb(32,32,32)",
            },
        },
    },
    plugins: [],
}