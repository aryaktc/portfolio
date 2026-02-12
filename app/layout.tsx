import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    title: "Aryak Moitra | AI-First Software Engineer",
    description: "Building scalable systems at the intersection of React, automation & Generative AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0D0D0D] text-white antialiased`}>
                <div className="grain-overlay" />
                {children}
            </body>
        </html>
    );
}
