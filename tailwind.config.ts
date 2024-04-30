import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bodoni: ["var(--font-bodoni)"],
                gordita: ["var(--font-gordita)"],
            },
        },
    },
    plugins: [],
};
export default config;
