import { useState,useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../course/course"
const allcourse = () => {
  useEffect(() => {
   
    AOS.init({ duration: 500 });
  }, []);
  const course_1 = {
    altname: "algorithm",
    courseName: "Algorithm Design And Analysis",
    pg: "เป็นวิชาที่จะสอนใช้แนวคิดอย่างมีเหตุผลในการอธิบายวิธีการอย่างเป็นขั้นตอน",
    img: "https://cdn.discordapp.com/attachments/928273696588726312/1203430942774136972/algor.png?ex=65d11167&is=65be9c67&hm=b816851d65e1753f55fb10901fbd861fbde974b92b916f7091f2d6dbe6401248&",
    badge: "View"
  };
  const course_2 = {
    altname: "absdata",
    courseName: "Abstract Data Type",
    pg: "เป็นวิชาที่จะสอนวิธีการจัดเก็บข้อมูลในคอมพิวเตอร์เพื่อให้สามารถใช้งานได้อย่างมีประสิทธิภาพ",
    img: "https://cdn.discordapp.com/attachments/928273696588726312/1203433364560805988/abstract.png?ex=65d113a8&is=65be9ea8&hm=aa95ab93448ea53c525bc5450f751eaa63ec3a94627a5fd0b5cb826203a8b106&",
    badge: "View"
  };
  const course_3 = {
    altname: "discrete",
    courseName: "Discrete Mathematics",
    pg: "เป็นการศึกษาโครงสร้างทางคณิตศาสตร์ซึ่งมีลักษณะเป็นค่าเฉพาะเจาะจง และไม่ต่อเนื่อง ",
    img: "https://cdn.discordapp.com/attachments/928273696588726312/1203442322449104967/ales-nesetril-Im7lZjxeLhg-unsplash_1.png?ex=65d11c00&is=65bea700&hm=4a08a393f67113b6dcfffb3258d03273166033d4495303c40007dd6cffb48989&",
    badge: "View"
  };

  const course_4 = {
    altname: "database",
    courseName: "Databases Systems",
    pg: "เป็นการศึกษาโครงสร้างข้อมูลแบบพิเศษที่ใช้สำหรับเก็บ จัดการ และเรียกใช้ข้อมูล ",
    img: "https://cdn.discordapp.com/attachments/928273696588726312/1212110490688430170/63044.jpg?ex=65f0a4dc&is=65de2fdc&hm=5c02c85d005b566cd948f76c29087d0f70ab1889c78cda3707d683d7da13f0ec&",
    badge: "View"
  };
  const course_5 = {
    altname: "appdev",
    courseName: "Application Development ",
    pg: "เป็นการศึกษาการสร้างโปรแกรมคอมพิวเตอร์หรือชุดโปรแกรมเพื่อทำงานต่างๆ ที่ธุรกิจต้องการ ",
    img: "https://cdn.discordapp.com/attachments/928273696588726312/1212110469876158515/63042.jpg?ex=65f0a4d7&is=65de2fd7&hm=27a39762e93f756fb80bdb350001765b6a4847387178c57980d6ad92cc905ca9&",
    badge: "View"
  };
  const course_6 = {
    altname: "datacom",
    courseName: "Data Communication",
    pg: "เป็นการศึกษาความรู้กระบวนการถ่ายโอนหรือแลกเปลี่ยนข้อมูลกันระหว่างผู้ส่งและผู้รับ ",
    img: "https://cdn.discordapp.com/attachments/928273696588726312/1212110481104576592/63043.jpg?ex=65f0a4da&is=65de2fda&hm=6e71398048bdcd7a3eb8d45ab82d2d73eb6876ede4fc0609dda25b31fa2d2760&",
    badge: "View"
  };
  const courses = [course_1, course_2, course_3,course_4, course_5, course_6,course_1, course_2, course_3];
  
    return (
      <div className="  h-fulll h-screen bg-no-repeat bg-cover bg-homepage-img-1 text-white font-kanit flex py-40 justify-center mx-auto px-24 " >
        <div data-aos="fade-up">
          <div className="m-10 " >
            <h1 className="underline underline-offset-8 text-bold text-lg md:text-2xl text-bold">
              All Course
            </h1>                   
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
            {courses.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    )
  
}
export default allcourse;
