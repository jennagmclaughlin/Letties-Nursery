/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark_green: "#162826",
                purple: "#58384C",
                "purple-hover": "#301d29",
                white: "var(--white)",
                "white-hover": "#c7c3c3",
                "white-transparent": "rgba(239,234,234,0.75)",
            },
        },
    },
    plugins: [],
};
