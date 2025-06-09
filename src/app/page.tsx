import React from "react";
import { getKisAccessToken } from "./api/kis/get-token/route";
import { parsingKospi } from "./api/kis/kospi-parsing/route";
import { parsingKosdaq } from "./api/kosdaq-parsing/route";

const page = async () => {
  let token = await getKisAccessToken();
  let kospiJson = await parsingKospi();
  let kosdaqJson = await parsingKosdaq();

  return (
    <div>
      <p>{JSON.stringify(kosdaqJson)}</p>
    </div>
  );
};

export default page;
