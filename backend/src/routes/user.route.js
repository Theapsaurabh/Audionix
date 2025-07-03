import { Router } from "express";
import { protectRoute } from "../middleware/auth.js";
import { getAllUsers } from "../controller/user.controller.js";
const router= Router()
router.get('/', protectRoute,getAllUsers );
// todo: getMessage
export default router;