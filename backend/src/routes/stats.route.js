import { Router } from "express";

import { protectRoute, requiredAdmin } from "../middleware/auth.js";
import { getStats } from "../controller/stats.controller.js";
const router = Router();
router.get("/",protectRoute,requiredAdmin,getStats);
export default router;
