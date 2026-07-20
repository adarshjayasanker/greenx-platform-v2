import BaseButton from "./BaseButton";

const AnchorButton = ({href, target, rel, ...props}) => {
    return(
        <BaseButton as="a" href={href} target={target} rel={rel} {...props} />
    )
};

export default AnchorButton;