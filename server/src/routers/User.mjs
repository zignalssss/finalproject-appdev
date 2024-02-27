import express from "express";
import { register } from "../controller/User/register.mjs"
import { login } from "../controller/User/login.mjs"
import { updatePoint } from "../controller/User/updatePoint.mjs";
import { UserCourse } from "../controller/User/adduserCourse.mjs";
const router = express.Router(); 

router.post("/register",register);
router.post("/login",login);
router.post("/adduserCourse",UserCourse)
router.put("/updatepoint",updatePoint)

export default router;