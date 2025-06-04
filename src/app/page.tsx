import React from "react";
import { getKisToken } from "./api/kis/getToken";
const page = async () => {
  let token = await getKisToken();
  console.log(token);

  return <div>page</div>;
};

export default page;
