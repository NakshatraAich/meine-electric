import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Meine Electric | Iron Air Battery Solutions",
  description: "Discover Meine Electric's iron-air battery solutions - a new era of multi-day, low-cost energy storage that helps utilities, industries, and communities transition to clean, reliable renewable power.",
  keywords: ["Meine Electric", "Iron-Air Battery", "Longterm Energy Storage"],
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
