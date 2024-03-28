import express from "express";
import authorsRoutes from "./author.routes.js";
import coursesRoutes from "./course.routes.js";
import studentsRoutes from "./student.routes.js";

export default function (app) {
  app.use(express.json());
  app.use("/authors", authorsRoutes);
  app.use("/courses", coursesRoutes);
  app.use("/students", studentsRoutes);
}
