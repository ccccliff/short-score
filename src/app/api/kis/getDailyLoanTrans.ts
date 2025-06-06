// /app/api/kis-token/route.ts
import { NextResponse } from "next/server";
import { getKisToken } from "./getToken";

export const getShortData = async () => {
  const token = await getKisToken();

  const url =
    "https://openapi.koreainvestment.com:9443/uapi/domestic-stock/v1/quotations/daily-loan-trans";
  return 1;
};
