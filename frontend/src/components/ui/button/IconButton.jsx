import clsx from "clsx";
import Button from "./Button";

const IconButton = ({children, className="", ...props}) => {
    return(
        <Button className={clsx("p-2", className)} {...props}>{children}</Button>
    )
};

export default IconButton;