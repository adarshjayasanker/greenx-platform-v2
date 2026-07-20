import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Gallery from "../pages/public/Gallery";
import Testimonials from "../pages/public/Testimonials";
import Contact from "../pages/public/Contact";
import Notfound from "../pages/error/Notfound";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import AdminServices from "../pages/admin/AdminServices";
import AdminGallery from "../pages/admin/AdminGallery";
import AdminTestimonials from "../pages/admin/AdminTestimonials";
import Leads from "../pages/admin/Leads";
import Settings from "../pages/admin/Settings";
import ErrorPage from "../pages/error/ErrorPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route errorElement={<ErrorPage/>}>
                <Route path="/" element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="testimonials" element={<Testimonials/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>

                <Route path="/greenx-admin/login" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                </Route>

                <Route path="/greenx-admin" element={<AdminLayout/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="services" element={<AdminServices/>}/>
                    <Route path="gallery" element={<AdminGallery/>}/>
                    <Route path="testimonials" element={<AdminTestimonials/>}/>
                    <Route path="leads" element={<Leads/>}/>
                    <Route path="settings" element={<Settings/>}/>
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