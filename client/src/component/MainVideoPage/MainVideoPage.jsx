import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import AfterNav from "../Navbar/afternavbar";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveNav from "../Navbar/responsivenav";

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
      if (e.response.status === 500) {
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

  const userFinish = userInfo.F_courses;
  const IsFinish = userFinish.includes(parseInt(id));

  // Determine the screen width
  const screenWidth = window.innerWidth;
  // Conditionally render the appropriate navbar based on screen width
  const NavbarComponent = screenWidth < 1300 ? ResponsiveNav : AfterNav;

  return (
    <div>
      <NavbarComponent userObj={userInfo} />
      <div className="md:h-screen bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-full ">
            <h3 className="text-xl font-bold underline mb-6">{courseInfo.courseName}</h3>
            {
              screenWidth < 500 ?
                <ReactPlayer
                  controls={true}
                  url={subcoursevideo[index]}
                  height={"100%"}
                  width={"100%"}
                  volume={0.1}
                />
                :
                screenWidth > 500 && screenWidth < 1300 ? 
                <ReactPlayer
                  controls={true}
                  url={subcoursevideo[index]}
                  height={300}
                  width={600}
                  volume={0.1}
                />
                :
                <ReactPlayer
                  controls={true}
                  url={subcoursevideo[index]}
                  height={600}
                  width={1200}
                  volume={0.1}
                />
            }
            <div className="mt-4">
              <h1 className="text-xl font-bold">{subcoursename[index]}</h1>
              <p>{courseInfo.pg}</p>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <h3 className="text-xl font-kanit font-semibold underline mb-4 ml-[20px]">CONTENT</h3>
            <div className="overflow-y-auto max-h-[400px] flex flex-col gap-4">
              {subcoursename.map((name, idx) => (
                <div key={idx} onClick={() => handleClick(idx)}>
                  <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                  </a>
                </div>
              ))}
            </div>
            {!IsFinish && (
              <div>
                <span className="ml-4 underline font-bold mt-5"> Quiz Get u Point ! : </span>
                <Link to={`/quiz/${id}`}>
                  <button className="btn ml-4 mt-5 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">Quiz</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideoPage;
