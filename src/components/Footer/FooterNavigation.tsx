import Link from "next/link";
import { useTranslations } from "next-intl";

export function FooterNavigation() {
  const t = useTranslations();
  
  const navItems = [
    { href: "/", labelKey: "Home" },
    { href: "/projects", labelKey: "Projects" },
    { href: "/skills", labelKey: "Skills" },
    { href: "/about", labelKey: "About" },
  ];

  return (
    <div className="w-full md:w-1/3 border-b md:border-r border-gray-700 py-2">
      <h1 className="text-3xl font-extrabold text-white tracking-wide mb-4">
        Lincon Fernandes
      </h1>
      <nav className="flex flex-col gap-2 text-sm" aria-label={t("PrimaryNavigation")}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-teal-400 transition-colors"
          >
            {t(item.labelKey)}
          </Link>
        ))}
      </nav>
    </div>
  );
}