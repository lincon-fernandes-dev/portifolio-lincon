import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiTypescript, SiDotnet, SiReact } from 'react-icons/si';
import { FaReact, FaGitAlt, FaDocker, FaAws, FaServer } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { DiScrum } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { useTranslations } from 'next-intl';

// Definição do Tipo para uma Habilidade
interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

// Dados das habilidades organizados por categoria
const skillsData: Record<string, Skill[]> = {
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
    { name: 'REST APIs', icon: TbApi, color: 'text-green-500' },
    { name: 'SQL Server', icon: FaServer, color: 'text-red-500' },
  ],
  devopsTools: [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'Azure DevOps', icon: SiDotnet, color: 'text-cyan-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  ],
  conceitosPadroes: [
    { name: 'Clean Architecture', icon: FaServer, color: 'text-emerald-400' },
    { name: 'SOLID', icon: SiDotnet, color: 'text-yellow-500' },
    { name: 'Dependency Injection', icon: TbApi, color: 'text-purple-400' },
    { name: 'MVC / MVVM', icon: FaReact, color: 'text-rose-400' },
    { name: 'CQRS', icon: FaServer, color: 'text-blue-300' },
    { name: 'Testes Unitários', icon: SiTypescript, color: 'text-green-400' },
    { name: 'Scrum/Agile', icon: DiScrum, color: 'text-orange-400' },
  ],
  ferramentasDesign: [
    { name: 'Figma', icon: CgFigma, color: 'text-purple-500' },
    { name: 'Storybook', icon: SiReact, color: 'text-pink-500' },
  ]
};

// Mapeamento das chaves para as traduções
const categoryTranslations: Record<string, string> = {
  frontend: 'FrontEnd',
  backend: 'BackEnd',
  devopsTools: 'DevOpsTools',
  conceitosPadroes: 'ConceptsPatterns',
  ferramentasDesign: 'DesignTools'
};

// Componente de Habilidade Individual
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-lg border border-gray-700">
    <skill.icon size={40} className={`${skill.color} mb-2`} />
    <span className="text-sm font-medium text-gray-200 text-center">{skill.name}</span>
  </div>
);

// Componente de Categoria de Habilidades
const SkillCategory: React.FC<{ 
  title: string; 
  skills: Skill[]; 
  columns?: string;
}> = ({ title, skills, columns = "grid-cols-3 sm:grid-cols-4 lg:grid-cols-7" }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-teal-400 border-b border-gray-700 pb-2 mb-6">
      {title}
    </h3>
    <div className={`grid ${columns} gap-4`}>
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
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
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('MySkillsStack')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('SkillsDescription')}
          </p>
        </div>

        {/* Grid de Habilidades */}
        <div className="space-y-12">
          {/* Frontend */}
          <SkillCategory
            title={t('FrontEnd')}
            skills={skillsData.frontend}
          />

          {/* Backend */}
          <SkillCategory
            title={t('BackEnd')}
            skills={skillsData.backend}
          />

          {/* DevOps & Tools */}
          <SkillCategory
            title={t('DevOpsDatabase')}
            skills={skillsData.devopsTools}
            columns="grid-cols-3 sm:grid-cols-3 lg:grid-cols-5"
          />

          {/* Conceitos & Padrões */}
          <SkillCategory
            title={t('ConceptsPatterns')}
            skills={skillsData.conceitosPadroes}
            columns="grid-cols-3 sm:grid-cols-4 lg:grid-cols-7"
          />

          {/* Ferramentas & Design */}
          <SkillCategory
            title={t('DesignTools')}
            skills={skillsData.ferramentasDesign}
            columns="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
          />
        </div>

        {/* Rodapé/Nota Adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            {t('AlwaysLearning')} 🚀
          </p>
        </div>
      </div>
    </section>
  );
}