import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
        {/* Navbar */}
        <header className="w-full border-b bg-transparent">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
            {/* Logo */}
            <div>
              <img
                src="/logo-identitas.png"
                alt="Logo"
                className="h-12 w-12 object-contain rounded-full border-2 border-gray-300"
              />
            </div>
            {/* Menu */}
            <div className="flex gap-8">
              <Link href="/home" className="font-semibold hover:text-pink-600 text-gray-700 text-lg">HOME</Link>
              <Link href="/about" className="font-semibold hover:text-pink-600 text-gray-700 text-lg">ABOUT</Link>
              <Link href="/certificate" className="font-semibold hover:text-pink-600 text-gray-700 text-lg">CERTIFICATE</Link>
              <Link href="/contact" className="font-semibold hover:text-pink-600 text-gray-700 text-lg">CONTACT</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}