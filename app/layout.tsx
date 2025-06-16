<<<<<<< HEAD
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Jems Kemerun",
};
=======
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";


function Navbar() {
  const pathname = usePathname();

  const menu = [
    { href: "/home", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/certificate", label: "CERTIFICATE" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
      <div>
        <img
          src="/logo-identitas.png"
          alt="Logo"
          className="h-14 w-14 object-contain rounded-full border border-gray-300 bg-white"
        />
      </div>
      <div className="flex gap-12">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-bold text-lg uppercase tracking-wide drop-shadow-md ${
              pathname === item.href
                ? "text-pink-600"
                : "text-black hover:text-pink-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
>>>>>>> 35b1c93 (feat: update tampilan landing page)

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
<<<<<<< HEAD
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
=======
      <body className="bg-white antialiased">
        <header className="w-full border-b border-black bg-white">
          <Navbar />
        </header>
        {children}
        <footer className="w-full border-t border-black bg-white py-4 mt-8">
          <div className="max-w-7xl mx-auto px-8 text-left text-black font-serif text-lg">
            @2025 - Made by fadlanrm_
          </div>
        </footer>
>>>>>>> 35b1c93 (feat: update tampilan landing page)
      </body>
    </html>
  );
}