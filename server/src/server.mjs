import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from "cors";
import UserRouter from "./routers/User.mjs";
import AddCourse from "./routers/Course.mjs";
import Quiz from "./routers/Quiz.mjs"
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import multer from "multer";
dotenv.config({path:'../.env'})


const PORT = process.env.PORT;
const URI = process.env.MONGO_CLIENT_URI;
const app = express();

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json());
app.use(
    cors({
      origin: process.env.origin,
      credentials: true,
    })
  );

export const client = new MongoClient(URI)
export const db_name = "enrollDatabase"
export const SECRET = process.env.SECRET;


const multerMid = multer({
  storage: multer.memoryStorage(),
});
app.use(multerMid.single("file"));

app.get("/",(req,res) =>{
    res.send("Greeting!")
})

app.use("/api/user",UserRouter);
app.use("/api/course",AddCourse);
app.use("/api/quiz",Quiz);
app.listen(PORT,()=>{
    console.log(`server is Running on http://localhost:${PORT}`);
})