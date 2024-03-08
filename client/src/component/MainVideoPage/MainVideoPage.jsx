import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import AfterNav from "../Navbar/afternavbar";
import LoadingSpinner from "../Loading/LoadingSpinner";

const MainVideoPage = () => {
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo,setUserInfo] = useState([]);
  const [videoselect,setVideoSelect] = useState(0);
  const getUser = async()=>{
    try{
      const response = await axiosInstance.get("/api/user/verify")
      const courseDataByID = await axiosInstance.get(`/api/course/getcoursebyid/${id}`)
      setUserInfo(response.data);
      setCourseInfo(courseDataByID.data)
      setLoading(false);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getUser();
    // fetchVideoData();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />; 
  }

  return (
    <div>
        <AfterNav userObj={userInfo} />
        <div className="h-screen bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit flex py-20 mx-auto px-24">
        <div className="w-full">
            <h3 className="text-xl font-semibold mb-4">{courseInfo.courseName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer controls={true} url ={"https://www.youtube.com/watch?v=0X6tR7P6kZw&list=RD0X6tR7P6kZw&start_radio=1"} height={500} width={1000} volume={0.1}/>
                </div>
                <div className="flex justify-center">
                    test
                </div>          
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="mt-10">
                    {courseInfo.pg}
                </div>
            </div>

        </div>
        </div>
    </div>
   
  );
};

export default MainVideoPage;
