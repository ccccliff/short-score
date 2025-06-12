import { getKisAccessToken } from "../get-token/route";

export const ssts_tr = async () => {
  const accessToken = await getKisAccessToken();
};
