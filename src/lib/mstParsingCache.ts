import fs from "fs";
import path from "path";

const kospiJsonFilePath = path.join(process.cwd(), "src", "data", "kospi.json");
const kosdaqJsonFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "kosdaq.json"
);

export const setKospiJson = (data: { code: string; name: string }[]) => {
  fs.writeFileSync(kospiJsonFilePath, JSON.stringify(data));
};

export const getKospiJson = () => {
  //없으니까 null 반환
  if (!fs.existsSync(kospiJsonFilePath)) return null;
  //fs를 사용하면 바이너리 집합체인 buffer형식이니 문자열로 바꿔줘야한다 +   공백제거
  const kospiJsonStr = fs.readFileSync(kospiJsonFilePath, "utf-8").trim();
  // 빈배열 undefined로 처리 + 문자열을 json으로 파싱
  return kospiJsonStr === "" ? undefined : JSON.parse(kospiJsonStr);
};

export const setKosdaqJson = (data: { code: string; name: string }[]) => {
  fs.writeFileSync(kosdaqJsonFilePath, JSON.stringify(data));
};

export const getKosdaqJson = () => {
  if (!fs.existsSync(kosdaqJsonFilePath)) return null;
  //fs를 사용하면 바이너리 집합체인 buffer형식이니 문자열로 바꿔줘야한다 +   공백제거
  const kosdaqJsonStr = fs.readFileSync(kosdaqJsonFilePath, "utf-8").trim();
  // 빈배열 undefined로 처리 + 문자열을 json으로 파싱
  return kosdaqJsonStr === "" ? undefined : JSON.parse(kosdaqJsonStr);
};
