import { Router } from "express";
import {  checkAdmin, createAlbum, createSong, deleteAlbum,deleteSong  } from "../controller/admin.controller.js";
import { protectRoute, requiredAdmin } from "../middleware/auth.js";

const router= Router();
router.use(protectRoute, requiredAdmin)
router.get("/check" ,checkAdmin );
router.post("/songs",createSong);
router.delete("/songs/:id", deleteSong)
router.post("/album", createAlbum)
router.post("/album/:id",deleteAlbum )

export default router;