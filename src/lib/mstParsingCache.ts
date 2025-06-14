import fs from "fs";
import path from "path";
import iconv from "iconv-lite";
const kospiJsonFilePath = path.join(process.cwd(), "src", "data", "kospi.json");
const kosdaqJsonFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "kosdaq.json"
);

export const setKospiJson = (
  data: { shortCode: string; standardCode: string; name: string }[]
) => {
  fs.writeFileSync(kospiJsonFilePath, JSON.stringify(data));
};

export const getKospiJson = () => {
  //없으니까 null 반환
  if (!fs.existsSync(kospiJsonFilePath)) return null;
  //fs를 사용하면 바이너리 집합체인 buffer형식이니 문자열로 바꿔줘야한다 +   공백제거
  const kospiJsonStr = fs.readFileSync(kospiJsonFilePath);

  const kospiJsonContent = iconv.decode(kospiJsonStr, "cp949").trim();
  // 빈배열 undefined로 처리 + 문자열을 json으로 파싱
  return kospiJsonContent === "" ? undefined : JSON.parse(kospiJsonContent);
};

export const setKosdaqJson = (
  data: { shortCode: string; standardCode: string; name: string }[]
) => {
  fs.writeFileSync(kosdaqJsonFilePath, JSON.stringify(data));
};

export const getKosdaqJson = () => {
  if (!fs.existsSync(kosdaqJsonFilePath)) return null;
  //fs를 사용하면 바이너리 집합체인 buffer형식이니 문자열로 바꿔줘야한다 +   공백제거
  const kosdaqJsonStr = fs.readFileSync(kosdaqJsonFilePath);

  const kospiJsonContent = iconv.decode(kosdaqJsonStr, "cp949").trim();

  // 빈배열 undefined로 처리 + 문자열을 json으로 파싱
  return kospiJsonContent === "" ? undefined : JSON.parse(kospiJsonContent);
};
