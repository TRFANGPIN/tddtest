"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const codefileexample_1 = require("./codefileexample");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    let str = (0, codefileexample_1.stringcalc)(req.query.str);
    res.status(200).send({ val: str });
});
app.listen(3000, () => {
    console.log(`Server running on ${3000}`);
});
