"use client";
import { projects, team } from "@/data/projects";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import PixelBracket from "@/components/ui/PixelBracket";
import CardFrame from "@/components/ui/CardFrame";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 font-body">

      {/* 1. HEADER / NAVBAR SENCILLO */}
      <Navbar />

      {/* 2. HERO SECTION (Lo que ven al entrar) */}
      <main className="w-full max-w-5xl flex flex-col gap-20">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start"
        >
          {/* Aquí ponemos el corchete gigante a la izquierda */}
          <div className="hidden sm:block pt-4">
            <PixelBracket />
          </div>

          <div>
            <p className="text-buidlers-yellow mb-2 text-xs tracking-widest">INITIALIZING...</p>
            <h1 className="text-6xl sm:text-8xl font-title mb-6 leading-none text-white">
              CONSTRUIMOS <br /> EL FUTURO
            </h1>
            <p className="max-w-lg text-gray-400 text-lg border-l-2 border-buidlers-gray pl-4 ml-2">
              Comunidad de desarrolladores Web3 en Bolivia.
              Creamos, aprendemos y compartimos código.
            </p>
          </div>
        </motion.section>

        {/* Botones de Acción Rápida (Estilo Terminal) */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
          <Link href="/proyectos" className="bg-buidlers-yellow text-black px-6 py-3 font-bold font-mono hover:bg-white transition-colors">
            EXPLORAR PROYECTOS
          </Link>
          <Link href="/equipo" className="border border-buidlers-yellow text-buidlers-yellow px-6 py-3 font-bold font-mono hover:bg-buidlers-yellow hover:text-black transition-colors">
            CONOCER EQUIPO
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 text-gray-600 text-sm font-mono text-center">
        <p>Buidlers Bolivia © 2026. All systems operational.</p>
      </footer>
    </div>
  );
}
