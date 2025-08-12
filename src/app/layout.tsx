import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "A modern portfolio with a space theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        <div className="min-h-screen flex flex-col bg-fixed bg-cover bg-center" style={{
          backgroundImage: 'url(/earth.jpg)'
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}