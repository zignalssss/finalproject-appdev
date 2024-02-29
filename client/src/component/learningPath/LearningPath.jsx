import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AfterNav from "../Navbar/afternavbar";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import Navbar from "../Navbar/navbar"

const LearningPath = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
    return(
        <>
            <AfterNav/>
            <div className=" bg-gradient-to-r from-gray-900 to-zinc-800 flex flex-col justify-center items-center text-white font-kanit" data-aos="fade-up">
                <h1 className="underline underline-offset-8 text-bold text-lg md:text-2xl text-bold m-5">
                    Web Development
                </h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">Here.</time>
                        <div className="text-lg font-black">HTML CSS</div>
                            <div className=" mt-5 flex-col">
                                <div className=" mt-5 flex flex-row justify-end gap-x-5">
                                    <span className="text-3xl"><FaHtml5/></span>
                                    <span className="text-3xl"><FaCss3Alt/></span>
                                </div>
                                <p className="text-lg">HTML and CSS are the backbone of web development, shaping the structure and style of websites. Understanding these languages is key to creating visually appealing and well-structured web pages.</p>
                            </div>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">.Then</time>
                        <div className="text-lg font-black">Javascript</div>
                            <div className=" mt-5 flex flex-col gap-x-5">
                                <span className="text-3xl"><IoLogoJavascript/></span>
                                <p className ="text-lg">JavaScript, a dynamic scripting language, empowers web developers to create interactive and responsive web applications with ease. Its versatility and extensive ecosystem make it indispensable for modern web development.</p>
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
                        <div className="text-lg font-black">React CSS Framework</div>
                            <div className=" mt-5 flex-col gap-x-5">
                                    <div className=" mt-5 flex flex-row justify-end gap-x-5">
                                        <span className="text-3xl"><FaReact/></span>
                                        <span className="text-3xl"><SiTailwindcss/></span>
                                    </div>
                                    <p className="text-lg">Tailwind CSS, a React CSS framework, streamlines web development by offering utility-first classes for rapid styling. Its modular approach empowers developers to create sleek and customizable user interfaces with ease.</p>
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
                        <div className="text-lg font-black">Database</div>
                            <div className=" mt-5 flex-col gap-x-5">
                                    <div className=" mt-5 flex flex-row justify-start gap-x-5">
                                        <span className="text-3xl"><DiMongodb/></span>
                                        <span className="text-3xl"><SiMysql/></span>
                                    </div>
                                    <p className ="text-lg">MongoDB and MySQL are widely used databases offering distinct advantages. MongoDB, a NoSQL database, excels in flexibility and scalability, while MySQL, a relational database, provides robust transaction support and data integrity. Choosing between them depends on specific project requirements and preferences.</p>
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
                        <div className="text-lg font-black">API Backend</div>
                            <div className=" mt-5 flex-col gap-x-5">
                                    <div className=" mt-5 flex flex-row justify-end gap-x-5">
                                        <span className="text-3xl"><SiExpress/></span>
                                        <span className="text-3xl"><SiPostman/></span>
                                    </div>
                                    <p className ="text-lg">Postman simplifies API testing with its user-friendly interface and robust features, ensuring reliable API endpoints. Express.js, a powerful Node.js framework, facilitates efficient backend development with its simplicity and flexibility, enabling rapid creation of scalable and secure web applications.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>       
    )
}
export default LearningPath;