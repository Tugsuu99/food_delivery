import { Request, Response } from "express";
import { User_Model } from "../../models";
import bcrypt from "bcrypt";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User_Model.findOne({ email });

    if (!user) return res.status(404).send({ message: "user not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).send({ message: "user not found" });

    res
      .status(200)
      .send({ message: "user signed in successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error signing in", error: error });
  }
};
