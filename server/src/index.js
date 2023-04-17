import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

//   CREATE ENVIORMENT VARIABLE FOR PASSWORD
mongoose.connect(
  `mongodb+srv://mack:mackmerntheman@nbas.j6sa02x.mongodb.net/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => {
  console.log("Server started");
});
