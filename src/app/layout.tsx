import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/app/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="dark:bg-neutral-800">
                <ThemeProvider attribute="class">
                    <Navbar></Navbar>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
