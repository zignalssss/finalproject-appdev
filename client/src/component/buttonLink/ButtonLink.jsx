import { Link } from "react-router-dom"
const ButtonLink = ({ to, children,tailwind}) =>{
    return <Link to = {to}><button className={tailwind}>{children}</button></Link>;
}
export default ButtonLink;