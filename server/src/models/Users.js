import mongoose from "mongoose";

// Create
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
});

export const userModel = mongoose.model("users", userSchema);
