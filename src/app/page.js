"use client";

import Tablero from "@/app/components/Tablero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 pt-20 pb-6">
      <h1 className="text-3xl font-bold mb-4">Juego de Tres en Raya</h1>

      {/* Logo de Shakers */}
      <Image
        src="/logo.webp"
        alt="Logo de Shakers"
        width={150}
        height={150}
        priority
        className="mx-auto mb-6"
      />

      <Tablero />

      {/* Contenedor de botones alineados */}
      <div className="flex space-x-4 mt-4">
        {/* Botón para reiniciar la partida */}
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#0C5944] text-white font-bold tracking-wider rounded-lg hover:bg-[#033028]"
        >
          REINICIAR
        </button>

        {/* Enlace a la página de Ranking */}
        <Link
          href="/ranking"
          className="px-4 py-2 bg-[#F0FF3D] text-black font-bold tracking-wider rounded-lg hover:bg-[#898C23] hover:text-white"
        >
          RANKING
        </Link>
      </div>
    </main>
  );
}
