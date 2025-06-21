import { POST } from "@/app/api/kis/get-token/route";
import { findKosdaqStockCode, findKospiStockCode } from "@/lib/findStockCode";
import axios from "axios";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

const now = new Date();
const today = now.toISOString().slice(0, 10).replace(/-/g, "");

const monthAgoDate = new Date();
monthAgoDate.setDate(now.getDate() - 30);
const monthAgo = monthAgoDate.toISOString().slice(0, 10).replace(/-/g, "");

export const GET = async (slug: string): Promise<NextResponse> => {
  const accessToken = await POST();
  const kosdaqStockCode = await findKosdaqStockCode(slug);
  const kospiStockCode = await findKospiStockCode(slug);
  const stockCode = kosdaqStockCode || kospiStockCode;

  if (stockCode === null) return notFound();

  const headers = {
    "content-type": "application/json; charset=utf-8",
    authorization: accessToken,
    appkey: process.env.KIS_APP_KEY!,
    appsecret: process.env.KIS_APP_SECRET!,
    tr_id: "FHPST04830000",
    custtype: "P",
  };
  const queryParameter = {
    FID_INPUT_DATE_2: today,
    FID_COND_MRKT_DIV_CODE: "J",
    FID_INPUT_ISCD: stockCode.standardCode,
    FID_INPUT_DATE_1: monthAgo,
  };
  const url = `${process.env
    .KIS_BASE_URL!}/uapi/domestic-stock/v1/quotations/daily-short-sale`;

  const res = axios.get(url, {
    headers,
    queryParameter,
  });

  return NextResponse.json({
    data: res,
    message: "status 200 OK",
  });
};
