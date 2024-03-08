import React, { useEffect, useState } from "react";
import { Player } from "video-react";
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import AfterNav from "../Navbar/afternavbar";
import LoadingSpinner from "../Loading/LoadingSpinner";

const MainVideoPage = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo,setUserInfo] = useState([])

  const getUser = async()=>{
    try{
      const response = await axiosInstance.get("/api/user/verify")
      const courseDataByID = awiat axiosInstance.get("/api/course")
      setUserInfo(response.data);
      setVideoData(true)
      setLoading(false);
    }catch(e){
      console.log(e);
    }
  }
//   const fetchVideoData = async () => {
//     try {
//       const response = await axiosInstance.get(`/videos/${id}`);
//       setVideoData(response.data);
//     } catch (error) {
//       console.error("Error fetching video data:", error);
//     }
//   };
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
        <div className="bg-cover h-screen bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit flex py-40 mx-auto px-24">
        <div className="w-full">
            <h3 className="text-xl font-semibold mb-4">Related Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Render related videos here */}
            {/* Example: */}
            <div className="aspect-w-16 aspect-h-9">
                <ReactPlayer controls={true} url ={"https://www.youtube.com/watch?v=0X6tR7P6kZw&list=RD0X6tR7P6kZw&start_radio=1"} height={500} width={850} volume={0.1}/>
            </div>
            </div>


        </div>
        </div>
    </div>
   
  );
};

export default MainVideoPage;
