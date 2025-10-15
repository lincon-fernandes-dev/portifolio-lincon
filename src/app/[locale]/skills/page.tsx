import { FaReact, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiDotnet } from 'react-icons/si';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { useTranslations } from 'next-intl';


// Definição do Tipo para uma Habilidade
interface Skill {
  name: string;
  icon: React.ElementType; // Tipo para aceitar o componente de ícone
  color: string; // Cor de destaque do ícone
}

// 1. DADOS DAS HABILIDADES
const skillsData = {
  frontend: [
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'React', icon: FaReact, color: 'text-sky-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-400' },
    { name: 'HTML5', icon: IoLogoHtml5, color: 'text-orange-600' },
    { name: 'CSS3', icon: IoLogoCss3, color: 'text-blue-600' },
  ],
  backend: [
    { name: 'C#', icon: SiDotnet, color: 'text-purple-600' },
    { name: '.NET Core', icon: SiDotnet, color: 'text-violet-500' },
    { name: 'ASP.NET Core', icon: SiDotnet, color: 'text-violet-400' },
    { name: 'REST APIs', icon: SiDotnet, color: 'text-gray-500' },
  ],
  devopsDatabase: [
    { name: 'SQL Server', icon: SiDotnet, color: 'text-red-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
    { name: 'AWS/Azure', icon: FaAws, color: 'text-yellow-600' },
    { name: 'Azure DevOps', icon: SiDotnet, color: 'text-cyan-500' },
  ],
};

// 2. Componente de Habilidade Individual (Card)
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-600">
    <skill.icon size={40} className={`${skill.color} mb-2`} />
    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
  </div>
);


export default function SkillsSection() {
  const t = useTranslations();
  return (
    <section
      id="skills"
      className="bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 sm:mb-16">
          {t('MySkillsStack')}
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-teal-400 border-b border-gray-700 pb-2 mb-6">
              {t('FrontEnd')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {skillsData.frontend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400 border-b border-gray-700 pb-2 mb-6">
              {t('BackEnd')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {skillsData.backend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400 border-b border-gray-700 pb-2 mb-6">
              {t('DevOpsDatabase')}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {skillsData.devopsDatabase.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}