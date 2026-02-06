import { Model, models, model, Schema } from "mongoose";

type NewPass = {
  email: string;
  password: string;
  newPassword: string;
};

const NewPassSchema = new Schema<NewPass>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    newPassword: { type: String, required: true },
  },
  { timestamps: true },
);

export const NewPass: Model<NewPass> =
  models["Password"] || model("Password", NewPassSchema);
