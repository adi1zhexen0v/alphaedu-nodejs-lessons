import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import setupRoutes from "./routes/routes.js";
import setupSwagger from "./swagger.js";

const app = express();
const PORT = 4000;
const dbUrl =
  "mongodb+srv://mongouser:0fo9E6UTTr9csbJR@cluster0.sgal5gg.mongodb.net/alpha";

app.use(cors());

async function start() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");

    setupRoutes(app);
    setupSwagger(app);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

start();
