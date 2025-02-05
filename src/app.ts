import express from "express";

const app = express();
app.use(express.json());
app.use("/test",)
app.listen(3000, () => {
  console.log(`Server running on ${3000}`);
});
