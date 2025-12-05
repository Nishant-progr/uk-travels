import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UK Travels - Explore the World",
    description: "Premium travel agency for tours to UK, France, India, USA and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
