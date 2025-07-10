import { Router } from "express";
import { protectRoute } from "../middleware/auth.js";
import { getAllUsers } from "../controller/user.controller.js";

const router = Router();

router.get('/', protectRoute, getAllUsers);




export default router;
