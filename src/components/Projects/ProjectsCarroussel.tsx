import ProjectCardComponent from "./ProjectCard";

const mockProjects = [
  {
    name: "Portifolio teste",
    description: "destes de descricao Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maiores culpa aliquam incidunt. Id dolores rerum magni fuga expedita? Quam similique et dicta non cumque officia reiciendis impedit quod rerum?.",
    slug: "teste-placeholder",
    imageUrl: "/images/project-ecommerce.jpg",
    githubUrl: "/",
    liveUrl: "/",
  },
];


export default function ProjectsCarrousselComponent() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="mb-12 text-4xl font-bold text-white text-center">
            Projetos em Destaque
        </h2>

        <div 
          className="flex w-full gap-8 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-800"
        >
          {mockProjects.map((project) => (
            <ProjectCardComponent
              key={project.slug}
              name={project.name}
              description={project.description}
              slug={project.slug}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}