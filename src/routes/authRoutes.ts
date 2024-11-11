import { Router } from "express";
import { register } from "../controllers/authController/register";

const router = Router();

router.post("/register", register)
router.post("/login", )

export default router;