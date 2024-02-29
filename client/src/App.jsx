import { Route,Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Signup from "./component/signup/RegisterPage"
import LoginPage from "./component/Login/LoginPage";
import LearningPath from "./component/learningPath/LearningPath";

import MainCourse from "./component/Allcourse/MainCourse"
//protect frontend routes
import PrivateRoutes from "./component/RouteProtected/PrivateRoute";

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
                </Route>

            </Routes>
        </>
    )
}