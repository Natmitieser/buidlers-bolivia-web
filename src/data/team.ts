export interface TeamMember {
    id: number;
    name: string;
    role: string;
    category: "CEO" | "EMBAJADOR" | "VOLUNTARIO"; // Categorías
    bio: string; // Historia para el modal
    socials?: { twitter?: string; linkedin?: string; github?: string };
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Alejandro Alvarez",
        role: "Chief Executive Officer",
        category: "CEO",
        bio: "Fundador de Buidlers Bolivia. Apasionado por escalar comunidades Web3 y crear infraestructura descentralizada. Lidera la visión estratégica.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        id: 2,
        name: "Rodrigo RM",
        role: "Community Lead",
        category: "EMBAJADOR",
        bio: "Developer Fullstack y Embajador. Encargado de conectar desarrolladores y organizar las hackathons locales.",
        socials: { github: "#", twitter: "#" }
    },
    {
        id: 3,
        name: "Ana",
        role: "Creative Designer",
        category: "VOLUNTARIO",
        bio: "Diseñadora UI/UX. Aporta su talento visual para mantener la estética cyberpunk de la comunidad.",
        socials: { linkedin: "#" }
    },
];
