import { useTranslations } from "next-intl";
import { FooterNavigation } from "./FooterNavigation";
import { FooterContact } from "./FooterContact";
import { FooterSocialLinks } from "./FooterSocialLinks";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-8">
          <FooterNavigation />
          <FooterContact />
          <FooterSocialLinks />
        </div>

        <div className="pt-8 text-center text-xs text-gray-200">
          <p>
            &copy; {currentYear} Lincon Pietrochinski Fernandes. {t('AllRightsReserved')}
          </p>
          <p className="mt-1">
            {t('MadeWith')}
            <span className="text-teal-400"> Next.js </span>
            <span className="text-teal-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}