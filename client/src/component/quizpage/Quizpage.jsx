import LoadingSpinner from "../Loading/LoadingSpinner";
import { axiosInstance } from "../../lib/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AfterNav from "../Navbar/afternavbar";
import axiosInstance from "../../lib/axios";

const QuizPage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false); // New state to track quiz completion
  const [quizPass,setQuizPass] = useState(false);
  const navigate = useNavigate();
  const questions = [
    {
      "question": "1. What time",
      "choices": [
        { "text": "00:00", "answer": false },
        { "text": "10:00", "answer": true },
        { "text": "01:00", "answer": false },
        { "text": "02:00", "answer": false }
      ]
    },
    {
      "question": "2. What time",
      "choices": [
        { "text": "00:00", "answer": false },
        { "text": "10:00", "answer": true },
        { "text": "01:00", "answer": false },
        { "text": "02:00", "answer": false }
      ]
    },
    {
      "question": "3. What time",
      "choices": [
        { "text": "00:00", "answer": false },
        { "text": "10:00", "answer": false },
        { "text": "01:00", "answer": true },
        { "text": "02:00", "answer": false }
      ]
    }
  ];

  const checkAns = (e, answer) => {
    e.preventDefault();
    if (answer) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true); // Set quizCompleted to true when all questions are answered
      const minScoreToPass = Math.floor(questions.length * 0.8); //80% correct
      if (score >= minScoreToPass) {
        setQuizPass(true);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/api/user/verify")
      setUserInfo(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      if (e.response.status === 500) {
        navigate("/signin");
      }
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
  <AfterNav userObj={userInfo} />
  <div className="flex justify-center items-center w-screen h-screen bg-cover bg-login_imge">
    <form className="bg-slate-700 p-12 rounded-[60px] bg-opacity-40 shadow-5xl border-white border-t-2 border-l-2 border-opacity-20 backdrop-filter w-2/6 h-1/1">
      <div className="flex justify-center text-white text-[50px] font-kanit">QUIZ</div>
      <div className="flex justify-center text-white text-[40px] font-kanit">{questions[currentQuestion].question}</div>
      <div className="text-black flex flex-col gap-y-5 items-center mt-6">
        {questions[currentQuestion].choices.map((choice, index) => (
          <button key={index} onClick={(e) => { checkAns(e, choice.answer) }} className='btn bg-white rounded-ms w-[350px] border-none hover:text-white hover:bg-cyan-500 hover:shadow-cyan-500 hover:text-base/[3px] hover:scale-105 duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]'>
            {choice.text}
          </button>
        ))}
      </div>
      {quizCompleted && (
        <div className="text-white text-center mt-6 font-bold">
          <h1>Your score: {score}</h1>
        </div>
      )}
      {quizPass && (
        <div className="text-white text-center mt-6 font-bold">
          <h1>Congratulations! You passed the quiz!</h1>
          <button className="btn bg-green-500 text-white rounded-lg px-4 py-2 mt-4">Claim Reward!</button>
        </div>
      )}
      {!quizPass && quizCompleted && (
        <div className="text-white text-center mt-6 font-bold">
          <h1>Sorry, you did not pass the quiz.</h1>
          <button className="btn bg-red-500 text-white rounded-lg px-4 py-2 mt-4" onClick={() => navigate("/allcourse")}>Go Back</button>
        </div>
      )}
    </form>
  </div>
</>

  );
};

export default QuizPage;
