import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function navbar(){
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);
    return (
        <div className="text-white p-1 font-inter bg-[#18181b] sticky top-0 z-[10]">
            <div className="" data-aos="fade-down">    
                <ul className=" list-none flex justify-end items-center">
                    <li className="text-sm/[5px] pl-3 ">SignUp</li>
                    <li className="text-sm/[5px] pr-3 pl-3">SignIn</li>
                    <div className="avatar">
                        <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}