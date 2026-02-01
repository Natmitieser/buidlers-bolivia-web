import Navbar from "@/components/layout/Navbar";
import { socials } from "@/data/socials";

export default function LinksPage() {
    const mainLink = socials.find(s => s.name === "WHATSAPP");
    const secondaryLink = socials.find(s => s.name === "LUMA");
    const otherLinks = socials.filter(s => s.name !== "WHATSAPP" && s.name !== "LUMA");

    return (
        <div className="min-h-screen bg-buidlers-black text-white font-body pb-20 antialiased selection:bg-buidlers-yellow selection:text-black">
            <Navbar />

            <main className="max-w-xl mx-auto px-4 text-center">

                {/* HEADER CON EFECTO GLOW EN EL DIVISOR */}
                <div className="flex flex-col items-center mb-8 group">
                    {/* ... tu logo B_ ... */}
                    <div className="w-24 h-24 bg-buidlers-yellow text-black flex items-center justify-center text-5xl font-bold mb-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                        B_
                    </div>
                    <h1 className="text-3xl font-title text-white">buidlers_bolivia</h1>

                    {/* 👇 AQUÍ ESTÁ EL DIVISOR QUE BRILLA AL PASAR EL MOUSE */}
                    <div className="w-full h-px bg-gray-800 my-4 group-hover:bg-buidlers-yellow group-hover:shadow-[0_0_10px_rgba(255,200,0,0.8)] transition-all duration-500"></div>

                    <p className="text-gray-400 font-mono text-sm">
                        Comunidad de desarrolladores Web3
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">

                    {/* WHATSAPP */}
                    {mainLink && (
                        <a
                            href={mainLink.url}
                            target="_blank" rel="noopener noreferrer"
                            className="sm:col-span-2 bg-buidlers-yellow text-black p-4 flex items-center justify-between group border border-buidlers-yellow hover:bg-white transition-all hover:scale-[1.02] duration-200"
                        >
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-10 h-10">{mainLink.icon}</div>
                                <div>
                                    <h2 className="text-xl font-title font-bold leading-none mb-1">{mainLink.name}</h2>
                                    <p className="font-mono text-[10px] font-bold opacity-80 leading-tight">{mainLink.description}</p>
                                </div>
                            </div>
                            {/* BOTÓN VISIBLE */}
                            <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase group-hover:bg-buidlers-yellow group-hover:text-black transition-colors">
                                Ver Enlace ➜
                            </span>
                        </a>
                    )}

                    {/* LUMA */}
                    {secondaryLink && (
                        <a
                            href={secondaryLink.url}
                            target="_blank" rel="noopener noreferrer"
                            className="sm:col-span-2 border border-gray-700 bg-gray-900/50 p-4 flex items-center justify-between group hover:border-buidlers-yellow hover:text-buidlers-yellow transition-all"
                        >
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-8 h-8 p-1">{secondaryLink.icon}</div>
                                <div>
                                    <h2 className="text-lg font-title leading-none">{secondaryLink.name}</h2>
                                    <p className="font-mono text-[10px] text-gray-500 group-hover:text-buidlers-yellow/80">{secondaryLink.description}</p>
                                </div>
                            </div>
                            <span className="text-[10px] border border-gray-600 px-2 py-1 rounded group-hover:border-buidlers-yellow">
                                VER LINK
                            </span>
                        </a>
                    )}

                    {/* OTROS LINKS */}
                    {otherLinks.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank" rel="noopener noreferrer"
                            className="border border-gray-800 bg-black p-3 flex items-center justify-between hover:bg-gray-900 hover:border-gray-600 transition-all group"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 text-gray-400 group-hover:text-white">{social.icon}</div>
                                <span className="font-title text-sm text-gray-300 group-hover:text-white">{social.name}</span>
                            </div>
                            <span className="text-[9px] text-gray-600 group-hover:text-white">➜</span>
                        </a>
                    ))}

                </div>
            </main>
        </div>
    );
}
