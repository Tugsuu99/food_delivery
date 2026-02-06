import { Request, Response } from "express";
import { User_Model } from "../src/models";
import { verifyUserEmail } from "../utils/mail-utils";
import bcrypt from "bcrypt";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await User_Model.create({
      name,
      email,
      password: hashedPassword,
    });

    const token =
      // await verifyUserEmail(email, `?${process.env.BACKEND_API}/verify-user?token=${token}`);

      res
        .status(200)
        .send({ message: "user created successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
