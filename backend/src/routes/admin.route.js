import { Router } from "express";
import {  createAlbum, createSong, deleteAlbum,deleteSong  } from "../controller/admin.controller.js";
import { protectRoute, requiredAdmin } from "../middleware/auth.js";

const router= Router();
router.post("/songs",protectRoute, requiredAdmin,createSong);
router.delete("/songs/:id", protectRoute, requiredAdmin, deleteSong)
router.post("/album", protectRoute, requiredAdmin, createAlbum)
router.post("/album/:id", protectRoute, requiredAdmin,deleteAlbum )

export default router;