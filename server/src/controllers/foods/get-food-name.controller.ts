import { Request, Response } from "express";
import { Food_Model } from "../../models";

export const getFoodByName = async (req: Request, res: Response) => {
  try {
    const { food_name, price } = req.body;

    const food = await Food_Model.create({
      food_name,
      price,
    });

    res.status(201).json({
      message: "Food created successfully",
      data: food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating food",
      error,
    });
  }
};
