import { NextResponse } from "next/server";

export async function POST(req) {
  const { tablero } = await req.json();

  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Filas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columnas
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  // Buscar la mejor jugada según estrategia
  const encontrarMejorMovimiento = (simbolo) => {
    for (let combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      const valores = [tablero[a], tablero[b], tablero[c]];

      // Si hay dos iguales y una libre, ocuparla
      if (
        valores.filter((v) => v === simbolo).length === 2 &&
        valores.includes(null)
      ) {
        return combinacion[valores.indexOf(null)];
      }
    }
    return null;
  };

  // 1. Intentar ganar
  let movimiento = encontrarMejorMovimiento("O");
  if (movimiento !== null) return NextResponse.json({ movimiento });

  // 2. Bloquear al jugador si está por ganar
  movimiento = encontrarMejorMovimiento("X");
  if (movimiento !== null) return NextResponse.json({ movimiento });

  // 3. Jugar en el centro si está libre
  if (tablero[4] === null) return NextResponse.json({ movimiento: 4 });

  // 4. Jugar en una esquina si está libre
  const esquinas = [0, 2, 6, 8].filter((i) => tablero[i] === null);
  if (esquinas.length > 0) {
    return NextResponse.json({
      movimiento: esquinas[Math.floor(Math.random() * esquinas.length)],
    });
  }

  // 5. Jugar aleatoriamente en las casillas restantes
  const posicionesLibres = tablero
    .map((v, i) => (v === null ? i : null))
    .filter((i) => i !== null);
  movimiento =
    posicionesLibres[Math.floor(Math.random() * posicionesLibres.length)];

  return NextResponse.json({ movimiento });
}
