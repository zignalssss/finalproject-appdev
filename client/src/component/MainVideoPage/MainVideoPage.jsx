import { axiosInstance } from "../../lib/axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
const MainVideoPage = ()=>{
    const { id } = useParams();
    return(
        <div className="bg-cover h-screen bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 text-white font-kanit flex py-40 justify-center mx-auto px-24">
            <div data-aos="fade-up">
          

            </div>
        </div>
    )
}
export default MainVideoPage;