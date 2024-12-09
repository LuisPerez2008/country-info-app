/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['"Nunito Sans"', "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                darkBlue: "hsl(209, 23%, 22%)", // Dark Mode Elements
                veryDarkBlueBg: "hsl(207, 26%, 17%)", // Dark Mode Background
                veryDarkBlueText: "hsl(200, 15%, 8%)", // Light Mode Text
                darkGray: "hsl(0, 0%, 52%)", // Light Mode Input
                veryLightGray: "hsl(0, 0%, 98%)", // Light Mode Background
                white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
            },
            screens: {
                tablet: "460px",
                // => @media (min-width: 640px) { ... }

                laptop: "1024px",
                // => @media (min-width: 1024px) { ... }

                desktop: "1280px",
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
};