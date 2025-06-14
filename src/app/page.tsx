import React from "react";
import { getKisAccessToken } from "./api/kis/get-token/route";
import { parsingKospi } from "./api/kis/kospi-parsing/route";
import { parsingKosdaq } from "./api/kosdaq-parsing/route";

const page = () => {
  let token = getKisAccessToken();
  let kospiJson = parsingKospi();
  let kosdaqJson = parsingKosdaq();

  console.log(token);

  return (
    <div>
      <p>{JSON.stringify(kosdaqJson.data)}</p>
      <p>{JSON.stringify(kospiJson.data)}</p>
    </div>
  );
};

export default page;
