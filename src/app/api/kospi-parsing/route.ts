import path from "path";
import fs from "fs";
import { cwd } from "process";

export const parsingKosdaqMst = () => {
  const kosdaqMstPath = path.join(cwd(), "/public/kosdaq_code.mst");

  const buffer = fs.readFileSync(kosdaqMstPath);
  console.log(buffer);
};

// import fs from "fs";
// import path from "path";
// import { NextResponse } from "next/server";
//
// export async function GET() {
// const mstFilePath = path.join(process.cwd(), "public", "kosdaq_code.mst");
//
// EUC-KR로 읽기
// const buffer = fs.readFileSync(mstFilePath);
// const content = buffer.toString("euc-kr");
//
// 라인별 파싱
// const lines = content.split("\n");
// const stocks = lines.map(line => {
// const code = line.substring(0, 6).trim();
// const name = line.substring(20, 40).trim();
// return { code, name };
// }).filter(item => item.code && item.name);
//
// 결과 JSON 반환
// return NextResponse.json({
// message: "✅ JSON 파싱 완료",
// total: stocks.length,
// data: stocks
// });
// }
//
