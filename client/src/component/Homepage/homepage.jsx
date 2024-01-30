import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function homepage(){
    useEffect(() =>{
        AOS.init({duration: 300})
    },[]);
    return(
        <>
            <div className = "h-fulll h-screen bg-no-repeat bg-cover bg-fixed bg-homepage-img-1 flex justify-center items-center">
                    <div className=" text-white font-kanit" data-aos="fade-up">
                        <div className=" flex flex-col text-center gap-y-5">
                            <h2 className="text-3xl font-medium">แพลตฟอร์มคอร์สเรียนออนไลน์</h2>
                            <h1 className="text-5xl font-bold">&lt; Online Course for Computer Engineering /&gt;</h1>
                            <h2 className="text-3xl font-medium">อัพสกิลความรู้เพื่อคุณโดยเฉพาะ</h2>
                        </div>
                    </div>
            </div>
            <div className="h-fulll h-screen bg-no-repeat bg-cover bg-homepage-img-2 flex justify-center items-center">
                <div className="grid grid-rows-3 grid-cols-6 gap-3" data-aos="fade-up">
                    <div class="col-start-1 col-span-3">
                        <div>
                            <h1 className=" text-white font-kanit text-center text-3xl font-medium">Contact Us</h1>
                        </div>
                        <div className="flex flex-col gap-y-5 gap-x-5 text-white " >
                                <div className=" inline-flex ">
                                    <span className="text-3xl"><BiLogoGmail/></span>
                                    <span className="text-2xl font-kanit">: contact.work@gmail.com</span>
                                </div>
                                <div className=" inline-flex ">
                                    <span className="text-3xl"> <FaPhoneSquareAlt/></span>
                                    <span className="text-2xl font-kanit">: 123-4556-7890</span> 
                                </div>
                                <div className=" inline-flex ">
                                    <span className="text-3xl"><FaGithubSquare/></span>
                                    <span className="text-2xl font-kanit">: git_Contact</span>
                                </div>
                        </div>
                    </div>

                    <div class="row-start-2 col-end-6 col-span-2 ">
                        <div className=" text-white font-kanit tex text-center">                     
                                <h2 className="text-3xl font-medium">ออกแบบเนื้อหามาให้ครอบคลุมต่อทักษะที่คุณต้องใช้</h2>
                                <h2 className="text-3xl font-medium"> เพื่อทักษะใหม่ๆ ที่จำเป็นต่อคุณโดยเฉพาะ</h2>            
                        </div> 
                    </div>
                    <div class="col-start-1 col-end-7 ">04</div>
        
                </div> 
            </div>
        </>
    )
}