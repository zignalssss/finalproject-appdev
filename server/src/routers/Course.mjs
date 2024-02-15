import express from "express";
import { addCourse } from "../controller/Course/addCourse.mjs"

const router = express.Router(); 

router.post("/addcourse",addCourse);

export default router;