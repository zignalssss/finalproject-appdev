import { useEffect } from "react"
import { axiosInstance } from "../../lib/axios";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AfterNav({userObj}){
    const name = `${userObj.fname} ${userObj.lname}`
    const point = userObj.point;
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);

    const navigate = useNavigate();
    const isClick = async() =>{
        await axiosInstance.post("/api/user/logout")
        .then( response => {
            localStorage.removeItem('IsLog');
            navigate("/");
        })
    }
    return (
        <div className="bg-[#18181b] sticky top-0 z-[10]">
            <div className="navbar bg-base-100 text-white ">
                <div className="navbar-start">
                    <h1 className="ml-3 bg-gradient-to-r from-[#c8c9d9] via-[#8bcbe4] to-[#abaee9]  text-transparent bg-clip-text  text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:drop-shadow-[0_0_20px_rgba(0,0,255,0.6)] transition-all duration-200 hover:text-2xl">
                        <Link to="/allcourse">Next Future</Link>
                    </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1">
                        <li><Link to="/allcourse">Home</Link></li>
                        <li>
                            <details>
                                <summary>Learning Path</summary>
                                <ul className="p-2 bg-[#18181b]">
                                    <li><Link to="/webpath">Web Dev</Link></li>
                                    <li><a>Algorithm</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="mr-5 ">Your Point: {point}</span>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 shadow-md shadow-zinc-200">
                            {name} 
                            <div className="text-3xl">
                            <RxAvatar />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#18181b] rounded-box w-52 ">
                            <li><a onClick={isClick}>Logout</a></li>
                            <li><Link to="/setting">Setting</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}