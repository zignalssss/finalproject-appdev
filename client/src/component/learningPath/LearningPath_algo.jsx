import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AfterNav from "../Navbar/afternavbar";
import { FaComputer } from "react-icons/fa6";
import { CiViewTable } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { SiMoleculer } from "react-icons/si";
import { axiosInstance } from "../../lib/axios";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { SiThealgorithms } from "react-icons/si";
import { TbMathAvg } from "react-icons/tb";
import ResponsiveNav from "../Navbar/responsivenav";

const TheoreticalCSLearningPath = () => {
    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            await axiosInstance.get("/api/user/verify")
                .then(response => {
                    setUserInfo(response)
                    setLoading(false);;
                })
        } catch (e) {
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
    const screenWidth = window.innerWidth;
    // Conditionally render the appropriate navbar based on screen width
    const NavbarComponent = screenWidth < 1300 ? ResponsiveNav : AfterNav;
    return (
        <>
            <NavbarComponent userObj={userInfo.data} />
            <div className=" bg-gradient-to-t from-stone-950 via-gray-800 from-80% to-gray-800 flex flex-col justify-center items-center text-white font-kanit" >
                <h1 data-aos="fade-down" className="underline underline-offset-8 text-bold text-lg md:text-2xl text-bold m-5">
                    Theoretical Computer Science Learning Path
                </h1>
                <div data-aos="fade-up">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">Here.</time>
                                <div className="text-lg font-black">Discrete Mathematics</div>
                                <div className=" mt-5 flex-col">
                                    <div className=" mt-5 flex flex-row justify-end gap-x-5 ">
                                        <span className="text-3xl"><TbMathAvg /></span>
                                    </div>
                                    <p className="text-lg">Discrete mathematics forms the foundation of theoretical
                                        computer science. Concepts like sets, logic, and graph
                                        theory are essential for understanding algorithms,
                                        computation, and complexity.</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">.Then</time>
                                <div className="text-lg font-black">Theory of Computation</div>
                                <div className=" mt-5 flex flex-col gap-x-5">
                                    <span className="text-3xl"><FaComputer /></span>
                                    <p className="text-lg">The theory of computation studies the fundamental
                                        capabilities and limitations of computers. It covers topics
                                        like automata theory, formal languages, and computability
                                        theory, providing insights into the nature of computation.</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">Then.</time>
                                <div className="text-lg font-black">Data Structures</div>
                                <div className=" mt-5 flex-col gap-x-5">
                                    <div className=" mt-5 flex flex-row justify-end gap-x-5">
                                        <span className="text-3xl"><CiViewTable /></span>
                                        <span className="text-3xl"><FaLink /></span>
                                        <span className="text-3xl"><HiMiniSquare3Stack3D /></span>
                                    </div>
                                    <p className="text-lg">Data structures are essential for organizing and managing
                                        data efficiently. Concepts like trees, graphs, and heaps are
                                        fundamental for designing algorithms and solving complex
                                        computational problems.</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">.Then</time>
                                <div className="text-lg font-black">Algorithms</div>
                                <div className=" mt-5 flex-col gap-x-5">
                                    <div className=" mt-5 flex flex-row justify-start gap-x-5">
                                        <span className="text-3xl"><SiThealgorithms /></span>

                                    </div>
                                    <p className="text-lg">Algorithms are the heart of computer science, providing
                                        step-by-step procedures for problem-solving. Studying
                                        algorithms helps students analyze and optimize computational
                                        processes.</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <li >
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic">Then.</time>
                                <div className="text-lg font-black">Advanced Topics</div>
                                <div className=" mt-5 flex-col gap-x-5">
                                    <div className=" mt-5 flex flex-row justify-end gap-x-5">
                                        <span className="text-3xl"><SiMoleculer /></span>
                                    </div>
                                    <p className="text-lg">Delve into advanced topics like complexity theory,
                                        cryptography, and computational geometry to explore
                                        cutting-edge research areas within theoretical computer
                                        science.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default TheoreticalCSLearningPath;