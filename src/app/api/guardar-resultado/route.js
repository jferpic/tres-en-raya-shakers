import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const { tablero, resultado } = await req.json();

  try {
    const client = await clientPromise;
    console.log("holaaa");

    const db = client.db("tres-en-raya");

    await db.collection("games").insertOne({
      tablero,
      resultado,
      fecha: new Date(),
    });

    const ranking = db.collection("ranking");

    if (resultado.includes("Gana")) {
      const ganador = resultado.split(" ")[1];
      await ranking.updateOne(
        { nombre: ganador },
        { $inc: { victorias: 1 } },
        { upsert: true }
      );
    } else {
      await ranking.updateMany({}, { $inc: { empates: 1 } });
    }

    return NextResponse.json({ message: "Partida guardada" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error guardando la partida" },
      { status: 500 }
    );
  }
}
