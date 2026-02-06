import { Model, models, model, Schema, Types } from "mongoose";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

type User = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  orderedFoods: Types.ObjectId[];
  ttl: Date;
  isVerified: boolean;
};

const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      required: false,
    },
    orderedFoods: {
      type: [Schema.Types.ObjectId],
      ref: "Food",
      default: [],
    },
    ttl: {
      type: Date,
      required: true,
      default: () => new Date(Date.now() + 1000 * 60 * 60),
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  { timestamps: true },
);

export const User_Model: Model<User> =
  models["Users"] || model("Users", UserSchema);
