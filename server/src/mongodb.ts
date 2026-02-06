import mongoose from "mongoose";

export const connectTMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
    console.log("connect to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
