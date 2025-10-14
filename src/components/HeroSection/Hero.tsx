import Link from "next/link";

export default function HeroSection() {
    return(
        <section 
            id="home" 
            className="flex flex-col justify-center items-center text-center pt-12 pb-12 min-h-screen"
        >
            <div className="max-w-4xl mx-auto px-4">
                
                <p className="text-xl text-teal-400 font-semibold mb-4">
                    Olá, eu sou Lincon Fernandes
                </p>
                
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
                    Engenheiro Full-Stack
                </h1>
                
                <h2 className="text-2xl sm:text-3xl text-gray-300 mb-10 font-light">
                    Construindo aplicações completas com C#/.NET, Windows Forms, Next.js e Angular de forma segura e escalável.
                </h2>
                
                <div className="space-x-4 flex flex-col items-center text-center justify-center gap-4 lg:flex-row">
                    <Link
                        href="/projects" 
                        className="bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-400 transition-colors  text-lg mx-0 text-center mr-0"
                    >
                        Ver Meu Trabalho
                    </Link>
                    
                    <Link
                        href="/contact" 
                        className="bg-transparent border-2 border-gray-500 text-gray-300 font-bold py-3 px-8 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-colors text-lg mr-0"
                    >
                        Entrar em Contato
                    </Link>
                </div>
            </div>
        </section>
    )
}