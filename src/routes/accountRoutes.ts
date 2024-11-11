import { Router } from "express";
import { register } from "../controllers/accountController/register";
import { login } from "../controllers/accountController/login";
import { getDetails } from "../controllers/accountController/getDetails";

const router = Router();

router.post("/register", register)
router.post("/login", login)
router.get("/", getDetails)

export default router;