import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel_Decorative, Crimson_Pro, Amatic_SC } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";

import MainHeader from "@/components/main-header/header";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amaticSC",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-crimsonPro",
});

export const metadata: Metadata = {
  title: "Pracownia Opowieści",
  description: "Bajki dla dzieci na każda okazje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${cinzel.className} antialiased flex flex-col min-h-screen`}
      >
        <MainHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
