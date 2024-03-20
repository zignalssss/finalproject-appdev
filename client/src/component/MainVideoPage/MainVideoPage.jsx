import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import AfterNav from "../Navbar/afternavbar";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
const MainVideoPage = () => {
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [index, setIndex] = useState(0);
  const [subcoursevideo, setSubcourseVideo] = useState([]);
  const [subcoursename, setSubcourseName] = useState([]);
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/api/user/verify");
      const courseDataByID = await axiosInstance.get(`/api/course/getcoursebyid/${id}`); 
      setUserInfo(response.data);
      setCourseInfo(courseDataByID.data);
      setSubcourseVideo(courseDataByID.data.sub_course);
      setSubcourseName(courseDataByID.data.sub_name_course);
      setLoading(false);
    } catch (e) {
      console.log(e);
      if(e.response.status === 500){
          navigate("/signin");
      }
    }
  };

  const handleClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  useEffect(() => {
    getUser();
  }, [index]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <AfterNav userObj={userInfo} />
      <div className="h-screen bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit flex py-20 mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full ">
            <div className="">
                <h3 className="text-xl font-bold underline underline-offset-8  mb-6">
                    {courseInfo.courseName}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="aspect-w-16 aspect-h-9">
                        <ReactPlayer
                            controls={true}
                            url={subcoursevideo[index]}
                            height={600}
                            width={1200}
                            volume={0.1}
                        />
                    </div>

                    <div className="ml-[400px]">
                        <h3 className=" ml-[30px] text-xl font-kanit font-semibold underline underline-offset-8 mb-4">
                            CONTENT
                        </h3>
                        <div className="bg-zinc-800 pb-5 rounded-3xl overflow-y-auto max-w-[650px] max-h-[600px]">
                            <div className="mt-4 md:mt-4">
                                <div className="flex justify-center flex-col items-center gap-1">
                                {subcoursename.map((name, idx) => (
                                  <div key={idx} onClick={() => handleClick(idx)}>     
                                    <a href="#" className={`block w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {name}
                                        </h5>
                                    </a>
                                  </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div>
                       <span className="ml-4 underline font-bold underline-offset-8 mt-5"> Quiz Get u Point ! : </span>
                        <Link to={`/quiz/${id}`}><button className="btn ml-[20px] mt-5 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Quiz</button></Link>
                        </div>
                        
                    </div>
                </div>
                  <h1 className="text-xl font-bold mt-10">
                  {subcoursename[index]}
                  </h1>
                 <div className="mt-4">
                  {courseInfo.pg}
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideoPage;
