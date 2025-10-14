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
}];
