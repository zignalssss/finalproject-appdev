import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import cors from "cors";
import UserRouter from "./routers/User.mjs";
import AddCourse from "./routers/Course.mjs";

dotenv.config();


const PORT = process.env.PORT;
const URI = process.env.MONGO_CLIENT_URI;
const app = express();

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173" || config.origin,
      credentials: true,
    })
  );

export const client = new MongoClient(URI)
export const db_name = "enrollDatabase"
export const SECRET = process.env.SECRET;


app.get("/",(req,res) =>{
    res.send("Greeting!")
})

app.use("/api/user",UserRouter);
app.use("/api/course",AddCourse)

app.listen(PORT,()=>{
    console.log(`server is Running on http://localhost:${PORT}`);
})