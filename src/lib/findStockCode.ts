import fs from "fs";
import path from "path";
import { kosJsonStock } from "@/types/stock";
const kosdaqJsonPath = path.join(process.cwd(), "src", "data", "kosdaq.json");
const kospiJsonPath = path.join(process.cwd(), "src", "data", "kospi.json");

export const findKosdaqStockCode = async (slug: string) => {
  if (fs.existsSync(kosdaqJsonPath)) {
    const kosdaqJson = fs.readFileSync(kosdaqJsonPath, "utf-8");
    const kosdaqJsonArr: kosJsonStock[] = JSON.parse(kosdaqJson);

    return kosdaqJsonArr.find((e) => e.name === slug) || null;
  }

  return null;
};

export const findKospiStockCode = async (slug: string) => {
  if (fs.existsSync(kospiJsonPath)) {
    const kospiJson = fs.readFileSync(kospiJsonPath, "utf-8");
    const kospiJsonArr: kosJsonStock[] = JSON.parse(kospiJson);
    return kospiJsonArr.find((e) => e.name === slug) || null;
  }

  return null;
};
