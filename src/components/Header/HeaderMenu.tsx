import Link from "next/link";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projetos', href: '/projects' },
    { name: 'Habilidades', href: '/skills' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
  ];

export function MobileMenu({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void}) {
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