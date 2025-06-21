import { POST } from "@/app/api/kis/get-token/route";
import { findKosdaqStockCode, findKospiStockCode } from "@/lib/findStockCode";
import axios from "axios";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (slug: string): Promise<NextResponse> => {
  const accessToken = await POST();
  const stockCode =
    findKosdaqStockCode(slug) === null
      ? findKospiStockCode(slug)
      : findKosdaqStockCode(slug);

  if (stockCode === null) notFound();

  const url = "https://openapi.koreainvestment.com:9443";
  const res = axios.get(url, {});
  return NextResponse.json({});
};
