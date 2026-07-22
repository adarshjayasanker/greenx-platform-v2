import {Outlet} from "react-router-dom";

import {Navbar} from "@/features/navigation"
import FloatingButtons from "../components/common/FloatingButtons/FloatingButtons";
import Footer from "../features/footer/components/Footer";


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