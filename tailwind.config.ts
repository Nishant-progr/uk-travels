import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9", // Sky blue
                secondary: "#0f172a", // Slate 900
                accent: "#f59e0b", // Amber 500
            },
        },
    },
    plugins: [],
};
export default config;
