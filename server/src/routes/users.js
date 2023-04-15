import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/Users.js";

const router = express.Router();

// Sedning a POST request to register a user
router.post("/signup", async (req, res) => {
  // Storing username name and password.
  const { username, password } = req.body;

  //   Searching to see if the user already exists.
  const user = await userModel.findOne({ username });
  //   If the username exists, return a message saying the username already exists.
  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  }

  //   If the username is not taken, hash the user's password.
  const hashedPassword = await bcrypt.hash(password, 10);
  //   Create a new user with the collected username and password.
  const newUser = new userModel({
    username,
    password: hashedPassword,
  });
  //   Save the new user's credentials.
  await newUser.save();
  //   If the process completes, return a message saying the regristration was complete.
  res.json({ message: "User successfully registered" });
});

// Sending a POST request to sign a user in.
router.post("/login", async (req, res) => {
  // Storing username name and password.
  const { username, password } = req.body;
  //   Searching to see if the user already exists.
  const user = await userModel.findOne({ username });
  // If the username does not exist, return a message saying the username does not exist.
  if (!user) {
    return res.status(400).json({ message: "Username does not exist" });
  }
  // If the username exists, compare the password to the stored password.
  const isPasswordaValid = await bcrypt.compare(password, user.password);

  //   If the password is incorrect, return a message saying the username or password is incorrect.
  if (!isPasswordaValid) {
    return res.status(400).json({ message: "Invalid login credentials" });
  }

  //   If the password is correct, create a JWT token.
  //   CREATE ENVIORMENT VARIABLE FOR SECRET TOKEN
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

export { router as userRouter };
