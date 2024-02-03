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
                <ul className=" list-none flex justify-end items-center">
                    <li className="text-sm/[5px] pl-3 "><ButtonLink to = "/signup">SignUp</ButtonLink></li>
                    <li className="text-sm/[5px] pr-3 pl-3"><ButtonLink to = "/signin">SignIn</ButtonLink></li>
                    <div className="avatar">
                        <div className="w-10 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://cdn.discordapp.com/attachments/928273696588726312/1203384660923514940/user.png?ex=65d0e64c&is=65be714c&hm=96a20824110bffc52d6291502a2c24243f7b55f4b52452810f136f6289245e63&" />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}