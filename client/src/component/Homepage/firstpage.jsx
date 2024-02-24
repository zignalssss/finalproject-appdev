import { useEffect } from "react";
import { Typewriter, Cursor} from "react-simple-typewriter"
import AOS from "aos";
import "aos/dist/aos.css";

const Firstpage = () =>{
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
    return(
    <div className = "h-screen bg-no-repeat bg-cover bg-fixed bg-homepage-img-1 flex justify-center items-center">
        <div className=" text-white font-kanit" data-aos="fade-up">
            <div className=" flex flex-col text-center gap-y-5">
                <h2 className="text-1xl font-medium">แพลตฟอร์มคอร์สเรียนออนไลน์</h2>
                <h1 className="text-3xl font-bold">
                    &lt; Online Course for 
                    <Typewriter
                        words={[' Computer Engineering', ' All Time. Always', ' Nisit']}
                        loop={0}
                        cursor
                        cursorStyle='| '
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={3000}
                    /> 
                     /&gt;</h1>
                
                <h2 className="text-1xl font-medium">อัพสกิลความรู้เพื่อคุณโดยเฉพาะ</h2>
            </div>
        </div>
    </div>
    )
}
export default Firstpage;