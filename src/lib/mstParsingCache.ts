import fs from "fs";
import { NextResponse } from "next/server";
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

  const kospiJson = fs.readFileSync(kospiJsonFilePath, "utf-8");

  return kospiJson;
};

export const setKosdaqJson = (data: { code: string; name: string }[]) => {
  fs.writeFileSync(kosdaqJsonFilePath, JSON.stringify(data));
};

export const getKosdaqJson = () => {
  if (!fs.existsSync(kosdaqJsonFilePath)) return null;
  //fs를 사용하면 바이너리 집합체인 buffer형식이니 바꿔줘야한다
  const kosdaqJson = fs.readFileSync(kosdaqJsonFilePath, "utf-8");

  return kosdaqJson;
};
