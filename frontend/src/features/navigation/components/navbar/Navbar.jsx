import Container from "@/components/ui/container"

import AppLogo from "../appLogo/AppLogo";
import DesktopNav from "../desktopNav/DesktopNav";
import NavigationActions from "../navigationActions/NavigationActions";
import MobileMenuButton from "../mobileMenuButton/MobileMenuButton";
import MobileNav from "../mobileNav/MobileNav";

import { navigationItems } from "../../config/navigation.config";
import { navigationActions } from "../../config/navigation-actions.config";

import useMobileMenu from "../../hooks/useMobileMenu";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
    const {pathname} = useLocation();
    const {isOpen, closeMenu, toggleMenu} = useMobileMenu();
    useEffect(() => {
        closeMenu();
    }, [pathname, closeMenu]);
    return(
        <header className="sticky top-0 z-50 border-b border-(--color-border) bg-white">
            <Container>
                <div className="grid h-20 grid-cols-[auto_1fr_auto] items-center">
                    <AppLogo/>
                    
                    <div className="hidden md:flex justify-center px-8 lg:px-12 xl:px-16">
                        <DesktopNav items={navigationItems}/>
                    </div>

                    <div className="hidden md:flex justify-end">
                        <NavigationActions actions={navigationActions}/>
                    </div>
                    
                    <div className="flex justify-end md:hidden">
                        <MobileMenuButton isOpen={isOpen} onToggle={toggleMenu}/>
                    </div>
                    
                </div>
            </Container>
            <MobileNav isOpen={isOpen} items={navigationItems} actions={navigationActions} onNavigate={toggleMenu}/>
        </header>
    )
};

export default Navbar;