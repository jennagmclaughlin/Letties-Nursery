/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-green": "#162826",
                purple: "#58384C",
                "purple-hover": "#301d29",
                white: "rgba(239, 234, 234, 1)",
                "white-hover": "#c7c3c3",
            },
        },
    },
    plugins: [],
};
