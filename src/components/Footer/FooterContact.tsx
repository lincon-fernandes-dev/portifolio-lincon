import Link from "next/link";
import { useTranslations } from "next-intl";

export function FooterContact() {
  const t = useTranslations();
  const email = "lincon.fernandes.dev@gmail.com";

  return (
    <div className="w-full md:w-1/3">
      <h2 className="text-xl font-semibold text-white mb-4">
        {t("LetsTalk")}
      </h2>
      <p className="text-sm mb-4">
        {t("AlwaysWilling")}
      </p>

      <span className="block text-teal-400 font-medium mb-4">
        {email}
      </span>

      <Link
        href="/contact"
        className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded transition-colors text-sm"
      >
        {t("SendEmail")}
      </Link>
    </div>
  );
}