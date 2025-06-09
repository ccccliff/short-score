import { parsingKosdaq } from "../kosdaq-parsing/route";
import { parsingKospi } from "../kis/kospi-parsing/route";
import * as mstParsingCache from "@/lib/mstParsingCache";

describe("parsingMst", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  }, 10);

  test("kosdaq.json is in cache", () => {
    const fakeData = [{ code: "123456", name: "테스트" }];
    jest.spyOn(mstParsingCache, "getKosdaqJson").mockReturnValue(fakeData);

    const parsing = parsingKosdaq();

    expect(parsing).toEqual(fakeData);
  });

  test("kosdaq.json is in cache but value is []", () => {
    jest.spyOn(mstParsingCache, "getKosdaqJson").mockReturnValue(undefined);

    const mockedSetKosdaqJson = jest
      .spyOn(mstParsingCache, "setKosdaqJson")
      .mockImplementation(() => {});

    parsingKosdaq();

    expect(mockedSetKosdaqJson).toHaveBeenCalled();

    mockedSetKosdaqJson.mockRestore();
  });

  test("kosdaq.json is not in cache", () => {
    jest.spyOn(mstParsingCache, "getKosdaqJson").mockReturnValue(null);

    const mockedSetKosdaqJson = jest
      .spyOn(mstParsingCache, "setKosdaqJson")
      .mockImplementation(() => {});

    parsingKosdaq();

    expect(mockedSetKosdaqJson).toHaveBeenCalled();

    mockedSetKosdaqJson.mockRestore();
  });

  test("kospi.json is in cache", () => {
    const fakeData = [{ code: "123456", name: "테스트" }];
    jest.spyOn(mstParsingCache, "getKospiJson").mockReturnValue(fakeData);

    const parsing = parsingKospi();

    expect(parsing).toEqual(fakeData);
  });

  test("kosdaq.json is in cache but value is []", () => {
    jest.spyOn(mstParsingCache, "getKospiJson").mockReturnValue(undefined);

    const mockedSetKospiJson = jest
      .spyOn(mstParsingCache, "setKospiJson")
      .mockImplementation(() => {});

    parsingKospi();

    expect(mockedSetKospiJson).toHaveBeenCalled();

    mockedSetKospiJson.mockRestore();
  });

  test("kospi.json is not in cache", () => {
    jest.spyOn(mstParsingCache, "getKospiJson").mockReturnValue(null);

    const mockedSetKospiJson = jest
      .spyOn(mstParsingCache, "setKospiJson")
      .mockImplementation(() => {});

    parsingKospi();

    expect(mockedSetKospiJson).toHaveBeenCalled();

    mockedSetKospiJson.mockRestore();
  });
});
