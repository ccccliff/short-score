import fs from "fs";
import path from "path";
const accessTokenFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "tokenCache.json"
);

export const setAccessToken = (
  access_token: string,
  access_token_token_expired: string
) => {
  const data = { access_token, access_token_token_expired };
  fs.writeFileSync(accessTokenFilePath, JSON.stringify(data));
};

export const getAccessToken = (): string | null => {
  if (!fs.existsSync(accessTokenFilePath)) return null;

  const { access_token, access_token_token_expired } = JSON.parse(
    fs.readFileSync(accessTokenFilePath, "utf-8").trim()
  );

  if (new Date() < new Date(access_token_token_expired)) {
    return access_token;
  } else {
    //삭제 로직
    fs.unlinkSync(accessTokenFilePath);
  }

  return null;
};
