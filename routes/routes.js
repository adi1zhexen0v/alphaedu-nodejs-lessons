import express from "express";
import authRoutes from "./auth.routes.js";
import postRoutes from "./post.routes.js";
import userRoutes from "./user.routes.js";

export default function (app) {
  app.use(express.json());
  app.use("/auth", authRoutes);
  app.use("/posts", postRoutes);
  app.use("/users", userRoutes);
}
