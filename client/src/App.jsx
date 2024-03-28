import { Route,Routes } from "react-router-dom";
import Homepage from "./component/Homepage/homepage";
import Signup from "./component/signup/RegisterPage"
import LoginPage from "./component/Login/LoginPage";
import LearningPath from "./component/learningPath/LearningPath";
import SettingPage from "./component/SettingPage/SettingPage";
import MainCourse from "./component/Allcourse/MainCourse"
import MainVideoPage from "./component/MainVideoPage/MainVideoPage";
import TheoreticalCSLearningPath from "./component/learningPath/LearningPath_algo";
//protect frontend routes
import PrivateRoutes from "./component/RouteProtected/PrivateRoute";
import Quizpage from "./component/quizpage/Quizpage";

export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<LoginPage/>}/>                           
                <Route element={<PrivateRoutes />}>
                    <Route path="/allcourse" element={<MainCourse/>}/>
                    <Route path="/webpath" element={<LearningPath/>}/>
                    <Route path="/video/:id" element={<MainVideoPage/>}/>
                    <Route path="/algopath" element={<TheoreticalCSLearningPath/>}/>
                    <Route path="/setting" element={<SettingPage/>}/>
                    <Route path="/quiz/:id" element={<Quizpage/>}/>
                </Route>
            </Routes>
        </>
    )
}