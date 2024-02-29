import { useEffect } from "react"
import { FaUserCircle } from "react-icons/fa";
import ButtonLink from "../buttonLink/ButtonLink"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AfterNav(){
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);
    return (
        <div className="navbar bg-base-100 text-white">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Next Future</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Learning Path</summary>
                            <ul className="p-2">
                            <li><a>Web Application</a></li>
                            <li><a>Problem Solving</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Course</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
      </div>
    )
}