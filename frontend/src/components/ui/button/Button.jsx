import BaseButton from "./BaseButton";

const Button = ({type = "button", disabled = false, loading = false, children, ...props}) => {
    return(
        <BaseButton as = "button" type={type} disabled={disabled || loading} {...props}>{loading ? "Loading..." : children}</BaseButton>
    )
};

export default Button;