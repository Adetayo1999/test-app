import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { gordita, bodoni } from "@/assets/fonts";
import { Header } from "@/common/components/skeleton/header";
import { Footer } from "@/common/components/skeleton/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "AI-powered interior design platform",
    description: "Transform Your Space with AI-Powered Interior Design",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    openGraph: {
        title: "AI-powered interior design platform",
        description: "Transform Your Space with AI-Powered Interior Design",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI-powered interior design platform",
        description: "Transform Your Space with AI-Powered Interior Design",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${gordita.variable} ${bodoni.variable} font-gordita`}>
                <Toaster position='top-right' />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
