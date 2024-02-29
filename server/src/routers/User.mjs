import express from "express";
import { register } from "../controller/User/register.mjs"
import { login } from "../controller/User/login.mjs"
import { updatePoint } from "../controller/User/updatePoint.mjs";
import { UserCourse } from "../controller/User/adduserCourse.mjs";
import { getUser } from "../controller/User/getUser.mjs";
import { verifyToken } from "../controller/User/verifyToken.mjs";
const router = express.Router(); 

router.get("/getUser",getUser);
router.post("/verify",verifyToken);
router.post("/register",register);
router.post("/login",login);
router.post("/adduserCourse",UserCourse)
router.put("/updatepoint",updatePoint)

export default router;