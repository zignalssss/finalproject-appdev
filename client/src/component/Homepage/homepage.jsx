import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Card from "../course/card";

export default function homepage(){
    useEffect(() =>{
        AOS.init({duration: 500})
    },[]);
    const course_1 = {  altname:"algorithm",
                        course:"Algorithm Design And Analysis",
                        pg:"เป็นวิชาที่จะสอนใช้ Algorithm เพื่อเเก้ปัญหาต่างๆ",
                        img:"https://cdn.discordapp.com/attachments/744501598230937620/1202948423297269801/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?ex=65cf5005&is=65bcdb05&hm=953233f15b30b8dc443a2ef703487463b4bc89428ec115fa8e2a32c769700304&"
    }
    const course_2 = {  altname:"absdata",
                        course:"Abstract Data Type and Problem Solving",
                        pg:"เป็นวิชาที่จะสอนเกี่ยวกับ Data Structure ต่างๆ",
                        img:"https://cdn.discordapp.com/attachments/744501598230937620/1202948423297269801/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?ex=65cf5005&is=65bcdb05&hm=953233f15b30b8dc443a2ef703487463b4bc89428ec115fa8e2a32c769700304&"
    }
    const course_3 = {  altname:"discrete",
                        course:"Discrete Mathematics",
                        pg:"เป็นการศึกษาโครงสร้างทางคณิตศาสตร์ซึ่งมีลักษณะเป็นค่าเฉพาะเจาะจง และไม่ต่อเนื่อง",
                        img:"https://cdn.discordapp.com/attachments/744501598230937620/1202948423297269801/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?ex=65cf5005&is=65bcdb05&hm=953233f15b30b8dc443a2ef703487463b4bc89428ec115fa8e2a32c769700304&"
    }
    return(
        <>
            <div className = "h-fulll h-screen bg-no-repeat bg-cover bg-fixed bg-homepage-img-1 flex justify-center items-center">
                    <div className=" text-white font-kanit" data-aos="fade-up">
                        <div className=" flex flex-col text-center gap-y-5">
                            <h2 className="text-1xl font-medium">แพลตฟอร์มคอร์สเรียนออนไลน์</h2>
                            <h1 className="text-3xl font-bold">&lt; Online Course for Computer Engineering /&gt;</h1>
                            <h2 className="text-1xl font-medium">อัพสกิลความรู้เพื่อคุณโดยเฉพาะ</h2>
                        </div>
                    </div>
            </div>
            <div className="h-fulll h-screen bg-no-repeat bg-cover bg-homepage-img-2 flex justify-center items-center">
                
            <div class="grid grid-cols-1 md:grid-cols-6 gap-3" data-aos="fade-up">
                <div class="col-span-1 md:col-start-1 md:col-span-3">
                    <div class="m-10">
                        <h1 class="text-white font-kanit text-center text-2xl md:text-2xl font-extrabold">Contact Us</h1>
                    </div>
                    <div class="text-white flex flex-col gap-y-5 items-center">
                        <div class="inline-flex">
                            <span class="text-3xl md:text-2xl"><BiLogoGmail/></span>
                            <span class="text-lg md:text-1xl font-kanit">: contact.work@gmail.com</span>
                        </div>
                        <div class="inline-flex">
                            <span class="text-3xl md:text-2xl"><FaPhoneSquareAlt/></span>
                            <span class="text-lg md:text-1xl font-kanit">: 123-4556-7890</span> 
                        </div>
                        <div class="inline-flex">
                            <span class="text-3xl md:text-2xl"><FaGithubSquare/></span>
                            <span class="text-lg md:text-1xl font-kanit">: git_Contact</span>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 md:col-start-3 md:col-span-3">
                    <div class="text-white font-kanit text-center text-balance">                     
                        <h2 class="text-1xl md:text-1xl font-medium">ออกแบบเนื้อหามาให้ครอบคลุมต่อทักษะที่คุณต้องใช้ เพื่อทักษะใหม่ๆ ที่จำเป็นต่อคุณโดยเฉพาะ</h2>
                    </div> 
                </div>
            </div>


            </div>
            <div className = "h-fulll h-screen bg-no-repeat bg-cover bg-fixed bg-homepage-img-1 flex justify-center items-center">
                    <div className=" text-white font-kanit" data-aos="fade-up">
                        <div>
                            <div className="m-10  ">
                                <h1 className="underline-offset-8 text-bold text-2xl">
                                    New Course
                                </h1>
                            </div>
                            <div className="flex flex-row gap-x-5">
                                <Card {...course_1}/>
                                <Card {...course_2}/>
                                <Card {...course_3}/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}