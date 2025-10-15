export type HeaderMobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen(state: boolean): void;
  navLinks: navLink[];
}
export type navLink = {
  name: string;
  href: string;
}