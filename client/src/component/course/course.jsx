import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

export default function Card({course_id,altname, courseName, pg, img,point}) {
    const IsClick = () =>{

    }
    return (
        <div className="card bg-[#2d313b] text-wihte  shadow-xl shadow-zinc-700 mx-auto max-w-md">
            <figure>
                <img className="w-full " src={img} alt={altname} />
            </figure>
            <div className="card-body p-3 ml-2">
                <h2 className="card-title text-lg md:text-xl font-bold ">{courseName}</h2>
                <p className="text-sm md:text-base">{pg}</p>
                <div className="card-actions justify-end mb-2">
                    <button className="btn w-24 mr-4 bg-cyan-500 shadow-md shadow-cyan-500/50 border-none transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:text-base/[5px]">
                        <h3 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                            View
                        </h3>
                    </button>
                </div>
            </div>
        </div>
    );
}
