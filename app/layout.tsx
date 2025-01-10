
import type { Metadata } from "next";
import Head from "next/head";
import { Header } from "./ui/layout/Header";
import { firaCode } from "./ui/fonts";
import "./globals.css";
import { Footer } from "./ui/layout/Footer";



export const metadata: Metadata = {
  title: "Eduardo Portfolio",
  description: "Powered by Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description ?? ''} />
      </Head>
      <body className={`${firaCode.className} bg-background antialiased overflow-x-hidden sm:items-center sm:flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
