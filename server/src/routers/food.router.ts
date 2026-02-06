import { createNewFood } from "../controllers/foods";
import { Router } from "express";

export const foodRouter = Router();

foodRouter.post("/create-food", createNewFood);
// foodRouter.get("/user-by-id");
