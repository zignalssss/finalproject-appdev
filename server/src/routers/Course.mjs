import express from "express";
import { addCourse } from "../controller/Course/addCourse.mjs"
import { getCourse } from "../controller/Course/getCourse.mjs"

const router = express.Router(); 

router.post("/addcourse",addCourse);
router.get("/getallcourse",getCourse)

export default router;