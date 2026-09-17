import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Contact from "../pages/public/Contact";
import Notfound from "../pages/error/Notfound";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";
import ServiceDetail from "../pages/public/ServiceDetail";
import RootLayout from "../layouts/RootLayout";
import RequireAuth from "./RequireAuth";
import Enquiries from "../pages/admin/Enquiries";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<RootLayout/>} errorElement={<ErrorPage/>}>
                <Route path="/" element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="services/:slug" element = {<ServiceDetail/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>

                <Route path="/greenx-admin/login" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                </Route>

                <Route path="/greenx-admin" element={<RequireAuth/>}>
                    <Route element={<AdminLayout/>}>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="enquiries" element={<Enquiries/>}/>
                    </Route>
                </Route>

                <Route path="*" element={<Notfound/>}/>
            </Route>
        </>
    )
);

const AppRouter = () => {
    return <RouterProvider router={router}/>
};

export default AppRouter;