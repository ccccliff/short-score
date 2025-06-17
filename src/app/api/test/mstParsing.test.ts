import { parsingKosdaq } from "@/app/api/kis/kosdaq-parsing/route";
import { parsingKospi } from "@/app/api/kis/kospi-parsing/route";
import * as mstParsingCache from "@/lib/mstParsingCache";

describe("parsingMst", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  }, 10);

  test("kosdaq.json is in cache", () => {
    const fakeData = [
      { shortCode: "123456", standardCode: "293483", name: "테스트" },
    ];
    const receivedData = { data: fakeData, message: "kosdaq_code 200 OK" };

    jest.spyOn(mstParsingCache, "getKosdaqJson").mockReturnValue(fakeData);

    const parsing = parsingKosdaq();

    expect(parsing).toEqual(receivedData);
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
    const fakeData = [
      { shortCode: "123456", standardCode: "293483", name: "테스트" },
    ];

    const receivedData = { data: fakeData, message: "kospi_code 200 OK" };

    jest.spyOn(mstParsingCache, "getKospiJson").mockReturnValue(fakeData);

    const parsing = parsingKospi();

    expect(parsing).toEqual(receivedData);
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
