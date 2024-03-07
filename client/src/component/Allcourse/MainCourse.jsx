import { useState,useEffect } from "react";
import { axiosInstance } from "../../lib/axios";
import AfterNav from "../Navbar/afternavbar";
import LoadingSpinner from "../Loading/LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../course/course"
const MainCourse = () => {
  const [userInfo,setUserInfo] = useState([])
  const [data,setCoursedata] = useState([])
  const [loading, setLoading] = useState(true);

  const getUser = async()=>{
    try{
      const response = await axiosInstance.get("/api/user/verify")
      const datacourse = await axiosInstance.get("api/course/getallcourse")
      console.log(datacourse.data)
      setCoursedata(datacourse.data)
      setUserInfo(response.data);
      setLoading(false);
        
    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    getUser();
    AOS.init({ duration: 500 });
  }, []);
  
    if (loading) {
      return <LoadingSpinner />; 
    }

    return (
      <>
        <AfterNav userObj={userInfo} />
        <div className="bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit flex py-40 justify-center mx-auto px-24">
          <div data-aos="fade-up">
            <h1 className="m-10 underline underline-offset-8 text-bold text-lg md:text-2xl text-bold">
              All Course
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {data.map((course, index) => (
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
      </>
    );
    
  
}
export default MainCourse;
