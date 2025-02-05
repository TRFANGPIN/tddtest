"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringcalc = void 0;
const stringcalc = (str) => {
    if (str.length == 0) {
        return 0;
    }
    let strarr = str.match(/\d/g);
    let value = strarr?.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    }, 0);
    console.log(strarr, value, str);
    return value;
};
exports.stringcalc = stringcalc;
