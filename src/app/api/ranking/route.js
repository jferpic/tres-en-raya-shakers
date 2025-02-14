import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tres-en-raya");

    const ranking = await db.collection("ranking").find().toArray();

    return NextResponse.json(ranking);
  } catch (error) {
    return NextResponse.json(
      { error: "Error obteniendo el ranking" },
      { status: 500 }
    );
  }
}
