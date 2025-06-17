import { POST } from "../get-token/route";
import axios from "axios";

export const GET = async () => {
  const accessToken = await POST();

  const url =
    "https://openapi.koreainvestment.com:9443/uapi/domestic-stock/v1/quotations/daily-loan-trans";

  const res = await axios.get(url, {});
  return 1;
};
