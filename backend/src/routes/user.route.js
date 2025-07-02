import { Router } from "express";
import { protectRoute } from "../middleware/auth.js";
const router= Router()
router.get('/', (req,res)=>{
    
    res.send('User route with get method');
});
export default router;