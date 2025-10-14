import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import {mockProjecstData} from "@/mock/mockProjects";
import Image from "next/image";


export default function ProjectDetailPage({ params }: { params: { projectSlug: string } }) {
    const project = mockProjecstData.find(p => p.slug == params.projectSlug); 

    if (!project) {
        return <div className="text-white text-center py-20 bg-gray-900">Projeto não encontrado.</div>;
    }

    const TechChip: React.FC<{ tech: typeof project.technologies[0] }> = ({ tech }) => (
        <span className="flex items-center bg-gray-700 text-sm font-medium px-3 py-1 rounded-full text-gray-200 shadow-lg">
            <tech.icon className={`mr-2 ${tech.color}`} size={16} />
            {tech.name}
        </span>
    );

    return (
      <section className="bg-gray-900 text-gray-300 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="flex items-center text-teal-400 hover:text-teal-300 transition-colors mb-10 text-lg font-medium"
          >
            <FaArrowLeft className="mr-3" />
            Voltar para Projetos
          </Link>
          <h1 className="text-5xl font-extrabold text-white mb-3 leading-tight">
            {project.name}
          </h1>
          <p className="text-xl text-gray-400 mb-8">{project.tagline}</p>
          <div className="flex space-x-4 mb-12">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
            >
              <FaGithub className="mr-3" size={20} />
              Código no GitHub
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-teal-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-400 transition-colors shadow-lg"
              >
                <FaExternalLinkAlt className="mr-3" size={16} />
                Ver Site Ao Vivo
              </Link>
            )}
          </div>
          <div className="h-72 w-4/5 bg-gray-800 rounded-lg mb-12 flex items-center justify-center text-gray-500 text-lg overflow-hidden border border-gray-700 relative">
            <Image fill src={project.imageUrl} alt={project.name}/>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Stack Técnica
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <TechChip key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Visão Geral
            </h2>
            <p className="text-lg leading-relaxed">{project.overview}</p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Desafios e Soluções
            </h2>
            <ul className="list-disc list-inside space-y-3 pl-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-lg">
                  <span className="font-semibold text-teal-400">Desafio:</span>{" "}
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
              Resultados Chave
            </h2>
            <p className="text-lg leading-relaxed">{project.results}</p>
          </div>
        </div>
      </section>
    );
}

