import { NextResponse } from "next/server";
import { getKisToken } from "../get-token/route";
import axios from "axios";

export const getShortData = async () => {
  const token = await getKisToken();

  const url =
    "https://openapi.koreainvestment.com:9443/uapi/domestic-stock/v1/quotations/daily-loan-trans";

  const res = await axios.get(url, {});
  return 1;
};
