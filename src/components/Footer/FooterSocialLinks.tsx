import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslations } from "next-intl";

const socialLinks = [
  { 
    href: "https://www.linkedin.com/in/lincon-fernandes-bb497613b/", 
    Icon: FaLinkedinIn, 
    label: "LinkedIn profile" 
  },
  { 
    href: "https://github.com/lincon-fernandes-dev", 
    Icon: FaGithub, 
    label: "GitHub profile" 
  },
  { 
    href: "https://www.instagram.com/armitage_dude/", 
    Icon: FaInstagram, 
    label: "Instagram profile" 
  },
];

export function FooterSocialLinks() {
  const t = useTranslations();

  return (
    <div className="w-full md:w-1/4">
      <h2 className="text-xl font-semibold text-white mb-4">
        {t("Connect")}
      </h2>
      <nav className="flex space-x-4" aria-label={t("ProfessionalMedia")}>
        {socialLinks.map(({ href, Icon, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Icon size={24} />
          </Link>
        ))}
      </nav>
    </div>
  );
}