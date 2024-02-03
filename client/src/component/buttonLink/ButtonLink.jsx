import { Link } from "react-router-dom"
const ButtonLink = ({ to, children}) =>{
    return <Link to = {to}><button>{children}</button></Link>;
}