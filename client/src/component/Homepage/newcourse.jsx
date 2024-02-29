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
        img: "https://cdn.discordapp.com/attachments/928273696588726312/1203430942774136972/algor.png?ex=65ecc0e7&is=65da4be7&hm=f4f158f0f9bfbd3d2d7e91c1c2f72a54fd51f63c3697141aaddfffff3a31d9d8&",
        badge:"Algorithm"
      };
      const course_2 = {
        altname: "absdata",
        courseName: "Abstract Data Type",
        pg: "เป็นวิชาที่จะสอนวิธีการจัดเก็บข้อมูลในคอมพิวเตอร์เพื่อให้สามารถใช้งานได้อย่างมีประสิทธิภาพ",
        img: "https://cdn.discordapp.com/attachments/928273696588726312/1203433364560805988/abstract.png?ex=65ecc328&is=65da4e28&hm=1bb5e02ba0a46a703989e7442d362a5ff862a2952c1b68533c69b62d1d68a92a&",
        badge:"Data Structure"
      };
      const course_3 = {
        altname: "discrete",
        courseName: "Discrete Mathematics",
        pg: "เป็นการศึกษาโครงสร้างทางคณิตศาสตร์ซึ่งมีลักษณะเป็นค่าเฉพาะเจาะจง และไม่ต่อเนื่อง ",
        img: "https://cdn.discordapp.com/attachments/928273696588726312/1203442322449104967/ales-nesetril-Im7lZjxeLhg-unsplash_1.png?ex=65eccb80&is=65da5680&hm=ad3097e8ada53f71fa41b49dec2ff3cb2c981df333ba8abd743c149035cd7c37&",
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