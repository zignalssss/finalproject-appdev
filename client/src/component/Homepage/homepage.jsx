import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../course/Card";
import ContactUS from "./contactus";

export default function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const course_1 = {
    altname: "algorithm",
    course: "Algorithm Design And Analysis",
    pg: "เป็นวิชาที่จะสอนใช้ Algorithm เพื่อเเก้ปัญหาต่างๆ",
    img: "https://cdn.discordapp.com/attachments/744501598230937620/1202948423297269801/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?ex=65cf5005&is=65bcdb05&hm=953233f15b30b8dc443a2ef703487463b4bc89428ec115fa8e2a32c769700304&",
  };
  const course_2 = {
    altname: "absdata",
    course: "Abstract Data Type",
    pg: "เป็นวิชาที่จะสอนเกี่ยวกับ Data Structure ต่างๆ",
    img: "https://cdn.discordapp.com/attachments/744501598230937620/1202948423297269801/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?ex=65cf5005&is=65bcdb05&hm=953233f15b30b8dc443a2ef703487463b4bc89428ec115fa8e2a32c769700304&",
  };
  const course_3 = {
    altname: "discrete",
    course: "Discrete Mathematics",
    pg: "เป็นการศึกษาโครงสร้างทางคณิตศาสตร์ซึ่งมีลักษณะเป็นค่าเฉพาะเจาะจง และไม่ต่อเนื่อง",
    img: "https://cdn.discordapp.com/attachments/744501598230937620/1202948423297269801/ales-nesetril-Im7lZjxeLhg-unsplash.jpg?ex=65cf5005&is=65bcdb05&hm=953233f15b30b8dc443a2ef703487463b4bc89428ec115fa8e2a32c769700304&",
  };
  return (
    <>
    <ContactUS/>
        <div className=" text-white font-kanit flex py-40 justify-center mx-auto px-24 " data-aos="fade-up">
          <div>
            <div className="m-10 ">
              <h1 className="underline-offset-8 text-bold text-2xl">
                New Course
              </h1>
            </div>
            <div className="grid grid-cols-3  md:grid-cols-3 gap-5">
              <Card {...course_1} />
              <Card {...course_2} />
              <Card {...course_3} />
            </div>
          </div>
        </div>
    </>
  );
}
