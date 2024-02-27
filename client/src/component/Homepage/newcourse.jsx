import { useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../course/card"
const Newcourse = () =>{
    useEffect(() => {
        
        AOS.init({ duration: 500 });
      }, []);
    const course_1 = {
        altname: "algorithm",
        courseName: "Algorithm Design And Analysis",
        pg: "เป็นวิชาที่จะสอนใช้แนวคิดอย่างมีเหตุผลในการอธิบายวิธีการอย่างเป็นขั้นตอน",
        img: "https://cdn.discordapp.com/attachments/928273696588726312/1203430942774136972/algor.png?ex=65d11167&is=65be9c67&hm=b816851d65e1753f55fb10901fbd861fbde974b92b916f7091f2d6dbe6401248&",
        badge:"Algorithm"
      };
      const course_2 = {
        altname: "absdata",
        courseName: "Abstract Data Type",
        pg: "เป็นวิชาที่จะสอนวิธีการจัดเก็บข้อมูลในคอมพิวเตอร์เพื่อให้สามารถใช้งานได้อย่างมีประสิทธิภาพ",
        img: "https://cdn.discordapp.com/attachments/928273696588726312/1203433364560805988/abstract.png?ex=65d113a8&is=65be9ea8&hm=aa95ab93448ea53c525bc5450f751eaa63ec3a94627a5fd0b5cb826203a8b106&",
        badge:"Data Structure"
      };
      const course_3 = {
        altname: "discrete",
        courseName: "Discrete Mathematics",
        pg: "เป็นการศึกษาโครงสร้างทางคณิตศาสตร์ซึ่งมีลักษณะเป็นค่าเฉพาะเจาะจง และไม่ต่อเนื่อง ",
        img: "https://cdn.discordapp.com/attachments/928273696588726312/1203442322449104967/ales-nesetril-Im7lZjxeLhg-unsplash_1.png?ex=65d11c00&is=65bea700&hm=4a08a393f67113b6dcfffb3258d03273166033d4495303c40007dd6cffb48989&",
        badge:"Math"
      };
    return(
        <div className=" bg-homepage-img-1 h-auto bg-no-repeat bg-cover bg-fixed text-white font-kanit flex py-40 justify-center mx-auto px-24 " >
          <div data-aos="fade-up">
            <div className="m-10 " >
                <h1 className="underline underline-offset-8 text-bold text-lg md:text-2xl text-bold">
                    New Course
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <Card {...course_1} />
                <Card {...course_2} />
                <Card {...course_3} />
            </div>
          </div>
        </div>
    )
}
export default Newcourse;