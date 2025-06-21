import axios from "axios";
import { getAccessToken, setAccessToken } from "@/lib/tokenCache";
import { KisAccessTokenResponse } from "@/types/kis";
import { notFound } from "next/navigation";

//NOTE - Promise 반환하기 때문에 명시적으로 Promise 작성, 사실 없어도 async가 자동으로 promise 감싸줌
export const POST = async (): Promise<Response> => {
  const url = "https://openapi.koreainvestment.com:9443/oauth2/tokenP";
  const res = await axios.post<KisAccessTokenResponse>(
    url,
    {
      grant_type: "client_credentials",
      appkey: process.env.KIS_APP_KEY!,
      appsecret: process.env.KIS_APP_SECRET!,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  try {
    const cachedAccessToken = getAccessToken();
    //falsy값 전부처리 null뿐만 아니라 ""도 나올수 있음
    if (cachedAccessToken) {
      return Response.json({
        kisAccessToken: cachedAccessToken,
        message: "status 200 OK",
      });
    }

    setAccessToken(res.data.access_token, res.data.access_token_token_expired);
    return Response.json({
      kisAccessToken: res.data.access_token,
      message: "status 200 OK",
    });
  } catch (error) {
    console.log("access_token 요청 실패", error);
    return Response.json(
      {
        message: "fail to POST access_token",
        status: res.status,
      },
      notFound()
    );
  }
};
