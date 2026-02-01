import { team } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";

export default function EquipoPage() {
    return (
        <div className="min-h-screen bg-buidlers-black text-white font-body pb-20">
            <Navbar />

            <main className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-title mb-12 border-b border-gray-800 pb-4">
                    &gt; ./sudo_team
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-8 border border-dashed border-gray-700 hover:border-solid hover:border-buidlers-yellow hover:bg-buidlers-gray transition-all">
                            {/* Avatar Pixelado Generado con CSS */}
                            <div className="w-24 h-24 bg-buidlers-yellow mb-4 rounded-none flex items-center justify-center text-black text-3xl font-bold font-title">
                                {member.name.charAt(0)}
                            </div>

                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-buidlers-yellow font-mono text-sm mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
