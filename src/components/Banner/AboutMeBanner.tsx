"use client"
import Image from "next/image";
import Link from "next/link";
import Profile from '../../../public/Profile.png' 
import { useTranslations } from "next-intl";

export default function BannerAboutMeComponent() {
    const t = useTranslations();
  return (
    <section id="about-banner" className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div 
            className="max-w-6xl mx-auto p-8 sm:p-12 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl 
            flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12"
        >
            <div className=" relative w-36 h-36 sm:w-48 sm:h-48 flex-shrink-0">
                <Image
                    className=" rounded-full border-4 border-teal-500 shadow-xl object-cover"
                    fill
                    priority
                    src={Profile.src}
                    alt="Foto de perfil de Lincon Fernandes"
                />
            </div>
            <div className="w-full lg:w-3/4 flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/3 flex flex-col justify-center">
                    <p className="font-extrabold text-4xl text-white mb-2 tracking-wide">
                        
                        {t("AboutMe")}
                    </p>
                    <p className="text-xl text-teal-400 font-semibold">
                        {t('DevFullStack')}
                    </p>
                </div>
                <div className="w-full sm:w-2/3">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {t('Description')}
                    </p>
                    <Link
                        href="/about" 
                        className="mt-6 inline-block text-lg font-bold text-teal-400 hover:text-teal-300 transition-colors border-b-2 border-teal-400"
                    >
                        {t('KnowMyCareer')} →
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}