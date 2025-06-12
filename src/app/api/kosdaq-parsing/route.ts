import path from "path";
import fs from "fs";
import { cwd } from "process";
import { getKosdaqJson, setKosdaqJson } from "@/lib/mstParsingCache";
import iconv from "iconv-lite";

export const parsingKosdaq = () => {
  const cachedKosdaqJson = getKosdaqJson();

  if (cachedKosdaqJson) {
    return {
      message: "kosdaq_code 캐쉬 성공",
      data: cachedKosdaqJson,
    };
  }

  //배포시 퍼블릭에 있는 static파일 읽기
  const kosdaqMstPath = path.join(cwd(), "/public/kosdaq_code.mst");

  const buffer = fs.readFileSync(kosdaqMstPath);
  const content = iconv.decode(buffer, "cp949");

  //라인별 파싱
  const lines = content.split("\n");
  const stocks = lines
    .map((line) => {
      const code = line.substring(0, 6).trim();
      const name = line.substring(20, 40).trim();
      return { code, name };
    })
    .filter((item) => item.code && item.name);

  setKosdaqJson(stocks);

  return {
    message: "kosdaq_code 파싱 성공",
    data: stocks,
  };
};
