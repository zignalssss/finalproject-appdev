import express from "express";
import { addQuiz } from "../controller/Quiz/addQuiz.mjs"
import { getQuizByID } from "../controller/Quiz/getQuizbyId.mjs";

const router = express.Router(); 

router.get("/getquizbyid/:id", getQuizByID);
router.post("/addquiz",addQuiz);


export default router;