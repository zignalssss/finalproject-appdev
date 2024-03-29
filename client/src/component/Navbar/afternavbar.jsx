import { useEffect } from "react"
import { axiosInstance } from "../../lib/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AfterNav({userObj}){
    const name = `${userObj.fname} ${userObj.lname}`
    const point = userObj.point;
    const avatar = userObj.img;
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
                    <h1 className="ml-3 font-bold text-white drop-shadow-[0_0_5px_linear-gradient( to right, pink-500 , via-red-400,violet-500)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-200">
                        <span className="bg-gradient-to-r from-pink-500 via-red-400 to-violet-500 bg-clip-text text-transparent text-xl hover:text-white transition-all duration-300"><Link to="/allcourse">Next Future</Link></span>
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
                                    <li><Link to="/algopath">Algorithm</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="mr-5 ">Your Point: {point}</span>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 shadow-[0_0_10px_rgba(255,255,255,1)] shadow-zinc-200">
                            {name} 
                            <div className="avatar">
                                <div className="w-[40px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={avatar} />
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#18181b] rounded-box w-52 ">
                            <li><Link to="/setting">Setting</Link></li>
                            <li><a onClick={isClick}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}