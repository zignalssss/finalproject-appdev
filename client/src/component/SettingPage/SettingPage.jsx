import {Link} from "react-router-dom";

const SettingPage = () =>{
    return(

        <div className="space-y-6 h-screen flex justify-center items-center">
            <div className="mockup-browser border bg-white">
            <div className="mockup-browser-toolbar">
                <div className="input">https://nextfuture.com/user/setting</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
        </div>

            {/* <h1 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-300 hover:text-4xl">
                <Link to="/allcourse">Glowing Shadow Text</Link>
            </h1>
            <div class="ms-52 my-10 text-5xl font-extrabold">
                <span class="animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent"> Tailwind CSS Animation </span>
            </div> */}
        </div>
    )
}
export default SettingPage;