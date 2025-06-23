import path from "path";
import fs from "fs";
import { cwd } from "process";
import { getKosdaqJson, setKosdaqJson } from "@/lib/mstParsingCache";
import iconv from "iconv-lite";

//api 로 바꿀려고 lib에 안두고 여기 임시저장
export const parsingKosdaq = () => {
  const cachedKosdaqJson = getKosdaqJson();

  if (cachedKosdaqJson) {
    return {
      message: "kosdaq_code 200 OK",
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
      const shortCode = line.substring(0, 9).trim();
      const standardCode = line.substring(9, 21).trim();
      const name = line.substring(21, 40).trim();
      return { shortCode, standardCode, name };
    })
    .filter((item) => item.shortCode && item.name && item.standardCode);

  //utf-8로 저장
  setKosdaqJson(stocks);

  return {
    message: "kosdaq_code 200 OK",
    data: stocks,
  };
};
