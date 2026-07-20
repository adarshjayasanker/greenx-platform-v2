import { useCallback, useEffect, useState } from "react"

const useMobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
        return() => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    useEffect(() => {
        if(!isOpen) return;
        const handleKeyDown = (event) => {
            if(event.key === "Escape"){
                closeMenu();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return() => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, closeMenu]);

    return{
        isOpen, openMenu, closeMenu, toggleMenu,
    }
    
};

export default useMobileMenu;