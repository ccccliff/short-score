import fs from "fs";
import path from "path";

const kospiJsonFilePath = path.join(process.cwd(), "src", "data", "kospi.json");
const kosdaqJsonFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "kosdaq.json"
);

export const setKospiJson = () => {};
export const getKospiJson = () => {};
export const setKosdaqJson = () => {};
export const getKosdaqJson = () => {};
