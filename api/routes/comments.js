import { Router } from "express";
import { getComments, addComment } from "../controllers/comment.js";

const router = Router();

router.get("/", getComments);
router.post("/", addComment);

export default router;
