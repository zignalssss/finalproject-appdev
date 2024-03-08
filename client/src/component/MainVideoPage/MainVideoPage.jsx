import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import AfterNav from "../Navbar/afternavbar";
import LoadingSpinner from "../Loading/LoadingSpinner";
import Videocard from "../course/videocard";

const MainVideoPage = () => {
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [subcoursevideo, setSubcourseVideo] = useState([]);
  const [subcoursename, setSubcourseName] = useState([]);

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/api/user/verify");
      const courseDataByID = await axiosInstance.get(
        `/api/course/getcoursebyid/${id}`
      );
      setUserInfo(response.data);
      setCourseInfo(courseDataByID.data);
      setSubcourseVideo(courseDataByID.data.sub_course);
      setSubcourseName(courseDataByID.data.sub_name_course);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <AfterNav userObj={userInfo} />
      <div className="h-screen bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit flex py-20 mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full">
          <h3 className="text-xl font-bold underline underline-offset-8  mb-4">
            {courseInfo.courseName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="aspect-w-16 aspect-h-9">
              <ReactPlayer
                controls={true}
                url={
                  "https://www.youtube.com/watch?v=0X6tR7P6kZw&list=RD0X6tR7P6kZw&start_radio=1"
                }
                height={500}
                width="100%"
                volume={0.1}
              />
            </div>
            <div className="">
                <h3 className=" pl-[40px] text-xl font-kanit font-semibold underline underline-offset-8 mb-4">
                    CONTENT
                </h3>
            <div className="bg-zinc-800 rounded-3xl overflow-y-auto max-h-[500px]">
              <div className="mt-4 md:mt-">
                <div className="flex justify-center flex-col items-center">
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                    <Videocard/>
                  {/* {subcoursevideo.map((video, index) => (
                    <Videocard key={index} video={video} />
                  ))} */}
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="mt-4">{courseInfo.pg}</div>
        </div>
      </div>
    </div>
  );
};

export default MainVideoPage;
