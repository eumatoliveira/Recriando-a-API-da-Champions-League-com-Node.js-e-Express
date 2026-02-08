import { Router } from "express";
import * as ClubController from "../controllers/clubs.controller.js";

const router = Router();

router.get("/clubs", ClubController.getClubs);

export default router;
