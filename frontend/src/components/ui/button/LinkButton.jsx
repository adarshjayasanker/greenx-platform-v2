import { Link } from "react-router-dom"
import BaseButton from "./BaseButton";

const LinkButton = ({to, ...props}) => {
    return(
        <BaseButton as={Link} to={to} {...props}/>
    )
};

export default LinkButton;