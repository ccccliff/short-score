// app/api/test/route.ts
import { getKisToken } from "../kis/get-token/route";

export async function GET() {
  const token = await getKisToken();
}
