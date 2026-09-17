import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useState } from "react";

const LoginForm = () => {

    const {login} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const from = location.state?.from?.pathname || "/greenx-admin/dashboard";

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async(event) => {

        event.preventDefault();

        setError("");
        setIsSubmitting(true);

        try{
            await login(formData);
            navigate(from, {replace: true});
        }catch(error){
            setError(error?.message || "Unable to sign in. Please check your credentials.");
        }finally{
            setIsSubmitting(false);
        };
    };

    return(
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div>
                <h1 className="text-2xl font-semibold">Greenx Admin</h1>
                <p className="mt-2 text-sm text-gray-600">Sign in to manage your website.</p>
            </div>
            {error && (
                <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>
            )}
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black" />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" value={formData.password} onChange={handleChange} required disabled={isSubmitting} className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50">
                {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
        </form>
    )

};

export default LoginForm;