/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import CartContextProvider from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movil Center",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#000" />
        <main className="comtainer mx-28 pt-4">
          <CartContextProvider>
            <Header />
            <PageTransition>{children}</PageTransition>
          </CartContextProvider>
        </main>
      </body>
    </html>
  );
}
