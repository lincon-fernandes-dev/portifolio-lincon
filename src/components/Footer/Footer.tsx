import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-8">
          <div className="w-full md:w-1/3 border-b md:border-r border-gray-700 py-2">
            <h1 className="text-3xl font-extrabold text-white tracking-wide mb-4">
              Lincon Fernandes
            </h1>
            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href={"/"}
                className="hover:text-teal-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href={"/projects"}
                className="hover:text-teal-400 transition-colors"
              >
                Projetos
              </Link>
              <Link
                href={"/skills"}
                className="hover:text-teal-400 transition-colors"
              >
                Habilidades
              </Link>
              <Link
                href={"/about"}
                className="hover:text-teal-400 transition-colors"
              >
                Sobre
              </Link>
            </nav>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">
              Vamos Conversar!
            </h2>
            <p className="text-sm mb-4">
              Estou sempre aberto a discutir novos projetos e oportunidades.
              Sinta-se à vontade para entrar em contato:
            </p>

            <span className="block text-teal-400 font-medium mb-4">
              lincon.fernandes.dev@gmail.com
            </span>

            <a
              href="mailto:lincon.fernandes.dev@gmail.com"
              className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded transition-colors text-sm"
            >
              Mandar E-mail
            </a>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Conecte-se
            </h2>
            <nav className="flex space-x-4">
              <Link
                href={"https://www.linkedin.com/in/lincon-fernandes-bb497613b/"}
                target="_blank"
                aria-label="LinkedIn profile"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaLinkedinIn size={24} />
              </Link>

              <Link
                href={"https://github.com/lincon-fernandes-dev"}
                target="_blank"
                aria-label="GitHub profile"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaGithub size={24} />
              </Link>

              <Link
                href={"https://www.instagram.com/armitage_dude/"}
                target="_blank"
                aria-label="Instagram profile"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {currentYear} Lincon Pietrochinski Fernandes. Todos os
            direitos reservados.
          </p>
          <p className="mt-1">
            Feito com <span className="text-teal-400">Next.js</span> e{" "}
            <span className="text-teal-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}