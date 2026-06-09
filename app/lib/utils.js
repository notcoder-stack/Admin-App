import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO);
    return db;
  } catch (error) {
    throw new Error(error);
  }
} 
