import { Route,Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Signup from "./component/signup/RegisterPage"
import LoginPage from "./component/Login/LoginPage";
import Allcourse from "./component/Allcourse/allcourse";
export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/allcourse" element={<Allcourse/>}/>

            </Routes>
        </>
    )
}