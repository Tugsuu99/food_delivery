import express, { Application, Request, Response } from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectTMongoDB } from "./mongodb";
import { foodRouter } from "./routers";
import { userRouter } from "./routers/user.router";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());

// app.use("/foods", foodRouter);
app.use("/users", userRouter);

app.listen(8000, () => {
  connectTMongoDB();
  console.log("http://localhost:8000");
});
