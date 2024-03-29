import express from "express";
import { register } from "../controller/User/register.mjs"
import { login } from "../controller/User/login.mjs"
import { updatePoint } from "../controller/User/updatePoint.mjs";
import { UserCourse } from "../controller/User/adduserCourse.mjs";
import { verifyToken } from "../controller/User/verifyToken.mjs";
import { addPoint } from "../controller/User/addPoint.mjs";
import { logout } from "../controller/User/logout.mjs";
import { updateData } from "../controller/User/updateData.mjs";
import { addFinishCourse } from "../controller/User/addFinishCourse.mjs";
const router = express.Router(); 


router.get("/verify",verifyToken);
router.post("/logout",logout);
router.post("/register",register);
router.post("/login",login);
router.post("/adduserCourse",UserCourse);
router.post("/finishcourse",addFinishCourse);
router.post("/updatepoint",updatePoint);
router.post("/addpoint",addPoint);
router.put("/updateData",updateData);


export default router;