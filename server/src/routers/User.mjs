import express from "express";
import { register } from "../controller/User/register.mjs"
import { login } from "../controller/User/login.mjs"

const router = express.Router(); 

router.post("/register",register);
router.put("/login",login);

export default router;