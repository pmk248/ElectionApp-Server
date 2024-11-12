import { Router } from "express";
import { vote } from "../controllers/electionController/vote";
import { getAllCandidates } from "../controllers/electionController/getCandidates";
import { verifyToken } from "../middleware/verifyToken"

const router = Router();

router.get("/", getAllCandidates)
router.post("/vote", verifyToken, vote);

export default router;