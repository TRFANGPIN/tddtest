import express, { Request, Response } from "express";
import { stringcalc } from "./codefileexample";

const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  let str = stringcalc(req.query.str as string);
  res.status(200).send({ val: str });
});
app.listen(3000, () => {
  console.log(`Server running on ${3000}`);
});
