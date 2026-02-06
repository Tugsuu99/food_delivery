import { signUpController } from "../controllers/users";
import { signInController } from "../controllers/users";
import { Router } from "express";
import { verifyUser } from "../controllers/users/verify-user.controller";

export const userRouter = Router();

userRouter.post("/create-user", signUpController);
userRouter.post("/login-user", signInController);
userRouter.get("/verify-user", verifyUser);
