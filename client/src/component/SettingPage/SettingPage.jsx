import {Link} from "react-router-dom";

const SettingPage = () =>{
    return(

        <div className="space-y-6 h-screen flex justify-center items-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-300 hover:text-4xl">
                <Link to="/allcourse">Glowing Shadow Text</Link>
            </h1>
        </div>
    )
}
export default SettingPage;