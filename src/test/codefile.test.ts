import { stringcalc } from "../codefileexample";

describe("sum calculation from string", () => {
  test("add a string containing numbers", () => {
    const str = "12//n:,456";
    let num = stringcalc(str);
    expect(num).toBe(18);
  });
  test("add a string containing numbers", () => {
    const str = ";.,P987";
    let num = stringcalc(str);
    expect(num).toBe(24);
  });
});
