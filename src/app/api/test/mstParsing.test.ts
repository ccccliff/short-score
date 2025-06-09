import { parsingKosdaq } from "../kosdaq-parsing/route";
import { parsingKospi } from "../kis/kospi-parsing/route";
import * as mstParsingCache from "@/lib/mstParsingCache";
import fs from "fs";

describe("parsingKosdaq", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  }, 10);

  test("kosdaq.json is in cache && kosdaq.json.data exist 일때만 ", () => {
    const fakeData = [{ code: "123456", name: "테스트" }];
    jest.spyOn(mstParsingCache, "getKosdaqJson").mockReturnValue(fakeData);

    const parsing = parsingKosdaq();

    expect(parsing).toEqual(fakeData);
  });
});
