import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPublicPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";
import { authUser, checkIsManager } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authUser, checkIsManager, createPost);
router.patch("/:id", authUser, checkIsManager, updatePost);
router.delete("/:id", authUser, checkIsManager, deletePost);
router.get("/", authUser, getAllPosts);
router.get("/public", getPublicPosts);
router.get("/:id", getPostById);

export default router;
