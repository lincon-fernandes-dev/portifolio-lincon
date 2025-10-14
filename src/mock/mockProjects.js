import {  SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si';

export const mockProjecstData = [{
    slug: "portifolio-lincon",
    name: "Portfólio Pessoal — Lincon Fernandes",
    tagline: "Aplicação desenvolvida em Next.js e Tailwind CSS para apresentar minha trajetória e projetos como desenvolvedor full-stack.",
    thumbUrl: "/Portifolio-lincon.png",
    images: [
        "/Projects/portifolio-lincon/homePage.png",
        "/Projects/portifolio-lincon/sobre.png",
        "/Projects/portifolio-lincon/contact.png",
        "/Projects/portifolio-lincon/skills.png"
    ],
    githubUrl: "https://github.com/lincon-fernandes-dev/portifolio-lincon",
    liveUrl: "https://portifolio-lincon.vercel.app/",
    technologies: [
        { name: 'Next.js / TypeScript', icon: SiNextdotjs, color: 'text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
    overview: `
        Este projeto foi desenvolvido para apresentar minha experiência profissional, habilidades técnicas e principais projetos. O objetivo foi construir um portfólio moderno, rápido e responsivo, que refletisse minha identidade como desenvolvedor e destacasse boas práticas de código e design limpo.
    `,
    challenges: [
        "Criar um layout elegante e responsivo utilizando apenas Tailwind CSS.",
        "Estruturar o conteúdo de forma clara e visualmente agradável para recrutadores.",
        "Implementar animações sutis e navegação fluida entre seções com Next.js.",
        "Organizar o código de forma modular e reutilizável para facilitar manutenção e expansão futura.",
    ],
    results: `
        O portfólio proporcionou uma experiência de navegação leve e intuitiva, com carregamento rápido e excelente desempenho. O design final reflete minha atenção a detalhes e capacidade de construir interfaces bem estruturadas com foco na experiência do usuário.
    `,
},
{
    slug: "oratiolab",
    name: "OratioLab",
    tagline: "Website institucional multilíngue desenvolvido com foco em escalabilidade, SEO e identidade de marca.",
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
        { name: 'i18next', icon: SiNextdotjs, color: 'text-blue-400' },
    ],
    overview: `
        O OratioLab foi desenvolvido como um projeto conceitual de alto nível, simulando um produto real.
        A aplicação apresenta uma arquitetura sólida com Next.js e Tailwind CSS, integração multilíngue
        usando i18next, componentes reutilizáveis e uma experiência visual que equilibra profissionalismo
        e identidade moderna. 
    `,
    challenges: [
        "Implementar suporte completo a múltiplos idiomas (i18n) com detecção automática de idioma.",
        "Manter excelente performance (Core Web Vitals) mesmo com conteúdo dinâmico e imagens otimizadas.",
        "Desenhar uma identidade visual original e coesa, aplicando princípios de UI/UX modernos.",
        "Estruturar o projeto de forma modular, pensando na escalabilidade e possíveis integrações futuras.",
    ],
    results: `
        O resultado foi um site leve, responsivo e com alta pontuação em SEO e performance.
        O sistema de internacionalização permite expansão fácil para novos mercados,
        e o design responsivo garante uma ótima experiência tanto em desktop quanto em mobile.
        O projeto se mostrou pronto para ser transformado em um produto real.
    `,
}
];
