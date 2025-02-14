"use client";

import { useState, useEffect } from "react";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      const res = await fetch("/api/ranking");
      const data = await res.json();

      // Mapear victorias de cada jugador
      const victoriasPorJugador = {};
      data.forEach((jugador) => {
        victoriasPorJugador[jugador.nombre] = jugador.victorias;
      });

      // Calcular derrotas como la suma de las victorias de los oponentes
      const rankingModificado = data.map((jugador) => {
        const derrotasCalculadas = data.reduce((acc, otroJugador) => {
          if (otroJugador.nombre !== jugador.nombre) {
            acc += victoriasPorJugador[otroJugador.nombre] || 0;
          }
          return acc;
        }, 0);

        return { ...jugador, derrotas: derrotasCalculadas };
      });

      setRanking(rankingModificado);
    };

    fetchRanking();
  }, []);

  return (
    <div className="w-full mt-6 flex flex-col justify-center items-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Ranking</h2>

      {/* Contenedor con desplazamiento horizontal en pantallas pequeñas */}
      <div className="w-full overflow-x-auto flex flex-row justify-center items-center">
        <table className="w-full max-w-2xl border border-gray-300">
          <thead>
            <tr className="bg-[#0C5944] text-white font-bold">
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                Jugador
              </th>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                Victorias
              </th>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                Empates
              </th>
              <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                Derrotas
              </th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((jugador, index) => (
              <tr key={index} className="text-center">
                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                  {jugador.nombre}
                </td>
                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                  {jugador.victorias}
                </td>
                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                  {jugador.empates}
                </td>
                <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">
                  {jugador.derrotas}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
