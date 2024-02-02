import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Firstpage from "./firstpage";
import ContactUS from "./contactus";
import Newcourse from "./Newcourse";
import Card from "../course/card";
import Navbar from "../Navbar/navbar"
export default function Homepage() {
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
  return (
    <>
        <Navbar/>
        <Firstpage/>
        <ContactUS/>
        <Newcourse/>
    </>
  );
}
