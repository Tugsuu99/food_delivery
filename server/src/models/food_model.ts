import mongoose, { Model, models, model, Schema, Types } from "mongoose";

type Food = {
  food_name: string;
  price: string;
  image: string;
  ingredients: string;
  category: Types.ObjectId[];
  createdAt: Date;
  updatedAT: Date;
};

const FoodSchema = new Schema(
  {
    food_name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true },
);

export const Food_Model = models["Foods"] || model("Foods", FoodSchema);
