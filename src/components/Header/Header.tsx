"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MobileMenu } from "./HeaderMenu";
import LocaleSwitcher from "../LocaleSwitcher";
import { useTranslations } from "next-intl";
import { navLink } from "./types";

const navLinks: navLink[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  return (
    <header role="header" className="sticky top-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors tracking-wider"
        >
          Lincon.dev
        </Link>
        <LocaleSwitcher />
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {t(link.name)}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-300 hover:text-teal-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} />
    </header>
  );
}
