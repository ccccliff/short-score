import { existsSync, readFileSync, writeFileSync } from "fs";

const accessTokenFilePath = "./tokenCache.json";

export const setAccessToken = (
  access_token: string,
  access_token_token_expired: string
) => {
  const data = { access_token, access_token_token_expired };
  writeFileSync(accessTokenFilePath, JSON.stringify(data));
};

export const getAccessToken = (): string | null => {
  if (!existsSync(accessTokenFilePath)) return null;

  const { access_token, access_token_token_expired } = JSON.parse(
    readFileSync(accessTokenFilePath, "utf-8")
  );

  if (new Date() < access_token_token_expired) {
    return access_token;
  }

  return null;
};
