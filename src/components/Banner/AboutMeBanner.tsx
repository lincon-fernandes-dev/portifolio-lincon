import Image from "next/image";
import Link from "next/link";
import Profile from '../../../public/Profile.png' 

export default function BannerAboutMeComponent() {
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
                        About Me
                    </p>
                    <p className="text-xl text-teal-400 font-semibold">
                        Desenvolvedor Full-Stack
                    </p>
                </div>
                <div className="w-full sm:w-2/3">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Sou um <strong>Desenvolvedor Full-Stack</strong> apaixonado por transformar ideias em soluções robustas. Minha especialidade é criar o ecossistema completo de aplicações, integrando o poder do <strong>C#/.NET</strong> no backend com a eficiência e a modernidade do <strong>Next.js</strong>. Minha missão é entregar código seguro, escalável e com foco na melhor experiência do usuário.
                    </p>
                    <Link
                        href="/about" 
                        className="mt-6 inline-block text-lg font-bold text-teal-400 hover:text-teal-300 transition-colors border-b-2 border-teal-400"
                    >
                        Conheça minha trajetória completa →
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}