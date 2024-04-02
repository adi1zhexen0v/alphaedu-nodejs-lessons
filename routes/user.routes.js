import { Router } from "express";
import { updateUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/", getMe);
router.patch("/", updateUser);

export default router;
