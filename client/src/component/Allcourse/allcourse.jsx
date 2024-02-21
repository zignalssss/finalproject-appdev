import { useEffect } from "react";
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
    img: "https://cdn.discordapp.com/attachments/1199804981310652577/1204827769666674729/Database.jpg?ex=65d6264c&is=65c3b14c&hm=62703539fea5f7a68bbcad37b3e425ea2fb4f94b04379fbdc072775799075fbd&",
    badge: "View"
  };
  const course_5 = {
    altname: "appdev",
    courseName: "application development ",
    pg: "เป็นการศึกษาการสร้างโปรแกรมคอมพิวเตอร์หรือชุดโปรแกรมเพื่อทำงานต่างๆ ที่ธุรกิจต้องการ ",
    img: "https://cdn.discordapp.com/attachments/1199804981310652577/1204827768605380738/App_Dev.jpg?ex=65d6264c&is=65c3b14c&hm=6563f2f3240134bcf790b444b6f25bb9309bac3231481faefc8bbb8d5d7dbd67&",
    badge: "View"
  };
  const course_6 = {
    altname: "datacom",
    courseName: "Data Communication",
    pg: "เป็นการศึกษาความรู้กระบวนการถ่ายโอนหรือแลกเปลี่ยนข้อมูลกันระหว่างผู้ส่งและผู้รับ ",
    img: "https://cdn.discordapp.com/attachments/1199804981310652577/1204827769209622618/Data_Com.jpg?ex=65d6264c&is=65c3b14c&hm=58fa9ea6cf152ad8bfc571e979e8dcddd67927aad003418286ea1639956d3f64&",
    badge: "View"
  };
  const courses = [course_1, course_2, course_3,course_4, course_5, course_6,course_1, course_2, course_3];

  return (
    
    <div className=" bg-homepage-img-1 h-auto bg-no-repeat bg-cover bg-fixed text-white font-kanit flex py-40 justify-center mx-auto px-24 " >
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
