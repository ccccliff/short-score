import axios from "axios";

export async function getKisToken(): Promise<string> {
  const url = "https://openapi.koreainvestment.com:9443/oauth2/tokenP";

  const res = await axios.post(
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

  return res.data;
}
