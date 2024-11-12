import { Router } from "express";
import { register } from "../controllers/accountController/register";
import { login } from "../controllers/accountController/login";
import { getUser } from "../controllers/accountController/getUser";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.post("/register", register)
router.post("/login", login)
router.get("/", verifyToken, getUser)

export default router;