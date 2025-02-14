"use client";

import { useState, useEffect } from "react";

const Tablero = () => {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState("X"); // Jugador 1 empieza
  const [estadoPartida, setEstadoPartida] = useState("Turno del jugador");
  const [partidaTerminada, setPartidaTerminada] = useState(false);

  const realizarMovimiento = async (index) => {
    if (tablero[index] || partidaTerminada) return;

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = "X"; // Jugador 1 marca "X"
    setTablero(nuevoTablero);
    setTurno("O");
    setEstadoPartida("Turno de la máquina");

    const resultado = await verificarEstado(nuevoTablero);
    if (resultado) return finalizarPartida(resultado);

    const movimientoMaquina = await obtenerMovimientoMaquina(nuevoTablero);
    nuevoTablero[movimientoMaquina] = "O";
    setTablero([...nuevoTablero]);

    const resultadoFinal = await verificarEstado(nuevoTablero);
    if (resultadoFinal) return finalizarPartida(resultadoFinal);

    setTurno("X");
    setEstadoPartida("Turno del jugador");
  };

  const obtenerMovimientoMaquina = async (tablero) => {
    const res = await fetch("/api/movimiento-maquina", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tablero }),
    });
    const data = await res.json();
    return data.movimiento;
  };

  const verificarEstado = async (tablero) => {
    const res = await fetch("/api/verificar-estado", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tablero }),
    });
    const data = await res.json();
    return data.resultado;
  };

  const finalizarPartida = async (resultado) => {
    setEstadoPartida(resultado);
    setPartidaTerminada(true);

    await fetch("/api/guardar-resultado", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tablero, resultado }),
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{estadoPartida}</h2>
      <div className="grid grid-cols-3 gap-2">
        {tablero.map((valor, index) => (
          <button
            key={index}
            className="w-16 h-16 text-xl border border-gray-400 flex items-center justify-center"
            onClick={() => realizarMovimiento(index)}
            disabled={valor !== null || partidaTerminada}
          >
            {valor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tablero;
