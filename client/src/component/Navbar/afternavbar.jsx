import { useEffect } from "react"
import { axiosInstance } from "../../lib/axios";
import ButtonLink from "../buttonLink/ButtonLink"
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AfterNav({userObj}){
    const name = `${userObj.fname} ${userObj.lname}`
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);

    const navigate = useNavigate();
    const isClick = async() =>{
        await axiosInstance.post("/api/user/logout")
        .then( response => {
            navigate("/");
        })
    }
    return (
        <div className="navbar bg-base-100 text-white">
            <div className="navbar-start">
                <Link to="/allcourse"><div className="btn btn-ghost text-xl">Next Future</div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/allcourse">Home</Link></li>
                    <li>
                        <details>
                            <summary>Learning Path</summary>
                            <ul className="p-2">
                            <li><Link to="/webpath">Web Dev</Link></li>
                            <li><a>Algorithm</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 ">
                        {name} 
                        <div className="text-3xl">
                        <RxAvatar />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={isClick}>Logout</a></li>
                        <li><a>Setting</a></li>
                    </ul>
                </div>
              
            </div>
      </div>
    )
}