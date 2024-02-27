import express from "express";
import { register } from "../controller/User/register.mjs"
import { login } from "../controller/User/login.mjs"
import { updatePoint } from "../controller/User/updatePoint.mjs";}

const router = express.Router(); 

router.post("/register",register);
router.post("/login",login);
router.put("/updatepoint",updatePoint)

export default router;