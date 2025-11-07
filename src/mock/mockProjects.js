import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiStorybook } from 'react-icons/si';
import { TbBrandCSharp, TbWorld } from "react-icons/tb";
import { PiTestTubeFill } from "react-icons/pi";

export const mockProjecstData = [
    {
        slug: "portifolio-lincon",
        name: "Portfólio Pessoal — Lincon Fernandes",
        tagline: "Portfólio moderno desenvolvido em Next.js e Tailwind CSS para showcase profissional com foco em performance e design responsivo.",
        thumbUrl: "/Portifolio-lincon.png",
        images: [
            "/Projects/portifolio-lincon/homePage.png",
            "/Projects/portifolio-lincon/sobre.png",
            "/Projects/portifolio-lincon/contact.png",
            "/Projects/portifolio-lincon/skills.png",
            "/Projects/portifolio-lincon/Insights-performance.PNG",
        ],
        githubUrl: "https://github.com/lincon-fernandes-dev/portifolio-lincon",
        liveUrl: "https://portifolio-lincon.vercel.app/",
        technologies: [
            { name: 'Next.js / TypeScript', icon: SiNextdotjs, color: 'text-white' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        ],
        overview: `
            Meu portfólio pessoal foi desenvolvido como uma vitrine profissional para demonstrar minhas habilidades técnicas,
            experiência e projetos. A aplicação foi construída com Next.js 15 aproveitando App Router, Server-Side Rendering
            e componentes modernos de React. O design utiliza Tailwind CSS para criar uma interface limpa, responsiva e
            visualmente atraente que se adapta perfeitamente a todos os dispositivos.
        `,
        challenges: [
            "Desenvolver uma arquitetura de componentes reutilizáveis e altamente modularizável",
            "Implementar animações suaves e transições sem comprometer a performance do site",
            "Otimizar SEO e meta tags para melhor visibilidade nos mecanismos de busca",
            "Garantir acessibilidade seguindo as diretrizes WCAG para inclusão digital",
            "Configurar deploy automatizado com Vercel para integração contínua"
        ],
        results: `
            O portfólio atingiu excelentes métricas de performance com scores acima de 90 no Lighthouse,
            carregamento em menos de 2 segundos e experiência totalmente responsiva. A estrutura modular
            permite fácil manutenção e expansão, enquanto o design clean destaca profissionalismo
            e atenção aos detalhes. O projeto serviu como demonstração prática das melhores práticas
            de desenvolvimento front-end moderno.
        `,
    },
    {
        slug: "oratiolab",
        name: "OratioLab - Plataforma Multilíngue",
        tagline: "Website institucional avançado com suporte a múltiplos idiomas, otimizado para SEO e performance excepcional.",
        thumbUrl: "/oratiolab.png",
        images: [
            "/Projects/oratiolab/home.png",
            "/Projects/oratiolab/about.png",
            "/Projects/oratiolab/instructions.png",
        ],
        githubUrl: "",
        liveUrl: "https://oratiolab.vercel.app/",
        technologies: [
            { name: 'Next.js / TypeScript', icon: SiNextdotjs, color: 'text-white' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'i18next', icon: TbWorld, color: 'text-blue-400' },
        ],
        overview: `
            OratioLab é um projeto conceitual de website institucional desenvolvido para demonstrar capacidades
            avançadas em desenvolvimento front-end. A plataforma incorpora internacionalização completa com i18next,
            arquitetura escalável baseada em componentes e otimizações avançadas de performance. O design system
            customizado garante consistência visual em todas as páginas e componentes.
        `,
        challenges: [
            "Implementar sistema de internacionalização com suporte a 3 idiomas e roteamento dinâmico",
            "Desenvolver componentes de UI reutilizáveis com variantes para diferentes cenários de uso",
            "Otimizar imagens e assets para garantir loading rápido mesmo em conexões limitadas",
            "Criar estrutura de navegação intuitiva com breadcrumbs e estados de loading",
            "Implementar meta tags dinâmicas para SEO multilíngue e compartilhamento social"
        ],
        results: `
            A plataforma alcançou performance excepcional com scores de 95+ no Core Web Vitals,
            carregamento otimizado para diferentes regiões e experiência fluida em todos os dispositivos.
            O sistema de internacionalização permite fácil expansão para novos mercados, enquanto
            a arquitetura componentizada facilita a manutenção e evolução do produto. O projeto
            demonstra domínio completo do ecossistema Next.js e boas práticas de desenvolvimento web moderno.
        `,
    },
    {
        slug: "clean-recipy-frontend",
        name: "Clean Recipes - Frontend com Arquitetura Limpa",
        tagline: "Aplicação frontend desenvolvida com Next.js seguindo princípios de Clean Architecture e desenvolvimento orientado a componentes",
        thumbUrl: "/clean-recipes-frontend.png",
        images: [
            "/Projects/clean-recipes-frontend/HomePage.png",
            "/Projects/clean-recipes-frontend/insightsWeb.png",
            "/Projects/clean-recipes-frontend/loginForm.png",
            "/Projects/clean-recipes-frontend/RecipeForm.png",
            "/Projects/clean-recipes-frontend/registerForm.png",
            "/Projects/clean-recipes-frontend/githubsource.png"
        ],
        githubUrl: "https://github.com/lincon-fernandes-dev/clean-recipes",
        liveUrl: "https://clean-recipes.vercel.app/",
        technologies: [
            { name: 'Next.js 15 / TypeScript', icon: SiNextdotjs, color: 'text-white' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'Storybook', icon: SiStorybook, color: 'text-pink-500' },
            { name: 'Husky', icon: PiTestTubeFill, color: 'text-gray-400' },
        ],
        overview: `
            O Clean Recipes Frontend é uma aplicação moderna desenvolvida com Next.js 15 que implementa
            os princípios de Clean Architecture no frontend. O projeto utiliza Inversify para injeção de dependência,
            Storybook para documentação de componentes, e Husky para garantir qualidade de código através de git hooks.
            A arquitetura é organizada em camadas bem definidas com separação clara de responsabilidades.
        `,
        challenges: [
            "Adaptar princípios de Clean Architecture para o ecossistema React/Next.js",
            "Implementar injeção de dependência com Inversify em aplicação frontend",
            "Configurar Storybook para documentar e testar componentes isoladamente",
            "Estabelecer git hooks com Husky para linting e testes automatizados",
            "Criar uma estrutura escalável que permita fácil manutenção e testes",
            "Integrar com backend API mantendo desacoplamento entre camadas"
        ],
        results: `
            O frontend demonstra uma arquitetura robusta e altamente testável, com componentes
            completamente desacoplados da lógica de negócio. A implementação do Storybook permitiu
            desenvolvimento orientado a componentes com documentação viva. Os git hooks automatizados
            garantem qualidade de código consistente, e a estrutura modular facilita a escalabilidade
            da aplicação para novas funcionalidades.
        `,
    },
    {
        slug: "clean-recipy-backend",
        name: "Clean Recipes API - Backend Clean Architecture",
        tagline: "API RESTful desenvolvida com Clean Architecture, CQRS e testes unitários abrangentes para gerenciamento de receitas.",
        thumbUrl: "/clean-recipes-backend.png",
        images: [
            "/Projects/clean-recipes-backend/swagger.png",
            "/Projects/clean-recipes-backend/unitTests.png",
            "/Projects/clean-recipes-backend/githubsource.png"
        ],
        githubUrl: "https://github.com/lincon-fernandes-dev/clean-recipy-backend",
        liveUrl: "https://clean-recipes.runasp.net/swagger",
        technologies: [
            { name: 'C# .NET 8', icon: TbBrandCSharp, color: 'text-white' },
            { name: 'ASP.NET Core', icon: TbWorld, color: 'text-cyan-400' },
            { name: 'xUnit', icon: PiTestTubeFill, color: 'text-green-400' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        ],
        overview: `
            Clean Recipes API é uma aplicação backend robusta desenvolvida seguindo os princípios de Clean Architecture
            e Domain-Driven Design. A solução implementa padrões CQRS com MediatR, Entity Framework Core para acesso a dados,
            e contêinerização Docker para deploy consistente. A API oferece operações completas de CRUD para gerenciamento
            de receitas culinárias com autenticação e autorização.
        `,
        challenges: [
            "Implementar Clean Architecture com separação clara de responsabilidades entre camadas",
            "Desenvolver sistema de CQRS com commands e queries isolados para melhor performance",
            "Criar testes unitários e de integração cobrindo mais de 85% do código base",
            "Configurar pipeline CI/CD com GitHub Actions para deploy automatizado",
            "Implementar tratamento global de exceções e logging estruturado",
            "Otimizar queries SQL e implementar padrões repository com Entity Framework"
        ],
        results: `
            A API demonstra altíssima qualidade de código com cobertura de testes abrangente,
            arquitetura desacoplada que facilita manutenção e evolução, e documentação completa
            via Swagger/OpenAPI. A aplicação apresenta performance otimizada com response times
            consistentes abaixo de 200ms e escalabilidade horizontal preparada para carga elevada.
            O projeto serve como referência em boas práticas de desenvolvimento backend com .NET.
        `,
    },
];