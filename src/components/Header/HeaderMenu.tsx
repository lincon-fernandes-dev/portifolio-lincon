import Link from "next/link";
import { FC } from "react";
import { HeaderMobileMenuProps } from "./types";

export const MobileMenu: FC<HeaderMobileMenuProps> = 
({
  isMenuOpen,
  setIsMenuOpen,
  navLinks
}) =>  {
  return (
    <div
      className={`md:hidden ${
        isMenuOpen ? "block" : "hidden"
      } absolute w-full bg-gray-800 shadow-lg transition-all duration-300 ease-in-out`}
    >
      <nav className="flex flex-col p-4 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-300 text-lg py-2 px-3 hover:bg-gray-700 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}