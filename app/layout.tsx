
import type { Metadata } from "next";
import { Header } from "./ui/layout/Header";
import { firaCode } from "./ui/fonts";
import "./globals.css";



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
      <body className={`${firaCode.className} antialiased overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
