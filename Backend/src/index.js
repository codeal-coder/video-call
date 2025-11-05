import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { dbconnect } from "./config/dbConnect.js";
import userRoutes from "./routes/userRoute.js"
import { connectToSocket } from "./config/manageSocket.js";
import {Server} from "socket.io";
import {createServer} from "node:http"
import cors from "cors"

const app = express();
dotenv.config();

const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000));
app.use(cors());


app.use(express.json({limit:"100kb"}))
app.use(express.urlencoded({limit:"100kb", extended:true}));


app.get("/",(req,res)=>{
    return res.send("default")
})

app.use("/api/v1/users",userRoutes);

dbconnect();
server.listen(app.get("port"),()=>{
    console.log(`App is running on port ${app.get("port")} `);
    
})