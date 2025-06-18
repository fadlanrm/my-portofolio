"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const menu = [
    { href: "/home", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/certificate", label: "CERTIFICATE" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
      <div>
        <img
          src="/logo-identitas.png"
          alt="Logo"
          className="h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-full border border-gray-300 bg-white"
        />
      </div>
      <div className="flex ml-auto gap-4 sm:gap-8 md:gap-12">
  {menu.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`font-bold text-sm md:text-lg uppercase tracking-wide drop-shadow-md ${
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