import express from "express";
import { register } from "../controller/User/create_user.mjs"

const router = express.Router(); 

router.post("/register",register);

export default router;