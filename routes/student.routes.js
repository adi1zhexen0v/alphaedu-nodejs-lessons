import express from "express";
import * as coursesController from "../controllers/course.controller.js";

const router = express.Router();

router.get("/:id", coursesController.getCourseById);
router.post("/:authorId", coursesController.createCourse);

export default router;
