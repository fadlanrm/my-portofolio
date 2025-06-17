import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Jems Kemerun",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafd] antialiased">
        <header className="w-full border-b bg-transparent">
          <Navbar />
        </header>
        {children}
        <footer className="w-full border-t border-black bg-white py-4 mt-8">
          <div className="max-w-7xl mx-auto px-8 text-left text-black font-serif text-lg">
            @2025 - Made by fadlanrm_
          </div>
        </footer>
      </body>
    </html>
  );
}