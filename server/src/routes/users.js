import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/Users.js";

const router = express.Router();
const app = express();

// Sedning a POST request to register a user
router.post("/signup", async (req, res) => {
  // Storing username name and password.
  const { firstName, lastName, username, password } = req.body;

  //   Searching to see if the user already exists.
  const existingUser = await userModel.findOne({ username });
  //   If the username exists, return a message saying the username already exists.
  if (existingUser) {
    return res.status(400).json({ message: "User already exists!" });
  }
  //   If the username is not taken, hash the user's password.
  const hashedPassword = await bcrypt.hash(password, 10);
  //   Create a new user with the collected username and password.
  const newUser = new userModel({
    firstName,
    lastName,
    username,
    password: hashedPassword,
  });
  //   Save the new user's credentials.
  await newUser.save();
  //   If the process completes, return a message saying the regristration was complete.
  res.status(201).json({ message: "User successfully registered" });
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
    return res.status(400).json({ message: "Invalid username or password" });
  }

  //   If the password is correct, create a JWT token.
  //   CREATE ENVIORMENT VARIABLE FOR SECRET TOKEN
  const token = jwt.sign({ id: user._id }, "secret");
  // const firstName = await userModel.findOne({ firstName });

  res.json({
    token,
    userID: user._id,
  });
});

// Sending a PATCH request to update a user's username
router.patch("/dashboard", async (req, res) => {
  // Storing username
  const { username } = req.body;

  return res.status(200).json({ message: username });

  // const user = await userModel.findOneAndUpdate({ username });
});

export { router as userRouter };
