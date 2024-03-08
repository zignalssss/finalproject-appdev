import express from "express";
import { addCourse } from "../controller/Course/addCourse.mjs"
import { getCourse } from "../controller/Course/getCourse.mjs"
import { getNewCourse } from "../controller/Course/getNewCourse.mjs";
import { getcourseByID } from "../controller/Course/getcourseByID.mjs";
const router = express.Router(); 

router.get("/getallcourse",getCourse);
router.get("/getnewcourse",getNewCourse);
router.get("/getcoursebyid/:id",getcourseByID);
router.post("/addcourse",addCourse);


export default router;