import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import UserRouter from "./routers/User.mjs";

dotenv.config();


const PORT = process.env.PORT;
const URI = process.env.MONGO_CLIENT_URI;
const app = express();

app.use(express.json());

export const client = new MongoClient(process.env.MONGO_CLIENT_URI)
export const db_name = "enrollDatabase"


app.get("/",(req,res) =>{
    res.send("Greeting!")
})

app.use("/api/user",UserRouter);

app.listen(PORT,()=>{
    console.log(`server is Running on http://localhost:${PORT}`);
})