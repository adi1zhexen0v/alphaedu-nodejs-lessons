import express from "express";
import * as authorsController from "../controllers/author.controller.js";

const router = express.Router();

router.get("/:id", authorsController.getAuthorById);
router.post("/", authorsController.createAuthor);

export default router;
