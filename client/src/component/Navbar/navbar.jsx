import { useEffect } from "react"
import { FaUserCircle } from "react-icons/fa";
import ButtonLink from "../buttonLink/ButtonLink"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function navbar(){
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);
    return (
        <div className="text-white p-1 font-inter bg-[#18181b] sticky top-0 z-[10]">
            <div>    
                <ul className=" list-none flex justify-end items-center m-4">
                    <li className="text-sm/[5px] pl-3 "><ButtonLink to = "/signup">SignUp</ButtonLink></li>
                    <li className="text-sm/[5px] pr-3 pl-3"><ButtonLink to = "/signin">SignIn</ButtonLink></li>
                </ul>
            </div>
        </div>
    )
}