import {Menu, X} from "lucide-react";
import { Button } from "../../../../components/ui/button";

const MobileMenuButton = ({isOpen, onToggle}) => {
    return(
        <Button type="button" variant="ghost" size="icon" onClick={onToggle} className="md:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={24}/> : <Menu size={24}/>}</Button>
    )
};

export default MobileMenuButton;