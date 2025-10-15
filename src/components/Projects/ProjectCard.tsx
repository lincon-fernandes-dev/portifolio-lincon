import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCardComponent({
  name,
  description,
  slug,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const t = useTranslations();
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-teal-500/30">
      <div className="w-full h-48 relative bg-gray-700">
        <Image
          fill
          src={imageUrl}
          alt={`Imagem do projeto ${name}`}
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col h-auto">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="flex justify-between items-center pt-2 border-t border-gray-700">
          <Link
            href={`/projects/${slug}`}
            className="text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors border-b border-teal-400"
          >
            {t("SeeDetails")}
          </Link>

          <div className="flex space-x-3">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código GitHub de ${name}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link ao vivo de ${name}`}
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}