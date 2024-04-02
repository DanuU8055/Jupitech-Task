import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import userRouter from "./router/router.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", userRouter);

app.listen(3001);

console.log("http://localhost:3001");
