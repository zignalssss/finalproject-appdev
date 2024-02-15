import { Route,Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import RegisterPage from "./component/signup/RegisterPage";
import AddCourse from "./adminpage/addCourse";
export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/signup" element={<RegisterPage/>}/>
                {/* <Route path="/signin" element={<Homepage/>}/> */}
                <Route path="/admin/addcourse" element={<AddCourse/>}></Route>
            </Routes>
        </>
    )
}