import clsx from 'clsx';

const sizes = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-7xl",
    full: "max-w-full",
};

const Container = ({as: Component = "div", size = "xl", className = "", children}) => {
    const containerSize = sizes[size] || sizes.xl;
    return(
        <Component className={clsx("mx-auto w-full px-4 sm:px-6 lg:px-8", containerSize, className)}>{children}</Component>
    )
};

export default Container;