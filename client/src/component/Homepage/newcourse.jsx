import { useEffect ,useState} from "react";
import { axiosInstance } from "../../lib/axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../course/card"


const Newcourse = () =>{
    const [courses,setCourses] = useState([]);
    const getNewCourse = async() =>{
      const newcourse = await axiosInstance.get("/api/course/getnewcourse");
      setCourses(newcourse.data);
    }
    useEffect(() => {
        getNewCourse();
        AOS.init({ duration: 500 });
      }, []);
    return(
        <div className=" bg-homepage-img-1 h-auto bg-no-repeat bg-cover bg-fixed text-white font-kanit flex py-40 justify-center mx-auto px-24 " >
          <div data-aos="fade-up">
            <div className="m-10 " >
                <h1 className="underline underline-offset-8 text-bold text-lg md:text-2xl text-bold">
                    New Course
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
            {courses.map((course, index) => (
                <Card
                  key={index}
                  altname={course.altname}
                  courseName={course.courseName}
                  pg={course.pg}
                  img={course.thumbnail_cover}
                  badge={course.badge}
                />
              ))}
            </div>
          </div>
        </div>
    )
}
export default Newcourse;