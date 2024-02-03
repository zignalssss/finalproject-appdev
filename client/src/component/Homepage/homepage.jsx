import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Firstpage from "./firstpage";
import ContactUS from "./contactus";
import Newcourse from "./Newcourse";
import Navbar from "../Navbar/navbar"
export default function Homepage() {
  return (
    <>
        <Navbar/>
        <Firstpage/>
        <ContactUS/>
        <Newcourse/>
    </>
  );
}
