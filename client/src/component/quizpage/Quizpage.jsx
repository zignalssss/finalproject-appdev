import LoadingSpinner from "../Loading/LoadingSpinner";
import { axiosInstance } from "../../lib/axios";
import { useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";
import AfterNav from "../Navbar/afternavbar";

const quizpage = () =>{
      const [userInfo,setUserInfo] = useState([])
      const [data,setCoursedata] = useState([])
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();
      const getUser = async()=>{
        try{
          const response = await axiosInstance.get("/api/user/verify")
          setUserInfo(response.data);
          setLoading(false);
        }catch(e){
          console.log(e);
          if(e.response.status === 500){
            navigate("/signin");
          }
        }
      }
      useEffect(()=>{
          getUser(); 
      },[])
      
      if (loading) {
            return <LoadingSpinner/>;
      }
      
      return(
            <>
            <AfterNav userObj={userInfo} />
            <div className="flex justify-center items-center w-screen h-screen bg-cover bg-login_imge">
                  <form className="bg-slate-700 p-12 rounded-[60px] bg-opacity-40 shadow-5xl border-white border-t-2 border-l-2 border-opacity-20 backdrop-filter w-2/6 h-1/1">
                        <div className="flex justify-center text-white text-[50px] font-kanit ">QUIZ</div>                       
                        <div className="flex justify-center text-white text-[40px] font-kanit ">what time??</div>
                        <div className="text-black flex flex-col gap-y-5 items-center mt-6">
                              <button className= 'btn bg-white rounded-ms w-[350px] border-none hover:text-white hover:bg-cyan-500 hover:shadow-cyan-500 hover:text-base/[3px] hover:scale-105 duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]'>1.</button>
                              <button className= 'mt-2 btn bg-white rounded-ms w-[350px] border-none hover:text-white hover:bg-cyan-500 hover:shadow-cyan-500 hover:text-base/[5px] hover:scale-105 duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]'>2.</button>
                              <button className= 'mt-2 btn bg-white rounded-ms w-[350px] border-none hover:text-white hover:bg-cyan-500 hover:shadow-cyan-500 hover:text-base/[5px] hover:scale-105 duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]'>3.</button>
                              <button className= 'mt-2 btn bg-white rounded-ms w-[350px] border-none hover:text-white hover:bg-cyan-500 hover:shadow-cyan-500 hover:text-base/[5px] hover:scale-105 duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]'>4.</button>
                        </div>
                  </form>
            </div>
            </>
      );
};
export default quizpage;
