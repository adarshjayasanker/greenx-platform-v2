import {Outlet} from "react-router-dom";

import {Navbar} from "@/features/navigation"
import Footer from "../components/layout/Footer/Footer";
import FloatingButtons from "../components/common/FloatingButtons/FloatingButtons";


const PublicLayout = () => {
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            <FloatingButtons/>
        </>
    )
};

export default PublicLayout;