import { useEffect } from "react"
import ButtonLink from "../buttonLink/ButtonLink"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AfterNav({userObj}){
    const name = `${userObj.data.fname} ${userObj.data.lname}`
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);
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
                            <li><Link to="/webpath">Web Application</Link></li>
                            <li><a>Problem Solving</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
               <span>{name}</span>
            </div>
      </div>
    )
}