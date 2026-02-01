import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import PixelBracket from "@/components/ui/PixelBracket";

export default function ProyectosPage() {
    return (
        <div className="min-h-screen bg-buidlers-black text-white font-body pb-20">
            <Navbar />

            <main className="max-w-5xl mx-auto px-4">
                {/* Título de la Sección */}
                <div className="flex items-center mb-12">
                    <PixelBracket />
                    <div>
                        <h1 className="text-4xl sm:text-6xl font-title text-white">
                            SHOWCASE <span className="text-buidlers-yellow">2026</span>
                        </h1>
                        <p className="text-gray-400 mt-2 border-l-2 border-buidlers-yellow pl-4">
                            Directorio de iniciativas, hackathons y builds de la comunidad.
                        </p>
                    </div>
                </div>

                {/* GRID DE PROYECTOS (Estilo Bento) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`border border-gray-800 p-6 flex flex-col justify-between hover:border-buidlers-yellow transition-all group relative bg-buidlers-gray/20
              ${index === 0 ? 'md:col-span-2 bg-buidlers-gray/40' : ''}`} // El primero es más grande
                        >
                            {/* Decoración número */}
                            <span className="absolute top-2 right-4 text-xs font-mono text-gray-600 group-hover:text-buidlers-yellow">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <div>
                                <div className="inline-block px-2 py-0.5 border border-gray-600 text-[10px] text-buidlers-yellow mb-3 rounded-sm">
                                    {project.status || "ARCHIVED"}
                                </div>
                                <h3 className="text-2xl font-title mb-2 text-white group-hover:text-buidlers-yellow">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Botón falso de "Ver más" */}
                            <button className="text-xs font-bold text-buidlers-yellow flex items-center gap-2 mt-4 opacity-60 group-hover:opacity-100">
                                ACCESS_DATA <span>➜</span>
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
