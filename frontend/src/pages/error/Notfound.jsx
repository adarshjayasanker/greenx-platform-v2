import { Link } from "react-router-dom";

const Notfound = () => {
    return(
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="mt-4">The page you're looking for doesn't exist.</p>
                <Link to='/' className="inline-block mt-8 rounded bg-green-600 px-6 py-3 text-white">Back to Home</Link>
            </div>
        </main>
    )
}; 

export default Notfound;