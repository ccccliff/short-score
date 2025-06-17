import { POST } from "@/app/api/kis/get-token/route";
import * as tokenCache from "@/lib/tokenCache";
import axios from "axios";
import fs from "fs";
import path from "path";

const aliveTime = "2999-06-10 12:00:00Z";
const staledTime = "1999-06-10 12:00:00Z";
const accessTokenFilePath = path.join(
  process.cwd(),
  "src",
  "data",
  "tokenCache.json"
);
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getAccessToken", () => {
  //**NOTE - 매 테스트마다 실행되는 함수
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();

    if (fs.existsSync(accessTokenFilePath)) {
      fs.writeFileSync(accessTokenFilePath, JSON.stringify({}));
    }
  }, 10);

  test("if aToken is in cache, return aToken(접속토큰)", async () => {
    //NOTE - getAccessToken을 돌렸을때 aToken이 리턴된다고 설정
    jest.spyOn(tokenCache, "getAccessToken").mockReturnValue("aToken");
    const aToken = await POST();

    expect(aToken).toBe("aToken");
    expect(mockedAxios.post).not.toHaveBeenCalled();
  });

  test("if aToken is not in cache, 새로토큰 받기 후 저장", async () => {
    jest.spyOn(tokenCache, "getAccessToken").mockReturnValue(null);

    const mockedSetToken = jest.spyOn(tokenCache, "setAccessToken");

    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: {
          access_token: "new-token",
          token_type: "Bearer",
          expires_in: 11111,
          access_token_token_expired: aliveTime,
        },
      })
    );

    const newToken = await POST();

    expect(newToken).toBe("new-token");
    expect(mockedSetToken).toHaveBeenCalled();
  });

  test("만료된 토큰이면 삭제", () => {
    const mockedUnlink = jest
      .spyOn(fs, "unlinkSync")
      .mockImplementation(() => {});

    jest.spyOn(tokenCache, "getAccessToken").mockImplementation(() => {
      fs.unlinkSync("some-path");
      return null;
    });

    const result = tokenCache.getAccessToken();

    expect(result).toBe(null);
    expect(mockedUnlink).toHaveBeenCalled();

    mockedUnlink.mockRestore();
  });
});
