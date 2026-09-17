import { Outlet } from "react-router-dom";
import ScrollToTop from "../routes/ScrollToTop";

const RootLayout = () => {
    return(
        <>
            <ScrollToTop/>
            <Outlet/>
        </>
    )
};

export default RootLayout;