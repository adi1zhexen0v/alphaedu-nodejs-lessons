import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import setupRoutes from "./routes/routes.js";
import setupSwagger from "./swagger.js";
import "dotenv/config";

const app = express();
const PORT = 4000;

app.use(cors());

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL);
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
