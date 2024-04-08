import { Router } from "express";
import { updateUser, getMe } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authUser, getMe);
router.patch("/", authUser, updateUser);

export default router;
