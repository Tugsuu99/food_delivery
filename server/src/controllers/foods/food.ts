// import express, { Application, Request, Response } from "express";
// import cors from "cors";
// import { configDotenv } from "dotenv";
// import { connectTMongoDB } from "../../mongodb";
// import { Food_Model } from "../../models/food_model";

// configDotenv();

// const app: Application = express();

// app.use(cors());
// app.use(express.json());

// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   completed: boolean;
// }

// let tasks: Task[] = [];
// let nextId = 1;

// app.post("/create-food", async (req: Request, res: Response) => {
//   try {
//     const { food_name, price } = req.body;
//     const food = await Food_Model.create({ food_name, price });
//     res.status(201).json({ message: "food created successfully", data: food });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating food", error });
//   }
// });

// app.get("/get-foods", async (req: Request, res: Response) => {
//   const foods = await Food_Model.find();
//   res.status(200).send({ message: "foods fetched successfully", data: foods });
// });
