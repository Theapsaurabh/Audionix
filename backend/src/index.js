import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js"
import fileUpload from "express-fileupload"
import path from "path"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import songRoutes from "./routes/song.route.js"
import albumRoutes from "./routes/album.route.js"
import statsRoute from "./routes/stats.route.js"
import { clerkMiddleware } from '@clerk/express'
import cors from "cors"


dotenv.config()
const app= express();
const __dirname= path.resolve();
app.use(express.json());
const PORT= process.env.PORT || 5000
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials:true
    }
))

app.use(clerkMiddleware()) // this will add auth to req object=> req.auth.userID
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:path.join(__dirname, "temp"),
    createParentPath:true, 
    limits:{
        fileSize: 10*1024*1024 // 10mb max file size
    }
}))

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoute);


connectDB()
// error handler
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:process.env.NODE_ENV==="production"?"Internal Server error":err.message
    })

})

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
    
})

// todo: Socket.io