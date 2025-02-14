import Link from "next/link";
import Ranking from "@/app/components/Ranking";

export default function RankingPage() {
  return (
    <main className="flex flex-col items-center px-6 pt-20 pb-6">
      <h1 className="text-3xl font-bold mb-6">Ranking de Jugadores</h1>
      <Ranking />
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-[#F0FF3D] text-black font-bold tracking-wider rounded-lg hover:bg-[#898C23] hover:text-white"
      >
        ATRÁS
      </Link>
    </main>
  );
}
