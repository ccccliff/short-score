// /app/api/kis-token/route.ts
import { NextResponse } from "next/server";
import { getKisToken } from "./getToken";

export async function GET() {
  const token = await getKisToken();
  return NextResponse.json({ token });
}
