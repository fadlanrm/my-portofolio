import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import DinoFooter from "./components/DinoFooter";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Jems Kemerun",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafd] antialiased">
        <header className="w-full border-b bg-transparent">
          <Navbar />
        </header>
        {children}
        <DinoFooter />
      </body>
    </html>
  );
}