import { Router } from "express";

const router = Router();

router.get("/", getMe);
router.patch("/", updateUser);

export default router;
