import express, { Router } from "express";
import { candidates } from "../controllers/electionController/candidates";
import { vote } from "../controllers/electionController/vote";

const router = Router();

router.get("/", candidates);
router.post("/vote", vote);

export default router;