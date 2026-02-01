import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-6 border-b border-gray-800 bg-buidlers-black mb-8">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                {/* LOGO: Al hacer clic vuelve al inicio */}
                <Link href="/" className="text-2xl font-title text-buidlers-yellow tracking-wider hover:opacity-80 transition-opacity">
                    buidlers<span className="text-white">_bo</span>
                </Link>

                {/* MENÚ DE NAVEGACIÓN */}
                <div className="flex gap-6 text-sm font-mono">
                    <Link href="/proyectos" className="text-gray-400 hover:text-buidlers-yellow hover:underline decoration-buidlers-yellow underline-offset-4 transition-all">
                        ./proyectos
                    </Link>
                    <Link href="/equipo" className="text-gray-400 hover:text-buidlers-yellow hover:underline decoration-buidlers-yellow underline-offset-4 transition-all">
                        ./equipo
                    </Link>
                </div>
            </div>
        </nav>
    );
}
