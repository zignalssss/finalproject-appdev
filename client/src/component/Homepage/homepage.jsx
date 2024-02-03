import Firstpage from "./firstpage";
import ContactUS from "./contactus";
import Newcourse from "./Newcourse";
import Navbar from "../Navbar/navbar"
import SignupView from "./signupview";
export default function Homepage() {
  return (
    <>
        <Navbar/>
        <Firstpage/>
        <ContactUS/>
        <Newcourse/>
        <SignupView/>
    </>
  );
}
