import { NextResponse } from "next/server";

const ganarPosiciones = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columnas
  [0, 4, 8],
  [2, 4, 6], // Diagonales
];

export async function POST(req) {
  const { tablero } = await req.json();

  for (let combinacion of ganarPosiciones) {
    const [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return NextResponse.json({ resultado: `Gana ${tablero[a]}` });
    }
  }

  if (!tablero.includes(null)) {
    return NextResponse.json({ resultado: "Empate" });
  }

  return NextResponse.json({ resultado: null });
}
