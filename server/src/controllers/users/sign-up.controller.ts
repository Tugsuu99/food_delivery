import { Request, Response } from "express";
import { User_Model } from "../../models";
import { verifyUserEmail } from "../../utils/mail-utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isVerified } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User_Model.create({
      name,
      email,
      password: hashedPassword,
      isVerified: false,
    });

    const token = jwt.sign({ userId: user._id }, "hello", { expiresIn: "2h" });
    await verifyUserEmail(
      email,
      `${process.env.BACKEND_API}/users/verify-user?token=${token}`,
    );

    res
      .status(200)
      .send({ message: "sent verify link to your email", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
