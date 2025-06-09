import React from "react";
import { getKisAccessToken } from "./api/kis/get-token/route";
const page = async () => {
  let token = await getKisAccessToken();
  console.log(token);

  return <div>page</div>;
};

export default page;
