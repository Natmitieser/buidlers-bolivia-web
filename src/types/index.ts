export interface Project {
    id: number;
    title: string;
    tag?: string;
    date?: string;
    location?: string;
    description: string;
    output?: string;
    status?: string;
    link?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    avatar?: string;
}
