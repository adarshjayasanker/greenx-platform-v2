import ButtonBase from "./BaseButton";

const Button = ({type = "button", disabled = false, loading = false, children, ...props}) => {
    return(
        <ButtonBase as = "button" type={type} disabled={disabled || loading} className="disabled:cursor-not-allowed disabled:opacity-50" {...props}>{loading ? "Loading..." : children}</ButtonBase>
    )
};

export default Button;