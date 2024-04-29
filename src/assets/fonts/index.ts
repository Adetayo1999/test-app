import localFont from "next/font/local";

const bodoni = localFont({
    src: "./local/bodoni/bodoni-seventytwo-itc-book.ttf",
});

const gorditaRegular = localFont({
    src: "./local/gordita/Gordita-Regular.otf",
});

const gorditaMedium = localFont({
    src: "./local/gordita/Gordita-Medium.otf",
});

const gorditaBold = localFont({
    src: "./local/gordita/Gordita-Bold.otf",
});

export { bodoni, gorditaBold, gorditaMedium, gorditaRegular };
