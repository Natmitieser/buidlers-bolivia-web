import { Project, TeamMember } from "../types";

export const projects: Project[] = [
    {
        id: 1,
        title: "hackathon",
        tag: "# convocatoria_abierta",
        date: "2025-09-20 18:00",
        description: "48h de build (Web3 + IA). Premios por privacidad UX y seguridad criptográfica.",
        output: "seeds, mentorías y acceso a infra",
        status: "OPEN",
    },
    {
        id: 2,
        title: "buidlers house",
        tag: "# devconnect",
        date: "Noviembre 18 al 24",
        location: "CABA, Argentina",
        status: "ANNOUNCED",
        description: "Espacio de co-working y networking para builders durante la DevConnect.",
    },
    {
        id: 3,
        title: "Actividad Solidaria",
        tag: "# SumandoSonrisas",
        date: "2025-12-25 16:00",
        location: "Plaza Camacho / Teleférico Celeste",
        description: "La comunidad está organizando una entrega de regalos para niñas y niños y nos encantaría que seas parte.",
        status: "CLOSED",
    },
];

export const team: TeamMember[] = [
    { name: "Rod", role: "Developer" },
    { name: "Ana", role: "Designer" },
    // Agrega más gente aquí luego
];
