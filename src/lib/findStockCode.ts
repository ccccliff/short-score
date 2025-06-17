import axios from "axios";
import { POST } from "@/app/api/kis/get-token/route";

export const GET = async (slug: string) => {
  const accessToken = await POST();
  const url = "https://openapi.koreainvestment.com:9443";

  const res = axios.get();
};
