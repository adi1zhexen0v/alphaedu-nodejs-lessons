import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPublicPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

router.post("/", createPost); // isManager: true
router.patch("/:id", updatePost); // isManager: true
router.delete("/:id", deletePost); // isManager: true
router.get("/", getAllPosts); // isManager: false
router.get("/public", getPublicPosts);
router.get("/:id", getPostById); // isManager: false

export default router;
