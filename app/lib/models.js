import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const productSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
    },
    Price: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    size: {
      type: Number,
    },
    Stock: {
      type: Number,
      required: true,
      min: 0,
    },
    Color: {
      type: String,
    },
    Desc: {
      type: String,
    },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
