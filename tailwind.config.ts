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
                inter: ["var(--font-inter)"],
            },
            backgroundImage: {
                shop_banner: "url('../images/shop-images/shop-banner.png')",
            },
            keyframes: {
                fadeOut: {
                    'from': { opacity: '1' },
                    'to': { opacity: '0' }
                },
            },
            animation: {
                fadeOut: 'fadeOut 1s ease-out forwards'
            }
        },
    },
    plugins: [],
};
export default config;
