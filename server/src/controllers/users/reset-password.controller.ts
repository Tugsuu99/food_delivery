import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User_Model } from "../../models";
import { verifyUserEmail } from "../../../utils/mail-utils";

// export const resetPassword = async (req: Request, res: Response) => {
//     try{
//         const {email} = req.body;

//         const user = await User_Model.findOne({ email });
//         if (!user)
//             return res.status(404).json({ message: "User not  found "});

//         const token = jwt.sign(
//             {userID: user._id },
//             "reset_secret",
//              { expiresIn: "15m" }
//         );
//            user.resetPasswordToken = token;
//     user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000);
//     await user.save();

//      const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

//     }
// };
