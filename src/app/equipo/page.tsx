"use client"; // Importante para que funcione el click

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { teamMembers, TeamMember } from "@/data/team";

export default function EquipoPage() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    // Filtramos por categorías
    const ceos = teamMembers.filter(m => m.category === "CEO");
    const embajadores = teamMembers.filter(m => m.category === "EMBAJADOR");
    const voluntarios = teamMembers.filter(m => m.category === "VOLUNTARIO");

    return (
        <div className="min-h-screen bg-buidlers-black text-white font-body pb-20">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4">

                {/* Título */}
                <div className="mb-12 border-b border-gray-800 pb-4">
                    <h1 className="text-4xl font-title text-white">
                        &gt; ./sudo_team
                    </h1>
                    <p className="text-gray-400 mt-2 font-mono text-sm">Estructura organizacional y colaboradores.</p>
                </div>

                {/* SECCIÓN 1: CORE TEAM (CEO) */}
                <Section title="CORE_TEAM" members={ceos} onSelect={setSelectedMember} />

                {/* SECCIÓN 2: EMBAJADORES */}
                <Section title="AMBASSADORS" members={embajadores} onSelect={setSelectedMember} />

                {/* SECCIÓN 3: VOLUNTARIOS */}
                <Section title="VOLUNTEERS" members={voluntarios} onSelect={setSelectedMember} />

            </main>

            {/* --- MODAL (POPUP) --- */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Fondo oscuro (click para cerrar) */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedMember(null)}
                    ></div>

                    {/* Contenido del Modal */}
                    <div className="relative bg-black border-2 border-buidlers-yellow w-full max-w-md p-8 shadow-[0_0_50px_rgba(255,200,0,0.2)]">

                        {/* Botón Cerrar (X) */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white font-mono text-xl"
                        >
                            [X]
                        </button>

                        {/* Avatar Grande */}
                        <div className="w-20 h-20 bg-buidlers-yellow text-black flex items-center justify-center text-3xl font-bold font-title mb-6 border border-white">
                            {selectedMember.name.charAt(0)}
                        </div>

                        <h2 className="text-3xl font-title mb-1">{selectedMember.name}</h2>
                        <p className="text-buidlers-yellow font-mono text-sm mb-6 uppercase border-b border-gray-800 pb-2">
                            {selectedMember.role}
                        </p>

                        <div className="mb-6">
                            <h3 className="text-gray-500 text-xs font-mono mb-2"> &gt; DATOS_HISTÓRICOS</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {selectedMember.bio}
                            </p>
                        </div>

                        {/* Redes Sociales del Miembro */}
                        <div className="flex gap-4">
                            {selectedMember.socials?.twitter && <SocialLink name="TW" />}
                            {selectedMember.socials?.linkedin && <SocialLink name="LN" />}
                            {selectedMember.socials?.github && <SocialLink name="GH" />}
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

// Componente pequeño para las secciones
function Section({ title, members, onSelect }: { title: string, members: TeamMember[], onSelect: (m: TeamMember) => void }) {
    if (members.length === 0) return null;
    return (
        <div className="mb-16">
            <h2 className="text-buidlers-yellow font-mono text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-buidlers-yellow"></span> {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {members.map((m) => (
                    <div
                        key={m.id}
                        onClick={() => onSelect(m)}
                        className="border border-dashed border-gray-700 p-6 flex flex-col items-center text-center hover:border-solid hover:border-buidlers-yellow hover:bg-gray-900 cursor-pointer transition-all group"
                    >
                        <div className="w-16 h-16 bg-gray-800 text-white group-hover:bg-buidlers-yellow group-hover:text-black flex items-center justify-center text-2xl font-bold font-title mb-4 transition-colors">
                            {m.name.charAt(0)}
                        </div>
                        <h3 className="font-bold text-lg">{m.name}</h3>
                        <p className="text-xs text-gray-500 font-mono mt-1">{m.role}</p>
                        <span className="text-[10px] text-buidlers-yellow mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            [VER DATOS]
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function SocialLink({ name }: { name: string }) {
    return (
        <div className="border border-gray-600 px-3 py-1 text-xs font-mono hover:bg-white hover:text-black cursor-pointer transition-colors">
            {name}
        </div>
    )
}
