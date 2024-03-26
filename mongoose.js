import express from "express";
import mongoose from "mongoose";
import { User } from "./models/User.js";

const app = express();
const PORT = 3000;
const dbUrl = "mongodb://localhost:27017/lesson";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

async function start() {
  await mongoose.connect(dbUrl);
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
start();
