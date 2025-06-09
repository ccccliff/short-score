import path from "path";
import fs from "fs";
import { cwd } from "process";
import { getKospiJson, setKospiJson } from "@/lib/mstParsingCache";

export const parsingKospi = () => {
  const cachedKospiJson = getKospiJson();

  if (cachedKospiJson) return cachedKospiJson;

  //배포시 퍼블릭에 있는 static파일 읽기
  const kospiMstPath = path.join(cwd(), "/public/kospi_code.mst");

  const buffer = fs.readFileSync(kospiMstPath);
  const content = buffer.toString("utf-8");

  //라인별 파싱
  const lines = content.split("\n");
  //배열로 반환
  const stocks = lines
    .map((line) => {
      const code = line.substring(0, 6).trim();
      const name = line.substring(20, 40).trim();
      return { code, name };
    })
    .filter((item) => item.code && item.name);

  setKospiJson(stocks);

  return {
    message: "kospi_code 파싱 성공",
    data: stocks,
  };
};
