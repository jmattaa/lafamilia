/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",

    ],
    theme: {
        extend: {
            height: {
                inherit: "inherit",
            },
            colors: {
                "palette-1": "#d45447",
                "palette-2": "#b83002",
                "palette-3": "#98180b",
                "palette-4": "#730b00",
                "palette-5": "#490700",
            },
        },
    },
    plugins: [],
}

