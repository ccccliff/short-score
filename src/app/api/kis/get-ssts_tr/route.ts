import { POST } from "@/app/api/kis/get-token/route";

export const GET = async (slug: string) => {
  const accessToken = await POST();
};
