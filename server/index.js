import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';
import authRouter from "./routes/authroutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/userroutes.js";


const app = express();
const port = process.env.PORT || 8000

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

app.listen(port,()=>{
    console.log("Server started");
    connectDB()
})