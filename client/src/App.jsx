import { Route,Routes } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                {/* <Route path="/signup" element={<Homepage/>}/>
                <Route path="/signin" element={<Homepage/>}/> */}

            </Routes>
        </>
    )
}