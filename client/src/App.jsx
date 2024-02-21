import { Route,Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Signup from "./component/signup/RegisterPage"
import SigninPage from "./component/Login/LoginPage";
import AddCourse from "./adminpage/addCourse";
import LearningPath from "./component/learningPath/LearningPath";
export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<SigninPage/>}/>
                <Route path="/webpath" element={<LearningPath/>}/>
                
                <Route path="/admin/addcourse" element={<AddCourse/>}></Route>
            </Routes>
        </>
    )
}