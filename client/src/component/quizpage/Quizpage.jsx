import LoadingSpinner from "../Loading/LoadingSpinner";
import { axiosInstance } from "../../lib/axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AfterNav from "../Navbar/afternavbar";


const QuizPage = () => {
  const {id} = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false); // New state to track quiz completion
  const [quizPass,setQuizPass] = useState(false);
  const [questions,setQuestions] = useState([])
  const navigate = useNavigate();
 

  const checkAns = (e, answer) => {
    e.preventDefault();
    if (answer) {
      if(!quizCompleted){
        setScore(score + 1);
      }
    }
    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true); // Set quizCompleted to true when all questions are answered
      const minScoreToPass = Math.floor(questions.length * 0.8); //80% correct
      if (score+1 >= minScoreToPass ) {
        setQuizPass(true);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const getReward = async (e) => {
    e.preventDefault();
    const Point_Add = {
      _id: userInfo._id,
      point_enroll: 50
    };
    const FinishCourseForUser = {
      _id:userInfo._id,
      course_id: parseInt(id)
  };
    try {
      if(userInfo.point + 50 > 250){
        alert("Limit Point is 150 Please Use Your Point!!!")
        navigate(`/video/${id}`)
      }else{
        await axiosInstance.post("/api/user/addpoint", Point_Add)
        await axiosInstance.post("/api/user/finishcourse", FinishCourseForUser)
          alert("Congratulations!")
          
          navigate(`/video/${id}`)
      }
   
    } catch (e) {
      console.log(e)
    }
  }
  
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/api/user/verify")
      const quiz = await axiosInstance.get(`/api/quiz/getquizbyid/${id}`)
      setQuestions(quiz.data.quiz)
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
            <button className="btn hover:bg-green-800 bg-green-700 shadow-md shadow-green-700/50 border-none transition-all duration-200 text-white rounded-lg px-4 py-2 mt-4" onClick={getReward}>Claim Reward!</button>
          </div>
        )}
        {!quizPass && quizCompleted && (
          <div className="text-white text-center mt-6 font-bold">
            <h1>Sorry, you did not pass the quiz.</h1>
            <button className="btn bg-red-500 text-white rounded-lg px-4 py-2 mt-4" onClick={() => navigate(`/video/${id}`)}>Go Back</button>
          </div>
        )}
      </form>
    </div>
    </>

  );
};

export default QuizPage;
