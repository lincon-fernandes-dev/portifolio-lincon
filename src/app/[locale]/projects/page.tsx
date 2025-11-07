import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {mockProjecstData} from "@/mock/mockProjects"
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProjectsGrid() {
  const t = useTranslations();
  return (
    <section id="projects" className="bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 sm:mb-16">
          {t('FeaturedProjects')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {mockProjecstData.map((project) => (
            <div
              key={project.slug}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-teal-500/30 transition-shadow duration-300 transform hover:scale-[1.02]"
            >
              <div className="h-48 bg-gray-700 w-full flex items-center justify-center text-gray-400 relative">
                 <Image src={project.thumbUrl} alt={project.name} fill />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.overview}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={project.name}
                      className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors border-b-2 border-teal-400 hover:border-teal-300"
                    >
                      {t('SeeDetails')} →
                    </Link>
                    <div className="flex space-x-4">
                        {project.githubUrl.length > 1 &&
                        <Link 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Código GitHub do projeto ${project.name}`}
                        className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-full transition-colors"
                        >
                            <FaGithub size={20} />
                        </Link>
                        }
                        
                        {project.liveUrl && (
                            <Link 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Link do site ao vivo do projeto ${project.name}`}
                                className="text-gray-400 hover:text-teal-400 hover:bg-gray-700 p-2 rounded-full transition-colors"
                            >
                                <FaExternalLinkAlt size={20} />
                            </Link>
                        )}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}