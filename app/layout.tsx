import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Meine Electric | Iron Air Battery Solutions",
  description: "",
  keywords: ["Meine Electric", "Iron-Air Battery"],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-white">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
