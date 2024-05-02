import localFont from "next/font/local";

const bodoni = localFont({
    src: "./local/bodoni/bodoni-seventytwo-itc-book.ttf",
    variable: "--font-bodoni",
});

const gordita = localFont({
    src: [
        {
            path: "./local/gordita/Gordita-Regular.otf",
            weight: "400",
        },
        {
            path: "./local/gordita/Gordita-Medium.otf",
            weight: "500",
        },
        {
            path: "./local/gordita/Gordita-Bold.otf",
            weight: "700",
        },
    ],
    variable: "--font-gordita",
});

const inter = localFont({
    src: [
        {
            path: "./local/inter/Inter-Black.ttf",
        }
    ],
    variable: "--font-inter"
})

export { bodoni, gordita, inter};
