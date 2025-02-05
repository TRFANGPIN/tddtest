"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codefileexample_1 = require("../codefileexample");
describe("sum calculation from string", () => {
    test("add a string containing numbers", () => {
        const str = "12//n:,456";
        let num = (0, codefileexample_1.stringcalc)(str);
        expect(num).toBe(18);
    });
});
