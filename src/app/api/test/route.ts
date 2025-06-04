// app/api/test/route.ts
import { getKisToken } from "../kis/getToken";

export async function GET() {
  const token = await getKisToken();
}
